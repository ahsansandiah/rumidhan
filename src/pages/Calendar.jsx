import { Link } from 'react-router-dom';
import { useDailyMissionLogic } from '../hooks/useDailyMission';
import Header from '../components/Common/Header';
import RamadhanCalendar from '../components/Calendar/RamadhanCalendar';
import StreakBadge from '../components/Mission/StreakBadge';

export default function Calendar() {
  const { currentDay, totalStars, streakDays } = useDailyMissionLogic(1);

  return (
    <>
      <Header showBack title="Kalender Ramadhan" />

      <main className="flex-1 px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Stats summary */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-2xl p-4 text-center shadow">
              <div className="text-3xl mb-1">📅</div>
              <div className="text-2xl font-bold text-primary">{currentDay}</div>
              <div className="text-xs text-gray-500">Hari Aktif</div>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center shadow">
              <div className="text-3xl mb-1">⭐</div>
              <div className="text-2xl font-bold text-amber-500">{totalStars}</div>
              <div className="text-xs text-gray-500">Total Bintang</div>
            </div>
            <div className="bg-white rounded-2xl p-4 text-center shadow">
              <div className="text-3xl mb-1">🔥</div>
              <div className="text-2xl font-bold text-orange-500">{streakDays}</div>
              <div className="text-xs text-gray-500">Hari Berturut</div>
            </div>
          </div>

          {/* Streak badge */}
          {streakDays >= 3 && (
            <div className="flex justify-center mb-6">
              <StreakBadge streakDays={streakDays} />
            </div>
          )}

          {/* Calendar */}
          <RamadhanCalendar currentDay={currentDay} />

          {/* Quick actions */}
          <div className="mt-6 flex gap-4">
            <Link
              to={`/mission/${currentDay}`}
              className="flex-1 bg-primary text-white text-center py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow"
            >
              🚀 Lanjutkan Misi Hari {currentDay}
            </Link>
          </div>

          {/* Motivational messages based on progress */}
          <div className="mt-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6 text-center">
            {currentDay <= 10 && (
              <>
                <div className="text-4xl mb-2">💪</div>
                <p className="font-bold text-gray-800">Semangat! Kamu baru mulai!</p>
                <p className="text-gray-600 text-sm">Terus belajar setiap hari</p>
              </>
            )}
            {currentDay > 10 && currentDay <= 20 && (
              <>
                <div className="text-4xl mb-2">🌟</div>
                <p className="font-bold text-gray-800">Hebat! Sudah setengah jalan!</p>
                <p className="text-gray-600 text-sm">Pertahankan semangatmu</p>
              </>
            )}
            {currentDay > 20 && currentDay < 30 && (
              <>
                <div className="text-4xl mb-2">🔥</div>
                <p className="font-bold text-gray-800">Luar biasa! Hampir selesai!</p>
                <p className="text-gray-600 text-sm">Sedikit lagi menuju garis finish</p>
              </>
            )}
            {currentDay >= 30 && (
              <>
                <div className="text-4xl mb-2">🏆</div>
                <p className="font-bold text-gray-800">Masya Allah! Kamu menyelesaikan 30 hari!</p>
                <p className="text-gray-600 text-sm">Selamat Hari Raya Idul Fitri!</p>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
