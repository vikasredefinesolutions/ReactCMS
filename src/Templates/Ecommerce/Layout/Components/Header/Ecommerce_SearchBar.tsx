import { Form, Formik } from 'formik';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { _Store } from 'page.config';
import React from 'react';

interface _props {
  screen?: 'MOBILE' | 'DESKTOP';
  // eslint-disable-next-line no-unused-vars
  onSearchInput?: (value?: string) => Promise<any>;
}

const SearchBar: React.FC<_props> = ({
  screen = 'DESKTOP',
  onSearchInput = () => {},
}) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);

  const searchHandler = (value: { text: string }) => {
    // SearchFor(value);
    onSearchInput(value.text as string);
    // .then().catch().finally;
  };

  if (storeLayout === _Store.type2) {
    if (screen === 'MOBILE') {
      return (
        <button className='text-gray-600 hover:text-[#CDDE00]'>
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
        </button>
      );
    }

    if (screen === 'DESKTOP') {
      return (
        <div className='hidden lg:flex flex-grow max-w-[500px]'>
          <Formik initialValues={{ text: '' }} onSubmit={searchHandler}>
            {({ values, handleSubmit, handleChange, handleReset }) => {
              return (
                <Form className='flex-grow max-w-[500px]:'>
                  <div className='border border-secondary w-full p-2 pr-10 rounded-full text-white hover:text-[#CDDE00] relative'>
                    <input
                      type='text'
                      className='outline-none text-secondary text-lg w-full border-0 focus:ring-0'
                      placeholder='Search'
                      name='text'
                      min={1}
                      id='txtSearch'
                    />
                    <div
                      className='w-8 h-8 absolute rounded-full bg-[#415364] right-1.5 top-3 flex items-center justify-center'
                      onClick={() => {
                        handleSubmit();
                        handleReset();
                      }}
                    >
                      <svg
                        className='w-4 h-4'
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
                </Form>
              );
            }}
          </Formik>
        </div>
      );
    }
  }

  if (
    storeLayout === _Store.type1 ||
    storeLayout === _Store.type15 ||
    storeLayout === _Store.type16
  ) {
    if (screen === 'MOBILE') {
      return (
        <div className='lg:hidden w-full'>
          <div className='border border-primary pt-[5px] pb-[4px] pl-[5px] pr-[24px] text-gray-400 hover:text-gray-500 relative'>
            <input
              type='text'
              className='outline-none w-full border-0 focus:ring-0 text-[14px] tracking-[1px] text-primary h-[26px]'
              placeholder='Search'
              id='txtSearch'
            />
            <button
              type='button'
              className='w-6 h-6 absolute right-1.5 top-1.5'
            >
              <span className='material-icons text-primary'>search</span>
            </button>
          </div>
        </div>
      );
    }
    if (screen === 'DESKTOP') {
      return (
        <Formik initialValues={{ text: '' }} onSubmit={searchHandler}>
          {({ values, handleSubmit, handleChange, handleReset }) => {
            return (
              <Form>
                <div className='hidden lg:flex max-w-[190px]'>
                  <div className='border border-primary pt-[5px] pb-[4px] pl-[15px] pr-[24px] text-gray-400 hover:text-gray-500 relative'>
                    <input
                      type='text'
                      name='text'
                      min={1}
                      id='txtSearch'
                      placeholder='Search'
                      //                      onChange={handleChange}
                      className='outline-none w-full border-0 focus:ring-0 text-[14px] tracking-[1px] text-primary h-[26px]'
                    />
                    <button
                      className='w-6 h-6 absolute right-1.5 top-1.5'
                      onClick={() => {
                        handleSubmit();
                        handleReset();
                      }}
                    >
                      <span className='material-icons text-primary'>
                        search
                      </span>
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      );
    }
  }

  if (storeLayout === _Store.type3) {
    if (screen === 'MOBILE') {
      return (
        <Link href='/' className='text-gray-600 hover:text-primary'>
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
        </Link>
      );
    }

    if (screen === 'DESKTOP') {
      return (
        <div className='hidden lg:flex flex-grow max-w-[500px]'>
          <div className='border border-secondary w-full p-2 pr-10 rounded-full text-white hover:text-primary relative'>
            <input
              type='text'
              id='txtSearch'
              className='outline-none text-secondary text-lg w-full bg-transparent border-0 focus:ring-0'
              placeholder='Search'
            />
            <div className='w-8 h-8 absolute rounded-full bg-[#415364] right-1.5 top-1.5 flex items-center justify-center'>
              <svg
                className='w-4 h-4'
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
      );
    }
  }

  if (storeLayout === _Store.type4) {
    if (screen === 'MOBILE') {
      return (
        <div className='py-2 text-white hover:text-gray-500'>
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
        </div>
      );
    }
    if (screen === 'DESKTOP') {
      return (
        <div className='hidden lg:flex'>
          {/* Earlier anchor tag */}
          <div className='-m-2  border border-primary p-2 pr-10 text-gray-400 hover:text-gray-500 rounded-md relative'>
            <input
              type='text'
              id='txtSearch'
              className='outline-none bg-transparent text-white placeholder:text-gray-400 border-0 focus:ring-0'
              placeholder='Search'
            />
            <div className='w-6 h-6 absolute right-2 top-4'>
              <svg
                className='w-6 h-6 stroke-primary'
                x-description='Heroicon name: outline/search'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
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
      );
    }
  }

  return <></>;
};

export default SearchBar;
