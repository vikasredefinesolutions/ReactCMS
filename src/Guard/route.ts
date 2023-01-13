export const defaultRoute = '/';

export const routesToProtect = [
  {
    private: '/Orders',
    redirectTo: defaultRoute,
  },
  {
    private: '/Orders/Orderdetails',
    redirectTo: defaultRoute,
  },
  {
    private: '/myaccount/accountsettings',
    redirectTo: defaultRoute,
  },

  {
    private: '/myaccount/accountsettings',
    redirectTo: defaultRoute,
  },
  {
    private: '/ManageLogo/ManageLogo',
    redirectTo: defaultRoute,
  },
  {
    private: '/wishlist',
    redirectTo: defaultRoute,
  },
];
