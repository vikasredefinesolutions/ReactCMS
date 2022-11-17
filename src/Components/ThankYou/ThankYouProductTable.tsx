import React from 'react';
import { _ThankYouOrder } from '../../../definations/thankYou.type';

interface _props {
  order: _ThankYouOrder;
}

const ThankYouProductTable: React.FC<_props> = () => {
  return (
    <div className="mt-10 mb-5 w-full">
      <div className="text-base font-semibold border-b pb-2">Item Details</div>
      <div className="flex justify-between py-2">
        <div className="text-base font-semibold w-28">Size </div>
        <div className="text-base font-semibold w-16 text-center">Qty</div>
        <div className="text-base font-semibold w-20 text-right">Price</div>
      </div>

      <div className="flex justify-between py-2">
        <div className="text-base w-28">XS </div>
        <div className="text-base w-16 text-center">4</div>
        <div className="text-base w-20 text-right">$494.00</div>
      </div>

      <div className="flex justify-between py-3 border-t border-b">
        <div className="text-base w-28">Product Total: </div>
        <div className="text-base w-16 text-center">24</div>
        <div className="text-base w-20 text-right">$2,964.00</div>
      </div>
    </div>
  );
};

export default ThankYouProductTable;
