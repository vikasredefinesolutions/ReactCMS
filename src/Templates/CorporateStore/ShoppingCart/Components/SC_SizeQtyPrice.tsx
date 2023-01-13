import { _CI_ShoppingCartItemDetailsViewModel } from '@type/APIs/cart.res';
import MsgContainer from 'appComponents/modals/MsgContainer';
import Price from 'appComponents/reUsable/Price';
import { useActions } from 'hooks';
import React, { useState } from 'react';
import { _InCart_productAttributes_model } from 'redux/slices/_slices';
import SC_QtyInput from './SC_QtyInput';

export const SC_SizeQtyPriceRow_withEdit_n_RemoveButton: React.FC<
  _CI_ShoppingCartItemDetailsViewModel
> = ({ attributeOptionId, qty, price, attributeOptionValue }) => {
  const removeSubItemHandler = (id: number) => {};

  return (
    <div className="flex justify-between items-center py-3">
      <div className="w-full md:w-1/3 flex flex-wrap items-center gap-2">
        <div className="">Size</div>
        <div className="font-semibold">{attributeOptionValue}</div>
      </div>
      <div className="w-full md:w-1/3 flex flex-wrap items-center gap-2">
        <div className="">Qty</div>
        <div className="font-semibold w-20">
          <input type="text" className="form-input" value={qty} />
        </div>
      </div>
      <div className="w-full md:w-1/3 flex flex-wrap items-center justify-between gap-2">
        <div className="font-semibold">
          <Price value={price} />
        </div>
        <div className="">
          <button onClick={() => removeSubItemHandler(attributeOptionId)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

interface _DELETE_MSG {
  type: 'CONFIRM' | 'ALERT';
  size: string;
}

interface _HIDE_MSG {
  type: 'HIDE';
}

export const SC_SizeQtyPriceTable: React.FC<{
  details: _InCart_productAttributes_model[];
  toRemove: {
    productName: string;
    productId: number;
    colorId: number;
  };
}> = ({ details, toRemove }) => {
  const { cart_update_item } = useActions();
  const [showAlert, setShowAlert] = useState<{ size: string } | null>(null);

  const toggleConfirmationMsg = (action: _DELETE_MSG | _HIDE_MSG) => {
    if (action.type === 'ALERT') {
      setShowAlert({ size: action.size });
    }

    if (action.type === 'HIDE') {
      setShowAlert(null);
    }

    if (action.type === 'CONFIRM') {
      qtyChangeHandler({ qty: 0, size: action.size });
      setShowAlert(null);
    }
  };

  const qtyChangeHandler = (item: { qty: number; size: string }) => {
    if (item.qty > -1) {
      cart_update_item({
        type: 'update_qty',
        data: {
          ...toRemove,
          itemType: 'product',
          attributes: {
            size: item.size,
            qty: item.qty,
          },
        },
      });
    }
  };

  return (
    <div className="mt-10">
      <div className="text-base font-semibold border-b pb-2">Item Details</div>
      <div className="flex justify-between py-2">
        <div className="text-base font-semibold w-28">Size </div>
        <div className="text-base font-semibold w-16 text-center">Qty</div>
        <div className="text-base font-semibold w-20 text-right">Price</div>
        {details.length > 1 ? (
          <div className="text-base font-semibold w-20 text-right"></div>
        ) : null}
      </div>
      {details.map((item, index) => (
        <div key={index} className="flex justify-between py-2">
          <div className="text-base w-28">{item.size} </div>
          <SC_QtyInput
            qty={item.qty}
            onChange={(upQty) =>
              qtyChangeHandler({ qty: upQty, size: item.size })
            }
            minQty={item.minQtyRequired}
          />
          <div className="text-base w-20 text-right">
            <Price value={item.priceOfqty} />
          </div>
          {details.length > 1 ? (
            <button
              className="text-base w-20 text-right"
              onClick={() => {
                toggleConfirmationMsg({ type: 'ALERT', size: item.size });
              }}
            >
              delete
            </button>
          ) : null}
        </div>
      ))}
      {showAlert ? (
        <MsgContainer
          modalHandler={() => toggleConfirmationMsg({ type: 'HIDE' })}
          confirmButton={() =>
            toggleConfirmationMsg({ type: 'CONFIRM', size: showAlert.size })
          }
          message={''}
          title={'Are you sure want to remove?'}
        />
      ) : null}
    </div>
  );
};
