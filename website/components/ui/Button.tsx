'use client';

import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  href,
  target,
  rel,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian disabled:opacity-40 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-teal text-obsidian hover:bg-teal-hover shadow-accent hover:shadow-accent-lg rounded',
    secondary:
      'bg-transparent text-snow border border-border hover:border-border-hover hover:bg-carbon rounded',
    ghost: 'bg-transparent text-muted hover:text-snow rounded',
  };

  const sizes = {
    sm: 'text-body-sm px-4 py-2 h-9',
    md: 'text-body px-6 py-3 h-11',
    lg: 'text-body-lg px-8 py-4 h-14',
  };

  const classes = clsx(base, variants[variant], sizes[size], className);

  if (Tag === 'a' && href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
