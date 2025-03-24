import React, { ReactNode } from 'react';

type ButtonSize = 'sm' | 'md' | 'lg';
type ColorTheme = 'primary' | 'secondary' | 'gray';

interface IconButtonProps {
  children: ReactNode;
  size?: ButtonSize;
  color?: ColorTheme;
  className?: string;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onMouseLeave?: () => void;
  onTouchStart?: () => void;
  onTouchEnd?: () => void;
  ariaLabel: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  size = 'md',
  color = 'gray',
  className = '',
  onMouseDown,
  onMouseUp,
  onMouseLeave,
  onTouchStart,
  onTouchEnd,
  ariaLabel
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };
  
  const colorClasses = {
    primary: 'text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]',
    secondary: 'text-[var(--color-secondary)] hover:text-[var(--color-secondary-dark)]',
    gray: 'text-gray-500 hover:text-[var(--color-primary)]'
  };

  return (
    <button
      type="button"
      className={`absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 outline-none border-none bg-transparent ${className}`}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label={ariaLabel}
    >
      {React.isValidElement(children) 
        ? React.cloneElement(children as React.ReactElement<any>, { 
            className: `${sizeClasses[size]} ${colorClasses[color]}` 
          })
        : children}
    </button>
  );
};

export default IconButton; 