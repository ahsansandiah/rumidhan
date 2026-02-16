import { useParams, useNavigate } from 'react-router-dom';
import { getCategoryById } from '../data/quizData';
import { useQuiz } from '../hooks/useQuiz';
import Header from '../components/Common/Header';
import QuizProgress from '../components/Quiz/QuizProgress';
import QuizQuestion from '../components/Quiz/QuizQuestion';
import QuizCard from '../components/Quiz/QuizCard';
import QuizResult from '../components/Quiz/QuizResult';
import Celebration from '../components/Reward/Celebration';

export default function Quiz() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const category = getCategoryById(categoryId);

  const {
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
  } = useQuiz(category?.questions || [], categoryId);

  if (!category) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-xl text-gray-600">Kategori tidak ditemukan</p>
      </div>
    );
  }

  const handleCelebrationClose = () => {
    navigate(`/result/${categoryId}`);
  };

  return (
    <>
      <Header showBack title={category.name} />

      <main className="flex-1 px-4 py-6 md:py-8">
        <div className="max-w-2xl mx-auto">
          <QuizProgress
            current={currentIndex}
            total={totalQuestions}
            progress={progress}
          />

          {currentQuestion && (
            <>
              <QuizQuestion question={currentQuestion} />

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
