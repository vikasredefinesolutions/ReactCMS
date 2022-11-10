/* eslint-disable no-unused-vars */
import { Form, Formik } from 'formik';
import React from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { paths, queryParam } from 'constants/paths.constant';
import { _Store } from 'constants/store.constant';
import { _modals } from 'definations/product.type';
import { useActions, useTypedSelector } from 'hooks';
import { signInUser } from 'services/user.service';
import Input from '../ui/switch/Input';

interface _Props {
  // eslint-disable-next-line no-unused-vars
  modalHandler: (val: null | _modals) => void;
}

const LoginModal: React.FC<_Props> = ({ modalHandler }) => {
  const router = useRouter();
  const { updateUserDetails } = useActions();

  const { layout: storeLayout, id: storeId } = useTypedSelector(
    (state) => state.store,
  );
  const validationSchema = {
    email: Yup.string().email(),
    // .required(`This field can't be left empty`)
    password: Yup.string(),
    // .required(`This field can't be left empty`)
  };

  const signInHandler = (enteredInputs: {
    email: string;
    password: string;
    keepMeLoggedIn: boolean;
  }) => {
    signInUser({ ...enteredInputs, storeId: storeId! })
      .then((userId) => {
        modalHandler(null);
        updateUserDetails({
          id: userId,
        });
      })
      .catch(() => 'Handle Error')
      .finally(() => 'Stop loader');
  };

  if (storeLayout === _Store.type3) {
    return (
      <div
        id="LoginModal"
        className="overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal h-full inset-0"
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative px-4 w-full max-w-2xl h-fullborder border-neutral-200 inline-block h-auto">
            <Formik
              initialValues={{ email: '', password: '', keepMeLoggedIn: false }}
              onSubmit={signInHandler}
              // validationSchema={validationSchema}
            >
              {({ values, handleChange }) => {
                return (
                  <Form>
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-screen overflow-y-auto">
                      <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600 sticky top-0 left-0 bg-white">
                        <div className="text-xl font-semibold text-gray-900 lg:text-2xl login-top-title dark:text-white">
                          Sign In
                        </div>
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
                      <div className="p-6">
                        <div className="mb-4 text-center">SIGN IN</div>
                        <div className="Login-Main">
                          <Input
                            label={''}
                            placeHolder={'Enter the email'}
                            name={'email'}
                            value={values.email}
                            onChange={handleChange}
                            type={'email'}
                            required={false}
                            id={'email'}
                          />
                          <Input
                            id="password"
                            label={''}
                            placeHolder={'Enter the password'}
                            name={'password'}
                            value={values.password}
                            onChange={handleChange}
                            type={'password'}
                            required={false}
                          />
                          <div className="mb-4">
                            <button
                              type={'submit'}
                              className="btn btn-lg btn-secondary w-full !flex items-center justify-center"
                            >
                              SHOP NOW
                            </button>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="mb-3">
                              <input
                                checked={values.keepMeLoggedIn}
                                onChange={handleChange}
                                type="checkbox"
                                id="'ChkKeepMeLogged'"
                                name="keepMeLoggedIn"
                              />
                              <label htmlFor="ChkKeepMeLogged">
                                Keep me logged
                              </label>
                            </div>
                            <div className="mb-3">
                              <button
                                onClick={() => modalHandler('forgot')}
                                className="text-anchor"
                              >
                                Forgot Password?
                              </button>
                            </div>
                          </div>
                          <div className="">
                            <button
                              onClick={() => {
                                modalHandler(null);
                                router.push(paths.SIGN_UP);
                              }}
                              className="btn btn-lg btn-secondary w-full text-center"
                            >
                              CREATE NEW CUSTOMER ACCOUNT
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* <!-- <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button data-modal-toggle="LoginModal" type="button" className="btn bg-white border-neutral-200 text-gray-500 hover:text-gray-700">Cancel</button>
                </div> --> */}
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <div
        id="LoginModal"
        className="overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal h-full inset-0"
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative px-4 w-full max-w-2xl h-fullborder border-neutral-200 inline-block h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-screen overflow-y-auto">
              <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600 sticky top-0 left-0 bg-white">
                <div className="text-xl font-semibold text-gray-900 lg:text-2xl login-top-title dark:text-white">
                  Sign In
                </div>
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
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                  keepMeLoggedIn: false,
                }}
                onSubmit={signInHandler}
                // validationSchema={validationSchema}
              >
                {({ values, handleChange }) => {
                  return (
                    <Form>
                      <div className="p-6">
                        <div className="mb-4 text-center">SIGN IN</div>
                        <div className="Login-Main">
                          <Input
                            label={''}
                            placeHolder={'Enter the email'}
                            name={'email'}
                            value={values.email}
                            onChange={handleChange}
                            type={'email'}
                            required={false}
                            id={'email'}
                          />
                          <Input
                            id="password"
                            label={''}
                            placeHolder={'Enter the password'}
                            name={'password'}
                            value={values.password}
                            onChange={handleChange}
                            type={'password'}
                            required={false}
                          />

                          <div className="mb-4">
                            <button
                              type="submit"
                              className="btn btn-lg btn-secondary w-full !flex items-center justify-center"
                              id=""
                            >
                              SHOP NOW
                            </button>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="mb-3">
                              <input
                                checked={values.keepMeLoggedIn}
                                onChange={handleChange}
                                type="checkbox"
                                id="'ChkKeepMeLogged'"
                                name="keepMeLoggedIn"
                              />
                              <label htmlFor="ChkKeepMeLogged">
                                Keep me logged
                              </label>
                            </div>
                            <div className="mb-3">
                              <button
                                onClick={() => modalHandler('forgot')}
                                className="text-anchor"
                              >
                                Forgot Password?
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="">Register as a</div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => {
                                  modalHandler(null);
                                  router.push(
                                    `${paths.SIGN_UP}?_t=${queryParam.INDIVIDUAL}`,
                                  );
                                }}
                                className="btn btn-secondary w-full !flex items-center justify-center"
                              >
                                INDIVIDUAL
                              </button>
                              <button
                                onClick={() => {
                                  modalHandler(null);
                                  router.push(
                                    `${paths.SIGN_UP}?_t=${queryParam.TEAM}`,
                                  );
                                }}
                                className="btn btn-secondary w-full !flex items-center justify-center"
                              >
                                TEAMS
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>

              {/* <!-- <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                        <button data-modal-toggle="LoginModal" type="button" className="btn bg-white border-neutral-200 text-gray-500 hover:text-gray-700">Cancel</button>
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
        id="LoginModal"
        className="overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal h-full inset-0"
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative px-4 w-full max-w-2xl h-fullborder border-neutral-200 inline-block h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-screen overflow-y-auto">
              <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600 sticky top-0 left-0 bg-white">
                <div className="text-xl font-semibold text-gray-900 lg:text-2xl login-top-title dark:text-white">
                  Sign In
                </div>
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
              <div className="p-6">
                <div className="mb-4 text-center">SIGN IN</div>
                <Formik
                  initialValues={{
                    email: '',
                    password: '',
                    keepMeLoggedIn: false,
                  }}
                  onSubmit={signInHandler}
                  // validationSchema={validationSchema}
                >
                  {({ values, handleChange }) => {
                    return (
                      <Form>
                        <div className="Login-Main">
                          <Input
                            label={''}
                            id="email-address0"
                            placeHolder={'Enter the email'}
                            name={'email'}
                            value={values.email}
                            onChange={handleChange}
                            type={'email'}
                            required={false}
                          />
                          <Input
                            label={''}
                            placeHolder={'Enter the password'}
                            id="password"
                            name={'password'}
                            value={values.password}
                            onChange={handleChange}
                            type={'password'}
                            required={false}
                          />
                          <div className="mb-4">
                            <button
                              className="btn btn-lg btn-secondary w-full !flex items-center justify-center"
                              type="submit"
                            >
                              SHOP NOW
                            </button>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="mb-3">
                              <input
                                checked={values.keepMeLoggedIn}
                                onChange={handleChange}
                                type="checkbox"
                                id="'ChkKeepMeLogged'"
                                name="keepMeLoggedIn"
                              />
                              <label htmlFor="ChkKeepMeLogged">
                                Keep me logged
                              </label>
                            </div>
                            <div className="mb-3">
                              <button
                                onClick={() => modalHandler('forgot')}
                                className="text-anchor"
                              >
                                Forgot Password?
                              </button>
                            </div>
                          </div>
                          <div className="mb-4">
                            <button
                              onClick={() => {
                                modalHandler(null);
                                router.push(paths.SIGN_UP);
                              }}
                              className="btn btn-lg btn-secondary w-full !flex items-center justify-center"
                            >
                              CREATE NEW ACOOUNT
                            </button>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
