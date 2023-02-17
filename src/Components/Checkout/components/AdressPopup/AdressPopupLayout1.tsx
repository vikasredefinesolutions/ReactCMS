import AddAddress from 'appComponents/modals/AddAddress';
import { AddUpdateAddressRequest } from 'definations/APIs/address.req';
import { CustomerAddress } from 'definations/APIs/user.res';
import getLocation from 'helpers/getLocation';
import { useActions, useTypedSelector } from 'hooks';
import Link from 'next/link';
import { useState } from 'react';
import { CreateUserAddress } from 'services/address.service';
import { GetStoreCustomer } from 'services/user.service';
import { AddressType } from '../../CheckoutController';

export type AddressPopupProps = {
  showChangeAddressPopup: number;
  addressArray: Array<CustomerAddress>;
  defaultAddress: string;
  // eslint-disable-next-line no-unused-vars
  changeAddres: (address: AddressType) => void;
  closeShippingPopup: () => void;
};

const AddressPopupLayout1 = ({
  showChangeAddressPopup,
  addressArray,
  defaultAddress,
  changeAddres,
  closeShippingPopup,
}: AddressPopupProps) => {
  const { updateCustomer } = useActions();
  const [addressType, setAddressType] = useState(defaultAddress);
  const customerId = useTypedSelector((state) => state.user.id);
  const closePopupHandler = () => {
    setAddressType('');
  };
  const submitHandler = async (values: AddUpdateAddressRequest) => {
    const data = await getLocation();
    const obj = {
      storeCustomerAddressModel: {
        id: 0,
        rowVersion: '',
        location: `${data.city}, ${data.region}, ${data.country}, ${data.postal_code}`,
        ipAddress: data.ip_address,
        macAddress: '00-00-00-00-00-00',
        customerId: customerId || 0,
        firstname: values.firstname,
        lastName: values.lastName,
        email: values.email,
        address1: values.address1,
        address2: values.address2 || ' ',
        suite: values.suite || ' ',
        city: values.city,
        state: values.state,
        postalCode: values.postalCode,
        phone: values.phone,
        fax: values.fax,
        countryName: values.countryName,
        countryCode: '91',
        addressType: addressType,
        isDefault: values.isDefault,
        recStatus: 'A',
        companyName: values.companyName || ' ',
      },
    };
    await CreateUserAddress(obj);
    const customer = await GetStoreCustomer(customerId || 0);
    updateCustomer({ customer: customer! });
    setAddressType('');
  };

  return (
    <>
      <div
        id='shippingaddressModal'
        aria-hidden='true'
        className='overflow-y-auto overflow-x-hidden fixed inset-0 z-50 justify-center items-center h-modal max-h-screen'
      >
        <div className='w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='relative w-full max-w-xl'>
            <div className='relative bg-white rounded-lg shadow max-h-screen overflow-y-auto'>
              <div className='flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  Change {showChangeAddressPopup === 1 ? 'Shipping' : 'Billing'}{' '}
                  Address
                </h3>
                <button
                  onClick={closeShippingPopup}
                  type='button'
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                  data-modal-toggle='shippingaddressModal'
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </button>
              </div>
              <div className='p-6 space-y-6'>
                <div className='' id=''>
                  <div className='flex flex-wrap -mx-3 gap-y-6'>
                    {addressArray
                      .filter(
                        (address) =>
                          address.addressType ===
                          (showChangeAddressPopup === 1 ? 'S' : 'B'),
                      )
                      .map((address, index) => (
                        <div key={index} className='w-full lg:w-1/2 px-3'>
                          <div className='bg-gray-100 border p-2 border-300'>
                            <div className='mb-3 '>
                              {address.firstname} {address.lastName}
                              <br />
                              {/* {address.companyName} */}
                              <br />
                              {address.address1}
                              <br />
                              {[
                                address.city,
                                address.state,
                                address.postalCode,
                              ].join(', ')}
                              <br />
                              {address.countryName}
                              <br />
                              {address.phone}
                            </div>
                            <div className='mb-3'>
                              <Link href='/' className='text-anchor'>
                                Edit
                              </Link>
                            </div>
                            <div className=''>
                              <button
                                onClick={() => changeAddres(address)}
                                className='btn btn-sm btn-primary'
                                data-modal-toggle='shippingaddressModal'
                              >
                                SHIP TO THIS ADDRESS
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-between p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
                <button
                  data-modal-toggle='shippingaddressModal'
                  type='button'
                  onClick={closeShippingPopup}
                  className='btn btn-outline-primary'
                >
                  Cancel
                </button>
                <button
                  data-modal-toggle='addshippingaddressModal'
                  type='button'
                  className='btn btn-primary'
                  onClick={() =>
                    setAddressType(showChangeAddressPopup === 1 ? 'S' : 'B')
                  }
                >
                  Add New Address
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {Boolean(addressType) && (
        <AddAddress
          {...{
            closePopupHandler,
            submitHandler,
            editData: null,
          }}
        />
      )}
    </>
  );
};

export default AddressPopupLayout1;
