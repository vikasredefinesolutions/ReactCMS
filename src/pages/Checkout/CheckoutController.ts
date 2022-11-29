import {
  checkoutNewAccountPasswordMessages,
  checkoutPasswordMessages,
  checkoutUserLoginMessages,
} from 'constants/validationMessages';
import { CustomerAddress } from 'definations/APIs/user.res';
import { useTypedSelector } from 'hooks';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

// const defaultDileveryAddres = {
//   firstName: 'John',
//   lastName: 'Smith',
//   companyName: 'Redefine',
//   streetAddress: 'Street4, Waltham',
//   address2: '',
//   city: 'Minnesota',
//   state: 'MP',
//   zipCode: '76051',
//   Country: 'United Kingdom',
//   phone: '+1 98567-59863',
// };

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
  const [address, setAddress] = useState<Array<CustomerAddress>>([]);

  const customer = useTypedSelector((state) => state.user.customer);

  const isLoggedIn = true;
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
    if (isLoggedIn && address.length > 0) {
      setShippingAdress(address[0]);
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
    if (customer.customerAddress) {
      setAddress(customer.customerAddress);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customer.customerAddress]);

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
