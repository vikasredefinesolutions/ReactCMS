import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { UploadImage } from '@services/file.service';
import { SumbitRequestConsultationDetails } from '@services/requestConsultation.service';
import { _SubmitConsultationPayload } from '@type/requestConsultation.type';
import config from 'api.config';
import { Form, Formik } from 'formik';
import getLocation from 'helpers/getLocation';
import { useActions, useTypedSelector } from 'hooks';
import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import * as Yup from 'yup';

import Ecommerce_RequestSubmitted from './Ecommerce_RequestSubmitted';
import RequestInput from './RequestInput';
import RequestSelect from './RequestSelect';

type _RequestConsultation = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  preferedContactMethod: '' | 'MOBILE' | 'EMAIL';
  desiredQty: number;
  inHandDate: string;
  message: string;
};

const _RequestConsulationSchema = Yup.object().shape({
  firstName: Yup.string().required('Enter your first name.'),
  lastName: Yup.string().required('Enter your Last name.'),
  companyName: Yup.string().required('Enter Company name.'),
  email: Yup.string().required('Enter your email.'),
  phone: Yup.string().required('Enter your Phone.'),
  preferedContactMethod: Yup.string().required('Please Select Contact Method.'),
  desiredQty: Yup.number()
    .min(1, 'Enter desired quantity.')
    .required('Enter desired quantity.'),
  inHandDate: Yup.string(),
  message: Yup.string(),
});

const _RequestConsultationInitials: _RequestConsultation = {
  firstName: '',
  lastName: '',
  companyName: '',
  email: '',
  phone: '',
  preferedContactMethod: '',
  desiredQty: 0,
  inHandDate: '',
  message: '',
};

