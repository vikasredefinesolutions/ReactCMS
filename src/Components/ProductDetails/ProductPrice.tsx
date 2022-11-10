import React from 'react';
import Price from '../../../components/reusables/Price';
import { _Store } from 'constants/store.constant';
import { useTypedSelector } from 'hooks';

interface _props {
  ourCost: number;
  msrp: number;
  imap: number;
  salePrice: number;
}

const ProductPrice: React.FC<_props> = ({ msrp }) => {
  const { layout: storeLayout } = useTypedSelector((state) => state.store);

  if (storeLayout === _Store.type1) {
    return (
      <div className="text-gray-700 pt-1 text-sm">
        <span className="font-semibold inline-block w-16">MSRP </span>
        <span>
          <Price value={msrp} />
        </span>
      </div>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <div className="text-black mb-5 text-[16px] flex items-center">
        <span className="font-bold w-32">MSRP </span>
        <span>
          {`: `}
          <Price value={msrp} />
        </span>
      </div>
    );
  }

  if (storeLayout === _Store.type3) {
    return (
      <div className="pb-4 flex items-center">
        <span className="font-bold inline-block w-24">MSRP </span>
        <span>
          <Price value={msrp} />
        </span>
      </div>
    );
  }

  if (storeLayout === _Store.type4) {
    return (
      <div className="text-black mb-2 text-sm flex items-center">
        <span className="font-bold w-12">MSRP </span>{' '}
        <span>
          <Price value={msrp} />
        </span>
      </div>
    );
  }

  return <></>;
};

export default ProductPrice;
