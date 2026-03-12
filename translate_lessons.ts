import { GoogleGenAI, Type } from "@google/genai";
import * as fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  console.log("Reading lessons.ts...");
  const content = fs.readFileSync('./src/data/lessons.ts', 'utf-8');
  
  // Extract the modules array string
  const modulesMatch = content.match(/export const modules: Module\[\] = (\[[\s\S]*\]);/);
  if (!modulesMatch) {
    console.error("Could not find modules array");
    return;
  }
  
  const modulesString = modulesMatch[1];
  const modules = eval(modulesString);
  
  console.log("Extracting base sentences...");
  const baseModule = modules[0];
  const baseSentences = [];
  
  baseModule.chapters.forEach(chapter => {
    chapter.lessons.forEach(lesson => {
      baseSentences.push({
        title: lesson.title,
        description: lesson.description,
        english: lesson.translation
      });
    });
  });

  console.log(`Extracted ${baseSentences.length} sentences.`);

  const languages = [
    { id: "eng-hindi", name: "Hindi" },
    { id: "eng-marathi", name: "Marathi" },
    { id: "eng-kannada", name: "Kannada" },
    { id: "eng-telugu", name: "Telugu" },
    { id: "eng-tamil", name: "Tamil" }
  ];

  const translations = {};

  for (const lang of languages) {
    console.log(`Translating to ${lang.name}...`);
    translations[lang.id] = [];
    
    // Batch size of 20
    for (let i = 0; i < baseSentences.length; i += 20) {
      const batch = baseSentences.slice(i, i + 20);
      const prompt = `Translate the following English sentences into ${lang.name}. Provide the translation in the native script, and the pronunciation (phonetics) in English letters.
      
      Sentences:
      ${JSON.stringify(batch.map(b => b.english), null, 2)}
      `;
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                translation: { type: Type.STRING, description: `The translation in ${lang.name} script` },
                phonetics: { type: Type.STRING, description: `The pronunciation in English letters` }
              },
              required: ["translation", "phonetics"]
            }
          }
        }
      });
      
      const result = JSON.parse(response.text.trim());
      translations[lang.id].push(...result);
      console.log(`  Translated batch ${i / 20 + 1}/${Math.ceil(baseSentences.length / 20)}`);
    }
  }

  console.log("Updating modules...");
  
  modules.forEach(module => {
    if (module.id === 'shlokas') return;
    
    const langTranslations = translations[module.id];
    if (!langTranslations) return;
    
    let globalIndex = 0;
    module.chapters.forEach(chapter => {
      chapter.lessons.forEach(lesson => {
        const trans = langTranslations[globalIndex];
        if (trans) {
          lesson.targetSentence = trans.translation;
          lesson.phonetics = trans.phonetics;
        }
        globalIndex++;
      });
    });
  });

  console.log("Writing to file...");
  
  const fileContent = `export interface Lesson {
  id: string;
  title: string;
  description: string;
  targetSentence: string;
  translation: string;
  phonetics: string;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Module {
  id: string;
  title: string;
  subtitle: string;
  chapters: Chapter[];
}

export const modules: Module[] = ${JSON.stringify(modules, null, 2)};
`;

  fs.writeFileSync('./src/data/lessons.ts', fileContent);
  console.log("Done!");
}

run().catch(console.error);
