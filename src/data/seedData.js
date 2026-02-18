// Seed data for 30 days of Ramadhan missions
// This is used as fallback when Supabase is not configured

// Hijaiyah letters for Iqro
const hijaiyahLetters = [
  { letter: 'ا', name: 'Alif', nameEn: 'Alif' },
  { letter: 'ب', name: 'Ba', nameEn: 'Ba' },
  { letter: 'ت', name: 'Ta', nameEn: 'Ta' },
  { letter: 'ث', name: 'Tsa', nameEn: 'Tha' },
  { letter: 'ج', name: 'Jim', nameEn: 'Jim' },
  { letter: 'ح', name: 'Ha', nameEn: 'Ha' },
  { letter: 'خ', name: 'Kha', nameEn: 'Kha' },
  { letter: 'د', name: 'Dal', nameEn: 'Dal' },
  { letter: 'ذ', name: 'Dzal', nameEn: 'Dhal' },
  { letter: 'ر', name: 'Ra', nameEn: 'Ra' },
  { letter: 'ز', name: 'Zay', nameEn: 'Zay' },
  { letter: 'س', name: 'Sin', nameEn: 'Sin' },
  { letter: 'ش', name: 'Syin', nameEn: 'Shin' },
  { letter: 'ص', name: 'Shad', nameEn: 'Sad' },
  { letter: 'ض', name: 'Dhad', nameEn: 'Dad' },
  { letter: 'ط', name: 'Tha', nameEn: 'Ta' },
  { letter: 'ظ', name: 'Zha', nameEn: 'Za' },
  { letter: 'ع', name: 'Ain', nameEn: 'Ayn' },
  { letter: 'غ', name: 'Ghain', nameEn: 'Ghayn' },
  { letter: 'ف', name: 'Fa', nameEn: 'Fa' },
  { letter: 'ق', name: 'Qaf', nameEn: 'Qaf' },
  { letter: 'ك', name: 'Kaf', nameEn: 'Kaf' },
  { letter: 'ل', name: 'Lam', nameEn: 'Lam' },
  { letter: 'م', name: 'Mim', nameEn: 'Mim' },
  { letter: 'ن', name: 'Nun', nameEn: 'Nun' },
  { letter: 'و', name: 'Waw', nameEn: 'Waw' },
  { letter: 'ه', name: 'Ha', nameEn: 'Ha' },
  { letter: 'ي', name: 'Ya', nameEn: 'Ya' },
];

// Asmaul Husna (first 10)
const asmaulHusna = [
  { name: 'Ar-Rahman', meaning: 'Yang Maha Pengasih', meaningEn: 'The Most Gracious' },
  { name: 'Ar-Rahim', meaning: 'Yang Maha Penyayang', meaningEn: 'The Most Merciful' },
  { name: 'Al-Malik', meaning: 'Yang Maha Merajai', meaningEn: 'The King' },
  { name: 'Al-Quddus', meaning: 'Yang Maha Suci', meaningEn: 'The Holy' },
  { name: 'As-Salam', meaning: 'Yang Maha Sejahtera', meaningEn: 'The Peace' },
];

// Prophets stories
const prophets = [
  { name: 'Nabi Adam', story: 'Manusia pertama', emoji: '🧑', storyEn: 'First human' },
  { name: 'Nabi Nuh', story: 'Membuat kapal besar', emoji: '🚢', storyEn: 'Built the ark' },
  { name: 'Nabi Ibrahim', story: 'Bapak para nabi', emoji: '⭐', storyEn: 'Father of prophets' },
  { name: 'Nabi Musa', story: 'Membelah laut', emoji: '🌊', storyEn: 'Parted the sea' },
  { name: 'Nabi Isa', story: 'Bisa menyembuhkan', emoji: '💚', storyEn: 'Could heal' },
  { name: 'Nabi Yusuf', story: 'Yang sangat tampan', emoji: '✨', storyEn: 'Very handsome' },
  { name: 'Nabi Yunus', story: 'Ditelan ikan besar', emoji: '🐋', storyEn: 'Swallowed by whale' },
  { name: 'Nabi Daud', story: 'Suara merdu', emoji: '🎵', storyEn: 'Beautiful voice' },
  { name: 'Nabi Sulaiman', story: 'Bicara dengan hewan', emoji: '🦁', storyEn: 'Talked to animals' },
  { name: 'Nabi Muhammad', story: 'Nabi terakhir', emoji: '🕌', storyEn: 'Last prophet' },
];

