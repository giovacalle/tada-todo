import React, { ReactNode } from 'react';

export const IconButton: React.FC<{
  icon: ReactNode;
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ icon, text, onClick }) => {
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-0">
      {icon}
      <span className="text-md">{text}</span>
    </button>
  );
};
