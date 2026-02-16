import { useState } from 'react';
import { useAudio } from '../../hooks/useAudio';

export default function AudioButton({ text, className = '' }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const { speak } = useAudio();

  const handleClick = () => {
    setIsPlaying(true);
    speak(text);
    // Reset after approximate speech duration
    setTimeout(() => setIsPlaying(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        w-16 h-16 rounded-full
        bg-accent hover:bg-yellow-400
        flex items-center justify-center
        shadow-lg hover:shadow-xl
        transition-all duration-200
        btn-press
        ${isPlaying ? 'animate-pulse scale-110' : ''}
        ${className}
      `}
      aria-label="Putar suara"
    >
      <span className="text-3xl">
        {isPlaying ? '🔊' : '🔈'}
      </span>
    </button>
  );
}
