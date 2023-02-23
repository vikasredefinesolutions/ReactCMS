import { GetServerSideProps, NextPage } from 'next';

import { signupPageMessages } from 'constants/validationMessages';
import { ErrorMessage, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';

import { paths } from '@constants/paths.constant';
import { ResetPassword as ResetPasswordAPI } from '@services/user.service';
import { useActions } from 'hooks';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  password: Yup.string().required(signupPageMessages.password.required),
  confirmPassword: Yup.string().test(
    'passwords-match',
    signupPageMessages.confirmPassword.mustMatch,
    function (value) {
      return this.parent.password === value;
    },
  ),
});

interface _ResetPassword_InitialValues {
  password: string;
  cPassword: string;
}

const _initialValues: _ResetPassword_InitialValues = {
  password: '',
  cPassword: '',
};

const ResetPassword: NextPage<{ token: string }> = ({ token }) => {
  const router = useRouter();
  const { setShowLoader } = useActions();
  const [email, setEmail] = useState<
    null | string | 'Something Went Wrong' | 'TOKEN'
  >(null);

  const GetUserEmailAddress = () => {
    // setShowLoader(true);
    // GetEmailByResetToken({ token: '23432423' })
    //   .then(() => {
    //     setEmail('abhi@redefine.com');
    //   })
    //   .catch(() => {
    //     setEmail('Something Went Wrong');
    //   })
    //   .finally(() => {
    //     setShowLoader(true);
    //   });
  };

  const submitHandler = (values: _ResetPassword_InitialValues) => {
    setShowLoader(true);
    ResetPasswordAPI({
      emailId: email!,
      tokenCode: token,
      newPassword: values.password,
      reEnterPassword: values.cPassword,
    })
      .then(() => {
        router.push(paths.HOME);
      })
      .catch(() => {})
      .finally(() => {
        setShowLoader(true);
      });
  };

  useEffect(() => {
    GetUserEmailAddress();
  }, []);

  return (
    <section className='m-6'>
      <div className='container mx-auto'>
        <Formik
          initialValues={_initialValues}
          onSubmit={submitHandler}
          validationSchema={validationSchema}
        >
          {({ handleChange, values }) => {
            return (
              <Form className='max-w-3xl mx-auto'>
                <div className='text-3xl font-primary uppercase text-center mb-6'>
                  RESET PASSWORD
                </div>
                <div className='text-[13px]'>Welcome back!</div>
                <div className='text-[13px]'>
                  Please enter your new password below.
                </div>
                <div className='mt-2'>
                  <div className='mb-2'>
                    <input
                      type='text'
                      id='password'
                      name='password'
                      value={values.password}
                      onChange={handleChange}
                      className='form-input'
                      placeholder='New Password'
                    />
                    <ErrorMessage
                      name={'password'}
                      className='text-rose-500'
                      component={'p'}
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      type='text'
                      id='cPassword'
                      name='cPassword'
                      value={values.cPassword}
                      onChange={handleChange}
                      className='form-input'
                      placeholder='Re-Enter Password'
                    />
                    <ErrorMessage
                      name={'cPassword'}
                      className='text-rose-500'
                      component={'p'}
                    />
                  </div>
                  <div className=''>
                    <button
                      type={'submit'}
                      className='btn btn-secondary w-full !font-semibold !tracking-[1.4px]'
                    >
                      RESET PASSWORD
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
};

export default ResetPassword;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = context.res;
  const token = context.query?.token;

  if (!token) {
    res.writeHead(302, {
      Location: paths.HOME,
    });
    res.end();
  }

  return {
    props: {
      token: token,
    },
  };
};
