import React from 'react';
import { _Store } from 'constants/store.constant';
import { useTypedSelector } from 'hooks';

const ColorName: React.FC = () => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const color = useTypedSelector((state) => state.product.selected.color);

  if (storeLayout === _Store.type3) {
    return (
      <div className="pb-4 pt-4 flex items-center">
        <span className="font-bold inline-block w-28">Color Name : </span>
        <span>{color.name}</span>
      </div>
    );
  }
  return <></>;
};

export default ColorName;
