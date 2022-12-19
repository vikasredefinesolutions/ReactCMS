import { checkCustomerAlreadyExist } from '@services/cart.service';
import { signInUser } from '@services/user.service';
import {
  checkoutNewAccountPasswordMessages,
  checkoutPasswordMessages,
  checkoutUserLoginMessages,
} from 'constants/validationMessages';
import { CustomerAddress } from 'definations/APIs/user.res';
import { useActions, useTypedSelector } from 'hooks';
import { useEffect, useState } from 'react';
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

export type AddressType = CustomerAddress;
export type CreditCardType = typeof cardArray;
const CheckoutController = () => {
  const { showModal, fetchCartDetails } = useActions();

  const customer = useTypedSelector((state) => state.user.customer);
  // const storeId = useTypedSelector((state) => state.store.id);
  const { id: storeId, ...store } = useTypedSelector((state) => state.store);
  const cartProducts = useTypedSelector((state) => state.cart.cart);
  const isLoggedIn = false;

  const [address, setAddress] = useState<Array<CustomerAddress>>([]);
  const [showEmail, setShowEmail] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [showShippingScreen, setShowShippingScreen] = useState(false);

  const [shippingAdress, setShippingAdress] = useState<CustomerAddress>();
  const [useShippingAddress, setUseShippingAddress] = useState(true);
  const [billingAdress, setBillingAdress] = useState<CustomerAddress>();
  const [cardDetails, setCardDetails] = useState('');
  const [showCVVHelpCard, setShowCVVHelpCard] = useState(false);
  const [purchaseOrder, setPurchaseOrder] = useState(false);
  const [showChangeAddressPopup, setShowChangeAddressPopup] = useState(NaN);
  const [showAddAccount, setShowAddAccount] = useState(false);
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
    if (customer?.id) {
      fetchCartDetails(customer?.id);
    }
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
      setShowChangeAddressPopup(2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useShippingAddress, shippingAdress]);

  useEffect(() => {
    if (customer && customer.customerAddress) {
      setAddress(customer.customerAddress);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customer]);

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
        setShowEmail(false);
        setEmail(value.email);
        if (response?.isAlreadyExitsCustomer) {
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
        if (response) {
          if (~~response > 0) {
            setShowShippingScreen(true);
            setShowPassword(false);
            if (!isLoggedIn) {
              setShowChangeAddressPopup(1);
            }
          } else {
            showModal({
              message: response.toString(),
              type: 'error',
            });
          }
        }

        // if (response?.isAlreadyExitsCustomer) {
        //   setShowPassword(true);
        // } else {
        //   setShowAddAccount(true);
        // }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getTotalPrice = () => {
    let priceObject = {
      totalPrice: 0,
      subTotal: 0,
      smallRunFee: 0,
      logoSetupCharges: 0,
      salesTax: 0,
    };

    if (cartProducts && cartProducts.length > 0) {
      let totalQty = 0;
      cartProducts.forEach((res: any) => {
        priceObject.totalPrice += res.totalPrice;
        priceObject.subTotal += res.totalPrice;
        totalQty += res.totalQty;
      });

      if (store.cartCharges) {
        const {
          isSmallRun,
          smallRunLimit,
          smallRunFeesCharges,
          isLogoSetupCharges,
          logoSetupCharges,
        } = store.cartCharges;
        if (isSmallRun) {
          if (totalQty < smallRunLimit) {
            priceObject.totalPrice += smallRunFeesCharges;
            priceObject.smallRunFee = smallRunFeesCharges;
          }
        }
        if (isLogoSetupCharges) {
          priceObject.totalPrice += logoSetupCharges;
          priceObject.logoSetupCharges = logoSetupCharges;
        }
      }
    }

    return priceObject;
  };

  return {
    creditCardType,
    setShowEmail,
    setShowPassword: isLoggedIn ? setShowPassword : setShowAddAccount,
    setShowForgetPassword,
    setShowShippingScreen,
    setShippingAdress,
    setUseShippingAddress,
    setCardDetails,
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
  };
};

export default CheckoutController;
