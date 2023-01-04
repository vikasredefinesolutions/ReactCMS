import React from 'react';

export const Cyxtera_NotificationBar: React.FC = () => {
  return (
    <div className="bg-gray-100 p-2 hidden md:block">
      <div className="">
        <div className="flex flex-wrap justify-between items-center text-sm tracking-wider">
          <div className="flex items-center">
            <span>Email customerservice@parsonskellogg.com</span>
          </div>
          <div className="flex items-center">
            <span className="">Questions? Call us at (866) 602-8398</span>
            {/* <!-- | <a href="javascript:void(0);" data-modal-toggle="LoginModal" className="ml-1">Sign in</a> --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
