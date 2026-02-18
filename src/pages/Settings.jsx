import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import Header from '../components/Common/Header';
import Button from '../components/Common/Button';

export default function Settings() {
  const navigate = useNavigate();
  const { resetAll, totalStars } = useProgress();
  const [showConfirm, setShowConfirm] = useState(false);
  const [resetType, setResetType] = useState(null); // 'mission' | 'all'

  const handleResetMission = () => {
    // Reset mission progress only
    localStorage.removeItem('rumidhan_mission_day');
    localStorage.removeItem('rumidhan_device_id');
    setShowConfirm(false);
    navigate('/');
    window.location.reload();
  };

  const handleResetAll = () => {
    // Reset everything
    resetAll();
    localStorage.removeItem('rumidhan_mission_day');
    localStorage.removeItem('rumidhan_device_id');
    localStorage.removeItem('rumidhan_progress');
    setShowConfirm(false);
    navigate('/');
    window.location.reload();
  };

  const confirmReset = (type) => {
    setResetType(type);
    setShowConfirm(true);
  };

  return (
    <>
      <Header showBack title="Pengaturan" />

      <main className="flex-1 px-4 py-6">
        <div className="max-w-md mx-auto">
          {/* Current Stats */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Status Saat Ini</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Bintang</span>
                <span className="font-bold text-amber-500 flex items-center gap-1">
                  <span>⭐</span> {totalStars}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Hari Misi</span>
                <span className="font-bold text-primary">
                  {localStorage.getItem('rumidhan_mission_day') || '1'} / 30
                </span>
              </div>
            </div>
          </div>

          {/* Reset Options */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Reset Progress</h2>
            <p className="text-gray-600 text-sm mb-4">
              Reset untuk mulai dari awal. Data yang dihapus tidak bisa dikembalikan.
            </p>

            <div className="space-y-3">
              <button
                onClick={() => confirmReset('mission')}
                className="w-full p-4 rounded-xl bg-orange-50 hover:bg-orange-100 text-left transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <p className="font-bold text-orange-700">Reset Misi Ramadhan</p>
                    <p className="text-sm text-orange-600">Mulai misi dari Hari 1 lagi</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => confirmReset('all')}
                className="w-full p-4 rounded-xl bg-red-50 hover:bg-red-100 text-left transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🗑️</span>
                  <div>
                    <p className="font-bold text-red-700">Reset Semua Data</p>
                    <p className="text-sm text-red-600">Hapus semua bintang & progress</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* App Info */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-2">🌙</div>
            <h3 className="font-bold text-gray-800">Rumidhan v2.0</h3>
            <p className="text-sm text-gray-500">Quiz Islami untuk Anak</p>
            <p className="text-xs text-gray-400 mt-2">Dibuat dengan 💚 untuk Rumi</p>
          </div>
        </div>
      </main>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl animate-pop">
            <div className="text-center mb-4">
              <div className="text-5xl mb-3">
                {resetType === 'all' ? '⚠️' : '🔄'}
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                {resetType === 'all' ? 'Reset Semua Data?' : 'Reset Misi Ramadhan?'}
              </h3>
              <p className="text-gray-600 mt-2">
                {resetType === 'all'
                  ? 'Semua bintang dan progress akan dihapus. Yakin?'
                  : 'Progress misi akan kembali ke Hari 1. Bintang tetap disimpan.'}
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="md"
                className="flex-1"
                onClick={() => setShowConfirm(false)}
              >
                Batal
              </Button>
              <Button
                variant={resetType === 'all' ? 'accent' : 'primary'}
                size="md"
                className="flex-1"
                onClick={resetType === 'all' ? handleResetAll : handleResetMission}
              >
                Ya, Reset
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
