# Rumidhan - Quiz Islami untuk Anak

Web aplikasi quiz berbasis gambar untuk anak usia 2+ tahun dengan tema Islami. Dibuat khusus untuk Rumi.

## Tech Stack

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Audio:** Web Audio API / Browser Text-to-Speech
- **State:** React useState/useContext (no external library)
- **Routing:** React Router DOM
- **Assets:** Emoji sebagai placeholder gambar

---

## Struktur Project

```
rumidhan/
├── public/
│   ├── audio/           # File audio pertanyaan & feedback
│   └── images/          # Gambar untuk quiz
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   └── MainLayout.jsx
│   │   ├── Quiz/
│   │   │   ├── QuizCard.jsx        # Kartu pilihan gambar
│   │   │   ├── QuizQuestion.jsx    # Tampilan pertanyaan + audio
│   │   │   ├── QuizResult.jsx      # Hasil benar/salah
│   │   │   └── QuizProgress.jsx    # Progress bar
│   │   ├── Category/
│   │   │   ├── CategoryList.jsx    # Daftar kategori
│   │   │   └── CategoryCard.jsx    # Card kategori
│   │   ├── Reward/
│   │   │   ├── StarDisplay.jsx     # Tampilan bintang
│   │   │   └── Celebration.jsx     # Animasi selesai quiz
│   │   └── Common/
│   │       ├── Button.jsx
│   │       ├── AudioButton.jsx     # Tombol play audio
│   │       └── Header.jsx
│   ├── data/
│   │   └── quizData.js             # Data quiz hardcoded
│   ├── hooks/
│   │   ├── useAudio.js             # Custom hook untuk audio
│   │   └── useQuiz.js              # Logic quiz
│   ├── context/
│   │   └── ProgressContext.jsx     # Track progress & bintang
│   ├── pages/
│   │   ├── Home.jsx                # Landing page
│   │   ├── Categories.jsx          # Pilih kategori
│   │   ├── Quiz.jsx                # Halaman quiz
│   │   └── Result.jsx              # Hasil akhir
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Kategori Quiz

| No | Kategori | Deskripsi | Icon |
|----|----------|-----------|------|
| 1 | Huruf Hijaiyah | Mengenal huruf Arab | 📖 |
| 2 | Angka Arab | Mengenal angka 1-10 dalam Arab | ✨ |
| 3 | Gerakan Sholat | Mengenal rukun sholat | 🤲 |
| 4 | Benda Islami | Masjid, sajadah, mukena, dll | 📿 |
| 5 | Doa Harian | Doa sebelum makan, tidur, dll | 💫 |
| 6 | Nama Nabi | Mengenal nama-nama nabi | 🌟 |

---

## Fitur Detail

### 1. Quiz dengan Gambar + Audio
- Pertanyaan ditampilkan dengan teks besar
- Tombol speaker untuk memutar audio pertanyaan (Text-to-Speech)
- 3-4 pilihan gambar/emoji sebagai jawaban
- Gambar besar & mudah di-tap untuk anak

### 2. Sistem Feedback
- **Benar:** Animasi bintang + suara ascending notes + ucapan "Benar! Hebat!"
- **Salah:** Animasi gentle + suara descending + ucapan "Coba lagi ya!"
- Tidak ada penalti, encourage untuk coba lagi

### 3. Sistem Bintang/Reward
- 1 bintang per jawaban benar
- Total bintang ditampilkan di header
- Animasi celebration dengan confetti saat selesai 1 kategori

### 4. Level Kesulitan
- **Level 1 (Mudah):** 2-3 pilihan gambar, gambar sangat jelas
- **Level 2 (Sedang):** 3-4 pilihan gambar

### 5. Progress Tracking
- Progress bar per kategori
- Simpan di localStorage
- Badge completed untuk kategori selesai

---

## Data Quiz Structure

```javascript
// src/data/quizData.js
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
      // ... more questions
    ]
  },
  // ... more categories
];
```

---

## UI/UX Design

### Warna Theme

| Nama | Hex Code | Penggunaan |
|------|----------|------------|
| Primary | `#10B981` | Hijau - warna Islami, tombol utama |
| Secondary | `#60A5FA` | Biru muda - ramah anak |
| Accent | `#FBBF24` | Kuning - untuk bintang/reward |
| Background | Gradient pastel | `#E0F2FE` → `#DBEAFE` → `#E0E7FF` |

