import { updateUserData, updateUserPassword } from '@services/user.service';
import { Form, Formik } from 'formik';
import { useActions, useTypedSelector } from 'hooks';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

const initValue = {
  firstName: '',
  lastName: '',
  companyName: '',
};

type SettingForm = typeof initValue;
const AccountSetting = () => {
  const { showModal } = useActions();
  const customer = useTypedSelector((state) => state.user.customer);
  const [activeEditBox, setActiveEditBox] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordUpdate, setShowPasswordUpdate] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [initialValues, setInitialValues] = useState<SettingForm>(initValue);
  useEffect(() => {
    if (newPassword && activeEditBox) {
      setShowPasswordUpdate(true);
    } else {
      setShowPasswordUpdate(false);
    }
  }, [newPassword, activeEditBox]);

  const updatePassword = async () => {
    try {
      const res = await updateUserPassword({
        email: customer?.email || '',
        password: newPassword,
        customerId: customer?.id || 0,
      });
      if (res) {
        setNewPassword('');
        setShowPasswordUpdate(false);
        showModal({
          message: 'Password Updated Successfully',
          title: 'Updated',
        });
        setActiveEditBox(false);
      } else {
        showModal({
          message: 'Password Update Failed, Try Again!',
          title: 'Failed',
        });
      }
    } catch (error) {
      showModal({ message: 'Error', title: 'Failed' });
    }
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    companyName: Yup.string().required(),
  });

  useEffect(() => {
    if (customer) {
      setInitialValues({
        firstName: customer.firstname,
        lastName: customer.lastName,
        companyName: customer.companyName,
      });
    }
  }, [customer]);

  const submitHandler = async (value: SettingForm) => {
    try {
      const res = await updateUserData({
        ...value,
        password: newPassword,
        customerId: customer?.id || 0,
        gender: customer?.gender || 'Male',
      });
      if (res) {
        showModal({
          message: 'Updated User Details Successfully',
          title: 'Updated',
        });
        setActiveEditBox(false);
      }
    } catch (error) {
      showModal({ message: 'Password Update Failed', title: 'Failed' });
    }
  };

  return (
    <section className='container mx-auto mb-6 '>
      <div className='gird grid-cols-1 lg:flex lg:items-center gap-6 lg:py-8 lg:px-12 px-4 py-4 lg:my-5'>
        <div className='w-full mx-auto max-w-4xl'>
          <Formik
            initialValues={initialValues}
            enableReinitialize
            onSubmit={submitHandler}
            validationSchema={validationSchema}
          >
            {({ values, handleChange, handleBlur }) => (
              <Form>
                <div className='mb-6'>
                  <div className='mt-4 flex flex-wrap items-center gap-2 max-w-3xl'>
                    <label className='text-base font-medium text-gray-700 w-full md:w-1/3 md:text-right'>
                      First Name <span className='text-red-600'>*</span>
                    </label>
                    <div className='grow'>
                      <input
                        type='text'
                        id='Full Name'
                        name='firstName'
                        placeholder='Enter Your Full Name'
                        value={values.firstName}
                        className='form-input'
                        disabled={!activeEditBox}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <div className='mt-4 flex flex-wrap items-center gap-2 max-w-3xl'>
                    <label className='text-base font-medium text-gray-700 w-full md:w-1/3 md:text-right'>
                      Last Name <span className='text-red-600'>*</span>
                    </label>
                    <div className='grow'>
                      <input
                        type='text'
                        id='Last Name'
                        name='lastName'
                        placeholder='Enter Your Last Name'
                        value={values.lastName}
                        className='form-input'
                        disabled={!activeEditBox}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <hr className='mt-4'></hr>
                  <div className='mt-4 flex flex-wrap items-center gap-2 max-w-3xl'>
                    <label className='text-base font-medium text-gray-700 w-full md:w-1/3 md:text-right'>
                      Email Address <span className='text-red-600'>*</span>
                    </label>
                    <div className='grow'>
                      <input
                        type='email'
                        id='email-address'
                        name='email-address'
                        placeholder='Enter Email Address'
                        value={customer?.email}
                        className='form-input bg-slate-400'
                        disabled
                      />
                    </div>
                  </div>
                  <hr className='mt-4'></hr>
                  <div className='mt-4 flex flex-wrap items-center gap-2 max-w-3xl'>
                    <label className='text-base font-medium text-gray-700 w-full md:w-1/3 md:text-right'>
                      Company Name <span className='text-red-600'>*</span>
                    </label>
                    <div className='grow'>
                      <input
                        type='text'
                        id='companyu-name'
                        name='companyName'
                        placeholder='Enter Company Name'
                        // value="johnthomas@ecommerce.com"
                        value={values.companyName}
                        className='form-input'
                        disabled={!activeEditBox}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <hr className='mt-4'></hr>
                  <div className=''>
                    <div className='mt-4 flex flex-wrap items-center gap-2 max-w-3xl'>
                      <label className='block text-base font-medium text-gray-700 w-full md:w-1/3 md:text-right'>
                        Current Password <span className='text-red-600'>*</span>
                      </label>
                      <div className='relative grow'>
                        <input
                          id='password'
                          className='form-input'
                          placeholder='Password'
                          type={showPassword ? 'text' : 'password'}
                          value={newPassword}
                          onChange={(e) => {
                            setNewPassword(e.target.value);
                          }}
                          disabled={!activeEditBox}
                        />
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          className='block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-indigo-500 transition-colors'
                        >
                          <span className='material-symbols-outlined text-[16px]'>
                            visibility
                          </span>
                        </button>

                        <div className='absolute top-2 right-10'>
                          <button
                            onMouseOver={() => setShowInfo(true)}
                            onMouseLeave={() => setShowInfo(false)}
                            className='text-gray-400 focus:outline-none hover:text-indigo-500 transition-colors'
                            aria-haspopup='true'
                          >
                            <span className='material-icons-outlined ml-2 text-base'>
                              info
                            </span>
                          </button>
                          <div
                            style={{
                              display: showInfo ? '' : 'none',
                            }}
                            className='z-10 absolute top-full left-32 transform -translate-x-1/2'
                          >
                            <div className='bg-slate-500 p-2 overflow-hidden mt-2'>
                              <div className='text-sm text-gray-200 font-light whitespace-nowrap w-full text-left px-4 py-4'>
                                <span className='w-full pt-1 pb-1 block font-semibold'>
                                  Your password must have :
                                </span>
                                <span className='w-full pt-1 pb-1 block'>
                                  8 Or more character
                                </span>
                                <span className='w-full pt-1 pb-1 block'>
                                  Upper and lowercase letters
                                </span>
                                <span className='w-full pt-1 pb-1 block'>
                                  At list one number
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {showPasswordUpdate && (
                        <div className='m:col-span-1'>
                          <button
                            type='button'
                            onClick={updatePassword}
                            className='m-r-10 btn btn-primary '
                          >
                            Update Password
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className='mt-8 flex flex-wrap items-center gap-2 max-w-3xl'>
                    <div className='w-full md:w-1/3 '></div>
                    <div className='grow'>
                      {!activeEditBox ? (
                        <button
                          type='button'
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveEditBox(true);
                          }}
                          className='btn btn-secondary'
                        >
                          Edit Profile
                        </button>
                      ) : (
                        <>
                          <button
                            type='submit'
                            className='mr-2 btn btn-primary'
                          >
                            Save
                          </button>
                          <button
                            type='button'
                            onClick={() => setActiveEditBox(false)}
                            className='ml-2 btn btn-secondary'
                          >
                            Cancel
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default AccountSetting;
