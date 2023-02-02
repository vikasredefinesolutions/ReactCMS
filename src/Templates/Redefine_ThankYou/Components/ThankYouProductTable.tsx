import { _MyAcc_OrderProductDetails } from '@type/APIs/user.res';
import Price from 'appComponents/reUsable/Price';
import React from 'react';

interface _props {
  product: _MyAcc_OrderProductDetails;
}

const ThankYouProductTable: React.FC<_props> = ({ product }) => {
  return (
    <div className='mt-10 mb-5 w-full'>
      <div className='text-base font-semibold border-b pb-2'>Item Details</div>
      <div className='flex justify-between py-2'>
        <div className='text-base font-semibold w-28'>Size </div>
        <div className='text-base font-semibold w-16 text-center'>Qty</div>
        <div className='text-base font-semibold w-20 text-right'>Price</div>
      </div>

      {product.shoppingCartItemDetailsViewModels.map((prod, index) => (
        <div key={index} className='flex justify-between py-2'>
          <div className='text-base w-28'>{prod.attributeOptionValue} </div>
          <div className='text-base w-16 text-center'>{prod.qty}</div>
          <div className='text-base w-20 text-right'>
            <Price value={prod.price} />
          </div>
        </div>
      ))}

      <div className='flex justify-between py-3 border-t border-b'>
        <div className='text-base w-28'>Product Total: </div>
        <div className='text-base w-16 text-center'>{product.totalQty}</div>
        <div className='text-base w-20 text-right'>
          <Price value={product.totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default ThankYouProductTable;