// Daily prayers
const dailyPrayers = [
  { name: 'Doa Sebelum Makan', arabic: 'Bismillah', emoji: '🍽️' },
  { name: 'Doa Setelah Makan', arabic: 'Alhamdulillah', emoji: '😋' },
  { name: 'Doa Sebelum Tidur', arabic: 'Bismika Allahumma amutu wa ahya', emoji: '🌙' },
  { name: 'Doa Bangun Tidur', arabic: 'Alhamdulillahilladzi ahyana', emoji: '☀️' },
  { name: 'Doa Keluar Rumah', arabic: 'Bismillahi tawakkaltu alallah', emoji: '🚶' },
];

// Islamic vocabulary in English
const islamicVocab = [
  { id: 'v1', indonesian: 'Masjid', english: 'Mosque', emoji: '🕌' },
  { id: 'v2', indonesian: 'Sholat', english: 'Prayer', emoji: '🤲' },
  { id: 'v3', indonesian: 'Puasa', english: 'Fasting', emoji: '🌙' },
  { id: 'v4', indonesian: 'Al-Quran', english: 'Quran', emoji: '📖' },
  { id: 'v5', indonesian: 'Wudhu', english: 'Ablution', emoji: '💧' },
  { id: 'v6', indonesian: 'Zakat', english: 'Charity', emoji: '💝' },
  { id: 'v7', indonesian: 'Haji', english: 'Pilgrimage', emoji: '🕋' },
  { id: 'v8', indonesian: 'Ramadhan', english: 'Ramadan', emoji: '🌙' },
  { id: 'v9', indonesian: 'Sahur', english: 'Pre-dawn meal', emoji: '🌅' },
  { id: 'v10', indonesian: 'Berbuka', english: 'Breaking fast', emoji: '🌆' },
];

// Islamic greetings
const islamicGreetings = [
  { id: 'g1', arabic: "Assalamu'alaikum", english: 'Peace be upon you', emoji: '👋' },
  { id: 'g2', arabic: 'Bismillah', english: 'In the name of Allah', emoji: '🤲' },
  { id: 'g3', arabic: 'Alhamdulillah', english: 'Praise be to Allah', emoji: '🙏' },
  { id: 'g4', arabic: 'InsyaAllah', english: 'If Allah wills', emoji: '🤞' },
  { id: 'g5', arabic: 'MasyaAllah', english: 'As Allah willed', emoji: '✨' },
  { id: 'g6', arabic: 'SubhanAllah', english: 'Glory be to Allah', emoji: '🌟' },
  { id: 'g7', arabic: 'Astaghfirullah', english: 'I seek forgiveness from Allah', emoji: '💚' },
  { id: 'g8', arabic: 'JazakAllah', english: 'May Allah reward you', emoji: '🎁' },
  { id: 'g9', arabic: 'BarakAllah', english: 'May Allah bless', emoji: '🌸' },
  { id: 'g10', arabic: "Wa'alaikumsalam", english: 'And peace be upon you', emoji: '🤝' },
];

