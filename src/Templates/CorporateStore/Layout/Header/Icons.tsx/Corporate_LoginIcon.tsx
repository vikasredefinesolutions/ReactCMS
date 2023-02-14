import { _modals } from '@type/product.type';
import ForgotModal from 'appComponents/modals/ForgotModal';
import LoginModal from 'appComponents/modals/LoginModal';
import { useTypedSelector } from 'hooks';
import React, { useState } from 'react';

interface _props {
  screen: string;
}

export const Corporate_LoginIcon: React.FC<_props> = ({ screen }) => {
  const [showModal, setShowModal] = useState<null | _modals>(null);
  const { id: loggedIn } = useTypedSelector((state) => state.user);

  const modalHandler = (arg: _modals | null) => {
    setShowModal(arg);
  };

  if (loggedIn) {
    return <></>;
  }

  return (
    <span className='text-white'>
      <button
        onClick={() => modalHandler('login')}
        className={`ml-1 ${
          screen === 'DESKTOP'
            ? 'text-white focus:text-white hover:text-white'
            : 'text-gray-800 focus:text-gray-800 hover:text-gray-400'
        }`}
      >
        Login/Register
      </button>
      {showModal === 'login' && <LoginModal modalHandler={modalHandler} />}
      {showModal === 'forgot' && <ForgotModal modalHandler={setShowModal} />}
    </span>
  );
};
