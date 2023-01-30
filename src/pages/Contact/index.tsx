import { paths } from '@constants/paths.constant';
import PageNotFound from 'appComponents/reUsable/404';
import { Formik } from 'formik';
import { useTypedSelector } from 'hooks';
import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import { useState } from 'react';
import * as Yup from 'yup';
import { contactPageMessage } from '../../../src/constants/validationMessages';

interface _ContactDetails {
    name: string,
    email: string,
    companyName: string,
    message: string,
}


const Contactus = () => {
    const storeCode = useTypedSelector(state => state.store.layout)
    const offlineproduct = useTypedSelector(state => state.product.offlineProductSelected)
    const router = useRouter()
    const [initialValues, setInitialValues] = useState({
        name: '',
        email: '',
        companyName: '',
        message: offlineproduct || '',
    });

    const submitHandler = (values: _ContactDetails) => {
        router.push(paths.ThankYou)
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(contactPageMessage.name.required),
        email: Yup.string().required(contactPageMessage.email.required),
        companyName: Yup.string().required(contactPageMessage.companyName.required),
        message: Yup.string().required(contactPageMessage.message.required),
    });
    if (storeCode == _Store.type4) {

        return (
            <section className="container mx-auto bg-gray-100 mb-6 mt-6" >
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
                        handleSubmit,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div className=" py-2 text-sm lg:px-12 px-4 mt-5 ">
                                <div className="mb-2 ">Please enter all information below and click "submit" to send us your request.Someone will contact you ASAP with information.</div>
                                <div className="mb-2">Driving Impressions is a leading supplier working directly with ASI and PPAI distributors, along with contract print and embroidery shops and other promotional product resellers. We are located in East Providence, RI and have full warehousing and decorating capabilities - including 18 heads of embroidery and heat transfer presses.</div>
                                <div className="mb-2 ">If you have any questions, contact us at 888.737.4864</div>
                            </div>
                            <div className="gird grid-cols-1 lg:flex lg:items-center gap-6  lg:px-12 px-4 py-2 mb-4">
                                <div className="w-full mx-auto max-w-7xl">
                                    <div className="flex flex-wrap -mx-5 gap-y-6">
                                        <div className="w-full px-3">
                                            <label htmlFor="Last Name" className="block text-base font-medium text-gray-700">Your Name:{' '}
                                                <span className="text-red-600">*</span></label>
                                            <div className="mt-2">
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        id="Name"
                                                        name="name"
                                                        autoComplete="Name"
                                                        placeholder="Name"
                                                        className="w-1/2  rounded-md border-gray-300"
                                                        value={values.name}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                {touched.name && errors.name && (
                                                    <p className="text-red-500 text-xs mt-1">
                                                        {errors.name}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="w-full px-3">
                                            <label htmlFor="Email" className="block text-base font-medium text-gray-700">Your Email:{' '}
                                                <span className="text-red-600">*</span></label>
                                            <div className="mt-2">
                                                <div className="mt-2">
                                                    <input

                                                        type="email" id="Email"
                                                        name="email"
                                                        autoComplete="email"
                                                        placeholder="Your Email"
                                                        className="w-1/2  rounded-md border-gray-300"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                {touched.email && errors.email && (
                                                    <p className="text-red-500 text-xs mt-1">
                                                        {errors.email}
                                                    </p>
                                                )} </div>
                                        </div>
                                        <div className="w-full px-3">
                                            <label htmlFor="Job Title" className="block text-base font-medium text-gray-700">Company Name / ASI# or PPAI#:{' '}
                                                <span className="text-red-600">*</span></label>
                                            <div className="mt-2">
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        id="Company Name"
                                                        name="companyName"
                                                        autoComplete="Company Name"
                                                        placeholder="Enter Your Company Name / ASI# or PPAI#"
                                                        className="w-1/2  rounded-md border-gray-300"
                                                        value={values.companyName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                {touched.companyName && errors.companyName && (
                                                    <p className="text-red-500 text-xs mt-1">
                                                        {errors.companyName}
                                                    </p>
                                                )}  </div>
                                        </div>
                                        <div className="w-full px-3">
                                            <label htmlFor="Address 1" className="block text-base font-medium text-gray-700">Message:{' '}
                                                <span className="text-red-600">*</span></label>
                                            <div className="mt-2">
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    autoComplete="message"
                                                    className="form-input rounded-md"
                                                    value={values.message}
                                                    onChange={handleChange}

                                                ></textarea>
                                            </div>
                                            {touched.message && errors.message && (
                                                <p className="text-red-500 text-xs mt-1">
                                                    {errors.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="w-full lg:w-full px-3">
                                            <button className="btn btn-primary hover:btn-secondary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </section >
        );
    } else {
        return <PageNotFound />;
    }
};

export default Contactus;
