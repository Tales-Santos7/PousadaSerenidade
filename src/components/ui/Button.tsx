import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-full transition duration-200 ease-in-out";
  const variants = {
    primary: "bg-yellow-500 text-white hover:bg-yellow-400",
    secondary: "bg-white text-yellow-500 border-2 border-yellow-500 hover:bg-yellow-50"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}