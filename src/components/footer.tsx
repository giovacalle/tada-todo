import { IconButton } from './ui/buttons/icon-button';
import { BiHomeAlt } from 'react-icons/bi';
import { MdAddTask } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer className="w-full flex flex-row justify-around items-center p-3">
      <IconButton icon={<BiHomeAlt />} text="home" />
      <IconButton icon={<MdAddTask />} text="new todo" />
      <IconButton icon={<BsPerson />} text="account" />
    </footer>
  );
};
