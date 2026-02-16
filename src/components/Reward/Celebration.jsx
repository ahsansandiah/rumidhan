import { useEffect, useState } from 'react';

const confettiColors = ['#10B981', '#60A5FA', '#FBBF24', '#F472B6', '#A78BFA', '#34D399'];

function Confetti({ index }) {
  const color = confettiColors[index % confettiColors.length];
  const left = Math.random() * 100;
  const delay = Math.random() * 2;
  const size = Math.random() * 10 + 8;

  return (
    <div
      className="confetti absolute"
      style={{
        left: `${left}%`,
        top: '-20px',
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        borderRadius: Math.random() > 0.5 ? '50%' : '0',
        animationDelay: `${delay}s`,
      }}
    />
  );
}

export default function Celebration({ show, score, total, onClose }) {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    if (show) {
      const pieces = Array.from({ length: 50 }, (_, i) => i);
      setConfetti(pieces);
    } else {
      setConfetti([]);
    }
  }, [show]);

  if (!show) return null;

  const percentage = Math.round((score / total) * 100);
  const message = percentage === 100
    ? 'Sempurna! 🎉'
    : percentage >= 70
    ? 'Hebat! 👏'
    : 'Bagus! Terus belajar! 💪';

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      {/* Confetti */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {confetti.map((i) => (
          <Confetti key={i} index={i} />
        ))}
      </div>

      {/* Modal */}
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-pop relative z-10">
        <div className="text-6xl mb-4 animate-bounce-slow">🏆</div>

        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Selesai!
        </h2>

        <p className="text-xl text-gray-600 mb-4">{message}</p>

        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-4xl">⭐</span>
          <span className="text-4xl font-bold text-amber-500">
            {score} / {total}
          </span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
          <div
            className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-1000"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <button
          onClick={onClose}
          className="w-full bg-primary hover:bg-green-600 text-white font-bold py-4 px-6 rounded-2xl text-xl transition-colors btn-press"
        >
          Lanjutkan
        </button>
      </div>
    </div>
  );
}
