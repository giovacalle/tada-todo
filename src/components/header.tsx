import { BiTask } from 'react-icons/bi';
import { CiCircleInfo } from 'react-icons/ci';

import { IconButton } from './ui/buttons/icon-button';

export const Header = () => {
  return (
    <header className="w-full flex flex-row items-center p-3">
      <h2 className="w-full m-0 text-2xl text-center">
        Ta daa, to doo <BiTask className="inline" />
      </h2>
      <IconButton icon={<CiCircleInfo />} text="about" />
    </header>
  );
};
