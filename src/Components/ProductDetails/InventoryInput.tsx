import React, { useState } from 'react';
import { _Store } from 'constants/store.constant';
import { useActions, useTypedSelector } from 'hooks';
interface _props {
  size: string;
  qty: number;
  price: number;
}

const InventoryInput: React.FC<_props> = ({ size, qty, price }) => {
  const { updateQuantities } = useActions();
  const [value, setValue] = useState<number>(0);
  const { layout: storeLayout } = useTypedSelector((state) => state.store);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+event.target.value);

    updateQuantities({
      size: size,
      qty: +event.target.value,
      price: price,
    });
  };

  if (storeLayout === _Store.type4) {
    return (
      <div className="">
        <input
          type="number"
          name="qty"
          value={value}
          onChange={handleChange}
          min={0}
          className="form-input"
        />
      </div>
    );
  }

  if (storeLayout === _Store.type2) {
    if (qty === 0) return <div className="">Call for Inventory</div>;

    return (
      <div className="">
        <input
          type="number"
          name="qty"
          value={value}
          onChange={handleChange}
          min={0}
          className="border border-[#c2c2c2] px-2.5 py-1 w-20"
        />
      </div>
    );
  }

  if (storeLayout === _Store.type3) {
    if (qty === 0) return <div className="">-</div>;
    return (
      <div className="w-20">
        <input
          type="number"
          name="qty"
          value={value}
          onChange={handleChange}
          min={0}
          className="form-input !pr-3  w-full"
        />
      </div>
    );
  }

  return <></>;
};

export default InventoryInput;
