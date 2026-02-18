# Rumidhan v2 - Misi Ramadhan 30 Hari

Web aplikasi quiz berbasis gambar untuk anak usia 2+ tahun dengan tema Islami. Dibuat khusus untuk Rumi.

## Fitur Utama

### 🌙 Misi Ramadhan 30 Hari
- **3 sesi harian:** Iqro (Pagi), Islami (Siang), English (Sore)
- **Progressive unlock:** Selesaikan hari ini untuk buka hari berikutnya
- **Streak system:** Badge untuk konsistensi harian
- **Kalender visual:** Lihat progress 30 hari

### 📖 Konten Pembelajaran
- **Iqro Level 1-2:** Huruf Hijaiyah + Harakat (Fathah, Kasrah, Dhammah)
- **Islami:** Asmaul Husna, Rukun Islam/Iman, Kisah Nabi, Doa, Adab
- **English:** Islamic greetings & vocabulary dalam bahasa Inggris

### ⭐ Sistem Reward
- Bintang per jawaban benar
- Celebration animation
- Progress tracking per kategori

---

## Tech Stack

| Komponen | Teknologi |
|----------|-----------|
| Framework | React (Vite) |
| Styling | Tailwind CSS |
| Database | Supabase PostgreSQL |
| State | React Context + React Query |
| Audio | Web Audio API + Text-to-Speech |

---

## Struktur Project

```
rumidhan/
├── src/
│   ├── api/
│   │   └── supabase.js           # Supabase client
│   ├── components/
│   │   ├── Layout/
│   │   ├── Quiz/                 # Quiz components
│   │   ├── Category/             # Category selection
│   │   ├── Mission/              # Ramadhan mission components
│   │   ├── Calendar/             # Calendar view
│   │   ├── Reward/               # Stars & celebration
│   │   └── Common/               # Buttons, Header, etc
│   ├── context/
│   │   ├── ProgressContext.jsx   # Progress state
│   │   └── MissionContext.jsx    # Mission state
│   ├── hooks/
│   │   ├── useAudio.js           # Audio & TTS
│   │   ├── useQuiz.js            # Quiz logic
│   │   ├── useSupabase.js        # Data fetching
│   │   ├── useDailyMission.js    # Mission logic
│   │   └── useDeviceId.js        # Device identification
│   ├── pages/
│   │   ├── Home.jsx              # Landing page
│   │   ├── Categories.jsx        # Free play categories
│   │   ├── Quiz.jsx              # Free play quiz
│   │   ├── Mission.jsx           # Daily mission
│   │   ├── Session.jsx           # Session quiz
│   │   ├── Calendar.jsx          # 30-day calendar
│   │   └── Result.jsx            # Results
│   └── data/
│       ├── quizData.js           # Free play data
│       └── seedData.js           # 30-day mission data
├── supabase/
│   └── migrations/
│       └── 001_initial_schema.sql
└── .env.example
```

---

## Kurikulum 30 Hari

### Iqro (Sesi Pagi 🌅)

| Hari | Konten |
|------|--------|
| 1-14 | Huruf Hijaiyah ا sampai ي |
| 15-20 | Harakat Fathah |
| 21-25 | Harakat Kasrah |
| 26-30 | Harakat Dhammah |

### Islami (Sesi Siang 🕌)

| Hari | Konten |
|------|--------|
| 1-5 | Asmaul Husna (Ar-Rahman, Ar-Rahim, dll) |
| 6-10 | Rukun Islam & Iman |
| 11-20 | Kisah 10 Nabi utama |
| 21-25 | Doa harian |
| 26-30 | Adab Islami |

### English (Sesi Sore 🌍)

| Hari | Konten |
|------|--------|
| 1-10 | Islamic greetings (Assalamu'alaikum, Bismillah, dll) |
| 11-20 | Vocabulary (Mosque, Prayer, Fasting, dll) |
| 21-30 | Simple sentences |

---

## Instalasi

### Prerequisites
- Node.js 18+
- npm atau yarn
- (Opsional) Supabase account untuk database

### Setup Lokal

```bash
# Clone atau masuk ke direktori
cd rumidhan

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Jalankan development server
npm run dev
```

### Setup Supabase (Opsional)

1. Buat project di [Supabase](https://supabase.com)
2. Jalankan migration di `supabase/migrations/001_initial_schema.sql`
3. Update `.env` dengan credentials:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

**Note:** App berjalan dengan data lokal jika Supabase tidak dikonfigurasi.

---

## Flow Aplikasi

```
Home
  │
  ├── [🌙 Misi Ramadhan] → Mission Page
  │         │
  │         ├── Sesi Iqro 🌅 → Quiz → Result
  │         ├── Sesi Islami 🕌 → Quiz → Result
  │         └── Sesi English 🌍 → Quiz → Result
  │
  ├── [📅 Kalender] → Calendar Page (30 hari)
  │
  └── [📚 Latihan Bebas] → Categories → Quiz
```

---

## Testing Checklist

### Home & Navigation
- [ ] Home page menampilkan progress misi
- [ ] Navigasi ke Mission, Calendar, Categories berfungsi

### Misi Ramadhan
- [ ] Day 1 accessible saat pertama kali
- [ ] 3 sesi (Iqro, Islami, English) ditampilkan
- [ ] Quiz berjalan untuk setiap sesi
- [ ] Stars bertambah saat jawaban benar
- [ ] Day unlock setelah 3 sesi selesai

### Kalender
- [ ] 30 hari ditampilkan dalam grid
- [ ] Status correct (locked/available/partial/completed)
- [ ] Tap day membuka mission

### Audio
- [ ] Text-to-speech berfungsi
- [ ] Sound effects (benar/salah)
- [ ] Celebration sound

---

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production
```

---

## Environment Variables

```env
# Supabase (optional)
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
```

---

## License

Dibuat dengan 💚 untuk Rumi

---

## Changelog

### v2.0.0 - Misi Ramadhan
- Tambah sistem misi 30 hari
- Tambah 3 sesi harian (Iqro, Islami, English)
- Tambah kalender visual
- Tambah streak system
- Integrasi Supabase (opsional)
- Update UI Home page

### v1.0.0 - Initial Release
- Quiz dengan 6 kategori
- Sistem bintang
- Audio text-to-speech
- Progress tracking localStorage
