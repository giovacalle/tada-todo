import { IconLink } from './ui/links/icon-link';
import { BiHomeAlt } from 'react-icons/bi';
import { MdAddTask } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer className="w-screen">
      <div className="max-w-lg sm:w-full m-0 mx-auto flex flex-row justify-around items-center p-3 bg-primaryDarker rounded-t-xl">
        <IconLink to="/" icon={<BiHomeAlt />} text="home" />
        <IconLink to="/new-todo" icon={<MdAddTask />} text="new todo" />
        <IconLink to="/account" icon={<BsPerson />} text="account" />
      </div>
    </footer>
  );
};
