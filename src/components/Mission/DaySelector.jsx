export default function DaySelector({ currentDay, selectedDay, onSelectDay, maxDay = 30 }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg mb-6">
      <h3 className="font-bold text-gray-800 mb-3">Pilih Hari</h3>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {Array.from({ length: maxDay }, (_, i) => i + 1).map((day) => {
          const isLocked = day > currentDay;
          const isSelected = day === selectedDay;
          const isCompleted = day < currentDay;

          return (
            <button
              key={day}
              onClick={() => !isLocked && onSelectDay(day)}
              disabled={isLocked}
              className={`
                flex-shrink-0 w-12 h-12 rounded-full
                flex items-center justify-center
                font-bold text-lg
                transition-all duration-200
                ${isLocked
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : isSelected
                  ? 'bg-primary text-white scale-110 shadow-lg'
                  : isCompleted
                  ? 'bg-green-100 text-green-600 hover:bg-green-200'
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }
              `}
            >
              {isLocked ? '🔒' : isCompleted ? '✓' : day}
            </button>
          );
        })}
      </div>

      <p className="text-sm text-gray-500 mt-2 text-center">
        Hari {selectedDay} dari 30 hari Ramadhan
      </p>
    </div>
  );
}
