import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

const variants = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg active:scale-[0.98]',
  secondary:
    'bg-primary-50 text-primary hover:bg-primary-100 active:scale-[0.98]',
  outline:
    'border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-[0.98]',
  ghost:
    'text-text-secondary hover:text-text-primary hover:bg-gray-100 active:scale-[0.98]',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-body-sm rounded-xl',
  lg: 'px-8 py-4 text-body rounded-xl',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
