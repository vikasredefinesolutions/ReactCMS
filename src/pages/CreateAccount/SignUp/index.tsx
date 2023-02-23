import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

import { __UserMessages } from '@constants/global.constant';
import RedefineFwInput from 'Components/SignUp/RedefineFwInput';
import RedefineInput from 'Components/SignUp/RedefineInput';
import RedefineSelect from 'Components/SignUp/RedefineSelect';
import RedefineStateNcountries from 'Components/SignUp/RedefineStateNcountries';
import {
  signup_payload,
  _Signup_Payload,
} from 'Components/SignUp/signup.payload';
import { paths, queryParam } from 'constants/paths.constant';
import {
  Gender,
  Mascot,
  OrganizationType,
  SportData,
  TeamGender,
  year,
} from 'constants/Signup.constant';
import { signupPageMessages } from 'constants/validationMessages';
import { _SignUpPayload } from 'definations/APIs/signUp.req';
import { _Industry } from 'definations/user.type';
import getLocation from 'helpers/getLocation';
import { useActions, useTypedSelector } from 'hooks';
import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import { CreateNewAccount, GetIndustriesList } from 'services/user.service';
import * as Yup from 'yup';

const _SignupSchema = Yup.object().shape({
  firstname: Yup.string().required(signupPageMessages.firstname.required),
  lastName: Yup.string().required(signupPageMessages.lastName.required),
  gender: Yup.string().required(signupPageMessages.Gender.required),
  companyName: Yup.string().required(signupPageMessages.companyName.required),
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

const _SignupSchemaWithOrganization = Yup.object().shape({
  firstname: Yup.string().required(signupPageMessages.firstname.required),
  lastName: Yup.string().required(signupPageMessages.lastName.required),
  companyName: Yup.string().required(signupPageMessages.companyName.required),
  companyId: Yup.string().when('showIndustries', {
    is: true,
    then: Yup.string().required(signupPageMessages.companyId.required),
  }),
  primarySport: Yup.string().required(),
  gender: Yup.string().required(),
  email: Yup.string().email().required(signupPageMessages.email.required),
  password: Yup.string().required(signupPageMessages.password.required),
  confirmPassword: Yup.string().test(
    'passwords-match',
    signupPageMessages.confirmPassword.mustMatch,
    function (value) {
      return this.parent.password === value;
    },
  ),
  organization: Yup.object().shape({
    organizationName: Yup.string().required(),
    organizationType: Yup.string(),
    mascot: Yup.string().required(),
    teamgender: Yup.string().required(),
    city: Yup.string().required(),
    postalCode: Yup.string().required(),
    organizationEmail: Yup.string()
      .email()
      .required(signupPageMessages.email.required),
    organizationAddress1: Yup.string().required(),
  }),
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
const SignUp: NextPage = () => {
  const router = useRouter();
  const { showModal } = useActions();
  const [industries, setIndustries] = useState<null | _Industry[]>(null);
  const display = router.query._t;

  /* -------------------------------- STATES ------------------------------  */
  const { layout: storeLayout, id: storeId } = useTypedSelector(
    (state) => state.store,
  );

  /* ------------------------------- FUNCTIONS ------------------------------  */
  const loginSubmitHandler = async (enteredInputs: _Signup_Payload) => {
    const location = await getLocation();

    const payload: _SignUpPayload = {
      storeCustomerModel: {
        ...enteredInputs,
        location: `${location.city}, ${location.region}, ${location.country}, ${location.postal_code}`,
        ipAddress: location.ip_address,
        storeId: storeId!,
        customerType: 'corporate',
        storeCustomerAddress: [
          {
            ...enteredInputs.storeCustomerAddress[0],
            addressType: 'B',
            CompanyName: enteredInputs.companyName,
            firstname: enteredInputs.firstname,
            lastName: enteredInputs.lastName,
            email: enteredInputs.email,
            recStatus: 'A',
          },
        ],
        recStatus: 'A',
      },
    };
    CreateNewAccount(payload).then((res) => {
      if (res === null || typeof res === 'string') {
        showModal({
          message: res || __UserMessages.signUpPage.SomethingWentWrong,
          title: 'Error',
        });
        return;
      }
      showModal({
        message: __UserMessages.signUpPage.SuccessFullyAccountCreated,
        title: 'Success',
      });
      router.push(paths.HOME);
    });
  };

  useEffect(() => {
    GetIndustriesList().then((indus) => setIndustries(indus));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [schoolColor, setSchoolColor] = useState<string>('#ffffff');
  /* -------------------------------- VIEW ------------------------------  */
  const CreateMyAccountForm = (
    <Formik
      initialValues={{
        ...signup_payload,
        storeCustomerAddress: [
          {
            ...signup_payload.storeCustomerAddress[0],
            state: '',
            countryCode: '',
            countryName: '',
          },
        ],
        showIndustries: storeLayout === _Store.type3,
      }}
      onSubmit={loginSubmitHandler}
      validationSchema={_SignupSchema}
    >
      {({ values, handleChange, setFieldValue, errors }) => {
        return (
          <Form>
            <div className='w-full mx-auto max-w-7xl'>
              <div className='text-base md:text-xl  pb-2 mb-4'>
                Personal Information
              </div>
              <div className='flex flex-wrap -mx-3 gap-y-6'>
                {storeLayout === _Store.type3 && industries !== null && (
                  <>
                    <RedefineSelect
                      label={'Industry'}
                      placeHolder={'Select Industry'}
                      name={'companyId'}
                      value={values.companyId}
                      options={industries}
                      onChange={(event) => {
                        setFieldValue('companyId', event.target.value);
                      }}
                      required={false}
                    />
                  </>
                )}
                <RedefineInput
                  required={true}
                  label={'First Name'}
                  placeHolder={'Enter Your First Name'}
                  name={'firstname'}
                  value={values.firstname}
                  type={'text'}
                  onChange={(event) => handleChange(event)}
                />
                <RedefineInput
                  required={true}
                  label={'Last Name'}
                  placeHolder={'Enter Your Last Name'}
                  name={'lastName'}
                  value={values.lastName}
                  type={'text'}
                  onChange={(event) => handleChange(event)}
                />
                <RedefineInput
                  required={true}
                  label={'Company Name'}
                  placeHolder={'Enter Your Company Name'}
                  name={'companyName'}
                  value={values.companyName}
                  type={'text'}
                  onChange={(event) => handleChange(event)}
                />
                <RedefineInput
                  required={true}
                  label={'Phone Number'}
                  placeHolder={'Enter Your Phone Number'}
                  name={'storeCustomerAddress[0].phone'}
                  value={values.storeCustomerAddress[0].phone}
                  type={'text'}
                  onChange={(event) => handleChange(event)}
                />
                <RedefineInput
                  required={true}
                  label={'Email Address'}
                  placeHolder={'Enter Email Address'}
                  name={'email'}
                  value={values.email}
                  type={'text'}
                  onChange={(event) => handleChange(event)}
                />
                <RedefineInput
                  required={false}
                  label={'Job Title'}
                  placeHolder={'Enter Your Job Title'}
                  name={'jobTitle'}
                  value={values.jobTitle}
                  type={'text'}
                  onChange={(event) => {
                    handleChange(event);
                  }}
                />
                <RedefineInput
                  required={true}
                  label={'Password'}
                  placeHolder={''}
                  name={'password'}
                  value={values.password}
                  type={'password'}
                  onChange={(event) => handleChange(event)}
                />
                <RedefineInput
                  required={true}
                  label={'Confirm Password'}
                  placeHolder={''}
                  name={'confirmPassword'}
                  value={values.confirmPassword}
                  type={'password'}
                  onChange={(event) => handleChange(event)}
                />

                {/* Address */}

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

                <RedefineStateNcountries
                  name1={'storeCustomerAddress[0].countryName'}
                  name2={'storeCustomerAddress[0].state'}
                  value1={values.storeCustomerAddress[0].countryName}
                  value2={values.storeCustomerAddress[0].state}
                  setFieldValue={setFieldValue}
                  values={values}
                />
                <RedefineSelect
                  label={'Gender'}
                  placeHolder={'Select Gender'}
                  name={'gender'}
                  value={values.gender}
                  options={Gender}
                  onChange={(event) => {
                    setFieldValue('gender', event.target.value);
                    handleChange(event);
                  }}
                  required={true}
                />

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
                <div className='w-full lg:w-full px-3'>
                  <button type='submit' className='btn btn-primary'>
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
      router.push(paths.HOME);
    }
    return (
      <>
        {display === queryParam.TEAM && (
          <section className='container mx-auto mt-8 mb-8'>
            <div className=''>
              <Formik
                initialValues={{
                  ...signup_payload,
                  storeCustomerAddress: [
                    {
                      ...signup_payload.storeCustomerAddress[0],
                      state: '',
                      countryCode: '',
                      countryName: '',
                    },
                  ],
                  showIndustries: storeLayout === _Store.type3,
                }}
                onSubmit={loginSubmitHandler}
                validationSchema={_SignupSchemaWithOrganization}
              >
                {({ values, handleChange, setFieldValue, errors }) => {
                  return (
                    <Form>
                      <div className='w-full mx-auto max-w-7xl'>
                        <div className='text-xl md:text-2xl lg:text-sub-title font-sub-title pb-2 mb-4 border-b border-b-gray-300'>
                          Personal Information
                        </div>
                        <div className='flex flex-wrap -mx-3 gap-y-6 mb-8'>
                          <RedefineInput
                            required={true}
                            label={'First Name'}
                            placeHolder={'Enter Your First Name'}
                            name={'firstname'}
                            value={values.firstname}
                            type={'text'}
                            onChange={(event) => handleChange(event)}
                          />
                          <RedefineInput
                            label={'Last Name'}
                            placeHolder={'Enter Your Last Name'}
                            name={'lastName'}
                            value={values.lastName}
                            onChange={(event) => handleChange(event)}
                            type={'text'}
                            required={true}
                          />
                          <RedefineSelect
                            label={'Gender'}
                            placeHolder={'Select Gender'}
                            name={'gender'}
                            value={values.gender}
                            options={Gender}
                            onChange={(event) => {
                              setFieldValue('gender', event.target.value);
                              handleChange(event);
                            }}
                            required={true}
                          />
                          <RedefineInput
                            label={'Email Address'}
                            placeHolder={'Email Address'}
                            name={'email'}
                            value={values.email}
                            onChange={(event) => handleChange(event)}
                            type={'text'}
                            required={true}
                          />
                          <RedefineInput
                            required={false}
                            label={'Phone Number'}
                            placeHolder={'Enter Your Phone Number'}
                            name={'storeCustomerAddress[0].phone'}
                            value={values.storeCustomerAddress[0].phone}
                            type={'text'}
                            onChange={(event) => handleChange(event)}
                          />
                          <RedefineSelect
                            label={'Primary Sport'}
                            placeHolder={'Primary Sport'}
                            name={'primarySport'}
                            value={values.primarySport}
                            options={SportData}
                            onChange={(event) => {
                              handleChange(event);
                            }}
                            required={true}
                          />
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
                          <RedefineInput
                            label={'BirthDate'}
                            placeHolder={'MM/DD/YYYY'}
                            name={'birthDate'}
                            value={values.birthDate}
                            onChange={(event) => {
                              setFieldValue('birthDate', event.target.value);
                            }}
                            type={'date'}
                            required={false}
                          />
                        </div>
                      </div>

                      {/* ----------------------------------- */}
                      <div className='w-full mx-auto max-w-7xl'>
                        <div className='text-xl md:text-2xl lg:text-sub-title font-sub-title pb-2 mb-4 border-b border-b-gray-300'>
                          Your School / University / Organization Details
                        </div>
                        <div className='flex flex-wrap -mx-3 gap-y-6 mb-8'>
                          <RedefineInput
                            label={'School / University / Organization Name'}
                            placeHolder={
                              'School / University / Organization Name'
                            }
                            name={'organizationName'}
                            value={values.organization.organizationName}
                            onChange={(event) => {
                              handleChange(event);
                            }}
                            type={'text'}
                            required={true}
                          />
                          <RedefineSelect
                            label={'SCHOOL / ORGANIZATION TYPE'}
                            placeHolder={'Select Organization Type'}
                            name={'organization.organizationType'}
                            value={values.organization.organizationType}
                            options={OrganizationType}
                            onChange={(event) => {
                              setFieldValue(
                                'organizationType',
                                event.target.value,
                              );
                              // handleChange(event);
                            }}
                            required={false}
                          />
                          <RedefineInput
                            required={true}
                            label={'YOUR POSITION'}
                            placeHolder={'Enter Your Job POSITION'}
                            name={'jobTitle'}
                            value={values.jobTitle}
                            type={'text'}
                            onChange={(event) => {
                              handleChange(event);
                            }}
                          />
                          <RedefineInput
                            label={'Email Address'}
                            placeHolder={'Email Address'}
                            name={'organization.organizationEmail'}
                            value={values.organization.organizationEmail}
                            onChange={(event) => handleChange(event)}
                            type={'text'}
                            required={true}
                          />
                          <RedefineInput
                            label={'Address 1'}
                            placeHolder={'Address 1 '}
                            name={'organization.organizationAddress1'}
                            value={values.organization.organizationAddress1}
                            onChange={(event) => handleChange(event)}
                            type={'text'}
                            required={true}
                          />
                          <RedefineInput
                            required={true}
                            label={'Zip Code'}
                            placeHolder={'Enter Your Zip Code'}
                            name={'organization.postalCode'}
                            value={values.organization.postalCode}
                            type={'text'}
                            onChange={(event) => handleChange(event)}
                          />
                          <RedefineInput
                            required={true}
                            label={'City'}
                            placeHolder={'Enter Your City'}
                            name={'organization.city'}
                            value={values.organization.city}
                            type={'text'}
                            onChange={(event) => handleChange(event)}
                          />

                          <RedefineStateNcountries
                            name1={'organization.countries'}
                            name2={'organization.state'}
                            value1={values.organization.countryName}
                            value2={values.organization.state}
                            setFieldValue={setFieldValue}
                            values={values}
                          />
                          <RedefineSelect
                            label={'TIME OF YEAR YOU PURCHASE'}
                            placeHolder={'Select Time of Year You Purchase'}
                            name={'organization.purchaseTime'}
                            value={values.organization.purchaseTime}
                            options={year}
                            onChange={(event) => {
                              setFieldValue('purchaseTime', event.target.value);
                              handleChange(event);
                            }}
                            required={false}
                          />
                          <RedefineSelect
                            label={'Team Gender'}
                            placeHolder={'Select Team Gender'}
                            name={'organization.teamgender'}
                            value={values.organization.teamgender}
                            options={TeamGender}
                            onChange={(event) => {
                              setFieldValue('teamgender', event.target.value);
                              handleChange(event);
                            }}
                            required={true}
                          />
                          <div className='w-full lg:w-1/2 px-3'>
                            <label className='block text-base font-medium text-gray-700'>
                              Number Of Players OR Members
                            </label>
                            <div className='mt-1 flex items-center gap-2'>
                              <input
                                type='text'
                                id='minTeamMember'
                                name='organization.minTeamMember'
                                placeholder=''
                                value={values.organization.minTeamMember}
                                className='form-input'
                              />{' '}
                              <span>-</span>{' '}
                              <input
                                type='text'
                                id='maxTeamMember'
                                name='organization.maxTeamMember'
                                placeholder=''
                                value={values.organization.maxTeamMember}
                                className='form-input'
                              />
                            </div>
                          </div>
                          <RedefineSelect
                            label={'Mascot'}
                            placeHolder={'Mascot'}
                            name={'organization.mascot'}
                            value={values.organization.mascot}
                            options={Mascot}
                            onChange={(event) => {
                              setFieldValue('mascot', event.target.value);
                              handleChange(event);
                            }}
                            required={false}
                          />
                          <div className='w-full lg:w-1/2 px-3'>
                            <label className='block text-base font-medium text-gray-700'>
                              Select Color Of School / University / Organization
                            </label>
                            <div className='mt-1 flex items-center gap-2'>
                              <span className=''>Primary Color</span>
                              {/* <div className='w-9 h-9 bg-slate-500 rounded-full'></div> */}
                              <input
                                type='color'
                                id='primarycolor'
                                name='primarycolor'
                                value={schoolColor}
                                onChange={(e) => {
                                  setFieldValue('primarycolor', e.target.value);
                                  setSchoolColor(e.target.value);
                                }}
                                className='w-9 h-9'
                              />
                            </div>
                          </div>
                          {/* <BlockPicker />
                          <GithubPicker /> */}
                          {/* <input
                            type='color'
                            id=''
                            name=''
                            placeholder=''
                            value=''
                            className='form-input'
                          /> */}
                          {/* <RedefineSelect
                            label={'School / Organization Type'}
                            placeHolder={'Select Organization Type'}
                            name={''}
                            value={''}
                            // options={[{ value: 'soccer', label: 'Soccer' }]}
                            onChange={(event) => {
                              handleChange(event);
                            }}
                            required={true}
                            options={[]}
                          /> */}
                        </div>
                      </div>

                      {/* ------------------------------------ */}
                      <div className='w-full mx-auto max-w-7xl'>
                        <div className='text-xl md:text-2xl lg:text-sub-title font-sub-title pb-2 mb-4 border-b border-b-gray-300'>
                          Your Address
                        </div>
                        <div className='flex flex-wrap -mx-3 gap-y-6 mb-8'>
                          <RedefineInput
                            label={'Address 1'}
                            placeHolder={'Address 1 '}
                            name={'storeCustomerAddress[0].address1'}
                            value={values.storeCustomerAddress[0].address1}
                            onChange={(event) => handleChange(event)}
                            type={'text'}
                            required={false}
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
                          {/* <RedefineSelect
                            label={'Country'}
                            placeHolder={'Select Country'}
                            name={'country'}
                            value={''}
                            // options={[{ value: 'soccer', label: 'Soccer' }]}
                            onChange={(event) => {
                              handleChange(event);
                            }}
                            required={true}
                            options={[]}
                          /> */}

                          <RedefineStateNcountries
                            name1={'storeCustomerAddress[0].countryName'}
                            name2={'storeCustomerAddress[0].state'}
                            value1={values.storeCustomerAddress[0].countryName}
                            value2={values.storeCustomerAddress[0].state}
                            setFieldValue={setFieldValue}
                            values={values}
                          />
                          <div className='w-full lg:w-full px-3'>
                            <button type={'submit'} className='btn btn-primary'>
                              Sign Up
                            </button>
                          </div>
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </section>
        )}
        {display === queryParam.INDIVIDUAL && (
          <>
            <section className='container mx-auto mt-8 mb-8'>
              <div className=''>{CreateMyAccountForm}</div>
            </section>
          </>
        )}
      </>
    );
  }

  return (
    <section className='container mx-auto  my-6 '>
      <div className='block mx-auto text-3xl item-centre uppercase mb-7 text-center font-medium '>
        <h1 className=''>Create New Customer Account</h1>
      </div>
      <div className='gird grid-cols-1 lg:flex lg:items-center gap-6 lg:py-8 lg:px-12 px-4 py-4 lg:my-5  bg-gray-100'>
        {CreateMyAccountForm}
      </div>
    </section>
  );
};

export default SignUp;
