import Button from '../Common/Button';

export default function QuizResult({ isCorrect, onNext, onTryAgain }) {
  return (
    <div className={`
      mt-6 p-6 rounded-2xl text-center
      ${isCorrect ? 'bg-green-100' : 'bg-orange-100'}
      animate-pop
    `}>
      <div className="text-5xl mb-3">
        {isCorrect ? '🎉' : '💪'}
      </div>
      <p className={`text-xl font-bold mb-4 ${isCorrect ? 'text-green-700' : 'text-orange-700'}`}>
        {isCorrect ? 'Benar! Hebat sekali!' : 'Belum tepat, coba lagi!'}
      </p>

      {isCorrect ? (
        <Button onClick={onNext} variant="primary" size="lg">
          Lanjut →
        </Button>
      ) : (
        <Button onClick={onTryAgain} variant="accent" size="lg">
          Coba Lagi
        </Button>
      )}
    </div>
  );
}
