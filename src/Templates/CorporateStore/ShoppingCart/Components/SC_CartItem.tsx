import { _CartItem } from '@type/APIs/cart.res';
import MsgContainer from 'appComponents/modals/MsgContainer';
import Image from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import { useActions } from 'hooks';
import Link from 'next/link';
import React, { useState } from 'react';
import { _InCart_Item_model } from 'redux/slices/slices';
import {
  SC_SizeQtyPriceRow_withEdit_n_RemoveButton,
  SC_SizeQtyPriceTable,
} from './SC_SizeQtyPrice';

export const SC_CartItem_withPersonalization: React.FC<_CartItem> = (item) => {
  return (
    <li className="border-b border-b-gray-300">
      <div className="flex flex-wrap py-5 -mx-3">
        <div className="w-full lg:w-1/3 px-3">
          <Link href={item.seName} className="block border border-gray-100">
            <Image src={item.colorImage} alt={item.productName} className="" />
          </Link>
        </div>

        <div className="w-full lg:w-2/3 px-3 flex flex-wrap lg:justify-between">
          <div className="text-lg font-semibold">
            <Link
              href={item.seName}
              className="text-black hover:text-anchor-hover"
            >
              {item.productName}
            </Link>
          </div>
          <div className="w-full flex flex-wrap">
            <div className="w-full mt-4">
              <div className="flex justify-between">
                <div className="text-base">
                  <span className="font-semibold">SKU :</span> {item.sku}
                </div>
                <div className="text-base">
                  <span className="font-semibold">Color :</span>
                  {item.attributeOptionValue}
                </div>
              </div>
              <div className="mt-4 border-t border-t-gray-500">
                {item.shoppingCartItemDetailsViewModels.map((detail, index) => (
                  <SC_SizeQtyPriceRow_withEdit_n_RemoveButton
                    key={index}
                    {...detail}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export const SC_CartItem_withoutPersonalization: React.FC<
  _InCart_Item_model
> = (item) => {
  const { cart_update } = useActions();
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const removeItemHandler = ({
    productId,
    colorId,
  }: {
    productId: number;
    colorId: number;
  }) => {
    cart_update({
      type: 'remove_item',
      data: {
        productId,
        colorId,
      },
    });
  };

  const toggleConfirmationMsg = (action: 'ALERT' | 'HIDE' | 'CONFIRM') => {
    if (action === 'ALERT') {
      setShowAlert(true);
    }

    if (action === 'HIDE') {
      setShowAlert(false);
    }

    if (action === 'CONFIRM') {
      removeItemHandler({
        productId: item.productId,
        colorId: item.colorId,
      });
      setShowAlert(false);
    }
  };

  if (item === null) {
    return <></>;
  }

  return (
    <li className="flex flex-wrap py-5 -mx-3">
      <div className="w-full lg:w-1/4 px-3">
        <Link href={item?.seName} title="">
          {/* <Image
            src={item?.colorImageURL}
            alt={item?.productName}
            className=""
          /> */}
          sdf
        </Link>
      </div>

      <div className="w-full lg:w-3/4 px-3 flex flex-wrap lg:justify-between">
        <div className="text-lg font-semibold">
          <Link
            href={item?.seName}
            className="text-black hover:text-anchor-hover"
          >
            {item?.productName}
          </Link>
        </div>
        <div className="w-full flex flex-wrap">
          <div className="lg:w-2/3 w-full mt-2">
            <div className="flex justify-between">
              <div className="text-base">
                <span className="font-semibold">SKU :</span> {item?.sku}
              </div>
            </div>
            <div className="mt-1 flex">
              <div className="text-base">
                <span className="font-semibold">Color :</span>
                {item?.colorName}
              </div>
            </div>
            <SC_SizeQtyPriceTable
              details={item?.attributes}
              toRemove={{
                productName: item.productName,
                productId: item.productId,
                colorId: item.colorId,
              }}
            />
          </div>
          <div className="mt-2 lg:w-1/3 w-full">
            <div className="bold text-xl text-right">
              <span className="">
                Item Total:
                <Price value={item?.productTotalPrice} />
              </span>
            </div>
            <div className="mt-3 lg:ml-10">
              <button
                onClick={() => toggleConfirmationMsg('ALERT')}
                className="btn btn-primary !w-full !py-1 text-center"
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>
      </div>
      {showAlert ? (
        <MsgContainer
          modalHandler={() => toggleConfirmationMsg('HIDE')}
          message={item.productName}
          confirmButton={() => toggleConfirmationMsg('CONFIRM')}
          title={'Are you sure want to remove?'}
        />
      ) : null}
    </li>
  );
};
