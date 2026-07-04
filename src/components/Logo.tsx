import { FC } from 'react';

interface LogoProps {
  theme?: 'light' | 'dark';
  iconOnly?: boolean;
  className?: string;
}

export const Logo: FC<LogoProps> = ({ theme = 'light', iconOnly = false, className = '' }) => {
  // theme === 'light' is used on dark backgrounds (white text)
  // theme === 'dark' is used on light backgrounds (dark slate text)
  const isDarkBg = theme === 'light';

  const navyColor = isDarkBg ? 'text-white' : 'text-slate-900';
  const mintColor = '#83c5be'; // Light sage teal

  return (
    <div className={`flex flex-col select-none ${className}`}>
      <span className={`font-display font-extrabold text-2xl sm:text-3xl tracking-tight flex items-baseline leading-none ${navyColor}`}>
        Equ
        <span style={{ color: mintColor }}>i</span>
        py
      </span>
      {!iconOnly && (
        <span className="block text-[9px] sm:text-[10px] font-bold mt-1.5 tracking-wide" style={{ color: mintColor }}>
          Más servicios, más ingresos. Cero inversión.
        </span>
      )}
    </div>
  );
};

export default Logo;
