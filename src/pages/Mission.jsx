import { useParams, Link } from 'react-router-dom';
import { useDailyMissionLogic } from '../hooks/useDailyMission';
import Header from '../components/Common/Header';
import DaySelector from '../components/Mission/DaySelector';
import DailyProgress from '../components/Mission/DailyProgress';
import SessionCard from '../components/Mission/SessionCard';
import Celebration from '../components/Reward/Celebration';
import { useState } from 'react';

export default function Mission() {
  const { dayNumber } = useParams();
  const day = parseInt(dayNumber) || 1;

  const {
    sessions,
    completedSessions,
    isDayComplete,
    totalStarsToday,
    currentDay,
    canAccessDay,
    isLoading,
  } = useDailyMissionLogic(day);

  const [showCelebration, setShowCelebration] = useState(false);

  // Check if day is accessible
  if (!canAccessDay(day)) {
    return (
      <>
        <Header showBack title="Misi Terkunci" />
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="text-8xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Hari {day} Terkunci</h2>
          <p className="text-gray-600 mb-6 text-center">
            Selesaikan hari sebelumnya untuk membuka hari ini
          </p>
          <Link
            to={`/mission/${currentDay}`}
            className="bg-primary text-white px-6 py-3 rounded-xl font-bold"
          >
            Kembali ke Hari {currentDay}
          </Link>
        </main>
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <Header showBack title={`Hari ${day}`} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-4xl animate-bounce">🌙</div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header showBack title={`Hari ${day}`} />

      <main className="flex-1 px-4 py-6">
        <div className="max-w-2xl mx-auto">
          {/* Day info */}
          <div className="text-center mb-6">
            <div className="text-6xl mb-2">🌙</div>
            <h1 className="text-3xl font-bold text-gray-800">
              Misi Hari ke-{day}
            </h1>
            <p className="text-gray-600">
              Selesaikan 3 sesi untuk lanjut ke hari berikutnya
            </p>
          </div>

          {/* Day selector (scrollable) */}
          <DaySelector
            currentDay={currentDay}
            selectedDay={day}
            onSelectDay={(d) => window.location.href = `/mission/${d}`}
          />

          {/* Daily progress */}
          <DailyProgress
            completedSessions={completedSessions}
            totalStars={totalStarsToday}
          />

          {/* Session cards */}
          <div className="space-y-4">
            <SessionCard
              sessionType="iqro"
              dayNumber={day}
              progress={sessions.iqro}
            />
            <SessionCard
              sessionType="islami"
              dayNumber={day}
              progress={sessions.islami}
            />
            <SessionCard
              sessionType="english"
              dayNumber={day}
              progress={sessions.english}
            />
          </div>

          {/* Day complete message */}
          {isDayComplete && (
            <div className="mt-6 bg-green-100 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-2">🎉</div>
              <h3 className="text-xl font-bold text-green-800">
                Alhamdulillah! Misi Hari Ini Selesai!
              </h3>
              <p className="text-green-600 mb-4">
                Kamu mendapat {totalStarsToday} bintang hari ini
              </p>
              {day < 30 && (
                <Link
                  to={`/mission/${day + 1}`}
                  className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-bold"
                >
                  Lanjut Hari {day + 1} →
                </Link>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="mt-6 flex gap-4">
            <Link
              to="/calendar"
              className="flex-1 bg-white text-gray-700 text-center py-3 rounded-xl font-bold shadow hover:shadow-md transition-shadow"
            >
              📅 Lihat Kalender
            </Link>
            <Link
              to="/categories"
              className="flex-1 bg-white text-gray-700 text-center py-3 rounded-xl font-bold shadow hover:shadow-md transition-shadow"
            >
              📚 Latihan Bebas
            </Link>
          </div>
        </div>
      </main>

      <Celebration
        show={showCelebration}
        score={totalStarsToday}
        total={15}
        onClose={() => setShowCelebration(false)}
      />
    </>
  );
}
