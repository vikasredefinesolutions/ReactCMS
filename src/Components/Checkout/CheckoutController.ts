/* eslint-disable no-console */
import { __Cookie, __Cookie_Expiry } from '@constants/global.constant';
import { paths } from '@constants/paths.constant';
import {
  checkCustomerAlreadyExist,
  placeOrder as PlaceOrderService,
  updateCartByNewUserId,
} from '@services/cart.service';
import { getPaymentOption } from '@services/payment.servicee';
import { GetStoreCustomer, signInUser } from '@services/user.service';
import {
  checkoutNewAccountPasswordMessages,
  checkoutPasswordMessages,
  checkoutUserLoginMessages,
} from 'constants/validationMessages';
import CartSummaryController from 'Controllers/cartSummarryController';
import { CustomerAddress } from 'definations/APIs/user.res';
import { deleteCookie, extractCookies, setCookie } from 'helpers/common.helper';
import { useActions, useTypedSelector } from 'hooks';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';
import * as Yup from 'yup';
const cardArray = [
  {
    name: 'VISA',
    image: 'images/card-visa.webp',
  },
  {
    name: 'AMEX',
    image: 'images/card-american-express.webp',
  },
  {
    name: 'MASTERCARD',
    image: 'images/card-master.webp',
  },
  {
    name: 'DISCOVER',
    image: 'images/card-discover.webp',
  },
];

const creditCardInitital = {
  cardNumber: '',
  cardVarificationCode: '',
  cardExpirationMonth: '',
  cardExpirationYear: '',
};

