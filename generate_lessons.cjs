const fs = require('fs');

const phrases = [
  {
    title: "Hello",
    english: "Hello, how are you?",
    translations: {
      "eng-hindi": { t: "नमस्ते, आप कैसे हैं?", p: "Namaste, aap kaise hain?" },
      "eng-marathi": { t: "नमस्कार, तुम्ही कसे आहात?", p: "Namaskar, tumhi kase aahat?" },
      "eng-kannada": { t: "ನಮಸ್ಕಾರ, ನೀವು ಹೇಗಿದ್ದೀರಿ?", p: "Namaskara, neevu hegiddiri?" },
      "eng-telugu": { t: "నమస్కారం, మీరు ఎలా ఉన్నారు?", p: "Namaskaram, meeru ela unnaru?" },
      "eng-tamil": { t: "வணக்கம், நீங்கள் எப்படி இருக்கிறீர்கள்?", p: "Vanakkam, neengal eppadi irukkireergal?" }
    }
  },
  {
    title: "I am fine",
    english: "I am fine, thank you.",
    translations: {
      "eng-hindi": { t: "मैं ठीक हूँ, धन्यवाद।", p: "Main theek hoon, dhanyavad." },
      "eng-marathi": { t: "मी ठीक आहे, धन्यवाद.", p: "Mi theek aahe, dhanyavad." },
      "eng-kannada": { t: "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ, ಧನ್ಯವಾದಗಳು.", p: "Naanu chennagiddene, dhanyavadagalu." },
      "eng-telugu": { t: "నేను బాగున్నాను, ధన్యవాదాలు.", p: "Nenu bagunnanu, dhanyavadalu." },
      "eng-tamil": { t: "நான் நன்றாக இருக்கிறேன், நன்றி.", p: "Naan nandraaga irukkiren, nandri." }
    }
  },
  {
    title: "Name",
    english: "What is your name?",
    translations: {
      "eng-hindi": { t: "आपका नाम क्या है?", p: "Aapka naam kya hai?" },
      "eng-marathi": { t: "तुमचं नाव काय आहे?", p: "Tumcha naav kay aahe?" },
      "eng-kannada": { t: "ನಿಮ್ಮ ಹೆಸರೇನು?", p: "Nimma hesarenu?" },
      "eng-telugu": { t: "మీ పేరు ఏమిటి?", p: "Mee peru emiti?" },
      "eng-tamil": { t: "உங்கள் பெயர் என்ன?", p: "Ungal peyar enna?" }
    }
  },
  {
    title: "My name",
    english: "My name is Prajwal.",
    translations: {
      "eng-hindi": { t: "मेरा नाम प्रज्वल है।", p: "Mera naam Prajwal hai." },
      "eng-marathi": { t: "माझं नाव प्रज्वल आहे.", p: "Mazha naav Prajwal aahe." },
      "eng-kannada": { t: "ನನ್ನ ಹೆಸರು ಪ್ರಜ್ವಲ್.", p: "Nanna hesaru Prajwal." },
      "eng-telugu": { t: "నా పేరు ప్రజ్వల్.", p: "Naa peru Prajwal." },
      "eng-tamil": { t: "என் பெயர் பிரஜ்வல்.", p: "En peyar Prajwal." }
    }
  },
  {
    title: "Nice to meet",
    english: "Nice to meet you.",
    translations: {
      "eng-hindi": { t: "आपसे मिलकर अच्छा लगा।", p: "Aapse milkar achha laga." },
      "eng-marathi": { t: "तुम्हाला भेटून आनंद झाला.", p: "Tumhala bhetun anand jhala." },
      "eng-kannada": { t: "ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿದ್ದು ಸಂತೋಷವಾಯಿತು.", p: "Nimmannu bhetiyagiddu santoshavayitu." },
      "eng-telugu": { t: "మిమ్మల్ని కలవడం సంతోషంగా ఉంది.", p: "Mimmalni kalavadam santoshanga undi." },
      "eng-tamil": { t: "உங்களை சந்தித்ததில் மகிழ்ச்சி.", p: "Ungalai santhithathil magizhchi." }
    }
  },
  {
    title: "Where is",
    english: "Where is the train station?",
    translations: {
      "eng-hindi": { t: "रेलवे स्टेशन कहाँ है?", p: "Railway station kahan hai?" },
      "eng-marathi": { t: "रेल्वे स्टेशन कुठे आहे?", p: "Railway station kuthe aahe?" },
      "eng-kannada": { t: "ರೈಲು ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?", p: "Railu nildana ellide?" },
      "eng-telugu": { t: "రైల్వే స్టేషన్ ఎక్కడ ఉంది?", p: "Railway station ekkada undi?" },
      "eng-tamil": { t: "ரயில் நிலையம் எங்கே இருக்கிறது?", p: "Rayil nilayam enge irukkirathu?" }
    }
  },
  {
    title: "Help",
    english: "Can you help me?",
    translations: {
      "eng-hindi": { t: "क्या आप मेरी मदद कर सकते हैं?", p: "Kya aap meri madad kar sakte hain?" },
      "eng-marathi": { t: "तुम्ही मला मदत करू शकता का?", p: "Tumhi mala madat karu shakta ka?" },
      "eng-kannada": { t: "ನೀವು ನನಗೆ ಸಹಾಯ ಮಾಡಬಹುದೇ?", p: "Neevu nanage sahaya madabahude?" },
      "eng-telugu": { t: "మీరు నాకు సహాయం చేయగలరా?", p: "Meeru naaku sahayam cheyagalara?" },
      "eng-tamil": { t: "எனக்கு உதவி செய்ய முடியுமா?", p: "Enakku udhavi seyya mudiyuma?" }
    }
  },
  {
    title: "Hungry",
    english: "I am hungry.",
    translations: {
      "eng-hindi": { t: "मुझे भूख लगी है।", p: "Mujhe bhookh lagi hai." },
      "eng-marathi": { t: "मला भूक लागली आहे.", p: "Mala bhook lagli aahe." },
      "eng-kannada": { t: "ನನಗೆ ಹಸಿವಾಗಿದೆ.", p: "Nanage hasivagide." },
      "eng-telugu": { t: "నాకు ఆకలిగా ఉంది.", p: "Naaku aakaliga undi." },
      "eng-tamil": { t: "எனக்கு பசிக்கிறது.", p: "Enakku pasikkirathu." }
    }
  },
  {
    title: "Water",
    english: "Please give me some water.",
    translations: {
      "eng-hindi": { t: "कृपया मुझे थोड़ा पानी दें।", p: "Kripya mujhe thoda paani dein." },
      "eng-marathi": { t: "कृपया मला थोडे पाणी द्या.", p: "Krupaya mala thode paani dya." },
      "eng-kannada": { t: "ದಯವಿಟ್ಟು ನನಗೆ ಸ್ವಲ್ಪ ನೀರು ಕೊಡಿ.", p: "Dayavittu nanage svalpa neeru kodi." },
      "eng-telugu": { t: "దయచేసి నాకు కొంచెం నీరు ఇవ్వండి.", p: "Dayachesi naaku konchem neeru ivvandi." },
      "eng-tamil": { t: "தயவுசெய்து எனக்கு கொஞ்சம் தண்ணீர் கொடுங்கள்.", p: "Thayavuseythu enakku konjam thanneer kodungal." }
    }
  },
  {
    title: "Price",
    english: "What is the price?",
    translations: {
      "eng-hindi": { t: "इसकी कीमत क्या है?", p: "Iski keemat kya hai?" },
      "eng-marathi": { t: "याची किंमत काय आहे?", p: "Yachi kimmat kay aahe?" },
      "eng-kannada": { t: "ಇದರ ಬೆಲೆ ಏನು?", p: "Idara bele enu?" },
      "eng-telugu": { t: "దీని ధర ఎంత?", p: "Deeni dhara entha?" },
      "eng-tamil": { t: "இதன் விலை என்ன?", p: "Ithan vilai enna?" }
    }
  }
];

