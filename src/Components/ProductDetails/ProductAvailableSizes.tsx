import React from 'react';
import { _Store } from 'constants/store.constant';
import { extractString } from 'helpers/conversions';
import { useTypedSelector } from 'hooks';

const ProducAvailableSizes: React.FC = () => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const sizes = useTypedSelector((state) => state.product.product.sizes);

  if (storeLayout === _Store.type1) {
    return (
      <div className="text-lg">
        <span className="font-semibold">Available Size(s):</span>
        <span>{sizes}</span>
      </div>
    );
  }

  return <></>;
};

export default ProducAvailableSizes;
