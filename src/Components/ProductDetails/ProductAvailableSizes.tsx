import React from 'react';
import { _Store } from 'constants/store.constant';
import { extractString } from 'helpers/conversions';
import { useTypedSelector } from 'hooks';

interface _props {
  sizes: string[];
}

const ProducAvailableSizes: React.FC<_props> = ({ sizes }) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);

  if (storeLayout === _Store.type1) {
    return (
      <div className="text-lg">
        <span className="font-semibold">Available Size(s):</span>
        <span>{extractString(sizes)}</span>
      </div>
    );
  }

  return <></>;
};

export default ProducAvailableSizes;