const chaptersMeta = [
  { title: "Chapter 1: Basics & Greetings", description: "Start your journey with everyday greetings" },
  { title: "Chapter 2: Travel & Directions", description: "Navigate your way around" },
  { title: "Chapter 3: Food & Dining", description: "Order food and talk about meals" },
  { title: "Chapter 4: Shopping & Money", description: "Buy things and handle money" },
  { title: "Chapter 5: Emergency & Help", description: "Crucial phrases for emergencies" },
  { title: "Chapter 6: Time & Dates", description: "Learn to tell time and dates" },
  { title: "Chapter 7: Family & Friends", description: "Talk about your loved ones" },
  { title: "Chapter 8: Work & School", description: "Phrases for professional settings" },
  { title: "Chapter 9: Health & Body", description: "Describe how you feel" },
  { title: "Chapter 10: Weather & Nature", description: "Talk about the environment" }
];

const shlokasChapters = [
  {
    title: "Chapter 1: Morning Prayers",
    description: "Start your day with positive energy",
    lessons: [
      { title: "Ganesha", target: "Vakratunda Mahakaya Suryakoti Samaprabha Nirvighnam Kuru Me Deva Sarva Karyeshu Sarvada" },
      { title: "Guru", target: "Gurur Brahma Gurur Vishnu Gurur Devo Maheshwaraha Guru Saakshaat Para Brahma Tasmai Shri Gurave Namaha" },
      { title: "Saraswati", target: "Saraswati Namastubhyam Varade Kamarupini Vidyarambham Karishyami Siddhir Bhavatu Me Sada" },
      { title: "Peace", target: "Om Dyauha Shantihi Antariksham Shantihi Prithvi Shantihi Aapaha Shantihi Roshadhayaha Shantihi Vanaspatayaha Shantihi Vishwedevaha Shantihi Brahma Shantihi Sarvam Shantihi Shantireva Shantihi Sa Ma Shanti Redhi Om Shanti Shanti Shantihi" },
      { title: "Light", target: "Asato Ma Sadgamaya Tamaso Ma Jyotirgamaya Mrityorma Amritam Gamaya Om Shanti Shanti Shantihi" }
    ]
  },
  {
    title: "Chapter 2: Evening Prayers",
    description: "End your day with gratitude",
    lessons: [
      { title: "Shiva", target: "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam Urvarukamiva Bandhanan Mrityormukshiya Maamritat" },
      { title: "Krishna", target: "Vasudeva Sutam Devam Kamsa Chanura Mardanam Devaki Paramanandam Krishnam Vande Jagadgurum" },
      { title: "Rama", target: "Sri Rama Rama Rameti Rame Rame Manorame Sahasranama Tattulyam Rama Nama Varanane" },
      { title: "Hanuman", target: "Manojavam Marutatulyavegam Jitendriyam Buddhimatam Varishtam Vatatmajam Vanarayuthamukhyam Sriramadutam Sharanam Prapadye" },
      { title: "Devi", target: "Sarva Mangala Mangalye Shive Sarvartha Sadhike Sharanye Tryambake Gauri Narayani Namostute" }
    ]
  }
];

