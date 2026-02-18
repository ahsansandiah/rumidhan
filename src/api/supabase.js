import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create Supabase client only if credentials are available
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export const isSupabaseConfigured = () => {
  return supabase !== null;
};

// Categories
export async function getCategories() {
  if (!supabase) return { data: null, error: new Error('Supabase not configured') };
  return supabase
    .from('categories')
    .select('*')
    .order('sort_order');
}

export async function getCategoryBySlug(slug) {
  if (!supabase) return { data: null, error: new Error('Supabase not configured') };
  return supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single();
}

// Questions
export async function getQuestionsByDay(dayNumber, sessionType) {
  if (!supabase) return { data: null, error: new Error('Supabase not configured') };
  return supabase
    .from('questions')
    .select(`
      *,
      options (*)
    `)
    .eq('day_number', dayNumber)
    .eq('category.session_type', sessionType)
    .order('sort_order');
}

export async function getQuestionsByCategoryAndDay(categoryId, dayNumber) {
  if (!supabase) return { data: null, error: new Error('Supabase not configured') };
  return supabase
    .from('questions')
    .select(`
      *,
      options (*)
    `)
    .eq('category_id', categoryId)
    .eq('day_number', dayNumber)
    .order('sort_order');
}

// Daily Missions
export async function getDailyMission(dayNumber) {
  if (!supabase) return { data: null, error: new Error('Supabase not configured') };
  return supabase
    .from('daily_missions')
    .select(`
      *,
      iqro_category:iqro_category_id (*),
      islami_category:islami_category_id (*),
      english_category:english_category_id (*)
    `)
    .eq('day_number', dayNumber)
    .single();
}

export async function getAllDailyMissions() {
  if (!supabase) return { data: null, error: new Error('Supabase not configured') };
  return supabase
    .from('daily_missions')
    .select('*')
    .order('day_number');
}

// User Progress
export async function getUserProgress(deviceId) {
  if (!supabase) return { data: null, error: new Error('Supabase not configured') };
  return supabase
    .from('user_progress')
    .select('*')
    .eq('device_id', deviceId)
    .single();
}

export async function upsertUserProgress(deviceId, data) {
  if (!supabase) return { data: null, error: new Error('Supabase not configured') };
  return supabase
    .from('user_progress')
    .upsert({
      device_id: deviceId,
      ...data,
      updated_at: new Date().toISOString(),
    }, {
      onConflict: 'device_id',
    })
    .select()
    .single();
}

// Session Progress
export async function getSessionProgress(deviceId, dayNumber) {
  if (!supabase) return { data: null, error: new Error('Supabase not configured') };
  return supabase
    .from('session_progress')
    .select('*')
    .eq('device_id', deviceId)
    .eq('day_number', dayNumber);
}

export async function upsertSessionProgress(deviceId, dayNumber, sessionType, data) {
  if (!supabase) return { data: null, error: new Error('Supabase not configured') };
  return supabase
    .from('session_progress')
    .upsert({
      device_id: deviceId,
      day_number: dayNumber,
      session_type: sessionType,
      ...data,
    }, {
      onConflict: 'device_id,day_number,session_type',
    })
    .select()
    .single();
}

// Question Progress
export async function upsertQuestionProgress(deviceId, questionId, data) {
  if (!supabase) return { data: null, error: new Error('Supabase not configured') };
  return supabase
    .from('question_progress')
    .upsert({
      device_id: deviceId,
      question_id: questionId,
      ...data,
      answered_at: new Date().toISOString(),
    }, {
      onConflict: 'device_id,question_id',
    })
    .select()
    .single();
}
