import Price from 'appComponents/reUsable/Price';
import { useTypedSelector } from 'hooks';
import React from 'react';

const CalculativeFigure: React.FC = () => {
  const { totalPrice, totalQty, price, logo, additionalLogoCharge } =
    useTypedSelector((state) => state.product.toCheckout);
  return (
    <div className='bg-gray-100 p-4 flex flex-wrap items-end justify-between gap-2 text-sm mb-6'>
      <div className=''>
        <div className='mb-2'>
          <span className='inline-block w-40'>Quantity Selected:</span>
          <span className='font-semibold text-base'>{totalQty}</span>
        </div>
        <div className='mb-2'>
          <span className='inline-block w-40'>Price Per Item:</span>
          <span className='font-semibold text-base'>
            <Price value={price} />
          </span>
        </div>
        <div className='mb-2'>
          <span className='inline-block w-40'>First Logo:</span>
          <span className='font-semibold text-base'>
            {`${
              logo.price?.length && logo.price[0] !== 'FREE' ? (
                <Price value={logo.price[0]} />
              ) : (
                'FREE'
              )
            }`}
          </span>
        </div>
        <div className='mb-2'>
          <span className='inline-block w-40'>Additional Logo(s):</span>
          <span className='font-semibold text-base'>
            <Price value={additionalLogoCharge} />
          </span>
        </div>
      </div>
      <div className='text-base'>
        <span className='inline-block mb-2'>Subtotal:</span>
        <span className='font-semibold text-xl lg:text-3xl'>
          <Price value={totalPrice} />
        </span>
      </div>
    </div>
  );
};

export default CalculativeFigure;
