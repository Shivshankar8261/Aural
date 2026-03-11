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
            "title": "Hello",
            "description": "Namaste/Hello, how are you?",
            "targetSentence": "Hello, how are you?",
            "translation": "Namaste/Hello, how are you?",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c1-l2",
            "title": "I am fine",
            "description": "I am fine, thank you.",
            "targetSentence": "I am fine, thank you.",
            "translation": "I am fine, thank you.",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c1-l3",
            "title": "Name",
            "description": "What is your name?",
            "targetSentence": "What is your name?",
            "translation": "What is your name?",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c1-l4",
            "title": "My name",
            "description": "My name is Prajwal.",
            "targetSentence": "My name is Prajwal.",
            "translation": "My name is Prajwal.",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c1-l5",
            "title": "Nice to meet",
            "description": "Nice to meet you.",
            "targetSentence": "Nice to meet you.",
            "translation": "Nice to meet you.",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c1-l6",
            "title": "Good morning",
            "description": "Good morning.",
            "targetSentence": "Good morning.",
            "translation": "Good morning.",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c1-l7",
            "title": "Good night",
            "description": "Good night.",
            "targetSentence": "Good night.",
            "translation": "Good night.",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c1-l8",
            "title": "Yes and No",
            "description": "Yes, please. No, thank you.",
            "targetSentence": "Yes, please. No, thank you.",
            "translation": "Yes, please. No, thank you.",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c1-l9",
            "title": "Excuse me",
            "description": "Excuse me, sorry.",
            "targetSentence": "Excuse me, sorry.",
            "translation": "Excuse me, sorry.",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c1-l10",
            "title": "Goodbye",
            "description": "Goodbye, see you later.",
            "targetSentence": "Goodbye, see you later.",
            "translation": "Goodbye, see you later.",
            "phonetics": ""
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
            "title": "Where is",
            "description": "Where is the train station?",
            "targetSentence": "Where is the train station?",
            "translation": "Where is the train station?",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c2-l2",
            "title": "Ticket",
            "description": "I need one ticket.",
            "targetSentence": "I need one ticket.",
            "translation": "I need one ticket.",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c2-l3",
            "title": "How much",
            "description": "How much does this cost?",
            "targetSentence": "How much does this cost?",
            "translation": "How much does this cost?",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c2-l4",
            "title": "Too expensive",
            "description": "This is too expensive.",
            "targetSentence": "This is too expensive.",
            "translation": "This is too expensive.",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c2-l5",
            "title": "Help",
            "description": "Can you help me?",
            "targetSentence": "Can you help me?",
            "translation": "Can you help me?",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c2-l6",
            "title": "Lost",
            "description": "I am lost.",
            "targetSentence": "I am lost.",
            "translation": "I am lost.",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c2-l7",
            "title": "Left right",
            "description": "Turn left, then turn right.",
            "targetSentence": "Turn left, then turn right.",
            "translation": "Turn left, then turn right.",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c2-l8",
            "title": "Straight",
            "description": "Go straight ahead.",
            "targetSentence": "Go straight ahead.",
            "translation": "Go straight ahead.",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c2-l9",
            "title": "Far",
            "description": "Is it far from here?",
            "targetSentence": "Is it far from here?",
            "translation": "Is it far from here?",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c2-l10",
            "title": "Time",
            "description": "What time is it?",
            "targetSentence": "What time is it?",
            "translation": "What time is it?",
            "phonetics": ""
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
            "title": "Hungry",
            "description": "I am hungry.",
            "targetSentence": "I am hungry.",
            "translation": "I am hungry.",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c3-l2",
            "title": "Water",
            "description": "Please give me some water.",
            "targetSentence": "Please give me some water.",
            "translation": "Please give me some water.",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c3-l3",
            "title": "Menu",
            "description": "Can I see the menu?",
            "targetSentence": "Can I see the menu?",
            "translation": "Can I see the menu?",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c3-l4",
            "title": "Vegetarian",
            "description": "Do you have vegetarian food?",
            "targetSentence": "Do you have vegetarian food?",
            "translation": "Do you have vegetarian food?",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c3-l5",
            "title": "Spicy",
            "description": "Make it less spicy, please.",
            "targetSentence": "Make it less spicy, please.",
            "translation": "Make it less spicy, please.",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c3-l6",
            "title": "Delicious",
            "description": "The food is very delicious.",
            "targetSentence": "The food is very delicious.",
            "translation": "The food is very delicious.",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c3-l7",
            "title": "Bill",
            "description": "Can I have the bill, please?",
            "targetSentence": "Can I have the bill, please?",
            "translation": "Can I have the bill, please?",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c3-l8",
            "title": "Coffee",
            "description": "I would like a cup of coffee.",
            "targetSentence": "I would like a cup of coffee.",
            "translation": "I would like a cup of coffee.",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c3-l9",
            "title": "Allergy",
            "description": "I am allergic to peanuts.",
            "targetSentence": "I am allergic to peanuts.",
            "translation": "I am allergic to peanuts.",
            "phonetics": ""
          },
          {
            "id": "eng-hindi-c3-l10",
            "title": "Breakfast",
            "description": "What is for breakfast?",
            "targetSentence": "What is for breakfast?",
            "translation": "What is for breakfast?",
            "phonetics": ""
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
            "title": "Hello",
            "description": "Namaste/Hello, how are you?",
            "targetSentence": "Hello, how are you?",
            "translation": "Namaste/Hello, how are you?",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c1-l2",
            "title": "I am fine",
            "description": "I am fine, thank you.",
            "targetSentence": "I am fine, thank you.",
            "translation": "I am fine, thank you.",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c1-l3",
            "title": "Name",
            "description": "What is your name?",
            "targetSentence": "What is your name?",
            "translation": "What is your name?",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c1-l4",
            "title": "My name",
            "description": "My name is Prajwal.",
            "targetSentence": "My name is Prajwal.",
            "translation": "My name is Prajwal.",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c1-l5",
            "title": "Nice to meet",
            "description": "Nice to meet you.",
            "targetSentence": "Nice to meet you.",
            "translation": "Nice to meet you.",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c1-l6",
            "title": "Good morning",
            "description": "Good morning.",
            "targetSentence": "Good morning.",
            "translation": "Good morning.",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c1-l7",
            "title": "Good night",
            "description": "Good night.",
            "targetSentence": "Good night.",
            "translation": "Good night.",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c1-l8",
            "title": "Yes and No",
            "description": "Yes, please. No, thank you.",
            "targetSentence": "Yes, please. No, thank you.",
            "translation": "Yes, please. No, thank you.",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c1-l9",
            "title": "Excuse me",
            "description": "Excuse me, sorry.",
            "targetSentence": "Excuse me, sorry.",
            "translation": "Excuse me, sorry.",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c1-l10",
            "title": "Goodbye",
            "description": "Goodbye, see you later.",
            "targetSentence": "Goodbye, see you later.",
            "translation": "Goodbye, see you later.",
            "phonetics": ""
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
            "title": "Where is",
            "description": "Where is the train station?",
            "targetSentence": "Where is the train station?",
            "translation": "Where is the train station?",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c2-l2",
            "title": "Ticket",
            "description": "I need one ticket.",
            "targetSentence": "I need one ticket.",
            "translation": "I need one ticket.",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c2-l3",
            "title": "How much",
            "description": "How much does this cost?",
            "targetSentence": "How much does this cost?",
            "translation": "How much does this cost?",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c2-l4",
            "title": "Too expensive",
            "description": "This is too expensive.",
            "targetSentence": "This is too expensive.",
            "translation": "This is too expensive.",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c2-l5",
            "title": "Help",
            "description": "Can you help me?",
            "targetSentence": "Can you help me?",
            "translation": "Can you help me?",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c2-l6",
            "title": "Lost",
            "description": "I am lost.",
            "targetSentence": "I am lost.",
            "translation": "I am lost.",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c2-l7",
            "title": "Left right",
            "description": "Turn left, then turn right.",
            "targetSentence": "Turn left, then turn right.",
            "translation": "Turn left, then turn right.",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c2-l8",
            "title": "Straight",
            "description": "Go straight ahead.",
            "targetSentence": "Go straight ahead.",
            "translation": "Go straight ahead.",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c2-l9",
            "title": "Far",
            "description": "Is it far from here?",
            "targetSentence": "Is it far from here?",
            "translation": "Is it far from here?",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c2-l10",
            "title": "Time",
            "description": "What time is it?",
            "targetSentence": "What time is it?",
            "translation": "What time is it?",
            "phonetics": ""
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
            "title": "Hungry",
            "description": "I am hungry.",
            "targetSentence": "I am hungry.",
            "translation": "I am hungry.",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c3-l2",
            "title": "Water",
            "description": "Please give me some water.",
            "targetSentence": "Please give me some water.",
            "translation": "Please give me some water.",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c3-l3",
            "title": "Menu",
            "description": "Can I see the menu?",
            "targetSentence": "Can I see the menu?",
            "translation": "Can I see the menu?",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c3-l4",
            "title": "Vegetarian",
            "description": "Do you have vegetarian food?",
            "targetSentence": "Do you have vegetarian food?",
            "translation": "Do you have vegetarian food?",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c3-l5",
            "title": "Spicy",
            "description": "Make it less spicy, please.",
            "targetSentence": "Make it less spicy, please.",
            "translation": "Make it less spicy, please.",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c3-l6",
            "title": "Delicious",
            "description": "The food is very delicious.",
            "targetSentence": "The food is very delicious.",
            "translation": "The food is very delicious.",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c3-l7",
            "title": "Bill",
            "description": "Can I have the bill, please?",
            "targetSentence": "Can I have the bill, please?",
            "translation": "Can I have the bill, please?",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c3-l8",
            "title": "Coffee",
            "description": "I would like a cup of coffee.",
            "targetSentence": "I would like a cup of coffee.",
            "translation": "I would like a cup of coffee.",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c3-l9",
            "title": "Allergy",
            "description": "I am allergic to peanuts.",
            "targetSentence": "I am allergic to peanuts.",
            "translation": "I am allergic to peanuts.",
            "phonetics": ""
          },
          {
            "id": "eng-marathi-c3-l10",
            "title": "Breakfast",
            "description": "What is for breakfast?",
            "targetSentence": "What is for breakfast?",
            "translation": "What is for breakfast?",
            "phonetics": ""
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
            "title": "Hello",
            "description": "Namaste/Hello, how are you?",
            "targetSentence": "Hello, how are you?",
            "translation": "Namaste/Hello, how are you?",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c1-l2",
            "title": "I am fine",
            "description": "I am fine, thank you.",
            "targetSentence": "I am fine, thank you.",
            "translation": "I am fine, thank you.",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c1-l3",
            "title": "Name",
            "description": "What is your name?",
            "targetSentence": "What is your name?",
            "translation": "What is your name?",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c1-l4",
            "title": "My name",
            "description": "My name is Prajwal.",
            "targetSentence": "My name is Prajwal.",
            "translation": "My name is Prajwal.",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c1-l5",
            "title": "Nice to meet",
            "description": "Nice to meet you.",
            "targetSentence": "Nice to meet you.",
            "translation": "Nice to meet you.",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c1-l6",
            "title": "Good morning",
            "description": "Good morning.",
            "targetSentence": "Good morning.",
            "translation": "Good morning.",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c1-l7",
            "title": "Good night",
            "description": "Good night.",
            "targetSentence": "Good night.",
            "translation": "Good night.",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c1-l8",
            "title": "Yes and No",
            "description": "Yes, please. No, thank you.",
            "targetSentence": "Yes, please. No, thank you.",
            "translation": "Yes, please. No, thank you.",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c1-l9",
            "title": "Excuse me",
            "description": "Excuse me, sorry.",
            "targetSentence": "Excuse me, sorry.",
            "translation": "Excuse me, sorry.",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c1-l10",
            "title": "Goodbye",
            "description": "Goodbye, see you later.",
            "targetSentence": "Goodbye, see you later.",
            "translation": "Goodbye, see you later.",
            "phonetics": ""
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
            "title": "Where is",
            "description": "Where is the train station?",
            "targetSentence": "Where is the train station?",
            "translation": "Where is the train station?",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c2-l2",
            "title": "Ticket",
            "description": "I need one ticket.",
            "targetSentence": "I need one ticket.",
            "translation": "I need one ticket.",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c2-l3",
            "title": "How much",
            "description": "How much does this cost?",
            "targetSentence": "How much does this cost?",
            "translation": "How much does this cost?",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c2-l4",
            "title": "Too expensive",
            "description": "This is too expensive.",
            "targetSentence": "This is too expensive.",
            "translation": "This is too expensive.",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c2-l5",
            "title": "Help",
            "description": "Can you help me?",
            "targetSentence": "Can you help me?",
            "translation": "Can you help me?",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c2-l6",
            "title": "Lost",
            "description": "I am lost.",
            "targetSentence": "I am lost.",
            "translation": "I am lost.",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c2-l7",
            "title": "Left right",
            "description": "Turn left, then turn right.",
            "targetSentence": "Turn left, then turn right.",
            "translation": "Turn left, then turn right.",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c2-l8",
            "title": "Straight",
            "description": "Go straight ahead.",
            "targetSentence": "Go straight ahead.",
            "translation": "Go straight ahead.",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c2-l9",
            "title": "Far",
            "description": "Is it far from here?",
            "targetSentence": "Is it far from here?",
            "translation": "Is it far from here?",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c2-l10",
            "title": "Time",
            "description": "What time is it?",
            "targetSentence": "What time is it?",
            "translation": "What time is it?",
            "phonetics": ""
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
            "title": "Hungry",
            "description": "I am hungry.",
            "targetSentence": "I am hungry.",
            "translation": "I am hungry.",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c3-l2",
            "title": "Water",
            "description": "Please give me some water.",
            "targetSentence": "Please give me some water.",
            "translation": "Please give me some water.",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c3-l3",
            "title": "Menu",
            "description": "Can I see the menu?",
            "targetSentence": "Can I see the menu?",
            "translation": "Can I see the menu?",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c3-l4",
            "title": "Vegetarian",
            "description": "Do you have vegetarian food?",
            "targetSentence": "Do you have vegetarian food?",
            "translation": "Do you have vegetarian food?",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c3-l5",
            "title": "Spicy",
            "description": "Make it less spicy, please.",
            "targetSentence": "Make it less spicy, please.",
            "translation": "Make it less spicy, please.",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c3-l6",
            "title": "Delicious",
            "description": "The food is very delicious.",
            "targetSentence": "The food is very delicious.",
            "translation": "The food is very delicious.",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c3-l7",
            "title": "Bill",
            "description": "Can I have the bill, please?",
            "targetSentence": "Can I have the bill, please?",
            "translation": "Can I have the bill, please?",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c3-l8",
            "title": "Coffee",
            "description": "I would like a cup of coffee.",
            "targetSentence": "I would like a cup of coffee.",
            "translation": "I would like a cup of coffee.",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c3-l9",
            "title": "Allergy",
            "description": "I am allergic to peanuts.",
            "targetSentence": "I am allergic to peanuts.",
            "translation": "I am allergic to peanuts.",
            "phonetics": ""
          },
          {
            "id": "eng-kannada-c3-l10",
            "title": "Breakfast",
            "description": "What is for breakfast?",
            "targetSentence": "What is for breakfast?",
            "translation": "What is for breakfast?",
            "phonetics": ""
          }
        ]
      }
    ]
  },
  {
    "id": "eng-telugu",
    "title": "English → Telugu",
    "subtitle": "ANDHRA PRADESH / TELANGANA",
    "chapters": [
      {
        "id": "eng-telugu-c1",
        "title": "Chapter 1: Basics & Greetings",
        "description": "Start your journey with everyday greetings",
        "lessons": [
          {
            "id": "eng-telugu-c1-l1",
            "title": "Hello",
            "description": "Namaste/Hello, how are you?",
            "targetSentence": "Hello, how are you?",
            "translation": "Namaste/Hello, how are you?",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c1-l2",
            "title": "I am fine",
            "description": "I am fine, thank you.",
            "targetSentence": "I am fine, thank you.",
            "translation": "I am fine, thank you.",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c1-l3",
            "title": "Name",
            "description": "What is your name?",
            "targetSentence": "What is your name?",
            "translation": "What is your name?",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c1-l4",
            "title": "My name",
            "description": "My name is Prajwal.",
            "targetSentence": "My name is Prajwal.",
            "translation": "My name is Prajwal.",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c1-l5",
            "title": "Nice to meet",
            "description": "Nice to meet you.",
            "targetSentence": "Nice to meet you.",
            "translation": "Nice to meet you.",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c1-l6",
            "title": "Good morning",
            "description": "Good morning.",
            "targetSentence": "Good morning.",
            "translation": "Good morning.",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c1-l7",
            "title": "Good night",
            "description": "Good night.",
            "targetSentence": "Good night.",
            "translation": "Good night.",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c1-l8",
            "title": "Yes and No",
            "description": "Yes, please. No, thank you.",
            "targetSentence": "Yes, please. No, thank you.",
            "translation": "Yes, please. No, thank you.",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c1-l9",
            "title": "Excuse me",
            "description": "Excuse me, sorry.",
            "targetSentence": "Excuse me, sorry.",
            "translation": "Excuse me, sorry.",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c1-l10",
            "title": "Goodbye",
            "description": "Goodbye, see you later.",
            "targetSentence": "Goodbye, see you later.",
            "translation": "Goodbye, see you later.",
            "phonetics": ""
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
            "title": "Where is",
            "description": "Where is the train station?",
            "targetSentence": "Where is the train station?",
            "translation": "Where is the train station?",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c2-l2",
            "title": "Ticket",
            "description": "I need one ticket.",
            "targetSentence": "I need one ticket.",
            "translation": "I need one ticket.",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c2-l3",
            "title": "How much",
            "description": "How much does this cost?",
            "targetSentence": "How much does this cost?",
            "translation": "How much does this cost?",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c2-l4",
            "title": "Too expensive",
            "description": "This is too expensive.",
            "targetSentence": "This is too expensive.",
            "translation": "This is too expensive.",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c2-l5",
            "title": "Help",
            "description": "Can you help me?",
            "targetSentence": "Can you help me?",
            "translation": "Can you help me?",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c2-l6",
            "title": "Lost",
            "description": "I am lost.",
            "targetSentence": "I am lost.",
            "translation": "I am lost.",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c2-l7",
            "title": "Left right",
            "description": "Turn left, then turn right.",
            "targetSentence": "Turn left, then turn right.",
            "translation": "Turn left, then turn right.",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c2-l8",
            "title": "Straight",
            "description": "Go straight ahead.",
            "targetSentence": "Go straight ahead.",
            "translation": "Go straight ahead.",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c2-l9",
            "title": "Far",
            "description": "Is it far from here?",
            "targetSentence": "Is it far from here?",
            "translation": "Is it far from here?",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c2-l10",
            "title": "Time",
            "description": "What time is it?",
            "targetSentence": "What time is it?",
            "translation": "What time is it?",
            "phonetics": ""
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
            "title": "Hungry",
            "description": "I am hungry.",
            "targetSentence": "I am hungry.",
            "translation": "I am hungry.",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c3-l2",
            "title": "Water",
            "description": "Please give me some water.",
            "targetSentence": "Please give me some water.",
            "translation": "Please give me some water.",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c3-l3",
            "title": "Menu",
            "description": "Can I see the menu?",
            "targetSentence": "Can I see the menu?",
            "translation": "Can I see the menu?",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c3-l4",
            "title": "Vegetarian",
            "description": "Do you have vegetarian food?",
            "targetSentence": "Do you have vegetarian food?",
            "translation": "Do you have vegetarian food?",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c3-l5",
            "title": "Spicy",
            "description": "Make it less spicy, please.",
            "targetSentence": "Make it less spicy, please.",
            "translation": "Make it less spicy, please.",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c3-l6",
            "title": "Delicious",
            "description": "The food is very delicious.",
            "targetSentence": "The food is very delicious.",
            "translation": "The food is very delicious.",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c3-l7",
            "title": "Bill",
            "description": "Can I have the bill, please?",
            "targetSentence": "Can I have the bill, please?",
            "translation": "Can I have the bill, please?",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c3-l8",
            "title": "Coffee",
            "description": "I would like a cup of coffee.",
            "targetSentence": "I would like a cup of coffee.",
            "translation": "I would like a cup of coffee.",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c3-l9",
            "title": "Allergy",
            "description": "I am allergic to peanuts.",
            "targetSentence": "I am allergic to peanuts.",
            "translation": "I am allergic to peanuts.",
            "phonetics": ""
          },
          {
            "id": "eng-telugu-c3-l10",
            "title": "Breakfast",
            "description": "What is for breakfast?",
            "targetSentence": "What is for breakfast?",
            "translation": "What is for breakfast?",
            "phonetics": ""
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
            "title": "Hello",
            "description": "Namaste/Hello, how are you?",
            "targetSentence": "Hello, how are you?",
            "translation": "Namaste/Hello, how are you?",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c1-l2",
            "title": "I am fine",
            "description": "I am fine, thank you.",
            "targetSentence": "I am fine, thank you.",
            "translation": "I am fine, thank you.",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c1-l3",
            "title": "Name",
            "description": "What is your name?",
            "targetSentence": "What is your name?",
            "translation": "What is your name?",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c1-l4",
            "title": "My name",
            "description": "My name is Prajwal.",
            "targetSentence": "My name is Prajwal.",
            "translation": "My name is Prajwal.",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c1-l5",
            "title": "Nice to meet",
            "description": "Nice to meet you.",
            "targetSentence": "Nice to meet you.",
            "translation": "Nice to meet you.",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c1-l6",
            "title": "Good morning",
            "description": "Good morning.",
            "targetSentence": "Good morning.",
            "translation": "Good morning.",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c1-l7",
            "title": "Good night",
            "description": "Good night.",
            "targetSentence": "Good night.",
            "translation": "Good night.",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c1-l8",
            "title": "Yes and No",
            "description": "Yes, please. No, thank you.",
            "targetSentence": "Yes, please. No, thank you.",
            "translation": "Yes, please. No, thank you.",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c1-l9",
            "title": "Excuse me",
            "description": "Excuse me, sorry.",
            "targetSentence": "Excuse me, sorry.",
            "translation": "Excuse me, sorry.",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c1-l10",
            "title": "Goodbye",
            "description": "Goodbye, see you later.",
            "targetSentence": "Goodbye, see you later.",
            "translation": "Goodbye, see you later.",
            "phonetics": ""
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
            "title": "Where is",
            "description": "Where is the train station?",
            "targetSentence": "Where is the train station?",
            "translation": "Where is the train station?",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c2-l2",
            "title": "Ticket",
            "description": "I need one ticket.",
            "targetSentence": "I need one ticket.",
            "translation": "I need one ticket.",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c2-l3",
            "title": "How much",
            "description": "How much does this cost?",
            "targetSentence": "How much does this cost?",
            "translation": "How much does this cost?",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c2-l4",
            "title": "Too expensive",
            "description": "This is too expensive.",
            "targetSentence": "This is too expensive.",
            "translation": "This is too expensive.",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c2-l5",
            "title": "Help",
            "description": "Can you help me?",
            "targetSentence": "Can you help me?",
            "translation": "Can you help me?",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c2-l6",
            "title": "Lost",
            "description": "I am lost.",
            "targetSentence": "I am lost.",
            "translation": "I am lost.",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c2-l7",
            "title": "Left right",
            "description": "Turn left, then turn right.",
            "targetSentence": "Turn left, then turn right.",
            "translation": "Turn left, then turn right.",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c2-l8",
            "title": "Straight",
            "description": "Go straight ahead.",
            "targetSentence": "Go straight ahead.",
            "translation": "Go straight ahead.",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c2-l9",
            "title": "Far",
            "description": "Is it far from here?",
            "targetSentence": "Is it far from here?",
            "translation": "Is it far from here?",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c2-l10",
            "title": "Time",
            "description": "What time is it?",
            "targetSentence": "What time is it?",
            "translation": "What time is it?",
            "phonetics": ""
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
            "title": "Hungry",
            "description": "I am hungry.",
            "targetSentence": "I am hungry.",
            "translation": "I am hungry.",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c3-l2",
            "title": "Water",
            "description": "Please give me some water.",
            "targetSentence": "Please give me some water.",
            "translation": "Please give me some water.",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c3-l3",
            "title": "Menu",
            "description": "Can I see the menu?",
            "targetSentence": "Can I see the menu?",
            "translation": "Can I see the menu?",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c3-l4",
            "title": "Vegetarian",
            "description": "Do you have vegetarian food?",
            "targetSentence": "Do you have vegetarian food?",
            "translation": "Do you have vegetarian food?",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c3-l5",
            "title": "Spicy",
            "description": "Make it less spicy, please.",
            "targetSentence": "Make it less spicy, please.",
            "translation": "Make it less spicy, please.",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c3-l6",
            "title": "Delicious",
            "description": "The food is very delicious.",
            "targetSentence": "The food is very delicious.",
            "translation": "The food is very delicious.",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c3-l7",
            "title": "Bill",
            "description": "Can I have the bill, please?",
            "targetSentence": "Can I have the bill, please?",
            "translation": "Can I have the bill, please?",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c3-l8",
            "title": "Coffee",
            "description": "I would like a cup of coffee.",
            "targetSentence": "I would like a cup of coffee.",
            "translation": "I would like a cup of coffee.",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c3-l9",
            "title": "Allergy",
            "description": "I am allergic to peanuts.",
            "targetSentence": "I am allergic to peanuts.",
            "translation": "I am allergic to peanuts.",
            "phonetics": ""
          },
          {
            "id": "eng-tamil-c3-l10",
            "title": "Breakfast",
            "description": "What is for breakfast?",
            "targetSentence": "What is for breakfast?",
            "translation": "What is for breakfast?",
            "phonetics": ""
          }
        ]
      }
    ]
  },
  {
    "id": "shlokas",
    "title": "Learning Shlokas (Sanskrit)",
    "subtitle": "SPIRITUAL & CLASSICAL",
    "chapters": [
      {
        "id": "shlokas-c1",
        "title": "Chapter 1: Daily Prayers",
        "description": "Start your journey with everyday greetings",
        "lessons": [
          {
            "id": "shlokas-c1-l1",
            "title": "Gayatri Mantra",
            "description": "We meditate on the most sublime light of the divine Surya...",
            "targetSentence": "Om bhur bhuvah swaha, tatsaviturvarenyam bhargo devasya dhimahi dhiyo yo nah pracodayat",
            "translation": "We meditate on the most sublime light of the divine Surya...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c1-l2",
            "title": "Ganesha Shloka",
            "description": "O Lord with a curved trunk and a mighty body...",
            "targetSentence": "Vakratunda Mahakaya, Suryakoti Samaprabha Nirvighnam Kuru Me Deva Sarvakaryeshu Sarvada",
            "translation": "O Lord with a curved trunk and a mighty body...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c1-l3",
            "title": "Guru Shloka",
            "description": "Guru is Brahma, Guru is Vishnu...",
            "targetSentence": "Gurur Brahma Gurur Vishnu, Gurur Devo Maheshwarah Guru Sakshat Parabrahma Tasmai Shri Gurave Namah",
            "translation": "Guru is Brahma, Guru is Vishnu...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c1-l4",
            "title": "Shanti Mantra",
            "description": "Om Peace, Peace, Peace.",
            "targetSentence": "Om Shanti Shanti Shanti",
            "translation": "Om Peace, Peace, Peace.",
            "phonetics": ""
          },
          {
            "id": "shlokas-c1-l5",
            "title": "Saraswati Shloka",
            "description": "Salutations to Goddess Saraswati...",
            "targetSentence": "Saraswati Namastubhyam, Varade Kamarupini Vidyarambham Karishyami Siddhirbhavatu Me Sada",
            "translation": "Salutations to Goddess Saraswati...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c1-l6",
            "title": "Mahamrityunjaya",
            "description": "We worship the three-eyed One...",
            "targetSentence": "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam Urvarukamiva Bandhanan Mrityormukshiya Mamritat",
            "translation": "We worship the three-eyed One...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c1-l7",
            "title": "Asatoma Sadgamaya",
            "description": "Lead me from the unreal to the real...",
            "targetSentence": "Asato ma sadgamaya, tamaso ma jyotirgamaya, mrityorma amritam gamaya",
            "translation": "Lead me from the unreal to the real...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c1-l8",
            "title": "Tvameva Mata",
            "description": "You are my mother, you are my father...",
            "targetSentence": "Tvameva mata cha pita tvameva, tvameva bandhuscha sakha tvameva",
            "translation": "You are my mother, you are my father...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c1-l9",
            "title": "Karagre Vasate",
            "description": "At the tip of the hands dwells Lakshmi...",
            "targetSentence": "Karagre vasate Lakshmi, karamadhye Saraswati, karamoole tu Govinda, prabhate karadarshanam",
            "translation": "At the tip of the hands dwells Lakshmi...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c1-l10",
            "title": "Brahmarpanam",
            "description": "The act of offering is Brahman...",
            "targetSentence": "Brahmarpanam Brahma Havir Brahmagnau Brahmana Hutam Brahmaiva Tena Gantavyam Brahma Karma Samadhina",
            "translation": "The act of offering is Brahman...",
            "phonetics": ""
          }
        ]
      },
      {
        "id": "shlokas-c2",
        "title": "Chapter 2: Deity Shlokas",
        "description": "Navigate your way around",
        "lessons": [
          {
            "id": "shlokas-c2-l1",
            "title": "Vishnu Stuti",
            "description": "I bow to Lord Vishnu who has a peaceful appearance...",
            "targetSentence": "Shantakaram Bhujagashayanam Padmanabham Suresham Vishvadharam Gaganasadrisham Meghavarnam Shubhangam Lakshmikantam Kamalanayanam Yogibhirdhyanagamyam Vande Vishnum Bhavabhayaharam Sarvalokaikanatham",
            "translation": "I bow to Lord Vishnu who has a peaceful appearance...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c2-l2",
            "title": "Shiva Panchakshara",
            "description": "Salutations to the three-eyed Lord Shiva...",
            "targetSentence": "Nagendraharaya Trilochanaya Bhasmangaragaya Maheshwaraya Nityaya Shuddhaya Digambaraya Tasmai Nakaraya Namah Shivaya",
            "translation": "Salutations to the three-eyed Lord Shiva...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c2-l3",
            "title": "Durga Shloka",
            "description": "To the auspiciousness of all auspiciousness...",
            "targetSentence": "Sarva Mangala Mangalye Shive Sarvartha Sadhike Sharanye Tryambake Gauri Narayani Namostute",
            "translation": "To the auspiciousness of all auspiciousness...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c2-l4",
            "title": "Rama Shloka",
            "description": "Chanting the name of Sri Rama is equal to the thousand names of Vishnu...",
            "targetSentence": "Sri Rama Rama Rameti Rame Rame Manorame Sahasranama Tattulyam Rama Nama Varanane",
            "translation": "Chanting the name of Sri Rama is equal to the thousand names of Vishnu...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c2-l5",
            "title": "Krishna Shloka",
            "description": "I bow to Lord Krishna, the son of Vasudeva...",
            "targetSentence": "Vasudeva Sutam Devam Kamsa Chanura Mardanam Devaki Paramanandam Krishnam Vande Jagadgurum",
            "translation": "I bow to Lord Krishna, the son of Vasudeva...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c2-l6",
            "title": "Hanuman Shloka",
            "description": "I bow to Hanuman, who is as swift as the mind...",
            "targetSentence": "Manojavam Marutatulyavegam Jitendriyam Buddhimatam Varistham Vatatmajam Vanarayuthamukhyam Sriramadutam Sharanam Prapadye",
            "translation": "I bow to Hanuman, who is as swift as the mind...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c2-l7",
            "title": "Surya Mantra",
            "description": "I bow to the Sun God, who is the color of the hibiscus...",
            "targetSentence": "Japakusuma Sankasham Kashyapeyam Mahadyutim Tamorim Sarvapapaghnam Pranatoshmi Divakaram",
            "translation": "I bow to the Sun God, who is the color of the hibiscus...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c2-l8",
            "title": "Navagraha Stotra",
            "description": "Salutations to the Sun, Moon, Mars, and Mercury...",
            "targetSentence": "Namah Suryaya Chandraya Mangalaya Budhaya Cha Guru Shukra Shanibhyascha Rahave Ketave Namah",
            "translation": "Salutations to the Sun, Moon, Mars, and Mercury...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c2-l9",
            "title": "Annapoorna Shloka",
            "description": "O Goddess Annapoorna, who is always full...",
            "targetSentence": "Annapoorne Sadapoorne Shankara Pranavallabhe Jnanavairagya Siddhyartham Bhiksham Dehi Parvati",
            "translation": "O Goddess Annapoorna, who is always full...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c2-l10",
            "title": "Dakshinamurthy",
            "description": "To the Guru of all worlds, the physician for the disease of worldly existence...",
            "targetSentence": "Gurave Sarva Lokanam Bhishaje Bhava Roginam Nidhaye Sarva Vidyanam Sri Dakshinamurthaye Namah",
            "translation": "To the Guru of all worlds, the physician for the disease of worldly existence...",
            "phonetics": ""
          }
        ]
      },
      {
        "id": "shlokas-c3",
        "title": "Chapter 3: Bhagavad Gita",
        "description": "Order food and talk about meals",
        "lessons": [
          {
            "id": "shlokas-c3-l1",
            "title": "Gita Dhyanam",
            "description": "The Bhagavad Gita, which was taught to Arjuna by Lord Narayana...",
            "targetSentence": "Parthaya Pratibodhitam Bhagavatam Narayanenaswayam Vyasena Grathitam Purana Munina Madhye Mahabharatam Advaitamritavarshinim Bhagavatim Ashtadashadhyayinim Amba Tvam Anusandadhami Bhagavadgite Bhavadveshinim",
            "translation": "The Bhagavad Gita, which was taught to Arjuna by Lord Narayana...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c3-l2",
            "title": "Karmanye Vadhikaraste",
            "description": "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action.",
            "targetSentence": "Karmanye vadhikaraste Ma Phaleshu Kadachana Ma Karmaphalaheturbhurma Te Sangostvakarmani",
            "translation": "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action.",
            "phonetics": ""
          },
          {
            "id": "shlokas-c3-l3",
            "title": "Yada Yada Hi Dharmasya",
            "description": "Whenever there is a decline in righteousness, O Arjuna...",
            "targetSentence": "Yada yada hi dharmasya glanirbhavati bharata Abhyutthanam adharmasya tadatmanam srijamyaham",
            "translation": "Whenever there is a decline in righteousness, O Arjuna...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c3-l4",
            "title": "Paritranaya Sadhunam",
            "description": "For the protection of the good, for the destruction of the wicked...",
            "targetSentence": "Paritranaya sadhunam vinashaya cha dushkritam Dharma samsthapanarthaya sambhavami yuge yuge",
            "translation": "For the protection of the good, for the destruction of the wicked...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c3-l5",
            "title": "Nainam Chhindanti",
            "description": "Weapons cannot cut the soul, nor can fire burn it...",
            "targetSentence": "Nainam chhindanti shastrani nainam dahati pavakah Na chainam kledayantyapo na shoshayati marutah",
            "translation": "Weapons cannot cut the soul, nor can fire burn it...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c3-l6",
            "title": "Vasamsi Jirnani",
            "description": "Just as a person puts on new garments, giving up old ones...",
            "targetSentence": "Vasamsi jirnani yatha vihaya navani grihnati naro parani Tatha sharirani vihaya jirnanyanyani samyati navani dehi",
            "translation": "Just as a person puts on new garments, giving up old ones...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c3-l7",
            "title": "Krodhat Bhavati",
            "description": "From anger comes delusion, from delusion loss of memory...",
            "targetSentence": "Krodhat bhavati sammohah sammohat smriti vibhramah Smritibhramshad buddhinasho buddhinasat pranashyati",
            "translation": "From anger comes delusion, from delusion loss of memory...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c3-l8",
            "title": "Uddhared Atmanatmanam",
            "description": "One must elevate oneself by one's own mind, not degrade oneself...",
            "targetSentence": "Uddhared atmanatmanam natmanam avasadayet Atmaiva hyatmano bandhuratmaiva ripuratmanah",
            "translation": "One must elevate oneself by one's own mind, not degrade oneself...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c3-l9",
            "title": "Patram Pushpam",
            "description": "If one offers Me with love and devotion a leaf, a flower, fruit or water...",
            "targetSentence": "Patram pushpam phalam toyam yo me bhaktya prayacchati Tadaham bhaktyupahritam ashnami prayatatmanah",
            "translation": "If one offers Me with love and devotion a leaf, a flower, fruit or water...",
            "phonetics": ""
          },
          {
            "id": "shlokas-c3-l10",
            "title": "Sarva Dharman",
            "description": "Abandon all varieties of religion and just surrender unto Me...",
            "targetSentence": "Sarva dharman parityajya mam ekam sharanam vraja Aham tvam sarvapapebhyo mokshayishyami ma shuchah",
            "translation": "Abandon all varieties of religion and just surrender unto Me...",
            "phonetics": ""
          }
        ]
      }
    ]
  }
];