// Generate Iqro questions for a specific day
function generateIqroQuestions(day) {
  const questions = [];

  if (day <= 14) {
    // Days 1-14: Learning hijaiyah letters (2 letters per day)
    const startIndex = (day - 1) * 2;
    const lettersToday = hijaiyahLetters.slice(startIndex, startIndex + 2);

    lettersToday.forEach((letterData, idx) => {
      // Get 2 wrong options
      const wrongOptions = hijaiyahLetters
        .filter(l => l.letter !== letterData.letter)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);

      const options = [
        { id: 'correct', display: letterData.letter, label: letterData.name, isCorrect: true },
        ...wrongOptions.map((w, i) => ({
          id: `wrong${i}`,
          display: w.letter,
          label: w.name,
          isCorrect: false,
        })),
      ].sort(() => Math.random() - 0.5);

      questions.push({
        id: `iqro-d${day}-q${idx + 1}`,
        text: `Mana huruf ${letterData.name}?`,
        text_en: `Which letter is ${letterData.nameEn}?`,
        options,
      });
    });
  } else if (day <= 20) {
    // Days 15-20: Fathah
    const letters = hijaiyahLetters.slice(0, 6);
    const letterIdx = (day - 15) % letters.length;
    const letter = letters[letterIdx];

    const options = letters.slice(0, 3).map((l, i) => ({
      id: `opt${i}`,
      display: l.letter + 'َ',
      label: l.name + ' Fathah',
      isCorrect: l.letter === letter.letter,
    }));

    questions.push({
      id: `iqro-d${day}-q1`,
      text: `Mana huruf ${letter.name} dengan Fathah?`,
      text_en: `Which is ${letter.nameEn} with Fathah?`,
      options: options.sort(() => Math.random() - 0.5),
    });
  } else if (day <= 25) {
    // Days 21-25: Kasrah
    const letters = hijaiyahLetters.slice(0, 6);
    const letterIdx = (day - 21) % letters.length;
    const letter = letters[letterIdx];

    const options = letters.slice(0, 3).map((l, i) => ({
      id: `opt${i}`,
      display: l.letter + 'ِ',
      label: l.name + ' Kasrah',
      isCorrect: l.letter === letter.letter,
    }));

    questions.push({
      id: `iqro-d${day}-q1`,
      text: `Mana huruf ${letter.name} dengan Kasrah?`,
      text_en: `Which is ${letter.nameEn} with Kasrah?`,
      options: options.sort(() => Math.random() - 0.5),
    });
  } else {
    // Days 26-30: Dhammah
    const letters = hijaiyahLetters.slice(0, 6);
    const letterIdx = (day - 26) % letters.length;
    const letter = letters[letterIdx];

    const options = letters.slice(0, 3).map((l, i) => ({
      id: `opt${i}`,
      display: l.letter + 'ُ',
      label: l.name + ' Dhammah',
      isCorrect: l.letter === letter.letter,
    }));

    questions.push({
      id: `iqro-d${day}-q1`,
      text: `Mana huruf ${letter.name} dengan Dhammah?`,
      text_en: `Which is ${letter.nameEn} with Dhammah?`,
      options: options.sort(() => Math.random() - 0.5),
    });
  }

  // Ensure we have at least 3 questions
  while (questions.length < 3) {
    const randomLetter = hijaiyahLetters[Math.floor(Math.random() * hijaiyahLetters.length)];
    const wrongOptions = hijaiyahLetters
      .filter(l => l.letter !== randomLetter.letter)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    questions.push({
      id: `iqro-d${day}-q${questions.length + 1}`,
      text: `Mana huruf ${randomLetter.name}?`,
      text_en: `Which letter is ${randomLetter.nameEn}?`,
      options: [
        { id: 'correct', display: randomLetter.letter, label: randomLetter.name, isCorrect: true },
        ...wrongOptions.map((w, i) => ({
          id: `wrong${i}`,
          display: w.letter,
          label: w.name,
          isCorrect: false,
        })),
      ].sort(() => Math.random() - 0.5),
    });
  }

  return questions.slice(0, 3);
}

