import { Link, useNavigate } from 'react-router-dom';
import { useProgress } from '../../context/ProgressContext';
import StarDisplay from '../Reward/StarDisplay';

export default function Header({ showBack = false, title = '' }) {
  const { totalStars } = useProgress();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-sm shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack && (
            <button
              onClick={handleBack}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <span className="text-xl">←</span>
            </button>
          )}
          {title ? (
            <h1 className="text-xl font-bold text-gray-800 truncate max-w-[200px]">{title}</h1>
          ) : (
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl">🌙</span>
              <span className="text-xl font-bold text-primary">Rumidhan</span>
            </Link>
          )}
        </div>

        <StarDisplay count={totalStars} />
      </div>
    </header>
  );
}
