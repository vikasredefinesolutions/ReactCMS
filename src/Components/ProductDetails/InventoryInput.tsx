import { useActions, useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React, { useState } from 'react';
interface _props {
  size: string;
  qty: number;
  price: number;
  isDisabled?: boolean;
  color?: string;
}

const InventoryInput: React.FC<_props> = ({
  size,
  qty,
  price,
  isDisabled = false,
  color,
}) => {
  const { updateQuantities, updateQuantities2 } = useActions();
  const [value, setValue] = useState<number>(0);
  const { layout: storeLayout } = useTypedSelector((state) => state.store);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+event.target.value);

    if (storeLayout === _Store.type1) {
      updateQuantities({
        size: size,
        qty: +event.target.value,
        price: price,
      });
    } else {
      updateQuantities2({
        size: size,
        qty: +event.target.value,
        price: price,
        color: color || '',
      });
    }
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
          disabled={isDisabled}
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
