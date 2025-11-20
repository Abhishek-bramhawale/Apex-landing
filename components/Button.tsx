import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}) => {
  const baseStyles = 'font-bold rounded-full transition-all duration-200 inline-flex items-center justify-center uppercase tracking-wide';
  
  const variantStyles = {
    primary: 'bg-white text-black hover:bg-gray-200 shadow-lg',
    secondary: 'bg-black text-white hover:bg-gray-900 border-2 border-white',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-black',
  };
  
  const sizeStyles = {
    sm: 'px-6 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

