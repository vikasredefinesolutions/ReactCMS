// import AddressForm from 'appComponents/ui/AddressForm';
import AddressForm from 'appComponents/ui/AddressForm';
import { AddUpdateAddressRequest } from 'definations/APIs/address.req';
import { CustomerAddress } from 'definations/APIs/user.res';

const AddAddress = ({
  closePopupHandler,
  submitHandler,
  editData,
}: {
  closePopupHandler: () => void;
  // eslint-disable-next-line no-unused-vars
  submitHandler: (arg: AddUpdateAddressRequest) => void;
  editData: CustomerAddress | null;
}) => {
  return (
    <div
      id='AddNewAddress'
      aria-hidden='true'
      className='overflow-y-auto overflow-x-hidden fixed inset-0 z-50 justify-center items-center h-modal max-h-screen'
    >
      <div className='w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
        <div className='relative w-full max-w-2xl'>
          <div className='relative bg-white rounded-lg shadow max-h-screen overflow-y-auto'>
            <div className='flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                {editData ? 'Edit Address' : 'Add New Address'}
              </h3>
              <button
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                data-modal-toggle='AddNewAddress'
                onClick={closePopupHandler}
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
            <AddressForm
              {...{
                submitHandler,
                closePopupHandler,
                editData: editData ? editData : null,
                addressType: 'B',
                hideButtons: true,
                padding: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
