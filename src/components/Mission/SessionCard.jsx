import { Link } from 'react-router-dom';

const sessionConfig = {
  iqro: {
    name: 'Iqro',
    emoji: '📖',
    icon: '🌅',
    time: 'Pagi',
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    description: 'Belajar huruf hijaiyah',
  },
  islami: {
    name: 'Islami',
    emoji: '🕌',
    icon: '☀️',
    time: 'Siang',
    color: 'from-green-400 to-green-600',
    bgColor: 'bg-green-50',
    description: 'Mengenal Allah & Rasul',
  },
  english: {
    name: 'English',
    emoji: '🌍',
    icon: '🌙',
    time: 'Sore',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
    description: 'Kosakata Islami',
  },
};

export default function SessionCard({ sessionType, dayNumber, progress, disabled = false }) {
  const config = sessionConfig[sessionType];
  const isCompleted = progress?.completed || false;
  const starsEarned = progress?.stars_earned || 0;

  if (disabled) {
    return (
      <div className={`
        ${config.bgColor}
        rounded-2xl p-4
        opacity-50
        cursor-not-allowed
      `}>
        <div className="flex items-center gap-3">
          <div className="text-4xl grayscale">{config.emoji}</div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">{config.icon} {config.time}</span>
            </div>
            <h3 className="font-bold text-gray-400">{config.name}</h3>
            <p className="text-xs text-gray-400">{config.description}</p>
          </div>
          <div className="text-2xl">🔒</div>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/session/${dayNumber}/${sessionType}`}
      className={`
        block rounded-2xl p-4
        bg-gradient-to-r ${config.color}
        text-white
        shadow-lg hover:shadow-xl
        transition-all duration-300
        hover:scale-[1.02]
        btn-press
        ${isCompleted ? 'ring-4 ring-yellow-400' : ''}
      `}
    >
      <div className="flex items-center gap-3">
        <div className="text-4xl">{config.emoji}</div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm text-white/80">{config.icon} {config.time}</span>
            {isCompleted && <span className="text-sm">✅</span>}
          </div>
          <h3 className="font-bold text-lg">{config.name}</h3>
          <p className="text-xs text-white/80">{config.description}</p>
        </div>
        {isCompleted ? (
          <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
            <span className="text-lg">⭐</span>
            <span className="font-bold">{starsEarned}</span>
          </div>
        ) : (
          <div className="text-2xl">▶️</div>
        )}
      </div>
    </Link>
  );
}
