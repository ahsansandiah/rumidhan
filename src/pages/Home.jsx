import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import Button from '../components/Common/Button';
import StarDisplay from '../components/Reward/StarDisplay';
import StreakBadge from '../components/Mission/StreakBadge';

export default function Home() {
  const { totalStars } = useProgress();

  // Get current day from localStorage (simplified - in real app would use useDailyMissionLogic)
  const getCurrentDay = () => {
    try {
      const stored = localStorage.getItem('rumidhan_mission_day');
      return stored ? parseInt(stored) : 1;
    } catch {
      return 1;
    }
  };

  const currentDay = getCurrentDay();

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 relative">
      {/* Settings Button */}
      <Link
        to="/settings"
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
      >
        <span className="text-2xl">⚙️</span>
      </Link>

      {/* Logo and Title */}
      <div className="text-center mb-6 animate-pop">
        <div className="text-8xl mb-4">🌙</div>
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-2">
          Rumidhan
        </h1>
        <p className="text-xl text-gray-600">
          Quiz Islami untuk Anak
        </p>
      </div>

      {/* Character/Mascot */}
      <div className="text-8xl mb-6 animate-bounce-slow">
        🧒
      </div>

      {/* Total Stars */}
      {totalStars > 0 && (
        <div className="mb-6">
          <StarDisplay count={totalStars} size="lg" />
        </div>
      )}

      {/* Main Actions */}
      <div className="w-full max-w-sm space-y-4">
        {/* Ramadhan Mission - Primary CTA */}
        <Link to={`/mission/${currentDay}`} className="block">
          <div className="bg-gradient-to-r from-primary to-green-400 text-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
            <div className="flex items-center gap-4">
              <div className="text-5xl">🌙</div>
              <div className="flex-1">
                <h2 className="text-xl font-bold">Misi Ramadhan</h2>
                <p className="text-white/80 text-sm">Hari ke-{currentDay} dari 30</p>
              </div>
              <div className="text-3xl">▶️</div>
            </div>
            <div className="mt-3 bg-white/20 rounded-full h-2">
              <div
                className="bg-white h-2 rounded-full transition-all"
                style={{ width: `${(currentDay / 30) * 100}%` }}
              />
            </div>
          </div>
        </Link>

        {/* Secondary Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Link to="/calendar">
            <Button variant="secondary" size="md" className="w-full">
              📅 Kalender
            </Button>
          </Link>
          <Link to="/categories">
            <Button variant="outline" size="md" className="w-full">
              📚 Bebas
            </Button>
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="mt-10 grid grid-cols-4 gap-4 text-center max-w-md">
        <div className="flex flex-col items-center">
          <span className="text-3xl mb-1">📖</span>
          <span className="text-xs text-gray-600">Iqro</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl mb-1">🕌</span>
          <span className="text-xs text-gray-600">Islami</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl mb-1">🌍</span>
          <span className="text-xs text-gray-600">English</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl mb-1">⭐</span>
          <span className="text-xs text-gray-600">Reward</span>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-10 text-sm text-gray-400">
        Dibuat dengan 💚 untuk Rumi
      </p>
    </div>
  );
}
