import React from 'react';

const RequestFeatures: React.FC = () => {
  return (
    <div className="w-full lg:w-4/12 px-3">
      <div className="bg-gray-100 p-5 max-w-sm ml-auto h-2/3 max-h-96 flex flex-col items-center justify-center">
        <div className="border-b last:border-b-0 border-gray-300 w-full text-center p-3">
          <span className="material-icons text-3xl">local_shipping</span>
          <div className="mt-1">FREE SHIPPING ORDERS OVER $4K</div>
        </div>
        <div className="border-b last:border-b-0 border-gray-300 w-full text-center p-3">
          <span className="material-icons text-3xl">style</span>
          <div className="mt-1">1ST LOGO FREE UP TO 10,000 STITCHES</div>
        </div>
        <div className="border-b last:border-b-0 border-gray-300 w-full text-center p-3">
          <span className="material-icons text-3xl">verified</span>
          <div className="mt-1">FREE PROOF ON ALL ORDERS</div>
        </div>
      </div>
    </div>
  );
};

export default RequestFeatures;
