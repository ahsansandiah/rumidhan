export const categories = [
  {
    id: 'hijaiyah',
    name: 'Huruf Hijaiyah',
    icon: '🔤',
    emoji: '📖',
    color: 'gradient-hijaiyah',
    description: 'Mengenal huruf Arab',
    questions: [
      {
        id: 1,
        text: 'Mana huruf Alif?',
        options: [
          { id: 'a', display: 'ا', label: 'Alif', isCorrect: true },
          { id: 'b', display: 'ب', label: 'Ba', isCorrect: false },
          { id: 'c', display: 'ت', label: 'Ta', isCorrect: false },
        ],
        level: 1
      },
      {
        id: 2,
        text: 'Mana huruf Ba?',
        options: [
          { id: 'a', display: 'ا', label: 'Alif', isCorrect: false },
          { id: 'b', display: 'ب', label: 'Ba', isCorrect: true },
          { id: 'c', display: 'ث', label: 'Tsa', isCorrect: false },
        ],
        level: 1
      },
      {
        id: 3,
        text: 'Mana huruf Jim?',
        options: [
          { id: 'a', display: 'ح', label: 'Ha', isCorrect: false },
          { id: 'b', display: 'خ', label: 'Kha', isCorrect: false },
          { id: 'c', display: 'ج', label: 'Jim', isCorrect: true },
          { id: 'd', display: 'د', label: 'Dal', isCorrect: false },
        ],
        level: 2
      },
    ]
  },
  {
    id: 'angka',
    name: 'Angka Arab',
    icon: '🔢',
    emoji: '✨',
    color: 'gradient-angka',
    description: 'Mengenal angka 1-10 dalam Arab',
    questions: [
      {
        id: 1,
        text: 'Mana angka satu (١)?',
        options: [
          { id: 'a', display: '١', label: 'Wahid (1)', isCorrect: true },
          { id: 'b', display: '٢', label: 'Itsnan (2)', isCorrect: false },
          { id: 'c', display: '٣', label: 'Tsalatsah (3)', isCorrect: false },
        ],
        level: 1
      },
      {
        id: 2,
        text: 'Mana angka tiga (٣)?',
        options: [
          { id: 'a', display: '٢', label: 'Itsnan (2)', isCorrect: false },
          { id: 'b', display: '٣', label: 'Tsalatsah (3)', isCorrect: true },
          { id: 'c', display: '٤', label: "Arba'ah (4)", isCorrect: false },
        ],
        level: 1
      },
      {
        id: 3,
        text: 'Mana angka lima (٥)?',
        options: [
          { id: 'a', display: '٤', label: "Arba'ah (4)", isCorrect: false },
          { id: 'b', display: '٥', label: 'Khamsah (5)', isCorrect: true },
          { id: 'c', display: '٦', label: 'Sittah (6)', isCorrect: false },
          { id: 'd', display: '٧', label: "Sab'ah (7)", isCorrect: false },
        ],
        level: 2
      },
    ]
  },
  {
    id: 'sholat',
    name: 'Gerakan Sholat',
    icon: '🕌',
    emoji: '🤲',
    color: 'gradient-sholat',
    description: 'Mengenal rukun sholat',
    questions: [
      {
        id: 1,
        text: 'Mana gambar orang sedang Ruku?',
        options: [
          { id: 'a', display: '🧎', label: 'Sujud', isCorrect: false },
          { id: 'b', display: '🙇', label: 'Ruku', isCorrect: true },
          { id: 'c', display: '🧍', label: 'Berdiri', isCorrect: false },
        ],
        level: 1
      },
      {
        id: 2,
        text: 'Mana gambar orang sedang Sujud?',
        options: [
          { id: 'a', display: '🧎', label: 'Sujud', isCorrect: true },
          { id: 'b', display: '🙇', label: 'Ruku', isCorrect: false },
          { id: 'c', display: '🧘', label: 'Duduk', isCorrect: false },
        ],
        level: 1
      },
      {
        id: 3,
        text: 'Mana urutan gerakan yang benar?',
        options: [
          { id: 'a', display: '🧍➡️🙇➡️🧎', label: 'Berdiri-Ruku-Sujud', isCorrect: true },
          { id: 'b', display: '🧎➡️🙇➡️🧍', label: 'Sujud-Ruku-Berdiri', isCorrect: false },
          { id: 'c', display: '🙇➡️🧍➡️🧎', label: 'Ruku-Berdiri-Sujud', isCorrect: false },
        ],
        level: 2
      },
    ]
  },
  {
    id: 'benda',
    name: 'Benda Islami',
    icon: '🕋',
    emoji: '📿',
    color: 'gradient-benda',
    description: 'Masjid, sajadah, mukena, dll',
    questions: [
      {
        id: 1,
        text: 'Mana gambar Masjid?',
        options: [
          { id: 'a', display: '🕌', label: 'Masjid', isCorrect: true },
          { id: 'b', display: '🏠', label: 'Rumah', isCorrect: false },
          { id: 'c', display: '🏫', label: 'Sekolah', isCorrect: false },
        ],
        level: 1
      },
      {
        id: 2,
        text: 'Mana gambar Tasbih?',
        options: [
          { id: 'a', display: '📿', label: 'Tasbih', isCorrect: true },
          { id: 'b', display: '📖', label: 'Buku', isCorrect: false },
          { id: 'c', display: '🧕', label: 'Hijab', isCorrect: false },
        ],
        level: 1
      },
      {
        id: 3,
        text: 'Mana gambar Ka\'bah?',
        options: [
          { id: 'a', display: '🕋', label: "Ka'bah", isCorrect: true },
          { id: 'b', display: '🕌', label: 'Masjid', isCorrect: false },
          { id: 'c', display: '🏛️', label: 'Gedung', isCorrect: false },
          { id: 'd', display: '⛪', label: 'Gereja', isCorrect: false },
        ],
        level: 2
      },
    ]
  },
  {
    id: 'doa',
    name: 'Doa Harian',
    icon: '🤲',
    emoji: '💫',
    color: 'gradient-doa',
    description: 'Doa sebelum makan, tidur, dll',
    questions: [
      {
        id: 1,
        text: 'Kapan kita membaca Bismillah?',
        options: [
          { id: 'a', display: '🍽️', label: 'Sebelum Makan', isCorrect: true },
          { id: 'b', display: '😴', label: 'Setelah Bangun', isCorrect: false },
          { id: 'c', display: '🚿', label: 'Setelah Mandi', isCorrect: false },
        ],
        level: 1
      },
      {
        id: 2,
        text: 'Kapan kita membaca Alhamdulillah?',
        options: [
          { id: 'a', display: '🍽️', label: 'Sebelum Makan', isCorrect: false },
          { id: 'b', display: '😋', label: 'Setelah Makan', isCorrect: true },
          { id: 'c', display: '🚶', label: 'Sebelum Pergi', isCorrect: false },
        ],
        level: 1
      },
      {
        id: 3,
        text: 'Doa apa yang dibaca sebelum tidur?',
        options: [
          { id: 'a', display: '🌙', label: 'Doa Tidur', isCorrect: true },
          { id: 'b', display: '☀️', label: 'Doa Bangun', isCorrect: false },
          { id: 'c', display: '🍽️', label: 'Doa Makan', isCorrect: false },
          { id: 'd', display: '🚗', label: 'Doa Naik Kendaraan', isCorrect: false },
        ],
        level: 2
      },
    ]
  },
  {
    id: 'nabi',
    name: 'Nama Nabi',
    icon: '⭐',
    emoji: '🌟',
    color: 'gradient-nabi',
    description: 'Mengenal nama-nama nabi',
    questions: [
      {
        id: 1,
        text: 'Siapa nabi yang membuat kapal besar?',
        options: [
          { id: 'a', display: '🚢', label: 'Nabi Nuh', isCorrect: true },
          { id: 'b', display: '🐋', label: 'Nabi Yunus', isCorrect: false },
          { id: 'c', display: '🌊', label: 'Nabi Musa', isCorrect: false },
        ],
        level: 1
      },
      {
        id: 2,
        text: 'Siapa nabi yang ditelan ikan besar?',
        options: [
          { id: 'a', display: '🚢', label: 'Nabi Nuh', isCorrect: false },
          { id: 'b', display: '🐋', label: 'Nabi Yunus', isCorrect: true },
          { id: 'c', display: '🦁', label: 'Nabi Daud', isCorrect: false },
        ],
        level: 1
      },
      {
        id: 3,
        text: 'Siapa nabi terakhir yang diutus Allah?',
        options: [
          { id: 'a', display: '🕌', label: 'Nabi Muhammad', isCorrect: true },
          { id: 'b', display: '🌙', label: 'Nabi Ibrahim', isCorrect: false },
          { id: 'c', display: '⭐', label: 'Nabi Isa', isCorrect: false },
          { id: 'd', display: '🌟', label: 'Nabi Musa', isCorrect: false },
        ],
        level: 2
      },
    ]
  },
];

export const getCategoryById = (id) => {
  return categories.find(cat => cat.id === id);
};

export const getQuestionsByCategory = (categoryId) => {
  const category = getCategoryById(categoryId);
  return category ? category.questions : [];
};
