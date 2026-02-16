export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}) {
  const baseStyles = 'font-bold rounded-2xl transition-all duration-200 btn-press no-select inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-primary hover:bg-green-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary hover:bg-blue-500 text-white shadow-lg hover:shadow-xl',
    accent: 'bg-accent hover:bg-yellow-500 text-gray-800 shadow-lg hover:shadow-xl',
    outline: 'bg-white hover:bg-gray-100 text-primary border-2 border-primary',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm min-h-[40px]',
    md: 'px-6 py-3 text-lg min-h-[52px]',
    lg: 'px-8 py-4 text-xl min-h-[64px]',
    xl: 'px-10 py-5 text-2xl min-h-[76px]',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
