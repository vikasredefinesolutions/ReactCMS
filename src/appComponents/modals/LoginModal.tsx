/* eslint-disable no-unused-vars */
import { __length, __messages } from '@constants/form.config';
import {
  __Cookie,
  __Cookie_Expiry
} from '@constants/global.constant';
import { updateCartByNewUserId } from '@services/cart.service';
import { paths, queryParam } from 'constants/paths.constant';
import { _modals } from 'definations/product.type';
import { Form, Formik } from 'formik';
import { deleteCookie, extractCookies, setCookie } from 'helpers/common.helper';
import { useActions, useTypedSelector } from 'hooks';
import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import React, { useState } from 'react';
import { GetStoreCustomer, signInUser } from 'services/user.service';
import * as Yup from 'yup';
import Input from '../ui/switch/Input';

interface _Props {
  // eslint-disable-next-line no-unused-vars
  modalHandler: (val: null | _modals) => void;
}

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .email(__messages.email.validRequest)
    .max(__length.email.max)
    .min(__length.email.min)
    .required(__messages.email.required)
    .nullable(),
  password: Yup.string().required(__messages.password.required).nullable(),
});

const LoginModal: React.FC<_Props> = ({ modalHandler }) => {
  const router = useRouter();
  const { logInUser, setShowLoader, updateCustomer } = useActions();
  const [showErroMsg, setErrorMsg] = useState<null | string>(null);
  const { layout: storeLayout, id: storeId } = useTypedSelector(
    (state) => state.store,
  );

  const signInHandler = (enteredInputs: {
    userName: string;
    password: string;
    keepMeLoggedIn: boolean;
  }) => {
    setShowLoader(true);

    signInUser({
      userName: enteredInputs.userName,
      password: enteredInputs.password,
      storeId: storeId!,
    })
      .then((user) => {
        if (user.credentials === 'INVALID') {
          setErrorMsg(user.message);
        }
        if (user.credentials === 'VALID') {
          modalHandler(null);
          logInUser({
            id: +user.id,
          });
          setCookie(__Cookie.userId, user.id, __Cookie_Expiry.userId);

          GetStoreCustomer(+user.id).then((res) => {
            if (res === null) return;
            if (localStorage) {
              const tempCustomerId = extractCookies(__Cookie.tempCustomerId, 'browserCookie').tempCustomerId;

              if (tempCustomerId) {
                updateCartByNewUserId(~~tempCustomerId, res.id);
                deleteCookie(__Cookie.tempCustomerId);
              }
            }
            updateCustomer({ customer: res });
          });
        }
      })
      .finally(() => setShowLoader(false));
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
              initialValues={{
                userName: '',
                password: '',
                keepMeLoggedIn: false,
              }}
              onSubmit={signInHandler}
              validationSchema={validationSchema}
            >
              {({ values, handleChange, handleSubmit }) => {
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
                        {showErroMsg && (
                          <span className="mb-1 text-rose-500">
                            {showErroMsg}
                          </span>
                        )}
                        <div className="Login-Main">
                          <Input
                            label={''}
                            placeHolder={'Enter the email'}
                            name={'userName'}
                            value={values.userName}
                            onChange={(ev) => {
                              if (showErroMsg) {
                                setErrorMsg(null);
                              }
                              handleChange(ev);
                            }}
                            type={'text'}
                            required={false}
                            id={'email'}
                          />
                          <Input
                            id="password"
                            label={''}
                            placeHolder={'Enter the password'}
                            name={'password'}
                            value={values.password}
                            onChange={(ev) => {
                              if (showErroMsg) {
                                setErrorMsg(null);
                              }
                              handleChange(ev);
                            }}
                            type={'password'}
                            required={false}
                          />
                          <div className="mb-4">
                            <button
                              disabled={!!showErroMsg}
                              onClick={() => {
                                handleSubmit();
                              }}
                              className="btn btn-lg btn-secondary w-full !flex items-center justify-center"
                            >
                              SHOP NOW
                            </button>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="mb-3 flex items-center">
                              <input
                                checked={values.keepMeLoggedIn}
                                onChange={(ev) => {
                                  if (showErroMsg) {
                                    setErrorMsg(null);
                                  }
                                  handleChange(ev);
                                }}
                                type="checkbox"
                                id="'ChkKeepMeLogged'"
                                name="keepMeLoggedIn"
                              />
                              <label htmlFor="ChkKeepMeLogged" className='ml-2'>
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
                  userName: '',
                  password: '',
                  keepMeLoggedIn: false,
                }}
                validationSchema={validationSchema}
                onSubmit={signInHandler}
              >
                {({ values, handleChange }) => {
                  return (
                    <Form>
                      <div className="p-6">
                        <div className="mb-4 text-center">SIGN IN</div>
                        {showErroMsg && (
                          <span className="mb-1 text-rose-500">
                            {showErroMsg}
                          </span>
                        )}
                        <div className="Login-Main">
                          <Input
                            label={''}
                            placeHolder={'Enter the email'}
                            name={'userName'}
                            value={values.userName}
                            onChange={(ev) => {
                              if (showErroMsg) {
                                setErrorMsg(null);
                              }
                              handleChange(ev);
                            }}
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
                            onChange={(ev) => {
                              if (showErroMsg) {
                                setErrorMsg(null);
                              }
                              handleChange(ev);
                            }}
                            type={'password'}
                            required={false}
                          />

                          <div className="mb-4">
                            <button
                              type="submit"
                              disabled={!!showErroMsg}
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
                                onChange={(ev) => {
                                  if (showErroMsg) {
                                    setErrorMsg(null);
                                  }
                                  handleChange(ev);
                                }}
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
                    userName: '',
                    password: '',
                    keepMeLoggedIn: false,
                  }}
                  onSubmit={signInHandler}
                  validationSchema={validationSchema}
                >
                  {({ values, handleChange }) => {
                    return (
                      <Form>
                        {showErroMsg && (
                          <span className="mb-1 text-rose-500">
                            {showErroMsg}
                          </span>
                        )}
                        <div className="Login-Main">
                          <Input
                            label={''}
                            id="email-address0"
                            placeHolder={'Enter the email'}
                            name={'userName'}
                            value={values.userName}
                            onChange={(ev) => {
                              if (showErroMsg) {
                                setErrorMsg(null);
                              }
                              handleChange(ev);
                            }}
                            type={'email'}
                            required={false}
                          />
                          <Input
                            label={''}
                            placeHolder={'Enter the password'}
                            id="password"
                            name={'password'}
                            value={values.password}
                            onChange={(ev) => {
                              if (showErroMsg) {
                                setErrorMsg(null);
                              }
                              handleChange(ev);
                            }}
                            type={'password'}
                            required={false}
                          />
                          <div className="mb-4">
                            <button
                              disabled={!!showErroMsg}
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
                                onChange={(ev) => {
                                  if (showErroMsg) {
                                    setErrorMsg(null);
                                  }
                                  handleChange(ev);
                                }}
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
                              CREATE NEW ACCOUNT
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
