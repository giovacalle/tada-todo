import { Link, useMatch, useMatches } from '@tanstack/react-location';
import { PropsWithChildren, ReactNode } from 'react';

interface IconLinkProps {
  to: string;
  icon: ReactNode;
  text?: string;
  disabled?: boolean;
  active?: boolean;
}

export const IconLink = ({
  to,
  icon,
  text,
  disabled = false,
  active = false,
  children
}: PropsWithChildren<IconLinkProps>) => {
  const cssCalculated = [];

  if (disabled) cssCalculated.push('opacity-40');
  if (active) cssCalculated.push('bg-secondary');

  return (
    <Link
      to={to}
      className={`relative p-1 flex-auto flex flex-col 
        items-center gap-0 rounded-xl
        ${cssCalculated.join(' ')} `}
      disabled={disabled}>
      {icon}
      <span className="text-md">{text}</span>
      {children}
    </Link>
  );
};