// Generate Islami questions for a specific day
function generateIslamiQuestions(day) {
  const questions = [];

  if (day <= 5) {
    // Days 1-5: Asmaul Husna
    const asmaulIdx = day - 1;
    const asmaul = asmaulHusna[asmaulIdx];

    const wrongOptions = asmaulHusna
      .filter(a => a.name !== asmaul.name)
      .slice(0, 2);

    questions.push({
      id: `islami-d${day}-q1`,
      text: `${asmaul.name} artinya apa?`,
      text_en: `What does ${asmaul.name} mean?`,
      options: [
        { id: 'correct', display: '✨', label: asmaul.meaning, isCorrect: true },
        ...wrongOptions.map((w, i) => ({
          id: `wrong${i}`,
          display: '💫',
          label: w.meaning,
          isCorrect: false,
        })),
      ].sort(() => Math.random() - 0.5),
    });
  } else if (day <= 10) {
    // Days 6-10: Rukun Islam & Iman
    const rukunIslam = ['Syahadat', 'Sholat', 'Zakat', 'Puasa', 'Haji'];
    const rukunIman = ['Iman kepada Allah', 'Iman kepada Malaikat', 'Iman kepada Kitab', 'Iman kepada Rasul', 'Iman kepada Hari Akhir'];

    if (day <= 7) {
      questions.push({
        id: `islami-d${day}-q1`,
        text: 'Berapa jumlah Rukun Islam?',
        options: [
          { id: 'a', display: '5️⃣', label: '5 rukun', isCorrect: true },
          { id: 'b', display: '6️⃣', label: '6 rukun', isCorrect: false },
          { id: 'c', display: '4️⃣', label: '4 rukun', isCorrect: false },
        ],
      });
    } else {
      questions.push({
        id: `islami-d${day}-q1`,
        text: 'Berapa jumlah Rukun Iman?',
        options: [
          { id: 'a', display: '6️⃣', label: '6 rukun', isCorrect: true },
          { id: 'b', display: '5️⃣', label: '5 rukun', isCorrect: false },
          { id: 'c', display: '7️⃣', label: '7 rukun', isCorrect: false },
        ],
      });
    }
  } else if (day <= 20) {
    // Days 11-20: Prophets
    const prophetIdx = (day - 11) % prophets.length;
    const prophet = prophets[prophetIdx];

    const wrongProphets = prophets
      .filter(p => p.name !== prophet.name)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    questions.push({
      id: `islami-d${day}-q1`,
      text: `Siapa nabi yang ${prophet.story.toLowerCase()}?`,
      text_en: `Which prophet ${prophet.storyEn.toLowerCase()}?`,
      options: [
        { id: 'correct', display: prophet.emoji, label: prophet.name, isCorrect: true },
        ...wrongProphets.map((w, i) => ({
          id: `wrong${i}`,
          display: w.emoji,
          label: w.name,
          isCorrect: false,
        })),
      ].sort(() => Math.random() - 0.5),
    });
  } else if (day <= 25) {
    // Days 21-25: Daily prayers
    const prayerIdx = (day - 21) % dailyPrayers.length;
    const prayer = dailyPrayers[prayerIdx];

    const wrongPrayers = dailyPrayers
      .filter(p => p.name !== prayer.name)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    questions.push({
      id: `islami-d${day}-q1`,
      text: `Kapan kita membaca "${prayer.arabic}"?`,
      options: [
        { id: 'correct', display: prayer.emoji, label: prayer.name, isCorrect: true },
        ...wrongPrayers.map((w, i) => ({
          id: `wrong${i}`,
          display: w.emoji,
          label: w.name,
          isCorrect: false,
        })),
      ].sort(() => Math.random() - 0.5),
    });
  } else {
    // Days 26-30: Adab
    const adabTopics = [
      { q: 'Apa yang harus kita ucapkan saat bertemu?', a: "Assalamu'alaikum", emoji: '👋' },
      { q: 'Tangan mana yang dipakai untuk makan?', a: 'Tangan kanan', emoji: '🤚' },
      { q: 'Apa yang diucapkan sebelum makan?', a: 'Bismillah', emoji: '🍽️' },
      { q: 'Bagaimana cara berbicara dengan orang tua?', a: 'Dengan sopan dan lembut', emoji: '💚' },
      { q: 'Apa yang dilakukan jika ada teman kesusahan?', a: 'Membantu', emoji: '🤝' },
    ];

    const topicIdx = (day - 26) % adabTopics.length;
    const topic = adabTopics[topicIdx];

    questions.push({
      id: `islami-d${day}-q1`,
      text: topic.q,
      options: [
        { id: 'correct', display: topic.emoji, label: topic.a, isCorrect: true },
        { id: 'wrong1', display: '❌', label: 'Diam saja', isCorrect: false },
        { id: 'wrong2', display: '❌', label: 'Tidak tahu', isCorrect: false },
      ].sort(() => Math.random() - 0.5),
    });
  }

  // Add more questions to reach 3
  while (questions.length < 3) {
    const randomProphet = prophets[Math.floor(Math.random() * prophets.length)];
    const wrongProphets = prophets
      .filter(p => p.name !== randomProphet.name)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    questions.push({
      id: `islami-d${day}-q${questions.length + 1}`,
      text: `Siapa nabi yang ${randomProphet.story.toLowerCase()}?`,
      options: [
        { id: 'correct', display: randomProphet.emoji, label: randomProphet.name, isCorrect: true },
        ...wrongProphets.map((w, i) => ({
          id: `wrong${i}`,
          display: w.emoji,
          label: w.name,
          isCorrect: false,
        })),
      ].sort(() => Math.random() - 0.5),
    });
  }

  return questions.slice(0, 3);
}

