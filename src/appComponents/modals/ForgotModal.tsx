import { _modals } from 'definations/product.type';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { _Store } from 'page.config';
import React from 'react';

interface _Props {
  // eslint-disable-next-line no-unused-vars
  modalHandler: (val: null | _modals) => void;
}

const ForgotModal: React.FC<_Props> = ({ modalHandler }) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  // const show = useTypedSelector((state) => state.store.display.footer);

  if (storeLayout == _Store.type3) {
    return (
      <div
        id="Login1Modal"
        className="overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal h-full inset-0"
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative px-4 w-full max-w-2xl h-fullborder border-neutral-200 inline-block h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-screen overflow-y-auto">
              <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600 sticky top-0 left-0 bg-white">
                <div className="text-xl font-semibold text-gray-900 lg:text-2xl login-top-title dark:text-white">
                  Forget Password
                </div>
                <div className="flex items-center gap-x-2">
                  <button
                    onClick={() => modalHandler('login')}
                    className="text-anchor"
                  >
                    {' '}
                    &lt; Back
                  </button>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => modalHandler(null)}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 text-center">Forget Password</div>
                <div className="Login-Main">
                  <div className="mb-2">
                    <input
                      type="email"
                      name=""
                      placeholder="Enter Your Email Address"
                      className="form-input"
                    />
                  </div>

                  <div className="mb-4">
                    <button className="btn btn-lg btn-secondary w-full !flex items-center justify-center">
                      FORGET PASSWORD
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button data-modal-toggle="Login1Modal" type="button" className="btn bg-white border-neutral-200 text-gray-500 hover:text-gray-700">Cancel</button>
                </div> --> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <div
        id="Login1Modal"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal h-full inset-0"
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative px-4 w-full max-w-2xl h-fullborder border-neutral-200 inline-block h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-screen overflow-y-auto">
              <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600 sticky top-0 left-0 bg-white">
                <div className="text-xl font-semibold text-gray-900 lg:text-2xl login-top-title dark:text-white">
                  Forget Password
                </div>
                <div className="flex items-center gap-x-2">
                  <Link
                    href="/"
                    // data-modal-toggle="LoginModal"
                    className="text-anchor"
                  >
                    &lt; Back
                  </Link>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="Login1Modal"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 text-center">Forget Password</div>
                <div className="Login-Main">
                  <div className="mb-2">
                    <input
                      type="email"
                      id="email-address0"
                      name="email-address0"
                      // autocomplete="email"
                      placeholder="Enter Your Email Address"
                      className="form-input"
                    />
                  </div>

                  <div className="mb-4">
                    <Link
                      href="/"
                      className="btn btn-lg btn-secondary w-full !flex items-center justify-center"
                    >
                      FORGET PASSWORD
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!-- <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                      <button data-modal-toggle="Login1Modal" type="button" className="btn bg-white border-neutral-200 text-gray-500 hover:text-gray-700">Cancel</button>
                  </div> --> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        id="Login1Modal"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal h-full inset-0"
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative px-4 w-full max-w-2xl h-fullborder border-neutral-200 inline-block h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-screen overflow-y-auto">
              <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600 sticky top-0 left-0 bg-white">
                <div className="text-xl font-semibold text-gray-900 lg:text-2xl login-top-title dark:text-white">
                  Forget Password
                </div>
                <div className="flex items-center gap-x-2">
                  <button
                    onClick={() => modalHandler('login')}
                    className="text-anchor"
                  >
                    &lt; Back
                  </button>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => modalHandler(null)}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 text-center">Forget Password</div>
                <div className="Login-Main">
                  <div className="mb-2">
                    <input
                      type="email"
                      id="email-address0"
                      name="email-address0"
                      placeholder="Enter Your Email Address"
                      className="form-input"
                    />
                  </div>

                  <div className="mb-4">
                    <Link
                      href="/"
                      className="btn btn-lg btn-secondary w-full !flex items-center justify-center"
                    >
                      FORGET PASSWORD
                    </Link>
                  </div>
                </div>
              </div>
              {/* <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="Login1Modal" type="button" className="btn bg-white border-neutral-200 text-gray-500 hover:text-gray-700">Cancel</button>
            </div>  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotModal;
