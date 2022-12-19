import ForgotModal from 'appComponents/modals/ForgotModal';
import LoginModal from 'appComponents/modals/LoginModal';
import { _modals } from 'definations/product.type';
import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React, { useState } from 'react';

const LoginIcon: React.FC = () => {
  const [showModal, setShowModal] = useState<null | _modals>(null);
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const { id: isUserLoggedIn } = useTypedSelector((state) => state.user);

  const toggleLoginModal = () => {
    if (showModal) {
      setShowModal(null);
      return;
    }
    setShowModal('login');
  };

  const showLoginButton = (): boolean => {
    let show = true;

    if (isUserLoggedIn) {
      show = false;
    }

    return show;
  };

  if (storeLayout === _Store.type3) {
    return (
      <>
        {showLoginButton() && (
          <div className="flex relative" x-data="{ open : false }">
            <button
              onClick={toggleLoginModal}
              className="text-gray-600 hover:text-primary flex items-center gap-1"
            >
              <span className="hidden">John</span>
              <svg
                className="w-6 h-6"
                x-description="Heroicon name: outline/user"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </button>
            {showModal === 'login' && (
              <LoginModal modalHandler={setShowModal} />
            )}
            {showModal === 'forgot' && (
              <ForgotModal modalHandler={setShowModal} />
            )}
          </div>
        )}
      </>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <>
        {showLoginButton() && (
          <div className="flex relative" x-data="{ open : false }">
            <button
              onClick={toggleLoginModal}
              className="text-gray-600 hover:text-[#CDDE00] flex items-center gap-1"
              data-modal-toggle="LoginModal"
            >
              <span className="hidden">John</span>
              <svg
                className="w-6 h-6"
                x-description="Heroicon name: outline/user"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </button>
            {showModal === 'login' && (
              <LoginModal modalHandler={setShowModal} />
            )}
            {showModal === 'forgot' && (
              <ForgotModal modalHandler={setShowModal} />
            )}
          </div>
        )}
      </>
    );
  }

  if (storeLayout === _Store.type4) {
    return (
      <>
        {showLoginButton() && (
          <div className="flex">
            <button
              onClick={toggleLoginModal}
              className="lg:mx-2 py-2 text-white hover:text-white flex items-center gap-1"
            >
              <span className="lg:inline-block">Login</span>
            </button>
            {showModal === 'login' && (
              <LoginModal modalHandler={setShowModal} />
            )}
            {showModal === 'forgot' && (
              <ForgotModal modalHandler={setShowModal} />
            )}
          </div>
        )}
      </>
    );
  }

  if (storeLayout === _Store.type1) {
    return (
      <>
        {showLoginButton() && (
          <div className="flex">
            <button
              className="text-primary hover:text-gray-500 flex items-center gap-1"
              onClick={toggleLoginModal}
            >
              <span className="hidden lg:inline-block">login</span>
              <svg
                className="w-6 h-6"
                x-description="Heroicon name: outline/user"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </button>
            {showModal === 'login' && (
              <LoginModal modalHandler={setShowModal} />
            )}
            {showModal === 'forgot' && (
              <ForgotModal modalHandler={setShowModal} />
            )}
          </div>
        )}
      </>
    );
  }
  return <></>;
};

export default LoginIcon;
