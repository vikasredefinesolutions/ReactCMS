/* eslint-disable no-console */
import { StoreLayout } from '@constants/enum';
import { __Cookie, __Cookie_Expiry } from '@constants/global.constant';
import { OrderDefaultObject } from '@constants/order.constant';
import { paths } from '@constants/paths.constant';
import { paymentMethod as paymentEnum } from '@constants/payment';
import {
  checkCustomerAlreadyExist,
  placeOrder as PlaceOrderService,
  updateCartByNewUserId,
} from '@services/cart.service';
import {
  getCustomerAllowBalance,
  getPaymentOption,
} from '@services/payment.servicee';
import {
  CreateNewAccount,
  GetStoreCustomer,
  signInUser,
} from '@services/user.service';
import { PaymentOptions } from '@type/APIs/cart.req';
import { StoreCustomerAddress, _SignUpPayload } from '@type/APIs/signUp.req';
import { signup_payload } from 'Components/SignUp/signup.payload';
import {
  checkoutNewAccountPasswordMessages,
  checkoutPasswordMessages,
  checkoutUserLoginMessages,
} from 'constants/validationMessages';
import CartSummaryController from 'Controllers/cartSummarryController';
import { CustomerAddress } from 'definations/APIs/user.res';
import { deleteCookie, extractCookies, setCookie } from 'helpers/common.helper';
import getLocation from 'helpers/getLocation';
import { useActions, useTypedSelector } from 'hooks';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';
import * as Yup from 'yup';

const creditCardInitital = {
  cardNumber: '',
  cardVarificationCode: '',
  cardExpirationMonth: '',
  cardExpirationYear: '',
};

