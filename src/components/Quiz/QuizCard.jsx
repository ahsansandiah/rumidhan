export default function QuizCard({
  option,
  onClick,
  selected,
  disabled,
  showResult,
  isCorrectAnswer,
}) {
  const getCardStyles = () => {
    if (!showResult) {
      return selected
        ? 'ring-4 ring-secondary bg-blue-50 scale-105'
        : 'hover:scale-105 hover:shadow-xl bg-white';
    }

    if (isCorrectAnswer) {
      return 'ring-4 ring-green-500 bg-green-50 scale-105';
    }

    if (selected && !isCorrectAnswer) {
      return 'ring-4 ring-red-400 bg-red-50 opacity-75';
    }

    return 'opacity-50 bg-gray-100';
  };

  return (
    <button
      onClick={() => onClick(option)}
      disabled={disabled || showResult}
      className={`
        w-full aspect-square
        rounded-3xl
        shadow-lg
        transition-all duration-300
        flex flex-col items-center justify-center
        p-4
        no-select
        btn-press
        ${getCardStyles()}
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      <span className="text-6xl md:text-7xl mb-2">{option.display}</span>
      <span className="text-sm md:text-base font-semibold text-gray-600 text-center">
        {option.label}
      </span>

      {showResult && isCorrectAnswer && (
        <span className="absolute top-2 right-2 text-2xl animate-pop">✅</span>
      )}
      {showResult && selected && !isCorrectAnswer && (
        <span className="absolute top-2 right-2 text-2xl animate-wiggle">❌</span>
      )}
    </button>
  );
}
