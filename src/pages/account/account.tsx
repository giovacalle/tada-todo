import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { IconLink } from '../../components/ui/links/icon-link';

const Account = () => {
  const submitLoginHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('works');
  };

  return (
    <div className="h-full flex flex-col justify-center gap-3">
      <BsPerson fontSize="72px" className="w-full" />
      <form onSubmit={submitLoginHandler} className="flex flex-col gap-3">
        <input type="text" name="email" placeholder="john@doe.com" />
        <input type="password" name="password" placeholder="password" />
        <button>login</button>
      </form>
      <IconLink to="/account/sign-up" icon={<p></p>} text="Sign up" />
      <IconLink to="/account/forgot-psw" icon={<p></p>} text="Forgot psw ?" />
    </div>
  );
};

export default Account;
