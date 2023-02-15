import Price from 'appComponents/reUsable/Price';
import { _Store } from 'page.config';
import React from 'react';

interface _props {
  msrp: number;
  salePrice: number;
}

const ProductPrice: React.FC<_props & { storeCode: string }> = ({
  msrp,
  salePrice,
  storeCode,
}) => {
  if (
    storeCode === _Store.type1 ||
    storeCode === _Store.type15 ||
    storeCode === _Store.type16
  ) {
    return (
      <div className='text-gray-700 pt-1 text-sm'>
        <span className='font-semibold inline-block w-16'>MSRP </span>
        <span>
          <Price
            value={undefined}
            prices={{ msrp, salePrice }}
            addColon={true}
          />
        </span>
      </div>
    );
  }

  if (storeCode === _Store.type2) {
    return (
      <div className='text-black mb-5 text-[16px] flex items-center'>
        <span className='font-bold w-32'>MSRP </span>
        <span>
          <Price value={undefined} prices={{ msrp, salePrice }} />
        </span>
      </div>
    );
  }

  if (storeCode === _Store.type3) {
    return (
      <div className='pb-4 flex items-center'>
        <span className='font-bold inline-block w-24'>MSRP </span>
        <span>
          <Price value={undefined} prices={{ msrp, salePrice }} />
        </span>
      </div>
    );
  }

  if (storeCode === _Store.type4) {
    return (
      <div className='text-black mb-2 text-sm flex items-center'>
        <span className='font-bold w-12'>MSRP </span>{' '}
        <span>
          <Price value={undefined} prices={{ msrp, salePrice }} />
        </span>
      </div>
    );
  }

  return <></>;
};

export default ProductPrice;
