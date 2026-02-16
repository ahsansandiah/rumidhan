import { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

const STORAGE_KEY = 'rumidhan_progress';

const initialProgress = {
  totalStars: 0,
  categories: {},
};

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialProgress;
      }
    }
    return initialProgress;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const addStar = (categoryId) => {
    setProgress(prev => ({
      ...prev,
      totalStars: prev.totalStars + 1,
      categories: {
        ...prev.categories,
        [categoryId]: {
          ...prev.categories[categoryId],
          stars: (prev.categories[categoryId]?.stars || 0) + 1,
        },
      },
    }));
  };

  const updateCategoryProgress = (categoryId, questionIndex, totalQuestions) => {
    setProgress(prev => ({
      ...prev,
      categories: {
        ...prev.categories,
        [categoryId]: {
          ...prev.categories[categoryId],
          currentQuestion: questionIndex,
          totalQuestions,
          completed: questionIndex >= totalQuestions,
        },
      },
    }));
  };

  const markCategoryCompleted = (categoryId) => {
    setProgress(prev => ({
      ...prev,
      categories: {
        ...prev.categories,
        [categoryId]: {
          ...prev.categories[categoryId],
          completed: true,
        },
      },
    }));
  };

  const getCategoryProgress = (categoryId) => {
    return progress.categories[categoryId] || {
      stars: 0,
      currentQuestion: 0,
      totalQuestions: 0,
      completed: false,
    };
  };

  const resetCategory = (categoryId) => {
    setProgress(prev => ({
      ...prev,
      categories: {
        ...prev.categories,
        [categoryId]: {
          stars: 0,
          currentQuestion: 0,
          totalQuestions: 0,
          completed: false,
        },
      },
    }));
  };

  const resetAll = () => {
    setProgress(initialProgress);
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      totalStars: progress.totalStars,
      addStar,
      updateCategoryProgress,
      markCategoryCompleted,
      getCategoryProgress,
      resetCategory,
      resetAll,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
