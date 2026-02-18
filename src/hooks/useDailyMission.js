import { useState, useCallback, useMemo } from 'react';
import { useSessionProgress, useUpdateSessionProgress, useUserProgress, useUpdateUserProgress } from './useSupabase';
import { useAudio } from './useAudio';

export function useDailyMissionLogic(dayNumber) {
  const { data: sessionProgress, isLoading: loadingProgress } = useSessionProgress(dayNumber);
  const { data: userProgress } = useUserProgress();
  const updateSession = useUpdateSessionProgress();
  const updateUser = useUpdateUserProgress();
  const { playCelebrationSound, speak } = useAudio();

  const sessions = useMemo(() => {
    const progress = sessionProgress || [];

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
  }, [sessionProgress]);

  const completedSessions = useMemo(() => {
    return Object.values(sessions).filter(s => s.completed).length;
  }, [sessions]);

  const isDayComplete = completedSessions === 3;

  const totalStarsToday = useMemo(() => {
    return Object.values(sessions).reduce((sum, s) => sum + (s.stars_earned || 0), 0);
  }, [sessions]);

  const completeSession = useCallback(async (sessionType, starsEarned) => {
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
      total_stars: currentStars + starsEarned,
      last_activity_date: new Date().toISOString().split('T')[0],
    });

    // Check if all sessions are now complete
    const newCompletedCount = Object.values(sessions).filter(s => s.completed).length + 1;
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
  }, [dayNumber, sessions, userProgress, updateSession, updateUser, playCelebrationSound, speak]);

  const canAccessDay = useCallback((targetDay) => {
    const currentDay = userProgress?.current_day || 1;
    return targetDay <= currentDay;
  }, [userProgress]);

  return {
    sessions,
    completedSessions,
    isDayComplete,
    totalStarsToday,
    completeSession,
    canAccessDay,
    isLoading: loadingProgress,
    currentDay: userProgress?.current_day || 1,
    totalStars: userProgress?.total_stars || 0,
    streakDays: userProgress?.streak_days || 0,
  };
}
