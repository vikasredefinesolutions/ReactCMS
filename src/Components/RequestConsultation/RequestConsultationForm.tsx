import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import * as Yup from 'yup';
import RequestInput from './RequestInput';
import RequestSelect from './RequestSelect';

type _RequestConsultation = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  preferedContactMethod: string;
  desiredQty: string;
  inHandDate: string;
  message: string;
};

const _RequestConsulationSchema = Yup.object().shape({
  firstName: Yup.string().required('Enter your first name.'),
  lastName: Yup.string().required('Enter your Last name.'),
  companyName: Yup.string().required('Enter your Last name.'),
  email: Yup.string().required('Enter your email.'),
  phone: Yup.string().required('Enter your Phone.'),
  preferedContactMethod: Yup.string().required('Please Select Contact Method.'),
  desiredQty: Yup.string().required('Enter desired quantity.'),
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
  desiredQty: '',
  inHandDate: '',
  message: '',
};

const RequestConsultationForm: React.FC = () => {
  const router = useRouter();
  const [showLogo, setShowLogo] = useState<boolean>(false);
  const [, setFileToUpload] = useState<{
    name: string;
    type: string;
    previewURL: string;
  } | null>(null);

  const submitHandler = () => {};

  const fileReader = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget?.files === null) return;

    const file = {
      name: event.currentTarget.files[0].name,
      type: event.currentTarget.files[0].type,
      previewURL: URL.createObjectURL(event.currentTarget.files[0]),
    };

    setFileToUpload(file);
  };

  return (
    <div className="w-full lg:w-4/12 px-3">
      <Formik
        initialValues={_RequestConsultationInitials}
        onSubmit={submitHandler}
        validationSchema={_RequestConsulationSchema}
      >
        {({ values, handleChange, setFieldValue }) => {
          return (
            <Form>
              <div className="flex flex-wrap -mx-3 gap-y-4">
                <div className="w-full px-3">
                  <div className="bg-gray-100 flex flex-wrap items-center justify-between p-2">
                    <div className="">Contact Information</div>
                    <div className="text-red-500 text-xs">
                      All fields marked * are required.
                    </div>
                  </div>
                </div>
                <div className="w-full px-3">
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
                <div className="w-full px-3">
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
                <div className="w-full px-3">
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
                <div className="w-full px-3">
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
                <div className="w-full px-3">
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
                <div className="w-full px-3">
                  <RequestSelect
                    placeHolder={'Select Prefered Contact Method'}
                    name={'preferedContactMethod'}
                    value={values.preferedContactMethod}
                    options={[
                      { id: 'phone', name: 'Phone' },
                      { id: 'email', name: 'Email' },
                    ]}
                    onChange={(event) =>
                      setFieldValue('preferedContactMethod', event.target.value)
                    }
                    required={true}
                  />
                </div>
                <div className="w-full px-3">
                  <RequestInput
                    placeHolder={'Desired Quantity'}
                    name={'desiredQty'}
                    value={values.desiredQty}
                    onChange={handleChange}
                    type={'text'}
                    required={true}
                    className={'form-input'}
                  />
                </div>
                <div className="w-full px-3">
                  <div className="bg-gray-100 flex flex-wrap items-center justify-between p-2">
                    <div className="">Optional Information</div>
                  </div>
                </div>
                <div className="w-full px-3">
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="">In Hand Date</div>
                    <div className="">
                      <RequestInput
                        placeHolder={'MM/DD/YYYY'}
                        name={'inHandDate'}
                        value={values.inHandDate}
                        onChange={handleChange}
                        type={'text'}
                        required={false}
                        className={'form-input'}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full px-3" x-data="{ open:false}">
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="">Provide Logo (Optional)</div>
                    {!showLogo && (
                      <div className="">
                        <button
                          className="text-anchor"
                          type="button"
                          onClick={() => setShowLogo(true)}
                        >
                          + Add Logo
                        </button>
                      </div>
                    )}
                  </div>
                  {showLogo && (
                    <div className="bg-gray-100 p-2 mt-2 border border-gray-300">
                      <div className="flex flex-wrap items-center justify-between">
                        <div className="">First Logo</div>
                        <div className="">
                          <button
                            className="text-anchor"
                            type="button"
                            onClick={() => setShowLogo(false)}
                          >
                            X Remove
                          </button>
                        </div>
                      </div>
                      <div className="mt-2">
                        <label htmlFor="logo">Select your logo</label>
                        <div className="">
                          <input
                            type="file"
                            name={'logo'}
                            id={'logo'}
                            // value={undefined}
                            className="form-input"
                            onChange={fileReader}
                            accept={'image/*'}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full px-3">
                  <div className="">
                    <textarea
                      placeholder="Message here"
                      className="form-input"
                      name={'message'}
                      value={values.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-3 text-center">
                  <button
                    type="submit"
                    className="btn btn-xl btn-secondary !block text-center mb-4"
                  >
                    SUBMIT
                  </button>
                  <button
                    type="button"
                    className="text-center text-anchorr"
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
    </div>
  );
};

export default RequestConsultationForm;
