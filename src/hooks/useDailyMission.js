import { useState, useCallback, useMemo, useEffect } from 'react';
import { useSessionProgress, useUpdateSessionProgress, useUserProgress, useUpdateUserProgress } from './useSupabase';
import { useAudio } from './useAudio';
import { isSupabaseConfigured } from '../api/supabase';

const LOCAL_USER_PROGRESS_KEY = 'rumidhan_user_progress';
const LOCAL_SESSION_PROGRESS_KEY = 'rumidhan_session_progress';
const LEGACY_MISSION_DAY_KEY = 'rumidhan_mission_day';

const defaultUserProgress = {
  current_day: 1,
  total_stars: 0,
  streak_days: 0,
  last_activity_date: null,
};

function readLocalJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function useDailyMissionLogic(dayNumber) {
  const usingSupabase = isSupabaseConfigured();
  const { data: sessionProgress, isLoading: loadingProgress } = useSessionProgress(dayNumber);
  const { data: userProgress } = useUserProgress();
  const updateSession = useUpdateSessionProgress();
  const updateUser = useUpdateUserProgress();
  const { playCelebrationSound, speak } = useAudio();
  const [localUserProgress, setLocalUserProgress] = useState(() =>
    readLocalJson(LOCAL_USER_PROGRESS_KEY, defaultUserProgress)
  );
  const [localSessionProgress, setLocalSessionProgress] = useState(() =>
    readLocalJson(LOCAL_SESSION_PROGRESS_KEY, {})
  );

  useEffect(() => {
    if (!usingSupabase) return;
    if (!userProgress) return;

    setLocalUserProgress((prev) => ({ ...prev, ...userProgress }));
  }, [usingSupabase, userProgress]);

  useEffect(() => {
    if (!usingSupabase) return;
    if (!sessionProgress) return;

    setLocalSessionProgress((prev) => {
      const next = { ...prev };
      next[dayNumber] = {
        iqro: sessionProgress.find((s) => s.session_type === 'iqro') || { completed: false, stars_earned: 0 },
        islami: sessionProgress.find((s) => s.session_type === 'islami') || { completed: false, stars_earned: 0 },
        english: sessionProgress.find((s) => s.session_type === 'english') || { completed: false, stars_earned: 0 },
      };
      return next;
    });
  }, [usingSupabase, sessionProgress, dayNumber]);

  useEffect(() => {
    localStorage.setItem(LOCAL_USER_PROGRESS_KEY, JSON.stringify(localUserProgress));
    localStorage.setItem(LEGACY_MISSION_DAY_KEY, String(localUserProgress.current_day || 1));
  }, [localUserProgress]);

  useEffect(() => {
    localStorage.setItem(LOCAL_SESSION_PROGRESS_KEY, JSON.stringify(localSessionProgress));
  }, [localSessionProgress]);

  const sessions = useMemo(() => {
    const progress = usingSupabase
      ? (sessionProgress || [])
      : Object.entries(localSessionProgress[dayNumber] || {}).map(([session_type, data]) => ({
        session_type,
        ...data,
      }));

    return {
      iqro: progress.find(s => s.session_type === 'iqro') || {
        completed: false,
        stars_earned: 0,
      },
      islami: progress.find(s => s.session_type === 'islami') || {
        completed: false,
        stars_earned: 0,
      },
      english: progress.find(s => s.session_type === 'english') || {
        completed: false,
        stars_earned: 0,
      },
    };
  }, [usingSupabase, sessionProgress, localSessionProgress, dayNumber]);

  const completedSessions = useMemo(() => {
    return Object.values(sessions).filter(s => s.completed).length;
  }, [sessions]);

  const isDayComplete = completedSessions === 3;

  const totalStarsToday = useMemo(() => {
    return Object.values(sessions).reduce((sum, s) => sum + (s.stars_earned || 0), 0);
  }, [sessions]);

  const completeSession = useCallback(async (sessionType, starsEarned) => {
    const existingSession = sessions[sessionType] || { completed: false, stars_earned: 0 };
    const starsDelta = existingSession.completed
      ? Math.max(0, starsEarned - (existingSession.stars_earned || 0))
      : starsEarned;

    if (usingSupabase) {
      await updateSession.mutateAsync({
        dayNumber,
        sessionType,
        completed: true,
        stars_earned: starsEarned,
        completed_at: new Date().toISOString(),
      });

      // Update total stars
      const currentStars = userProgress?.total_stars || 0;
      await updateUser.mutateAsync({
        total_stars: currentStars + starsDelta,
        last_activity_date: new Date().toISOString().split('T')[0],
      });

      // Check if all sessions are now complete
      const newCompletedCount = Object.values(sessions).filter(s => s.completed).length + (existingSession.completed ? 0 : 1);
      if (newCompletedCount === 3) {
        playCelebrationSound();
        speak('Alhamdulillah! Misi hari ini selesai!');

        // Unlock next day
        const currentDay = userProgress?.current_day || 1;
        if (dayNumber >= currentDay && dayNumber < 30) {
          await updateUser.mutateAsync({
            current_day: dayNumber + 1,
          });
        }
      }
      return;
    }

    const currentDate = new Date().toISOString().split('T')[0];

    setLocalSessionProgress((prev) => ({
      ...prev,
      [dayNumber]: {
        ...(prev[dayNumber] || {}),
        [sessionType]: {
          completed: true,
          stars_earned: starsEarned,
          completed_at: new Date().toISOString(),
        },
      },
    }));

    const daySessionsAfter = {
      ...sessions,
      [sessionType]: {
        completed: true,
        stars_earned: starsEarned,
      },
    };
    const newCompletedCount = Object.values(daySessionsAfter).filter((s) => s.completed).length;

    setLocalUserProgress((prev) => {
      const next = {
        ...prev,
        total_stars: (prev.total_stars || 0) + starsDelta,
        last_activity_date: currentDate,
      };

      if (newCompletedCount === 3 && dayNumber >= (prev.current_day || 1) && dayNumber < 30) {
        next.current_day = dayNumber + 1;
      }

      return next;
    });

    if (newCompletedCount === 3) {
      playCelebrationSound();
      speak('Alhamdulillah! Misi hari ini selesai!');
    }
  }, [dayNumber, sessions, usingSupabase, userProgress, updateSession, updateUser, playCelebrationSound, speak]);

  const canAccessDay = useCallback((targetDay) => {
    const currentDay = usingSupabase
      ? (userProgress?.current_day || 1)
      : (localUserProgress.current_day || 1);
    return targetDay <= currentDay;
  }, [usingSupabase, userProgress, localUserProgress]);

  const resolvedUserProgress = usingSupabase
    ? (userProgress || localUserProgress)
    : localUserProgress;

  return {
    sessions,
    completedSessions,
    isDayComplete,
    totalStarsToday,
    completeSession,
    canAccessDay,
    isLoading: usingSupabase ? loadingProgress : false,
    currentDay: resolvedUserProgress?.current_day || 1,
    totalStars: resolvedUserProgress?.total_stars || 0,
    streakDays: resolvedUserProgress?.streak_days || 0,
  };
}
