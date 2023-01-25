import { Form, Formik } from 'formik';
import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React from 'react';
import { SubscribeToNewsLetter } from 'services/user.service';

const NewsLetterBox: React.FC = () => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  // const show = useTypedSelector((state) => state.store.display.footer);

  const submitHandler = (enteredInputs: { email: string }) => {
    SubscribeToNewsLetter(enteredInputs);
    // .then((res) => console.log(res))
    // .catch((err) => console.log(err));
  };

  if (
    storeLayout === _Store.type1 ||
    storeLayout === _Store.type15 ||
    storeLayout === _Store.type16
  ) {
    return (
      <>
        <h3 className='pt-5 pb-4 text-lg font-semibold text-gray-100 tracking-wider uppercase'>
          SIGN UP FOR NEWS & UPDATES
        </h3>
        <div className='text-center pb-5 px-2'>
          <Formik initialValues={{ email: '' }} onSubmit={submitHandler}>
            {() => (
              <Form className='sm:flex sm:max-w-md mt-0 mx-auto'>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  type='email'
                  name='email-address'
                  id='email-address'
                  required={false}
                  className='appearance-none min-w-0 w-full bg-white border border-gray-300 py-2 px-4 text-base rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400 sm:max-w-xs'
                  placeholder='Enter your email'
                />
                <div className='mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
                  <button
                    type='submit'
                    className='w-full btn btn-secondary rounded-md'
                  >
                    Subscribe
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <div className='bg-[#cfd2d3] px-1 lg:px-0'>
        <div className='container mx-auto py-4 lg:py-10'>
          <div className='w-full lg:grid lg:grid-cols-12 lg:gap-4 lg:items-center'>
            <div className='lg:col-span-5'>
              <div className='text-[26px] text-center font-bold'>
                {/* Sign Up for GameDay Gear Updates */}
                Sign Up for GameDay Gear Updates
              </div>
            </div>
            <div className='lg:col-span-7'>
              <Formik initialValues={{ email: '' }} onSubmit={submitHandler}>
                {({ values, handleChange }) => {
                  return (
                    <div className='flex'>
                      <input
                        type='text'
                        name='email'
                        onChange={handleChange}
                        value={values.email}
                        placeholder='Enter your email address'
                        className='form-control grow px-8 py-4 rounded-l-full text-sm border-0 outline-none'
                      />
                      <button
                        type='submit'
                        className='bg-[#415364] w-40 inline-block hover:bg-[#CDDE00] text-white py-4 px-10 rounded-r-full uppercase border-0 outline-none'
                      >
                        Submit
                      </button>
                    </div>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (storeLayout === _Store.type3) {
    return (
      <div className='bg-gray-300'>
        <div className='container mx-auto py-6'>
          <div className='w-full'>
            <div className=''>
              <div className='w-full text-center text-lg md:text-xl lg:text-small-title font-small-title mb-4'>
                SIGN UP FOR PATAGONIA EMAILS
              </div>
              <div className='flex max-w-md mx-auto'>
                <input
                  type='text'
                  className='form-input'
                  placeholder='Enter your E-Mail Address.'
                />
                <button
                  className='btn btn-secondary whitespace-nowrap'
                  type='button'
                >
                  SIGN UP{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (storeLayout === _Store.type4) {
    return <></>;
  }

  return <></>;
};

export default NewsLetterBox;
