import Price from 'appComponents/reUsable/Price';
import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React from 'react';

interface _props {
  ourCost: number;
  msrp: number;
  imap: number;
  salePrice: number;
}

const DiscountPrice: React.FC<_props & { storeCode: string }> = ({
  msrp,
  salePrice,
  storeCode,
}) => {
  const loggedIn = useTypedSelector((state) => state.user.id);

  if (storeCode === _Store.type3) {
    if (!loggedIn) {
      return (
        <div className='flex items-center gap-2 mb-4'>
          <div className=''>Price Per Item</div>
          <div className='text-3xl font-semibold'>
            <Price value={salePrice} />
          </div>
          {/* <div className='text-gray-500'>
            <Price value={msrp} />
          </div> */}
        </div>
      );
    }

    return (
      <div className='flex items-center gap-2 mb-4'>
        <div className=''>Price Per Item</div>
        <div className='text-3xl font-semibold'>
          <Price value={salePrice} />
        </div>
        <div className='text-gray-500'>
          <Price value={msrp} />
        </div>
      </div>
    );
  }
  return <></>;
};

export default DiscountPrice;
