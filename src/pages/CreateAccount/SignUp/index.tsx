import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

import RedefineFwInput from 'Components/SignUp/RedefineFwInput';
import RedefineInput from 'Components/SignUp/RedefineInput';
import RedefineSelect from 'Components/SignUp/RedefineSelect';
import { paths, queryParam } from 'constants/paths.constant';
import { signupPageMessages } from 'constants/validationMessages';
import { _SignUpPayload } from 'definations/APIs/signUp.req';
import { _Country, _Industry, _State } from 'definations/user.type';
import getLocation from 'helpers/getLocation';
import { useTypedSelector } from 'hooks';
import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import {
  CreateNewAccount,
  GetCountriesList,
  GetIndustriesList,
  GetStatesList,
} from 'services/user.service';
import * as Yup from 'yup';

const _SignupSchema = Yup.object().shape({
  firstname: Yup.string().required(signupPageMessages.firstname.required),
  lastName: Yup.string().required(signupPageMessages.lastName.required),
  companyId: Yup.string().when('showIndustries', {
    is: true,
    then: Yup.string().required(signupPageMessages.companyId.required),
  }),
  email: Yup.string().email().required(signupPageMessages.email.required),
  password: Yup.string().required(signupPageMessages.password.required),
  confirmPassword: Yup.string().test(
    'passwords-match',
    signupPageMessages.confirmPassword.mustMatch,
    function (value) {
      return this.parent.password === value;
    },
  ),
  storeCustomerAddress: Yup.array()
    .of(
      Yup.object().shape({
        address1: Yup.string().required(
          signupPageMessages.storeCustomerAddress.address1.required,
        ),
        address2: Yup.string().required(
          signupPageMessages.storeCustomerAddress.address2.required,
        ),
        city: Yup.string().required(
          signupPageMessages.storeCustomerAddress.city.required,
        ),
        state: Yup.string().required(
          signupPageMessages.storeCustomerAddress.state.required,
        ),
        postalCode: Yup.string().required(
          signupPageMessages.storeCustomerAddress.postalCode.required,
        ),
        phone: Yup.string().required(
          signupPageMessages.storeCustomerAddress.phone.required,
        ),
        countryName: Yup.string().required(
          signupPageMessages.storeCustomerAddress.countryName.required,
        ),
      }),
    )
    .min(1),
});

const _SignUpInitials = {
  showIndustries: false,
  id: 0,
  details: '',
  rowVersion: '',
  location: '',
  ipAddress: '',
  macAddress: '',
  firstname: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  companyName: '',
  companyId: 0,
  sharedCustomerId: 0,
  customerType: '',
  storeId: 0,
  isTaxableuser: false,
  storeCustomerAddress: [
    {
      id: 0,
      rowVersion: '',
      location: '',
      ipAddress: '',
      macAddress: '',
      customerId: 0,
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
      countryCode: '',
      addressType: '',
      isDefault: false,
      recStatus: 'A',
    },
  ],
  recStatus: 'A',
};

