import { paths } from '@constants/paths.constant';
import { _CartItem } from '@type/APIs/cart.res';
import Price from 'appComponents/reUsable/Price';
import Link from 'next/link';
import React from 'react';

const Ecom_RequestConsultation_OrderDetails: React.FC<{ item: _CartItem }> = ({
  item,
}) => {
  return (
    <div className='w-full pl-0 pr-[15px]'>
      <div className=''>
        <div className='bg-gray-100 flex flex-wrap items-center justify-between px-3 py-1'>
          <div className='font-bold text-lg'>Order Details</div>
          <Link href={paths.CART} className='text-anchor text-lg font-bold'>
            Edit
          </Link>
        </div>
      </div>
      <div className='mt-[15px] border border-gray-400 text-black text-[15px]'>
        <div className='p-[15px] pb-0'>
          <div className='text-base font-semibold mb-5'>{item.productName}</div>
          <div className='flex flex-wrap justify-between border-b border-b-gray-200 mb-2.5 last:border-b-0 last:mb-0'>
            <div className='w-7/12 mb-[5px]'>Color:</div>
            <div className='w-5/12 mb-[5px] font-semibold text-right'>
              {item.attributeOptionValue}
            </div>
          </div>
          <div className='flex flex-wrap justify-between border-b border-b-gray-200 mb-2.5 last:border-b-0 last:mb-0'>
            <div className='w-7/12 mb-[5px]'>Size:</div>
            <div className='w-5/12 mb-[5px] text-right'>
              {item.shoppingCartItemDetailsViewModels.map((size) => (
                <div
                  key={size.id}
                  className='mb-[5px]'
                >{`${size.attributeOptionValue} - ${size.qty} QTY`}</div>
              ))}
            </div>
          </div>
          <div className='flex flex-wrap justify-between border-b border-b-gray-200 mb-2.5 last:border-b-0 last:mb-0'>
            <div className='w-7/12 mb-[5px]'>Total Quantity:</div>
            <div className='w-5/12 mb-[5px] font-semibold text-right'>
              {item.totalQty}
            </div>
          </div>
          <div className='flex flex-wrap justify-between border-b border-b-gray-200 mb-2.5 last:border-b-0 last:mb-0'>
            <div className='w-7/12 mb-[5px]'>Price Per Item:</div>
            <div className='w-5/12 mb-[5px] font-semibold text-right'>
              <Price value={item.totalPrice / item.totalQty} />
            </div>
          </div>
          <div className='flex flex-wrap justify-between border-b border-b-gray-200 mb-[5px] last:border-b-0 last:mb-0'>
            <div className='w-7/12 mb-[5px]'>Subtotal:</div>
            <div className='w-5/12 mb-[5px] font-semibold text-right'>
              <Price value={item.totalPrice} />
            </div>
          </div>
          {/* <div className='flex flex-wrap justify-between border-b border-b-gray-200 mb-2.5 last:border-b-0 last:mb-0'>
            <div className='w-7/12 mb-[5px]'>Shipping:</div>
            <div className='w-5/12 mb-[5px] font-semibold text-right'>FREE</div>
          </div> */}
        </div>
        <div className='bg-gray-100 py-2 flex flex-wrap justify-between text-lg font-bold'>
          <div className='w-1/4 px-[15px]'>Total:</div>
          <div className='w-3/4 px-[15px] text-right'>
            <Price value={item.totalPrice} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecom_RequestConsultation_OrderDetails;
