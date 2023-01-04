import MsgContainer from 'appComponents/modals/MsgContainer';
import React, { useState } from 'react';

const SC_QtyInput: React.FC<{
  qty: number;
  minQty: number;
  onChange: (qty: number) => void;
}> = ({ qty, onChange, minQty }) => {
  const [currentQty, setCurrentQty] = useState<number>(qty);
  const [showModal, setShowModal] = useState<boolean>(false);

  const changeHandler = (value: number) => {
    if (value < minQty) {
      setShowModal(true);
      return;
    }
    if (currentQty === value) {
      return;
    }
    setCurrentQty(value);
    onChange(value);
  };

  return (
    <>
      <input
        className="text-base w-16 text-center"
        value={currentQty > -1 ? currentQty : minQty}
        type={'number'}
        min={0}
        onChange={(ev) => changeHandler(+ev.target.value)}
      />
      {showModal ? (
        <MsgContainer
          modalHandler={() => setShowModal(false)}
          message={`Minimum ${minQty}-${
            minQty === 1 ? 'Qty' : 'Qtys'
          } required`}
          title={'No Appropriate Inventory!'}
        />
      ) : null}
    </>
  );
};

export default SC_QtyInput;
