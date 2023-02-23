import { useActions, useTypedSelector } from 'hooks';
import { _Store, __domain } from 'page.config';
import React from 'react';

const Ecommerce_NotificationBar: React.FC = () => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const { clearEmployeeDetails } = useActions();
  const employeeDetails = useTypedSelector((state) => state.employee);

  const employeeClear = () => {
    clearEmployeeDetails({});
    localStorage.removeItem('empData');
  };

  if (__domain.devMode) {
    return (
      <div className='bg-primary text-white px-2 sm:px-0 hidden md:block'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap justify-end items-center text-sm tracking-wider'>
            <div className='flex items-center hidden'>
              <span className='material-icons top-header-icon text-[#00b2e3] text-2xl mr-1'>
                verified
              </span>
              <span>
                Free Logo & Proof on All Orders + Free Shipping on Orders Over
                $4K
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (storeLayout === _Store.type4) {
    return (
      <div className='bg-white text-black py-1 hidden md:block text-sm'>
        <div className='container mx-auto'>
          <div className='w-full items-center text-center'>
            <div className='items-center'>
              Email:
              <a href='mailto:info@drivingi.com' title='info@drivingi.com'>
                info@drivingi.com
              </a>
              <span className='mx-2'>OR</span> Call:
              <a href='tel:+18887374864' title='888.737.4864'>
                888.737.4864
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <div className='bg-[#cdde00] hidden md:block p-2 lg:p-1 lg:py-1.5'>
        <div className='container mx-auto'>
          <div className='sm:flex sm:flex-wrap sm:justify-between items-center text-xs lg:text-base'>
            <div className='text-center'>
              <span className=''>
                FREE LOGO & FREE SHIPPING, ALL INCLUSIVE PRICING!
              </span>
            </div>
            <div className='text-center'>
              <span className=''>
                WE ARE HAPPY TO ANSWER ANY OF YOUR QUESTIONS. CALL US AT
                <span className='font-semibold'>877-218-2733</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (
    storeLayout === _Store.type1 ||
    storeLayout === _Store.type15 ||
    storeLayout === _Store.type16
  ) {
    return (
      <div className='bg-primary text-white px-2 sm:px-0 hidden md:block py-[3px] tracking-[1.4px]'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap justify-between items-center text-sm'>
            <div className='flex items-center'>
              <span className='material-icons top-header-icon text-[#00b2e3] mr-1'>
                verified
              </span>
              <span>
                Free Logo & Proof on All Orders + Free Shipping on Orders Over
                $4K
              </span>
            </div>
            <div className='flex items-center gap-3'>
              {employeeDetails.empId ? (
                <>
                  <span className='text-center text-capitalize cursor-pointer'>
                    Employee logged in
                    <a
                      className='ml-1'
                      href='http://localhost:3000'
                      style={{ color: '#7BC24E' }}
                      onClick={() => employeeClear()}
                    >
                      (LogOut)
                    </a>
                  </span>
                  <span className='p-l-5 p-r-5'>|</span>
                </>
              ) : (
                ''
              )}
            </div>
            <div className='flex items-center'>
              <span className='material-icons top-header-phone-icon mr-1 bg-[#00ce7c] rounded-full !text-[16px] !w-[22px] !h-[22px] !text-black !flex items-center justify-center'>
                phone
              </span>
              <span className=''>888-293-5648</span>
              {/* <!-- | <a href="/" data-modal-toggle="LoginModal" className="ml-1">Sign in</a> --> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
};

export default Ecommerce_NotificationBar;
