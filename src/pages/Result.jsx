import { useParams, Link } from 'react-router-dom';
import { getCategoryById } from '../data/quizData';
import { useProgress } from '../context/ProgressContext';
import Header from '../components/Common/Header';
import Button from '../components/Common/Button';

export default function Result() {
  const { categoryId } = useParams();
  const category = getCategoryById(categoryId);
  const { getCategoryProgress, resetCategory } = useProgress();
  const progress = getCategoryProgress(categoryId);

  if (!category) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-xl text-gray-600">Kategori tidak ditemukan</p>
      </div>
    );
  }

  const handlePlayAgain = () => {
    resetCategory(categoryId);
  };

  return (
    <>
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-md w-full text-center">
          {/* Trophy */}
          <div className="text-8xl mb-6 animate-bounce-slow">
            🏆
          </div>

          {/* Category completed */}
          <div className={`${category.color} text-white rounded-2xl p-4 mb-6`}>
            <span className="text-3xl mb-2 block">{category.emoji}</span>
            <h2 className="text-2xl font-bold">{category.name}</h2>
            <p className="text-white/80">Selesai!</p>
          </div>

          {/* Stars earned */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
            <p className="text-gray-600 mb-2">Bintang yang didapat:</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-5xl">⭐</span>
              <span className="text-5xl font-bold text-amber-500">
                {progress.stars}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <Link to={`/quiz/${categoryId}`} onClick={handlePlayAgain}>
              <Button variant="primary" size="lg" className="w-full">
                🔄 Main Lagi
              </Button>
            </Link>

            <Link to="/categories">
              <Button variant="secondary" size="lg" className="w-full">
                📚 Pilih Kategori Lain
              </Button>
            </Link>

            <Link to="/">
              <Button variant="outline" size="md" className="w-full">
                🏠 Ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
