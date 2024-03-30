import React from 'react';
import { twMerge } from 'tailwind-merge';

const variants = {
  primary: 'bg-primary-500/10 shadow-primary-500/80',
  secondary: 'bg-secondary-500/10 shadow-secondary-500/80',
};

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof variants;
}

const Card: React.FC<CardProps> = ({
  className,
  children,
  variant = 'primary',
  ...rest
}) => {
  return (
    <div
      className={twMerge(
        ['bg-white', 'shadow-lg', 'rounded-lg', 'p-4'],
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
