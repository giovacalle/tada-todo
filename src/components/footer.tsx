import { useMatches } from '@tanstack/react-location';

import { IconLink } from './ui/links/icon-link';
import { BiHomeAlt } from 'react-icons/bi';
import { MdAddTask } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

export const Footer = () => {
  const pathname = useMatches()[1]?.pathname;

  return (
    <footer className="w-screen">
      <div className="max-w-lg sm:w-full m-0 mx-auto flex flex-row justify-around items-center p-3 bg-primaryDarker rounded-t-xl">
        <IconLink
          to="/"
          text="home"
          icon={<BiHomeAlt />}
          active={pathname == '/'}
        />
        <IconLink
          to="/new-todo"
          icon={<MdAddTask />}
          text="new todo"
          active={pathname == '/new-todo'}
        />
        <IconLink
          to="/account"
          icon={<BsPerson />}
          text="account"
          disabled={true}>
          <div className="inline-flex absolute -top-2 right-3 justify-center items-center w-8 h-8 text-sm font-bold text-white bg-red-500 rounded-full">
            soon
          </div>
        </IconLink>
      </div>
    </footer>
  );
};
