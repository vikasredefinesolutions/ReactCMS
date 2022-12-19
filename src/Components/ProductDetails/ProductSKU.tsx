import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React from 'react';

interface _props {
  skuID: string;
}

const ProductSKU: React.FC<_props> = ({ skuID }) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);

  if (storeLayout === _Store.type1) {
    return (
      <div className="text-gray-700 pt-1 text-sm">
        <span className="font-semibold inline-block w-16">SKU </span>
        <span>: {skuID}</span>
      </div>
    );
  }

  if (storeLayout === _Store.type3) {
    return (
      <div className="pb-4 flex items-center">
        <span className="font-bold inline-block w-24">SKU </span>
        <span>: {skuID}</span>
      </div>
    );
  }

  if (storeLayout === _Store.type4) {
    return (
      <div className="text-black mb-2 text-sm flex items-center">
        <span className="font-bold w-12">SKU </span> <span>: {skuID}</span>
      </div>
    );
  }

  return <></>;
};

export default ProductSKU;
