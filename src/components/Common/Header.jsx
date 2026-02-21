import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useProgress } from '../../context/ProgressContext';
import StarDisplay from '../Reward/StarDisplay';

export default function Header({ showBack = false, title = '' }) {
  const { totalStars } = useProgress();
  const navigate = useNavigate();
  const location = useLocation();

  const getBackTarget = () => {
    const path = location.pathname;
    const segments = path.split('/').filter(Boolean);

    if (segments[0] === 'quiz' || segments[0] === 'result') return '/categories';
    if (segments[0] === 'session' && segments[1]) return `/mission/${segments[1]}`;
    if (segments[0] === 'hijaiyah-intro') return '/materi';
    if (segments[0] === 'materi' && segments[1]) return '/materi';
    if (segments[0] === 'materi' || segments[0] === 'mission' || segments[0] === 'calendar' || segments[0] === 'settings') return '/';
    return '/';
  };

  const handleBack = () => {
    navigate(getBackTarget());
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-sm shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack && (
            <div className="flex items-center gap-2">
              <button
                onClick={handleBack}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Kembali ke menu"
              >
                <span className="text-xl">←</span>
              </button>
              <button
                onClick={handleHome}
                className="h-10 px-3 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-sm font-bold text-gray-700"
                aria-label="Ke Home"
              >
                🏠 Home
              </button>
            </div>
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