export type AddressType = CustomerAddress;
export type CreditCardType = typeof cardArray;
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
  } = useActions();
  const employeeData = useTypedSelector((state) => state.employee);

  const customer = useTypedSelector((state) => state.user.customer);
  // const storeId = useTypedSelector((state) => state.store.id);
  const { id: storeId, ...store } = useTypedSelector((state) => state.store);
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
  const [showCVVHelpCard, setShowCVVHelpCard] = useState(false);
  const [purchaseOrder, setPurchaseOrder] = useState(false);
  const [showChangeAddressPopup, setShowChangeAddressPopup] = useState(NaN);
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [paymentOptions, setPaymentOption] = useState<any | null>(null);
  const [email, setEmail] = useState('');

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

  useEffect(() => {
    let c_id: string | null | number;

    if (customer?.id) {
      c_id = customer?.id;
    } else {
      c_id = extractCookies(
        __Cookie.tempCustomerId,
        'browserCookie',
      ).tempCustomerId;
    }
    setCustId(c_id);
    if (c_id)
      fetchCartDetails({
        customerId: c_id,
        isEmployeeLoggedIn: employeeData.loggedIn,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customer?.id]);

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
    if (customer && customer.customerAddress) {
      setAddress(customer.customerAddress);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customer]);

  useEffect(() => {
    if (storeId) {
      getPaymentOption({ storeId }).then((payment) =>
        setPaymentOption(payment),
      );
    }
  }, [storeId]);
  const placeOrder = async () => {
    const { subTotal, totalPrice, salesTax, logoSetupCharges, discount } =
      getTotalPrice();
    console.log(Object.values(cardDetails).some((x) => x === null || x === ''));
    if (Object.values(cardDetails).some((x) => x === null || x === '')) {
      showModal({ message: 'Invalid Card Details', title: 'Warning' });
      return;
    }

    let order = {
      orderModel: {
        id: 0,
        storeID: storeId,
        isNew: true,
        shoppingCartID: 0,
        customerID: custId,
        firstName: customer?.firstname || billingAdress?.firstname,
        lastName: customer?.lastName || billingAdress?.lastName,
        email: customer?.email || billingAdress?.email,
        notes: 'this is an order',
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
        shippingMethod: 'Bluedart',
        okToEmail: true,
        cardName: 'Debit Card',
        cardType: creditCardType(cardDetails.cardNumber),
        cardNumber: cardDetails.cardNumber,
        cardVarificationCode: cardDetails.cardVarificationCode,
        cardExpirationMonth: cardDetails.cardExpirationMonth,
        cardExpirationYear: cardDetails.cardExpirationYear,
        couponCode: '',
        couponDiscountAmount: discount,
        giftCertiSerialNumber: '',
        giftCertificateDiscountAmount: 0,
        quantityDiscountAmount: 0,
        levelDiscountPercent: 0,
        levelDiscountAmount: 0,
        customDiscount: 0,
        orderSubtotal: subTotal,
        orderTax: salesTax,
        orderShippingCosts: 0,
        orderTotal: totalPrice,
        authorizationCode: '',
        authorizationResult: '',
        authorizationPNREF: '',
        transactionCommand: '',
        lastIPAddress: '',
        paymentGateway: '',
        paymentMethod: '',
        orderStatus: 'E',
        transactionStatus: 'P',
        avsResult: '',
        captureTxCommand: '',
        captureTXResult: '',
        authorizedOn: new Date(),
        capturedOn: new Date(),
        orderDate: new Date(),
        deleted: true,
        referrer: '',
        refundedAmount: 0,
        chargeAmount: 0,
        authorizedAmount: 0,
        adjustmentAmount: 0,
        orderNotes: '',
        isGiftWrap: true,
        giftWrapAmt: 0,
        inventoryWasReduced: true,
        refOrderID: '',
        isMobileOrder: true,
        batchId: 0,
        shippingLabelCost: 0,
        shippingLabelWeight1: 0,
        shippingLabelPackageHeight: 0,
        shippingLabelPackageWidth: 0,
        shippingLabelPackageLength: 0,
        noOfLabels: 0,
        salesAgentId: 0,
        isApproved: true,
        dimensionValue: 0,
        giftWrapPrice: 0,
        shipPromotionDiscount: 0,
        isFullFillment: true,
        isAmazonuplaod: true,
        cvvResult: '',
        isMailSend: true,
        shippedByStamps: true,
        logoFinalTotal: 0,
        lineFinalTotal: 0,
        isExport: true,
        inHandDate: '2022-12-15T10:50:21.912Z',
        storeCredit: 0,
        chargeHostedPaymentID: 'string',
        sewout: true,
        sewoutTotal: 0,
        digitalTotal: 0,
        empSourceName: 'string',
        empSourceMedium: 'string',
        gclid: 'string',
        isPayLater: true,
        orderCheckoutNote: 'string',
        empSalesRap: 'string',
        employeeID: 0,
      },
    };

    try {
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

  const bindSubmitForm = () => {};

  const ccInputHandler = (
    ev: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setCardDetails({ ...cardDetails, [ev.target.name]: ev.target.value });
  };

  console.log(cardDetails);

  return {
    creditCardType,
    setShowEmail,
    setShowPassword: isLoggedIn ? setShowPassword : setShowAddAccount,
    setShowForgetPassword,
    setShowShippingScreen,
    setShippingAdress,
    setUseShippingAddress,
    setCardDetails: ccInputHandler,
    setShowCVVHelpCard,
    setPurchaseOrder,
    setShowChangeAddressPopup,
    setBillingAdress,
    closeShippingPopup,
    changeAddres,
    setShowAddAccount,
    checkCustomer,
    logInUser,
    getTotalPrice,
    continueAsGuest,
    bindSubmitForm,
    addressChangeHandler,
    placeOrder,
    useShippingAddress,
    cardArray,
    passwordValidationSchema,
    newAccountPasswordValidationSchema,
    addressArray: address,
    showEmail,
    showPassword,
    showForgetPassword,
    billingAdress,
    showCVVHelpCard,
    cardDetails,
    purchaseOrder,
    showChangeAddressPopup,
    validationSchema,
    showShippingScreen,
    shippingAdress,
    showAddAccount,
    isLoggedIn,
    paymentOptions,
  };
};

export default CheckoutController;
