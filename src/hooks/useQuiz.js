import { useState, useCallback, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext';
import { useAudio } from './useAudio';

export function useQuiz(questions, categoryId) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);

  const { addStar, updateCategoryProgress, markCategoryCompleted } = useProgress();
  const { playCorrectSound, playWrongSound, playCelebrationSound, speak } = useAudio();

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const progress = ((currentIndex) / totalQuestions) * 100;

  useEffect(() => {
    updateCategoryProgress(categoryId, currentIndex, totalQuestions);
  }, [categoryId, currentIndex, totalQuestions, updateCategoryProgress]);

  const handleSelectOption = useCallback((option) => {
    if (showResult) return; // Prevent selecting while showing result

    setSelectedOption(option);
    const correct = option.isCorrect;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      playCorrectSound();
      setScore(prev => prev + 1);
      addStar(categoryId);
      speak('Benar! Hebat!');
    } else {
      playWrongSound();
      speak('Coba lagi ya!');
    }
  }, [showResult, playCorrectSound, playWrongSound, addStar, categoryId, speak]);

  const handleNext = useCallback(() => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
      setIsCorrect(false);
    } else {
      // Quiz complete
      setIsComplete(true);
      markCategoryCompleted(categoryId);
      playCelebrationSound();
      speak('Selamat! Kamu sudah selesai!');
    }
  }, [currentIndex, totalQuestions, markCategoryCompleted, categoryId, playCelebrationSound, speak]);

  const handleTryAgain = useCallback(() => {
    setSelectedOption(null);
    setShowResult(false);
    setIsCorrect(false);
  }, []);

  const resetQuiz = useCallback(() => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setIsCorrect(false);
    setIsComplete(false);
    setScore(0);
  }, []);

  return {
    currentQuestion,
    currentIndex,
    totalQuestions,
    progress,
    selectedOption,
    showResult,
    isCorrect,
    isComplete,
    score,
    handleSelectOption,
    handleNext,
    handleTryAgain,
    resetQuiz,
  };
}
