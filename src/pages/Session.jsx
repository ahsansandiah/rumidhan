import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDailyMissionLogic } from '../hooks/useDailyMission';
import { useAudio } from '../hooks/useAudio';
import Header from '../components/Common/Header';
import QuizProgress from '../components/Quiz/QuizProgress';
import QuizCard from '../components/Quiz/QuizCard';
import QuizResult from '../components/Quiz/QuizResult';
import AudioButton from '../components/Common/AudioButton';
import Celebration from '../components/Reward/Celebration';

// Fallback data when Supabase is not configured
import { getSessionQuestions } from '../data/seedData';

const sessionConfig = {
  iqro: {
    name: 'Iqro',
    emoji: '📖',
    color: 'from-blue-400 to-blue-600',
  },
  islami: {
    name: 'Islami',
    emoji: '🕌',
    color: 'from-green-400 to-green-600',
  },
  english: {
    name: 'English',
    emoji: '🌍',
    color: 'from-purple-400 to-purple-600',
  },
};

export default function Session() {
  const { dayNumber, sessionType } = useParams();
  const navigate = useNavigate();
  const day = parseInt(dayNumber) || 1;

  const { completeSession, sessions } = useDailyMissionLogic(day);
  const { playCorrectSound, playWrongSound, speak } = useAudio();

  const config = sessionConfig[sessionType];

  // Get questions for this session
  const questions = getSessionQuestions(day, sessionType);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const progress = ((currentIndex) / totalQuestions) * 100;

  // Check if session already completed
  useEffect(() => {
    if (sessions[sessionType]?.completed) {
      // Session already done, show result
      setIsComplete(true);
      setScore(sessions[sessionType].stars_earned);
    }
  }, [sessions, sessionType]);

  const handleSelectOption = (option) => {
    if (showResult) return;

    setSelectedOption(option);
    const correct = option.isCorrect;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      playCorrectSound();
      setScore(prev => prev + 1);
      speak('Benar! Hebat!');
    } else {
      playWrongSound();
      speak('Coba lagi ya!');
    }
  };

  const handleNext = async () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
      setIsCorrect(false);
    } else {
      // Session complete
      setIsComplete(true);
      await completeSession(sessionType, score + (isCorrect ? 1 : 0));
    }
  };

  const handleTryAgain = () => {
    setSelectedOption(null);
    setShowResult(false);
    setIsCorrect(false);
  };

  const handleCelebrationClose = () => {
    navigate(`/mission/${day}`);
  };

  if (!config || !questions.length) {
    return (
      <>
        <Header showBack title="Sesi Tidak Ditemukan" />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-gray-600">Konten belum tersedia</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Header showBack title={`${config.emoji} ${config.name} - Hari ${day}`} />

      <main className="flex-1 px-4 py-6">
        <div className="max-w-2xl mx-auto">
          {/* Session header */}
          <div className={`bg-gradient-to-r ${config.color} text-white rounded-2xl p-4 mb-6 text-center`}>
            <div className="text-4xl mb-2">{config.emoji}</div>
            <h1 className="text-2xl font-bold">{config.name}</h1>
            <p className="text-white/80">Hari {day} - Sesi {sessionType === 'iqro' ? 'Pagi' : sessionType === 'islami' ? 'Siang' : 'Sore'}</p>
          </div>

          {!isComplete && currentQuestion && (
            <>
              <QuizProgress
                current={currentIndex}
                total={totalQuestions}
                progress={progress}
              />

              {/* Question */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <AudioButton text={currentQuestion.text} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 px-4">
                  {currentQuestion.text}
                </h2>
                {currentQuestion.text_en && (
                  <p className="text-gray-500 mt-2">{currentQuestion.text_en}</p>
                )}
              </div>

              {/* Options Grid */}
              <div className={`
                grid gap-4
                ${currentQuestion.options.length === 2 ? 'grid-cols-2' : ''}
                ${currentQuestion.options.length === 3 ? 'grid-cols-3' : ''}
                ${currentQuestion.options.length === 4 ? 'grid-cols-2 md:grid-cols-4' : ''}
              `}>
                {currentQuestion.options.map((option) => (
                  <QuizCard
                    key={option.id}
                    option={option}
                    onClick={handleSelectOption}
                    selected={selectedOption?.id === option.id}
                    disabled={showResult}
                    showResult={showResult}
                    isCorrectAnswer={option.isCorrect}
                  />
                ))}
              </div>

              {/* Result Feedback */}
              {showResult && (
                <QuizResult
                  isCorrect={isCorrect}
                  onNext={handleNext}
                  onTryAgain={handleTryAgain}
                />
              )}
            </>
          )}
        </div>
      </main>

      {/* Celebration Modal */}
      <Celebration
        show={isComplete}
        score={score}
        total={totalQuestions}
        onClose={handleCelebrationClose}
      />
    </>
  );
}
