import { _ThankYouOrder } from 'definations/thankYou.type';
import React from 'react';

interface _props {
  order: _ThankYouOrder;
}

const ThankYouSubTotal: React.FC<_props> = () => {
  return (
    <div className="flex justify-end">
      <div className="max-w-7xl w-96">
        <dl className="space-y-4 text-sm pt-5">
          <div className="flex justify-between">
            <dt className="sm:text-lg text-base font-semibold">SubTotal :</dt>
            <dd className="sm:text-lg text-base">$4,780.00</dd>
          </div>
          <div className="flex justify-between">
            <dt className="sm:text-lg text-base">Shipping &amp; Handling :</dt>
            <dd className="sm:text-lg text-base">$35.00</dd>
          </div>
          <div className="flex justify-between">
            <dt className="sm:text-lg text-base">Tax :</dt>
            <dd className="sm:text-lg text-base">$35.60</dd>
          </div>
          <div className="flex justify-between border-t border-gray-900 pt-2">
            <dt className="sm:text-lg text-base font-semibold">Grand Total:</dt>
            <dd className="sm:text-lg text-base font-semibold">$4,850.60</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ThankYouSubTotal;
