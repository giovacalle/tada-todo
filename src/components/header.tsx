import { BiTask } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { IconLink } from './ui/links/icon-link';

export const Header = () => {
  return (
    <header className="w-screen">
      <div className="max-w-lg sm:w-full m-0 mx-auto flex flex-row items-center p-3 bg-primaryDarker rounded-b-xl">
        <h2 className="w-full m-0 text-2xl text-center">
          Ta daa, to doo <BiTask className="inline text-orange" />
        </h2>
        <IconLink to="/about" icon={<BsInfoCircle />} text="about" />
      </div>
    </header>
  );
};
