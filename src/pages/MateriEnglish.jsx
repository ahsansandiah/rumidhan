import Header from '../components/Common/Header';
import { useAudio } from '../hooks/useAudio';
import { useMemo, useState } from 'react';

const angkaItems = [
  { id: 'n1', emoji: '1️⃣', en: 'One', idn: 'Satu' },
  { id: 'n2', emoji: '2️⃣', en: 'Two', idn: 'Dua' },
  { id: 'n3', emoji: '3️⃣', en: 'Three', idn: 'Tiga' },
  { id: 'n4', emoji: '4️⃣', en: 'Four', idn: 'Empat' },
  { id: 'n5', emoji: '5️⃣', en: 'Five', idn: 'Lima' },
  { id: 'n6', emoji: '6️⃣', en: 'Six', idn: 'Enam' },
  { id: 'n7', emoji: '7️⃣', en: 'Seven', idn: 'Tujuh' },
  { id: 'n8', emoji: '8️⃣', en: 'Eight', idn: 'Delapan' },
  { id: 'n9', emoji: '9️⃣', en: 'Nine', idn: 'Sembilan' },
  { id: 'n10', emoji: '🔟', en: 'Ten', idn: 'Sepuluh' },
];

const hurufItems = [
  { id: 'l1', emoji: null, en: 'A', idn: 'Huruf A' },
  { id: 'l2', emoji: null, en: 'B', idn: 'Huruf B' },
  { id: 'l3', emoji: null, en: 'C', idn: 'Huruf C' },
  { id: 'l4', emoji: null, en: 'D', idn: 'Huruf D' },
  { id: 'l5', emoji: null, en: 'E', idn: 'Huruf E' },
  { id: 'l6', emoji: null, en: 'F', idn: 'Huruf F' },
  { id: 'l7', emoji: null, en: 'G', idn: 'Huruf G' },
  { id: 'l8', emoji: null, en: 'H', idn: 'Huruf H' },
  { id: 'l9', emoji: null, en: 'I', idn: 'Huruf I' },
  { id: 'l10', emoji: null, en: 'J', idn: 'Huruf J' },
  { id: 'l11', emoji: null, en: 'K', idn: 'Huruf K' },
  { id: 'l12', emoji: null, en: 'L', idn: 'Huruf L' },
  { id: 'l13', emoji: null, en: 'M', idn: 'Huruf M' },
  { id: 'l14', emoji: null, en: 'N', idn: 'Huruf N' },
  { id: 'l15', emoji: null, en: 'O', idn: 'Huruf O' },
  { id: 'l16', emoji: null, en: 'P', idn: 'Huruf P' },
  { id: 'l17', emoji: null, en: 'Q', idn: 'Huruf Q' },
  { id: 'l18', emoji: null, en: 'R', idn: 'Huruf R' },
  { id: 'l19', emoji: null, en: 'S', idn: 'Huruf S' },
  { id: 'l20', emoji: null, en: 'T', idn: 'Huruf T' },
  { id: 'l21', emoji: null, en: 'U', idn: 'Huruf U' },
  { id: 'l22', emoji: null, en: 'V', idn: 'Huruf V' },
  { id: 'l23', emoji: null, en: 'W', idn: 'Huruf W' },
  { id: 'l24', emoji: null, en: 'X', idn: 'Huruf X' },
  { id: 'l25', emoji: null, en: 'Y', idn: 'Huruf Y' },
  { id: 'l26', emoji: null, en: 'Z', idn: 'Huruf Z' },
];

const buahItems = [
  { id: 'f1', emoji: '🍎', en: 'Apple', idn: 'Apel' },
  { id: 'f2', emoji: '🍌', en: 'Banana', idn: 'Pisang' },
  { id: 'f3', emoji: '🍇', en: 'Grape', idn: 'Anggur' },
  { id: 'f4', emoji: '🍊', en: 'Orange', idn: 'Jeruk' },
  { id: 'f5', emoji: '🍉', en: 'Watermelon', idn: 'Semangka' },
  { id: 'f6', emoji: '🍓', en: 'Strawberry', idn: 'Stroberi' },
  { id: 'f7', emoji: '🍍', en: 'Pineapple', idn: 'Nanas' },
  { id: 'f8', emoji: '🥭', en: 'Mango', idn: 'Mangga' },
  { id: 'f9', emoji: '🥝', en: 'Kiwi', idn: 'Kiwi' },
  { id: 'f10', emoji: '🍐', en: 'Pear', idn: 'Pir' },
];

const topics = [
  {
    id: 'angka',
    title: '🔢 Angka',
    subtitle: 'Belajar angka 1 sampai 10 dalam bahasa Inggris',
    items: angkaItems,
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 'huruf',
    title: '🔤 Alphabet',
    subtitle: 'Belajar Alphabet A sampai Z dalam bahasa Inggris',
    items: hurufItems,
    color: 'from-indigo-400 to-indigo-600',
  },
  {
    id: 'buah',
    title: '🍓 Buah-buahan',
    subtitle: 'Belajar nama 10 buah dalam bahasa Inggris',
    items: buahItems,
    color: 'from-pink-400 to-rose-600',
  },
];

