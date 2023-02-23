import MsgContainer from 'appComponents/modals/MsgContainer';
import { _modals } from 'definations/product.type';
import { useActions } from 'hooks';
import { _Store } from 'page.config';
import React, { useState } from 'react';
interface _props {
  size: string;
  qty: number;
  price: number;
  isDisabled?: boolean;
  color?: string;
  attributeOptionId: number;
}

const InventoryInput: React.FC<_props & { storeCode: string }> = ({
  size,
  qty,
  price,
  isDisabled = false,
  storeCode,
  color,
  attributeOptionId,
}) => {
  const { updateQuantities, updateQuantities2 } = useActions();
  const [value, setValue] = useState<number | string>(0);
  const [openModal, setOpenModal] = useState<null | _modals>(null);
  const modalHandler = (param: null | _modals) => {
    if (param) {
      setOpenModal(param);
      return;
    }
    setOpenModal(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+event.target.value);
    if (qty < +event.target.value) {
      setOpenModal('InventoryLimit');
      setValue(qty);
    }
    if (
      storeCode === _Store.type1 ||
      storeCode === _Store.type15 ||
      storeCode === _Store.type16
    ) {
      updateQuantities({
        size: size,
        qty: qty > +event.target.value ? +event.target.value : qty,
        price: price,
        attributeOptionId: attributeOptionId,
      });
    } else {
      updateQuantities2({
        size: size,
        qty: qty > +event.target.value ? +event.target.value : qty,
        price: price,
        attributeOptionId: attributeOptionId,
        color: color || '',
      });
    }
  };

  if (storeCode === _Store.type4) {
    return (
      <>
        <div className=''>
          <input
            type='number'
            name='qty'
            value={value}
            onChange={handleChange}
            min={0}
            max={qty}
            className=' w-full'
            disabled={isDisabled}
          />
        </div>
        {openModal === 'InventoryLimit' && (
          <MsgContainer
            title='Inventory Exceed'
            message='please Enter Less Quantity than Inventory size '
            modalHandler={modalHandler}
          />
        )}
      </>
    );
  }

  if (storeCode === _Store.type2) {
    if (qty === 0) return <div className=''>Call for Inventory</div>;

    return (
      <div className=''>
        <input
          type='number'
          name='qty'
          value={value}
          onChange={handleChange}
          min={0}
          className='border border-[#c2c2c2] px-2.5 py-1 w-20'
        />
      </div>
    );
  }

  if (storeCode === _Store.type3) {
    if (qty === 0) return <div className=''>-</div>;
    return (
      <div className='w-20'>
        <input
          // onFocus={() => setValue('')}
          // onBlur={() => setValue(value => value === '' ? 0 : value)}
          type='number'
          name='qty'
          value={value}
          onChange={handleChange}
          min={0}
          max={qty}
          className='form-input !pr-3  w-full'
        />
      </div>
    );
  }

  return <></>;
};

export default InventoryInput;
