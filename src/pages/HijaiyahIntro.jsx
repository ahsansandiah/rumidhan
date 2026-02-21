import Header from '../components/Common/Header';
import { useAudio } from '../hooks/useAudio';

const hijaiyahLetters = [
  { id: '1', letter: 'ا', name: 'Alif', audioText: 'alif' },
  { id: '2', letter: 'ب', name: 'Ba', audioText: 'ba' },
  { id: '3', letter: 'ت', name: 'Ta', audioText: 'ta' },
  { id: '4', letter: 'ث', name: 'Tsa', audioText: 'tsa' },
  { id: '5', letter: 'ج', name: 'Jim', audioText: 'jim' },
  { id: '6', letter: 'ح', name: 'Ha', audioText: 'ha' },
  { id: '7', letter: 'خ', name: 'Kha', audioText: 'kha' },
  { id: '8', letter: 'د', name: 'Dal', audioText: 'dal' },
  { id: '9', letter: 'ذ', name: 'Dzal', audioText: 'dzal' },
  { id: '10', letter: 'ر', name: 'Ra', audioText: 'ra' },
  { id: '11', letter: 'ز', name: 'Zay', audioText: 'zay' },
  { id: '12', letter: 'س', name: 'Sin', audioText: 'sin' },
  { id: '13', letter: 'ش', name: 'Syin', audioText: 'syin' },
  { id: '14', letter: 'ص', name: 'Shad', audioText: 'shad' },
  { id: '15', letter: 'ض', name: 'Dhad', audioText: 'dhad' },
  { id: '16', letter: 'ط', name: 'Tha', audioText: 'tha' },
  { id: '17', letter: 'ظ', name: 'Zha', audioText: 'zha' },
  { id: '18', letter: 'ع', name: 'Ain', audioText: 'ain' },
  { id: '19', letter: 'غ', name: 'Ghain', audioText: 'ghain' },
  { id: '20', letter: 'ف', name: 'Fa', audioText: 'fa' },
  { id: '21', letter: 'ق', name: 'Qaf', audioText: 'qaf' },
  { id: '22', letter: 'ك', name: 'Kaf', audioText: 'kaf' },
  { id: '23', letter: 'ل', name: 'Lam', audioText: 'lam' },
  { id: '24', letter: 'م', name: 'Mim', audioText: 'mim' },
  { id: '25', letter: 'ن', name: 'Nun', audioText: 'nun' },
  { id: '26', letter: 'و', name: 'Waw', audioText: 'waw' },
  { id: '27', letter: 'ه', name: 'Ha', audioText: 'haa' },
  { id: '28', letter: 'ي', name: 'Ya', audioText: 'ya' },
];

export default function HijaiyahIntro() {
  const { speak } = useAudio();

  const playLetter = (item) => {
    const audio = new Audio(`/audio/hijaiyah/${item.audioText}.mp3`);
    audio.play().catch(() => {
      // Fallback to browser TTS when audio file is not available
      speak(item.audioText, 'ar-SA');
    });
  };

  return (
    <>
      <Header showBack title="Perkenalan Hijaiyah" />

      <main className="flex-1 px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Kenalan Huruf Hijaiyah
            </h1>
            <p className="text-gray-600">
              Tekan tombol suara di setiap huruf untuk mendengarkan bacaannya
            </p>
            <p className="text-xs text-gray-500 mt-2">
            </p>
          </div>

          <div dir="rtl" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {hijaiyahLetters.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center"
              >
                <div className="text-6xl leading-none mb-3">{item.letter}</div>
                <p className="text-lg font-bold text-gray-800 mb-3">{item.name}</p>
                <button
                  onClick={() => playLetter(item)}
                  className="bg-accent hover:bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-xl transition-colors"
                  aria-label={`Putar suara huruf ${item.name}`}
                >
                  🔊 Dengar
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
