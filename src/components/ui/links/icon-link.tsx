import { Link } from '@tanstack/react-location';
import React, { ReactNode } from 'react';

export const IconLink: React.FC<{
  to: string;
  icon: ReactNode;
  text?: string;
}> = ({ to, icon, text }) => {
  return (
    <Link to={to} className="flex flex-col items-center gap-0">
      {icon}
      <span className="text-md">{text}</span>
    </Link>
  );
};
