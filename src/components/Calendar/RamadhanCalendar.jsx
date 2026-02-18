import { Link } from 'react-router-dom';

export default function RamadhanCalendar({ currentDay, sessionProgress = {} }) {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  const getDayStatus = (day) => {
    if (day > currentDay) return 'locked';
    const progress = sessionProgress[day] || [];
    const completedCount = progress.filter(s => s.completed).length;
    if (completedCount === 3) return 'completed';
    if (completedCount > 0) return 'partial';
    if (day === currentDay) return 'available';
    return 'available';
  };

  const getDayStyle = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 text-white';
      case 'partial':
        return 'bg-yellow-400 text-gray-800';
      case 'available':
        return 'bg-blue-500 text-white hover:bg-blue-600';
      case 'locked':
      default:
        return 'bg-gray-200 text-gray-400';
    }
  };

  const getDayIcon = (status) => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'partial':
        return '⏳';
      case 'locked':
        return '🔒';
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">🌙 Kalender Ramadhan</h2>
        <p className="text-gray-500">30 Hari Misi Belajar</p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-green-500" />
          <span>Selesai</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-yellow-400" />
          <span>Sebagian</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-blue-500" />
          <span>Tersedia</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gray-200" />
          <span>Terkunci</span>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-2">
        {days.map((day) => {
          const status = getDayStatus(day);
          const isLocked = status === 'locked';
          const icon = getDayIcon(status);

          const content = (
            <div
              className={`
                aspect-square rounded-xl
                flex flex-col items-center justify-center
                font-bold text-lg
                transition-all duration-200
                ${getDayStyle(status)}
                ${!isLocked ? 'cursor-pointer hover:scale-105 shadow-md hover:shadow-lg' : ''}
              `}
            >
              {icon ? (
                <span className="text-base">{icon}</span>
              ) : (
                <span>{day}</span>
              )}
              {!icon && <span className="text-[10px] opacity-70">Hari</span>}
            </div>
          );

          if (isLocked) {
            return <div key={day}>{content}</div>;
          }

          return (
            <Link key={day} to={`/mission/${day}`}>
              {content}
            </Link>
          );
        })}
      </div>

      {/* Progress Summary */}
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Progress: <span className="font-bold text-primary">{currentDay - 1}</span> / 30 hari selesai
        </p>
      </div>
    </div>
  );
}
