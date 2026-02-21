import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as api from '../api/supabase';
import { useDeviceId } from './useDeviceId';

const isConfigured = api.isSupabaseConfigured();

// Categories
export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await api.getCategories();
      if (error) throw error;
      return data;
    },
    enabled: isConfigured,
  });
}

// Daily Mission
export function useDailyMission(dayNumber) {
  return useQuery({
    queryKey: ['dailyMission', dayNumber],
    queryFn: async () => {
      const { data, error } = await api.getDailyMission(dayNumber);
      if (error) throw error;
      return data;
    },
    enabled: isConfigured && dayNumber > 0 && dayNumber <= 30,
  });
}

export function useAllDailyMissions() {
  return useQuery({
    queryKey: ['allDailyMissions'],
    queryFn: async () => {
      const { data, error } = await api.getAllDailyMissions();
      if (error) throw error;
      return data;
    },
    enabled: isConfigured,
  });
}

// Questions
export function useQuestions(categoryId, dayNumber) {
  return useQuery({
    queryKey: ['questions', categoryId, dayNumber],
    queryFn: async () => {
      const { data, error } = await api.getQuestionsByCategoryAndDay(categoryId, dayNumber);
      if (error) throw error;
      return data;
    },
    enabled: isConfigured && !!categoryId && dayNumber > 0,
  });
}

// User Progress
export function useUserProgress() {
  const deviceId = useDeviceId();

  return useQuery({
    queryKey: ['userProgress', deviceId],
    queryFn: async () => {
      const { data, error } = await api.getUserProgress(deviceId);
      if (error && error.code !== 'PGRST116') throw error; // PGRST116 = not found
      return data;
    },
    enabled: isConfigured && !!deviceId,
  });
}

export function useUpdateUserProgress() {
  const deviceId = useDeviceId();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (progressData) => {
      if (!isConfigured) return progressData;
      const { data, error } = await api.upsertUserProgress(deviceId, progressData);
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userProgress', deviceId] });
    },
  });
}

// Session Progress
export function useSessionProgress(dayNumber) {
  const deviceId = useDeviceId();

  return useQuery({
    queryKey: ['sessionProgress', deviceId, dayNumber],
    queryFn: async () => {
      const { data, error } = await api.getSessionProgress(deviceId, dayNumber);
      if (error) throw error;
      return data;
    },
    enabled: isConfigured && !!deviceId && dayNumber > 0,
  });
}

export function useUpdateSessionProgress() {
  const deviceId = useDeviceId();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ dayNumber, sessionType, ...data }) => {
      if (!isConfigured) return { day_number: dayNumber, session_type: sessionType, ...data };
      const { data: result, error } = await api.upsertSessionProgress(
        deviceId,
        dayNumber,
        sessionType,
        data
      );
      if (error) throw error;
      return result;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['sessionProgress', deviceId, variables.dayNumber],
      });
    },
  });
}

// Question Progress
export function useUpdateQuestionProgress() {
  const deviceId = useDeviceId();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ questionId, ...data }) => {
      if (!isConfigured) return { question_id: questionId, ...data };
      const { data: result, error } = await api.upsertQuestionProgress(
        deviceId,
        questionId,
        data
      );
      if (error) throw error;
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userProgress', deviceId] });
    },
  });
}