// Generate English questions for a specific day
function generateEnglishQuestions(day) {
  const questions = [];

  if (day <= 10) {
    // Days 1-10: Greetings
    const greetingIdx = (day - 1) % islamicGreetings.length;
    const greeting = islamicGreetings[greetingIdx];

    const wrongGreetings = islamicGreetings
      .filter(g => g.id !== greeting.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    questions.push({
      id: `english-d${day}-q1`,
      text: `Apa arti "${greeting.arabic}" dalam bahasa Inggris?`,
      text_en: `What does "${greeting.arabic}" mean in English?`,
      options: [
        { id: 'correct', display: greeting.emoji, label: greeting.english, isCorrect: true },
        ...wrongGreetings.map((w, i) => ({
          id: `wrong${i}`,
          display: w.emoji,
          label: w.english,
          isCorrect: false,
        })),
      ].sort(() => Math.random() - 0.5),
    });
  } else if (day <= 20) {
    // Days 11-20: Vocabulary
    const vocabIdx = (day - 11) % islamicVocab.length;
    const vocab = islamicVocab[vocabIdx];

    const wrongVocab = islamicVocab
      .filter(v => v.id !== vocab.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    questions.push({
      id: `english-d${day}-q1`,
      text: `"${vocab.indonesian}" dalam bahasa Inggris adalah?`,
      text_en: `What is "${vocab.indonesian}" in English?`,
      options: [
        { id: 'correct', display: vocab.emoji, label: vocab.english, isCorrect: true },
        ...wrongVocab.map((w, i) => ({
          id: `wrong${i}`,
          display: w.emoji,
          label: w.english,
          isCorrect: false,
        })),
      ].sort(() => Math.random() - 0.5),
    });
  } else {
    // Days 21-30: Simple sentences
    const sentences = [
      { id: 's1', indo: 'Saya sholat lima waktu', eng: 'I pray five times a day', emoji: '🤲' },
      { id: 's2', indo: 'Saya puasa di bulan Ramadhan', eng: 'I fast in Ramadan', emoji: '🌙' },
      { id: 's3', indo: 'Allah itu satu', eng: 'Allah is one', emoji: '☝️' },
      { id: 's4', indo: 'Saya cinta Islam', eng: 'I love Islam', emoji: '💚' },
      { id: 's5', indo: 'Nabi Muhammad adalah rasul terakhir', eng: 'Prophet Muhammad is the last messenger', emoji: '🕌' },
    ];

    const sentenceIdx = (day - 21) % sentences.length;
    const sentence = sentences[sentenceIdx];

    const wrongSentences = sentences
      .filter(s => s.id !== sentence.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    questions.push({
      id: `english-d${day}-q1`,
      text: `"${sentence.indo}" dalam bahasa Inggris adalah?`,
      options: [
        { id: 'correct', display: sentence.emoji, label: sentence.eng, isCorrect: true },
        ...wrongSentences.map((w, i) => ({
          id: `wrong${i}`,
          display: w.emoji,
          label: w.eng,
          isCorrect: false,
        })),
      ].sort(() => Math.random() - 0.5),
    });
  }

  // Add more questions
  while (questions.length < 3) {
    const randomVocab = islamicVocab[Math.floor(Math.random() * islamicVocab.length)];
    const wrongVocab = islamicVocab
      .filter(v => v.id !== randomVocab.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    questions.push({
      id: `english-d${day}-q${questions.length + 1}`,
      text: `"${randomVocab.indonesian}" dalam bahasa Inggris adalah?`,
      options: [
        { id: 'correct', display: randomVocab.emoji, label: randomVocab.english, isCorrect: true },
        ...wrongVocab.map((w, i) => ({
          id: `wrong${i}`,
          display: w.emoji,
          label: w.english,
          isCorrect: false,
        })),
      ].sort(() => Math.random() - 0.5),
    });
  }

  return questions.slice(0, 3);
}

// Main function to get session questions
export function getSessionQuestions(day, sessionType) {
  switch (sessionType) {
    case 'iqro':
      return generateIqroQuestions(day);
    case 'islami':
      return generateIslamiQuestions(day);
    case 'english':
      return generateEnglishQuestions(day);
    default:
      return [];
  }
}

// Export data for seeding Supabase
export const seedData = {
  hijaiyahLetters,
  asmaulHusna,
  prophets,
  dailyPrayers,
  islamicVocab,
  islamicGreetings,
};
