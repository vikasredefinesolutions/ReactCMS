import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React from 'react';

const ColorName: React.FC<{ storeCode: string }> = ({ storeCode }) => {
  const color = useTypedSelector((state) => state.product.selected.color);

  if (storeCode === _Store.type3) {
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
