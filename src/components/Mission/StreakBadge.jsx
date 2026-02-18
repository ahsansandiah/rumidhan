export default function StreakBadge({ streakDays }) {
  if (streakDays < 1) return null;

  const getBadgeColor = () => {
    if (streakDays >= 30) return 'from-yellow-400 to-amber-500';
    if (streakDays >= 21) return 'from-purple-400 to-purple-600';
    if (streakDays >= 14) return 'from-blue-400 to-blue-600';
    if (streakDays >= 7) return 'from-green-400 to-green-600';
    if (streakDays >= 3) return 'from-orange-400 to-orange-600';
    return 'from-gray-400 to-gray-600';
  };

  const getBadgeEmoji = () => {
    if (streakDays >= 30) return '🏆';
    if (streakDays >= 21) return '💎';
    if (streakDays >= 14) return '🌟';
    if (streakDays >= 7) return '🔥';
    if (streakDays >= 3) return '✨';
    return '🌱';
  };

  return (
    <div className={`
      flex items-center gap-1.5
      bg-gradient-to-r ${getBadgeColor()}
      text-white
      px-3 py-1.5
      rounded-full
      shadow-md
      text-sm font-bold
    `}>
      <span>{getBadgeEmoji()}</span>
      <span>{streakDays}</span>
      <span className="text-xs opacity-80">hari</span>
    </div>
  );
}
