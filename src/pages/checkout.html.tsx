import { FetchCartDetails } from '@services/cart.service';
import { CartProducts } from '@type/APIs/cart.res';
import ForgotModal from 'appComponents/modals/ForgotModal';
import Image from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import SeoHead from 'appComponents/reUsable/SeoHead';
import AddressForm from 'appComponents/ui/AddressForm';
import CartSummary from 'Components/CartSummary/CartSummary';
import PaymentOption from 'Components/Checkout/components/PaymentOption';
import { seoTags as seoDetails } from 'constants/seo.constant';
import { Formik, FormikProps } from 'formik';
import _ from 'lodash';
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next';
import { createRef, useState } from 'react';
import CheckoutController from '../Components/Checkout/CheckoutController';
import AddressPopupLayout1 from '../Components/Checkout/components/AdressPopup/AdressPopupLayout1';
const Checkout: NextPage<{ cartDetails: CartProducts | null }> = (props) => {
  const {
    creditCardType,
    setShowForgetPassword,
    setShowShippingScreen,
    setUseShippingAddress,
    setCardDetails,
    setShowChangeAddressPopup,
    changeAddres,
    closeShippingPopup,
    setShowAddAccount,
    checkCustomer,
    logInUser,
    continueAsGuest,
    addressChangeHandler,
    placeOrder,
    addressArray,
    useShippingAddress,
    passwordValidationSchema,
    newAccountPasswordValidationSchema,
    showEmail,
    showPassword,
    showForgetPassword,
    billingAdress,
    cardDetails,
    showChangeAddressPopup,
    validationSchema,
    showShippingScreen,
    shippingAdress,
    showAddAccount,
    isLoggedIn,
    paymentOptions,
    allowedBalance,
    checkHandler,
    setPaymentMethod,
    paymentMethod,
    purchaseOrder,
    setPurchaseOrder,
    submitCreateAccountHandler,
    ccInputHandler,
    checkPayment,
  } = CheckoutController();
  const { cartDetails } = props;
  const shipping = createRef();
  const billing = createRef();
  const [showReviewOrder, setShowReviewOrder] = useState(false);

  const handleReviewOrder = async () => {
    if (!isLoggedIn) {
      const form = shipping.current as FormikProps<any>;
      const billingForm = billing.current as FormikProps<any>;
      await form.submitForm();
      if (!useShippingAddress) {
        await billingForm.submitForm();
      }
      if (
        form.dirty &&
        form.isValid &&
        billingForm.dirty &&
        billingForm.isValid
      ) {
        if (!checkPayment()) {
          return;
        }
        setShowReviewOrder(!showReviewOrder);
        return;
      }
    } else {
      if (!checkPayment()) {
        return;
      }
      setShowReviewOrder(!showReviewOrder);
    }
  };

  return (
    <>
      <SeoHead {...seoDetails.checkoutPage} />
      <div className='container mx-auto mt-5'>
        <div className='flex flex-wrap -mx-3 gap-y-6'>
          <div className='w-full lg:w-9/12 px-3'>
            <div>
              <div className='flex justify-between items-center bg-gray-100 w-full px-4 py-2'>
                <div className='text-2xl mr-3'>Checkout</div>
                <div className='text-red-500 text-sm'>
                  All fields marked * are required.
                </div>
              </div>
              <div id='LoginMain'>
                {/* Email Box */}
                <div
                  className=''
                  id='LoginEmail'
                  style={{ display: showEmail ? 'unset' : 'none' }}
                >
                  <div className='text-xl my-3 pb-3 border-b border-gray-300'>
                    Email Address
                  </div>
                  <div className='text-base font-medium mb-2'>
                    Tell us where to send your order confirmation and tracking
                    number.
                  </div>
                  <div className='max-w-[600px]'>
                    <Formik
                      onSubmit={checkCustomer}
                      initialValues={{ email: '' }}
                      validationSchema={validationSchema}
                    >
                      {({ errors, handleSubmit, handleBlur, handleChange }) => (
                        <form onSubmit={handleSubmit}>
                          <div className='relative z-0 w-full mb-6'>
                            <input
                              name='email'
                              placeholder='Email Address *'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className='form-input'
                            />
                            <label className='sr-only'>Email Address *</label>
                            {errors.email && (
                              <p className='text-red-500 text-xs mt-1'>
                                {errors.email}
                              </p>
                            )}
                          </div>
                          <div className='mb-6'>
                            <button
                              type='submit'
                              id='btn-start-checkout'
                              className='btn btn-primary'
                            >
                              START CHECKOUT
                            </button>
                          </div>
                        </form>
                      )}
                    </Formik>
                    <div className='text-xs'>
                      By continuing, you agree to our Terms of Use and consent
                      to our Privacy Policy.
                    </div>
                  </div>
                </div>
                {/* Password Box */}
                <div
                  className=''
                  id='LoginPassword'
                  style={{ display: showPassword ? 'unset' : 'none' }}
                >
                  <div className='text-xl my-3 pb-3 border-b border-gray-300'>
                    Welcome Back!
                  </div>
                  <div className='flex justify-between'>
                    <div className='grow max-w-[600px]'>
                      <div className='text-base font-medium mb-2'>
                        Please log in to your account.
                      </div>
                      <Formik
                        validationSchema={passwordValidationSchema}
                        initialValues={{ password: '' }}
                        onSubmit={logInUser}
                      >
                        {({
                          errors,
                          handleSubmit,
                          handleBlur,
                          handleChange,
                        }) => (
                          <>
                            <form onSubmit={handleSubmit}>
                              <div className='relative z-0 w-full mb-6'>
                                <input
                                  type='password'
                                  name='password'
                                  placeholder='Enter Password'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className='form-input'
                                />
                                <label className='sr-only'>
                                  Enter Password
                                </label>
                                {errors.password && (
                                  <p className='text-red-500 text-xs mt-1'>
                                    {errors.password}
                                  </p>
                                )}
                              </div>
                              <div className='mb-6 flex justify-between items-center'>
                                <div>
                                  <button
                                    type='submit'
                                    id='btn-login-password'
                                    className='btn btn-primary'
                                  >
                                    CONTINUE
                                  </button>
                                </div>
                                <div>
                                  <button
                                    onClick={() => setShowForgetPassword(true)}
                                    className='text-anchor'
                                    data-modal-toggle='forgetpasswordModal'
                                  >
                                    Forgot Password?
                                  </button>
                                </div>
                              </div>
                            </form>
                          </>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
                {/* Password & Confirm Password */}
                <div id='LoginMain'>
                  <div
                    className=''
                    id='LoginPassword'
                    style={{ display: showAddAccount ? 'unset' : 'none' }}
                  >
                    <div className='text-xl my-3 pb-3 border-b border-gray-300'>
                      Create an Account
                    </div>
                    <div className='flex flex-wrap -mx-3 gap-y-6'>
                      <div className='w-full lg:w-1/2 px-3'>
                        <div className='text-xl font-medium mb-1'>
                          <em className='font-bold'>Welcome!</em> It looks like
                          you’re new here.
                        </div>
                        <div className='text-base font-medium mb-2'>
                          Please log in to your account.
                        </div>
                        <Formik
                          validationSchema={newAccountPasswordValidationSchema}
                          onSubmit={submitCreateAccountHandler}
                          initialValues={{
                            password: '',
                            passwordConfirmation: '',
                          }}
                        >
                          {({
                            errors,
                            handleSubmit,
                            handleChange,
                            handleBlur,
                          }) => (
                            <form onSubmit={handleSubmit}>
                              <div className='relative z-0 w-full mb-6'>
                                <input
                                  type='password'
                                  name='password'
                                  placeholder='Create Password '
                                  className='form-input'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <label className='sr-only'>
                                  Create Password *
                                </label>
                                {errors.password && (
                                  <p className='text-red-500 text-xs mt-1'>
                                    {errors.password}
                                  </p>
                                )}
                              </div>
                              <div className='relative z-0 w-full mb-6'>
                                <input
                                  type='password'
                                  name='passwordConfirmation'
                                  placeholder='Verify Password '
                                  className='form-input'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <label className='sr-only'>
                                  Verify Password *
                                </label>
                                {errors.passwordConfirmation && (
                                  <p className='text-red-500 text-xs mt-1'>
                                    {errors.passwordConfirmation}
                                  </p>
                                )}
                              </div>
                              <div>
                                <button
                                  id='btn-login-password'
                                  className='btn btn-primary'
                                  type='submit'
                                >
                                  CONTINUE
                                </button>
                              </div>
                            </form>
                          )}
                        </Formik>
                      </div>
                      <div className='w-full lg:w-1/2 px-3'>
                        <div className='text-right'>
                          <button
                            id='btn-continue-guest'
                            className='btn btn-primary'
                            onClick={continueAsGuest}
                          >
                            CONTINUE AS GUEST
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Shipping Payment Method */}
              <div
                id='ShippingPaymentMain'
                style={{ display: showShippingScreen ? 'unset' : 'none' }}
              >
                {
                  <div className='flex flex-wrap -mx-3 -mt-3'>
                    <div className='w-full lg:w-1/2 px-3 mt-3'>
                      <div
                        className=''
                        id='ShippingAddress'
                        style={{
                          display: showShippingScreen ? 'unset' : 'none',
                        }}
                      >
                        <div className='flex justify-between items-center my-3 pb-3 border-b border-gray-300'>
                          <div className='text-xl'>Shipping Address</div>
                          {isLoggedIn && (
                            <div>
                              <button
                                onClick={() => setShowChangeAddressPopup(1)}
                                className='text-anchor'
                                data-modal-toggle='shippingaddressModal'
                              >
                                Change
                              </button>
                            </div>
                          )}
                        </div>

                        {isLoggedIn && shippingAdress && (
                          <div className='text-base mb-3'>
                            {shippingAdress.firstname} {shippingAdress.lastName}
                            <br />
                            {/* {shippingAdress.companyName} */}
                            <br />
                            {shippingAdress.address1}
                            <br />
                            {[
                              shippingAdress.city,
                              shippingAdress.state,
                              shippingAdress.postalCode,
                            ].join(', ')}
                            <br />
                            {shippingAdress.countryName}
                            <br />
                            {shippingAdress.phone}
                          </div>
                        )}
                        <div
                          style={{ display: isLoggedIn ? 'none' : 'unset ' }}
                        >
                          <AddressForm
                            closePopupHandler={() => {}}
                            editData={null}
                            hideButtons={false}
                            formRef={shipping}
                            customChangeHandler={addressChangeHandler}
                            addressType='s'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='w-full lg:w-1/2 px-3 mt-3'>
                      <PaymentOption
                        {...{
                          setCardDetails,
                          creditCardType,
                          cardDetails,
                          paymentOptions,
                          checkHandler,
                          allowedBalance,
                          setPaymentMethod,
                          paymentMethod,
                          purchaseOrder,
                          setPurchaseOrder,
                          ccInputHandler,
                        }}
                      />
                      <div
                        id='BillingAddress'
                        style={{
                          display: showShippingScreen ? 'unset' : 'none',
                        }}
                      >
                        <div className='flex justify-between items-center my-3 pb-3 border-b border-gray-300 mt-8'>
                          <div className='text-xl'>Billing Address</div>
                          <div></div>
                        </div>
                        <div className='mb-3 font-semibold text-lg'>
                          <div>
                            <input
                              type='checkbox'
                              id='UseShippingAddress'
                              name='UseShippingAddress'
                              data-modal-toggle='billingaddressModal'
                              checked={useShippingAddress}
                              onChange={(e) => {
                                setUseShippingAddress(e.target.checked);
                              }}
                            />
                            <label>Use Shipping Address</label>
                          </div>
                        </div>

                        {isLoggedIn && showShippingScreen && billingAdress && (
                          <div
                            id='SelectedShippingAddress'
                            className='text-base mb-3'
                          >
                            {billingAdress.firstname} {billingAdress.lastName}
                            <br />
                            {/* {billingAdress.companyName} */}
                            <br />
                            {billingAdress.address1}
                            <br />
                            {[
                              billingAdress.city,
                              billingAdress.state,
                              billingAdress.postalCode,
                            ].join(', ')}
                            <br />
                            {billingAdress.countryName}
                            <br />
                            {billingAdress.phone}
                          </div>
                        )}
                        {!isLoggedIn && (
                          <AddressForm
                            closePopupHandler={() => {}}
                            editData={useShippingAddress ? billingAdress : null}
                            hideButtons={false}
                            formRef={billing}
                            customChangeHandler={addressChangeHandler}
                            addressType={'b'}
                            isDisabled={useShippingAddress}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                }
              </div>
              {/* Order Review */}
            </div>
            <div
              id='OrderReview'
              style={{ display: showReviewOrder ? 'unset' : 'none' }}
            >
              <div className='mb-3 mt-4'>
                <hr />
              </div>
              <ul
                role='list'
                className='border-b border-gray-200 divide-y divide-gray-200'
              >
                {cartDetails?.map((cart, index) => (
                  <li
                    key={`${cart.attributeOptionId}${index}`}
                    className='flex py-6 flex-wrap -mx-3 -mt-3'
                  >
                    <div className='w-full lg:w-4/12 px-3 mt-3'>
                      <Image
                        src={cart.colorImage}
                        className='rounded-md object-center object-cover'
                        alt='Cart Image'
                      />
                    </div>
                    <div className='w-full lg:w-8/12 px-3 mt-3'>
                      <div className='text-lg font-semibold'>
                        {cart.productName}
                      </div>
                      <div className='w-full flex flex-wrap'>
                        <div className='sm:w-2/3 mt-2'>
                          <div className='flex justify-between'>
                            <div className='text-base'>
                              <span className='font-semibold'>SKU :</span>{' '}
                              {cart.sku}
                            </div>
                          </div>
                          <div className='mt-1 flex'>
                            <div className='text-base'>
                              <span className='font-semibold'>Color :</span>{' '}
                              {cart.attributeOptionValue}
                            </div>
                          </div>
                        </div>
                        <div className='mt-2 sm:w-1/3'>
                          <div className='bold text-lg text-right'>
                            <span className=''>
                              Item Total: <Price value={cart.totalPrice} />
                            </span>
                          </div>
                        </div>
                        <div className='mt-10 mb-5 w-full'>
                          <div className='text-base font-semibold border-b pb-2'>
                            Item Details
                          </div>
                          <div className='flex justify-between py-2'>
                            <div className='text-base font-semibold w-28'>
                              Size
                            </div>
                            <div className='text-base font-semibold w-16 text-center'>
                              Qty
                            </div>
                            <div className='text-base font-semibold w-20 text-right'>
                              Price
                            </div>
                          </div>
                          {cart.shoppingCartItemDetailsViewModels.map(
                            (res, ind) => (
                              <div
                                key={`${res.attributeOptionId}${ind}`}
                                className='flex justify-between py-2'
                              >
                                <div className='text-base w-28'>
                                  {res.attributeOptionValue}
                                </div>
                                <div className='text-base w-16 text-center'>
                                  {res.qty}
                                </div>
                                <div className='text-base w-20 text-right'>
                                  <Price value={res.price} />
                                </div>
                              </div>
                            ),
                          )}

                          <div className='flex justify-between py-3 border-t border-b'>
                            <div className='text-base w-28'>Product Total:</div>
                            <div className='text-base w-16 text-center'>
                              {cart.totalQty}
                            </div>
                            <div className='text-base w-20 text-right'>
                              <Price value={cart.totalPrice} />
                            </div>
                          </div>
                        </div>
                        <div className='flex justify-start items-center mb-3'>
                          <div>
                            <span className='material-icons text-[60px] mr-3'>
                              support_agent
                            </span>
                          </div>
                          <div>
                            <div className='text-lg font-semibold'>
                              Customize Later
                            </div>
                            <div className='text-base'>
                              A Gear Expert will contact you to discuss the
                              customization of this product.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='w-full lg:w-3/12 px-3'>
            <CartSummary title='Order Summary' />
            <div className='text-base text-red-500 font-medium mb-3'>
              Please note that the tax amount on this order is subject to change
              based on the final invoice, and in accordance with local and state
              laws
            </div>
            <div className=''>
              {!showReviewOrder && (
                <button
                  onClick={handleReviewOrder}
                  // onClick={submitForm}
                  className='btn btn-lg !w-full text-center btn-secondary mb-2'
                  id='btn-review-order'
                >
                  REVIEW ORDER
                </button>
              )}
              {showReviewOrder && (
                <button
                  onClick={() => placeOrder()}
                  className='btn btn-lg !w-full text-center btn-secondary mb-2'
                >
                  PLACE ORDER
                </button>
              )}
            </div>
            <div className='bg-gray-100 p-3 text-center'>
              <div className='text-2xl font-medium mb-4 align-middle'>
                <span className='material-icons text-anchor align-middle'>
                  verified{' '}
                </span>
                <span className='align-middle'>Order Risk-Free!</span>
              </div>
              <div className='text-lg'>
                Cancel your order without penalty anytime before your proof is
                approved.
              </div>
            </div>
          </div>
        </div>
      </div>
      {showForgetPassword && (
        <ForgotModal modalHandler={() => setShowForgetPassword(false)} />
      )}
      {Boolean(showChangeAddressPopup) && (
        <AddressPopupLayout1
          showChangeAddressPopup={showChangeAddressPopup}
          addressArray={addressArray}
          defaultAddress={isLoggedIn ? '' : 's'}
          changeAddres={changeAddres}
          closeShippingPopup={closeShippingPopup}
        />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: {
  req: { cookies: { userId?: string | null; tempCustomerId?: string | null } };
  res: any;
}): Promise<GetServerSidePropsResult<any>> => {
  let userId = context.req.cookies?.userId;
  let check = false;
  let cart = null;

  if (!userId) {
    userId = context.req.cookies?.tempCustomerId;
  }

  if (userId && userId !== null) {
    cart = await FetchCartDetails({
      customerId: userId,
      //   Hardcoded for now will fix this in next PR.
      isEmployeeLoggedIn: true,
    });
    if (!_.isEmpty(cart)) {
      check = true;
    }
  }

  if (!check) {
    return {
      redirect: {
        destination: '/cart.html',
        permanent: true,
      },
    };
  }

  return {
    props: {
      cartDetails: cart,
    },
  };
};

export default Checkout;
