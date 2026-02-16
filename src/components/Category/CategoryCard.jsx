import { Link } from 'react-router-dom';
import { useProgress } from '../../context/ProgressContext';

export default function CategoryCard({ category }) {
  const { getCategoryProgress } = useProgress();
  const progress = getCategoryProgress(category.id);

  return (
    <Link
      to={`/quiz/${category.id}`}
      className={`
        ${category.color}
        rounded-3xl p-6
        shadow-lg hover:shadow-xl
        transition-all duration-300
        hover:scale-105
        flex flex-col items-center
        text-white
        relative
        overflow-hidden
        btn-press
        no-select
      `}
    >
      {/* Completed badge */}
      {progress.completed && (
        <div className="absolute top-2 right-2 bg-white/30 backdrop-blur-sm rounded-full px-2 py-1">
          <span className="text-sm">✅</span>
        </div>
      )}

      {/* Icon */}
      <div className="text-5xl mb-3">{category.emoji}</div>

      {/* Name */}
      <h3 className="text-xl font-bold text-center mb-1">{category.name}</h3>

      {/* Description */}
      <p className="text-sm text-white/80 text-center mb-3">{category.description}</p>

      {/* Stars earned */}
      {progress.stars > 0 && (
        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
          <span>⭐</span>
          <span className="text-sm font-bold">{progress.stars}</span>
        </div>
      )}

      {/* Progress bar */}
      {progress.currentQuestion > 0 && !progress.completed && (
        <div className="w-full mt-3">
          <div className="w-full bg-white/30 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all"
              style={{
                width: `${(progress.currentQuestion / progress.totalQuestions) * 100}%`
              }}
            />
          </div>
        </div>
      )}
    </Link>
  );
}
