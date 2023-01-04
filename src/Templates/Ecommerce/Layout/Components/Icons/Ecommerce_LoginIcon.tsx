import ForgotModal from 'appComponents/modals/ForgotModal';
import LoginModal from 'appComponents/modals/LoginModal';
import { _modals } from 'definations/product.type';
import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React, { useState } from 'react';

const LoginIcon: React.FC = () => {
  const [showModal, setShowModal] = useState<null | _modals>(null);
  const storeLayout = useTypedSelector((state) => state.store.layout);

  const toggleLoginModal = () => {
    if (showModal) {
      setShowModal(null);
      return;
    }
    setShowModal('login');
  };

  if (storeLayout === _Store.type3) {
    return (
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
        {/* <div
          className="absolute right-0 top-full border-2 border-black bg-white z-40 w-52"
          style={{ display: 'none' }}
        >
          <ul className="">
            <li className="border-t border-t-gray-300">
              <Link href={} className="flex p-2 gap-1">
                <span className="material-icons-outlined">shopping_cart</span>{' '}
                <span className="">Order</span>
              </Link>
            </li>
            <li className="border-t border-t-gray-300">
              <a href="customer-custom-logo.html" className="flex p-2 gap-1">
                <span className="material-icons-outlined">design_services</span>{' '}
                <span className="">Manage Logo</span>
              </a>
            </li>
            <li className="border-t border-t-gray-300">
              <a href="my-account.html" className="flex p-2 gap-1">
                <span className="material-icons-outlined">construction</span>{' '}
                <span className="">Account Settings</span>
              </a>
            </li> */}
        {/* <!-- <li className="border-t border-t-gray-300"><a href="/" className="flex p-2 gap-1"><span className="material-icons-outlined">help_outline</span> <span className="">Help</span></a></li> --> */}
        {/* <li className="border-t-2 border-t-gray-300">
              <a href="/" className="flex p-2 gap-1">
                <span className="material-icons-outlined">logout</span>{' '}
                <span className="">Sign Out</span>
              </a>
            </li>
          </ul>
        </div> */}
        {showModal === 'login' && <LoginModal modalHandler={setShowModal} />}
        {showModal === 'forgot' && <ForgotModal modalHandler={setShowModal} />}
      </div>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
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

        {/* --------------------------------MENU---------------------------------------- */}
        {/* <div className="absolute right-0 top-full border-2 border-black bg-white z-40 w-40">
        <ul className="">
          <li className="border-t border-t-gray-300">
            <a
              href="my-orders.html"
              className="flex p-2 gap-1"
            >
              <span className="material-icons-outlined">
                shopping_cart
              </span>{' '}
              <span className="">Order</span>
            </a>
          </li>
          <li className="border-t border-t-gray-300">
            <a
              href="my-account.html"
              className="flex p-2 gap-1"
            >
              <span className="material-icons-outlined">
                construction
              </span>{' '}
              <span className="">Account Settings</span>
            </a>
          </li>
          <li className="border-t border-t-gray-300">
            <a href="/" className="flex p-2 gap-1">
              <span className="material-icons-outlined">
                help_outline
              </span>{' '}
              <span className="">Help</span>
            </a>
          </li>
          <li className="border-t-2 border-t-gray-300">
            <a href="/" className="flex p-2 gap-1">
              <span className="material-icons-outlined">
                logout
              </span>{' '}
              <span className="">Sign Out</span>
            </a>
          </li>
        </ul>
      </div> */}
        {showModal === 'login' && <LoginModal modalHandler={setShowModal} />}
        {showModal === 'forgot' && <ForgotModal modalHandler={setShowModal} />}
      </div>
    );
  }

  if (storeLayout === _Store.type4) {
    return (
      <div className="flex">
        <button
          onClick={toggleLoginModal}
          className="lg:mx-2 py-2 text-white hover:text-white flex items-center gap-1"
          data-modal-toggle="LoginModal"
        >
          <span className="lg:hidden material-icons-outlined">person</span>
          <span className="hidden lg:inline-block">Login</span>
        </button>
        {showModal === 'login' && <LoginModal modalHandler={setShowModal} />}
        {showModal === 'forgot' && <ForgotModal modalHandler={setShowModal} />}
      </div>
    );
  }

  if (storeLayout === _Store.type1) {
    return (
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
        {showModal === 'login' && <LoginModal modalHandler={setShowModal} />}
        {showModal === 'forgot' && <ForgotModal modalHandler={setShowModal} />}
      </div>
    );
  }
  return <></>;
};

export default LoginIcon;
