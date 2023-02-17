import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  AddCustomerUser,
  deleteCustomerUserList,
  getCustomerUserList,
  UpdateCustomerUser,
} from '@services/customerUser.service';
import {
  CustomerAddResponse,
  CustomerUsersObject,
} from '@type/APIs/customerUser.res';
import { _User } from '@type/user.type';
import AddUserModal from 'appComponents/modals/AddUserModal';
import {
  CommanMessage,
  UserManagement as UserMessage,
} from 'constants/successErrorMessages.constant';
import getLocation from 'helpers/getLocation';
import { useActions, useTypedSelector } from 'hooks';
import { useEffect, useState } from 'react';

export type User = {
  email: string;
  createdDate?: Date;
  role: string;
  lastLoggedIn?: Date;
  firstName: string;
  lastName: string;
};

const UserManagement = () => {
  const { showModal, setShowLoader } = useActions();
  const customer = useTypedSelector((state) => state.user.customer);
  const store = useTypedSelector((state) => state.store.id);
  const [userList, setUserList] = useState<CustomerUsersObject[] | null>(null);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [editData, setEditData] = useState<CustomerUsersObject | null>(null);
  const closeModal = () => {
    setShowAddUserModal(false);
    setEditData(null);
  };

  const fetchUserList = async () => {
    const userList = await getCustomerUserList(customer?.id || 0);
    if (userList) {
      setUserList(userList);
    }
  };

  useEffect(() => {
    if (customer?.id) {
      fetchUserList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customer?.id]);

  const submitHandler = async (
    values: _User,
    formikProps: {
      setFieldError: (arg0: string, arg1: string | undefined) => void;
    },
  ) => {
    const location = await getLocation();
    const isUpdating = Boolean(editData);
    const userObject = {
      storeCustomerUsersModel: {
        id: isUpdating ? editData?.id : 0,
        rowVersion: '',
        location: location.country,
        ipAddress: location.ip_address,
        macAddress: '00-00-00-00-00-00',
        firstname: values.firstName,
        lastName: values.lastName,
        email: values.email,
        customerRoleId: values.role,
        customerId: customer?.id,
        storeId: store,
        recStatus: 'A',
      },
    };
    setShowLoader(true);
    try {
      const res = (await (isUpdating ? UpdateCustomerUser : AddCustomerUser)(
        userObject,
      )) as unknown as CustomerAddResponse;
      if (res?.success) {
        showModal({
          message: isUpdating
            ? UserMessage.UpdatedSuccessfully
            : UserMessage.AddedSuccessfully,
          title: 'Success',
        });
        fetchUserList();
        closeModal();
      } else {
        if (res?.errors['storeCustomerUsersModel.Email']) {
          formikProps.setFieldError(
            'email',
            res?.errors['storeCustomerUsersModel.Email'],
          );
        } else {
          showModal({ message: CommanMessage.Failed, title: 'Failed' });
          closeModal();
        }
      }
    } catch (error) {
      showModal({ message: CommanMessage.Failed, title: 'Failed' });
    }
    setShowLoader(false);
  };

  const deleteUser = async (customerId: number) => {
    const isConfirm = await confirm('Are you sure? You want to delete this.');
    if (isConfirm) {
      setShowLoader(true);
      try {
        await deleteCustomerUserList(customerId);
        await fetchUserList();
        showModal({
          message: UserMessage.DeletedSuccessfully,
          title: 'Success',
        });
      } catch (error) {
        showModal({ message: CommanMessage.Failed, title: 'Failed' });
      }
      setShowLoader(false);
    }
  };

  return (
    <>
      <section className='container mx-auto mt-5 mb-5'>
        <div className='mx-auto space-y-10 sm:px-4 lg:px-0 pb-2'>
          <div className='bg-white border-t border-b border-gray-200 sm:border'>
            <div className='flex items-center p-4 border-b border-gray-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6 bg-gray-50'>
              <div className='flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-4 sm:grid-cols-4 lg:col-span-2'></div>
              <div className='hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4'>
                <button
                  data-modal-toggle='adduserModal'
                  className='btn btn-primary'
                  onClick={() => setShowAddUserModal(true)}
                >
                  <span>Add User</span>
                </button>
              </div>
            </div>
            <ul role='list' className='divide-y divide-gray-200 mx-2 md:mx-4'>
              <li className='p-2 sm:p-4'>
                <div className='flex flex-wrap'>
                  <div className='w-full lg:w-1/3'>
                    {customer?.firstname} {customer?.lastName}
                  </div>
                  <div className='w-full lg:w-1/3'>
                    Created on:{' '}
                    {customer && customer.createdDate
                      ? new Date(customer.createdDate).toLocaleDateString()
                      : '-'}
                  </div>
                  <div className='w-full lg:w-1/3'>
                    {customer && customer.customerRoleId === 2
                      ? 'You are a User'
                      : 'You have admin acceess'}
                  </div>
                </div>
              </li>
              <li className='p-2 sm:p-4'>
                <div className='flex flex-wrap'>
                  <div className='w-full lg:w-1/3'>{customer?.email}</div>
                  <div className='w-full lg:w-1/3'>
                    Last log on: {new Date().toLocaleDateString()}
                  </div>
                  <div className='w-full lg:w-1/3'>
                    <a href='index.html'>Logout</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className='bg-white border-t border-b border-gray-200 sm:border overflow-auto'>
            <table className='table w-full border'>
              <thead className='border-b-2 divide-gray-300'>
                <tr className='divide-x divide-gray-300 text-left'>
                  <th className='p-2'>Username</th>
                  <th className='p-2'>Role</th>
                  <th className='p-2'>Email Address</th>
                  <th className='p-2'>Created date</th>
                  <th className='p-2'>Action</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-300'>
                {userList &&
                  userList.map((user, index) => (
                    <tr key={index} className='divide-x divide-gray-300'>
                      <td className='p-2'>
                        {user.firstname} {user.lastname}
                      </td>
                      <td className='p-2'>{user.customerRoleName}</td>
                      <td className='p-2'>{user.email}</td>
                      <td className='p-2'>
                        {new Date(user.createdDate).toLocaleDateString()}
                      </td>
                      <td className='p-2'>
                        <div className='flex flex-wrap gap-x-4'>
                          <EditIcon
                            className='text-primary'
                            onClick={() => {
                              setEditData(user);
                              setShowAddUserModal(true);
                            }}
                          />
                          <DeleteIcon
                            onClick={() => deleteUser(user?.id || 0)}
                            className='text-red-500'
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {showAddUserModal && (
        <AddUserModal
          submitHandler={submitHandler}
          closeModal={closeModal}
          editData={editData}
        />
      )}
    </>
  );
};

export default UserManagement;
