import { CustomerUsersObject } from '@type/APIs/customerUser.res';
import { addUserMessages } from 'constants/validationMessages';
import { _User } from 'definations/user.type';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

type Props = {
  // eslint-disable-next-line no-unused-vars
  submitHandler: (values: _User, formikProps: { setFieldError: (arg0: string, arg1: string | undefined) => void; }) => void;
  closeModal: () => void;
  editData?: CustomerUsersObject | null;
};

const AddUserModal = ({ submitHandler, closeModal, editData }: Props) => {
  const [initialValues, setInitialValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: 0,
  });

  useEffect(() => {
    if (editData) {
      setInitialValues({
        firstName: editData.firstname,
        lastName: editData.lastname,
        email: editData.email,
        role: editData.customerRoleId,
      })
    }
  }, [editData])

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(addUserMessages.firstName.required),
    lastName: Yup.string().required(addUserMessages.lastName.required),
    email: Yup.string().required(addUserMessages.email.required),
    role: Yup.number().min(1, addUserMessages.role.required),
  });

  return (
    <div
      id="adduserModal"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal h-full inset-0"
    >
      <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="relative px-4 w-full max-w-2xl h-fullborder border-neutral-200 inline-block h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600 sticky top-0 left-0 bg-white">
              <div className="text-xl font-semibold text-gray-900 lg:text-2xl login-top-title dark:text-white">
                {editData ? 'Update' : 'Add'} User
              </div>
              <div className="flex items-center gap-x-2">
                <button
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="adduserModal"
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
            </div>
            <Formik
              onSubmit={submitHandler}
              validationSchema={validationSchema}
              initialValues={initialValues}
              enableReinitialize={true}
            >
              {({
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="p-6">
                    <div className="flex flex-wrap -mx-3 gap-y-6">
                      <div className="w-full lg:w-1/2 px-3">
                        <label
                          htmlFor="First Name"
                          className="block text-base font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            id="First Name"
                            name="firstName"
                            autoComplete="First Name"
                            placeholder="First Name"
                            className="form-input"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        {touched.firstName && errors.firstName && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      <div className="w-full lg:w-1/2 px-3">
                        <label
                          htmlFor="Last Name"
                          className="block text-base font-medium text-gray-700"
                        >
                          Last Name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            value={values.lastName}
                            id="Last Name"
                            name="lastName"
                            autoComplete="Last Name"
                            placeholder="Last Name"
                            className="form-input"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        {touched.lastName && errors.lastName && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                      <div className="w-full lg:w-1/2 px-3">
                        <label
                          htmlFor="email-address"
                          className="block text-base font-medium text-gray-700"
                        >
                          Email Address
                        </label>
                        <div className="mt-2">
                          <input
                            type="email"
                            id="email-address"
                            name="email"
                            value={values.email}
                            autoComplete="email"
                            placeholder="Email Address"
                            className="form-input"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        {touched.email && errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div className="w-full lg:w-1/2 px-3">
                        <label
                          htmlFor="state"
                          className="block text-base font-medium text-gray-700"
                        >
                          Role
                        </label>
                        <div className="mt-2">
                          <select
                            className="form-input"
                            name="role"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.role}
                          >
                            <option value={0} selected disabled>
                              Select Role
                            </option>
                            <option value={1}>Administrator</option>
                            <option value={2}>User</option>
                          </select>
                        </div>
                        {touched.role && errors.role && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.role}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button
                      data-modal-toggle="adduserModal"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Save
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
