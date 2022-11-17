import { useState } from 'react';
import AddUserModal from '../../../components/modals/AddUserModal';

export type User = {
  email: string;
  createdDate?: Date;
  role: string;
  lastLoggedIn?: Date;
  firstName: string;
  lastName: string;
};

const UserManagement = () => {
  const currentUser = {
    firstName: 'Hetal',
    lastName: 'Patel',
    email: 'hetal.patel@gmail.com',
    createdDate: new Date('2020-05-16'),
    role: 'administrator',
    lastLoggedIn: new Date(),
  };

  const [userList, setUserList] = useState([currentUser]);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const closeModal = () => {
    setShowAddUserModal(false);
  };

  const submitHandler = (values: User) => {
    userList.push({
      ...values,
      createdDate: new Date(),
      lastLoggedIn: new Date(),
    });
    setUserList(userList);
    closeModal();
  };
  return (
    <>
      <section className="container mx-auto bg-gray-100 px-6 py-6 mt-5 mb-5">
        <div className="mx-auto space-y-10 sm:px-4 lg:px-0 pb-2">
          <div className="bg-white border-t border-b border-gray-200 sm:border">
            <div className="flex items-center p-4 border-b border-gray-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6 bg-gray-50">
              <div className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-4 sm:grid-cols-4 lg:col-span-2"></div>
              <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                <button
                  data-modal-toggle="adduserModal"
                  className="btn btn-primary"
                  onClick={() => setShowAddUserModal(true)}
                >
                  <span>Add User</span>
                </button>
              </div>
            </div>
            <ul role="list" className="divide-y divide-gray-200 ">
              <li className="p-4 sm:p-6">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/3">
                    {currentUser.firstName} {currentUser.lastName}
                  </div>
                  <div className="w-full lg:w-1/3">
                    Created on: {currentUser.createdDate.toLocaleDateString()}
                  </div>
                  <div className="w-full lg:w-1/3">
                    {currentUser.role === 'administrator'
                      ? 'You have admin acceess'
                      : 'You are a User'}
                  </div>
                </div>
              </li>
              <li className="p-4 sm:p-6">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/3">{currentUser.email}</div>
                  <div className="w-full lg:w-1/3">
                    Last log on: {currentUser.lastLoggedIn.toLocaleDateString()}
                  </div>
                  <div className="w-full lg:w-1/3">
                    <a href="index.html">Logout</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white border-t border-b border-gray-200 sm:border overflow-auto">
            <table className="table w-full border">
              <thead className="border-b-2 divide-gray-300">
                <tr className="divide-x divide-gray-300 text-left">
                  <th className="p-2">Username</th>
                  <th className="p-2">Role</th>
                  <th className="p-2">Email Address</th>
                  <th className="p-2">Created date</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {userList.map((user) => (
                  <tr className="divide-x divide-gray-300">
                    <td className="p-2">
                      {user.firstName} {user.lastName}
                    </td>
                    <td className="p-2">{user.role}</td>
                    <td className="p-2">{user.email}</td>
                    <td className="p-2">
                      {user.createdDate.toLocaleDateString()}
                    </td>
                    <td className="p-2"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {showAddUserModal && (
        <AddUserModal submitHandler={submitHandler} closeModal={closeModal} />
      )}
    </>
  );
};

export default UserManagement;
