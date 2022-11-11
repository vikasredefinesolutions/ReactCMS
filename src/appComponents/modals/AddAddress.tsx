import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { addressMessages } from 'constant/validationMessages';
import { AddUpdateAddressRequest } from 'definations/APIs/address.req';
import { CustomerAddress } from 'definations/APIs/user.res';
import { getCountryList, getStatesList } from 'services/address.service';

const AddAddress = ({
  closePopupHandler,
  submitHandler,
  editData,
}: {
  closePopupHandler: () => void;
  // eslint-disable-next-line no-unused-vars
  submitHandler: (arg: AddUpdateAddressRequest) => void;
  editData: CustomerAddress | null;
}) => {
  const [country, setCountry] = useState<Array<{ id: number; name: string }>>(
    [],
  );
  const [state, setState] = useState<Array<{ id: number; name: string }>>([]);
  const [initialValues, setInitialValues] = useState({
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
  });

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required(addressMessages.firstName.required),
    lastName: Yup.string().required(addressMessages.lastName.required),
    email: Yup.string().email().required(addressMessages.email.required),
    address1: Yup.string().required(addressMessages.address1.required),
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
  };

  useEffect(() => {
    if (editData && country.length > 0) {
      loadState(editData.countryName).then(() => {
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
      });
    }
  }, [editData, country]);

  useEffect(() => {
    getCountryList().then((res) => setCountry(res));
  }, []);

  return (
    <div
      id="AddNewAddress"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 justify-center items-center h-modal max-h-screen"
    >
      <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="relative w-full max-w-2xl">
          <div className="relative bg-white rounded-lg shadow max-h-screen overflow-y-auto">
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add New Address
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="AddNewAddress"
                onClick={closePopupHandler}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <Formik
              onSubmit={submitHandler}
              validationSchema={validationSchema}
              initialValues={initialValues}
              enableReinitialize
            >
              {({
                errors,
                touched,
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                submitForm,
                setFieldValue,
              }) => (
                <>
                  <div className="p-6 space-y-6">
                    <form className="mt-4 sm:max-w-2xl" onSubmit={handleSubmit}>
                      <fieldset className="w-full">
                        <label className="text-base">Country</label>
                        <div className="relative mt-2">
                          <select
                            id="country"
                            name="countryName"
                            autoComplete="country-name"
                            className="form-input"
                            value={values.countryName}
                            onChange={(e) => {
                              handleChange(e);
                              loadState(e.target.value);
                            }}
                            onBlur={handleBlur}
                          >
                            <option>Select Country</option>
                            {country.map((res) => (
                              <option>{res?.name}</option>
                            ))}
                          </select>
                          <div className="text-red-500 text-s mt-1">
                            {touched.countryName && errors.countryName}
                          </div>
                        </div>
                      </fieldset>
                      <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <label htmlFor="city" className="block text-base">
                            First Name
                          </label>
                          <div className="mt-1">
                            <input
                              value={values.firstname}
                              name="firstname"
                              id="firstname"
                              className="form-input"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                          <div className="text-red-500 text-s mt-1">
                            {touched.firstname && errors.firstname}
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label htmlFor="region" className="block text-base">
                            Last Name
                          </label>
                          <div className="mt-1">
                            <input
                              name="lastName"
                              id="region"
                              className="form-input"
                              value={values.lastName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                          <div className="text-red-500 text-s mt-1">
                            {touched.lastName && errors.lastName}
                          </div>
                        </div>
                      </div>
                      <fieldset className="w-full mt-4">
                        <label htmlFor="street-address" className="text-base">
                          Email
                        </label>
                        <div className="mt-2 mb-2">
                          <input
                            id="street-address"
                            name="email"
                            value={values.email}
                            autoComplete="street-address"
                            placeholder="Email"
                            className="form-input"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        <div className="text-red-500 text-s mt-1">
                          {touched.email && errors.email}
                        </div>
                      </fieldset>
                      <fieldset className="w-full mt-4">
                        <label htmlFor="street-address" className="text-base">
                          Street Address
                        </label>
                        <div className="mt-2 mb-2">
                          <input
                            id="street-address"
                            name="address1"
                            value={values.address1}
                            autoComplete="street-address"
                            placeholder="Street Address"
                            className="form-input"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        <div className="text-red-500 text-s mt-1">
                          {touched.address1 && errors.address1}
                        </div>
                      </fieldset>
                      <span className="text-indigo-600 mt-2 mb-2">
                        <a
                          href="javascript:void(0);"
                          title="Add Address Line 2"
                        >
                          + Add Address Line 2
                        </a>
                      </span>
                      <fieldset
                        className="w-full mt-4"
                        style={{ display: 'none' }}
                        id="AddAddressLine"
                      >
                        <label htmlFor="street-address" className="text-base">
                          Street Address
                        </label>
                        <div className="mt-2">
                          <input
                            id="street-address"
                            name="street-address"
                            autoComplete="street-address"
                            placeholder="Street Address"
                            className="form-input"
                          />
                        </div>
                      </fieldset>
                      <fieldset className="w-full mt-4">
                        <label htmlFor="Apt-suit" className="text-base">
                          Apt/Suit/Other(optional)
                        </label>
                        <div className="mt-2">
                          <input
                            id="Apt-suit"
                            name="suite"
                            value={values.suite}
                            autoComplete="Apt-suit"
                            placeholder="Apt/Suit/Other(optional)"
                            className="form-input"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        <div className="text-red-500 text-s mt-1">
                          {touched.suite && errors.suite}
                        </div>
                      </fieldset>

                      <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <label htmlFor="Zip-code" className="text-base">
                            Zip Code
                          </label>
                          <div className="mt-1">
                            <input
                              id="Zip-code"
                              name="postalCode"
                              autoComplete="Zip-code"
                              value={values.postalCode}
                              placeholder="Zip Code"
                              className="form-input"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                          <div className="text-red-500 text-s mt-1">
                            {touched.postalCode && errors.postalCode}
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label htmlFor="Phone Number" className="text-base">
                            Company Name
                          </label>
                          <div className="mt-1">
                            <input
                              id="Phone Number"
                              name="companyName"
                              autoComplete="Phone Number"
                              placeholder="1-(000)-000-0000"
                              value={values.companyName}
                              className="form-input"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                          <div className="text-red-500 text-s mt-1">
                            {touched.phone && errors.phone}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <label htmlFor="Phone Number" className="text-base">
                            Phone Number
                          </label>
                          <div className="mt-1">
                            <input
                              id="Phone Number"
                              name="phone"
                              autoComplete="Phone Number"
                              placeholder="1-(000)-000-0000"
                              value={values.phone}
                              className="form-input"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                          <div className="text-red-500 text-s mt-1">
                            {touched.phone && errors.phone}
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label htmlFor="region" className="block text-base">
                            Fax
                          </label>
                          <div className="mt-1">
                            <input
                              name="fax"
                              id="region"
                              className="form-input"
                              onChange={handleChange}
                              value={values.fax}
                              onBlur={handleBlur}
                            />
                          </div>
                          <div className="text-red-500 text-s mt-1">
                            {touched.fax && errors.fax}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <label htmlFor="city" className="block text-base">
                            City
                          </label>
                          <div className="mt-1">
                            <input
                              name="city"
                              value={values.city}
                              id="city"
                              className="form-input"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                          <div className="text-red-500 text-s mt-1">
                            {touched.city && errors.city}
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label htmlFor="region" className="block text-base">
                            State / Province
                          </label>
                          <div className="mt-1">
                            <select
                              id="state"
                              name="state"
                              autoComplete="country-name"
                              className="form-input"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.state}
                            >
                              <option>Select State</option>
                              {state.map((res) => (
                                <option>{res?.name}</option>
                              ))}
                            </select>
                          </div>
                          <div className="text-red-500 text-s mt-1">
                            {touched.state && errors.state}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="block text-base">
                          <input
                            type="checkbox"
                            checked={values.isDefault}
                            onChange={(e) =>
                              setFieldValue('isDefault', e.target.checked)
                            }
                          />
                          <span className="ml-1 text-base">Set as default</span>
                        </label>
                      </div>
                    </form>
                  </div>
                  <div className="flex items-center justify-between p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button
                      data-modal-toggle="AddNewAddress"
                      className="btn btn-outline-primary"
                      onClick={closePopupHandler}
                    >
                      Cancel
                    </button>
                    <button
                      data-modal-toggle="AddNewAddress"
                      onClick={submitForm}
                      className="btn btn-primary"
                    >
                      Save
                    </button>
                  </div>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
