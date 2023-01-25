import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React from 'react';

const ProducAvailableSizes: React.FC = () => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const sizes = useTypedSelector((state) => state.product.product.sizes);

  if (
    storeLayout === _Store.type1 ||
    storeLayout === _Store.type15 ||
    storeLayout === _Store.type16
  ) {
    return (
      <div className='text-lg'>
        <span className='font-semibold'>Available Size(s):</span>
        <span>{` ${sizes}`}</span>
      </div>
    );
  }

  return <></>;
};

export default ProducAvailableSizes;
