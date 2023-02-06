import { Form, Formik } from 'formik';
import Link from 'next/link';
import React from 'react';

interface _props {
  screen: 'MOBILE' | 'DESKTOP';
}

const StoreBuilder_SearchBar: React.FC<_props> = ({ screen }) => {
  const searchHandler = (value: { text: string }) => {
    // SearchFor(value);
    // .then().catch().finally;
  };

  if (screen === 'MOBILE') {
    return (
      <Link href='#' className='py-2 text-primary hover:text-gray-500'>
        <a>
          <span className='sr-only'>Search</span>
          <svg
            className='w-6 h-6'
            x-description='Heroicon name: outline/search'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            ></path>
          </svg>
        </a>
      </Link>
    );
  }
  if (screen === 'DESKTOP') {
    return (
      <Formik initialValues={{ text: '' }} onSubmit={searchHandler}>
        {({ values, handleSubmit, handleChange, handleReset }) => {
          return (
            <Form>
              <div className='hidden lg:flex'>
                <div className='border border-gray-400 p-2 pr-10 text-gray-400 hover:text-gray-500 relative'>
                  <input
                    type='text'
                    name='text'
                    min={1}
                    id='txtSearch'
                    //                      onChange={handleChange}
                    className='outline-none border-0 focus:ring-0'
                  />
                  <div
                    className='w-6 h-6 absolute right-2 top-4 '
                    onClick={() => {
                      handleSubmit();
                      handleReset();
                    }}
                  >
                    <svg
                      className='w-6 h-6'
                      x-description='Heroicon name: outline/search'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='2'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    );
  }

  return <div>StoreBuilder_SearchBar</div>;
};

export default StoreBuilder_SearchBar;
