// import HelpIcon from '@mui/icons-material/Help';
// import { FetchCartDetails } from '@services/cart.service';
// import { CartProducts } from '@type/APIs/cart.res';
// import CartSummary from 'Components/CartSummary/CartSummary';
// import ForgotModal from 'appComponents/modals/ForgotModal';
// import Image from 'appComponents/reUsable/Image';
// import Price from 'appComponents/reUsable/Price';
// import SeoHead from 'appComponents/reUsable/SeoHead';
// import AddressForm from 'appComponents/ui/AddressForm';
// import { CheckoutPage as seoDetails } from 'constants/seo.constant';
// import { Formik, FormikProps } from 'formik';
// import _ from 'lodash';
// import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next';
// import { createRef, useState } from 'react';
// import CheckoutController from '../Components/Checkout/CheckoutController';
// import AddressPopupLayout1 from '../Components/Checkout/components/AdressPopup/AdressPopupLayout1';
// const Checkout_old: NextPage<{ cartDetails: CartProducts | null }> = (props) => {
const Checkout_old = () => {
    //     const {
    //         creditCardType,
    //         setShowForgetPassword,
    //         setShowShippingScreen,
    //         setUseShippingAddress,
    //         setCardDetails,
    //         setShowCVVHelpCard,
    //         setPurchaseOrder,
    //         setShowChangeAddressPopup,
    //         changeAddres,
    //         closeShippingPopup,
    //         setShowAddAccount,
    //         checkCustomer,
    //         logInUser,
    //         getTotalPrice,
    //         continueAsGuest,
    //         bindSubmitForm,
    //         addressChangeHandler,
    //         placeOrder,
    //         addressArray,
    //         useShippingAddress,
    //         cardArray,
    //         passwordValidationSchema,
    //         newAccountPasswordValidationSchema,
    //         showEmail,
    //         showPassword,
    //         showForgetPassword,
    //         billingAdress,
    //         showCVVHelpCard,
    //         cardDetails,
    //         purchaseOrder,
    //         showChangeAddressPopup,
    //         validationSchema,
    //         showShippingScreen,
    //         shippingAdress,
    //         showAddAccount,
    //         isLoggedIn,
    //         paymentOptions,
    //     } = CheckoutController();
    //     const { cartDetails } = props;
    //     const shipping = createRef();
    //     const billing = createRef();
    //     const [showReviewOrder, setShowReviewOrder] = useState(false);
    //     const [notloogedinForm, setNotloogedinForm] = useState(false);

    //     const handleReviewOrder = async () => {
    //         if (!isLoggedIn) {
    //             const form = shipping.current as FormikProps<any>;
    //             await form.submitForm();
    //             if (form.dirty && form.isValid) {
    //                 setShowReviewOrder(!showReviewOrder);
    //             }
    //         } else {
    //             setShowReviewOrder(!showReviewOrder);
    //         }
    //     };

    //     const { totalPrice, subTotal, smallRunFee, logoSetupCharges, salesTax } =
    //         getTotalPrice();

    //     return (
    //         <>
    //             <SeoHead {...seoDetails} />
    //             <div className="container mx-auto mt-5">
    //                 <div className="flex flex-wrap -mx-3 gap-y-6">
    //                     <div className="w-full lg:w-9/12 px-3">
    //                         <div>
    //                             <div className="flex justify-between items-center bg-gray-100 w-full px-4 py-2">
    //                                 <div className="text-2xl mr-3">Checkout</div>
    //                                 <div className="text-red-500 text-sm">
    //                                     All fields marked * are required.
    //                                 </div>
    //                             </div>
    //                             <div id="LoginMain">
    //                                 {/* Email Box */}
    //                                 <div
    //                                     className=""
    //                                     id="LoginEmail"
    //                                     style={{ display: showEmail ? 'unset' : 'none' }}
    //                                 >
    //                                     <div className="text-xl my-3 pb-3 border-b border-gray-300">
    //                                         Email Address
    //                                     </div>
    //                                     <div className="text-base font-medium mb-2">
    //                                         Tell us where to send your order confirmation and tracking
    //                                         number.
    //                                     </div>
    //                                     <div className="max-w-[600px]">
    //                                         <Formik
    //                                             onSubmit={checkCustomer}
    //                                             initialValues={{ email: '' }}
    //                                             validationSchema={validationSchema}
    //                                         >
    //                                             {({ errors, handleSubmit, handleBlur, handleChange }) => (
    //                                                 <form onSubmit={handleSubmit}>
    //                                                     <div className="relative z-0 w-full mb-6">
    //                                                         <input
    //                                                             name="email"
    //                                                             placeholder="Email Address *"
    //                                                             onChange={handleChange}
    //                                                             onBlur={handleBlur}
    //                                                             className="form-input"
    //                                                         />
    //                                                         <label className="sr-only">Email Address *</label>
    //                                                         {errors.email && (
    //                                                             <p className="text-red-500 text-xs mt-1">
    //                                                                 {errors.email}
    //                                                             </p>
    //                                                         )}
    //                                                     </div>
    //                                                     <div className="mb-6">
    //                                                         <button
    //                                                             type="submit"
    //                                                             id="btn-start-checkout"
    //                                                             className="btn btn-primary"
    //                                                         >
    //                                                             START CHECKOUT
    //                                                         </button>
    //                                                     </div>
    //                                                 </form>
    //                                             )}
    //                                         </Formik>
    //                                         <div className="text-xs">
    //                                             By continuing, you agree to our Terms of Use and consent
    //                                             to our Privacy Policy.
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                                 {/* Password Box */}
    //                                 <div
    //                                     className=""
    //                                     id="LoginPassword"
    //                                     style={{ display: showPassword ? 'unset' : 'none' }}
    //                                 >
    //                                     <div className="text-xl my-3 pb-3 border-b border-gray-300">
    //                                         Welcome Back!
    //                                     </div>
    //                                     <div className="flex justify-between">
    //                                         <div className="grow max-w-[600px]">
    //                                             <div className="text-base font-medium mb-2">
    //                                                 Please log in to your account.
    //                                             </div>
    //                                             <Formik
    //                                                 validationSchema={passwordValidationSchema}
    //                                                 initialValues={{ password: '' }}
    //                                                 onSubmit={logInUser}
    //                                             >
    //                                                 {({
    //                                                     errors,
    //                                                     handleSubmit,
    //                                                     handleBlur,
    //                                                     handleChange,
    //                                                 }) => (
    //                                                     <>
    //                                                         <form onSubmit={handleSubmit}>
    //                                                             <div className="relative z-0 w-full mb-6">
    //                                                                 <input
    //                                                                     type="password"
    //                                                                     name="password"
    //                                                                     placeholder="Enter Password"
    //                                                                     onChange={handleChange}
    //                                                                     onBlur={handleBlur}
    //                                                                     className="form-input"
    //                                                                 />
    //                                                                 <label className="sr-only">
    //                                                                     Enter Password
    //                                                                 </label>
    //                                                                 {errors.password && (
    //                                                                     <p className="text-red-500 text-xs mt-1">
    //                                                                         {errors.password}
    //                                                                     </p>
    //                                                                 )}
    //                                                             </div>
    //                                                             <div className="mb-6 flex justify-between items-center">
    //                                                                 <div>
    //                                                                     <button
    //                                                                         type="submit"
    //                                                                         id="btn-login-password"
    //                                                                         className="btn btn-primary"
    //                                                                     >
    //                                                                         CONTINUE
    //                                                                     </button>
    //                                                                 </div>
    //                                                                 <div>
    //                                                                     <button
    //                                                                         onClick={() => setShowForgetPassword(true)}
    //                                                                         className="text-anchor"
    //                                                                         data-modal-toggle="forgetpasswordModal"
    //                                                                     >
    //                                                                         Forgot Password?
    //                                                                     </button>
    //                                                                 </div>
    //                                                             </div>
    //                                                         </form>
    //                                                     </>
    //                                                 )}
    //                                             </Formik>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                                 {/* Password & Confirm Password */}
    //                                 <div id="LoginMain">
    //                                     <div
    //                                         className=""
    //                                         id="LoginPassword"
    //                                         style={{ display: showAddAccount ? 'unset' : 'none' }}
    //                                     >
    //                                         <div className="text-xl my-3 pb-3 border-b border-gray-300">
    //                                             Create an Account
    //                                         </div>
    //                                         <div className="flex flex-wrap -mx-3 gap-y-6">
    //                                             <div className="w-full lg:w-1/2 px-3">
    //                                                 <div className="text-xl font-medium mb-1">
    //                                                     <em className="font-bold">Welcome!</em> It looks like
    //                                                     you’re new here.
    //                                                 </div>
    //                                                 <div className="text-base font-medium mb-2">
    //                                                     Please log in to your account.
    //                                                 </div>
    //                                                 <Formik
    //                                                     validationSchema={newAccountPasswordValidationSchema}
    //                                                     onSubmit={() => {
    //                                                         setShowShippingScreen(true);
    //                                                         setShowAddAccount(false);
    //                                                     }}
    //                                                     initialValues={{
    //                                                         password: '',
    //                                                         passwordConfirmation: '',
    //                                                     }}
    //                                                 >
    //                                                     {({
    //                                                         errors,
    //                                                         handleSubmit,
    //                                                         handleChange,
    //                                                         handleBlur,
    //                                                     }) => (
    //                                                         <form onSubmit={handleSubmit}>
    //                                                             <div className="relative z-0 w-full mb-6">
    //                                                                 <input
    //                                                                     type="password"
    //                                                                     name="password"
    //                                                                     placeholder="Create Password "
    //                                                                     className="form-input"
    //                                                                     onChange={handleChange}
    //                                                                     onBlur={handleBlur}
    //                                                                 />
    //                                                                 <label className="sr-only">
    //                                                                     Create Password *
    //                                                                 </label>
    //                                                                 {errors.password && (
    //                                                                     <p className="text-red-500 text-xs mt-1">
    //                                                                         {errors.password}
    //                                                                     </p>
    //                                                                 )}
    //                                                             </div>
    //                                                             <div className="relative z-0 w-full mb-6">
    //                                                                 <input
    //                                                                     type="password"
    //                                                                     name="passwordConfirmation"
    //                                                                     placeholder="Verify Password "
    //                                                                     className="form-input"
    //                                                                     onChange={handleChange}
    //                                                                     onBlur={handleBlur}
    //                                                                 />
    //                                                                 <label className="sr-only">
    //                                                                     Verify Password *
    //                                                                 </label>
    //                                                                 {errors.passwordConfirmation && (
    //                                                                     <p className="text-red-500 text-xs mt-1">
    //                                                                         {errors.passwordConfirmation}
    //                                                                     </p>
    //                                                                 )}
    //                                                             </div>
    //                                                             <div>
    //                                                                 <button
    //                                                                     id="btn-login-password"
    //                                                                     className="btn btn-primary"
    //                                                                     type="submit"
    //                                                                 >
    //                                                                     CONTINUE
    //                                                                 </button>
    //                                                             </div>
    //                                                         </form>
    //                                                     )}
    //                                                 </Formik>
    //                                             </div>
    //                                             <div className="w-full lg:w-1/2 px-3">
    //                                                 <div className="text-right">
    //                                                     <button
    //                                                         id="btn-continue-guest"
    //                                                         className="btn btn-primary"
    //                                                         onClick={continueAsGuest}
    //                                                     >
    //                                                         CONTINUE AS GUEST
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             {/* Shipping Payment Method */}
    //                             <div
    //                                 id="ShippingPaymentMain"
    //                                 style={{ display: showShippingScreen ? 'unset' : 'none' }}
    //                             >
    //                                 {
    //                                     <div className="flex flex-wrap -mx-3 -mt-3">
    //                                         <div className="w-full lg:w-1/2 px-3 mt-3">
    //                                             <div
    //                                                 className=""
    //                                                 id="ShippingAddress"
    //                                                 style={{
    //                                                     display: showShippingScreen ? 'unset' : 'none',
    //                                                 }}
    //                                             >
    //                                                 <div className="flex justify-between items-center my-3 pb-3 border-b border-gray-300">
    //                                                     <div className="text-xl">Shipping Address</div>
    //                                                     {isLoggedIn && (
    //                                                         <div>
    //                                                             <button
    //                                                                 onClick={() => setShowChangeAddressPopup(1)}
    //                                                                 className="text-anchor"
    //                                                                 data-modal-toggle="shippingaddressModal"
    //                                                             >
    //                                                                 Change
    //                                                             </button>
    //                                                         </div>
    //                                                     )}
    //                                                 </div>

    //                                                 {isLoggedIn && shippingAdress && (
    //                                                     <div className="text-base mb-3">
    //                                                         {shippingAdress.firstname} {shippingAdress.lastName}
    //                                                         <br />
    //                                                         {/* {shippingAdress.companyName} */}
    //                                                         <br />
    //                                                         {shippingAdress.address1}
    //                                                         <br />
    //                                                         {[
    //                                                             shippingAdress.city,
    //                                                             shippingAdress.state,
    //                                                             shippingAdress.postalCode,
    //                                                         ].join(', ')}
    //                                                         <br />
    //                                                         {shippingAdress.countryName}
    //                                                         <br />
    //                                                         {shippingAdress.phone}
    //                                                     </div>
    //                                                 )}
    //                                                 <div style={{ display: isLoggedIn ? 'none' : 'unset ' }}>
    //                                                     <AddressForm
    //                                                         submitHandler={(arg) => console.log(arg)}
    //                                                         closePopupHandler={() => { }}
    //                                                         editData={null}
    //                                                         hideButtons={false}
    //                                                         formRef={shipping}
    //                                                         customChangeHandler={addressChangeHandler}
    //                                                         addressType="s"
    //                                                     // formRef={formRef}
    //                                                     // ref={formRef}
    //                                                     // bindSubmitForm={bindSubmitForm}
    //                                                     />
    //                                                 </div>
    //                                                 {/* )} */}
    //                                             </div>
    //                                         </div>
    //                                         <div className="w-full lg:w-1/2 px-3 mt-3">
    //                                             <div
    //                                                 id="PaymentCard"
    //                                                 style={{
    //                                                     display:
    //                                                         showShippingScreen && !purchaseOrder
    //                                                             ? 'unset'
    //                                                             : 'none',
    //                                                 }}
    //                                             >
    //                                                 <div className="flex justify-between items-center my-3 pb-3 border-b border-gray-300">
    //                                                     <div className="text-xl">Payment</div>
    //                                                     <div>
    //                                                         <button
    //                                                             className="text-anchor"
    //                                                             id="btn-use-purchase-order"
    //                                                             onClick={() => setPurchaseOrder(true)}
    //                                                         >
    //                                                             Use Purchase Order
    //                                                         </button>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div className="relative z-0 w-full mb-6">
    //                                                     <input
    //                                                         name="CreditCardNumber"
    //                                                         placeholder="Credit Card Number "
    //                                                         className="form-input"
    //                                                         maxLength={16}
    //                                                         onChange={(ev) => setCardDetails(ev.target.value)}
    //                                                     />
    //                                                     <label className="sr-only">
    //                                                         Credit Card Number *
    //                                                     </label>
    //                                                     <div className="absolute top-2 right-2 flex items-center">
    //                                                         {cardArray.map((card) => (
    //                                                             <div
    //                                                                 key={card.name}
    //                                                                 className={`opacity-${card.name === creditCardType(cardDetails)
    //                                                                     ? '100'
    //                                                                     : '40'
    //                                                                     } ml-1 w-8`}
    //                                                             >
    //                                                                 <img src={card.image} alt={card.name} />
    //                                                             </div>
    //                                                         ))}
    //                                                     </div>
    //                                                 </div>
    //                                                 <div className="flex flex-wrap -mx-3 gap-y-6">
    //                                                     <div className="w-3/12 px-3">
    //                                                         <div className="relative z-0 w-full">
    //                                                             <select name="Month" className="form-input">
    //                                                                 <option value="">Month</option>
    //                                                                 <option value="1">1</option>
    //                                                                 <option value="2">2</option>
    //                                                                 <option value="3">3</option>
    //                                                                 <option value="4">4</option>
    //                                                                 <option value="5">5</option>
    //                                                                 <option value="6">6</option>
    //                                                                 <option value="7">7</option>
    //                                                                 <option value="8">8</option>
    //                                                                 <option value="9">9</option>
    //                                                                 <option value="10">10</option>
    //                                                                 <option value="11">11</option>
    //                                                                 <option value="12">12</option>
    //                                                             </select>
    //                                                             <label className="sr-only">Month *</label>
    //                                                         </div>
    //                                                     </div>
    //                                                     <div className="w-3/12 px-3">
    //                                                         <div className="relative z-0 w-full">
    //                                                             <select name="Year" className="form-input">
    //                                                                 <option value="">Year</option>
    //                                                                 <option value="2022">2022</option>
    //                                                                 <option value="2023">2023</option>
    //                                                                 <option value="2024">2024</option>
    //                                                                 <option value="2025">2025</option>
    //                                                                 <option value="2026">2026</option>
    //                                                                 <option value="2027">2027</option>
    //                                                                 <option value="2028">2028</option>
    //                                                                 <option value="2029">2029</option>
    //                                                                 <option value="2030">2030</option>
    //                                                                 <option value="2031">2031</option>
    //                                                                 <option value="2032">2032</option>
    //                                                                 <option value="2033">2033</option>
    //                                                             </select>
    //                                                             <label className="sr-only">Year *</label>
    //                                                         </div>
    //                                                     </div>
    //                                                     <div className="w-6/12 px-3">
    //                                                         <div className="relative z-0 w-full">
    //                                                             <input
    //                                                                 name="SecurityCode"
    //                                                                 placeholder="Security Code (CCV) "
    //                                                                 className="form-input"
    //                                                             />
    //                                                             <label className="sr-only">
    //                                                                 Security Code (CCV) *
    //                                                             </label>
    //                                                             <div className="absolute top-2 right-2">
    //                                                                 <div
    //                                                                     className="relative"
    //                                                                     onMouseEnter={() => setShowCVVHelpCard(true)}
    //                                                                     onMouseLeave={() => setShowCVVHelpCard(false)}
    //                                                                     x-data="{ open: false }"
    //                                                                 >
    //                                                                     <HelpIcon
    //                                                                         fontSize={'small'}
    //                                                                         className={'text-base'}
    //                                                                     />
    //                                                                     <div className="z-10 absolute bottom-full left-1/2 transform -translate-x-1/2">
    //                                                                         <div
    //                                                                             className={`bg-slate-800 p-2 rounded overflow-hidden mb-2 ${showCVVHelpCard
    //                                                                                 ? 'transition ease-out duration-200 transform'
    //                                                                                 : ''
    //                                                                                 }`}
    //                                                                             style={{
    //                                                                                 display: showCVVHelpCard
    //                                                                                     ? 'block'
    //                                                                                     : 'none',
    //                                                                             }}
    //                                                                         >
    //                                                                             <div className="text-xs text-gray-200 font-light whitespace-nowrap">
    //                                                                                 The last three digits
    //                                                                                 <br />
    //                                                                                 displayed on the
    //                                                                                 <br />
    //                                                                                 back of your card
    //                                                                                 <br />
    //                                                                                 or first four
    //                                                                                 <br />
    //                                                                                 digits on the front
    //                                                                                 <br />
    //                                                                                 of your AMEX.
    //                                                                             </div>
    //                                                                         </div>
    //                                                                     </div>
    //                                                                 </div>
    //                                                             </div>
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                             <div
    //                                                 id="PurchaseOrder"
    //                                                 style={{
    //                                                     display:
    //                                                         purchaseOrder && showShippingScreen
    //                                                             ? 'unset'
    //                                                             : 'none',
    //                                                 }}
    //                                             >
    //                                                 <div className="flex justify-between items-center my-3 pb-3 border-b border-gray-300">
    //                                                     <div className="text-xl">Payment</div>
    //                                                     <div>
    //                                                         <button
    //                                                             onClick={() => setPurchaseOrder(false)}
    //                                                             className="text-anchor"
    //                                                             id="btn-use-credit-card"
    //                                                         >
    //                                                             Use Credit Card
    //                                                         </button>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div className="relative z-0 w-full mb-6">
    //                                                     <input
    //                                                         name="EnterPONumber"
    //                                                         placeholder="Enter PO Number "
    //                                                         className="form-input"
    //                                                     />
    //                                                     <label className="sr-only">Enter PO Number *</label>
    //                                                 </div>
    //                                                 <div className="text-base">
    //                                                     Please enter your PO Number. We will contact you to
    //                                                     confirm details of your payment.
    //                                                 </div>
    //                                             </div>
    //                                             <div
    //                                                 id="BillingAddress"
    //                                                 style={{
    //                                                     display: showShippingScreen ? 'unset' : 'none',
    //                                                 }}
    //                                             >
    //                                                 <div className="flex justify-between items-center my-3 pb-3 border-b border-gray-300 mt-8">
    //                                                     <div className="text-xl">Billing Address</div>
    //                                                     <div></div>
    //                                                 </div>
    //                                                 <div className="mb-3 font-semibold text-lg">
    //                                                     <div>
    //                                                         <input
    //                                                             type="checkbox"
    //                                                             id="UseShippingAddress"
    //                                                             name="UseShippingAddress"
    //                                                             data-modal-toggle="billingaddressModal"
    //                                                             checked={useShippingAddress}
    //                                                             onChange={(e) => {
    //                                                                 setUseShippingAddress(e.target.checked);
    //                                                             }}
    //                                                         />
    //                                                         <label>Use Shipping Address</label>
    //                                                     </div>
    //                                                 </div>

    //                                                 {isLoggedIn && showShippingScreen && billingAdress && (
    //                                                     <div
    //                                                         id="SelectedShippingAddress"
    //                                                         className="text-base mb-3"
    //                                                     >
    //                                                         {billingAdress.firstname} {billingAdress.lastName}
    //                                                         <br />
    //                                                         {/* {billingAdress.companyName} */}
    //                                                         <br />
    //                                                         {billingAdress.address1}
    //                                                         <br />
    //                                                         {[
    //                                                             billingAdress.city,
    //                                                             billingAdress.state,
    //                                                             billingAdress.postalCode,
    //                                                         ].join(', ')}
    //                                                         <br />
    //                                                         {billingAdress.countryName}
    //                                                         <br />
    //                                                         {billingAdress.phone}
    //                                                     </div>
    //                                                 )}
    //                                                 {(!isLoggedIn) && (
    //                                                     <AddressForm
    //                                                         submitHandler={(arg) => console.log(arg)}
    //                                                         closePopupHandler={() => { }}
    //                                                         editData={useShippingAddress ? billingAdress : null}
    //                                                         hideButtons={false}
    //                                                         formRef={billing}
    //                                                         customChangeHandler={addressChangeHandler}
    //                                                         addressType={'b'}
    //                                                     />
    //                                                 )}
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 }
    //                             </div>
    //                             {/* Order Review */}
    //                         </div>
    //                         <div
    //                             id="OrderReview"
    //                             style={{ display: showReviewOrder ? '' : 'none' }}
    //                         >
    //                             <div className="mb-3 mt-4">
    //                                 <hr />
    //                             </div>
    //                             <ul
    //                                 role="list"
    //                                 className="border-b border-gray-200 divide-y divide-gray-200"
    //                             >
    //                                 {
    //                                     cartDetails?.map(cart => (

    //                                         <li key={cart.attributeOptionId} className="flex py-6 flex-wrap -mx-3 -mt-3">
    //                                             <div className="w-full lg:w-4/12 px-3 mt-3">
    //                                                 <Image src={cart.colorImage} className="rounded-md object-center object-cover" alt='Cart Image' />
    //                                             </div>
    //                                             <div className="w-full lg:w-8/12 px-3 mt-3">
    //                                                 <div className="text-lg font-semibold">
    //                                                     {cart.productName}
    //                                                 </div>
    //                                                 <div className="w-full flex flex-wrap">
    //                                                     <div className="sm:w-2/3 mt-2">
    //                                                         <div className="flex justify-between">
    //                                                             <div className="text-base">
    //                                                                 <span className="font-semibold">SKU :</span> {cart.sku}
    //                                                             </div>
    //                                                         </div>
    //                                                         <div className="mt-1 flex">
    //                                                             <div className="text-base">
    //                                                                 <span className="font-semibold">Color :</span>{' '}
    //                                                                 {cart.attributeOptionValue}
    //                                                             </div>
    //                                                         </div>
    //                                                     </div>
    //                                                     <div className="mt-2 sm:w-1/3">
    //                                                         <div className="bold text-lg text-right">
    //                                                             <span className="">Item Total: <Price value={cart.totalPrice} /></span>
    //                                                         </div>
    //                                                     </div>
    //                                                     <div className="mt-10 mb-5 w-full">
    //                                                         <div className="text-base font-semibold border-b pb-2">
    //                                                             Item Details
    //                                                         </div>
    //                                                         <div className="flex justify-between py-2">
    //                                                             <div className="text-base font-semibold w-28">
    //                                                                 Size
    //                                                             </div>
    //                                                             <div className="text-base font-semibold w-16 text-center">
    //                                                                 Qty
    //                                                             </div>
    //                                                             <div className="text-base font-semibold w-20 text-right">
    //                                                                 Price
    //                                                             </div>
    //                                                         </div>
    //                                                         {
    //                                                             cart.shoppingCartItemDetailsViewModels.map(res => (

    //                                                                 <div key={res.attributeOptionId} className="flex justify-between py-2">
    //                                                                     <div className="text-base w-28">{res.attributeOptionValue}</div>
    //                                                                     <div className="text-base w-16 text-center">{res.qty}</div>
    //                                                                     <div className="text-base w-20 text-right">
    //                                                                         <Price value={res.price} />
    //                                                                     </div>
    //                                                                 </div>
    //                                                             ))
    //                                                         }



    //                                                         <div className="flex justify-between py-3 border-t border-b">
    //                                                             <div className="text-base w-28">Product Total:</div>
    //                                                             <div className="text-base w-16 text-center">24</div>
    //                                                             <div className="text-base w-20 text-right">
    //                                                                 <Price value={cart.totalPrice} />
    //                                                             </div>
    //                                                         </div>
    //                                                     </div>
    //                                                     <div className="flex justify-start items-center mb-3">
    //                                                         <div>
    //                                                             <span className="material-icons text-[60px] mr-3">
    //                                                                 support_agent
    //                                                             </span>
    //                                                         </div>
    //                                                         <div>
    //                                                             <div className="text-lg font-semibold">
    //                                                                 Customize Later
    //                                                             </div>
    //                                                             <div className="text-base">
    //                                                                 A Gear Expert will contact you to discuss the
    //                                                                 customization of this product.
    //                                                             </div>
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                         </li>
    //                                     ))
    //                                 }
    //                             </ul>
    //                         </div>
    //                     </div>

    //                     <div className="w-full lg:w-3/12 px-3">
    //                         <CartSummary title="Order Summary" />
    //                         <div className="text-base text-red-500 font-medium mb-3">
    //                             Please note that the tax amount on this order is subject to change
    //                             based on the final invoice, and in accordance with local and state
    //                             laws
    //                         </div>
    //                         <div className="">
    //                             {/* {!showReviewOrder && ( */}
    //                             <button
    //                                 onClick={handleReviewOrder}
    //                                 // onClick={submitForm}
    //                                 className="btn btn-lg !w-full text-center btn-secondary mb-2"
    //                                 id="btn-review-order"
    //                             >
    //                                 REVIEW ORDER
    //                             </button>
    //                             {/* )} */}
    //                             {/* {showReviewOrder && ( */}
    //                             <button
    //                                 onClick={() =>
    //                                     placeOrder()}
    //                                 className="btn btn-lg !w-full text-center btn-secondary mb-2"
    //                             >
    //                                 PLACE ORDER
    //                             </button>
    //                             {/* )} */}
    //                         </div>
    //                         <div className="bg-gray-100 p-3 text-center">
    //                             <div className="text-2xl font-medium mb-4 align-middle">
    //                                 <span className="material-icons text-anchor align-middle">
    //                                     verified{' '}
    //                                 </span>
    //                                 <span className="align-middle">Order Risk-Free!</span>
    //                             </div>
    //                             <div className="text-lg">
    //                                 Cancel your order without penalty anytime before your proof is
    //                                 approved.
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             {showForgetPassword && (
    //                 <ForgotModal modalHandler={() => setShowForgetPassword(false)} />
    //             )}
    //             {Boolean(showChangeAddressPopup) && (
    //                 <AddressPopupLayout1
    //                     showChangeAddressPopup={showChangeAddressPopup}
    //                     addressArray={addressArray}
    //                     defaultAddress={isLoggedIn ? '' : 's'}
    //                     changeAddres={changeAddres}
    //                     closeShippingPopup={closeShippingPopup}
    //                 />
    //             )}
    //         </>
    //     );
    // };

    // export const getServerSideProps: GetServerSideProps = async (context: {
    //     req: { cookies: { userId?: string | null, tempCustomerId?: string | null } };
    //     res: any;
    // }): Promise<GetServerSidePropsResult<any>> => {
    //     let userId = context.req.cookies?.userId;
    //     let check = false;
    //     let cart = null;

    //     if (!userId) {
    //         userId = context.req.cookies?.tempCustomerId;
    //     }

    //     if (userId && userId !== null) {
    //         cart = await FetchCartDetails(~~userId);
    //         if (!_.isEmpty(cart)) {
    //             check = true;
    //         }
    //     }

    //     if (!check) {
    //         return {
    //             redirect: {
    //                 destination: '/cart.html',
    //                 permanent: true,
    //             },
    //         };
    //     }

    //     return {
    //         props: {
    //             cartDetails: cart,
    //         },
    //     };
    return <></>
};

export default Checkout_old;
