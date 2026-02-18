-- Rumidhan v2 Database Schema
-- Misi Ramadhan 30 Hari

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Kategori konten
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  name_en TEXT,
  icon TEXT,
  emoji TEXT,
  color TEXT,
  description TEXT,
  session_type TEXT CHECK (session_type IN ('iqro', 'islami', 'english')),
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Soal quiz
CREATE TABLE questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  day_number INTEGER CHECK (day_number BETWEEN 1 AND 30),
  text TEXT NOT NULL,
  text_en TEXT,
  audio_text TEXT,
  level INTEGER DEFAULT 1,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Pilihan jawaban
CREATE TABLE options (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id UUID REFERENCES questions(id) ON DELETE CASCADE,
  display TEXT NOT NULL,
  label TEXT NOT NULL,
  label_en TEXT,
  is_correct BOOLEAN DEFAULT FALSE,
  sort_order INTEGER DEFAULT 0
);

-- Misi harian
CREATE TABLE daily_missions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  day_number INTEGER UNIQUE CHECK (day_number BETWEEN 1 AND 30),
  title TEXT NOT NULL,
  description TEXT,
  iqro_category_id UUID REFERENCES categories(id),
  islami_category_id UUID REFERENCES categories(id),
  english_category_id UUID REFERENCES categories(id),
  bonus_stars INTEGER DEFAULT 5,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Progress user (device-based)
CREATE TABLE user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  device_id TEXT UNIQUE NOT NULL,
  current_day INTEGER DEFAULT 1,
  total_stars INTEGER DEFAULT 0,
  streak_days INTEGER DEFAULT 0,
  last_activity_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Progress per sesi
CREATE TABLE session_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  device_id TEXT NOT NULL,
  day_number INTEGER NOT NULL,
  session_type TEXT CHECK (session_type IN ('iqro', 'islami', 'english')),
  completed BOOLEAN DEFAULT FALSE,
  stars_earned INTEGER DEFAULT 0,
  completed_at TIMESTAMPTZ,
  UNIQUE(device_id, day_number, session_type)
);

-- Progress per soal
CREATE TABLE question_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  device_id TEXT NOT NULL,
  question_id UUID REFERENCES questions(id) ON DELETE CASCADE,
  answered_correctly BOOLEAN,
  attempts INTEGER DEFAULT 0,
  answered_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(device_id, question_id)
);

-- Indexes for better query performance
CREATE INDEX idx_questions_category ON questions(category_id);
CREATE INDEX idx_questions_day ON questions(day_number);
CREATE INDEX idx_options_question ON options(question_id);
CREATE INDEX idx_session_progress_device ON session_progress(device_id);
CREATE INDEX idx_session_progress_day ON session_progress(day_number);
CREATE INDEX idx_question_progress_device ON question_progress(device_id);

-- Row Level Security (RLS) - Allow all operations since no auth
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE options ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_missions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE session_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE question_progress ENABLE ROW LEVEL SECURITY;

-- Policies for public access (read-only for content, full access for progress)
CREATE POLICY "Allow read categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Allow read questions" ON questions FOR SELECT USING (true);
CREATE POLICY "Allow read options" ON options FOR SELECT USING (true);
CREATE POLICY "Allow read daily_missions" ON daily_missions FOR SELECT USING (true);

CREATE POLICY "Allow all user_progress" ON user_progress FOR ALL USING (true);
CREATE POLICY "Allow all session_progress" ON session_progress FOR ALL USING (true);
CREATE POLICY "Allow all question_progress" ON question_progress FOR ALL USING (true);
