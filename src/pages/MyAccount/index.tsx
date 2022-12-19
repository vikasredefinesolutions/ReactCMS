import { useState } from 'react';
import AccountSetting from './Components/AccountSetting';
import ManageLogo from './Components/ManageLogo';
import UserAddress from './Components/UserAddress';
import UserManagement from './Components/UserManagement';

const MyAccount = () => {
  const Tabs = [
    { label: 'Account Settings' },
    { label: 'User Management' },
    { label: 'Manage Logo' },
    { label: 'Orders' },
    { label: 'Address' },
    { label: 'Logout' },
  ];

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      {currentTab === 0 && <AccountSetting />}
      {currentTab === 1 && <UserManagement />}
      {currentTab === 2 && <ManageLogo />}
      {currentTab === 4 && <UserAddress />}
    </>
  );
  
};

export default MyAccount;
