import { addressMessages } from '@constants/validationMessages';
import { getCountryList, getStatesList } from '@services/address.service';
import { AddUpdateAddressRequest } from '@type/APIs/address.req';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

export const _initialValues = {
  firstname: '',
  lastName: '',
  email: '',
  address1: '',
  address2: '',
  suite: '',
  city: '',
  state: '',
  postalCode: '',
  phone: '',
  fax: '',
  countryName: '',
  isDefault: false,
  companyName: '',
};

export type InititalValueAddress = typeof _initialValues;

type Props = {
  submitHandler?: (arg: AddUpdateAddressRequest) => void;
  closePopupHandler: () => void;
  customChangeHandler?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  addressType: string;
  editData: any | null;
  padding?: boolean | null;
  hideButtons?: boolean | null;
  formRef?: any;
  isDisabled?: boolean;
};
const AddressForm: React.FC<Props> = ({
  submitHandler,
  closePopupHandler,
  customChangeHandler,
  addressType,
  editData,
  padding,
  hideButtons,
  formRef,
  isDisabled = false,
}) => {
  addressType;
  const [country, setCountry] = useState<Array<{ id: number; name: string }>>(
    [],
  );
  const [state, setState] = useState<Array<{ id: number; name: string }>>([]);
  const [initialValues, setInitialValues] = useState(_initialValues);
  const [showSecondLine, setShowSecondLine] = useState(false);

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required(addressMessages.firstName.required),
    lastName: Yup.string().required(addressMessages.lastName.required),
    email: Yup.string().email().required(addressMessages.email.required),
    address1: Yup.string().required(addressMessages.address1.required),
    address2: Yup.string(),
    city: Yup.string().required(addressMessages.city.required),
    state: Yup.string().required(addressMessages.state.required),
    postalCode: Yup.string().required(addressMessages.postalCode.required),
    phone: Yup.string().required(addressMessages.phone.required),
    fax: Yup.string().required(addressMessages.fax.required),
    countryName: Yup.string().required(addressMessages.countryName.required),
    companyName: Yup.string().required(addressMessages.companyName.required),
  });

  const loadState = async (countryName: string) => {
    const id = country.find(
      (res) => res.name.toLowerCase() === countryName.toLowerCase(),
    );
    if (id) {
      const state = await getStatesList(id.id);
      setState(state);
      return state;
    }
    return null;
  };

  useEffect(() => {
    if (editData && country.length > 0) {
      loadState(editData.countryName || '').then(() => {
        setInitialValues({
          firstname: editData.firstname,
          lastName: editData.lastName,
          email: editData.email,
          address1: editData.address1,
          address2: editData.address2,
          suite: editData.suite,
          city: editData.city,
          state: editData.state,
          postalCode: editData.postalCode,
          phone: editData.phone,
          fax: editData.fax,
          countryName: editData.countryName,
          isDefault: editData.isDefault,
          companyName: editData.companyName,
        });
        if (editData.address2 && editData.address2.length > 0) {
          setShowSecondLine(true);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editData, country]);

  useEffect(() => {
    getCountryList().then((res) => {
      setCountry(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Formik
      onSubmit={submitHandler ? submitHandler : () => {}}
      validationSchema={validationSchema}
      initialValues={initialValues}
      enableReinitialize
      innerRef={formRef}
    >
      {({
        errors,
        touched,
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        submitForm,
        isSubmitting,
        setFieldValue,
      }) => (
        <>
          <div className={`${padding ? 'p-6 ' : ''}space-y-6`}>
            <form className='mt-4 sm:max-w-2xl' onSubmit={handleSubmit}>
              <fieldset className='w-full'>
                <label className='text-base'>Country</label>
                <div className='relative mt-2'>
                  <select
                    disabled={isDisabled}
                    id='country'
                    name='countryName'
                    autoComplete='country-name'
                    className='form-input'
                    value={values.countryName}
                    onChange={(e) => {
                      handleChange(e);
                      customChangeHandler && customChangeHandler(e);
                      loadState(e.target.value);
                    }}
                    onBlur={handleBlur}
                  >
                    <option>Select Country</option>
                    {country.map((res, index) => (
                      <option key={index}>{res?.name}</option>
                    ))}
                  </select>
                  <div className='text-red-500 text-s mt-1'>
                    {touched.countryName && errors.countryName}
                  </div>
                </div>
              </fieldset>
              <div className='mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                <div className='sm:col-span-3'>
                  <label htmlFor='city' className='block text-base'>
                    First Name
                  </label>
                  <div className='mt-1'>
                    <input
                      disabled={isDisabled}
                      value={values.firstname}
                      name='firstname'
                      id='firstname'
                      className='form-input'
                      onChange={(e) => {
                        handleChange(e);
                        customChangeHandler && customChangeHandler(e);
                      }}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className='text-red-500 text-s mt-1'>
                    {touched.firstname && errors.firstname}
                  </div>
                </div>
                <div className='sm:col-span-3'>
                  <label htmlFor='region' className='block text-base'>
                    Last Name
                  </label>
                  <div className='mt-1'>
                    <input
                      disabled={isDisabled}
                      name='lastName'
                      id='region'
                      className='form-input'
                      value={values.lastName}
                      onChange={(e) => {
                        handleChange(e);
                        customChangeHandler && customChangeHandler(e);
                      }}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className='text-red-500 text-s mt-1'>
                    {touched.lastName && errors.lastName}
                  </div>
                </div>
              </div>
              <fieldset className='w-full mt-4'>
                <label htmlFor='street-address' className='text-base'>
                  Email
                </label>
                <div className='mt-2 mb-2'>
                  <input
                    disabled={isDisabled}
                    id='street-address'
                    name='email'
                    value={values.email}
                    autoComplete='street-address'
                    placeholder='Email'
                    className='form-input'
                    onChange={(e) => {
                      handleChange(e);
                      customChangeHandler && customChangeHandler(e);
                    }}
                    onBlur={handleBlur}
                  />
                </div>
                <div className='text-red-500 text-s mt-1'>
                  {touched.email && errors.email}
                </div>
              </fieldset>
              <fieldset className='w-full mt-4'>
                <label htmlFor='street-address' className='text-base'>
                  Street Address
                </label>
                <div className='mt-2 mb-2'>
                  <input
                    disabled={isDisabled}
                    id='street-address'
                    name='address1'
                    value={values.address1}
                    autoComplete='street-address'
                    placeholder='Street Address'
                    className='form-input'
                    onChange={(e) => {
                      handleChange(e);
                      customChangeHandler && customChangeHandler(e);
                    }}
                    onBlur={handleBlur}
                  />
                </div>
                <div className='text-red-500 text-s mt-1'>
                  {touched.address1 && errors.address1}
                </div>
              </fieldset>
              {!isDisabled && !showSecondLine && (
                <span className='text-indigo-600 mt-2 mb-2'>
                  <button type='button' onClick={() => setShowSecondLine(true)}>
                    + Add Address Line 2
                  </button>
                </span>
              )}
              <fieldset
                className='w-full mt-4'
                style={{ display: showSecondLine ? 'unset' : 'none' }}
                id='AddAddressLine'
              >
                <label htmlFor='address2' className='text-base'>
                  Address 2
                </label>
                <div className='mt-2'>
                  <input
                    disabled={isDisabled}
                    id='address2'
                    name='address2'
                    value={values.address2}
                    autoComplete='address2'
                    placeholder='Address 2'
                    onChange={(e) => {
                      handleChange(e);
                      customChangeHandler && customChangeHandler(e);
                    }}
                    onBlur={handleBlur}
                    className='form-input'
                  />
                </div>
              </fieldset>
              <fieldset className='w-full mt-4'>
                <label htmlFor='Apt-suit' className='text-base'>
                  Apt/Suit/Other(optional)
                </label>
                <div className='mt-2'>
                  <input
                    disabled={isDisabled}
                    id='Apt-suit'
                    name='suite'
                    value={values.suite}
                    autoComplete='Apt-suit'
                    placeholder='Apt/Suit/Other(optional)'
                    className='form-input'
                    onChange={(e) => {
                      handleChange(e);
                      customChangeHandler && customChangeHandler(e);
                    }}
                    onBlur={handleBlur}
                  />
                </div>
                <div className='text-red-500 text-s mt-1'>
                  {touched.suite && errors.suite}
                </div>
              </fieldset>

              <div className='mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                <div className='sm:col-span-3'>
                  <label htmlFor='Zip-code' className='text-base'>
                    Zip Code
                  </label>
                  <div className='mt-1'>
                    <input
                      disabled={isDisabled}
                      id='Zip-code'
                      name='postalCode'
                      autoComplete='Zip-code'
                      value={values.postalCode}
                      placeholder='Zip Code'
                      className='form-input'
                      onChange={(e) => {
                        handleChange(e);
                        customChangeHandler && customChangeHandler(e);
                      }}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className='text-red-500 text-s mt-1'>
                    {touched.postalCode && errors.postalCode}
                  </div>
                </div>
                <div className='sm:col-span-3'>
                  <label htmlFor='Phone Number' className='text-base'>
                    Company Name
                  </label>
                  <div className='mt-1'>
                    <input
                      disabled={isDisabled}
                      id='Company Name'
                      name='companyName'
                      autoComplete='Company Name'
                      placeholder='Company Name'
                      value={values.companyName}
                      className='form-input'
                      onChange={(e) => {
                        handleChange(e);
                        customChangeHandler && customChangeHandler(e);
                      }}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className='text-red-500 text-s mt-1'>
                    {touched.companyName && errors.companyName}
                  </div>
                </div>
              </div>

              <div className='mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                <div className='sm:col-span-3'>
                  <label htmlFor='Phone Number' className='text-base'>
                    Phone Number
                  </label>
                  <div className='mt-1'>
                    <input
                      disabled={isDisabled}
                      id='Phone Number'
                      name='phone'
                      autoComplete='Phone Number'
                      placeholder='1-(000)-000-0000'
                      value={values.phone}
                      className='form-input'
                      onChange={(e) => {
                        handleChange(e);
                        customChangeHandler && customChangeHandler(e);
                      }}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className='text-red-500 text-s mt-1'>
                    {touched.phone && errors.phone}
                  </div>
                </div>
                <div className='sm:col-span-3'>
                  <label htmlFor='region' className='block text-base'>
                    Fax
                  </label>
                  <div className='mt-1'>
                    <input
                      disabled={isDisabled}
                      name='fax'
                      id='region'
                      className='form-input'
                      onChange={(e) => {
                        handleChange(e);
                        customChangeHandler && customChangeHandler(e);
                      }}
                      value={values.fax}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className='text-red-500 text-s mt-1'>
                    {touched.fax && errors.fax}
                  </div>
                </div>
              </div>
              <div className='mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                <div className='sm:col-span-3'>
                  <label htmlFor='city' className='block text-base'>
                    City
                  </label>
                  <div className='mt-1'>
                    <input
                      disabled={isDisabled}
                      name='city'
                      value={values.city}
                      id='city'
                      className='form-input'
                      onChange={(e) => {
                        handleChange(e);
                        customChangeHandler && customChangeHandler(e);
                      }}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className='text-red-500 text-s mt-1'>
                    {touched.city && errors.city}
                  </div>
                </div>
                <div className='sm:col-span-3'>
                  <label htmlFor='region' className='block text-base'>
                    State / Province
                  </label>
                  <div className='mt-1'>
                    <select
                      disabled={isDisabled}
                      id='state'
                      name='state'
                      autoComplete='country-name'
                      className='form-input'
                      onChange={(e) => {
                        handleChange(e);
                        customChangeHandler && customChangeHandler(e);
                      }}
                      onBlur={handleBlur}
                      value={values.state}
                    >
                      <option>Select State</option>
                      {state.map((res, index) => (
                        <option key={index}>{res?.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className='text-red-500 text-s mt-1'>
                    {touched.state && errors.state}
                  </div>
                </div>
              </div>
              {hideButtons && (
                <div className='mt-4'>
                  <label className='block text-base'>
                    <input
                      disabled={isDisabled}
                      type='checkbox'
                      checked={values.isDefault}
                      onChange={(e) =>
                        setFieldValue('isDefault', e.target.checked)
                      }
                    />
                    <span className='ml-1 text-base'>Set as default</span>
                  </label>
                </div>
              )}
            </form>
          </div>
          {hideButtons && (
            <div className='flex items-center justify-between p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
              <button
                data-modal-toggle='AddNewAddress'
                className='btn btn-outline-primary'
                onClick={closePopupHandler}
              >
                Cancel
              </button>
              <button
                type='submit'
                disabled={isSubmitting}
                data-modal-toggle='AddNewAddress'
                onClick={submitForm}
                className='btn btn-primary'
              >
                Save
              </button>
            </div>
          )}
        </>
      )}
    </Formik>
  );
};

export default AddressForm;
