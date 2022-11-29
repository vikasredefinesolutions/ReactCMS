import { useState } from 'react';
import AccountSetting from './Components/AccountSetting';
import ManageLogo from './Components/ManageLogo';
import UserAddress from './Components/UserAddress';
import UserManagement from './Components/UserManagement';
import UserOrder from './Components/UserOrders';

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
      <section>
        <div className="container mx-auto">
          <div className="text-3xl font-primary uppercase text-center">
            MY ACCOUNT
          </div>
          <div className="bg-gray-100 mt-5 mb-5 flex justify-center">
            <ul className="flex flex-wrap gap-4">
              {Tabs.map((res, index) => (
                <li
                  key={index}
                  className={`border-b text-base font-semibold px-3 py-3 ${
                    currentTab === index ? 'border-blue-500' : ''
                  }`}
                >
                  <a
                    onClick={() => setCurrentTab(index)}
                    href="#"
                    className={currentTab === index ? 'active' : ''}
                  >
                    {res.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {currentTab === 0 && <AccountSetting />}
      {currentTab === 1 && <UserManagement />}
      {currentTab === 2 && <ManageLogo />}
      {currentTab === 3 && <UserOrder />}
      {currentTab === 4 && <UserAddress />}
    </>
  );
};

export default MyAccount;
