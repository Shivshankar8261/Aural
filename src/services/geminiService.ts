import { GoogleGenAI, Modality, Type } from '@google/genai';

const speechCache: Record<string, string> = {};

export const geminiService = {
  async generateSpeech(text: string, moduleId?: string): Promise<string> {
    const cacheKey = `${moduleId || 'default'}_${text}`;
    if (speechCache[cacheKey]) {
      return speechCache[cacheKey];
    }

    const apiKey = process.env.GEMINI_API_KEY || '';
    if (!apiKey) {
      throw new Error("Gemini API key is missing. Please check your environment variables.");
    }
    const ai = new GoogleGenAI({ apiKey });

    let promptText = `Say this text clearly and naturally at a normal, conversational speed: ${text}`;
    if (moduleId === 'shlokas') {
      promptText = `Recite this text clearly and melodiously with a traditional ancient Indian accent, like a sage or priest, at a normal pace: ${text}`;
    }

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-preview-tts',
        contents: [{ parts: [{ text: promptText }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        speechCache[cacheKey] = base64Audio;
        return base64Audio;
      }
      throw new Error("No audio data received from the server. Please try again.");
    } catch (e: any) {
      console.error('Gemini TTS error:', e);
      const errorMessage = e?.message || "An unexpected error occurred during speech generation. Please try again later.";
      throw new Error(`Speech generation failed: ${errorMessage}`);
    }
  },

  async evaluatePronunciation(audioBase64: string, targetText: string, mimeType: string = 'audio/webm') {
    const apiKey = process.env.GEMINI_API_KEY || '';
    if (!apiKey) return null;
    const ai = new GoogleGenAI({ apiKey });
    try {
      // Clean base64 string if it has data URI prefix
      const base64Data = audioBase64.split(',')[1] || audioBase64;

      const cleanMimeType = mimeType.split(';')[0] || 'audio/webm';

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: {
          parts: [
            {
              inlineData: {
                mimeType: cleanMimeType,
                data: base64Data,
              },
            },
            {
              text: `You are a language pronunciation coach. The user was supposed to say: "${targetText}".
Listen to the audio and evaluate their pronunciation.
Return a JSON object with the following structure exactly:
{
  "score": <overall score between 0 and 100>,
  "accuracy": <accuracy score between 0 and 100>,
  "fluency": <fluency score between 0 and 100>,
  "pronunciation": <pronunciation score between 0 and 100>,
  "recognizedText": "<what the user actually said>",
  "weakWord": "<the word they struggled with most, or null if perfect>",
  "feedback": "<one short, simple sentence of encouraging feedback>"
}`,
            },
          ],
        },
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              score: { type: Type.INTEGER, description: "Overall score between 0 and 100" },
              accuracy: { type: Type.INTEGER, description: "Accuracy score between 0 and 100" },
              fluency: { type: Type.INTEGER, description: "Fluency score between 0 and 100" },
              pronunciation: { type: Type.INTEGER, description: "Pronunciation score between 0 and 100" },
              recognizedText: { type: Type.STRING, description: "What the user actually said" },
              weakWord: { type: Type.STRING, description: "The word they struggled with most, or empty string if perfect" },
              feedback: { type: Type.STRING, description: "One short, simple sentence of encouraging feedback" }
            },
            required: ["score", "accuracy", "fluency", "pronunciation", "recognizedText", "feedback", "weakWord"]
          }
        },
      });

      let text = response.text;
      if (text) {
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(text);
      }
      return null;
    } catch (e) {
      console.error('Gemini Pronunciation Evaluation error:', e);
      return null;
    }
  },

  async generateKidFriendlyExplanation(targetSentence: string, translation: string): Promise<{ fact: string; icon: string }> {
    const apiKey = process.env.GEMINI_API_KEY || '';
    if (!apiKey) return { fact: "Learning is fun!", icon: "🌟" };

    const cacheKey = `explanation_${targetSentence}`;
    if (speechCache[cacheKey]) {
      return JSON.parse(speechCache[cacheKey]);
    }

    const ai = new GoogleGenAI({ apiKey });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: {
          parts: [{
            text: `You are a friendly cartoon cat teacher explaining a sentence to a 6-year-old child.
The sentence is: "${targetSentence}" (which means "${translation}").
Provide one very short, fun, kid-friendly fact or explanation about this phrase or a word in it.
Also provide a single matching emoji as an icon.
Return exactly this JSON:
{
  "fact": "<the fun fact>",
  "icon": "<single emoji>"
}`
          }]
        },
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              fact: { type: Type.STRING },
              icon: { type: Type.STRING }
            },
            required: ["fact", "icon"]
          }
        }
      });

      let text = response.text;
      if (text) {
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        speechCache[cacheKey] = text;
        return JSON.parse(text);
      }
      return { fact: "Learning is fun!", icon: "🌟" };
    } catch (e) {
      console.error('Gemini Explanation error:', e);
      return { fact: "Keep up the great work learning new words!", icon: "🐱" };
    }
  }
};
