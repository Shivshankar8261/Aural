export interface Lesson {
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

export const modules: Module[] = [
  {
    "id": "eng-hindi",
    "title": "English → Hindi",
    "subtitle": "NORTH INDIA",
    "chapters": [
      {
        "id": "eng-hindi-c1",
        "title": "Chapter 1: Basics & Greetings",
        "description": "Start your journey with everyday greetings",
        "lessons": [
          {
            "id": "eng-hindi-c1-l1",
            "title": "Hello 1",
            "description": "Hello, how are you?",
            "targetSentence": "नमस्ते, आप कैसे हैं?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaste, aap kaise hain?"
          },
          {
            "id": "eng-hindi-c1-l2",
            "title": "I am fine 1",
            "description": "I am fine, thank you.",
            "targetSentence": "मैं ठीक हूँ, धन्यवाद।",
            "translation": "I am fine, thank you.",
            "phonetics": "Main theek hoon, dhanyavad."
          },
          {
            "id": "eng-hindi-c1-l3",
            "title": "Name 1",
            "description": "What is your name?",
            "targetSentence": "आपका नाम क्या है?",
            "translation": "What is your name?",
            "phonetics": "Aapka naam kya hai?"
          },
          {
            "id": "eng-hindi-c1-l4",
            "title": "My name 1",
            "description": "My name is Prajwal.",
            "targetSentence": "मेरा नाम प्रज्वल है।",
            "translation": "My name is Prajwal.",
            "phonetics": "Mera naam Prajwal hai."
          },
          {
            "id": "eng-hindi-c1-l5",
            "title": "Nice to meet 1",
            "description": "Nice to meet you.",
            "targetSentence": "आपसे मिलकर अच्छा लगा।",
            "translation": "Nice to meet you.",
            "phonetics": "Aapse milkar achha laga."
          },
          {
            "id": "eng-hindi-c1-l6",
            "title": "Where is 1",
            "description": "Where is the train station?",
            "targetSentence": "रेलवे स्टेशन कहाँ है?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station kahan hai?"
          },
          {
            "id": "eng-hindi-c1-l7",
            "title": "Help 1",
            "description": "Can you help me?",
            "targetSentence": "क्या आप मेरी मदद कर सकते हैं?",
            "translation": "Can you help me?",
            "phonetics": "Kya aap meri madad kar sakte hain?"
          },
          {
            "id": "eng-hindi-c1-l8",
            "title": "Hungry 1",
            "description": "I am hungry.",
            "targetSentence": "मुझे भूख लगी है।",
            "translation": "I am hungry.",
            "phonetics": "Mujhe bhookh lagi hai."
          },
          {
            "id": "eng-hindi-c1-l9",
            "title": "Water 1",
            "description": "Please give me some water.",
            "targetSentence": "कृपया मुझे थोड़ा पानी दें।",
            "translation": "Please give me some water.",
            "phonetics": "Kripya mujhe thoda paani dein."
          },
          {
            "id": "eng-hindi-c1-l10",
            "title": "Price 1",
            "description": "What is the price?",
            "targetSentence": "इसकी कीमत क्या है?",
            "translation": "What is the price?",
            "phonetics": "Iski keemat kya hai?"
          }
        ]
      },
      {
        "id": "eng-hindi-c2",
        "title": "Chapter 2: Travel & Directions",
        "description": "Navigate your way around",
        "lessons": [
          {
            "id": "eng-hindi-c2-l1",
            "title": "Hello 2",
            "description": "Hello, how are you?",
            "targetSentence": "नमस्ते, आप कैसे हैं?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaste, aap kaise hain?"
          },
          {
            "id": "eng-hindi-c2-l2",
            "title": "I am fine 2",
            "description": "I am fine, thank you.",
            "targetSentence": "मैं ठीक हूँ, धन्यवाद।",
            "translation": "I am fine, thank you.",
            "phonetics": "Main theek hoon, dhanyavad."
          },
          {
            "id": "eng-hindi-c2-l3",
            "title": "Name 2",
            "description": "What is your name?",
            "targetSentence": "आपका नाम क्या है?",
            "translation": "What is your name?",
            "phonetics": "Aapka naam kya hai?"
          },
          {
            "id": "eng-hindi-c2-l4",
            "title": "My name 2",
            "description": "My name is Prajwal.",
            "targetSentence": "मेरा नाम प्रज्वल है।",
            "translation": "My name is Prajwal.",
            "phonetics": "Mera naam Prajwal hai."
          },
          {
            "id": "eng-hindi-c2-l5",
            "title": "Nice to meet 2",
            "description": "Nice to meet you.",
            "targetSentence": "आपसे मिलकर अच्छा लगा।",
            "translation": "Nice to meet you.",
            "phonetics": "Aapse milkar achha laga."
          },
          {
            "id": "eng-hindi-c2-l6",
            "title": "Where is 2",
            "description": "Where is the train station?",
            "targetSentence": "रेलवे स्टेशन कहाँ है?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station kahan hai?"
          },
          {
            "id": "eng-hindi-c2-l7",
            "title": "Help 2",
            "description": "Can you help me?",
            "targetSentence": "क्या आप मेरी मदद कर सकते हैं?",
            "translation": "Can you help me?",
            "phonetics": "Kya aap meri madad kar sakte hain?"
          },
          {
            "id": "eng-hindi-c2-l8",
            "title": "Hungry 2",
            "description": "I am hungry.",
            "targetSentence": "मुझे भूख लगी है।",
            "translation": "I am hungry.",
            "phonetics": "Mujhe bhookh lagi hai."
          },
          {
            "id": "eng-hindi-c2-l9",
            "title": "Water 2",
            "description": "Please give me some water.",
            "targetSentence": "कृपया मुझे थोड़ा पानी दें।",
            "translation": "Please give me some water.",
            "phonetics": "Kripya mujhe thoda paani dein."
          },
          {
            "id": "eng-hindi-c2-l10",
            "title": "Price 2",
            "description": "What is the price?",
            "targetSentence": "इसकी कीमत क्या है?",
            "translation": "What is the price?",
            "phonetics": "Iski keemat kya hai?"
          }
        ]
      },
      {
        "id": "eng-hindi-c3",
        "title": "Chapter 3: Food & Dining",
        "description": "Order food and talk about meals",
        "lessons": [
          {
            "id": "eng-hindi-c3-l1",
            "title": "Hello 3",
            "description": "Hello, how are you?",
            "targetSentence": "नमस्ते, आप कैसे हैं?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaste, aap kaise hain?"
          },
          {
            "id": "eng-hindi-c3-l2",
            "title": "I am fine 3",
            "description": "I am fine, thank you.",
            "targetSentence": "मैं ठीक हूँ, धन्यवाद।",
            "translation": "I am fine, thank you.",
            "phonetics": "Main theek hoon, dhanyavad."
          },
          {
            "id": "eng-hindi-c3-l3",
            "title": "Name 3",
            "description": "What is your name?",
            "targetSentence": "आपका नाम क्या है?",
            "translation": "What is your name?",
            "phonetics": "Aapka naam kya hai?"
          },
          {
            "id": "eng-hindi-c3-l4",
            "title": "My name 3",
            "description": "My name is Prajwal.",
            "targetSentence": "मेरा नाम प्रज्वल है।",
            "translation": "My name is Prajwal.",
            "phonetics": "Mera naam Prajwal hai."
          },
          {
            "id": "eng-hindi-c3-l5",
            "title": "Nice to meet 3",
            "description": "Nice to meet you.",
            "targetSentence": "आपसे मिलकर अच्छा लगा।",
            "translation": "Nice to meet you.",
            "phonetics": "Aapse milkar achha laga."
          },
          {
            "id": "eng-hindi-c3-l6",
            "title": "Where is 3",
            "description": "Where is the train station?",
            "targetSentence": "रेलवे स्टेशन कहाँ है?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station kahan hai?"
          },
          {
            "id": "eng-hindi-c3-l7",
            "title": "Help 3",
            "description": "Can you help me?",
            "targetSentence": "क्या आप मेरी मदद कर सकते हैं?",
            "translation": "Can you help me?",
            "phonetics": "Kya aap meri madad kar sakte hain?"
          },
          {
            "id": "eng-hindi-c3-l8",
            "title": "Hungry 3",
            "description": "I am hungry.",
            "targetSentence": "मुझे भूख लगी है।",
            "translation": "I am hungry.",
            "phonetics": "Mujhe bhookh lagi hai."
          },
          {
            "id": "eng-hindi-c3-l9",
            "title": "Water 3",
            "description": "Please give me some water.",
            "targetSentence": "कृपया मुझे थोड़ा पानी दें।",
            "translation": "Please give me some water.",
            "phonetics": "Kripya mujhe thoda paani dein."
          },
          {
            "id": "eng-hindi-c3-l10",
            "title": "Price 3",
            "description": "What is the price?",
            "targetSentence": "इसकी कीमत क्या है?",
            "translation": "What is the price?",
            "phonetics": "Iski keemat kya hai?"
          }
        ]
      },
      {
        "id": "eng-hindi-c4",
        "title": "Chapter 4: Shopping & Money",
        "description": "Buy things and handle money",
        "lessons": [
          {
            "id": "eng-hindi-c4-l1",
            "title": "Hello 4",
            "description": "Hello, how are you?",
            "targetSentence": "नमस्ते, आप कैसे हैं?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaste, aap kaise hain?"
          },
          {
            "id": "eng-hindi-c4-l2",
            "title": "I am fine 4",
            "description": "I am fine, thank you.",
            "targetSentence": "मैं ठीक हूँ, धन्यवाद।",
            "translation": "I am fine, thank you.",
            "phonetics": "Main theek hoon, dhanyavad."
          },
          {
            "id": "eng-hindi-c4-l3",
            "title": "Name 4",
            "description": "What is your name?",
            "targetSentence": "आपका नाम क्या है?",
            "translation": "What is your name?",
            "phonetics": "Aapka naam kya hai?"
          },
          {
            "id": "eng-hindi-c4-l4",
            "title": "My name 4",
            "description": "My name is Prajwal.",
            "targetSentence": "मेरा नाम प्रज्वल है।",
            "translation": "My name is Prajwal.",
            "phonetics": "Mera naam Prajwal hai."
          },
          {
            "id": "eng-hindi-c4-l5",
            "title": "Nice to meet 4",
            "description": "Nice to meet you.",
            "targetSentence": "आपसे मिलकर अच्छा लगा।",
            "translation": "Nice to meet you.",
            "phonetics": "Aapse milkar achha laga."
          },
          {
            "id": "eng-hindi-c4-l6",
            "title": "Where is 4",
            "description": "Where is the train station?",
            "targetSentence": "रेलवे स्टेशन कहाँ है?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station kahan hai?"
          },
          {
            "id": "eng-hindi-c4-l7",
            "title": "Help 4",
            "description": "Can you help me?",
            "targetSentence": "क्या आप मेरी मदद कर सकते हैं?",
            "translation": "Can you help me?",
            "phonetics": "Kya aap meri madad kar sakte hain?"
          },
          {
            "id": "eng-hindi-c4-l8",
            "title": "Hungry 4",
            "description": "I am hungry.",
            "targetSentence": "मुझे भूख लगी है।",
            "translation": "I am hungry.",
            "phonetics": "Mujhe bhookh lagi hai."
          },
          {
            "id": "eng-hindi-c4-l9",
            "title": "Water 4",
            "description": "Please give me some water.",
            "targetSentence": "कृपया मुझे थोड़ा पानी दें।",
            "translation": "Please give me some water.",
            "phonetics": "Kripya mujhe thoda paani dein."
          },
          {
            "id": "eng-hindi-c4-l10",
            "title": "Price 4",
            "description": "What is the price?",
            "targetSentence": "इसकी कीमत क्या है?",
            "translation": "What is the price?",
            "phonetics": "Iski keemat kya hai?"
          }
        ]
      },
      {
        "id": "eng-hindi-c5",
        "title": "Chapter 5: Emergency & Help",
        "description": "Crucial phrases for emergencies",
        "lessons": [
          {
            "id": "eng-hindi-c5-l1",
            "title": "Hello 5",
            "description": "Hello, how are you?",
            "targetSentence": "नमस्ते, आप कैसे हैं?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaste, aap kaise hain?"
          },
          {
            "id": "eng-hindi-c5-l2",
            "title": "I am fine 5",
            "description": "I am fine, thank you.",
            "targetSentence": "मैं ठीक हूँ, धन्यवाद।",
            "translation": "I am fine, thank you.",
            "phonetics": "Main theek hoon, dhanyavad."
          },
          {
            "id": "eng-hindi-c5-l3",
            "title": "Name 5",
            "description": "What is your name?",
            "targetSentence": "आपका नाम क्या है?",
            "translation": "What is your name?",
            "phonetics": "Aapka naam kya hai?"
          },
          {
            "id": "eng-hindi-c5-l4",
            "title": "My name 5",
            "description": "My name is Prajwal.",
            "targetSentence": "मेरा नाम प्रज्वल है।",
            "translation": "My name is Prajwal.",
            "phonetics": "Mera naam Prajwal hai."
          },
          {
            "id": "eng-hindi-c5-l5",
            "title": "Nice to meet 5",
            "description": "Nice to meet you.",
            "targetSentence": "आपसे मिलकर अच्छा लगा।",
            "translation": "Nice to meet you.",
            "phonetics": "Aapse milkar achha laga."
          },
          {
            "id": "eng-hindi-c5-l6",
            "title": "Where is 5",
            "description": "Where is the train station?",
            "targetSentence": "रेलवे स्टेशन कहाँ है?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station kahan hai?"
          },
          {
            "id": "eng-hindi-c5-l7",
            "title": "Help 5",
            "description": "Can you help me?",
            "targetSentence": "क्या आप मेरी मदद कर सकते हैं?",
            "translation": "Can you help me?",
            "phonetics": "Kya aap meri madad kar sakte hain?"
          },
          {
            "id": "eng-hindi-c5-l8",
            "title": "Hungry 5",
            "description": "I am hungry.",
            "targetSentence": "मुझे भूख लगी है।",
            "translation": "I am hungry.",
            "phonetics": "Mujhe bhookh lagi hai."
          },
          {
            "id": "eng-hindi-c5-l9",
            "title": "Water 5",
            "description": "Please give me some water.",
            "targetSentence": "कृपया मुझे थोड़ा पानी दें।",
            "translation": "Please give me some water.",
            "phonetics": "Kripya mujhe thoda paani dein."
          },
          {
            "id": "eng-hindi-c5-l10",
            "title": "Price 5",
            "description": "What is the price?",
            "targetSentence": "इसकी कीमत क्या है?",
            "translation": "What is the price?",
            "phonetics": "Iski keemat kya hai?"
          }
        ]
      },
      {
        "id": "eng-hindi-c6",
        "title": "Chapter 6: Time & Dates",
        "description": "Learn to tell time and dates",
        "lessons": [
          {
            "id": "eng-hindi-c6-l1",
            "title": "Hello 6",
            "description": "Hello, how are you?",
            "targetSentence": "नमस्ते, आप कैसे हैं?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaste, aap kaise hain?"
          },
          {
            "id": "eng-hindi-c6-l2",
            "title": "I am fine 6",
            "description": "I am fine, thank you.",
            "targetSentence": "मैं ठीक हूँ, धन्यवाद।",
            "translation": "I am fine, thank you.",
            "phonetics": "Main theek hoon, dhanyavad."
          },
          {
            "id": "eng-hindi-c6-l3",
            "title": "Name 6",
            "description": "What is your name?",
            "targetSentence": "आपका नाम क्या है?",
            "translation": "What is your name?",
            "phonetics": "Aapka naam kya hai?"
          },
          {
            "id": "eng-hindi-c6-l4",
            "title": "My name 6",
            "description": "My name is Prajwal.",
            "targetSentence": "मेरा नाम प्रज्वल है।",
            "translation": "My name is Prajwal.",
            "phonetics": "Mera naam Prajwal hai."
          },
          {
            "id": "eng-hindi-c6-l5",
            "title": "Nice to meet 6",
            "description": "Nice to meet you.",
            "targetSentence": "आपसे मिलकर अच्छा लगा।",
            "translation": "Nice to meet you.",
            "phonetics": "Aapse milkar achha laga."
          },
          {
            "id": "eng-hindi-c6-l6",
            "title": "Where is 6",
            "description": "Where is the train station?",
            "targetSentence": "रेलवे स्टेशन कहाँ है?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station kahan hai?"
          },
          {
            "id": "eng-hindi-c6-l7",
            "title": "Help 6",
            "description": "Can you help me?",
            "targetSentence": "क्या आप मेरी मदद कर सकते हैं?",
            "translation": "Can you help me?",
            "phonetics": "Kya aap meri madad kar sakte hain?"
          },
          {
            "id": "eng-hindi-c6-l8",
            "title": "Hungry 6",
            "description": "I am hungry.",
            "targetSentence": "मुझे भूख लगी है।",
            "translation": "I am hungry.",
            "phonetics": "Mujhe bhookh lagi hai."
          },
          {
            "id": "eng-hindi-c6-l9",
            "title": "Water 6",
            "description": "Please give me some water.",
            "targetSentence": "कृपया मुझे थोड़ा पानी दें।",
            "translation": "Please give me some water.",
            "phonetics": "Kripya mujhe thoda paani dein."
          },
          {
            "id": "eng-hindi-c6-l10",
            "title": "Price 6",
            "description": "What is the price?",
            "targetSentence": "इसकी कीमत क्या है?",
            "translation": "What is the price?",
            "phonetics": "Iski keemat kya hai?"
          }
        ]
      },
      {
        "id": "eng-hindi-c7",
        "title": "Chapter 7: Family & Friends",
        "description": "Talk about your loved ones",
        "lessons": [
          {
            "id": "eng-hindi-c7-l1",
            "title": "Hello 7",
            "description": "Hello, how are you?",
            "targetSentence": "नमस्ते, आप कैसे हैं?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaste, aap kaise hain?"
          },
          {
            "id": "eng-hindi-c7-l2",
            "title": "I am fine 7",
            "description": "I am fine, thank you.",
            "targetSentence": "मैं ठीक हूँ, धन्यवाद।",
            "translation": "I am fine, thank you.",
            "phonetics": "Main theek hoon, dhanyavad."
          },
          {
            "id": "eng-hindi-c7-l3",
            "title": "Name 7",
            "description": "What is your name?",
            "targetSentence": "आपका नाम क्या है?",
            "translation": "What is your name?",
            "phonetics": "Aapka naam kya hai?"
          },
          {
            "id": "eng-hindi-c7-l4",
            "title": "My name 7",
            "description": "My name is Prajwal.",
            "targetSentence": "मेरा नाम प्रज्वल है।",
            "translation": "My name is Prajwal.",
            "phonetics": "Mera naam Prajwal hai."
          },
          {
            "id": "eng-hindi-c7-l5",
            "title": "Nice to meet 7",
            "description": "Nice to meet you.",
            "targetSentence": "आपसे मिलकर अच्छा लगा।",
            "translation": "Nice to meet you.",
            "phonetics": "Aapse milkar achha laga."
          },
          {
            "id": "eng-hindi-c7-l6",
            "title": "Where is 7",
            "description": "Where is the train station?",
            "targetSentence": "रेलवे स्टेशन कहाँ है?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station kahan hai?"
          },
          {
            "id": "eng-hindi-c7-l7",
            "title": "Help 7",
            "description": "Can you help me?",
            "targetSentence": "क्या आप मेरी मदद कर सकते हैं?",
            "translation": "Can you help me?",
            "phonetics": "Kya aap meri madad kar sakte hain?"
          },
          {
            "id": "eng-hindi-c7-l8",
            "title": "Hungry 7",
            "description": "I am hungry.",
            "targetSentence": "मुझे भूख लगी है।",
            "translation": "I am hungry.",
            "phonetics": "Mujhe bhookh lagi hai."
          },
          {
            "id": "eng-hindi-c7-l9",
            "title": "Water 7",
            "description": "Please give me some water.",
            "targetSentence": "कृपया मुझे थोड़ा पानी दें।",
            "translation": "Please give me some water.",
            "phonetics": "Kripya mujhe thoda paani dein."
          },
          {
            "id": "eng-hindi-c7-l10",
            "title": "Price 7",
            "description": "What is the price?",
            "targetSentence": "इसकी कीमत क्या है?",
            "translation": "What is the price?",
            "phonetics": "Iski keemat kya hai?"
          }
        ]
      },
      {
        "id": "eng-hindi-c8",
        "title": "Chapter 8: Work & School",
        "description": "Phrases for professional settings",
        "lessons": [
          {
            "id": "eng-hindi-c8-l1",
            "title": "Hello 8",
            "description": "Hello, how are you?",
            "targetSentence": "नमस्ते, आप कैसे हैं?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaste, aap kaise hain?"
          },
          {
            "id": "eng-hindi-c8-l2",
            "title": "I am fine 8",
            "description": "I am fine, thank you.",
            "targetSentence": "मैं ठीक हूँ, धन्यवाद।",
            "translation": "I am fine, thank you.",
            "phonetics": "Main theek hoon, dhanyavad."
          },
          {
            "id": "eng-hindi-c8-l3",
            "title": "Name 8",
            "description": "What is your name?",
            "targetSentence": "आपका नाम क्या है?",
            "translation": "What is your name?",
            "phonetics": "Aapka naam kya hai?"
          },
          {
            "id": "eng-hindi-c8-l4",
            "title": "My name 8",
            "description": "My name is Prajwal.",
            "targetSentence": "मेरा नाम प्रज्वल है।",
            "translation": "My name is Prajwal.",
            "phonetics": "Mera naam Prajwal hai."
          },
          {
            "id": "eng-hindi-c8-l5",
            "title": "Nice to meet 8",
            "description": "Nice to meet you.",
            "targetSentence": "आपसे मिलकर अच्छा लगा।",
            "translation": "Nice to meet you.",
            "phonetics": "Aapse milkar achha laga."
          },
          {
            "id": "eng-hindi-c8-l6",
            "title": "Where is 8",
            "description": "Where is the train station?",
            "targetSentence": "रेलवे स्टेशन कहाँ है?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station kahan hai?"
          },
          {
            "id": "eng-hindi-c8-l7",
            "title": "Help 8",
            "description": "Can you help me?",
            "targetSentence": "क्या आप मेरी मदद कर सकते हैं?",
            "translation": "Can you help me?",
            "phonetics": "Kya aap meri madad kar sakte hain?"
          },
          {
            "id": "eng-hindi-c8-l8",
            "title": "Hungry 8",
            "description": "I am hungry.",
            "targetSentence": "मुझे भूख लगी है।",
            "translation": "I am hungry.",
            "phonetics": "Mujhe bhookh lagi hai."
          },
          {
            "id": "eng-hindi-c8-l9",
            "title": "Water 8",
            "description": "Please give me some water.",
            "targetSentence": "कृपया मुझे थोड़ा पानी दें।",
            "translation": "Please give me some water.",
            "phonetics": "Kripya mujhe thoda paani dein."
          },
          {
            "id": "eng-hindi-c8-l10",
            "title": "Price 8",
            "description": "What is the price?",
            "targetSentence": "इसकी कीमत क्या है?",
            "translation": "What is the price?",
            "phonetics": "Iski keemat kya hai?"
          }
        ]
      },
      {
        "id": "eng-hindi-c9",
        "title": "Chapter 9: Health & Body",
        "description": "Describe how you feel",
        "lessons": [
          {
            "id": "eng-hindi-c9-l1",
            "title": "Hello 9",
            "description": "Hello, how are you?",
            "targetSentence": "नमस्ते, आप कैसे हैं?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaste, aap kaise hain?"
          },
          {
            "id": "eng-hindi-c9-l2",
            "title": "I am fine 9",
            "description": "I am fine, thank you.",
            "targetSentence": "मैं ठीक हूँ, धन्यवाद।",
            "translation": "I am fine, thank you.",
            "phonetics": "Main theek hoon, dhanyavad."
          },
          {
            "id": "eng-hindi-c9-l3",
            "title": "Name 9",
            "description": "What is your name?",
            "targetSentence": "आपका नाम क्या है?",
            "translation": "What is your name?",
            "phonetics": "Aapka naam kya hai?"
          },
          {
            "id": "eng-hindi-c9-l4",
            "title": "My name 9",
            "description": "My name is Prajwal.",
            "targetSentence": "मेरा नाम प्रज्वल है।",
            "translation": "My name is Prajwal.",
            "phonetics": "Mera naam Prajwal hai."
          },
          {
            "id": "eng-hindi-c9-l5",
            "title": "Nice to meet 9",
            "description": "Nice to meet you.",
            "targetSentence": "आपसे मिलकर अच्छा लगा।",
            "translation": "Nice to meet you.",
            "phonetics": "Aapse milkar achha laga."
          },
          {
            "id": "eng-hindi-c9-l6",
            "title": "Where is 9",
            "description": "Where is the train station?",
            "targetSentence": "रेलवे स्टेशन कहाँ है?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station kahan hai?"
          },
          {
            "id": "eng-hindi-c9-l7",
            "title": "Help 9",
            "description": "Can you help me?",
            "targetSentence": "क्या आप मेरी मदद कर सकते हैं?",
            "translation": "Can you help me?",
            "phonetics": "Kya aap meri madad kar sakte hain?"
          },
          {
            "id": "eng-hindi-c9-l8",
            "title": "Hungry 9",
            "description": "I am hungry.",
            "targetSentence": "मुझे भूख लगी है।",
            "translation": "I am hungry.",
            "phonetics": "Mujhe bhookh lagi hai."
          },
          {
            "id": "eng-hindi-c9-l9",
            "title": "Water 9",
            "description": "Please give me some water.",
            "targetSentence": "कृपया मुझे थोड़ा पानी दें।",
            "translation": "Please give me some water.",
            "phonetics": "Kripya mujhe thoda paani dein."
          },
          {
            "id": "eng-hindi-c9-l10",
            "title": "Price 9",
            "description": "What is the price?",
            "targetSentence": "इसकी कीमत क्या है?",
            "translation": "What is the price?",
            "phonetics": "Iski keemat kya hai?"
          }
        ]
      },
      {
        "id": "eng-hindi-c10",
        "title": "Chapter 10: Weather & Nature",
        "description": "Talk about the environment",
        "lessons": [
          {
            "id": "eng-hindi-c10-l1",
            "title": "Hello 10",
            "description": "Hello, how are you?",
            "targetSentence": "नमस्ते, आप कैसे हैं?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaste, aap kaise hain?"
          },
          {
            "id": "eng-hindi-c10-l2",
            "title": "I am fine 10",
            "description": "I am fine, thank you.",
            "targetSentence": "मैं ठीक हूँ, धन्यवाद।",
            "translation": "I am fine, thank you.",
            "phonetics": "Main theek hoon, dhanyavad."
          },
          {
            "id": "eng-hindi-c10-l3",
            "title": "Name 10",
            "description": "What is your name?",
            "targetSentence": "आपका नाम क्या है?",
            "translation": "What is your name?",
            "phonetics": "Aapka naam kya hai?"
          },
          {
            "id": "eng-hindi-c10-l4",
            "title": "My name 10",
            "description": "My name is Prajwal.",
            "targetSentence": "मेरा नाम प्रज्वल है।",
            "translation": "My name is Prajwal.",
            "phonetics": "Mera naam Prajwal hai."
          },
          {
            "id": "eng-hindi-c10-l5",
            "title": "Nice to meet 10",
            "description": "Nice to meet you.",
            "targetSentence": "आपसे मिलकर अच्छा लगा।",
            "translation": "Nice to meet you.",
            "phonetics": "Aapse milkar achha laga."
          },
          {
            "id": "eng-hindi-c10-l6",
            "title": "Where is 10",
            "description": "Where is the train station?",
            "targetSentence": "रेलवे स्टेशन कहाँ है?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station kahan hai?"
          },
          {
            "id": "eng-hindi-c10-l7",
            "title": "Help 10",
            "description": "Can you help me?",
            "targetSentence": "क्या आप मेरी मदद कर सकते हैं?",
            "translation": "Can you help me?",
            "phonetics": "Kya aap meri madad kar sakte hain?"
          },
          {
            "id": "eng-hindi-c10-l8",
            "title": "Hungry 10",
            "description": "I am hungry.",
            "targetSentence": "मुझे भूख लगी है।",
            "translation": "I am hungry.",
            "phonetics": "Mujhe bhookh lagi hai."
          },
          {
            "id": "eng-hindi-c10-l9",
            "title": "Water 10",
            "description": "Please give me some water.",
            "targetSentence": "कृपया मुझे थोड़ा पानी दें।",
            "translation": "Please give me some water.",
            "phonetics": "Kripya mujhe thoda paani dein."
          },
          {
            "id": "eng-hindi-c10-l10",
            "title": "Price 10",
            "description": "What is the price?",
            "targetSentence": "इसकी कीमत क्या है?",
            "translation": "What is the price?",
            "phonetics": "Iski keemat kya hai?"
          }
        ]
      }
    ]
  },
  {
    "id": "eng-marathi",
    "title": "English → Marathi",
    "subtitle": "MAHARASHTRA",
    "chapters": [
      {
        "id": "eng-marathi-c1",
        "title": "Chapter 1: Basics & Greetings",
        "description": "Start your journey with everyday greetings",
        "lessons": [
          {
            "id": "eng-marathi-c1-l1",
            "title": "Hello 1",
            "description": "Hello, how are you?",
            "targetSentence": "नमस्कार, तुम्ही कसे आहात?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskar, tumhi kase aahat?"
          },
          {
            "id": "eng-marathi-c1-l2",
            "title": "I am fine 1",
            "description": "I am fine, thank you.",
            "targetSentence": "मी ठीक आहे, धन्यवाद.",
            "translation": "I am fine, thank you.",
            "phonetics": "Mi theek aahe, dhanyavad."
          },
          {
            "id": "eng-marathi-c1-l3",
            "title": "Name 1",
            "description": "What is your name?",
            "targetSentence": "तुमचं नाव काय आहे?",
            "translation": "What is your name?",
            "phonetics": "Tumcha naav kay aahe?"
          },
          {
            "id": "eng-marathi-c1-l4",
            "title": "My name 1",
            "description": "My name is Prajwal.",
            "targetSentence": "माझं नाव प्रज्वल आहे.",
            "translation": "My name is Prajwal.",
            "phonetics": "Mazha naav Prajwal aahe."
          },
          {
            "id": "eng-marathi-c1-l5",
            "title": "Nice to meet 1",
            "description": "Nice to meet you.",
            "targetSentence": "तुम्हाला भेटून आनंद झाला.",
            "translation": "Nice to meet you.",
            "phonetics": "Tumhala bhetun anand jhala."
          },
          {
            "id": "eng-marathi-c1-l6",
            "title": "Where is 1",
            "description": "Where is the train station?",
            "targetSentence": "रेल्वे स्टेशन कुठे आहे?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station kuthe aahe?"
          },
          {
            "id": "eng-marathi-c1-l7",
            "title": "Help 1",
            "description": "Can you help me?",
            "targetSentence": "तुम्ही मला मदत करू शकता का?",
            "translation": "Can you help me?",
            "phonetics": "Tumhi mala madat karu shakta ka?"
          },
          {
            "id": "eng-marathi-c1-l8",
            "title": "Hungry 1",
            "description": "I am hungry.",
            "targetSentence": "मला भूक लागली आहे.",
            "translation": "I am hungry.",
            "phonetics": "Mala bhook lagli aahe."
          },
          {
            "id": "eng-marathi-c1-l9",
            "title": "Water 1",
            "description": "Please give me some water.",
            "targetSentence": "कृपया मला थोडे पाणी द्या.",
            "translation": "Please give me some water.",
            "phonetics": "Krupaya mala thode paani dya."
          },
          {
            "id": "eng-marathi-c1-l10",
            "title": "Price 1",
            "description": "What is the price?",
            "targetSentence": "याची किंमत काय आहे?",
            "translation": "What is the price?",
            "phonetics": "Yachi kimmat kay aahe?"
          }
        ]
      },
      {
        "id": "eng-marathi-c2",
        "title": "Chapter 2: Travel & Directions",
        "description": "Navigate your way around",
        "lessons": [
          {
            "id": "eng-marathi-c2-l1",
            "title": "Hello 2",
            "description": "Hello, how are you?",
            "targetSentence": "नमस्कार, तुम्ही कसे आहात?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskar, tumhi kase aahat?"
          },
          {
            "id": "eng-marathi-c2-l2",
            "title": "I am fine 2",
            "description": "I am fine, thank you.",
            "targetSentence": "मी ठीक आहे, धन्यवाद.",
            "translation": "I am fine, thank you.",
            "phonetics": "Mi theek aahe, dhanyavad."
          },
          {
            "id": "eng-marathi-c2-l3",
            "title": "Name 2",
            "description": "What is your name?",
            "targetSentence": "तुमचं नाव काय आहे?",
            "translation": "What is your name?",
            "phonetics": "Tumcha naav kay aahe?"
          },
          {
            "id": "eng-marathi-c2-l4",
            "title": "My name 2",
            "description": "My name is Prajwal.",
            "targetSentence": "माझं नाव प्रज्वल आहे.",
            "translation": "My name is Prajwal.",
            "phonetics": "Mazha naav Prajwal aahe."
          },
          {
            "id": "eng-marathi-c2-l5",
            "title": "Nice to meet 2",
            "description": "Nice to meet you.",
            "targetSentence": "तुम्हाला भेटून आनंद झाला.",
            "translation": "Nice to meet you.",
            "phonetics": "Tumhala bhetun anand jhala."
          },
          {
            "id": "eng-marathi-c2-l6",
            "title": "Where is 2",
            "description": "Where is the train station?",
            "targetSentence": "रेल्वे स्टेशन कुठे आहे?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station kuthe aahe?"
          },
          {
            "id": "eng-marathi-c2-l7",
            "title": "Help 2",
            "description": "Can you help me?",
            "targetSentence": "तुम्ही मला मदत करू शकता का?",
            "translation": "Can you help me?",
            "phonetics": "Tumhi mala madat karu shakta ka?"
          },
          {
            "id": "eng-marathi-c2-l8",
            "title": "Hungry 2",
            "description": "I am hungry.",
            "targetSentence": "मला भूक लागली आहे.",
            "translation": "I am hungry.",
            "phonetics": "Mala bhook lagli aahe."
          },
          {
            "id": "eng-marathi-c2-l9",
            "title": "Water 2",
            "description": "Please give me some water.",
            "targetSentence": "कृपया मला थोडे पाणी द्या.",
            "translation": "Please give me some water.",
            "phonetics": "Krupaya mala thode paani dya."
          },
          {
            "id": "eng-marathi-c2-l10",
            "title": "Price 2",
            "description": "What is the price?",
            "targetSentence": "याची किंमत काय आहे?",
            "translation": "What is the price?",
            "phonetics": "Yachi kimmat kay aahe?"
          }
        ]
      },
      {
        "id": "eng-marathi-c3",
        "title": "Chapter 3: Food & Dining",
        "description": "Order food and talk about meals",
        "lessons": [
          {
            "id": "eng-marathi-c3-l1",
            "title": "Hello 3",
            "description": "Hello, how are you?",
            "targetSentence": "नमस्कार, तुम्ही कसे आहात?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskar, tumhi kase aahat?"
          },
          {
            "id": "eng-marathi-c3-l2",
            "title": "I am fine 3",
            "description": "I am fine, thank you.",
            "targetSentence": "मी ठीक आहे, धन्यवाद.",
            "translation": "I am fine, thank you.",
            "phonetics": "Mi theek aahe, dhanyavad."
          },
          {
            "id": "eng-marathi-c3-l3",
            "title": "Name 3",
            "description": "What is your name?",
            "targetSentence": "तुमचं नाव काय आहे?",
            "translation": "What is your name?",
            "phonetics": "Tumcha naav kay aahe?"
          },
          {
            "id": "eng-marathi-c3-l4",
            "title": "My name 3",
            "description": "My name is Prajwal.",
            "targetSentence": "माझं नाव प्रज्वल आहे.",
            "translation": "My name is Prajwal.",
            "phonetics": "Mazha naav Prajwal aahe."
          },
          {
            "id": "eng-marathi-c3-l5",
            "title": "Nice to meet 3",
            "description": "Nice to meet you.",
            "targetSentence": "तुम्हाला भेटून आनंद झाला.",
            "translation": "Nice to meet you.",
            "phonetics": "Tumhala bhetun anand jhala."
          },
          {
            "id": "eng-marathi-c3-l6",
            "title": "Where is 3",
            "description": "Where is the train station?",
            "targetSentence": "रेल्वे स्टेशन कुठे आहे?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station kuthe aahe?"
          },
          {
            "id": "eng-marathi-c3-l7",
            "title": "Help 3",
            "description": "Can you help me?",
            "targetSentence": "तुम्ही मला मदत करू शकता का?",
            "translation": "Can you help me?",
            "phonetics": "Tumhi mala madat karu shakta ka?"
          },
          {
            "id": "eng-marathi-c3-l8",
            "title": "Hungry 3",
            "description": "I am hungry.",
            "targetSentence": "मला भूक लागली आहे.",
            "translation": "I am hungry.",
            "phonetics": "Mala bhook lagli aahe."
          },
          {
            "id": "eng-marathi-c3-l9",
            "title": "Water 3",
            "description": "Please give me some water.",
            "targetSentence": "कृपया मला थोडे पाणी द्या.",
            "translation": "Please give me some water.",
            "phonetics": "Krupaya mala thode paani dya."
          },
          {
            "id": "eng-marathi-c3-l10",
            "title": "Price 3",
            "description": "What is the price?",
            "targetSentence": "याची किंमत काय आहे?",
            "translation": "What is the price?",
            "phonetics": "Yachi kimmat kay aahe?"
          }
        ]
      },
      {
        "id": "eng-marathi-c4",
        "title": "Chapter 4: Shopping & Money",
        "description": "Buy things and handle money",
        "lessons": [
          {
            "id": "eng-marathi-c4-l1",
            "title": "Hello 4",
            "description": "Hello, how are you?",
            "targetSentence": "नमस्कार, तुम्ही कसे आहात?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskar, tumhi kase aahat?"
          },
          {
            "id": "eng-marathi-c4-l2",
            "title": "I am fine 4",
            "description": "I am fine, thank you.",
            "targetSentence": "मी ठीक आहे, धन्यवाद.",
            "translation": "I am fine, thank you.",
            "phonetics": "Mi theek aahe, dhanyavad."
          },
          {
            "id": "eng-marathi-c4-l3",
            "title": "Name 4",
            "description": "What is your name?",
            "targetSentence": "तुमचं नाव काय आहे?",
            "translation": "What is your name?",
            "phonetics": "Tumcha naav kay aahe?"
          },
          {
            "id": "eng-marathi-c4-l4",
            "title": "My name 4",
            "description": "My name is Prajwal.",
            "targetSentence": "माझं नाव प्रज्वल आहे.",
            "translation": "My name is Prajwal.",
            "phonetics": "Mazha naav Prajwal aahe."
          },
          {
            "id": "eng-marathi-c4-l5",
            "title": "Nice to meet 4",
            "description": "Nice to meet you.",
            "targetSentence": "तुम्हाला भेटून आनंद झाला.",
            "translation": "Nice to meet you.",
            "phonetics": "Tumhala bhetun anand jhala."
          },
          {
            "id": "eng-marathi-c4-l6",
            "title": "Where is 4",
            "description": "Where is the train station?",
            "targetSentence": "रेल्वे स्टेशन कुठे आहे?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station kuthe aahe?"
          },
          {
            "id": "eng-marathi-c4-l7",
            "title": "Help 4",
            "description": "Can you help me?",
            "targetSentence": "तुम्ही मला मदत करू शकता का?",
            "translation": "Can you help me?",
            "phonetics": "Tumhi mala madat karu shakta ka?"
          },
          {
            "id": "eng-marathi-c4-l8",
            "title": "Hungry 4",
            "description": "I am hungry.",
            "targetSentence": "मला भूक लागली आहे.",
            "translation": "I am hungry.",
            "phonetics": "Mala bhook lagli aahe."
          },
          {
            "id": "eng-marathi-c4-l9",
            "title": "Water 4",
            "description": "Please give me some water.",
            "targetSentence": "कृपया मला थोडे पाणी द्या.",
            "translation": "Please give me some water.",
            "phonetics": "Krupaya mala thode paani dya."
          },
          {
            "id": "eng-marathi-c4-l10",
            "title": "Price 4",
            "description": "What is the price?",
            "targetSentence": "याची किंमत काय आहे?",
            "translation": "What is the price?",
            "phonetics": "Yachi kimmat kay aahe?"
          }
        ]
      },
      {
        "id": "eng-marathi-c5",
        "title": "Chapter 5: Emergency & Help",
        "description": "Crucial phrases for emergencies",
        "lessons": [
          {
            "id": "eng-marathi-c5-l1",
            "title": "Hello 5",
            "description": "Hello, how are you?",
            "targetSentence": "नमस्कार, तुम्ही कसे आहात?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskar, tumhi kase aahat?"
          },
          {
            "id": "eng-marathi-c5-l2",
            "title": "I am fine 5",
            "description": "I am fine, thank you.",
            "targetSentence": "मी ठीक आहे, धन्यवाद.",
            "translation": "I am fine, thank you.",
            "phonetics": "Mi theek aahe, dhanyavad."
          },
          {
            "id": "eng-marathi-c5-l3",
            "title": "Name 5",
            "description": "What is your name?",
            "targetSentence": "तुमचं नाव काय आहे?",
            "translation": "What is your name?",
            "phonetics": "Tumcha naav kay aahe?"
          },
          {
            "id": "eng-marathi-c5-l4",
            "title": "My name 5",
            "description": "My name is Prajwal.",
            "targetSentence": "माझं नाव प्रज्वल आहे.",
            "translation": "My name is Prajwal.",
            "phonetics": "Mazha naav Prajwal aahe."
          },
          {
            "id": "eng-marathi-c5-l5",
            "title": "Nice to meet 5",
            "description": "Nice to meet you.",
            "targetSentence": "तुम्हाला भेटून आनंद झाला.",
            "translation": "Nice to meet you.",
            "phonetics": "Tumhala bhetun anand jhala."
          },
          {
            "id": "eng-marathi-c5-l6",
            "title": "Where is 5",
            "description": "Where is the train station?",
            "targetSentence": "रेल्वे स्टेशन कुठे आहे?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station kuthe aahe?"
          },
          {
            "id": "eng-marathi-c5-l7",
            "title": "Help 5",
            "description": "Can you help me?",
            "targetSentence": "तुम्ही मला मदत करू शकता का?",
            "translation": "Can you help me?",
            "phonetics": "Tumhi mala madat karu shakta ka?"
          },
          {
            "id": "eng-marathi-c5-l8",
            "title": "Hungry 5",
            "description": "I am hungry.",
            "targetSentence": "मला भूक लागली आहे.",
            "translation": "I am hungry.",
            "phonetics": "Mala bhook lagli aahe."
          },
          {
            "id": "eng-marathi-c5-l9",
            "title": "Water 5",
            "description": "Please give me some water.",
            "targetSentence": "कृपया मला थोडे पाणी द्या.",
            "translation": "Please give me some water.",
            "phonetics": "Krupaya mala thode paani dya."
          },
          {
            "id": "eng-marathi-c5-l10",
            "title": "Price 5",
            "description": "What is the price?",
            "targetSentence": "याची किंमत काय आहे?",
            "translation": "What is the price?",
            "phonetics": "Yachi kimmat kay aahe?"
          }
        ]
      },
      {
        "id": "eng-marathi-c6",
        "title": "Chapter 6: Time & Dates",
        "description": "Learn to tell time and dates",
        "lessons": [
          {
            "id": "eng-marathi-c6-l1",
            "title": "Hello 6",
            "description": "Hello, how are you?",
            "targetSentence": "नमस्कार, तुम्ही कसे आहात?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskar, tumhi kase aahat?"
          },
          {
            "id": "eng-marathi-c6-l2",
            "title": "I am fine 6",
            "description": "I am fine, thank you.",
            "targetSentence": "मी ठीक आहे, धन्यवाद.",
            "translation": "I am fine, thank you.",
            "phonetics": "Mi theek aahe, dhanyavad."
          },
          {
            "id": "eng-marathi-c6-l3",
            "title": "Name 6",
            "description": "What is your name?",
            "targetSentence": "तुमचं नाव काय आहे?",
            "translation": "What is your name?",
            "phonetics": "Tumcha naav kay aahe?"
          },
          {
            "id": "eng-marathi-c6-l4",
            "title": "My name 6",
            "description": "My name is Prajwal.",
            "targetSentence": "माझं नाव प्रज्वल आहे.",
            "translation": "My name is Prajwal.",
            "phonetics": "Mazha naav Prajwal aahe."
          },
          {
            "id": "eng-marathi-c6-l5",
            "title": "Nice to meet 6",
            "description": "Nice to meet you.",
            "targetSentence": "तुम्हाला भेटून आनंद झाला.",
            "translation": "Nice to meet you.",
            "phonetics": "Tumhala bhetun anand jhala."
          },
          {
            "id": "eng-marathi-c6-l6",
            "title": "Where is 6",
            "description": "Where is the train station?",
            "targetSentence": "रेल्वे स्टेशन कुठे आहे?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station kuthe aahe?"
          },
          {
            "id": "eng-marathi-c6-l7",
            "title": "Help 6",
            "description": "Can you help me?",
            "targetSentence": "तुम्ही मला मदत करू शकता का?",
            "translation": "Can you help me?",
            "phonetics": "Tumhi mala madat karu shakta ka?"
          },
          {
            "id": "eng-marathi-c6-l8",
            "title": "Hungry 6",
            "description": "I am hungry.",
            "targetSentence": "मला भूक लागली आहे.",
            "translation": "I am hungry.",
            "phonetics": "Mala bhook lagli aahe."
          },
          {
            "id": "eng-marathi-c6-l9",
            "title": "Water 6",
            "description": "Please give me some water.",
            "targetSentence": "कृपया मला थोडे पाणी द्या.",
            "translation": "Please give me some water.",
            "phonetics": "Krupaya mala thode paani dya."
          },
          {
            "id": "eng-marathi-c6-l10",
            "title": "Price 6",
            "description": "What is the price?",
            "targetSentence": "याची किंमत काय आहे?",
            "translation": "What is the price?",
            "phonetics": "Yachi kimmat kay aahe?"
          }
        ]
      },
      {
        "id": "eng-marathi-c7",
        "title": "Chapter 7: Family & Friends",
        "description": "Talk about your loved ones",
        "lessons": [
          {
            "id": "eng-marathi-c7-l1",
            "title": "Hello 7",
            "description": "Hello, how are you?",
            "targetSentence": "नमस्कार, तुम्ही कसे आहात?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskar, tumhi kase aahat?"
          },
          {
            "id": "eng-marathi-c7-l2",
            "title": "I am fine 7",
            "description": "I am fine, thank you.",
            "targetSentence": "मी ठीक आहे, धन्यवाद.",
            "translation": "I am fine, thank you.",
            "phonetics": "Mi theek aahe, dhanyavad."
          },
          {
            "id": "eng-marathi-c7-l3",
            "title": "Name 7",
            "description": "What is your name?",
            "targetSentence": "तुमचं नाव काय आहे?",
            "translation": "What is your name?",
            "phonetics": "Tumcha naav kay aahe?"
          },
          {
            "id": "eng-marathi-c7-l4",
            "title": "My name 7",
            "description": "My name is Prajwal.",
            "targetSentence": "माझं नाव प्रज्वल आहे.",
            "translation": "My name is Prajwal.",
            "phonetics": "Mazha naav Prajwal aahe."
          },
          {
            "id": "eng-marathi-c7-l5",
            "title": "Nice to meet 7",
            "description": "Nice to meet you.",
            "targetSentence": "तुम्हाला भेटून आनंद झाला.",
            "translation": "Nice to meet you.",
            "phonetics": "Tumhala bhetun anand jhala."
          },
          {
            "id": "eng-marathi-c7-l6",
            "title": "Where is 7",
            "description": "Where is the train station?",
            "targetSentence": "रेल्वे स्टेशन कुठे आहे?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station kuthe aahe?"
          },
          {
            "id": "eng-marathi-c7-l7",
            "title": "Help 7",
            "description": "Can you help me?",
            "targetSentence": "तुम्ही मला मदत करू शकता का?",
            "translation": "Can you help me?",
            "phonetics": "Tumhi mala madat karu shakta ka?"
          },
          {
            "id": "eng-marathi-c7-l8",
            "title": "Hungry 7",
            "description": "I am hungry.",
            "targetSentence": "मला भूक लागली आहे.",
            "translation": "I am hungry.",
            "phonetics": "Mala bhook lagli aahe."
          },
          {
            "id": "eng-marathi-c7-l9",
            "title": "Water 7",
            "description": "Please give me some water.",
            "targetSentence": "कृपया मला थोडे पाणी द्या.",
            "translation": "Please give me some water.",
            "phonetics": "Krupaya mala thode paani dya."
          },
          {
            "id": "eng-marathi-c7-l10",
            "title": "Price 7",
            "description": "What is the price?",
            "targetSentence": "याची किंमत काय आहे?",
            "translation": "What is the price?",
            "phonetics": "Yachi kimmat kay aahe?"
          }
        ]
      },
      {
        "id": "eng-marathi-c8",
        "title": "Chapter 8: Work & School",
        "description": "Phrases for professional settings",
        "lessons": [
          {
            "id": "eng-marathi-c8-l1",
            "title": "Hello 8",
            "description": "Hello, how are you?",
            "targetSentence": "नमस्कार, तुम्ही कसे आहात?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskar, tumhi kase aahat?"
          },
          {
            "id": "eng-marathi-c8-l2",
            "title": "I am fine 8",
            "description": "I am fine, thank you.",
            "targetSentence": "मी ठीक आहे, धन्यवाद.",
            "translation": "I am fine, thank you.",
            "phonetics": "Mi theek aahe, dhanyavad."
          },
          {
            "id": "eng-marathi-c8-l3",
            "title": "Name 8",
            "description": "What is your name?",
            "targetSentence": "तुमचं नाव काय आहे?",
            "translation": "What is your name?",
            "phonetics": "Tumcha naav kay aahe?"
          },
          {
            "id": "eng-marathi-c8-l4",
            "title": "My name 8",
            "description": "My name is Prajwal.",
            "targetSentence": "माझं नाव प्रज्वल आहे.",
            "translation": "My name is Prajwal.",
            "phonetics": "Mazha naav Prajwal aahe."
          },
          {
            "id": "eng-marathi-c8-l5",
            "title": "Nice to meet 8",
            "description": "Nice to meet you.",
            "targetSentence": "तुम्हाला भेटून आनंद झाला.",
            "translation": "Nice to meet you.",
            "phonetics": "Tumhala bhetun anand jhala."
          },
          {
            "id": "eng-marathi-c8-l6",
            "title": "Where is 8",
            "description": "Where is the train station?",
            "targetSentence": "रेल्वे स्टेशन कुठे आहे?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station kuthe aahe?"
          },
          {
            "id": "eng-marathi-c8-l7",
            "title": "Help 8",
            "description": "Can you help me?",
            "targetSentence": "तुम्ही मला मदत करू शकता का?",
            "translation": "Can you help me?",
            "phonetics": "Tumhi mala madat karu shakta ka?"
          },
          {
            "id": "eng-marathi-c8-l8",
            "title": "Hungry 8",
            "description": "I am hungry.",
            "targetSentence": "मला भूक लागली आहे.",
            "translation": "I am hungry.",
            "phonetics": "Mala bhook lagli aahe."
          },
          {
            "id": "eng-marathi-c8-l9",
            "title": "Water 8",
            "description": "Please give me some water.",
            "targetSentence": "कृपया मला थोडे पाणी द्या.",
            "translation": "Please give me some water.",
            "phonetics": "Krupaya mala thode paani dya."
          },
          {
            "id": "eng-marathi-c8-l10",
            "title": "Price 8",
            "description": "What is the price?",
            "targetSentence": "याची किंमत काय आहे?",
            "translation": "What is the price?",
            "phonetics": "Yachi kimmat kay aahe?"
          }
        ]
      },
      {
        "id": "eng-marathi-c9",
        "title": "Chapter 9: Health & Body",
        "description": "Describe how you feel",
        "lessons": [
          {
            "id": "eng-marathi-c9-l1",
            "title": "Hello 9",
            "description": "Hello, how are you?",
            "targetSentence": "नमस्कार, तुम्ही कसे आहात?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskar, tumhi kase aahat?"
          },
          {
            "id": "eng-marathi-c9-l2",
            "title": "I am fine 9",
            "description": "I am fine, thank you.",
            "targetSentence": "मी ठीक आहे, धन्यवाद.",
            "translation": "I am fine, thank you.",
            "phonetics": "Mi theek aahe, dhanyavad."
          },
          {
            "id": "eng-marathi-c9-l3",
            "title": "Name 9",
            "description": "What is your name?",
            "targetSentence": "तुमचं नाव काय आहे?",
            "translation": "What is your name?",
            "phonetics": "Tumcha naav kay aahe?"
          },
          {
            "id": "eng-marathi-c9-l4",
            "title": "My name 9",
            "description": "My name is Prajwal.",
            "targetSentence": "माझं नाव प्रज्वल आहे.",
            "translation": "My name is Prajwal.",
            "phonetics": "Mazha naav Prajwal aahe."
          },
          {
            "id": "eng-marathi-c9-l5",
            "title": "Nice to meet 9",
            "description": "Nice to meet you.",
            "targetSentence": "तुम्हाला भेटून आनंद झाला.",
            "translation": "Nice to meet you.",
            "phonetics": "Tumhala bhetun anand jhala."
          },
          {
            "id": "eng-marathi-c9-l6",
            "title": "Where is 9",
            "description": "Where is the train station?",
            "targetSentence": "रेल्वे स्टेशन कुठे आहे?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station kuthe aahe?"
          },
          {
            "id": "eng-marathi-c9-l7",
            "title": "Help 9",
            "description": "Can you help me?",
            "targetSentence": "तुम्ही मला मदत करू शकता का?",
            "translation": "Can you help me?",
            "phonetics": "Tumhi mala madat karu shakta ka?"
          },
          {
            "id": "eng-marathi-c9-l8",
            "title": "Hungry 9",
            "description": "I am hungry.",
            "targetSentence": "मला भूक लागली आहे.",
            "translation": "I am hungry.",
            "phonetics": "Mala bhook lagli aahe."
          },
          {
            "id": "eng-marathi-c9-l9",
            "title": "Water 9",
            "description": "Please give me some water.",
            "targetSentence": "कृपया मला थोडे पाणी द्या.",
            "translation": "Please give me some water.",
            "phonetics": "Krupaya mala thode paani dya."
          },
          {
            "id": "eng-marathi-c9-l10",
            "title": "Price 9",
            "description": "What is the price?",
            "targetSentence": "याची किंमत काय आहे?",
            "translation": "What is the price?",
            "phonetics": "Yachi kimmat kay aahe?"
          }
        ]
      },
      {
        "id": "eng-marathi-c10",
        "title": "Chapter 10: Weather & Nature",
        "description": "Talk about the environment",
        "lessons": [
          {
            "id": "eng-marathi-c10-l1",
            "title": "Hello 10",
            "description": "Hello, how are you?",
            "targetSentence": "नमस्कार, तुम्ही कसे आहात?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskar, tumhi kase aahat?"
          },
          {
            "id": "eng-marathi-c10-l2",
            "title": "I am fine 10",
            "description": "I am fine, thank you.",
            "targetSentence": "मी ठीक आहे, धन्यवाद.",
            "translation": "I am fine, thank you.",
            "phonetics": "Mi theek aahe, dhanyavad."
          },
          {
            "id": "eng-marathi-c10-l3",
            "title": "Name 10",
            "description": "What is your name?",
            "targetSentence": "तुमचं नाव काय आहे?",
            "translation": "What is your name?",
            "phonetics": "Tumcha naav kay aahe?"
          },
          {
            "id": "eng-marathi-c10-l4",
            "title": "My name 10",
            "description": "My name is Prajwal.",
            "targetSentence": "माझं नाव प्रज्वल आहे.",
            "translation": "My name is Prajwal.",
            "phonetics": "Mazha naav Prajwal aahe."
          },
          {
            "id": "eng-marathi-c10-l5",
            "title": "Nice to meet 10",
            "description": "Nice to meet you.",
            "targetSentence": "तुम्हाला भेटून आनंद झाला.",
            "translation": "Nice to meet you.",
            "phonetics": "Tumhala bhetun anand jhala."
          },
          {
            "id": "eng-marathi-c10-l6",
            "title": "Where is 10",
            "description": "Where is the train station?",
            "targetSentence": "रेल्वे स्टेशन कुठे आहे?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station kuthe aahe?"
          },
          {
            "id": "eng-marathi-c10-l7",
            "title": "Help 10",
            "description": "Can you help me?",
            "targetSentence": "तुम्ही मला मदत करू शकता का?",
            "translation": "Can you help me?",
            "phonetics": "Tumhi mala madat karu shakta ka?"
          },
          {
            "id": "eng-marathi-c10-l8",
            "title": "Hungry 10",
            "description": "I am hungry.",
            "targetSentence": "मला भूक लागली आहे.",
            "translation": "I am hungry.",
            "phonetics": "Mala bhook lagli aahe."
          },
          {
            "id": "eng-marathi-c10-l9",
            "title": "Water 10",
            "description": "Please give me some water.",
            "targetSentence": "कृपया मला थोडे पाणी द्या.",
            "translation": "Please give me some water.",
            "phonetics": "Krupaya mala thode paani dya."
          },
          {
            "id": "eng-marathi-c10-l10",
            "title": "Price 10",
            "description": "What is the price?",
            "targetSentence": "याची किंमत काय आहे?",
            "translation": "What is the price?",
            "phonetics": "Yachi kimmat kay aahe?"
          }
        ]
      }
    ]
  },
  {
    "id": "eng-kannada",
    "title": "English → Kannada",
    "subtitle": "KARNATAKA",
    "chapters": [
      {
        "id": "eng-kannada-c1",
        "title": "Chapter 1: Basics & Greetings",
        "description": "Start your journey with everyday greetings",
        "lessons": [
          {
            "id": "eng-kannada-c1-l1",
            "title": "Hello 1",
            "description": "Hello, how are you?",
            "targetSentence": "ನಮಸ್ಕಾರ, ನೀವು ಹೇಗಿದ್ದೀರಿ?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskara, neevu hegiddiri?"
          },
          {
            "id": "eng-kannada-c1-l2",
            "title": "I am fine 1",
            "description": "I am fine, thank you.",
            "targetSentence": "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ, ಧನ್ಯವಾದಗಳು.",
            "translation": "I am fine, thank you.",
            "phonetics": "Naanu chennagiddene, dhanyavadagalu."
          },
          {
            "id": "eng-kannada-c1-l3",
            "title": "Name 1",
            "description": "What is your name?",
            "targetSentence": "ನಿಮ್ಮ ಹೆಸರೇನು?",
            "translation": "What is your name?",
            "phonetics": "Nimma hesarenu?"
          },
          {
            "id": "eng-kannada-c1-l4",
            "title": "My name 1",
            "description": "My name is Prajwal.",
            "targetSentence": "ನನ್ನ ಹೆಸರು ಪ್ರಜ್ವಲ್.",
            "translation": "My name is Prajwal.",
            "phonetics": "Nanna hesaru Prajwal."
          },
          {
            "id": "eng-kannada-c1-l5",
            "title": "Nice to meet 1",
            "description": "Nice to meet you.",
            "targetSentence": "ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿದ್ದು ಸಂತೋಷವಾಯಿತು.",
            "translation": "Nice to meet you.",
            "phonetics": "Nimmannu bhetiyagiddu santoshavayitu."
          },
          {
            "id": "eng-kannada-c1-l6",
            "title": "Where is 1",
            "description": "Where is the train station?",
            "targetSentence": "ರೈಲು ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?",
            "translation": "Where is the train station?",
            "phonetics": "Railu nildana ellide?"
          },
          {
            "id": "eng-kannada-c1-l7",
            "title": "Help 1",
            "description": "Can you help me?",
            "targetSentence": "ನೀವು ನನಗೆ ಸಹಾಯ ಮಾಡಬಹುದೇ?",
            "translation": "Can you help me?",
            "phonetics": "Neevu nanage sahaya madabahude?"
          },
          {
            "id": "eng-kannada-c1-l8",
            "title": "Hungry 1",
            "description": "I am hungry.",
            "targetSentence": "ನನಗೆ ಹಸಿವಾಗಿದೆ.",
            "translation": "I am hungry.",
            "phonetics": "Nanage hasivagide."
          },
          {
            "id": "eng-kannada-c1-l9",
            "title": "Water 1",
            "description": "Please give me some water.",
            "targetSentence": "ದಯವಿಟ್ಟು ನನಗೆ ಸ್ವಲ್ಪ ನೀರು ಕೊಡಿ.",
            "translation": "Please give me some water.",
            "phonetics": "Dayavittu nanage svalpa neeru kodi."
          },
          {
            "id": "eng-kannada-c1-l10",
            "title": "Price 1",
            "description": "What is the price?",
            "targetSentence": "ಇದರ ಬೆಲೆ ಏನು?",
            "translation": "What is the price?",
            "phonetics": "Idara bele enu?"
          }
        ]
      },
      {
        "id": "eng-kannada-c2",
        "title": "Chapter 2: Travel & Directions",
        "description": "Navigate your way around",
        "lessons": [
          {
            "id": "eng-kannada-c2-l1",
            "title": "Hello 2",
            "description": "Hello, how are you?",
            "targetSentence": "ನಮಸ್ಕಾರ, ನೀವು ಹೇಗಿದ್ದೀರಿ?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskara, neevu hegiddiri?"
          },
          {
            "id": "eng-kannada-c2-l2",
            "title": "I am fine 2",
            "description": "I am fine, thank you.",
            "targetSentence": "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ, ಧನ್ಯವಾದಗಳು.",
            "translation": "I am fine, thank you.",
            "phonetics": "Naanu chennagiddene, dhanyavadagalu."
          },
          {
            "id": "eng-kannada-c2-l3",
            "title": "Name 2",
            "description": "What is your name?",
            "targetSentence": "ನಿಮ್ಮ ಹೆಸರೇನು?",
            "translation": "What is your name?",
            "phonetics": "Nimma hesarenu?"
          },
          {
            "id": "eng-kannada-c2-l4",
            "title": "My name 2",
            "description": "My name is Prajwal.",
            "targetSentence": "ನನ್ನ ಹೆಸರು ಪ್ರಜ್ವಲ್.",
            "translation": "My name is Prajwal.",
            "phonetics": "Nanna hesaru Prajwal."
          },
          {
            "id": "eng-kannada-c2-l5",
            "title": "Nice to meet 2",
            "description": "Nice to meet you.",
            "targetSentence": "ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿದ್ದು ಸಂತೋಷವಾಯಿತು.",
            "translation": "Nice to meet you.",
            "phonetics": "Nimmannu bhetiyagiddu santoshavayitu."
          },
          {
            "id": "eng-kannada-c2-l6",
            "title": "Where is 2",
            "description": "Where is the train station?",
            "targetSentence": "ರೈಲು ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?",
            "translation": "Where is the train station?",
            "phonetics": "Railu nildana ellide?"
          },
          {
            "id": "eng-kannada-c2-l7",
            "title": "Help 2",
            "description": "Can you help me?",
            "targetSentence": "ನೀವು ನನಗೆ ಸಹಾಯ ಮಾಡಬಹುದೇ?",
            "translation": "Can you help me?",
            "phonetics": "Neevu nanage sahaya madabahude?"
          },
          {
            "id": "eng-kannada-c2-l8",
            "title": "Hungry 2",
            "description": "I am hungry.",
            "targetSentence": "ನನಗೆ ಹಸಿವಾಗಿದೆ.",
            "translation": "I am hungry.",
            "phonetics": "Nanage hasivagide."
          },
          {
            "id": "eng-kannada-c2-l9",
            "title": "Water 2",
            "description": "Please give me some water.",
            "targetSentence": "ದಯವಿಟ್ಟು ನನಗೆ ಸ್ವಲ್ಪ ನೀರು ಕೊಡಿ.",
            "translation": "Please give me some water.",
            "phonetics": "Dayavittu nanage svalpa neeru kodi."
          },
          {
            "id": "eng-kannada-c2-l10",
            "title": "Price 2",
            "description": "What is the price?",
            "targetSentence": "ಇದರ ಬೆಲೆ ಏನು?",
            "translation": "What is the price?",
            "phonetics": "Idara bele enu?"
          }
        ]
      },
      {
        "id": "eng-kannada-c3",
        "title": "Chapter 3: Food & Dining",
        "description": "Order food and talk about meals",
        "lessons": [
          {
            "id": "eng-kannada-c3-l1",
            "title": "Hello 3",
            "description": "Hello, how are you?",
            "targetSentence": "ನಮಸ್ಕಾರ, ನೀವು ಹೇಗಿದ್ದೀರಿ?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskara, neevu hegiddiri?"
          },
          {
            "id": "eng-kannada-c3-l2",
            "title": "I am fine 3",
            "description": "I am fine, thank you.",
            "targetSentence": "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ, ಧನ್ಯವಾದಗಳು.",
            "translation": "I am fine, thank you.",
            "phonetics": "Naanu chennagiddene, dhanyavadagalu."
          },
          {
            "id": "eng-kannada-c3-l3",
            "title": "Name 3",
            "description": "What is your name?",
            "targetSentence": "ನಿಮ್ಮ ಹೆಸರೇನು?",
            "translation": "What is your name?",
            "phonetics": "Nimma hesarenu?"
          },
          {
            "id": "eng-kannada-c3-l4",
            "title": "My name 3",
            "description": "My name is Prajwal.",
            "targetSentence": "ನನ್ನ ಹೆಸರು ಪ್ರಜ್ವಲ್.",
            "translation": "My name is Prajwal.",
            "phonetics": "Nanna hesaru Prajwal."
          },
          {
            "id": "eng-kannada-c3-l5",
            "title": "Nice to meet 3",
            "description": "Nice to meet you.",
            "targetSentence": "ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿದ್ದು ಸಂತೋಷವಾಯಿತು.",
            "translation": "Nice to meet you.",
            "phonetics": "Nimmannu bhetiyagiddu santoshavayitu."
          },
          {
            "id": "eng-kannada-c3-l6",
            "title": "Where is 3",
            "description": "Where is the train station?",
            "targetSentence": "ರೈಲು ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?",
            "translation": "Where is the train station?",
            "phonetics": "Railu nildana ellide?"
          },
          {
            "id": "eng-kannada-c3-l7",
            "title": "Help 3",
            "description": "Can you help me?",
            "targetSentence": "ನೀವು ನನಗೆ ಸಹಾಯ ಮಾಡಬಹುದೇ?",
            "translation": "Can you help me?",
            "phonetics": "Neevu nanage sahaya madabahude?"
          },
          {
            "id": "eng-kannada-c3-l8",
            "title": "Hungry 3",
            "description": "I am hungry.",
            "targetSentence": "ನನಗೆ ಹಸಿವಾಗಿದೆ.",
            "translation": "I am hungry.",
            "phonetics": "Nanage hasivagide."
          },
          {
            "id": "eng-kannada-c3-l9",
            "title": "Water 3",
            "description": "Please give me some water.",
            "targetSentence": "ದಯವಿಟ್ಟು ನನಗೆ ಸ್ವಲ್ಪ ನೀರು ಕೊಡಿ.",
            "translation": "Please give me some water.",
            "phonetics": "Dayavittu nanage svalpa neeru kodi."
          },
          {
            "id": "eng-kannada-c3-l10",
            "title": "Price 3",
            "description": "What is the price?",
            "targetSentence": "ಇದರ ಬೆಲೆ ಏನು?",
            "translation": "What is the price?",
            "phonetics": "Idara bele enu?"
          }
        ]
      },
      {
        "id": "eng-kannada-c4",
        "title": "Chapter 4: Shopping & Money",
        "description": "Buy things and handle money",
        "lessons": [
          {
            "id": "eng-kannada-c4-l1",
            "title": "Hello 4",
            "description": "Hello, how are you?",
            "targetSentence": "ನಮಸ್ಕಾರ, ನೀವು ಹೇಗಿದ್ದೀರಿ?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskara, neevu hegiddiri?"
          },
          {
            "id": "eng-kannada-c4-l2",
            "title": "I am fine 4",
            "description": "I am fine, thank you.",
            "targetSentence": "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ, ಧನ್ಯವಾದಗಳು.",
            "translation": "I am fine, thank you.",
            "phonetics": "Naanu chennagiddene, dhanyavadagalu."
          },
          {
            "id": "eng-kannada-c4-l3",
            "title": "Name 4",
            "description": "What is your name?",
            "targetSentence": "ನಿಮ್ಮ ಹೆಸರೇನು?",
            "translation": "What is your name?",
            "phonetics": "Nimma hesarenu?"
          },
          {
            "id": "eng-kannada-c4-l4",
            "title": "My name 4",
            "description": "My name is Prajwal.",
            "targetSentence": "ನನ್ನ ಹೆಸರು ಪ್ರಜ್ವಲ್.",
            "translation": "My name is Prajwal.",
            "phonetics": "Nanna hesaru Prajwal."
          },
          {
            "id": "eng-kannada-c4-l5",
            "title": "Nice to meet 4",
            "description": "Nice to meet you.",
            "targetSentence": "ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿದ್ದು ಸಂತೋಷವಾಯಿತು.",
            "translation": "Nice to meet you.",
            "phonetics": "Nimmannu bhetiyagiddu santoshavayitu."
          },
          {
            "id": "eng-kannada-c4-l6",
            "title": "Where is 4",
            "description": "Where is the train station?",
            "targetSentence": "ರೈಲು ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?",
            "translation": "Where is the train station?",
            "phonetics": "Railu nildana ellide?"
          },
          {
            "id": "eng-kannada-c4-l7",
            "title": "Help 4",
            "description": "Can you help me?",
            "targetSentence": "ನೀವು ನನಗೆ ಸಹಾಯ ಮಾಡಬಹುದೇ?",
            "translation": "Can you help me?",
            "phonetics": "Neevu nanage sahaya madabahude?"
          },
          {
            "id": "eng-kannada-c4-l8",
            "title": "Hungry 4",
            "description": "I am hungry.",
            "targetSentence": "ನನಗೆ ಹಸಿವಾಗಿದೆ.",
            "translation": "I am hungry.",
            "phonetics": "Nanage hasivagide."
          },
          {
            "id": "eng-kannada-c4-l9",
            "title": "Water 4",
            "description": "Please give me some water.",
            "targetSentence": "ದಯವಿಟ್ಟು ನನಗೆ ಸ್ವಲ್ಪ ನೀರು ಕೊಡಿ.",
            "translation": "Please give me some water.",
            "phonetics": "Dayavittu nanage svalpa neeru kodi."
          },
          {
            "id": "eng-kannada-c4-l10",
            "title": "Price 4",
            "description": "What is the price?",
            "targetSentence": "ಇದರ ಬೆಲೆ ಏನು?",
            "translation": "What is the price?",
            "phonetics": "Idara bele enu?"
          }
        ]
      },
      {
        "id": "eng-kannada-c5",
        "title": "Chapter 5: Emergency & Help",
        "description": "Crucial phrases for emergencies",
        "lessons": [
          {
            "id": "eng-kannada-c5-l1",
            "title": "Hello 5",
            "description": "Hello, how are you?",
            "targetSentence": "ನಮಸ್ಕಾರ, ನೀವು ಹೇಗಿದ್ದೀರಿ?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskara, neevu hegiddiri?"
          },
          {
            "id": "eng-kannada-c5-l2",
            "title": "I am fine 5",
            "description": "I am fine, thank you.",
            "targetSentence": "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ, ಧನ್ಯವಾದಗಳು.",
            "translation": "I am fine, thank you.",
            "phonetics": "Naanu chennagiddene, dhanyavadagalu."
          },
          {
            "id": "eng-kannada-c5-l3",
            "title": "Name 5",
            "description": "What is your name?",
            "targetSentence": "ನಿಮ್ಮ ಹೆಸರೇನು?",
            "translation": "What is your name?",
            "phonetics": "Nimma hesarenu?"
          },
          {
            "id": "eng-kannada-c5-l4",
            "title": "My name 5",
            "description": "My name is Prajwal.",
            "targetSentence": "ನನ್ನ ಹೆಸರು ಪ್ರಜ್ವಲ್.",
            "translation": "My name is Prajwal.",
            "phonetics": "Nanna hesaru Prajwal."
          },
          {
            "id": "eng-kannada-c5-l5",
            "title": "Nice to meet 5",
            "description": "Nice to meet you.",
            "targetSentence": "ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿದ್ದು ಸಂತೋಷವಾಯಿತು.",
            "translation": "Nice to meet you.",
            "phonetics": "Nimmannu bhetiyagiddu santoshavayitu."
          },
          {
            "id": "eng-kannada-c5-l6",
            "title": "Where is 5",
            "description": "Where is the train station?",
            "targetSentence": "ರೈಲು ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?",
            "translation": "Where is the train station?",
            "phonetics": "Railu nildana ellide?"
          },
          {
            "id": "eng-kannada-c5-l7",
            "title": "Help 5",
            "description": "Can you help me?",
            "targetSentence": "ನೀವು ನನಗೆ ಸಹಾಯ ಮಾಡಬಹುದೇ?",
            "translation": "Can you help me?",
            "phonetics": "Neevu nanage sahaya madabahude?"
          },
          {
            "id": "eng-kannada-c5-l8",
            "title": "Hungry 5",
            "description": "I am hungry.",
            "targetSentence": "ನನಗೆ ಹಸಿವಾಗಿದೆ.",
            "translation": "I am hungry.",
            "phonetics": "Nanage hasivagide."
          },
          {
            "id": "eng-kannada-c5-l9",
            "title": "Water 5",
            "description": "Please give me some water.",
            "targetSentence": "ದಯವಿಟ್ಟು ನನಗೆ ಸ್ವಲ್ಪ ನೀರು ಕೊಡಿ.",
            "translation": "Please give me some water.",
            "phonetics": "Dayavittu nanage svalpa neeru kodi."
          },
          {
            "id": "eng-kannada-c5-l10",
            "title": "Price 5",
            "description": "What is the price?",
            "targetSentence": "ಇದರ ಬೆಲೆ ಏನು?",
            "translation": "What is the price?",
            "phonetics": "Idara bele enu?"
          }
        ]
      },
      {
        "id": "eng-kannada-c6",
        "title": "Chapter 6: Time & Dates",
        "description": "Learn to tell time and dates",
        "lessons": [
          {
            "id": "eng-kannada-c6-l1",
            "title": "Hello 6",
            "description": "Hello, how are you?",
            "targetSentence": "ನಮಸ್ಕಾರ, ನೀವು ಹೇಗಿದ್ದೀರಿ?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskara, neevu hegiddiri?"
          },
          {
            "id": "eng-kannada-c6-l2",
            "title": "I am fine 6",
            "description": "I am fine, thank you.",
            "targetSentence": "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ, ಧನ್ಯವಾದಗಳು.",
            "translation": "I am fine, thank you.",
            "phonetics": "Naanu chennagiddene, dhanyavadagalu."
          },
          {
            "id": "eng-kannada-c6-l3",
            "title": "Name 6",
            "description": "What is your name?",
            "targetSentence": "ನಿಮ್ಮ ಹೆಸರೇನು?",
            "translation": "What is your name?",
            "phonetics": "Nimma hesarenu?"
          },
          {
            "id": "eng-kannada-c6-l4",
            "title": "My name 6",
            "description": "My name is Prajwal.",
            "targetSentence": "ನನ್ನ ಹೆಸರು ಪ್ರಜ್ವಲ್.",
            "translation": "My name is Prajwal.",
            "phonetics": "Nanna hesaru Prajwal."
          },
          {
            "id": "eng-kannada-c6-l5",
            "title": "Nice to meet 6",
            "description": "Nice to meet you.",
            "targetSentence": "ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿದ್ದು ಸಂತೋಷವಾಯಿತು.",
            "translation": "Nice to meet you.",
            "phonetics": "Nimmannu bhetiyagiddu santoshavayitu."
          },
          {
            "id": "eng-kannada-c6-l6",
            "title": "Where is 6",
            "description": "Where is the train station?",
            "targetSentence": "ರೈಲು ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?",
            "translation": "Where is the train station?",
            "phonetics": "Railu nildana ellide?"
          },
          {
            "id": "eng-kannada-c6-l7",
            "title": "Help 6",
            "description": "Can you help me?",
            "targetSentence": "ನೀವು ನನಗೆ ಸಹಾಯ ಮಾಡಬಹುದೇ?",
            "translation": "Can you help me?",
            "phonetics": "Neevu nanage sahaya madabahude?"
          },
          {
            "id": "eng-kannada-c6-l8",
            "title": "Hungry 6",
            "description": "I am hungry.",
            "targetSentence": "ನನಗೆ ಹಸಿವಾಗಿದೆ.",
            "translation": "I am hungry.",
            "phonetics": "Nanage hasivagide."
          },
          {
            "id": "eng-kannada-c6-l9",
            "title": "Water 6",
            "description": "Please give me some water.",
            "targetSentence": "ದಯವಿಟ್ಟು ನನಗೆ ಸ್ವಲ್ಪ ನೀರು ಕೊಡಿ.",
            "translation": "Please give me some water.",
            "phonetics": "Dayavittu nanage svalpa neeru kodi."
          },
          {
            "id": "eng-kannada-c6-l10",
            "title": "Price 6",
            "description": "What is the price?",
            "targetSentence": "ಇದರ ಬೆಲೆ ಏನು?",
            "translation": "What is the price?",
            "phonetics": "Idara bele enu?"
          }
        ]
      },
      {
        "id": "eng-kannada-c7",
        "title": "Chapter 7: Family & Friends",
        "description": "Talk about your loved ones",
        "lessons": [
          {
            "id": "eng-kannada-c7-l1",
            "title": "Hello 7",
            "description": "Hello, how are you?",
            "targetSentence": "ನಮಸ್ಕಾರ, ನೀವು ಹೇಗಿದ್ದೀರಿ?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskara, neevu hegiddiri?"
          },
          {
            "id": "eng-kannada-c7-l2",
            "title": "I am fine 7",
            "description": "I am fine, thank you.",
            "targetSentence": "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ, ಧನ್ಯವಾದಗಳು.",
            "translation": "I am fine, thank you.",
            "phonetics": "Naanu chennagiddene, dhanyavadagalu."
          },
          {
            "id": "eng-kannada-c7-l3",
            "title": "Name 7",
            "description": "What is your name?",
            "targetSentence": "ನಿಮ್ಮ ಹೆಸರೇನು?",
            "translation": "What is your name?",
            "phonetics": "Nimma hesarenu?"
          },
          {
            "id": "eng-kannada-c7-l4",
            "title": "My name 7",
            "description": "My name is Prajwal.",
            "targetSentence": "ನನ್ನ ಹೆಸರು ಪ್ರಜ್ವಲ್.",
            "translation": "My name is Prajwal.",
            "phonetics": "Nanna hesaru Prajwal."
          },
          {
            "id": "eng-kannada-c7-l5",
            "title": "Nice to meet 7",
            "description": "Nice to meet you.",
            "targetSentence": "ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿದ್ದು ಸಂತೋಷವಾಯಿತು.",
            "translation": "Nice to meet you.",
            "phonetics": "Nimmannu bhetiyagiddu santoshavayitu."
          },
          {
            "id": "eng-kannada-c7-l6",
            "title": "Where is 7",
            "description": "Where is the train station?",
            "targetSentence": "ರೈಲು ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?",
            "translation": "Where is the train station?",
            "phonetics": "Railu nildana ellide?"
          },
          {
            "id": "eng-kannada-c7-l7",
            "title": "Help 7",
            "description": "Can you help me?",
            "targetSentence": "ನೀವು ನನಗೆ ಸಹಾಯ ಮಾಡಬಹುದೇ?",
            "translation": "Can you help me?",
            "phonetics": "Neevu nanage sahaya madabahude?"
          },
          {
            "id": "eng-kannada-c7-l8",
            "title": "Hungry 7",
            "description": "I am hungry.",
            "targetSentence": "ನನಗೆ ಹಸಿವಾಗಿದೆ.",
            "translation": "I am hungry.",
            "phonetics": "Nanage hasivagide."
          },
          {
            "id": "eng-kannada-c7-l9",
            "title": "Water 7",
            "description": "Please give me some water.",
            "targetSentence": "ದಯವಿಟ್ಟು ನನಗೆ ಸ್ವಲ್ಪ ನೀರು ಕೊಡಿ.",
            "translation": "Please give me some water.",
            "phonetics": "Dayavittu nanage svalpa neeru kodi."
          },
          {
            "id": "eng-kannada-c7-l10",
            "title": "Price 7",
            "description": "What is the price?",
            "targetSentence": "ಇದರ ಬೆಲೆ ಏನು?",
            "translation": "What is the price?",
            "phonetics": "Idara bele enu?"
          }
        ]
      },
      {
        "id": "eng-kannada-c8",
        "title": "Chapter 8: Work & School",
        "description": "Phrases for professional settings",
        "lessons": [
          {
            "id": "eng-kannada-c8-l1",
            "title": "Hello 8",
            "description": "Hello, how are you?",
            "targetSentence": "ನಮಸ್ಕಾರ, ನೀವು ಹೇಗಿದ್ದೀರಿ?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskara, neevu hegiddiri?"
          },
          {
            "id": "eng-kannada-c8-l2",
            "title": "I am fine 8",
            "description": "I am fine, thank you.",
            "targetSentence": "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ, ಧನ್ಯವಾದಗಳು.",
            "translation": "I am fine, thank you.",
            "phonetics": "Naanu chennagiddene, dhanyavadagalu."
          },
          {
            "id": "eng-kannada-c8-l3",
            "title": "Name 8",
            "description": "What is your name?",
            "targetSentence": "ನಿಮ್ಮ ಹೆಸರೇನು?",
            "translation": "What is your name?",
            "phonetics": "Nimma hesarenu?"
          },
          {
            "id": "eng-kannada-c8-l4",
            "title": "My name 8",
            "description": "My name is Prajwal.",
            "targetSentence": "ನನ್ನ ಹೆಸರು ಪ್ರಜ್ವಲ್.",
            "translation": "My name is Prajwal.",
            "phonetics": "Nanna hesaru Prajwal."
          },
          {
            "id": "eng-kannada-c8-l5",
            "title": "Nice to meet 8",
            "description": "Nice to meet you.",
            "targetSentence": "ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿದ್ದು ಸಂತೋಷವಾಯಿತು.",
            "translation": "Nice to meet you.",
            "phonetics": "Nimmannu bhetiyagiddu santoshavayitu."
          },
          {
            "id": "eng-kannada-c8-l6",
            "title": "Where is 8",
            "description": "Where is the train station?",
            "targetSentence": "ರೈಲು ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?",
            "translation": "Where is the train station?",
            "phonetics": "Railu nildana ellide?"
          },
          {
            "id": "eng-kannada-c8-l7",
            "title": "Help 8",
            "description": "Can you help me?",
            "targetSentence": "ನೀವು ನನಗೆ ಸಹಾಯ ಮಾಡಬಹುದೇ?",
            "translation": "Can you help me?",
            "phonetics": "Neevu nanage sahaya madabahude?"
          },
          {
            "id": "eng-kannada-c8-l8",
            "title": "Hungry 8",
            "description": "I am hungry.",
            "targetSentence": "ನನಗೆ ಹಸಿವಾಗಿದೆ.",
            "translation": "I am hungry.",
            "phonetics": "Nanage hasivagide."
          },
          {
            "id": "eng-kannada-c8-l9",
            "title": "Water 8",
            "description": "Please give me some water.",
            "targetSentence": "ದಯವಿಟ್ಟು ನನಗೆ ಸ್ವಲ್ಪ ನೀರು ಕೊಡಿ.",
            "translation": "Please give me some water.",
            "phonetics": "Dayavittu nanage svalpa neeru kodi."
          },
          {
            "id": "eng-kannada-c8-l10",
            "title": "Price 8",
            "description": "What is the price?",
            "targetSentence": "ಇದರ ಬೆಲೆ ಏನು?",
            "translation": "What is the price?",
            "phonetics": "Idara bele enu?"
          }
        ]
      },
      {
        "id": "eng-kannada-c9",
        "title": "Chapter 9: Health & Body",
        "description": "Describe how you feel",
        "lessons": [
          {
            "id": "eng-kannada-c9-l1",
            "title": "Hello 9",
            "description": "Hello, how are you?",
            "targetSentence": "ನಮಸ್ಕಾರ, ನೀವು ಹೇಗಿದ್ದೀರಿ?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskara, neevu hegiddiri?"
          },
          {
            "id": "eng-kannada-c9-l2",
            "title": "I am fine 9",
            "description": "I am fine, thank you.",
            "targetSentence": "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ, ಧನ್ಯವಾದಗಳು.",
            "translation": "I am fine, thank you.",
            "phonetics": "Naanu chennagiddene, dhanyavadagalu."
          },
          {
            "id": "eng-kannada-c9-l3",
            "title": "Name 9",
            "description": "What is your name?",
            "targetSentence": "ನಿಮ್ಮ ಹೆಸರೇನು?",
            "translation": "What is your name?",
            "phonetics": "Nimma hesarenu?"
          },
          {
            "id": "eng-kannada-c9-l4",
            "title": "My name 9",
            "description": "My name is Prajwal.",
            "targetSentence": "ನನ್ನ ಹೆಸರು ಪ್ರಜ್ವಲ್.",
            "translation": "My name is Prajwal.",
            "phonetics": "Nanna hesaru Prajwal."
          },
          {
            "id": "eng-kannada-c9-l5",
            "title": "Nice to meet 9",
            "description": "Nice to meet you.",
            "targetSentence": "ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿದ್ದು ಸಂತೋಷವಾಯಿತು.",
            "translation": "Nice to meet you.",
            "phonetics": "Nimmannu bhetiyagiddu santoshavayitu."
          },
          {
            "id": "eng-kannada-c9-l6",
            "title": "Where is 9",
            "description": "Where is the train station?",
            "targetSentence": "ರೈಲು ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?",
            "translation": "Where is the train station?",
            "phonetics": "Railu nildana ellide?"
          },
          {
            "id": "eng-kannada-c9-l7",
            "title": "Help 9",
            "description": "Can you help me?",
            "targetSentence": "ನೀವು ನನಗೆ ಸಹಾಯ ಮಾಡಬಹುದೇ?",
            "translation": "Can you help me?",
            "phonetics": "Neevu nanage sahaya madabahude?"
          },
          {
            "id": "eng-kannada-c9-l8",
            "title": "Hungry 9",
            "description": "I am hungry.",
            "targetSentence": "ನನಗೆ ಹಸಿವಾಗಿದೆ.",
            "translation": "I am hungry.",
            "phonetics": "Nanage hasivagide."
          },
          {
            "id": "eng-kannada-c9-l9",
            "title": "Water 9",
            "description": "Please give me some water.",
            "targetSentence": "ದಯವಿಟ್ಟು ನನಗೆ ಸ್ವಲ್ಪ ನೀರು ಕೊಡಿ.",
            "translation": "Please give me some water.",
            "phonetics": "Dayavittu nanage svalpa neeru kodi."
          },
          {
            "id": "eng-kannada-c9-l10",
            "title": "Price 9",
            "description": "What is the price?",
            "targetSentence": "ಇದರ ಬೆಲೆ ಏನು?",
            "translation": "What is the price?",
            "phonetics": "Idara bele enu?"
          }
        ]
      },
      {
        "id": "eng-kannada-c10",
        "title": "Chapter 10: Weather & Nature",
        "description": "Talk about the environment",
        "lessons": [
          {
            "id": "eng-kannada-c10-l1",
            "title": "Hello 10",
            "description": "Hello, how are you?",
            "targetSentence": "ನಮಸ್ಕಾರ, ನೀವು ಹೇಗಿದ್ದೀರಿ?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskara, neevu hegiddiri?"
          },
          {
            "id": "eng-kannada-c10-l2",
            "title": "I am fine 10",
            "description": "I am fine, thank you.",
            "targetSentence": "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ, ಧನ್ಯವಾದಗಳು.",
            "translation": "I am fine, thank you.",
            "phonetics": "Naanu chennagiddene, dhanyavadagalu."
          },
          {
            "id": "eng-kannada-c10-l3",
            "title": "Name 10",
            "description": "What is your name?",
            "targetSentence": "ನಿಮ್ಮ ಹೆಸರೇನು?",
            "translation": "What is your name?",
            "phonetics": "Nimma hesarenu?"
          },
          {
            "id": "eng-kannada-c10-l4",
            "title": "My name 10",
            "description": "My name is Prajwal.",
            "targetSentence": "ನನ್ನ ಹೆಸರು ಪ್ರಜ್ವಲ್.",
            "translation": "My name is Prajwal.",
            "phonetics": "Nanna hesaru Prajwal."
          },
          {
            "id": "eng-kannada-c10-l5",
            "title": "Nice to meet 10",
            "description": "Nice to meet you.",
            "targetSentence": "ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿದ್ದು ಸಂತೋಷವಾಯಿತು.",
            "translation": "Nice to meet you.",
            "phonetics": "Nimmannu bhetiyagiddu santoshavayitu."
          },
          {
            "id": "eng-kannada-c10-l6",
            "title": "Where is 10",
            "description": "Where is the train station?",
            "targetSentence": "ರೈಲು ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?",
            "translation": "Where is the train station?",
            "phonetics": "Railu nildana ellide?"
          },
          {
            "id": "eng-kannada-c10-l7",
            "title": "Help 10",
            "description": "Can you help me?",
            "targetSentence": "ನೀವು ನನಗೆ ಸಹಾಯ ಮಾಡಬಹುದೇ?",
            "translation": "Can you help me?",
            "phonetics": "Neevu nanage sahaya madabahude?"
          },
          {
            "id": "eng-kannada-c10-l8",
            "title": "Hungry 10",
            "description": "I am hungry.",
            "targetSentence": "ನನಗೆ ಹಸಿವಾಗಿದೆ.",
            "translation": "I am hungry.",
            "phonetics": "Nanage hasivagide."
          },
          {
            "id": "eng-kannada-c10-l9",
            "title": "Water 10",
            "description": "Please give me some water.",
            "targetSentence": "ದಯವಿಟ್ಟು ನನಗೆ ಸ್ವಲ್ಪ ನೀರು ಕೊಡಿ.",
            "translation": "Please give me some water.",
            "phonetics": "Dayavittu nanage svalpa neeru kodi."
          },
          {
            "id": "eng-kannada-c10-l10",
            "title": "Price 10",
            "description": "What is the price?",
            "targetSentence": "ಇದರ ಬೆಲೆ ಏನು?",
            "translation": "What is the price?",
            "phonetics": "Idara bele enu?"
          }
        ]
      }
    ]
  },
  {
    "id": "eng-telugu",
    "title": "English → Telugu",
    "subtitle": "ANDHRA & TELANGANA",
    "chapters": [
      {
        "id": "eng-telugu-c1",
        "title": "Chapter 1: Basics & Greetings",
        "description": "Start your journey with everyday greetings",
        "lessons": [
          {
            "id": "eng-telugu-c1-l1",
            "title": "Hello 1",
            "description": "Hello, how are you?",
            "targetSentence": "నమస్కారం, మీరు ఎలా ఉన్నారు?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskaram, meeru ela unnaru?"
          },
          {
            "id": "eng-telugu-c1-l2",
            "title": "I am fine 1",
            "description": "I am fine, thank you.",
            "targetSentence": "నేను బాగున్నాను, ధన్యవాదాలు.",
            "translation": "I am fine, thank you.",
            "phonetics": "Nenu bagunnanu, dhanyavadalu."
          },
          {
            "id": "eng-telugu-c1-l3",
            "title": "Name 1",
            "description": "What is your name?",
            "targetSentence": "మీ పేరు ఏమిటి?",
            "translation": "What is your name?",
            "phonetics": "Mee peru emiti?"
          },
          {
            "id": "eng-telugu-c1-l4",
            "title": "My name 1",
            "description": "My name is Prajwal.",
            "targetSentence": "నా పేరు ప్రజ్వల్.",
            "translation": "My name is Prajwal.",
            "phonetics": "Naa peru Prajwal."
          },
          {
            "id": "eng-telugu-c1-l5",
            "title": "Nice to meet 1",
            "description": "Nice to meet you.",
            "targetSentence": "మిమ్మల్ని కలవడం సంతోషంగా ఉంది.",
            "translation": "Nice to meet you.",
            "phonetics": "Mimmalni kalavadam santoshanga undi."
          },
          {
            "id": "eng-telugu-c1-l6",
            "title": "Where is 1",
            "description": "Where is the train station?",
            "targetSentence": "రైల్వే స్టేషన్ ఎక్కడ ఉంది?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station ekkada undi?"
          },
          {
            "id": "eng-telugu-c1-l7",
            "title": "Help 1",
            "description": "Can you help me?",
            "targetSentence": "మీరు నాకు సహాయం చేయగలరా?",
            "translation": "Can you help me?",
            "phonetics": "Meeru naaku sahayam cheyagalara?"
          },
          {
            "id": "eng-telugu-c1-l8",
            "title": "Hungry 1",
            "description": "I am hungry.",
            "targetSentence": "నాకు ఆకలిగా ఉంది.",
            "translation": "I am hungry.",
            "phonetics": "Naaku aakaliga undi."
          },
          {
            "id": "eng-telugu-c1-l9",
            "title": "Water 1",
            "description": "Please give me some water.",
            "targetSentence": "దయచేసి నాకు కొంచెం నీరు ఇవ్వండి.",
            "translation": "Please give me some water.",
            "phonetics": "Dayachesi naaku konchem neeru ivvandi."
          },
          {
            "id": "eng-telugu-c1-l10",
            "title": "Price 1",
            "description": "What is the price?",
            "targetSentence": "దీని ధర ఎంత?",
            "translation": "What is the price?",
            "phonetics": "Deeni dhara entha?"
          }
        ]
      },
      {
        "id": "eng-telugu-c2",
        "title": "Chapter 2: Travel & Directions",
        "description": "Navigate your way around",
        "lessons": [
          {
            "id": "eng-telugu-c2-l1",
            "title": "Hello 2",
            "description": "Hello, how are you?",
            "targetSentence": "నమస్కారం, మీరు ఎలా ఉన్నారు?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskaram, meeru ela unnaru?"
          },
          {
            "id": "eng-telugu-c2-l2",
            "title": "I am fine 2",
            "description": "I am fine, thank you.",
            "targetSentence": "నేను బాగున్నాను, ధన్యవాదాలు.",
            "translation": "I am fine, thank you.",
            "phonetics": "Nenu bagunnanu, dhanyavadalu."
          },
          {
            "id": "eng-telugu-c2-l3",
            "title": "Name 2",
            "description": "What is your name?",
            "targetSentence": "మీ పేరు ఏమిటి?",
            "translation": "What is your name?",
            "phonetics": "Mee peru emiti?"
          },
          {
            "id": "eng-telugu-c2-l4",
            "title": "My name 2",
            "description": "My name is Prajwal.",
            "targetSentence": "నా పేరు ప్రజ్వల్.",
            "translation": "My name is Prajwal.",
            "phonetics": "Naa peru Prajwal."
          },
          {
            "id": "eng-telugu-c2-l5",
            "title": "Nice to meet 2",
            "description": "Nice to meet you.",
            "targetSentence": "మిమ్మల్ని కలవడం సంతోషంగా ఉంది.",
            "translation": "Nice to meet you.",
            "phonetics": "Mimmalni kalavadam santoshanga undi."
          },
          {
            "id": "eng-telugu-c2-l6",
            "title": "Where is 2",
            "description": "Where is the train station?",
            "targetSentence": "రైల్వే స్టేషన్ ఎక్కడ ఉంది?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station ekkada undi?"
          },
          {
            "id": "eng-telugu-c2-l7",
            "title": "Help 2",
            "description": "Can you help me?",
            "targetSentence": "మీరు నాకు సహాయం చేయగలరా?",
            "translation": "Can you help me?",
            "phonetics": "Meeru naaku sahayam cheyagalara?"
          },
          {
            "id": "eng-telugu-c2-l8",
            "title": "Hungry 2",
            "description": "I am hungry.",
            "targetSentence": "నాకు ఆకలిగా ఉంది.",
            "translation": "I am hungry.",
            "phonetics": "Naaku aakaliga undi."
          },
          {
            "id": "eng-telugu-c2-l9",
            "title": "Water 2",
            "description": "Please give me some water.",
            "targetSentence": "దయచేసి నాకు కొంచెం నీరు ఇవ్వండి.",
            "translation": "Please give me some water.",
            "phonetics": "Dayachesi naaku konchem neeru ivvandi."
          },
          {
            "id": "eng-telugu-c2-l10",
            "title": "Price 2",
            "description": "What is the price?",
            "targetSentence": "దీని ధర ఎంత?",
            "translation": "What is the price?",
            "phonetics": "Deeni dhara entha?"
          }
        ]
      },
      {
        "id": "eng-telugu-c3",
        "title": "Chapter 3: Food & Dining",
        "description": "Order food and talk about meals",
        "lessons": [
          {
            "id": "eng-telugu-c3-l1",
            "title": "Hello 3",
            "description": "Hello, how are you?",
            "targetSentence": "నమస్కారం, మీరు ఎలా ఉన్నారు?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskaram, meeru ela unnaru?"
          },
          {
            "id": "eng-telugu-c3-l2",
            "title": "I am fine 3",
            "description": "I am fine, thank you.",
            "targetSentence": "నేను బాగున్నాను, ధన్యవాదాలు.",
            "translation": "I am fine, thank you.",
            "phonetics": "Nenu bagunnanu, dhanyavadalu."
          },
          {
            "id": "eng-telugu-c3-l3",
            "title": "Name 3",
            "description": "What is your name?",
            "targetSentence": "మీ పేరు ఏమిటి?",
            "translation": "What is your name?",
            "phonetics": "Mee peru emiti?"
          },
          {
            "id": "eng-telugu-c3-l4",
            "title": "My name 3",
            "description": "My name is Prajwal.",
            "targetSentence": "నా పేరు ప్రజ్వల్.",
            "translation": "My name is Prajwal.",
            "phonetics": "Naa peru Prajwal."
          },
          {
            "id": "eng-telugu-c3-l5",
            "title": "Nice to meet 3",
            "description": "Nice to meet you.",
            "targetSentence": "మిమ్మల్ని కలవడం సంతోషంగా ఉంది.",
            "translation": "Nice to meet you.",
            "phonetics": "Mimmalni kalavadam santoshanga undi."
          },
          {
            "id": "eng-telugu-c3-l6",
            "title": "Where is 3",
            "description": "Where is the train station?",
            "targetSentence": "రైల్వే స్టేషన్ ఎక్కడ ఉంది?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station ekkada undi?"
          },
          {
            "id": "eng-telugu-c3-l7",
            "title": "Help 3",
            "description": "Can you help me?",
            "targetSentence": "మీరు నాకు సహాయం చేయగలరా?",
            "translation": "Can you help me?",
            "phonetics": "Meeru naaku sahayam cheyagalara?"
          },
          {
            "id": "eng-telugu-c3-l8",
            "title": "Hungry 3",
            "description": "I am hungry.",
            "targetSentence": "నాకు ఆకలిగా ఉంది.",
            "translation": "I am hungry.",
            "phonetics": "Naaku aakaliga undi."
          },
          {
            "id": "eng-telugu-c3-l9",
            "title": "Water 3",
            "description": "Please give me some water.",
            "targetSentence": "దయచేసి నాకు కొంచెం నీరు ఇవ్వండి.",
            "translation": "Please give me some water.",
            "phonetics": "Dayachesi naaku konchem neeru ivvandi."
          },
          {
            "id": "eng-telugu-c3-l10",
            "title": "Price 3",
            "description": "What is the price?",
            "targetSentence": "దీని ధర ఎంత?",
            "translation": "What is the price?",
            "phonetics": "Deeni dhara entha?"
          }
        ]
      },
      {
        "id": "eng-telugu-c4",
        "title": "Chapter 4: Shopping & Money",
        "description": "Buy things and handle money",
        "lessons": [
          {
            "id": "eng-telugu-c4-l1",
            "title": "Hello 4",
            "description": "Hello, how are you?",
            "targetSentence": "నమస్కారం, మీరు ఎలా ఉన్నారు?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskaram, meeru ela unnaru?"
          },
          {
            "id": "eng-telugu-c4-l2",
            "title": "I am fine 4",
            "description": "I am fine, thank you.",
            "targetSentence": "నేను బాగున్నాను, ధన్యవాదాలు.",
            "translation": "I am fine, thank you.",
            "phonetics": "Nenu bagunnanu, dhanyavadalu."
          },
          {
            "id": "eng-telugu-c4-l3",
            "title": "Name 4",
            "description": "What is your name?",
            "targetSentence": "మీ పేరు ఏమిటి?",
            "translation": "What is your name?",
            "phonetics": "Mee peru emiti?"
          },
          {
            "id": "eng-telugu-c4-l4",
            "title": "My name 4",
            "description": "My name is Prajwal.",
            "targetSentence": "నా పేరు ప్రజ్వల్.",
            "translation": "My name is Prajwal.",
            "phonetics": "Naa peru Prajwal."
          },
          {
            "id": "eng-telugu-c4-l5",
            "title": "Nice to meet 4",
            "description": "Nice to meet you.",
            "targetSentence": "మిమ్మల్ని కలవడం సంతోషంగా ఉంది.",
            "translation": "Nice to meet you.",
            "phonetics": "Mimmalni kalavadam santoshanga undi."
          },
          {
            "id": "eng-telugu-c4-l6",
            "title": "Where is 4",
            "description": "Where is the train station?",
            "targetSentence": "రైల్వే స్టేషన్ ఎక్కడ ఉంది?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station ekkada undi?"
          },
          {
            "id": "eng-telugu-c4-l7",
            "title": "Help 4",
            "description": "Can you help me?",
            "targetSentence": "మీరు నాకు సహాయం చేయగలరా?",
            "translation": "Can you help me?",
            "phonetics": "Meeru naaku sahayam cheyagalara?"
          },
          {
            "id": "eng-telugu-c4-l8",
            "title": "Hungry 4",
            "description": "I am hungry.",
            "targetSentence": "నాకు ఆకలిగా ఉంది.",
            "translation": "I am hungry.",
            "phonetics": "Naaku aakaliga undi."
          },
          {
            "id": "eng-telugu-c4-l9",
            "title": "Water 4",
            "description": "Please give me some water.",
            "targetSentence": "దయచేసి నాకు కొంచెం నీరు ఇవ్వండి.",
            "translation": "Please give me some water.",
            "phonetics": "Dayachesi naaku konchem neeru ivvandi."
          },
          {
            "id": "eng-telugu-c4-l10",
            "title": "Price 4",
            "description": "What is the price?",
            "targetSentence": "దీని ధర ఎంత?",
            "translation": "What is the price?",
            "phonetics": "Deeni dhara entha?"
          }
        ]
      },
      {
        "id": "eng-telugu-c5",
        "title": "Chapter 5: Emergency & Help",
        "description": "Crucial phrases for emergencies",
        "lessons": [
          {
            "id": "eng-telugu-c5-l1",
            "title": "Hello 5",
            "description": "Hello, how are you?",
            "targetSentence": "నమస్కారం, మీరు ఎలా ఉన్నారు?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskaram, meeru ela unnaru?"
          },
          {
            "id": "eng-telugu-c5-l2",
            "title": "I am fine 5",
            "description": "I am fine, thank you.",
            "targetSentence": "నేను బాగున్నాను, ధన్యవాదాలు.",
            "translation": "I am fine, thank you.",
            "phonetics": "Nenu bagunnanu, dhanyavadalu."
          },
          {
            "id": "eng-telugu-c5-l3",
            "title": "Name 5",
            "description": "What is your name?",
            "targetSentence": "మీ పేరు ఏమిటి?",
            "translation": "What is your name?",
            "phonetics": "Mee peru emiti?"
          },
          {
            "id": "eng-telugu-c5-l4",
            "title": "My name 5",
            "description": "My name is Prajwal.",
            "targetSentence": "నా పేరు ప్రజ్వల్.",
            "translation": "My name is Prajwal.",
            "phonetics": "Naa peru Prajwal."
          },
          {
            "id": "eng-telugu-c5-l5",
            "title": "Nice to meet 5",
            "description": "Nice to meet you.",
            "targetSentence": "మిమ్మల్ని కలవడం సంతోషంగా ఉంది.",
            "translation": "Nice to meet you.",
            "phonetics": "Mimmalni kalavadam santoshanga undi."
          },
          {
            "id": "eng-telugu-c5-l6",
            "title": "Where is 5",
            "description": "Where is the train station?",
            "targetSentence": "రైల్వే స్టేషన్ ఎక్కడ ఉంది?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station ekkada undi?"
          },
          {
            "id": "eng-telugu-c5-l7",
            "title": "Help 5",
            "description": "Can you help me?",
            "targetSentence": "మీరు నాకు సహాయం చేయగలరా?",
            "translation": "Can you help me?",
            "phonetics": "Meeru naaku sahayam cheyagalara?"
          },
          {
            "id": "eng-telugu-c5-l8",
            "title": "Hungry 5",
            "description": "I am hungry.",
            "targetSentence": "నాకు ఆకలిగా ఉంది.",
            "translation": "I am hungry.",
            "phonetics": "Naaku aakaliga undi."
          },
          {
            "id": "eng-telugu-c5-l9",
            "title": "Water 5",
            "description": "Please give me some water.",
            "targetSentence": "దయచేసి నాకు కొంచెం నీరు ఇవ్వండి.",
            "translation": "Please give me some water.",
            "phonetics": "Dayachesi naaku konchem neeru ivvandi."
          },
          {
            "id": "eng-telugu-c5-l10",
            "title": "Price 5",
            "description": "What is the price?",
            "targetSentence": "దీని ధర ఎంత?",
            "translation": "What is the price?",
            "phonetics": "Deeni dhara entha?"
          }
        ]
      },
      {
        "id": "eng-telugu-c6",
        "title": "Chapter 6: Time & Dates",
        "description": "Learn to tell time and dates",
        "lessons": [
          {
            "id": "eng-telugu-c6-l1",
            "title": "Hello 6",
            "description": "Hello, how are you?",
            "targetSentence": "నమస్కారం, మీరు ఎలా ఉన్నారు?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskaram, meeru ela unnaru?"
          },
          {
            "id": "eng-telugu-c6-l2",
            "title": "I am fine 6",
            "description": "I am fine, thank you.",
            "targetSentence": "నేను బాగున్నాను, ధన్యవాదాలు.",
            "translation": "I am fine, thank you.",
            "phonetics": "Nenu bagunnanu, dhanyavadalu."
          },
          {
            "id": "eng-telugu-c6-l3",
            "title": "Name 6",
            "description": "What is your name?",
            "targetSentence": "మీ పేరు ఏమిటి?",
            "translation": "What is your name?",
            "phonetics": "Mee peru emiti?"
          },
          {
            "id": "eng-telugu-c6-l4",
            "title": "My name 6",
            "description": "My name is Prajwal.",
            "targetSentence": "నా పేరు ప్రజ్వల్.",
            "translation": "My name is Prajwal.",
            "phonetics": "Naa peru Prajwal."
          },
          {
            "id": "eng-telugu-c6-l5",
            "title": "Nice to meet 6",
            "description": "Nice to meet you.",
            "targetSentence": "మిమ్మల్ని కలవడం సంతోషంగా ఉంది.",
            "translation": "Nice to meet you.",
            "phonetics": "Mimmalni kalavadam santoshanga undi."
          },
          {
            "id": "eng-telugu-c6-l6",
            "title": "Where is 6",
            "description": "Where is the train station?",
            "targetSentence": "రైల్వే స్టేషన్ ఎక్కడ ఉంది?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station ekkada undi?"
          },
          {
            "id": "eng-telugu-c6-l7",
            "title": "Help 6",
            "description": "Can you help me?",
            "targetSentence": "మీరు నాకు సహాయం చేయగలరా?",
            "translation": "Can you help me?",
            "phonetics": "Meeru naaku sahayam cheyagalara?"
          },
          {
            "id": "eng-telugu-c6-l8",
            "title": "Hungry 6",
            "description": "I am hungry.",
            "targetSentence": "నాకు ఆకలిగా ఉంది.",
            "translation": "I am hungry.",
            "phonetics": "Naaku aakaliga undi."
          },
          {
            "id": "eng-telugu-c6-l9",
            "title": "Water 6",
            "description": "Please give me some water.",
            "targetSentence": "దయచేసి నాకు కొంచెం నీరు ఇవ్వండి.",
            "translation": "Please give me some water.",
            "phonetics": "Dayachesi naaku konchem neeru ivvandi."
          },
          {
            "id": "eng-telugu-c6-l10",
            "title": "Price 6",
            "description": "What is the price?",
            "targetSentence": "దీని ధర ఎంత?",
            "translation": "What is the price?",
            "phonetics": "Deeni dhara entha?"
          }
        ]
      },
      {
        "id": "eng-telugu-c7",
        "title": "Chapter 7: Family & Friends",
        "description": "Talk about your loved ones",
        "lessons": [
          {
            "id": "eng-telugu-c7-l1",
            "title": "Hello 7",
            "description": "Hello, how are you?",
            "targetSentence": "నమస్కారం, మీరు ఎలా ఉన్నారు?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskaram, meeru ela unnaru?"
          },
          {
            "id": "eng-telugu-c7-l2",
            "title": "I am fine 7",
            "description": "I am fine, thank you.",
            "targetSentence": "నేను బాగున్నాను, ధన్యవాదాలు.",
            "translation": "I am fine, thank you.",
            "phonetics": "Nenu bagunnanu, dhanyavadalu."
          },
          {
            "id": "eng-telugu-c7-l3",
            "title": "Name 7",
            "description": "What is your name?",
            "targetSentence": "మీ పేరు ఏమిటి?",
            "translation": "What is your name?",
            "phonetics": "Mee peru emiti?"
          },
          {
            "id": "eng-telugu-c7-l4",
            "title": "My name 7",
            "description": "My name is Prajwal.",
            "targetSentence": "నా పేరు ప్రజ్వల్.",
            "translation": "My name is Prajwal.",
            "phonetics": "Naa peru Prajwal."
          },
          {
            "id": "eng-telugu-c7-l5",
            "title": "Nice to meet 7",
            "description": "Nice to meet you.",
            "targetSentence": "మిమ్మల్ని కలవడం సంతోషంగా ఉంది.",
            "translation": "Nice to meet you.",
            "phonetics": "Mimmalni kalavadam santoshanga undi."
          },
          {
            "id": "eng-telugu-c7-l6",
            "title": "Where is 7",
            "description": "Where is the train station?",
            "targetSentence": "రైల్వే స్టేషన్ ఎక్కడ ఉంది?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station ekkada undi?"
          },
          {
            "id": "eng-telugu-c7-l7",
            "title": "Help 7",
            "description": "Can you help me?",
            "targetSentence": "మీరు నాకు సహాయం చేయగలరా?",
            "translation": "Can you help me?",
            "phonetics": "Meeru naaku sahayam cheyagalara?"
          },
          {
            "id": "eng-telugu-c7-l8",
            "title": "Hungry 7",
            "description": "I am hungry.",
            "targetSentence": "నాకు ఆకలిగా ఉంది.",
            "translation": "I am hungry.",
            "phonetics": "Naaku aakaliga undi."
          },
          {
            "id": "eng-telugu-c7-l9",
            "title": "Water 7",
            "description": "Please give me some water.",
            "targetSentence": "దయచేసి నాకు కొంచెం నీరు ఇవ్వండి.",
            "translation": "Please give me some water.",
            "phonetics": "Dayachesi naaku konchem neeru ivvandi."
          },
          {
            "id": "eng-telugu-c7-l10",
            "title": "Price 7",
            "description": "What is the price?",
            "targetSentence": "దీని ధర ఎంత?",
            "translation": "What is the price?",
            "phonetics": "Deeni dhara entha?"
          }
        ]
      },
      {
        "id": "eng-telugu-c8",
        "title": "Chapter 8: Work & School",
        "description": "Phrases for professional settings",
        "lessons": [
          {
            "id": "eng-telugu-c8-l1",
            "title": "Hello 8",
            "description": "Hello, how are you?",
            "targetSentence": "నమస్కారం, మీరు ఎలా ఉన్నారు?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskaram, meeru ela unnaru?"
          },
          {
            "id": "eng-telugu-c8-l2",
            "title": "I am fine 8",
            "description": "I am fine, thank you.",
            "targetSentence": "నేను బాగున్నాను, ధన్యవాదాలు.",
            "translation": "I am fine, thank you.",
            "phonetics": "Nenu bagunnanu, dhanyavadalu."
          },
          {
            "id": "eng-telugu-c8-l3",
            "title": "Name 8",
            "description": "What is your name?",
            "targetSentence": "మీ పేరు ఏమిటి?",
            "translation": "What is your name?",
            "phonetics": "Mee peru emiti?"
          },
          {
            "id": "eng-telugu-c8-l4",
            "title": "My name 8",
            "description": "My name is Prajwal.",
            "targetSentence": "నా పేరు ప్రజ్వల్.",
            "translation": "My name is Prajwal.",
            "phonetics": "Naa peru Prajwal."
          },
          {
            "id": "eng-telugu-c8-l5",
            "title": "Nice to meet 8",
            "description": "Nice to meet you.",
            "targetSentence": "మిమ్మల్ని కలవడం సంతోషంగా ఉంది.",
            "translation": "Nice to meet you.",
            "phonetics": "Mimmalni kalavadam santoshanga undi."
          },
          {
            "id": "eng-telugu-c8-l6",
            "title": "Where is 8",
            "description": "Where is the train station?",
            "targetSentence": "రైల్వే స్టేషన్ ఎక్కడ ఉంది?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station ekkada undi?"
          },
          {
            "id": "eng-telugu-c8-l7",
            "title": "Help 8",
            "description": "Can you help me?",
            "targetSentence": "మీరు నాకు సహాయం చేయగలరా?",
            "translation": "Can you help me?",
            "phonetics": "Meeru naaku sahayam cheyagalara?"
          },
          {
            "id": "eng-telugu-c8-l8",
            "title": "Hungry 8",
            "description": "I am hungry.",
            "targetSentence": "నాకు ఆకలిగా ఉంది.",
            "translation": "I am hungry.",
            "phonetics": "Naaku aakaliga undi."
          },
          {
            "id": "eng-telugu-c8-l9",
            "title": "Water 8",
            "description": "Please give me some water.",
            "targetSentence": "దయచేసి నాకు కొంచెం నీరు ఇవ్వండి.",
            "translation": "Please give me some water.",
            "phonetics": "Dayachesi naaku konchem neeru ivvandi."
          },
          {
            "id": "eng-telugu-c8-l10",
            "title": "Price 8",
            "description": "What is the price?",
            "targetSentence": "దీని ధర ఎంత?",
            "translation": "What is the price?",
            "phonetics": "Deeni dhara entha?"
          }
        ]
      },
      {
        "id": "eng-telugu-c9",
        "title": "Chapter 9: Health & Body",
        "description": "Describe how you feel",
        "lessons": [
          {
            "id": "eng-telugu-c9-l1",
            "title": "Hello 9",
            "description": "Hello, how are you?",
            "targetSentence": "నమస్కారం, మీరు ఎలా ఉన్నారు?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskaram, meeru ela unnaru?"
          },
          {
            "id": "eng-telugu-c9-l2",
            "title": "I am fine 9",
            "description": "I am fine, thank you.",
            "targetSentence": "నేను బాగున్నాను, ధన్యవాదాలు.",
            "translation": "I am fine, thank you.",
            "phonetics": "Nenu bagunnanu, dhanyavadalu."
          },
          {
            "id": "eng-telugu-c9-l3",
            "title": "Name 9",
            "description": "What is your name?",
            "targetSentence": "మీ పేరు ఏమిటి?",
            "translation": "What is your name?",
            "phonetics": "Mee peru emiti?"
          },
          {
            "id": "eng-telugu-c9-l4",
            "title": "My name 9",
            "description": "My name is Prajwal.",
            "targetSentence": "నా పేరు ప్రజ్వల్.",
            "translation": "My name is Prajwal.",
            "phonetics": "Naa peru Prajwal."
          },
          {
            "id": "eng-telugu-c9-l5",
            "title": "Nice to meet 9",
            "description": "Nice to meet you.",
            "targetSentence": "మిమ్మల్ని కలవడం సంతోషంగా ఉంది.",
            "translation": "Nice to meet you.",
            "phonetics": "Mimmalni kalavadam santoshanga undi."
          },
          {
            "id": "eng-telugu-c9-l6",
            "title": "Where is 9",
            "description": "Where is the train station?",
            "targetSentence": "రైల్వే స్టేషన్ ఎక్కడ ఉంది?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station ekkada undi?"
          },
          {
            "id": "eng-telugu-c9-l7",
            "title": "Help 9",
            "description": "Can you help me?",
            "targetSentence": "మీరు నాకు సహాయం చేయగలరా?",
            "translation": "Can you help me?",
            "phonetics": "Meeru naaku sahayam cheyagalara?"
          },
          {
            "id": "eng-telugu-c9-l8",
            "title": "Hungry 9",
            "description": "I am hungry.",
            "targetSentence": "నాకు ఆకలిగా ఉంది.",
            "translation": "I am hungry.",
            "phonetics": "Naaku aakaliga undi."
          },
          {
            "id": "eng-telugu-c9-l9",
            "title": "Water 9",
            "description": "Please give me some water.",
            "targetSentence": "దయచేసి నాకు కొంచెం నీరు ఇవ్వండి.",
            "translation": "Please give me some water.",
            "phonetics": "Dayachesi naaku konchem neeru ivvandi."
          },
          {
            "id": "eng-telugu-c9-l10",
            "title": "Price 9",
            "description": "What is the price?",
            "targetSentence": "దీని ధర ఎంత?",
            "translation": "What is the price?",
            "phonetics": "Deeni dhara entha?"
          }
        ]
      },
      {
        "id": "eng-telugu-c10",
        "title": "Chapter 10: Weather & Nature",
        "description": "Talk about the environment",
        "lessons": [
          {
            "id": "eng-telugu-c10-l1",
            "title": "Hello 10",
            "description": "Hello, how are you?",
            "targetSentence": "నమస్కారం, మీరు ఎలా ఉన్నారు?",
            "translation": "Hello, how are you?",
            "phonetics": "Namaskaram, meeru ela unnaru?"
          },
          {
            "id": "eng-telugu-c10-l2",
            "title": "I am fine 10",
            "description": "I am fine, thank you.",
            "targetSentence": "నేను బాగున్నాను, ధన్యవాదాలు.",
            "translation": "I am fine, thank you.",
            "phonetics": "Nenu bagunnanu, dhanyavadalu."
          },
          {
            "id": "eng-telugu-c10-l3",
            "title": "Name 10",
            "description": "What is your name?",
            "targetSentence": "మీ పేరు ఏమిటి?",
            "translation": "What is your name?",
            "phonetics": "Mee peru emiti?"
          },
          {
            "id": "eng-telugu-c10-l4",
            "title": "My name 10",
            "description": "My name is Prajwal.",
            "targetSentence": "నా పేరు ప్రజ్వల్.",
            "translation": "My name is Prajwal.",
            "phonetics": "Naa peru Prajwal."
          },
          {
            "id": "eng-telugu-c10-l5",
            "title": "Nice to meet 10",
            "description": "Nice to meet you.",
            "targetSentence": "మిమ్మల్ని కలవడం సంతోషంగా ఉంది.",
            "translation": "Nice to meet you.",
            "phonetics": "Mimmalni kalavadam santoshanga undi."
          },
          {
            "id": "eng-telugu-c10-l6",
            "title": "Where is 10",
            "description": "Where is the train station?",
            "targetSentence": "రైల్వే స్టేషన్ ఎక్కడ ఉంది?",
            "translation": "Where is the train station?",
            "phonetics": "Railway station ekkada undi?"
          },
          {
            "id": "eng-telugu-c10-l7",
            "title": "Help 10",
            "description": "Can you help me?",
            "targetSentence": "మీరు నాకు సహాయం చేయగలరా?",
            "translation": "Can you help me?",
            "phonetics": "Meeru naaku sahayam cheyagalara?"
          },
          {
            "id": "eng-telugu-c10-l8",
            "title": "Hungry 10",
            "description": "I am hungry.",
            "targetSentence": "నాకు ఆకలిగా ఉంది.",
            "translation": "I am hungry.",
            "phonetics": "Naaku aakaliga undi."
          },
          {
            "id": "eng-telugu-c10-l9",
            "title": "Water 10",
            "description": "Please give me some water.",
            "targetSentence": "దయచేసి నాకు కొంచెం నీరు ఇవ్వండి.",
            "translation": "Please give me some water.",
            "phonetics": "Dayachesi naaku konchem neeru ivvandi."
          },
          {
            "id": "eng-telugu-c10-l10",
            "title": "Price 10",
            "description": "What is the price?",
            "targetSentence": "దీని ధర ఎంత?",
            "translation": "What is the price?",
            "phonetics": "Deeni dhara entha?"
          }
        ]
      }
    ]
  },
  {
    "id": "eng-tamil",
    "title": "English → Tamil",
    "subtitle": "TAMIL NADU",
    "chapters": [
      {
        "id": "eng-tamil-c1",
        "title": "Chapter 1: Basics & Greetings",
        "description": "Start your journey with everyday greetings",
        "lessons": [
          {
            "id": "eng-tamil-c1-l1",
            "title": "Hello 1",
            "description": "Hello, how are you?",
            "targetSentence": "வணக்கம், நீங்கள் எப்படி இருக்கிறீர்கள்?",
            "translation": "Hello, how are you?",
            "phonetics": "Vanakkam, neengal eppadi irukkireergal?"
          },
          {
            "id": "eng-tamil-c1-l2",
            "title": "I am fine 1",
            "description": "I am fine, thank you.",
            "targetSentence": "நான் நன்றாக இருக்கிறேன், நன்றி.",
            "translation": "I am fine, thank you.",
            "phonetics": "Naan nandraaga irukkiren, nandri."
          },
          {
            "id": "eng-tamil-c1-l3",
            "title": "Name 1",
            "description": "What is your name?",
            "targetSentence": "உங்கள் பெயர் என்ன?",
            "translation": "What is your name?",
            "phonetics": "Ungal peyar enna?"
          },
          {
            "id": "eng-tamil-c1-l4",
            "title": "My name 1",
            "description": "My name is Prajwal.",
            "targetSentence": "என் பெயர் பிரஜ்வல்.",
            "translation": "My name is Prajwal.",
            "phonetics": "En peyar Prajwal."
          },
          {
            "id": "eng-tamil-c1-l5",
            "title": "Nice to meet 1",
            "description": "Nice to meet you.",
            "targetSentence": "உங்களை சந்தித்ததில் மகிழ்ச்சி.",
            "translation": "Nice to meet you.",
            "phonetics": "Ungalai santhithathil magizhchi."
          },
          {
            "id": "eng-tamil-c1-l6",
            "title": "Where is 1",
            "description": "Where is the train station?",
            "targetSentence": "ரயில் நிலையம் எங்கே இருக்கிறது?",
            "translation": "Where is the train station?",
            "phonetics": "Rayil nilayam enge irukkirathu?"
          },
          {
            "id": "eng-tamil-c1-l7",
            "title": "Help 1",
            "description": "Can you help me?",
            "targetSentence": "எனக்கு உதவி செய்ய முடியுமா?",
            "translation": "Can you help me?",
            "phonetics": "Enakku udhavi seyya mudiyuma?"
          },
          {
            "id": "eng-tamil-c1-l8",
            "title": "Hungry 1",
            "description": "I am hungry.",
            "targetSentence": "எனக்கு பசிக்கிறது.",
            "translation": "I am hungry.",
            "phonetics": "Enakku pasikkirathu."
          },
          {
            "id": "eng-tamil-c1-l9",
            "title": "Water 1",
            "description": "Please give me some water.",
            "targetSentence": "தயவுசெய்து எனக்கு கொஞ்சம் தண்ணீர் கொடுங்கள்.",
            "translation": "Please give me some water.",
            "phonetics": "Thayavuseythu enakku konjam thanneer kodungal."
          },
          {
            "id": "eng-tamil-c1-l10",
            "title": "Price 1",
            "description": "What is the price?",
            "targetSentence": "இதன் விலை என்ன?",
            "translation": "What is the price?",
            "phonetics": "Ithan vilai enna?"
          }
        ]
      },
      {
        "id": "eng-tamil-c2",
        "title": "Chapter 2: Travel & Directions",
        "description": "Navigate your way around",
        "lessons": [
          {
            "id": "eng-tamil-c2-l1",
            "title": "Hello 2",
            "description": "Hello, how are you?",
            "targetSentence": "வணக்கம், நீங்கள் எப்படி இருக்கிறீர்கள்?",
            "translation": "Hello, how are you?",
            "phonetics": "Vanakkam, neengal eppadi irukkireergal?"
          },
          {
            "id": "eng-tamil-c2-l2",
            "title": "I am fine 2",
            "description": "I am fine, thank you.",
            "targetSentence": "நான் நன்றாக இருக்கிறேன், நன்றி.",
            "translation": "I am fine, thank you.",
            "phonetics": "Naan nandraaga irukkiren, nandri."
          },
          {
            "id": "eng-tamil-c2-l3",
            "title": "Name 2",
            "description": "What is your name?",
            "targetSentence": "உங்கள் பெயர் என்ன?",
            "translation": "What is your name?",
            "phonetics": "Ungal peyar enna?"
          },
          {
            "id": "eng-tamil-c2-l4",
            "title": "My name 2",
            "description": "My name is Prajwal.",
            "targetSentence": "என் பெயர் பிரஜ்வல்.",
            "translation": "My name is Prajwal.",
            "phonetics": "En peyar Prajwal."
          },
          {
            "id": "eng-tamil-c2-l5",
            "title": "Nice to meet 2",
            "description": "Nice to meet you.",
            "targetSentence": "உங்களை சந்தித்ததில் மகிழ்ச்சி.",
            "translation": "Nice to meet you.",
            "phonetics": "Ungalai santhithathil magizhchi."
          },
          {
            "id": "eng-tamil-c2-l6",
            "title": "Where is 2",
            "description": "Where is the train station?",
            "targetSentence": "ரயில் நிலையம் எங்கே இருக்கிறது?",
            "translation": "Where is the train station?",
            "phonetics": "Rayil nilayam enge irukkirathu?"
          },
          {
            "id": "eng-tamil-c2-l7",
            "title": "Help 2",
            "description": "Can you help me?",
            "targetSentence": "எனக்கு உதவி செய்ய முடியுமா?",
            "translation": "Can you help me?",
            "phonetics": "Enakku udhavi seyya mudiyuma?"
          },
          {
            "id": "eng-tamil-c2-l8",
            "title": "Hungry 2",
            "description": "I am hungry.",
            "targetSentence": "எனக்கு பசிக்கிறது.",
            "translation": "I am hungry.",
            "phonetics": "Enakku pasikkirathu."
          },
          {
            "id": "eng-tamil-c2-l9",
            "title": "Water 2",
            "description": "Please give me some water.",
            "targetSentence": "தயவுசெய்து எனக்கு கொஞ்சம் தண்ணீர் கொடுங்கள்.",
            "translation": "Please give me some water.",
            "phonetics": "Thayavuseythu enakku konjam thanneer kodungal."
          },
          {
            "id": "eng-tamil-c2-l10",
            "title": "Price 2",
            "description": "What is the price?",
            "targetSentence": "இதன் விலை என்ன?",
            "translation": "What is the price?",
            "phonetics": "Ithan vilai enna?"
          }
        ]
      },
      {
        "id": "eng-tamil-c3",
        "title": "Chapter 3: Food & Dining",
        "description": "Order food and talk about meals",
        "lessons": [
          {
            "id": "eng-tamil-c3-l1",
            "title": "Hello 3",
            "description": "Hello, how are you?",
            "targetSentence": "வணக்கம், நீங்கள் எப்படி இருக்கிறீர்கள்?",
            "translation": "Hello, how are you?",
            "phonetics": "Vanakkam, neengal eppadi irukkireergal?"
          },
          {
            "id": "eng-tamil-c3-l2",
            "title": "I am fine 3",
            "description": "I am fine, thank you.",
            "targetSentence": "நான் நன்றாக இருக்கிறேன், நன்றி.",
            "translation": "I am fine, thank you.",
            "phonetics": "Naan nandraaga irukkiren, nandri."
          },
          {
            "id": "eng-tamil-c3-l3",
            "title": "Name 3",
            "description": "What is your name?",
            "targetSentence": "உங்கள் பெயர் என்ன?",
            "translation": "What is your name?",
            "phonetics": "Ungal peyar enna?"
          },
          {
            "id": "eng-tamil-c3-l4",
            "title": "My name 3",
            "description": "My name is Prajwal.",
            "targetSentence": "என் பெயர் பிரஜ்வல்.",
            "translation": "My name is Prajwal.",
            "phonetics": "En peyar Prajwal."
          },
          {
            "id": "eng-tamil-c3-l5",
            "title": "Nice to meet 3",
            "description": "Nice to meet you.",
            "targetSentence": "உங்களை சந்தித்ததில் மகிழ்ச்சி.",
            "translation": "Nice to meet you.",
            "phonetics": "Ungalai santhithathil magizhchi."
          },
          {
            "id": "eng-tamil-c3-l6",
            "title": "Where is 3",
            "description": "Where is the train station?",
            "targetSentence": "ரயில் நிலையம் எங்கே இருக்கிறது?",
            "translation": "Where is the train station?",
            "phonetics": "Rayil nilayam enge irukkirathu?"
          },
          {
            "id": "eng-tamil-c3-l7",
            "title": "Help 3",
            "description": "Can you help me?",
            "targetSentence": "எனக்கு உதவி செய்ய முடியுமா?",
            "translation": "Can you help me?",
            "phonetics": "Enakku udhavi seyya mudiyuma?"
          },
          {
            "id": "eng-tamil-c3-l8",
            "title": "Hungry 3",
            "description": "I am hungry.",
            "targetSentence": "எனக்கு பசிக்கிறது.",
            "translation": "I am hungry.",
            "phonetics": "Enakku pasikkirathu."
          },
          {
            "id": "eng-tamil-c3-l9",
            "title": "Water 3",
            "description": "Please give me some water.",
            "targetSentence": "தயவுசெய்து எனக்கு கொஞ்சம் தண்ணீர் கொடுங்கள்.",
            "translation": "Please give me some water.",
            "phonetics": "Thayavuseythu enakku konjam thanneer kodungal."
          },
          {
            "id": "eng-tamil-c3-l10",
            "title": "Price 3",
            "description": "What is the price?",
            "targetSentence": "இதன் விலை என்ன?",
            "translation": "What is the price?",
            "phonetics": "Ithan vilai enna?"
          }
        ]
      },
      {
        "id": "eng-tamil-c4",
        "title": "Chapter 4: Shopping & Money",
        "description": "Buy things and handle money",
        "lessons": [
          {
            "id": "eng-tamil-c4-l1",
            "title": "Hello 4",
            "description": "Hello, how are you?",
            "targetSentence": "வணக்கம், நீங்கள் எப்படி இருக்கிறீர்கள்?",
            "translation": "Hello, how are you?",
            "phonetics": "Vanakkam, neengal eppadi irukkireergal?"
          },
          {
            "id": "eng-tamil-c4-l2",
            "title": "I am fine 4",
            "description": "I am fine, thank you.",
            "targetSentence": "நான் நன்றாக இருக்கிறேன், நன்றி.",
            "translation": "I am fine, thank you.",
            "phonetics": "Naan nandraaga irukkiren, nandri."
          },
          {
            "id": "eng-tamil-c4-l3",
            "title": "Name 4",
            "description": "What is your name?",
            "targetSentence": "உங்கள் பெயர் என்ன?",
            "translation": "What is your name?",
            "phonetics": "Ungal peyar enna?"
          },
          {
            "id": "eng-tamil-c4-l4",
            "title": "My name 4",
            "description": "My name is Prajwal.",
            "targetSentence": "என் பெயர் பிரஜ்வல்.",
            "translation": "My name is Prajwal.",
            "phonetics": "En peyar Prajwal."
          },
          {
            "id": "eng-tamil-c4-l5",
            "title": "Nice to meet 4",
            "description": "Nice to meet you.",
            "targetSentence": "உங்களை சந்தித்ததில் மகிழ்ச்சி.",
            "translation": "Nice to meet you.",
            "phonetics": "Ungalai santhithathil magizhchi."
          },
          {
            "id": "eng-tamil-c4-l6",
            "title": "Where is 4",
            "description": "Where is the train station?",
            "targetSentence": "ரயில் நிலையம் எங்கே இருக்கிறது?",
            "translation": "Where is the train station?",
            "phonetics": "Rayil nilayam enge irukkirathu?"
          },
          {
            "id": "eng-tamil-c4-l7",
            "title": "Help 4",
            "description": "Can you help me?",
            "targetSentence": "எனக்கு உதவி செய்ய முடியுமா?",
            "translation": "Can you help me?",
            "phonetics": "Enakku udhavi seyya mudiyuma?"
          },
          {
            "id": "eng-tamil-c4-l8",
            "title": "Hungry 4",
            "description": "I am hungry.",
            "targetSentence": "எனக்கு பசிக்கிறது.",
            "translation": "I am hungry.",
            "phonetics": "Enakku pasikkirathu."
          },
          {
            "id": "eng-tamil-c4-l9",
            "title": "Water 4",
            "description": "Please give me some water.",
            "targetSentence": "தயவுசெய்து எனக்கு கொஞ்சம் தண்ணீர் கொடுங்கள்.",
            "translation": "Please give me some water.",
            "phonetics": "Thayavuseythu enakku konjam thanneer kodungal."
          },
          {
            "id": "eng-tamil-c4-l10",
            "title": "Price 4",
            "description": "What is the price?",
            "targetSentence": "இதன் விலை என்ன?",
            "translation": "What is the price?",
            "phonetics": "Ithan vilai enna?"
          }
        ]
      },
      {
        "id": "eng-tamil-c5",
        "title": "Chapter 5: Emergency & Help",
        "description": "Crucial phrases for emergencies",
        "lessons": [
          {
            "id": "eng-tamil-c5-l1",
            "title": "Hello 5",
            "description": "Hello, how are you?",
            "targetSentence": "வணக்கம், நீங்கள் எப்படி இருக்கிறீர்கள்?",
            "translation": "Hello, how are you?",
            "phonetics": "Vanakkam, neengal eppadi irukkireergal?"
          },
          {
            "id": "eng-tamil-c5-l2",
            "title": "I am fine 5",
            "description": "I am fine, thank you.",
            "targetSentence": "நான் நன்றாக இருக்கிறேன், நன்றி.",
            "translation": "I am fine, thank you.",
            "phonetics": "Naan nandraaga irukkiren, nandri."
          },
          {
            "id": "eng-tamil-c5-l3",
            "title": "Name 5",
            "description": "What is your name?",
            "targetSentence": "உங்கள் பெயர் என்ன?",
            "translation": "What is your name?",
            "phonetics": "Ungal peyar enna?"
          },
          {
            "id": "eng-tamil-c5-l4",
            "title": "My name 5",
            "description": "My name is Prajwal.",
            "targetSentence": "என் பெயர் பிரஜ்வல்.",
            "translation": "My name is Prajwal.",
            "phonetics": "En peyar Prajwal."
          },
          {
            "id": "eng-tamil-c5-l5",
            "title": "Nice to meet 5",
            "description": "Nice to meet you.",
            "targetSentence": "உங்களை சந்தித்ததில் மகிழ்ச்சி.",
            "translation": "Nice to meet you.",
            "phonetics": "Ungalai santhithathil magizhchi."
          },
          {
            "id": "eng-tamil-c5-l6",
            "title": "Where is 5",
            "description": "Where is the train station?",
            "targetSentence": "ரயில் நிலையம் எங்கே இருக்கிறது?",
            "translation": "Where is the train station?",
            "phonetics": "Rayil nilayam enge irukkirathu?"
          },
          {
            "id": "eng-tamil-c5-l7",
            "title": "Help 5",
            "description": "Can you help me?",
            "targetSentence": "எனக்கு உதவி செய்ய முடியுமா?",
            "translation": "Can you help me?",
            "phonetics": "Enakku udhavi seyya mudiyuma?"
          },
          {
            "id": "eng-tamil-c5-l8",
            "title": "Hungry 5",
            "description": "I am hungry.",
            "targetSentence": "எனக்கு பசிக்கிறது.",
            "translation": "I am hungry.",
            "phonetics": "Enakku pasikkirathu."
          },
          {
            "id": "eng-tamil-c5-l9",
            "title": "Water 5",
            "description": "Please give me some water.",
            "targetSentence": "தயவுசெய்து எனக்கு கொஞ்சம் தண்ணீர் கொடுங்கள்.",
            "translation": "Please give me some water.",
            "phonetics": "Thayavuseythu enakku konjam thanneer kodungal."
          },
          {
            "id": "eng-tamil-c5-l10",
            "title": "Price 5",
            "description": "What is the price?",
            "targetSentence": "இதன் விலை என்ன?",
            "translation": "What is the price?",
            "phonetics": "Ithan vilai enna?"
          }
        ]
      },
      {
        "id": "eng-tamil-c6",
        "title": "Chapter 6: Time & Dates",
        "description": "Learn to tell time and dates",
        "lessons": [
          {
            "id": "eng-tamil-c6-l1",
            "title": "Hello 6",
            "description": "Hello, how are you?",
            "targetSentence": "வணக்கம், நீங்கள் எப்படி இருக்கிறீர்கள்?",
            "translation": "Hello, how are you?",
            "phonetics": "Vanakkam, neengal eppadi irukkireergal?"
          },
          {
            "id": "eng-tamil-c6-l2",
            "title": "I am fine 6",
            "description": "I am fine, thank you.",
            "targetSentence": "நான் நன்றாக இருக்கிறேன், நன்றி.",
            "translation": "I am fine, thank you.",
            "phonetics": "Naan nandraaga irukkiren, nandri."
          },
          {
            "id": "eng-tamil-c6-l3",
            "title": "Name 6",
            "description": "What is your name?",
            "targetSentence": "உங்கள் பெயர் என்ன?",
            "translation": "What is your name?",
            "phonetics": "Ungal peyar enna?"
          },
          {
            "id": "eng-tamil-c6-l4",
            "title": "My name 6",
            "description": "My name is Prajwal.",
            "targetSentence": "என் பெயர் பிரஜ்வல்.",
            "translation": "My name is Prajwal.",
            "phonetics": "En peyar Prajwal."
          },
          {
            "id": "eng-tamil-c6-l5",
            "title": "Nice to meet 6",
            "description": "Nice to meet you.",
            "targetSentence": "உங்களை சந்தித்ததில் மகிழ்ச்சி.",
            "translation": "Nice to meet you.",
            "phonetics": "Ungalai santhithathil magizhchi."
          },
          {
            "id": "eng-tamil-c6-l6",
            "title": "Where is 6",
            "description": "Where is the train station?",
            "targetSentence": "ரயில் நிலையம் எங்கே இருக்கிறது?",
            "translation": "Where is the train station?",
            "phonetics": "Rayil nilayam enge irukkirathu?"
          },
          {
            "id": "eng-tamil-c6-l7",
            "title": "Help 6",
            "description": "Can you help me?",
            "targetSentence": "எனக்கு உதவி செய்ய முடியுமா?",
            "translation": "Can you help me?",
            "phonetics": "Enakku udhavi seyya mudiyuma?"
          },
          {
            "id": "eng-tamil-c6-l8",
            "title": "Hungry 6",
            "description": "I am hungry.",
            "targetSentence": "எனக்கு பசிக்கிறது.",
            "translation": "I am hungry.",
            "phonetics": "Enakku pasikkirathu."
          },
          {
            "id": "eng-tamil-c6-l9",
            "title": "Water 6",
            "description": "Please give me some water.",
            "targetSentence": "தயவுசெய்து எனக்கு கொஞ்சம் தண்ணீர் கொடுங்கள்.",
            "translation": "Please give me some water.",
            "phonetics": "Thayavuseythu enakku konjam thanneer kodungal."
          },
          {
            "id": "eng-tamil-c6-l10",
            "title": "Price 6",
            "description": "What is the price?",
            "targetSentence": "இதன் விலை என்ன?",
            "translation": "What is the price?",
            "phonetics": "Ithan vilai enna?"
          }
        ]
      },
      {
        "id": "eng-tamil-c7",
        "title": "Chapter 7: Family & Friends",
        "description": "Talk about your loved ones",
        "lessons": [
          {
            "id": "eng-tamil-c7-l1",
            "title": "Hello 7",
            "description": "Hello, how are you?",
            "targetSentence": "வணக்கம், நீங்கள் எப்படி இருக்கிறீர்கள்?",
            "translation": "Hello, how are you?",
            "phonetics": "Vanakkam, neengal eppadi irukkireergal?"
          },
          {
            "id": "eng-tamil-c7-l2",
            "title": "I am fine 7",
            "description": "I am fine, thank you.",
            "targetSentence": "நான் நன்றாக இருக்கிறேன், நன்றி.",
            "translation": "I am fine, thank you.",
            "phonetics": "Naan nandraaga irukkiren, nandri."
          },
          {
            "id": "eng-tamil-c7-l3",
            "title": "Name 7",
            "description": "What is your name?",
            "targetSentence": "உங்கள் பெயர் என்ன?",
            "translation": "What is your name?",
            "phonetics": "Ungal peyar enna?"
          },
          {
            "id": "eng-tamil-c7-l4",
            "title": "My name 7",
            "description": "My name is Prajwal.",
            "targetSentence": "என் பெயர் பிரஜ்வல்.",
            "translation": "My name is Prajwal.",
            "phonetics": "En peyar Prajwal."
          },
          {
            "id": "eng-tamil-c7-l5",
            "title": "Nice to meet 7",
            "description": "Nice to meet you.",
            "targetSentence": "உங்களை சந்தித்ததில் மகிழ்ச்சி.",
            "translation": "Nice to meet you.",
            "phonetics": "Ungalai santhithathil magizhchi."
          },
          {
            "id": "eng-tamil-c7-l6",
            "title": "Where is 7",
            "description": "Where is the train station?",
            "targetSentence": "ரயில் நிலையம் எங்கே இருக்கிறது?",
            "translation": "Where is the train station?",
            "phonetics": "Rayil nilayam enge irukkirathu?"
          },
          {
            "id": "eng-tamil-c7-l7",
            "title": "Help 7",
            "description": "Can you help me?",
            "targetSentence": "எனக்கு உதவி செய்ய முடியுமா?",
            "translation": "Can you help me?",
            "phonetics": "Enakku udhavi seyya mudiyuma?"
          },
          {
            "id": "eng-tamil-c7-l8",
            "title": "Hungry 7",
            "description": "I am hungry.",
            "targetSentence": "எனக்கு பசிக்கிறது.",
            "translation": "I am hungry.",
            "phonetics": "Enakku pasikkirathu."
          },
          {
            "id": "eng-tamil-c7-l9",
            "title": "Water 7",
            "description": "Please give me some water.",
            "targetSentence": "தயவுசெய்து எனக்கு கொஞ்சம் தண்ணீர் கொடுங்கள்.",
            "translation": "Please give me some water.",
            "phonetics": "Thayavuseythu enakku konjam thanneer kodungal."
          },
          {
            "id": "eng-tamil-c7-l10",
            "title": "Price 7",
            "description": "What is the price?",
            "targetSentence": "இதன் விலை என்ன?",
            "translation": "What is the price?",
            "phonetics": "Ithan vilai enna?"
          }
        ]
      },
      {
        "id": "eng-tamil-c8",
        "title": "Chapter 8: Work & School",
        "description": "Phrases for professional settings",
        "lessons": [
          {
            "id": "eng-tamil-c8-l1",
            "title": "Hello 8",
            "description": "Hello, how are you?",
            "targetSentence": "வணக்கம், நீங்கள் எப்படி இருக்கிறீர்கள்?",
            "translation": "Hello, how are you?",
            "phonetics": "Vanakkam, neengal eppadi irukkireergal?"
          },
          {
            "id": "eng-tamil-c8-l2",
            "title": "I am fine 8",
            "description": "I am fine, thank you.",
            "targetSentence": "நான் நன்றாக இருக்கிறேன், நன்றி.",
            "translation": "I am fine, thank you.",
            "phonetics": "Naan nandraaga irukkiren, nandri."
          },
          {
            "id": "eng-tamil-c8-l3",
            "title": "Name 8",
            "description": "What is your name?",
            "targetSentence": "உங்கள் பெயர் என்ன?",
            "translation": "What is your name?",
            "phonetics": "Ungal peyar enna?"
          },
          {
            "id": "eng-tamil-c8-l4",
            "title": "My name 8",
            "description": "My name is Prajwal.",
            "targetSentence": "என் பெயர் பிரஜ்வல்.",
            "translation": "My name is Prajwal.",
            "phonetics": "En peyar Prajwal."
          },
          {
            "id": "eng-tamil-c8-l5",
            "title": "Nice to meet 8",
            "description": "Nice to meet you.",
            "targetSentence": "உங்களை சந்தித்ததில் மகிழ்ச்சி.",
            "translation": "Nice to meet you.",
            "phonetics": "Ungalai santhithathil magizhchi."
          },
          {
            "id": "eng-tamil-c8-l6",
            "title": "Where is 8",
            "description": "Where is the train station?",
            "targetSentence": "ரயில் நிலையம் எங்கே இருக்கிறது?",
            "translation": "Where is the train station?",
            "phonetics": "Rayil nilayam enge irukkirathu?"
          },
          {
            "id": "eng-tamil-c8-l7",
            "title": "Help 8",
            "description": "Can you help me?",
            "targetSentence": "எனக்கு உதவி செய்ய முடியுமா?",
            "translation": "Can you help me?",
            "phonetics": "Enakku udhavi seyya mudiyuma?"
          },
          {
            "id": "eng-tamil-c8-l8",
            "title": "Hungry 8",
            "description": "I am hungry.",
            "targetSentence": "எனக்கு பசிக்கிறது.",
            "translation": "I am hungry.",
            "phonetics": "Enakku pasikkirathu."
          },
          {
            "id": "eng-tamil-c8-l9",
            "title": "Water 8",
            "description": "Please give me some water.",
            "targetSentence": "தயவுசெய்து எனக்கு கொஞ்சம் தண்ணீர் கொடுங்கள்.",
            "translation": "Please give me some water.",
            "phonetics": "Thayavuseythu enakku konjam thanneer kodungal."
          },
          {
            "id": "eng-tamil-c8-l10",
            "title": "Price 8",
            "description": "What is the price?",
            "targetSentence": "இதன் விலை என்ன?",
            "translation": "What is the price?",
            "phonetics": "Ithan vilai enna?"
          }
        ]
      },
      {
        "id": "eng-tamil-c9",
        "title": "Chapter 9: Health & Body",
        "description": "Describe how you feel",
        "lessons": [
          {
            "id": "eng-tamil-c9-l1",
            "title": "Hello 9",
            "description": "Hello, how are you?",
            "targetSentence": "வணக்கம், நீங்கள் எப்படி இருக்கிறீர்கள்?",
            "translation": "Hello, how are you?",
            "phonetics": "Vanakkam, neengal eppadi irukkireergal?"
          },
          {
            "id": "eng-tamil-c9-l2",
            "title": "I am fine 9",
            "description": "I am fine, thank you.",
            "targetSentence": "நான் நன்றாக இருக்கிறேன், நன்றி.",
            "translation": "I am fine, thank you.",
            "phonetics": "Naan nandraaga irukkiren, nandri."
          },
          {
            "id": "eng-tamil-c9-l3",
            "title": "Name 9",
            "description": "What is your name?",
            "targetSentence": "உங்கள் பெயர் என்ன?",
            "translation": "What is your name?",
            "phonetics": "Ungal peyar enna?"
          },
          {
            "id": "eng-tamil-c9-l4",
            "title": "My name 9",
            "description": "My name is Prajwal.",
            "targetSentence": "என் பெயர் பிரஜ்வல்.",
            "translation": "My name is Prajwal.",
            "phonetics": "En peyar Prajwal."
          },
          {
            "id": "eng-tamil-c9-l5",
            "title": "Nice to meet 9",
            "description": "Nice to meet you.",
            "targetSentence": "உங்களை சந்தித்ததில் மகிழ்ச்சி.",
            "translation": "Nice to meet you.",
            "phonetics": "Ungalai santhithathil magizhchi."
          },
          {
            "id": "eng-tamil-c9-l6",
            "title": "Where is 9",
            "description": "Where is the train station?",
            "targetSentence": "ரயில் நிலையம் எங்கே இருக்கிறது?",
            "translation": "Where is the train station?",
            "phonetics": "Rayil nilayam enge irukkirathu?"
          },
          {
            "id": "eng-tamil-c9-l7",
            "title": "Help 9",
            "description": "Can you help me?",
            "targetSentence": "எனக்கு உதவி செய்ய முடியுமா?",
            "translation": "Can you help me?",
            "phonetics": "Enakku udhavi seyya mudiyuma?"
          },
          {
            "id": "eng-tamil-c9-l8",
            "title": "Hungry 9",
            "description": "I am hungry.",
            "targetSentence": "எனக்கு பசிக்கிறது.",
            "translation": "I am hungry.",
            "phonetics": "Enakku pasikkirathu."
          },
          {
            "id": "eng-tamil-c9-l9",
            "title": "Water 9",
            "description": "Please give me some water.",
            "targetSentence": "தயவுசெய்து எனக்கு கொஞ்சம் தண்ணீர் கொடுங்கள்.",
            "translation": "Please give me some water.",
            "phonetics": "Thayavuseythu enakku konjam thanneer kodungal."
          },
          {
            "id": "eng-tamil-c9-l10",
            "title": "Price 9",
            "description": "What is the price?",
            "targetSentence": "இதன் விலை என்ன?",
            "translation": "What is the price?",
            "phonetics": "Ithan vilai enna?"
          }
        ]
      },
      {
        "id": "eng-tamil-c10",
        "title": "Chapter 10: Weather & Nature",
        "description": "Talk about the environment",
        "lessons": [
          {
            "id": "eng-tamil-c10-l1",
            "title": "Hello 10",
            "description": "Hello, how are you?",
            "targetSentence": "வணக்கம், நீங்கள் எப்படி இருக்கிறீர்கள்?",
            "translation": "Hello, how are you?",
            "phonetics": "Vanakkam, neengal eppadi irukkireergal?"
          },
          {
            "id": "eng-tamil-c10-l2",
            "title": "I am fine 10",
            "description": "I am fine, thank you.",
            "targetSentence": "நான் நன்றாக இருக்கிறேன், நன்றி.",
            "translation": "I am fine, thank you.",
            "phonetics": "Naan nandraaga irukkiren, nandri."
          },
          {
            "id": "eng-tamil-c10-l3",
            "title": "Name 10",
            "description": "What is your name?",
            "targetSentence": "உங்கள் பெயர் என்ன?",
            "translation": "What is your name?",
            "phonetics": "Ungal peyar enna?"
          },
          {
            "id": "eng-tamil-c10-l4",
            "title": "My name 10",
            "description": "My name is Prajwal.",
            "targetSentence": "என் பெயர் பிரஜ்வல்.",
            "translation": "My name is Prajwal.",
            "phonetics": "En peyar Prajwal."
          },
          {
            "id": "eng-tamil-c10-l5",
            "title": "Nice to meet 10",
            "description": "Nice to meet you.",
            "targetSentence": "உங்களை சந்தித்ததில் மகிழ்ச்சி.",
            "translation": "Nice to meet you.",
            "phonetics": "Ungalai santhithathil magizhchi."
          },
          {
            "id": "eng-tamil-c10-l6",
            "title": "Where is 10",
            "description": "Where is the train station?",
            "targetSentence": "ரயில் நிலையம் எங்கே இருக்கிறது?",
            "translation": "Where is the train station?",
            "phonetics": "Rayil nilayam enge irukkirathu?"
          },
          {
            "id": "eng-tamil-c10-l7",
            "title": "Help 10",
            "description": "Can you help me?",
            "targetSentence": "எனக்கு உதவி செய்ய முடியுமா?",
            "translation": "Can you help me?",
            "phonetics": "Enakku udhavi seyya mudiyuma?"
          },
          {
            "id": "eng-tamil-c10-l8",
            "title": "Hungry 10",
            "description": "I am hungry.",
            "targetSentence": "எனக்கு பசிக்கிறது.",
            "translation": "I am hungry.",
            "phonetics": "Enakku pasikkirathu."
          },
          {
            "id": "eng-tamil-c10-l9",
            "title": "Water 10",
            "description": "Please give me some water.",
            "targetSentence": "தயவுசெய்து எனக்கு கொஞ்சம் தண்ணீர் கொடுங்கள்.",
            "translation": "Please give me some water.",
            "phonetics": "Thayavuseythu enakku konjam thanneer kodungal."
          },
          {
            "id": "eng-tamil-c10-l10",
            "title": "Price 10",
            "description": "What is the price?",
            "targetSentence": "இதன் விலை என்ன?",
            "translation": "What is the price?",
            "phonetics": "Ithan vilai enna?"
          }
        ]
      }
    ]
  },
  {
    "id": "shlokas",
    "title": "Sanskrit Shlokas",
    "subtitle": "SPIRITUAL",
    "chapters": [
      {
        "id": "shlokas-c1",
        "title": "Chapter 1: Morning Prayers",
        "description": "Start your day with positive energy",
        "lessons": [
          {
            "id": "shlokas-c1-l1",
            "title": "Ganesha",
            "description": "Vakratunda Mahakaya Suryakoti Samaprabha Nirvighnam Kuru Me Deva Sarva Karyeshu Sarvada",
            "targetSentence": "Vakratunda Mahakaya Suryakoti Samaprabha Nirvighnam Kuru Me Deva Sarva Karyeshu Sarvada",
            "translation": "Vakratunda Mahakaya Suryakoti Samaprabha Nirvighnam Kuru Me Deva Sarva Karyeshu Sarvada",
            "phonetics": ""
          },
          {
            "id": "shlokas-c1-l2",
            "title": "Guru",
            "description": "Gurur Brahma Gurur Vishnu Gurur Devo Maheshwaraha Guru Saakshaat Para Brahma Tasmai Shri Gurave Namaha",
            "targetSentence": "Gurur Brahma Gurur Vishnu Gurur Devo Maheshwaraha Guru Saakshaat Para Brahma Tasmai Shri Gurave Namaha",
            "translation": "Gurur Brahma Gurur Vishnu Gurur Devo Maheshwaraha Guru Saakshaat Para Brahma Tasmai Shri Gurave Namaha",
            "phonetics": ""
          },
          {
            "id": "shlokas-c1-l3",
            "title": "Saraswati",
            "description": "Saraswati Namastubhyam Varade Kamarupini Vidyarambham Karishyami Siddhir Bhavatu Me Sada",
            "targetSentence": "Saraswati Namastubhyam Varade Kamarupini Vidyarambham Karishyami Siddhir Bhavatu Me Sada",
            "translation": "Saraswati Namastubhyam Varade Kamarupini Vidyarambham Karishyami Siddhir Bhavatu Me Sada",
            "phonetics": ""
          },
          {
            "id": "shlokas-c1-l4",
            "title": "Peace",
            "description": "Om Dyauha Shantihi Antariksham Shantihi Prithvi Shantihi Aapaha Shantihi Roshadhayaha Shantihi Vanaspatayaha Shantihi Vishwedevaha Shantihi Brahma Shantihi Sarvam Shantihi Shantireva Shantihi Sa Ma Shanti Redhi Om Shanti Shanti Shantihi",
            "targetSentence": "Om Dyauha Shantihi Antariksham Shantihi Prithvi Shantihi Aapaha Shantihi Roshadhayaha Shantihi Vanaspatayaha Shantihi Vishwedevaha Shantihi Brahma Shantihi Sarvam Shantihi Shantireva Shantihi Sa Ma Shanti Redhi Om Shanti Shanti Shantihi",
            "translation": "Om Dyauha Shantihi Antariksham Shantihi Prithvi Shantihi Aapaha Shantihi Roshadhayaha Shantihi Vanaspatayaha Shantihi Vishwedevaha Shantihi Brahma Shantihi Sarvam Shantihi Shantireva Shantihi Sa Ma Shanti Redhi Om Shanti Shanti Shantihi",
            "phonetics": ""
          },
          {
            "id": "shlokas-c1-l5",
            "title": "Light",
            "description": "Asato Ma Sadgamaya Tamaso Ma Jyotirgamaya Mrityorma Amritam Gamaya Om Shanti Shanti Shantihi",
            "targetSentence": "Asato Ma Sadgamaya Tamaso Ma Jyotirgamaya Mrityorma Amritam Gamaya Om Shanti Shanti Shantihi",
            "translation": "Asato Ma Sadgamaya Tamaso Ma Jyotirgamaya Mrityorma Amritam Gamaya Om Shanti Shanti Shantihi",
            "phonetics": ""
          }
        ]
      },
      {
        "id": "shlokas-c2",
        "title": "Chapter 2: Evening Prayers",
        "description": "End your day with gratitude",
        "lessons": [
          {
            "id": "shlokas-c2-l1",
            "title": "Shiva",
            "description": "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam Urvarukamiva Bandhanan Mrityormukshiya Maamritat",
            "targetSentence": "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam Urvarukamiva Bandhanan Mrityormukshiya Maamritat",
            "translation": "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam Urvarukamiva Bandhanan Mrityormukshiya Maamritat",
            "phonetics": ""
          },
          {
            "id": "shlokas-c2-l2",
            "title": "Krishna",
            "description": "Vasudeva Sutam Devam Kamsa Chanura Mardanam Devaki Paramanandam Krishnam Vande Jagadgurum",
            "targetSentence": "Vasudeva Sutam Devam Kamsa Chanura Mardanam Devaki Paramanandam Krishnam Vande Jagadgurum",
            "translation": "Vasudeva Sutam Devam Kamsa Chanura Mardanam Devaki Paramanandam Krishnam Vande Jagadgurum",
            "phonetics": ""
          },
          {
            "id": "shlokas-c2-l3",
            "title": "Rama",
            "description": "Sri Rama Rama Rameti Rame Rame Manorame Sahasranama Tattulyam Rama Nama Varanane",
            "targetSentence": "Sri Rama Rama Rameti Rame Rame Manorame Sahasranama Tattulyam Rama Nama Varanane",
            "translation": "Sri Rama Rama Rameti Rame Rame Manorame Sahasranama Tattulyam Rama Nama Varanane",
            "phonetics": ""
          },
          {
            "id": "shlokas-c2-l4",
            "title": "Hanuman",
            "description": "Manojavam Marutatulyavegam Jitendriyam Buddhimatam Varishtam Vatatmajam Vanarayuthamukhyam Sriramadutam Sharanam Prapadye",
            "targetSentence": "Manojavam Marutatulyavegam Jitendriyam Buddhimatam Varishtam Vatatmajam Vanarayuthamukhyam Sriramadutam Sharanam Prapadye",
            "translation": "Manojavam Marutatulyavegam Jitendriyam Buddhimatam Varishtam Vatatmajam Vanarayuthamukhyam Sriramadutam Sharanam Prapadye",
            "phonetics": ""
          },
          {
            "id": "shlokas-c2-l5",
            "title": "Devi",
            "description": "Sarva Mangala Mangalye Shive Sarvartha Sadhike Sharanye Tryambake Gauri Narayani Namostute",
            "targetSentence": "Sarva Mangala Mangalye Shive Sarvartha Sadhike Sharanye Tryambake Gauri Narayani Namostute",
            "translation": "Sarva Mangala Mangalye Shive Sarvartha Sadhike Sharanye Tryambake Gauri Narayani Namostute",
            "phonetics": ""
          }
        ]
      }
    ]
  }
];
