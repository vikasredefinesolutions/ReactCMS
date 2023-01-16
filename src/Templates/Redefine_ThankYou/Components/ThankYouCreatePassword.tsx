import { __Cookie } from '@constants/global.constant';
import { UpdatePasswordForGuestEmail } from '@services/user.service';
import { ErrorMessage, Form, Formik, FormikHelpers } from 'formik';
import { extractCookies } from 'helpers/common.helper';
import { useActions, useTypedSelector } from 'hooks';
import React from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Enter a password')
    .min(8, 'Password must contain 8 characters'),
});

const ThankYouPasswordInput: React.FC = () => {
  const guestEmail = useTypedSelector((state) => state.cart.email);
  const { cart_userUpdate } = useActions();
  const guestId = extractCookies(
    __Cookie.tempCustomerId,
    'browserCookie',
  ).tempCustomerId;

  const passwordHandler = async (
    input: { password: string },
    actions: FormikHelpers<{ password: string }>,
  ) => {
    const response = await UpdatePasswordForGuestEmail({
      customerId: 122,
      email: guestEmail,
      password: input.password,
    });

    if (response?.firstname) {
      cart_userUpdate({
        type: 'noMoreAGuest',
        data: {
          isGuestCustomer: false,
        },
      });
      return;
    }
    actions.setErrors({ password: 'Something went wrong. Try again!!!' });
  };

  return (
    <div className='pt-2'>
      <div className='pb-2 text-sm text-white font-semibold'>
        Create Password{' '}
      </div>
      <Formik
        initialValues={{ password: '' }}
        onSubmit={passwordHandler}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleSubmit }) => {
          return (
            <Form>
              <div className='flex mb-6 items-start gap-2'>
                <div className='relative z-0'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Enter Password'
                    value={values.password}
                    onChange={handleChange}
                    className='form-input'
                  />
                  <div className='text-sm text-white'>
                    <ErrorMessage
                      name='password'
                      className='text-rose-500'
                      component={'p'}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type='button'
                    onClick={() => handleSubmit()}
                    className='btn btn-secondary'
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ThankYouPasswordInput;
