import { Form, Formik } from 'formik';
import { useTypedSelector } from 'hooks';
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
    onSearchInput(value.text as string);
  };

  if (storeLayout === _Store.type6) {
    return (
      <div className='flex flex-grow max-w-[500px]'>
        <Formik initialValues={{ text: '' }} onSubmit={searchHandler}>
          {({ values, handleSubmit, handleChange, handleReset }) => {
            return (
              <Form className='flex-grow max-w-[500px]:'>
                <div className='border-b border-black w-full p-2 text-white hover:text-primary relative'>
                  <input
                    type='text'
                    className='outline-none text-black text-lg w-full bg-white'
                    placeholder='Enter Search here'
                    name='text'
                    min={1}
                    id='txtSearch'
                  />
                  <div
                    className='absolute right-1.5 top-1.5 flex items-center justify-center'
                    onClick={() => {
                      handleSubmit();
                      handleReset();
                    }}
                  >
                    <svg
                      className='w-6 h-6 text-black text-lg'
                      x-description='Heroicon name: outline/search'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
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

  return <></>;
};

export default SearchBar;
