const fs = require('fs');

const languages = [
  { id: 'eng-hindi', title: 'English → Hindi', subtitle: 'NORTH INDIA' },
  { id: 'eng-marathi', title: 'English → Marathi', subtitle: 'MAHARASHTRA' },
  { id: 'eng-kannada', title: 'English → Kannada', subtitle: 'KARNATAKA' },
  { id: 'eng-telugu', title: 'English → Telugu', subtitle: 'ANDHRA PRADESH / TELANGANA' },
  { id: 'eng-tamil', title: 'English → Tamil', subtitle: 'TAMIL NADU' },
  { id: 'shlokas', title: 'Learning Shlokas (Sanskrit)', subtitle: 'SPIRITUAL & CLASSICAL' }
];

const chapterTemplates = [
  { id: 'ch1', title: 'Chapter 1: Basics & Greetings', description: 'Start your journey with everyday greetings' },
  { id: 'ch2', title: 'Chapter 2: Travel & Directions', description: 'Navigate your way around' },
  { id: 'ch3', title: 'Chapter 3: Food & Dining', description: 'Order food and talk about meals' }
];

const lessonTemplates = [
  // Chapter 1
  [
    { title: 'Hello', target: 'Hello, how are you?', trans: 'Namaste/Hello, how are you?' },
    { title: 'I am fine', target: 'I am fine, thank you.', trans: 'I am fine, thank you.' },
    { title: 'Name', target: 'What is your name?', trans: 'What is your name?' },
    { title: 'My name', target: 'My name is Prajwal.', trans: 'My name is Prajwal.' },
    { title: 'Nice to meet', target: 'Nice to meet you.', trans: 'Nice to meet you.' },
    { title: 'Good morning', target: 'Good morning.', trans: 'Good morning.' },
    { title: 'Good night', target: 'Good night.', trans: 'Good night.' },
    { title: 'Yes and No', target: 'Yes, please. No, thank you.', trans: 'Yes, please. No, thank you.' },
    { title: 'Excuse me', target: 'Excuse me, sorry.', trans: 'Excuse me, sorry.' },
    { title: 'Goodbye', target: 'Goodbye, see you later.', trans: 'Goodbye, see you later.' }
  ],
  // Chapter 2
  [
    { title: 'Where is', target: 'Where is the train station?', trans: 'Where is the train station?' },
    { title: 'Ticket', target: 'I need one ticket.', trans: 'I need one ticket.' },
    { title: 'How much', target: 'How much does this cost?', trans: 'How much does this cost?' },
    { title: 'Too expensive', target: 'This is too expensive.', trans: 'This is too expensive.' },
    { title: 'Help', target: 'Can you help me?', trans: 'Can you help me?' },
    { title: 'Lost', target: 'I am lost.', trans: 'I am lost.' },
    { title: 'Left right', target: 'Turn left, then turn right.', trans: 'Turn left, then turn right.' },
    { title: 'Straight', target: 'Go straight ahead.', trans: 'Go straight ahead.' },
    { title: 'Far', target: 'Is it far from here?', trans: 'Is it far from here?' },
    { title: 'Time', target: 'What time is it?', trans: 'What time is it?' }
  ],
  // Chapter 3
  [
    { title: 'Hungry', target: 'I am hungry.', trans: 'I am hungry.' },
    { title: 'Water', target: 'Please give me some water.', trans: 'Please give me some water.' },
    { title: 'Menu', target: 'Can I see the menu?', trans: 'Can I see the menu?' },
    { title: 'Vegetarian', target: 'Do you have vegetarian food?', trans: 'Do you have vegetarian food?' },
    { title: 'Spicy', target: 'Make it less spicy, please.', trans: 'Make it less spicy, please.' },
    { title: 'Delicious', target: 'The food is very delicious.', trans: 'The food is very delicious.' },
    { title: 'Bill', target: 'Can I have the bill, please?', trans: 'Can I have the bill, please?' },
    { title: 'Coffee', target: 'I would like a cup of coffee.', trans: 'I would like a cup of coffee.' },
    { title: 'Allergy', target: 'I am allergic to peanuts.', trans: 'I am allergic to peanuts.' },
    { title: 'Breakfast', target: 'What is for breakfast?', trans: 'What is for breakfast?' }
  ]
];

