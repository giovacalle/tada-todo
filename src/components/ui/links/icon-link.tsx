import { Link } from '@tanstack/react-location';
import { PropsWithChildren, ReactNode } from 'react';

interface IconLinkProps {
  to: string;
  icon: ReactNode;
  text?: string;
  disabled?: boolean;
}

export const IconLink = ({
  to,
  icon,
  text,
  disabled = false,
  children
}: PropsWithChildren<IconLinkProps>) => {
  return (
    <Link
      to={to}
      className={`relative flex flex-col items-center gap-0  ${
        disabled ? 'opacity-40' : ''
      }`}
      disabled={disabled}>
      {icon}
      <span className="text-md">{text}</span>
      {children}
    </Link>
  );
};
