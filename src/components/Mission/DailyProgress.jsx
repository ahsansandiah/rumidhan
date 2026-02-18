export default function DailyProgress({ completedSessions, totalStars }) {
  const progress = (completedSessions / 3) * 100;

  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg mb-6">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-bold text-gray-800">Progress Hari Ini</h3>
          <p className="text-sm text-gray-500">
            {completedSessions}/3 sesi selesai
          </p>
        </div>
        <div className="flex items-center gap-2 bg-yellow-100 px-3 py-1 rounded-full">
          <span className="text-xl">⭐</span>
          <span className="font-bold text-amber-600">{totalStars}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="h-4 rounded-full bg-gradient-to-r from-primary to-green-400 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Session indicators */}
      <div className="flex justify-between mt-2">
        {['iqro', 'islami', 'english'].map((session, index) => (
          <div
            key={session}
            className={`flex items-center gap-1 text-xs ${
              index < completedSessions ? 'text-green-600' : 'text-gray-400'
            }`}
          >
            <span>{index < completedSessions ? '✅' : '⭕'}</span>
            <span className="capitalize">{session}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