const shlokaLessons = [
  // Chapter 1
  [
    { title: 'Gayatri Mantra', target: 'Om bhur bhuvah swaha, tatsaviturvarenyam bhargo devasya dhimahi dhiyo yo nah pracodayat', trans: 'We meditate on the most sublime light of the divine Surya...' },
    { title: 'Ganesha Shloka', target: 'Vakratunda Mahakaya, Suryakoti Samaprabha Nirvighnam Kuru Me Deva Sarvakaryeshu Sarvada', trans: 'O Lord with a curved trunk and a mighty body...' },
    { title: 'Guru Shloka', target: 'Gurur Brahma Gurur Vishnu, Gurur Devo Maheshwarah Guru Sakshat Parabrahma Tasmai Shri Gurave Namah', trans: 'Guru is Brahma, Guru is Vishnu...' },
    { title: 'Shanti Mantra', target: 'Om Shanti Shanti Shanti', trans: 'Om Peace, Peace, Peace.' },
    { title: 'Saraswati Shloka', target: 'Saraswati Namastubhyam, Varade Kamarupini Vidyarambham Karishyami Siddhirbhavatu Me Sada', trans: 'Salutations to Goddess Saraswati...' },
    { title: 'Mahamrityunjaya', target: 'Om Tryambakam Yajamahe Sugandhim Pushtivardhanam Urvarukamiva Bandhanan Mrityormukshiya Mamritat', trans: 'We worship the three-eyed One...' },
    { title: 'Asatoma Sadgamaya', target: 'Asato ma sadgamaya, tamaso ma jyotirgamaya, mrityorma amritam gamaya', trans: 'Lead me from the unreal to the real...' },
    { title: 'Tvameva Mata', target: 'Tvameva mata cha pita tvameva, tvameva bandhuscha sakha tvameva', trans: 'You are my mother, you are my father...' },
    { title: 'Karagre Vasate', target: 'Karagre vasate Lakshmi, karamadhye Saraswati, karamoole tu Govinda, prabhate karadarshanam', trans: 'At the tip of the hands dwells Lakshmi...' },
    { title: 'Brahmarpanam', target: 'Brahmarpanam Brahma Havir Brahmagnau Brahmana Hutam Brahmaiva Tena Gantavyam Brahma Karma Samadhina', trans: 'The act of offering is Brahman...' }
  ],
  // Chapter 2
  [
    { title: 'Vishnu Stuti', target: 'Shantakaram Bhujagashayanam Padmanabham Suresham', trans: 'I bow to Lord Vishnu who has a peaceful appearance...' },
    { title: 'Shiva Panchakshara', target: 'Nagendraharaya Trilochanaya Bhasmangaragaya Maheshwaraya', trans: 'Salutations to the three-eyed Lord Shiva...' },
    { title: 'Durga Shloka', target: 'Sarva Mangala Mangalye Shive Sarvartha Sadhike', trans: 'To the auspiciousness of all auspiciousness...' },
    { title: 'Rama Shloka', target: 'Sri Rama Rama Rameti Rame Rame Manorame', trans: 'Chanting the name of Sri Rama is equal to the thousand names of Vishnu...' },
    { title: 'Krishna Shloka', target: 'Vasudeva Sutam Devam Kamsa Chanura Mardanam', trans: 'I bow to Lord Krishna, the son of Vasudeva...' },
    { title: 'Hanuman Shloka', target: 'Manojavam Marutatulyavegam Jitendriyam Buddhimatam Varistham', trans: 'I bow to Hanuman, who is as swift as the mind...' },
    { title: 'Surya Mantra', target: 'Japakusuma Sankasham Kashyapeyam Mahadyutim', trans: 'I bow to the Sun God, who is the color of the hibiscus...' },
    { title: 'Navagraha Stotra', target: 'Namah Suryaya Chandraya Mangalaya Budhaya Cha', trans: 'Salutations to the Sun, Moon, Mars, and Mercury...' },
    { title: 'Annapoorna Shloka', target: 'Annapoorne Sadapoorne Shankara Pranavallabhe', trans: 'O Goddess Annapoorna, who is always full...' },
    { title: 'Dakshinamurthy', target: 'Gurave Sarva Lokanam Bhishaje Bhava Roginam', trans: 'To the Guru of all worlds, the physician for the disease of worldly existence...' }
  ],
  // Chapter 3
  [
    { title: 'Gita Dhyanam', target: 'Parthaya Pratibodhitam Bhagavatam Narayanenaswayam', trans: 'The Bhagavad Gita, which was taught to Arjuna by Lord Narayana...' },
    { title: 'Karmanye Vadhikaraste', target: 'Karmanye vadhikaraste Ma Phaleshu Kadachana', trans: 'You have a right to perform your prescribed duty, but you are not entitled to the fruits of action.' },
    { title: 'Yada Yada Hi Dharmasya', target: 'Yada yada hi dharmasya glanirbhavati bharata', trans: 'Whenever there is a decline in righteousness, O Arjuna...' },
    { title: 'Paritranaya Sadhunam', target: 'Paritranaya sadhunam vinashaya cha dushkritam', trans: 'For the protection of the good, for the destruction of the wicked...' },
    { title: 'Nainam Chhindanti', target: 'Nainam chhindanti shastrani nainam dahati pavakah', trans: 'Weapons cannot cut the soul, nor can fire burn it...' },
    { title: 'Vasamsi Jirnani', target: 'Vasamsi jirnani yatha vihaya navani grihnati naro parani', trans: 'Just as a person puts on new garments, giving up old ones...' },
    { title: 'Krodhat Bhavati', target: 'Krodhat bhavati sammohah sammohat smriti vibhramah', trans: 'From anger comes delusion, from delusion loss of memory...' },
    { title: 'Uddhared Atmanatmanam', target: 'Uddhared atmanatmanam natmanam avasadayet', trans: 'One must elevate oneself by one\'s own mind, not degrade oneself...' },
    { title: 'Patram Pushpam', target: 'Patram pushpam phalam toyam yo me bhaktya prayacchati', trans: 'If one offers Me with love and devotion a leaf, a flower, fruit or water...' },
    { title: 'Sarva Dharman', target: 'Sarva dharman parityajya mam ekam sharanam vraja', trans: 'Abandon all varieties of religion and just surrender unto Me...' }
  ]
];

