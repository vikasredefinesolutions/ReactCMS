import { __QuoteRequestMessages } from 'constants/validationMessages';
import { _modals } from 'definations/product.type';
import { Form, Formik } from 'formik';
import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import * as Yup from 'yup';
import ProductQuoteRequestInput from './ProductQuoteRequestInput';

type __QuoteRequest = {
  name: string;
  email: string;
  organization: string;
  sport: string;
  phoneNumber: string;
  additionalInformation: string;
};

const __QuoteRequestInitials: __QuoteRequest = {
  name: '',
  email: '',
  organization: '',
  sport: '',
  phoneNumber: '',
  additionalInformation: '',
};

const __QuoteRequestSchema = Yup.object().shape({
  name: Yup.string().required(__QuoteRequestMessages.name.required),
  email: Yup.string().required(__QuoteRequestMessages.email.required),
  organization: Yup.string().required(
    __QuoteRequestMessages.organization.required,
  ),
  sport: Yup.string().required(__QuoteRequestMessages.sport.required),
});

interface _props {
  // eslint-disable-next-line no-unused-vars
  modalHandler: (param: null | _modals) => void;
  product?: string | undefined;
}

const ProductQuoteRequest: React.FC<_props & { storeCode: string }> = ({
  modalHandler,
  storeCode,
  product,
}) => {
  const [verifiedRecaptch, setverifiedRecaptch] = useState(false);
  const { name } = useTypedSelector((state) => state.product.product);

  const { color } = useTypedSelector((state) => state.product.selected);

  const productName = product ? product : name;
  const productColor = product ? '' : color.name;
  const quoteRequestHandler = (value: any) => {
    modalHandler(null);
  };
  function onChange(value: any) {
    setverifiedRecaptch(true);
  }

  // const show = useTypedSelector((state) => state.store.display.footer);
  if (storeCode === _Store.type2) {
    return (
      <div
        id='QuoteRequestModal'
        aria-hidden='true'
        className=' overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal h-full inset-0'
      >
        <div className='w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='relative px-4 w-full max-w-2xl h-fullborder border-neutral-200 inline-block h-auto'>
            <Formik
              initialValues={__QuoteRequestInitials}
              onSubmit={quoteRequestHandler}
              validationSchema={__QuoteRequestSchema}
            >
              {({ values, handleChange }) => {
                return (
                  <Form>
                    <div className='relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-screen overflow-y-auto'>
                      <div className='flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600 sticky top-0 left-0 bg-white'>
                        <div className='text-xl font-semibold text-gray-900 lg:text-2xl login-top-title dark:text-white'>
                          Contact us
                        </div>
                        <div className='flex items-center gap-x-2'>
                          <button
                            type='button'
                            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                            onClick={() => modalHandler(null)}
                          >
                            <svg
                              className='w-5 h-5'
                              fill='currentColor'
                              viewBox='0 0 20 20'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fillRule='evenodd'
                                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                clipRule='evenodd'
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className='p-6'>
                        <div className='flex flex-wrap gap-1 pt-4 first:pt-0 font-semibold'>
                          <div className=''>Product Name :</div>
                          <div className=''>{productName}</div>
                        </div>
                        {productColor && (
                          <div className='flex flex-wrap gap-1 pt-4 first:pt-0 font-semibold'>
                            <div className=''>Color :</div>
                            <div className=''>{productColor}</div>
                          </div>
                        )}
                        <ProductQuoteRequestInput
                          label={'Name'}
                          placeHolder={'Name'}
                          value={values.name}
                          name={'name'}
                          onChange={handleChange}
                          type={'text'}
                          required={true}
                          containerClass={'pt-4 first:pt-0'}
                        />
                        <ProductQuoteRequestInput
                          label={'Email'}
                          placeHolder={'Your Email Address'}
                          value={values.email}
                          name={'email'}
                          onChange={handleChange}
                          type={'text'}
                          required={true}
                          containerClass={'pt-4 first:pt-0'}
                        />
                        <ProductQuoteRequestInput
                          label={'School/Organization'}
                          placeHolder={'Your School/Organization'}
                          value={values.organization}
                          name={'organization'}
                          onChange={handleChange}
                          type={'text'}
                          required={true}
                          containerClass={'pt-4 first:pt-0'}
                        />
                        <ProductQuoteRequestInput
                          label={'Sport'}
                          placeHolder={'Your Sport'}
                          value={values.sport}
                          name={'sport'}
                          onChange={handleChange}
                          type={'text'}
                          required={true}
                          containerClass={'pt-4 first:pt-0'}
                        />
                        <ProductQuoteRequestInput
                          label={'Phone Number'}
                          placeHolder={'Your Phone'}
                          value={values.phoneNumber}
                          name={'phoneNumber'}
                          onChange={handleChange}
                          type={'number'}
                          required={false}
                          containerClass={'pt-4 first:pt-0'}
                        />
                        <ProductQuoteRequestInput
                          label={'Additional Information'}
                          placeHolder={'Enter Additional Information'}
                          value={values.additionalInformation}
                          name={'additionalInformation'}
                          onChange={handleChange}
                          type={'textArea'}
                          required={false}
                          containerClass={'pt-4 first:pt-0 '}
                        />
                        <ReCAPTCHA
                          className='pt-4 first:pt-0'
                          sitekey={
                            process.env.NEXT_PUBLIC_RECAPTCHASITEKEY || ''
                          }
                          onChange={onChange}
                        />
                      </div>
                      <div className='flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
                        <button
                          type='button'
                          className='btn btn-primary'
                          onClick={() => modalHandler(null)}
                        >
                          Close
                        </button>
                        <button
                          type='submit'
                          className={`btn btn-secondary ${
                            verifiedRecaptch ? '' : 'opacity-50'
                          }  `}
                          disabled={!verifiedRecaptch}
                        >
                          Send
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
    );
  }

  return <></>;
};

export default ProductQuoteRequest;
