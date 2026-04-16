import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import s from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: 'filled' | 'outlined';
  icon?: ReactNode;
}

export const Button = ({
  children,
  variant = 'filled',
  icon,
  className,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(s.btn, s[variant], className)}
      disabled={disabled}
      {...props}
    >
      {icon && <span className={s.iconWrapper}>{icon}</span>}
      {children}
    </button>
  );
};
