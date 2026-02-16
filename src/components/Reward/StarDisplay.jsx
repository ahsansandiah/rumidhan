export default function StarDisplay({ count = 0, size = 'md' }) {
  const sizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  return (
    <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 px-4 py-2 rounded-full shadow-inner">
      <span className={`${sizes[size]} sparkle`}>⭐</span>
      <span className={`font-bold text-amber-600 ${size === 'lg' ? 'text-3xl' : 'text-xl'}`}>
        {count}
      </span>
    </div>
  );
}
