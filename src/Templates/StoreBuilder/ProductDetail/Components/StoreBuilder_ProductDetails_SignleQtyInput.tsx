import { useActions, useTypedSelector } from 'hooks';
import React, { useEffect, useState } from 'react';

interface _props {
  price: number;
  size: string;
}
let lastSize_stored: string = '';

const StoreBuilder_ProductDetails_SingleQtyInput: React.FC<_props> = ({
  price,
  size,
}) => {
  const { storeBuilder_updateQtys } = useActions();
  const [qty, setQty] = useState<number>(0);
  const attributeOptionId = useTypedSelector(
    (state) => state.product.selected.color.attributeOptionId,
  );

  const quantityHandler = (enteredQty: number) => {
    let newQuantity = 0;

    if (enteredQty >= 0) {
      newQuantity = enteredQty;
    }

    setQty(newQuantity);
    storeBuilder_updateQtys({
      attributeOptionId: attributeOptionId,
      size: size,
      qty: newQuantity,
      price: price,
    });
  };

  useEffect(() => {
    if (!size) return;

    setQty(0);
    storeBuilder_updateQtys({
      attributeOptionId: attributeOptionId,
      size: lastSize_stored || size,
      qty: 0,
      price: price,
    });
    lastSize_stored = size;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  return (
    <div className='flex flex-wrap items-center mb-4'>
      <div className='w-32 text-sm items-center'>
        <span className='text-sm font-semibold'>Qty:</span>
      </div>
      <div className='text-sm'>
        <div className='w-20'>
          <input
            type='number'
            className='form-input'
            id='QTY'
            value={qty}
            onChange={(ev) => quantityHandler(+ev.target.value)}
            placeholder=''
            // disabled
          />
        </div>
      </div>
    </div>
  );
};

export default StoreBuilder_ProductDetails_SingleQtyInput;
