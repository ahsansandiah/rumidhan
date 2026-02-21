import { Link } from 'react-router-dom';
import Header from '../components/Common/Header';

const materiList = [
  {
    id: 'hijaiyah-intro',
    title: 'Iqro: Perkenalan Huruf Hijaiyah',
    description: 'Kenalan huruf hijaiyah dan dengarkan suaranya.',
    emoji: '🔤',
    to: '/hijaiyah-intro',
    available: true,
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 'english',
    title: 'English Islami',
    description: 'Kata dan kalimat Islami dalam bahasa Inggris.',
    emoji: '🌍',
    to: '/materi/english',
    available: true,
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: 'iqro-lanjutan',
    title: 'Iqro Lanjutan',
    description: 'Harakat, sambung huruf, dan latihan baca.',
    emoji: '📖',
    available: false,
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    id: 'ski',
    title: 'Sejarah Kebudayaan Islam',
    description: 'Kisah tokoh dan peradaban Islam untuk anak.',
    emoji: '🏛️',
    available: false,
    color: 'from-amber-400 to-amber-600',
  },
  {
    id: 'akhlak',
    title: 'Akhlak & Adab',
    description: 'Materi sopan santun dan adab harian.',
    emoji: '🤝',
    available: false,
    color: 'from-green-400 to-green-600',
  },
];

export default function Materi() {
  return (
    <>
      <Header showBack title="Menu Materi" />

      <main className="flex-1 px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Pilih Materi</h1>
            <p className="text-gray-600">Materi pembelajaran untuk Rumidhan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {materiList.map((materi) => {
              const content = (
                <div
                  className={`
                    rounded-2xl p-5 text-white shadow-lg transition-all duration-300
                    bg-gradient-to-r ${materi.color}
                    ${materi.available ? 'hover:scale-[1.02] hover:shadow-xl' : 'opacity-60'}
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{materi.emoji}</div>
                    <div className="flex-1">
                      <h2 className="text-lg md:text-xl font-bold">{materi.title}</h2>
                      <p className="text-sm text-white/85 mt-1">{materi.description}</p>
                      <div className="mt-3 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-bold">
                        {materi.available ? 'Buka Materi' : 'Segera Hadir'}
                      </div>
                    </div>
                  </div>
                </div>
              );

              if (!materi.available) {
                return <div key={materi.id}>{content}</div>;
              }

              return (
                <Link key={materi.id} to={materi.to}>
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