### Gradient per Kategori

```css
.gradient-hijaiyah { background: linear-gradient(135deg, #60A5FA, #3B82F6); }
.gradient-angka    { background: linear-gradient(135deg, #34D399, #10B981); }
.gradient-sholat   { background: linear-gradient(135deg, #A78BFA, #8B5CF6); }
.gradient-benda    { background: linear-gradient(135deg, #FBBF24, #F59E0B); }
.gradient-doa      { background: linear-gradient(135deg, #F472B6, #EC4899); }
.gradient-nabi     { background: linear-gradient(135deg, #2DD4BF, #14B8A6); }
```

### Typography
- **Font:** Nunito (Google Fonts) - rounded & child-friendly
- **Ukuran:** Besar untuk anak (text-2xl sampai text-5xl)

### Layout
- Mobile-first (anak biasa pakai tablet/HP)
- Tombol besar minimum 60x60px
- Spacing lebar antar elemen
- Rounded corners (rounded-2xl, rounded-3xl)

---

## Animasi

| Nama | Penggunaan |
|------|------------|
| `bounce-slow` | Mascot di home, trophy di result |
| `pulse-star` | Bintang berkedip |
| `wiggle` | Feedback jawaban salah |
| `pop` | Feedback jawaban benar, modal muncul |
| `celebrate` | Rotasi saat celebration |
| `confetti-fall` | Confetti jatuh saat selesai quiz |
| `sparkle` | Efek bintang berkilau |

---

## Audio System

### Text-to-Speech (Browser API)
- Bahasa: Indonesia (`id-ID`)
- Rate: 0.9 (sedikit lebih lambat untuk anak)
- Pitch: 1.1 (sedikit lebih tinggi)

### Sound Effects (Web Audio API)
- **Benar:** Ascending notes (C5 → E5 → G5)
- **Salah:** Gentle descending tone
- **Celebration:** Fanfare (C5 → E5 → G5 → C6)

---

## Instalasi & Menjalankan

### Prerequisites
- Node.js 18+
- npm atau yarn

### Langkah Instalasi

```bash
# Clone atau masuk ke direktori project
cd rumidhan

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview
```

### Akses Aplikasi
Buka browser di `http://localhost:5173`

---

## Verification / Testing Checklist

### Manual Testing
- [ ] Quiz dapat dimulai dari home
- [ ] Navigasi ke halaman kategori berfungsi
- [ ] Klik kategori membuka quiz
- [ ] Audio pertanyaan dapat diputar (tombol speaker)
- [ ] Klik pilihan jawaban memberikan feedback
- [ ] Feedback benar: animasi + suara + teks "Benar!"
- [ ] Feedback salah: animasi + suara + tombol "Coba Lagi"
- [ ] Bintang bertambah saat jawaban benar
- [ ] Progress bar terupdate setiap soal
- [ ] Animasi celebration muncul saat selesai kategori
- [ ] Progress tersimpan setelah refresh (localStorage)
- [ ] Responsive di mobile view (< 768px)
- [ ] Tombol "Main Lagi" reset quiz kategori
- [ ] Navigasi antar halaman smooth

---

## Pengembangan Selanjutnya

### Potential Features
- [ ] Tambah lebih banyak soal per kategori
- [ ] Level kesulitan yang bisa dipilih
- [ ] Leaderboard / high score
- [ ] Multiple user profiles
- [ ] Offline PWA support
- [ ] Custom audio files (bukan TTS)
- [ ] Gambar ilustrasi asli (bukan emoji)
- [ ] Dark mode
- [ ] Parental controls
- [ ] Achievement badges

### Asset Resources (Free)
- [Freepik](https://freepik.com) - Ilustrasi anak Islami
- [Flaticon](https://flaticon.com) - Icons
- [Unsplash](https://unsplash.com) - Foto masjid, dll
- [Freesound](https://freesound.org) - Sound effects

---

## Lisensi

Dibuat dengan 💚 untuk Rumi

---

## Screenshots

> *Tambahkan screenshots aplikasi di sini*

### Home Page
![Home](screenshots/home.png)

### Categories Page
![Categories](screenshots/categories.png)

### Quiz Page
![Quiz](screenshots/quiz.png)

### Celebration
![Celebration](screenshots/celebration.png)
