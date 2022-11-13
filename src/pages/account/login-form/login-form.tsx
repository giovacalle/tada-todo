import { BsPerson } from 'react-icons/bs';

export const LoginForm = () => {
  return (
    <div className="h-full flex flex-col justify-center gap-3">
      <BsPerson fontSize="72px" className="w-full" />
      <form className="flex flex-col gap-3">
        <input type="text" name="email" placeholder="john@doe.com" />
        <input type="password" name="password" placeholder="password" />
        <button>login</button>
      </form>
      <button>forgot psw ?</button>
      <button>sign-up</button>
    </div>
  );
};
