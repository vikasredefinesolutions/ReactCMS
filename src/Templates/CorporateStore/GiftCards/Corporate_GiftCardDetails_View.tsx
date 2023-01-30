import { paths } from '@constants/paths.constant';
import { _GiftCard } from '@services/gift.service.type';
import MsgContainer from 'appComponents/modals/MsgContainer';
import Price from 'appComponents/reUsable/Price';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import * as Yup from 'yup';
import GC_Input from './Components/GC_Input';

interface _InitialValues {
  recipientName: '';
  recipientEmail: '';
  messageForRecipient: '';
}

const initialValues: _InitialValues = {
  recipientName: '',
  recipientEmail: '',
  messageForRecipient: '',
};

const validationSchema = Yup.object().shape({
  recipientName: Yup.string()
    .required(`Please enter Recipient's Name`)
    .max(40, `Recipient name characters limit is 40 letters`),
  recipientEmail: Yup.string()
    .email(`Please enter valid Recipient's Email`)
    .required(`Please enter valid Recipient's Email`),
  messageForRecipient: Yup.string()
    .required(`Please enter Message`)
    .max(500, `Message max characters limit is 500 letters`),
});

interface _props {
  giftCard: _GiftCard;
  storeCode: string | null;
}

const Corporate_GiftCardDetails: React.FC<_props> = ({ giftCard }) => {
  const router = useRouter();
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const formHandler = (value: _InitialValues) => {
    // cart_update_item({
    //   type: 'add_item',
    //   data: {
    //     itemType: 'giftCard',
    //     giftId: giftCard.productId,
    //     qty: 1,
    //     seName: giftCard.seName,
    //     giftPrice: +giftCard.salePrice,
    //     giftImageURL: giftCard.imageName,
    //     sender: {
    //       name: '',
    //       email: '',
    //     },
    //     recipient: {
    //       name: value.recipientName,
    //       email: value.recipientEmail,
    //     },
    //     messageForRecipient: value.messageForRecipient,
    //   },
    // });

    router.push(paths.CART);
  };

  return (
    <section className=''>
      <div className='container mx-auto'>
        <div className='bg-white pt-8'>
          <div className='lg:grid lg:grid-cols-12 lg:items-start px-3 gap-4'>
            <div className='lg:col-span-7'>
              <div className='relative'>
                <div className='main-image max-w-xl mx-auto mb-4'>
                  <img src={giftCard.imageName} alt='' className='' />
                </div>
              </div>
            </div>
            {/* <!-- <div className="lg:col-end-13 lg:col-span-5 mt-4 md:mt-10 px-2 md:px-4 sm:px-0 sm:mt-16 lg:mt-0"> --> */}
            <div className='lg:col-span-5'>
              <div className='mb-4 border-b border-b-gray-300'>
                <div className='text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title mb-4'>
                  {giftCard.name}
                </div>
              </div>
              <Formik
                initialValues={initialValues}
                onSubmit={formHandler}
                validationSchema={validationSchema}
              >
                {({ handleChange, values, errors, setErrors }) => {
                  const errorKey = (
                    Object.keys(errors) as Array<
                      'recipientEmail' | 'recipientName' | 'messageForRecipient'
                    >
                  )[0];
                  return (
                    <Form>
                      <div className='flex flex-wrap items-center mb-4'>
                        <div className='w-32 text-sm items-center'>
                          <span className='text-sm font-semibold'>
                            Recipient's Name:
                          </span>
                        </div>
                        <div className='text-sm grow max-w-xs'>
                          <GC_Input
                            type={'text'}
                            id={'recipientName'}
                            name={'recipientName'}
                            value={values.recipientName}
                            onChange={handleChange}
                            placeholder={''}
                          />
                        </div>
                      </div>
                      <div className='flex flex-wrap items-center mb-4'>
                        <div className='w-32 text-sm items-center'>
                          <span className='text-sm font-semibold'>
                            Recipient's Email:
                          </span>
                        </div>
                        <div className='text-sm grow max-w-xs'>
                          <GC_Input
                            type={'text'}
                            id={'recipientEmail'}
                            name={'recipientEmail'}
                            value={values.recipientEmail}
                            onChange={handleChange}
                            placeholder={''}
                          />
                        </div>
                      </div>
                      <div className='flex flex-wrap mb-4'>
                        <div className='w-32 text-sm items-center'>
                          <span className='text-sm font-semibold'>
                            Message:
                          </span>
                        </div>
                        <div className='text-sm grow max-w-xs'>
                          <textarea
                            className='form-input'
                            value={values.messageForRecipient}
                            id={'messageForRecipient'}
                            name={'messageForRecipient'}
                            onChange={handleChange}
                            rows={5}
                          />
                        </div>
                      </div>
                      <div>
                        <div className='mt-3 bg-sky-50 p-4'>
                          <div className='text-sm text-gray-900 flex flex-wrap items-end'>
                            <div className='w-28'>
                              <span className=''>You Pay</span>
                            </div>
                            <div className=''>
                              <span className='text-2xl tracking-wider'>
                                <Price value={giftCard.salePrice} />
                              </span>
                            </div>
                          </div>
                          <div
                            onClick={() => setShowErrorMsg(true)}
                            className='w-full text-left flex justify-end mt-4'
                          >
                            <button
                              type='submit'
                              className='btn btn-primary w-full text-center'
                            >
                              BUY NOW
                            </button>
                          </div>
                        </div>
                      </div>
                      <>
                        {showErrorMsg && errorKey && (
                          <MsgContainer
                            modalHandler={() => {
                              setShowErrorMsg(false);
                              setErrors({});
                            }}
                            message={''}
                            title={errors[errorKey] || ''}
                          />
                        )}
                      </>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Corporate_GiftCardDetails;