export type AddressType = CustomerAddress;
export type CreditCardDetailsType = typeof creditCardInitital;
const CheckoutController = () => {
  const { getTotalPrice } = CartSummaryController();
  const router = useRouter();
  const {
    showModal,
    fetchCartDetails,
    cart_userUpdate,
    updateCustomer,
    logInUser: logInUserFn,
    logoutClearCart,
    customerCreditBalanceUpdate,
  } = useActions();
  const employeeData = useTypedSelector((state) => state.employee);
  const useBalance = useTypedSelector(
    (state) => state.cart.userCreditBalance.useBalance,
  );
  const customer = useTypedSelector((state) => state.user.customer);
  // const storeId = useTypedSelector((state) => state.store.id);
  const { id: storeId, ...store } = useTypedSelector((state) => state.store);
  const storeType = store.storeTypeId;
  const [custId, setCustId] = useState<string | number | null>(null);
  const isLoggedIn = Boolean(customer?.id);

  const [address, setAddress] = useState<Array<CustomerAddress>>([]);
  const [showEmail, setShowEmail] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [showShippingScreen, setShowShippingScreen] = useState(false);

  const [shippingAdress, setShippingAdress] = useState<CustomerAddress | null>(
    null,
  );
  const [useShippingAddress, setUseShippingAddress] = useState(true);
  const [billingAdress, setBillingAdress] = useState<CustomerAddress | null>(
    null,
  );
  const [cardDetails, setCardDetails] =
    useState<CreditCardDetailsType>(creditCardInitital);
  const [showChangeAddressPopup, setShowChangeAddressPopup] = useState(NaN);
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [paymentOptions, setPaymentOption] = useState<PaymentOptions | null>(
    null,
  );
  const [email, setEmail] = useState('');
  const [allowedBalance, setAllowedBalance] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(paymentEnum.creditCard);
  const [purchaseOrder, setPurchaseOrder] = useState('');
  const [addAccount, setAddAccount] = useState(false);
  const [passwordDetails, setPasswordDetails] = useState<null | {
    password: string;
    passwordConfirmation: string;
  }>(null);

  // ==========================================================
  // Form Validations Schemas

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(checkoutUserLoginMessages.email.email)
      .required(checkoutUserLoginMessages.email.required),
  });

  const passwordValidationSchema = Yup.object().shape({
    password: Yup.string()
      .min(3, checkoutPasswordMessages.password.min)
      .required(checkoutPasswordMessages.password.required),
  });

  const newAccountPasswordValidationSchema = Yup.object().shape({
    password: Yup.string()
      .min(3, checkoutNewAccountPasswordMessages.password.min)
      .required(checkoutNewAccountPasswordMessages.password.required),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref('password'), null],
      checkoutNewAccountPasswordMessages.passwordConfirmation.mustMatch,
    ),
  });

  // ==========================================================

  useEffect(() => {
    let c_id: string | null | number;

    if (customer?.id) {
      c_id = customer?.id;
      getCustomerAllowBalance(+customer?.id).then((res) => {
        if (res && typeof res === 'number') {
          setAllowedBalance(res);
        }
      });
    } else {
      c_id = extractCookies(
        __Cookie.tempCustomerId,
        'browserCookie',
      ).tempCustomerId;
    }
    setCustId(c_id);
    if (c_id) {
      fetchCartDetails({
        customerId: c_id,
        isEmployeeLoggedIn: employeeData.loggedIn,
      });
    }

    if (customer && customer.customerAddress) {
      setAddress(customer.customerAddress);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customer]);

  useEffect(() => {
    if (isLoggedIn && address.length > 0) {
      setShippingAdress(address[0]);
    }

    if (isLoggedIn) {
      setShowEmail(false);
      setShowShippingScreen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, address]);

  useEffect(() => {
    if (useShippingAddress) {
      setBillingAdress(shippingAdress);
    } else if (showShippingScreen) {
      if (isLoggedIn) {
        setShowChangeAddressPopup(2);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useShippingAddress, shippingAdress]);

  useEffect(() => {
    if (storeId) {
      getPaymentOption({ storeId }).then((payment) =>
        setPaymentOption(payment),
      );
    }
  }, [storeId]);

  const checkPayment = () => {
    let { totalPrice } = getTotalPrice();
    if (totalPrice > 0) {
      if (paymentEnum.creditCard === paymentMethod) {
        if (Object.values(cardDetails).some((x) => x === null || x === '')) {
          showModal({ message: 'Invalid Card Details', title: 'Warning' });
          return;
        }
      } else if (paymentEnum.purchaseOrder === paymentMethod) {
        if (purchaseOrder.length <= 0) {
          showModal({
            message: 'Invalid Purchase Order Details',
            title: 'Warning',
          });
          return;
        }
      } else {
        showModal({
          message: 'Please select a valid payment method',
          title: 'Warning',
        });
        return false;
      }
    }
    return true;
  };

  const placeOrder = async () => {
    let { subTotal, totalPrice, salesTax, discount, creditBalance } =
      getTotalPrice();

    if (!checkPayment()) {
      return;
    }

    if (useBalance && totalPrice === 0) {
      totalPrice = creditBalance;
    }

    if (addAccount) {
      const location = await getLocation();

      const payload: _SignUpPayload = {
        storeCustomerModel: {
          ...signup_payload,
          firstname: billingAdress?.firstname!,
          lastName: billingAdress?.lastName!,
          email: billingAdress?.email!,
          password: passwordDetails?.password!,
          confirmPassword: passwordDetails?.passwordConfirmation!,
          companyName: billingAdress?.companyName!,
          location: `${location.city}, ${location.region}, ${location.country}, ${location.postal_code}`,
          ipAddress: location.ip_address,
          storeId: storeId!,
          customerType: 'corporate',
          storeCustomerAddress: [
            { ...(shippingAdress as StoreCustomerAddress) },
            { ...(billingAdress as StoreCustomerAddress) },
          ],
          recStatus: 'A',
        },
      };

      await CreateNewAccount(payload);
    }

    const card = {
      cardType: creditCardType(cardDetails.cardNumber),
      cardNumber: cardDetails.cardNumber,
      cardVarificationCode: cardDetails.cardVarificationCode,
      cardExpirationMonth: cardDetails.cardExpirationMonth,
      cardExpirationYear: cardDetails.cardExpirationYear,
    };

    const purchaseOrderObj = {
      AuthorizationPNREF: purchaseOrder,
    };

    const orderModel = {
      ...OrderDefaultObject,
      ...(paymentMethod === paymentEnum.creditCard ? card : {}),
      ...(paymentMethod === paymentEnum.purchaseOrder ? purchaseOrderObj : {}),
      ...(useBalance
        ? {
            isCreditLimit: true,
            storeCredit: creditBalance,
          }
        : {}),
      paymentMethod,
      storeID: storeId,
      customerID: custId,
      firstName: customer?.firstname || billingAdress?.firstname,
      lastName: customer?.lastName || billingAdress?.lastName,
      email: customer?.email || billingAdress?.email,
      billingEqualsShipping: useShippingAddress,
      billingEmail: billingAdress?.email,
      billingFirstName: billingAdress?.firstname,
      billingLastName: billingAdress?.lastName,
      billingCompany: billingAdress?.companyName,
      billingAddress1: billingAdress?.address1,
      billingAddress2: billingAdress?.address2,
      billingSuite: billingAdress?.suite,
      billingCity: billingAdress?.city,
      billingState: billingAdress?.state,
      billingZip: billingAdress?.postalCode,
      billingCountry: billingAdress?.countryName,
      billingPhone: billingAdress?.phone,
      shippingEmail: shippingAdress?.email,
      shippingFirstName: shippingAdress?.firstname,
      shippingLastName: shippingAdress?.lastName,
      shippingCompany: shippingAdress?.companyName,
      shippingAddress1: shippingAdress?.address1,
      shippingAddress2: shippingAdress?.address2,
      shippingSuite: shippingAdress?.suite,
      shippingCity: shippingAdress?.city,
      shippingState: shippingAdress?.state,
      shippingZip: shippingAdress?.postalCode,
      shippingCountry: shippingAdress?.countryName,
      shippingPhone: shippingAdress?.phone,
      orderSubtotal: subTotal,
      orderTax: salesTax,
      orderTotal: totalPrice,
      couponDiscountAmount: discount,
      orderStatus: 'E',
      transactionStatus: 'P',
    };

    const order = {
      orderModel,
    };
    try {
      logoutClearCart();
      deleteCookie(__Cookie.tempCustomerId);
      const res = await PlaceOrderService(order);
      router.push(`${paths.THANK_YOU}?orderNumber=${res.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  function creditCardType(cc: string) {
    var re = new RegExp('^4');
    if (cc.match(re) != null) return 'VISA';

    if (
      /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(
        cc,
      )
    )
      return 'MASTERCARD';

    re = new RegExp('^3[47]');
    if (cc.match(re) != null) return 'AMEX';

    re = new RegExp(
      '^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)',
    );
    if (cc.match(re) != null) return 'DISCOVER';

    return '';
  }

  const closeShippingPopup = () => {
    if (showChangeAddressPopup === 2) {
      setUseShippingAddress(true);
    }
    setShowChangeAddressPopup(NaN);
  };

  const changeAddres = (address: CustomerAddress) => {
    (showChangeAddressPopup === 1 ? setShippingAdress : setBillingAdress)(
      address,
    );
    setShowChangeAddressPopup(NaN);
  };

  const checkCustomer = async (value: { email: string }) => {
    if (storeId) {
      if (storeType === StoreLayout.StoreBuilderStore) {
        setShowEmail(false);
        continueAsGuest();
        return;
      }
      try {
        const response = await checkCustomerAlreadyExist(
          value.email,
          ~~storeId,
        );
        if (!response) return;
        setShowEmail(false);
        setEmail(value.email);

        if (response.isGuestCustomer) {
          cart_userUpdate({
            type: 'guestLogin',
            data: {
              showThankYou: true,
              email: value.email,
              guestId: response.id,
              isCustomerExist: response.isCustomerExist,
              isGuestCustomer: response.isGuestCustomer,
            },
          });
        }

        if (response?.isCustomerExist) {
          setShowPassword(true);
        } else {
          setShowAddAccount(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const logInUser = async (value: { password: string }) => {
    if (storeId) {
      try {
        const response = await signInUser({
          password: value.password,
          storeId: ~~storeId,
          userName: email,
        });
        if (response.credentials === 'VALID') {
          if (~~response.id > 0) {
            logInUserFn({
              id: +response.id,
            });
            setCookie(__Cookie.userId, response.id, __Cookie_Expiry.userId);

            GetStoreCustomer(+response.id).then((res) => {
              if (res === null) return;
              if (localStorage) {
                const tempCustomerId = extractCookies(
                  __Cookie.tempCustomerId,
                  'browserCookie',
                ).tempCustomerId;

                if (tempCustomerId) {
                  updateCartByNewUserId(~~tempCustomerId, res.id);
                  deleteCookie(__Cookie.tempCustomerId);
                  setShowShippingScreen(true);
                  setShowPassword(false);
                }
              }
              updateCustomer({ customer: res });
            });

            // if (!isLoggedIn) {
            //   setShowChangeAddressPopup(1);
            // }
          }
        } else {
          showModal({
            message: response.message,
            title: 'error',
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const continueAsGuest = () => {
    setShowShippingScreen(true);
    setShowPassword(false);
    setShowAddAccount(false);
    // if (!isLoggedIn) {
    //   setShowChangeAddressPopup(1);
    // }
  };

  const addressChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { value, name } = event.target;
    let shipAddress = {} as CustomerAddress;
    if (shippingAdress) {
      shipAddress = shippingAdress;
    }

    shipAddress = { ...shipAddress, [name]: value };
    setShippingAdress(shipAddress);
    if (useShippingAddress) {
      setBillingAdress(shipAddress);
    }
  };

  const checkHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const useBalance = e.target.checked;
    customerCreditBalanceUpdate({
      useBalance,
      allowedBalance,
    });
  };

  const submitCreateAccountHandler = (values: {
    password: string;
    passwordConfirmation: string;
  }) => {
    setPasswordDetails(values);
    setAddAccount(true);
    setShowShippingScreen(true);
    setShowAddAccount(false);
  };

  const ccInputHandler = (
    ev: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setCardDetails({ ...cardDetails, [ev.target.name]: ev.target.value });
  };

  return {
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
    addressArray: address,
    purchaseOrder,
    setPurchaseOrder,
    setPaymentMethod,
    paymentMethod,
    submitCreateAccountHandler,
    ccInputHandler,
    checkPayment,
  };
};

export default CheckoutController;