const languages = [
  { id: "eng-hindi", title: "English → Hindi", subtitle: "NORTH INDIA" },
  { id: "eng-marathi", title: "English → Marathi", subtitle: "MAHARASHTRA" },
  { id: "eng-kannada", title: "English → Kannada", subtitle: "KARNATAKA" },
  { id: "eng-telugu", title: "English → Telugu", subtitle: "ANDHRA & TELANGANA" },
  { id: "eng-tamil", title: "English → Tamil", subtitle: "TAMIL NADU" }
];

const modules = [];

languages.forEach((lang) => {
  const mod = {
    id: lang.id,
    title: lang.title,
    subtitle: lang.subtitle,
    chapters: []
  };
    
  chaptersMeta.forEach((chapter, chapIndex) => {
    const cNum = chapIndex + 1;
    const chap = {
      id: lang.id + "-c" + cNum,
      title: chapter.title,
      description: chapter.description,
      lessons: []
    };
        
    for(let i = 0; i < 10; i++) {
      const phrase = phrases[i];
      const transData = phrase.translations[lang.id];
      const lNum = i + 1;
      
      chap.lessons.push({
        id: lang.id + "-c" + cNum + "-l" + lNum,
        title: phrase.title + " " + cNum,
        description: phrase.english,
        targetSentence: transData.t,
        translation: phrase.english,
        phonetics: transData.p
      });
    }
    
    mod.chapters.push(chap);
  });
  
  modules.push(mod);
});

// Add Shlokas
const shlokasMod = {
  id: "shlokas",
  title: "Sanskrit Shlokas",
  subtitle: "SPIRITUAL",
  chapters: []
};
    
shlokasChapters.forEach((chapter, chapIndex) => {
  const cNum = chapIndex + 1;
  const chap = {
    id: "shlokas-c" + cNum,
    title: chapter.title,
    description: chapter.description,
    lessons: []
  };
        
  chapter.lessons.forEach((lesson, lessIndex) => {
    const lNum = lessIndex + 1;
    chap.lessons.push({
      id: "shlokas-c" + cNum + "-l" + lNum,
      title: lesson.title,
      description: lesson.target,
      targetSentence: lesson.target,
      translation: lesson.target,
      phonetics: ""
    });
  });
  
  shlokasMod.chapters.push(chap);
});

modules.push(shlokasMod);

const fileContent = "export interface Lesson {\n" +
  "  id: string;\n" +
  "  title: string;\n" +
  "  description: string;\n" +
  "  targetSentence: string;\n" +
  "  translation: string;\n" +
  "  phonetics: string;\n" +
  "}\n\n" +
  "export interface Chapter {\n" +
  "  id: string;\n" +
  "  title: string;\n" +
  "  description: string;\n" +
  "  lessons: Lesson[];\n" +
  "}\n\n" +
  "export interface Module {\n" +
  "  id: string;\n" +
  "  title: string;\n" +
  "  subtitle: string;\n" +
  "  chapters: Chapter[];\n" +
  "}\n\n" +
  "export const modules: Module[] = " + JSON.stringify(modules, null, 2) + ";\n";

fs.writeFileSync('src/data/lessons.ts', fileContent);
console.log('Generated lessons.ts successfully!');
