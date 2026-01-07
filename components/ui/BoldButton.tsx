'use client';

/**
 * BoldButton Component - Professional Spacing
 * Touch targets: sm=40px, md=52px, lg=56px (all above 44px minimum)
 */

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BoldButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function BoldButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: BoldButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-black uppercase tracking-wider transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-accent text-bg hover:bg-accent-hover hover:scale-110 active:scale-105 border-0',
    outline: 'border-3 border-accent text-accent hover:bg-accent hover:text-bg hover:scale-110 active:scale-105',
    ghost: 'text-text-secondary hover:text-accent hover:bg-surface hover:scale-105 active:scale-100 border-0',
  };

  // Professional spacing - SUPER GENEROUS
  const sizes = {
    sm: 'px-10 py-5 text-sm',   // 40x20px padding
    md: 'px-16 py-6 text-base', // 64x24px padding - WAY MORE SPACIOUS
    lg: 'px-24 py-8 text-xl',   // 96x32px padding - MASSIVE
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