function TopicCards({ activeTopicId, onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {topics.map((topic) => (
        <button
          key={topic.id}
          onClick={() => onSelect(topic.id)}
          className={`
            text-left rounded-2xl p-5 text-white shadow-lg transition-all duration-300
            bg-gradient-to-r ${topic.color}
            ${activeTopicId === topic.id ? 'ring-4 ring-yellow-300 scale-[1.02]' : 'hover:scale-[1.02]'}
          `}
        >
          <h2 className="text-xl font-bold mb-2">{topic.title}</h2>
          <p className="text-sm text-white/90">{topic.subtitle}</p>
        </button>
      ))}
    </div>
  );
}

function ViewToggle({ viewMode, onChange }) {
  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => onChange('list')}
        className={`px-4 py-2 rounded-xl font-bold text-sm ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}
      >
        List View
      </button>
      <button
        onClick={() => onChange('slide')}
        className={`px-4 py-2 rounded-xl font-bold text-sm ${viewMode === 'slide' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}
      >
        Slide View
      </button>
    </div>
  );
}

function ListView({ items, onSpeak }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-2xl p-4 shadow text-center">
          {item.emoji ? (
            <div className="text-3xl mb-2">{item.emoji}</div>
          ) : (
            <div className="text-5xl font-extrabold text-gray-800 mb-2">{item.en}</div>
          )}
          {item.emoji && <p className="text-lg font-bold text-gray-800">{item.en}</p>}
          <p className="text-xs text-gray-500 mb-3">{item.idn}</p>
          <button
            onClick={() => onSpeak(item.en)}
            className="w-full bg-secondary hover:bg-blue-500 text-white text-sm font-bold py-2 rounded-xl transition-colors"
            aria-label={`Dengar pelafalan ${item.en}`}
          >
            🔊 Dengar
          </button>
        </div>
      ))}
    </div>
  );
}

function SlideView({ items, activeIndex, onPrev, onNext, onSpeak }) {
  const item = items[activeIndex];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onPrev}
          className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-xl font-bold"
          aria-label="Slide sebelumnya"
        >
          ←
        </button>
        <p className="text-sm font-semibold text-gray-500">
          {activeIndex + 1} / {items.length}
        </p>
        <button
          onClick={onNext}
          className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-xl font-bold"
          aria-label="Slide berikutnya"
        >
          →
        </button>
      </div>

      <div className="text-center">
        {item.emoji ? (
          <div className="text-8xl mb-4">{item.emoji}</div>
        ) : (
          <div className="text-9xl font-extrabold text-gray-800 mb-4">{item.en}</div>
        )}
        {item.emoji && <h3 className="text-4xl font-bold text-gray-800 mb-2">{item.en}</h3>}
        <p className="text-gray-500 mb-6">{item.idn}</p>
        <button
          onClick={() => onSpeak(item.en)}
          className="bg-secondary hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-colors"
          aria-label={`Dengar pelafalan ${item.en}`}
        >
          🔊 Dengar
        </button>
      </div>
    </div>
  );
}

export default function MateriEnglish() {
  const { speak } = useAudio();
  const [activeTopicId, setActiveTopicId] = useState('angka');
  const [viewMode, setViewMode] = useState('list');
  const [slideIndexByTopic, setSlideIndexByTopic] = useState({
    angka: 0,
    huruf: 0,
    buah: 0,
  });

  const activeTopic = useMemo(
    () => topics.find((topic) => topic.id === activeTopicId) || topics[0],
    [activeTopicId]
  );

  const activeSlideIndex = slideIndexByTopic[activeTopic.id] || 0;

  const updateSlideIndex = (nextIndex) => {
    setSlideIndexByTopic((prev) => ({
      ...prev,
      [activeTopic.id]: nextIndex,
    }));
  };

  const handlePrevSlide = () => {
    const total = activeTopic.items.length;
    updateSlideIndex((activeSlideIndex - 1 + total) % total);
  };

  const handleNextSlide = () => {
    const total = activeTopic.items.length;
    updateSlideIndex((activeSlideIndex + 1) % total);
  };

  const handleSpeak = (text) => {
    speak(text, 'en-US');
  };

  return (
    <>
      <Header showBack title="Materi English" />

      <main className="flex-1 px-4 py-6 md:py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">English Materi</h1>
            <p className="text-gray-600">Pilih materi dulu, lalu belajar dengan mode List atau Slide</p>
          </div>

          <TopicCards activeTopicId={activeTopicId} onSelect={setActiveTopicId} />

          <div className="bg-white/70 rounded-2xl p-4 md:p-5 mb-4">
            <h2 className="text-xl font-bold text-gray-800">{activeTopic.title}</h2>
            <p className="text-sm text-gray-600">{activeTopic.subtitle}</p>
          </div>

          <ViewToggle viewMode={viewMode} onChange={setViewMode} />

          {viewMode === 'list' ? (
            <ListView items={activeTopic.items} onSpeak={handleSpeak} />
          ) : (
            <SlideView
              items={activeTopic.items}
              activeIndex={activeSlideIndex}
              onPrev={handlePrevSlide}
              onNext={handleNextSlide}
              onSpeak={handleSpeak}
            />
          )}
        </div>
      </main>
    </>
  );
}