const RequestConsultationForm: React.FC<{
  productId: number;
  innerHeading?: boolean;
}> = ({ productId, innerHeading = false }) => {
  const router = useRouter();
  const [captchaVerified, setverifiedRecaptch] = useState<
    'NOT_VALID' | null | 'VALID'
  >(null);
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const [showLogo, setShowLogo] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const storeId = useTypedSelector((state) => state.store.id);
  const { setShowLoader } = useActions();

  const [fileToUpload, setFileToUpload] = useState<{
    logoPathURL: string;
    name: string;
    type: string;
    previewURL: string;
  } | null>(null);

  const captchaHandler = (value: any) => {
    setverifiedRecaptch('VALID');
  };

  const submitHandler = async (value: _RequestConsultation) => {
    if (!captchaVerified || captchaVerified === 'NOT_VALID') {
      setverifiedRecaptch('NOT_VALID');
      return;
    }
    setShowLoader(true);

    const location = await getLocation();

    const payload: _SubmitConsultationPayload = {
      consultationModel: {
        id: 0,
        rowVersion: '',
        location: `${location.city}, ${location.region}, ${location.country}, ${location.postal_code}`,
        ipAddress: location.ip_address,
        macAddress: '00-00-00-00-00-00',
        storeId: storeId!,
        productId: productId,
        firstname: value.firstName,
        lastname: value.lastName,
        company: value.companyName,
        email: value.email,
        phone: value.phone,
        contactMethod: value.preferedContactMethod === 'EMAIL' ? 0 : 1,
        desiredQuantity: value.desiredQty,
        inHandsDate: value.inHandDate,
        logoUrl: fileToUpload ? fileToUpload.logoPathURL : '',
        message: value.message,
        recStatus: 'A',
      },
    };

    SumbitRequestConsultationDetails(payload)
      .then((res) => {
        setFormSubmitted(true);
      })
      .finally(() => setShowLoader(false));
    setFormSubmitted(true);
  };

  const fileReader = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget === null || event.currentTarget.files === null)
      return;
    setShowLoader(true);

    const logoFileURL = await UploadImage({
      folderPath: config.imageFolderPath,
      files: event.currentTarget.files[0],
    });

    const file = {
      logoPathURL: logoFileURL,
      name: event.currentTarget.files[0].name,
      type: event.currentTarget.files[0].type,
      previewURL: URL.createObjectURL(event.currentTarget.files[0]),
    };

    setFileToUpload(file);
    setShowLoader(false);
  };

  return (
    <div
      className={innerHeading ? 'w-full bg-white p-3' : 'w-full lg:w-4/12 px-3'}
    >
      {formSubmitted && <Ecommerce_RequestSubmitted />}
      {!formSubmitted && (
        <Formik
          initialValues={_RequestConsultationInitials}
          onSubmit={submitHandler}
          validationSchema={_RequestConsulationSchema}
        >
          {({ values, handleChange, setFieldValue }) => {
            return (
              <Form>
                {innerHeading ? (
                  <h1 className='text-center page-title1 m-b-20 text-3xl font-bold mb-3'>
                    Request Consultation & Proof
                  </h1>
                ) : (
                  <></>
                )}
                <div
                  className={
                    innerHeading
                      ? 'flex flex-wrap  gap-y-4 border'
                      : 'flex flex-wrap -mx-3 gap-y-4'
                  }
                >
                  <div
                    className={innerHeading ? 'w-full p-3 pb-0' : 'w-full px-3'}
                  >
                    <div className='bg-gray-100 flex flex-wrap items-center justify-between p-1'>
                      <div className={innerHeading ? 'font-bold' : ''}>
                        Contact Information
                      </div>
                      <div className='text-red-500 text-xs'>
                        All fields marked * are required.
                      </div>
                    </div>
                  </div>
                  <div className='w-full px-3'>
                    <RequestInput
                      placeHolder={'First Name'}
                      name={'firstName'}
                      value={values.firstName}
                      onChange={handleChange}
                      type={'text'}
                      required={true}
                      className={'form-input'}
                    />
                  </div>
                  <div className='w-full px-3'>
                    <RequestInput
                      placeHolder={'Last Name'}
                      name={'lastName'}
                      value={values.lastName}
                      onChange={handleChange}
                      type={'text'}
                      required={true}
                      className={'form-input'}
                    />
                  </div>
                  <div className='w-full px-3'>
                    <RequestInput
                      placeHolder={'Company'}
                      name={'companyName'}
                      value={values.companyName}
                      onChange={handleChange}
                      type={'text'}
                      required={true}
                      className={'form-input'}
                    />
                  </div>
                  <div className='w-full px-3'>
                    <RequestInput
                      placeHolder={'Email'}
                      name={'email'}
                      value={values.email}
                      onChange={handleChange}
                      type={'text'}
                      required={true}
                      className={'form-input'}
                    />
                  </div>
                  <div className='w-full px-3'>
                    <RequestInput
                      placeHolder={'Phone'}
                      name={'phone'}
                      value={values.phone}
                      onChange={handleChange}
                      type={'text'}
                      required={true}
                      className={'form-input'}
                    />
                  </div>
                  <div className='w-full px-3'>
                    <RequestSelect
                      placeHolder={'Select Prefered Contact Method'}
                      name={'preferedContactMethod'}
                      value={values.preferedContactMethod}
                      options={[
                        { id: 'PHONE', name: 'Phone' },
                        { id: 'EMAIL', name: 'Email' },
                      ]}
                      onChange={(event) =>
                        setFieldValue(
                          'preferedContactMethod',
                          event.target.value,
                        )
                      }
                      required={true}
                    />
                  </div>
                  <div className='w-full px-3'>
                    <RequestInput
                      placeHolder={'Desired Quantity'}
                      name={'desiredQty'}
                      value={values.desiredQty}
                      onChange={handleChange}
                      type={'number'}
                      required={true}
                      className={'form-input'}
                    />
                  </div>
                  <div className='w-full px-3'>
                    <div className='bg-gray-100 flex flex-wrap items-center justify-between p-2'>
                      <div className=''>Optional Information</div>
                    </div>
                  </div>
                  <div className='w-full px-3'>
                    <div className='flex flex-wrap items-center justify-between'>
                      <div className=''>In Hand Date </div>
                      <div className=''>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DesktopDatePicker
                            inputFormat='MM/DD/YYYY'
                            value={values.inHandDate}
                            onChange={(event: any) => {
                              setFieldValue('inHandDate', event['$d']);
                            }}
                            disableHighlightToday={true}
                            disablePast={true}
                            renderInput={(params) => <TextField {...params} />}
                          />
                          {/* <MobileDatePicker
                            label='Date mobile'
                            inputFormat='MM/DD/YYYY'
                            value={values.inHandDate}
                            onChange={(event) => {
                              console.log('event', event);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          /> */}
                        </LocalizationProvider>
                      </div>
                    </div>
                  </div>
                  <div className='w-full px-3' x-data='{ open:false}'>
                    <div className='flex flex-wrap items-center justify-between'>
                      <div className=''>Provide Logo (Optional)</div>
                      {!showLogo && (
                        <div className=''>
                          <button
                            className='text-anchor'
                            type='button'
                            onClick={() => setShowLogo(true)}
                          >
                            + Add Logo
                          </button>
                        </div>
                      )}
                    </div>
                    {showLogo && (
                      <div className='bg-gray-100 p-2 mt-2 border border-gray-300'>
                        <div className='flex flex-wrap items-center justify-between'>
                          <div className=''>First Logo</div>
                          <div className=''>
                            <button
                              className='text-anchor'
                              type='button'
                              onClick={() => setShowLogo(false)}
                            >
                              X Remove
                            </button>
                          </div>
                        </div>
                        <div className='mt-2'>
                          <label htmlFor='logo'>Select your logo</label>
                          <div className=''>
                            <input
                              type='file'
                              name={'logo'}
                              id={'logo'}
                              // value={undefined}
                              className='form-input'
                              onChange={fileReader}
                              accept={'image/*'}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className='w-full px-3'>
                    <div className=''>
                      <textarea
                        placeholder='Message here'
                        className='form-input'
                        name={'message'}
                        value={values.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className='w-full px-3'>
                    <ReCAPTCHA
                      className='pt-4 first:pt-0'
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHASITEKEY || ''}
                      onChange={captchaHandler}
                    />
                    {captchaVerified === 'NOT_VALID' && (
                      <p className='text-rose-500'>Captcha is not valid !</p>
                    )}
                  </div>
                  <div className='w-full px-3 text-center'>
                    <button
                      type='submit'
                      className={
                        storeLayout === _Store.type1
                          ? ' w-full btn-secondary !block text-center mb-2 font-bold py-1'
                          : 'btn btn-xl w-full btn-secondary !block text-center mb-4'
                      }
                    >
                      SUBMIT
                    </button>
                    <button
                      type='button'
                      className='text-center text-anchorr font-bold text-xl'
                      onClick={() => router.back()}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
    </div>
  );
};

export default RequestConsultationForm;
