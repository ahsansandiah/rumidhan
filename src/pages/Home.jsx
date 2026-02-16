import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import Button from '../components/Common/Button';
import StarDisplay from '../components/Reward/StarDisplay';

export default function Home() {
  const { totalStars } = useProgress();

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
      {/* Logo and Title */}
      <div className="text-center mb-8 animate-pop">
        <div className="text-8xl mb-4">🌙</div>
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-2">
          Rumidhan
        </h1>
        <p className="text-xl text-gray-600">
          Quiz Islami untuk Anak
        </p>
      </div>

      {/* Character/Mascot */}
      <div className="text-9xl mb-8 animate-bounce-slow">
        🧒
      </div>

      {/* Total Stars */}
      {totalStars > 0 && (
        <div className="mb-8">
          <StarDisplay count={totalStars} size="lg" />
        </div>
      )}

      {/* Start Button */}
      <Link to="/categories">
        <Button variant="primary" size="xl" className="min-w-[250px]">
          🎮 Mulai Bermain!
        </Button>
      </Link>

      {/* Features */}
      <div className="mt-12 grid grid-cols-3 gap-6 text-center max-w-md">
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-2">📖</span>
          <span className="text-sm text-gray-600">Belajar Huruf</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-2">🕌</span>
          <span className="text-sm text-gray-600">Mengenal Islam</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-2">⭐</span>
          <span className="text-sm text-gray-600">Kumpulkan Bintang</span>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-12 text-sm text-gray-400">
        Dibuat dengan 💚 untuk Rumi
      </p>
    </div>
  );
}
