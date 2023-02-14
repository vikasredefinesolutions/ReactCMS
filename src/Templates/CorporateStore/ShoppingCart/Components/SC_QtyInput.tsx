import MsgContainer from 'appComponents/modals/MsgContainer';
import React, { useState } from 'react';

const SC_QtyInput: React.FC<{
  qty: number;
  minQty: number;
  maxQty: number;
  onChange: (qty: number) => void;
}> = ({ qty, onChange, minQty, maxQty }) => {
  const [currentQty, setCurrentQty] = useState<number>(qty);
  const [showModal, setShowModal] = useState<boolean>(false);

  const changeHandler = (value: number) => {
    if (value > maxQty) {
      setShowModal(true);
      setCurrentQty(maxQty);
    } else {
      setCurrentQty(value);
      onChange(value);
    }
  };

  return (
    <>
      <input
        className='text-base w-16 text-center'
        value={currentQty}
        type={'number'}
        min={0}
        max={maxQty}
        onChange={(ev) => changeHandler(+ev.target.value)}
      />
      {showModal ? (
        <MsgContainer
          modalHandler={() => setShowModal(false)}
          message={
            currentQty < minQty
              ? `Minimum ${minQty}-${minQty === 1 ? 'Qty' : 'Qtys'} required`
              : `Maximum ${maxQty}-Qtys can be entered`
          }
          title={'No Appropriate Inventory!'}
        />
      ) : null}
    </>
  );
};

export default SC_QtyInput;
