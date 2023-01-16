export const queryParam = {
  TEAM: 'team',
  INDIVIDUAL: 'individual',
};

export const defaultRoute = '/';

export const paths = {
  HOME: defaultRoute,
  PRODUCT: '/product',
  SPECIAL_REQUEST: '/special_request',
  PRODUCT_LISTING: '/product-list',
  NOT_FOUND: '/not-found',
  CHECKOUT: '/checkout',
  GIFT_CARDS: '/giftcards',
  GIFT_CARD_DETAILS: '/giftcards/:giftId',
  loggedInMenu: {
    title: '/myaccount/accountsettings',
    order: '/Orders',
    settings: '/myaccount/accountsettings',
    help: '/help',
    manageLogo: '/ManageLogo/ManageLogo',
  },
  myAccount: {
    account_settings: '/myaccount/accountsettings',
    user_management: '/myaccount/UserManagement',
    manage_logo: '/ManageLogo/ManageLogo',
    orders: '/Orders',
    order_details: 'Orders/Orderdetails',
    address: '/myaccount/Address',
  },
  SIGN_UP: '/CreateAccount/SignUp',
  THANK_YOU: '/Orders/Thankyou',
  thankYou: {
    notAuthorized: defaultRoute,
  },
  CART: '/cart.html',
  cart: {
    keepShopping: defaultRoute,
  },
  BRAND: '/brands.html',
  WISHLIST: '/wishlist',
  WRITE_A_REVIEW: '/writereview/writereview',
  REQUEST_CONSULTATION: '/Itempage/RequestConsultationProof',
  CUSTOMIZE_LOGO: '/customize',
  PRODUCT_COMPARE: '/Itempage/Productcomapre',
};