const SignUp: NextPage = () => {
  const router = useRouter();
  const [stateContries, setStateContries] = useState<{
    state: _State[] | null;
    country: _Country[] | null;
  }>({
    state: null,
    country: null,
  });
  const [industries, setIndustries] = useState<null | _Industry[]>(null);
  const display = '';

  /* -------------------------------- STATES ------------------------------  */
  const { layout: storeLayout, id: storeId } = useTypedSelector(
    (state) => state.store,
  );

  /* ------------------------------- FUNCTIONS ------------------------------  */
  const loginSubmitHandler = async (
    enteredInputs: typeof _SignUpInitials,
    // actions: FormikHelpers<typeof _SignUpInitials>,
  ) => {
    const location = await getLocation();

    const payload: _SignUpPayload = {
      storeCustomerModel: {
        ...enteredInputs,
        location: `${location.city}, ${location.state}, ${location.country_name}, ${location.postal}`,
        ipAddress: location.IPv4,
        storeId: storeId!,
        customerType: 'corporate',
        storeCustomerAddress: [
          {
            ...enteredInputs.storeCustomerAddress[0],
            addressType: 'b',
            firstname: enteredInputs.firstname,
            lastName: enteredInputs.lastName,
            email: enteredInputs.email,
            recStatus: 'A',
          },
        ],
        recStatus: 'A',
      },
    };
    CreateNewAccount(payload).then(() => router.push(paths.HOME));
    // .catch((err) => console.log('err', err));
    // .finally(() => console.log('close loader'));
  };

  const getStatesList = (id: number) => {
    GetStatesList(id).then((state) => {
      setStateContries((country) => ({
        ...country,
        state: state,
      }));
    });
  };

  useEffect(() => {
    GetCountriesList()
      .then((countries) => {
        setStateContries({ state: null, country: countries });
        return countries[0].id;
      })
      .then(getStatesList);

    GetIndustriesList().then((indus) => setIndustries(indus));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* -------------------------------- VIEW ------------------------------  */
  const CreateMyAccountForm = (
    <Formik
      initialValues={{
        ..._SignUpInitials,
        showIndustries: storeLayout === _Store.type3,
      }}
      onSubmit={loginSubmitHandler}
      validationSchema={_SignupSchema}
    >
      {({ values, handleChange, setFieldValue }) => {
        return (
          <Form>
            <div className="w-full mx-auto max-w-7xl">
              <div className="flex flex-wrap -mx-3 gap-y-6">
                {storeLayout === _Store.type3 && industries !== null && (
                  <RedefineSelect
                    label={'Country'}
                    placeHolder={'Select Country'}
                    name={'companyId'}
                    value={values.companyId}
                    options={industries}
                    onChange={(event) => {
                      setFieldValue('companyId', event.target.value);
                      getStatesList(+event?.target.value);
                    }}
                    required={false}
                  />
                )}
                <RedefineInput
                  required={false}
                  label={'First Name'}
                  placeHolder={'Enter Your First Name'}
                  name={'firstname'}
                  value={values.firstname}
                  type={'text'}
                  onChange={(event) => handleChange(event)}
                />
                <RedefineInput
                  required={false}
                  label={'Last Name'}
                  placeHolder={'Enter Your Last Name'}
                  name={'lastName'}
                  value={values.lastName}
                  type={'text'}
                  onChange={(event) => handleChange(event)}
                />
                <RedefineInput
                  required={false}
                  label={'Company Name'}
                  placeHolder={'Enter Your Company Name'}
                  name={'companyName'}
                  value={values.companyName}
                  type={'text'}
                  onChange={(event) => handleChange(event)}
                />
                <RedefineInput
                  required={false}
                  label={'Email Address'}
                  placeHolder={'Enter Email Address'}
                  name={'email'}
                  value={values.email}
                  type={'text'}
                  onChange={(event) => handleChange(event)}
                />
                <RedefineInput
                  required={false}
                  label={'Password'}
                  placeHolder={''}
                  name={'password'}
                  value={values.password}
                  type={'password'}
                  onChange={(event) => handleChange(event)}
                />
                <RedefineInput
                  required={false}
                  label={'Confirm Password'}
                  placeHolder={''}
                  name={'confirmPassword'}
                  value={values.confirmPassword}
                  type={'password'}
                  onChange={(event) => handleChange(event)}
                />

                {/* Address */}
                <RedefineInput
                  required={false}
                  label={'Phone Number'}
                  placeHolder={'Enter Your Phone Number'}
                  name={'storeCustomerAddress[0].phone'}
                  value={values.storeCustomerAddress[0].phone}
                  type={'text'}
                  onChange={(event) => handleChange(event)}
                />

                {/* <RedefineInput
                required={false}
                label={'Job Title'}
                placeHolder={'Enter Your Job Title'}
                name={'jobTitle'}
                value={values.jobTitle}
                type={'text'}
                onChange={(event) => handleChange(event)}
              /> */}

                <RedefineInput
                  required={false}
                  label={'Address 1'}
                  placeHolder={'Enter Your Address 1'}
                  name={'storeCustomerAddress[0].address1'}
                  value={values.storeCustomerAddress[0].address1}
                  type={'text'}
                  onChange={(event) => handleChange(event)}
                />
                <RedefineInput
                  required={false}
                  label={'Address 2'}
                  placeHolder={'Enter Your Address 2'}
                  name={'storeCustomerAddress[0].address2'}
                  value={values.storeCustomerAddress[0].address2}
                  type={'text'}
                  onChange={(event) => handleChange(event)}
                />
                <RedefineInput
                  required={false}
                  label={'Zip Code'}
                  placeHolder={'Enter Your Zip Code'}
                  name={'storeCustomerAddress[0].postalCode'}
                  value={values.storeCustomerAddress[0].postalCode}
                  type={'text'}
                  onChange={(event) => handleChange(event)}
                />
                <RedefineInput
                  required={false}
                  label={'City'}
                  placeHolder={'Enter Your City'}
                  name={'storeCustomerAddress[0].city'}
                  value={values.storeCustomerAddress[0].city}
                  type={'text'}
                  onChange={(event) => handleChange(event)}
                />
                {stateContries.country !== null && (
                  <RedefineSelect
                    label={'Country'}
                    placeHolder={'Select Country'}
                    name={'storeCustomerAddress[0].countryName'}
                    value={values.storeCustomerAddress[0].countryName}
                    options={stateContries.country}
                    onChange={(event) => {
                      setFieldValue(
                        'storeCustomerAddress[0].countryName',
                        event.target.value,
                      );
                      getStatesList(+event?.target.value);
                    }}
                    required={false}
                  />
                )}
                {stateContries.state !== null && (
                  <RedefineSelect
                    label={'State'}
                    placeHolder={'Select State'}
                    name={'storeCustomerAddress[0].state'}
                    value={values.storeCustomerAddress[0].state}
                    options={stateContries.state}
                    onChange={(event) =>
                      setFieldValue(
                        'storeCustomerAddress[0].state',
                        +event.target.value,
                      )
                    }
                    required={false}
                  />
                )}

                {storeLayout === _Store.type3 && (
                  <RedefineFwInput
                    label={`Please tell us about your company, and how you would like to use
          the Patagonia co-branded gear`}
                    placeHolder={''}
                    name={'details'}
                    value={values.details}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleChange(event)
                    }
                    type={'text'}
                    required={false}
                  />
                )}
                <div className="w-full lg:w-full px-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );

  if (storeLayout === _Store.type2) {
    if (display === undefined) {
      router.push('/home');
    }
    return (
      <>
        {display === queryParam.TEAM && (
          <section className="container mx-auto mt-8 mb-8">
            <div className="">
              <Formik
                initialValues={_SignUpInitials}
                onSubmit={loginSubmitHandler}
              >
                {({ values, handleChange }) => {
                  return (
                    <Form>
                      <div className="w-full mx-auto max-w-7xl">
                        <div className="text-xl md:text-2xl lg:text-sub-title font-sub-title pb-2 mb-4 border-b border-b-gray-300">
                          Personal Information
                        </div>
                        <div className="flex flex-wrap -mx-3 gap-y-6 mb-8">
                          <RedefineInput
                            label={'First Name'}
                            placeHolder={'First Name'}
                            name={'firstName'}
                            value={values.firstname}
                            onChange={(event) => handleChange(event)}
                            type={'text'}
                            required={true}
                          />
                          <RedefineInput
                            label={'Last Name'}
                            placeHolder={'Last Name'}
                            name={'lastName'}
                            value={values.lastName}
                            onChange={(event) => handleChange(event)}
                            type={'text'}
                            required={true}
                          />
                          {/* <RedefineSelect
                            label={'Gender'}
                            placeHolder={''}
                            name={'gender'}
                            value={values.gender}
                            options={[
                              { value: 'male', label: 'Male' },
                              { value: 'female', label: 'Female' },
                            ]}
                            onChange={(event) => {
                              handleChange(event);
                            }}
                            required={true}
                          /> */}
                          <RedefineInput
                            label={'Email Address'}
                            placeHolder={'Email Address'}
                            name={'email'}
                            value={values.email}
                            onChange={(event) => handleChange(event)}
                            type={'text'}
                            required={true}
                          />
                          {/* <RedefineInput
                            label={'Phone'}
                            placeHolder={'Phone'}
                            name={'phone'}
                            value={values.phone}
                            onChange={(event) => handleChange(event)}
                            type={'text'}
                            required={true}
                          /> */}
                          {/* <RedefineSelect
                            label={'Primary Sport'}
                            placeHolder={'Primary Sport'}
                            name={'primarySport'}
                            value={''}
                            options={[{ value: 'soccer', label: 'Soccer' }]}
                            onChange={(event) => {
                              handleChange(event);
                            }}
                            required={true}
                          /> */}
                          <RedefineInput
                            label={'Password'}
                            placeHolder={'Password'}
                            name={'password'}
                            value={values.password}
                            onChange={(event) => handleChange(event)}
                            type={'password'}
                            required={true}
                          />
                          <RedefineInput
                            label={'Confirm Password'}
                            placeHolder={'Confirm Password'}
                            name={'confirmPassword'}
                            value={values.confirmPassword}
                            onChange={(event) => handleChange(event)}
                            type={'password'}
                            required={true}
                          />
                          {/* <RedefineInput
                            label={'Birthdate'}
                            placeHolder={'MM/DD/YYYY'}
                            name={'firstName'}
                            value={values.firstName}
                            onChange={(event) => handleChange(event)}
                            type={'text'}
                            required={false}
                          /> */}
                        </div>
                      </div>

                      {/* ----------------------------------- */}
                      {/* <div className="w-full mx-auto max-w-7xl">
                        <div className="text-xl md:text-2xl lg:text-sub-title font-sub-title pb-2 mb-4 border-b border-b-gray-300">
                          Your School / University / Organization Details
                        </div>
                        <div className="flex flex-wrap -mx-3 gap-y-6 mb-8">
                          <RedefineInput
                            label={'School / University / Organization Name'}
                            placeHolder={'Address 1'}
                            name={'instituteName'}
                            value={''}
                            onChange={(event) => handleChange(event)}
                            type={'number'}
                            required={false}
                          />
                          <RedefineSelect
                            label={'School / Organization Type'}
                            placeHolder={'Select Organization Type'}
                            name={''}
                            value={''}
                            options={[{ value: 'soccer', label: 'Soccer' }]}
                            onChange={(event) => {
                              handleChange(event);
                            }}
                            required={true}
                          />
                        </div>
                      </div> */}

                      {/* ------------------------------------ */}
                      {/* <div className="w-full mx-auto max-w-7xl">
                        <div className="text-xl md:text-2xl lg:text-sub-title font-sub-title pb-2 mb-4 border-b border-b-gray-300">
                          Your Address
                        </div>
                        <div className="flex flex-wrap -mx-3 gap-y-6 mb-8">
                          <RedefineInput
                            label={'Address 1'}
                            placeHolder={'Address 1 '}
                            name={'address1'}
                            value={''}
                            onChange={(event) => handleChange(event)}
                            type={'number'}
                            required={false}
                          />
                          <RedefineInput
                            label={'City'}
                            placeHolder={'City'}
                            name={'instituteName'}
                            value={''}
                            onChange={(event) => handleChange(event)}
                            type={'number'}
                            required={false}
                          />
                          <RedefineSelect
                            label={'Country'}
                            placeHolder={'Select Country'}
                            name={'country'}
                            value={''}
                            options={[{ value: 'soccer', label: 'Soccer' }]}
                            onChange={(event) => {
                              handleChange(event);
                            }}
                            required={true}
                          />
                          <div className="w-full lg:w-full px-3">
                            <button type={'submit'} className="btn btn-primary">
                              Sign Up
                            </button>
                          </div>
                        </div>
                      </div> */}
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </section>
        )}
        {display === queryParam.INDIVIDUAL && (
          <>
            <section className="container mx-auto mt-8 mb-8">
              <div className="">{CreateMyAccountForm}</div>
            </section>
          </>
        )}
      </>
    );
  }

  if (
    storeLayout === _Store.type1 ||
    storeLayout === _Store.type4 ||
    storeLayout === _Store.type3
  ) {
    return (
      <section className="container mx-auto  bg-gray-100 mb-6 ">
        <div className="gird grid-cols-1 lg:flex lg:items-center gap-6 lg:py-8 lg:px-12 px-4 py-4 lg:my-5">
          {CreateMyAccountForm}
        </div>
      </section>
    );
  }

  return <></>;
};

export default SignUp;
