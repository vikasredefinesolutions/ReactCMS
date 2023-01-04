import { _modals } from '@type/product.type';
import ForgotModal from 'appComponents/modals/ForgotModal';
import LoginModal from 'appComponents/modals/LoginModal';
import React, { useState } from 'react';

export const Corporate_LoginIcon: React.FC = () => {
  const [showModal, setShowModal] = useState<null | _modals>(null);

  const modalHandler = (arg: _modals | null) => {
    setShowModal(arg);
  };

  return (
    <span className="text-white">
      <button
        onClick={() => modalHandler('login')}
        className="ml-1 text-white hover:text-white focus:text-white"
      >
        Login/Register
      </button>
      {showModal === 'login' && <LoginModal modalHandler={modalHandler} />}
      {showModal === 'forgot' && <ForgotModal modalHandler={setShowModal} />}
    </span>
  );
};
