import { _MyAcc_OrderBillingDetails } from '@type/APIs/user.res';
import Price from 'appComponents/reUsable/Price';
import React from 'react';

interface _props {
  billing: _MyAcc_OrderBillingDetails | null;
}

const ThankYouSubTotal: React.FC<_props> = ({ billing }) => {
  return (
    <div className="flex justify-end">
      <div className="max-w-7xl w-96">
        <dl className="space-y-4 text-sm pt-5">
          <div className="flex justify-between">
            <dt className="sm:text-lg text-base font-semibold">SubTotal :</dt>
            <dd className="sm:text-lg text-base">
              <Price value={billing?.orderSubtotal} />
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="sm:text-lg text-base">Shipping &amp; Handling :</dt>
            <dd className="sm:text-lg text-base">
              <Price value={billing?.orderShippingCosts} />
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="sm:text-lg text-base">Tax :</dt>
            <dd className="sm:text-lg text-base">
              <Price value={billing?.orderTax} />
            </dd>
          </div>
          <div className="flex justify-between border-t border-gray-900 pt-2">
            <dt className="sm:text-lg text-base font-semibold">Grand Total:</dt>
            <dd className="sm:text-lg text-base font-semibold">
              <Price value={billing?.orderTotal} />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ThankYouSubTotal;
