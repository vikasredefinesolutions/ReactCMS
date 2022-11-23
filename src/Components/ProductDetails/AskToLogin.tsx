import { _modals } from 'definations/product.type';
import { useTypedSelector } from 'hooks';
import React from 'react';

interface _props {
  // eslint-disable-next-line no-unused-vars
  modalHandler: (val: null | _modals) => void;
}

const AskToLogin: React.FC<_props> = ({ modalHandler }) => {
  const { id } = useTypedSelector((state) => state.user);
  return (
    <>
      {id === null && (
        <div className="mt-3 border border-gray-700 p-2 flex flex-wrap justify-between items-center gap-y-2">
          <div className="w-full md:w-1/2 text-lg font-bold text-gray-900">
            <span className="w-full block">LOGIN OR CREATE AN ACCOUNT</span>
            <span className="w-full block text-base font-normal">
              to see discounted pricing on this product.
            </span>
          </div>
          <div className="w-full md:w-1/2 text-left flex justify-end">
            <button
              onClick={() => modalHandler('login')}
              className="btn btn-secondary !flex !py-4 items-center justify-center w-full  uppercase"
            >
              Login / Create an account
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AskToLogin;