const modules = languages.map(lang => {
  const chapters = chapterTemplates.map((ch, chIdx) => {
    const lessonsData = lang.id === 'shlokas' ? shlokaLessons[chIdx] : lessonTemplates[chIdx];
    
    const lessons = lessonsData.map((l, lIdx) => {
      // For non-shlokas, we just use the English sentence as the target for simplicity in this prototype.
      // In a real app, this would be translated to the target language.
      // Since Gemini TTS will read it, we'll prefix it with the language name to simulate it.
      const targetSentence = lang.id === 'shlokas' ? l.target : l.target;
      
      return {
        id: `${lang.id}-c${chIdx + 1}-l${lIdx + 1}`,
        title: l.title,
        description: l.trans,
        targetSentence: targetSentence,
        translation: l.trans,
        phonetics: ''
      };
    });

    return {
      id: `${lang.id}-c${chIdx + 1}`,
      title: lang.id === 'shlokas' ? `Chapter ${chIdx + 1}: ${chIdx === 0 ? 'Daily Prayers' : chIdx === 1 ? 'Deity Shlokas' : 'Bhagavad Gita'}` : ch.title,
      description: ch.description,
      lessons
    };
  });

  return {
    id: lang.id,
    title: lang.title,
    subtitle: lang.subtitle,
    chapters
  };
});

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

fs.writeFileSync('src/data/lessons.ts', fileContent);
console.log('Generated lessons.ts');
