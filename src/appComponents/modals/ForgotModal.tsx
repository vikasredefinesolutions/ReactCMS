import { ForgetCustomerPassword } from '@services/customerUser.service';
import { _modals } from 'definations/product.type';
import { Form, Formik } from 'formik';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { _Store } from 'page.config';
import React, { useState } from 'react';

interface _Props {
  // eslint-disable-next-line no-unused-vars
  modalHandler: (val: null | _modals) => void;
}

const ForgotModal: React.FC<_Props> = ({ modalHandler }) => {
  const { layout: storeLayout, id: storeId } = useTypedSelector((state) => state.store);
  const [error, setError] = useState(false)
  const [finalMessage, setFinalMessage] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  // const show = useTypedSelector((state) => state.store.display.footer);
  const forgotPassword = async (enteredInputs: { email: string }) => {
    try {
      const res = await ForgetCustomerPassword({ email: enteredInputs.email, storeId: storeId })
      if (res?.data.issend) {
        setFinalMessage(true)
        setUserEmail(enteredInputs.email)
      } else {
        setError(true);
        setFinalMessage(false)
      }

    } catch (error) {
      console.log(error);
    }
  }

  if (storeLayout == _Store.type3 || _Store.type2) {
    return (

      !finalMessage ?
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
                  <Formik initialValues={{ email: '' }} onSubmit={forgotPassword}>
                    {({ values, handleChange }) => {
                      return (
                        < Form className="Login-Main type3" >
                          <div className="mb-2">
                            <input
                              type="text"
                              name="email"
                              onChange={handleChange}
                              value={values.email}
                              placeholder="Enter your email address"
                              className="form-input w-full"
                            />
                          </div>
                          <div className="mb-2">
                            <button
                              type="submit"
                              className="w-full btn btn-secondary rounded-md"
                            >
                              Submit
                            </button>
                          </div>
                          <div className="mb-2">
                            {
                              error ? <p className='error'>Maybe Email Not Correct</p> : ''
                            }
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
                {/* <!-- <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                      <button data-modal-toggle="Login1Modal" type="button" className="btn bg-white border-neutral-200 text-gray-500 hover:text-gray-700">Cancel</button>
                  </div> --> */}
              </div>
            </div>
          </div>
        </div>
        :
        <div id="Login1Modal" className="overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal h-full inset-0" >
          <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="relative px-4 w-full max-w-2xl h-fullborder border-neutral-200 inline-block h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-screen overflow-y-auto">
                <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600 sticky top-0 left-0 bg-white">
                  <div className="text-xl font-semibold text-gray-900 lg:text-2xl login-top-title dark:text-white">
                    Forget Password
                  </div>
                  <div className="flex items-center gap-x-2">
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => { modalHandler(null); setFinalMessage(false) }}
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
                <div className="p-6 text-center">
                  <h3 className='mb-3'>Please check your email.</h3>
                  <p className='mb-3'>An email has been sent to <span className='text-primary'>{userEmail}</span> with a link to reset your password. It may take a few minutes to arrive. If you don't see it in your inbox, please check your spam folder.</p>
                </div>
                <div className=''>
                  <hr />
                  <button className='btn btn-outline-primary text-left m-3' onClick={() => { modalHandler(null); setFinalMessage(false) }}>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }

  // if (storeLayout === _Store.type2) {
  //   return (

  //     !finalMessage ?
  //       <div
  //         id="Login1Modal"
  //         className="overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal h-full inset-0"
  //       >
  //         <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
  //           <div className="relative px-4 w-full max-w-2xl h-fullborder border-neutral-200 inline-block h-auto">
  //             <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-screen overflow-y-auto">
  //               <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600 sticky top-0 left-0 bg-white">
  //                 <div className="text-xl font-semibold text-gray-900 lg:text-2xl login-top-title dark:text-white">
  //                   Forget Password
  //                 </div>
  //                 <div className="flex items-center gap-x-2">
  //                   <button
  //                     onClick={() => modalHandler('login')}
  //                     className="text-anchor"
  //                   >
  //                     {' '}
  //                     &lt; Back
  //                   </button>
  //                   <button
  //                     type="button"
  //                     className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
  //                     onClick={() => modalHandler(null)}
  //                   >
  //                     <svg
  //                       className="w-5 h-5"
  //                       fill="currentColor"
  //                       viewBox="0 0 20 20"
  //                       xmlns="http://www.w3.org/2000/svg"
  //                     >
  //                       <path
  //                         fillRule="evenodd"
  //                         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
  //                         clipRule="evenodd"
  //                       ></path>
  //                     </svg>
  //                   </button>
  //                 </div>
  //               </div>
  //               <div className="p-6">
  //                 <div className="mb-4 text-center">Forget Password</div>
  //                 <Formik initialValues={{ email: '' }} onSubmit={forgotPassword}>
  //                   {({ values, handleChange }) => {
  //                     return (
  //                       < Form className="Login-Main type3" >
  //                         <div className="mb-2">
  //                           <input
  //                             type="text"
  //                             name="email"
  //                             onChange={handleChange}
  //                             value={values.email}
  //                             placeholder="Enter your email address"
  //                             className="form-input w-full"
  //                           />
  //                         </div>
  //                         <div className="mb-2">
  //                           <button
  //                             type="submit"
  //                             className="w-full btn btn-secondary rounded-md"
  //                           >
  //                             Submit
  //                           </button>
  //                         </div>
  //                         <div className="mb-2">
  //                           {
  //                             error ? <p className='error'>Maybe Email Not Correct</p> : ''
  //                           }
  //                         </div>
  //                       </Form>
  //                     );
  //                   }}
  //                 </Formik>
  //               </div>
  //               {/* <!-- <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
  //                     <button data-modal-toggle="Login1Modal" type="button" className="btn bg-white border-neutral-200 text-gray-500 hover:text-gray-700">Cancel</button>
  //                 </div> --> */}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       :
  //       <div id="Login1Modal" className="overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal h-full inset-0" >
  //         <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
  //           <div className="relative px-4 w-full max-w-2xl h-fullborder border-neutral-200 inline-block h-auto">
  //             <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-screen overflow-y-auto">
  //               <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600 sticky top-0 left-0 bg-white">
  //                 <div className="text-xl font-semibold text-gray-900 lg:text-2xl login-top-title dark:text-white">
  //                   Forget Password
  //                 </div>
  //                 <div className="flex items-center gap-x-2">
  //                   <button
  //                     type="button"
  //                     className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
  //                     onClick={() => { modalHandler(null); setFinalMessage(false) }}
  //                   >
  //                     <svg
  //                       className="w-5 h-5"
  //                       fill="currentColor"
  //                       viewBox="0 0 20 20"
  //                       xmlns="http://www.w3.org/2000/svg"
  //                     >
  //                       <path
  //                         fillRule="evenodd"
  //                         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
  //                         clipRule="evenodd"
  //                       ></path>
  //                     </svg>
  //                   </button>
  //                 </div>
  //               </div>
  //               <div className="p-6 text-center">
  //                 <h3 className='mb-3'>Please check your email.</h3>
  //                 <p className='mb-3'>An email has been sent to <span className='text-primary'>{userEmail}</span> with a link to reset your password. It may take a few minutes to arrive. If you don't see it in your inbox, please check your spam folder.</p>
  //               </div>
  //               <div className=''>
  //                 <hr />
  //                 <button className='btn btn-outline-primary text-left m-3' onClick={() => { modalHandler(null); setFinalMessage(false) }}>Cancel</button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //   );
  // }

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
