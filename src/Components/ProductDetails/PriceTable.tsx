import { FetchDiscountTablePrices } from '@services/product.service';
import Price from 'appComponents/reUsable/Price';
import { c_getSeName } from 'helpers/common.helper';
import { useActions, useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React, { useEffect } from 'react';

const QtyPriceTable: React.FC<{ storeCode: string }> = ({ storeCode }) => {
  const { product_storeData } = useActions();
  const { id: storeId } = useTypedSelector((state) => state.store);
  const customerId = useTypedSelector((state) => state.user.id);
  const selectedColor = useTypedSelector(
    (state) => state.product.selected.color,
  );
  const { discounts } = useTypedSelector((state) => state.product.product);

  useEffect(() => {
    if (
      storeId &&
      customerId &&
      selectedColor &&
      storeCode &&
      discounts === null
    ) {
      FetchDiscountTablePrices({
        storeId: storeId,
        seName: c_getSeName('PRODUCT DETAILS'),
        customerId: customerId,
        attributeOptionId: selectedColor.attributeOptionId,
      }).then((res) =>
        product_storeData({
          type: 'DISOCUNT_TABLE_PRICES',
          data: res,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerId, storeCode, selectedColor.attributeOptionId]);

  if (
    storeCode === _Store.type1 ||
    storeCode === _Store.type15 ||
    storeCode === _Store.type16
  ) {
    return (
      <>
        {customerId !== null && (
          <div className='bg-gray-100 flex flex-wrap text-center border border-gray-300'>
            <div className='hidden md:block text-left'>
              <div className='p-1 px-2 border-r border-b border-gray-300 font-semibold'>
                Quantity:
              </div>
              <div className='p-1 px-2 border-r border-gray-300 font-semibold'>
                Price:
              </div>
            </div>
            <div className='flex flex-wrap text-center grow'>
              {discounts?.subRows?.map((column) => (
                <div className='sm:w-1/5' key={column.discountPrice}>
                  <div className='p-1 px-2 border-b border-gray-300'>
                    {column.displayQuantity}
                  </div>
                  <div className='p-1 px-2'>
                    <Price value={column.discountPrice} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    );
  }

  if (storeCode === _Store.type3) {
    return (
      <div className='mb-4 border border-gray-300 text-center'>
        <div className='bg-gray-300 p-2 font-semibold'>QUANTITY DISCOUNT</div>
        <div className='flex flex-wrap justify-center py-3'>
          {discounts?.subRows.map((row) => (
            <div
              key={row.displayQuantity}
              className='border-r last:border-r-0 border-r-gray-300 px-2'
            >
              <div className=''>{row.displayQuantity}</div>
              <div className=''>
                <Price value={row.discountPrice} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (storeCode === _Store.type2) {
    return (
      <>
        {customerId && (
          <div className='mb-4 border border-black text-center'>
            <div className='bg-black p-2 font-bold text-white'>
              QUANTITY DISCOUNT
            </div>
            <div className='flex flex-wrap justify-center py-3'>
              {discounts?.subRows.map((row) => (
                <div
                  key={row.displayQuantity}
                  className='border-r last:border-r-0 border-r-gray-300 px-6'
                >
                  <div className='font-bold'>{row.displayQuantity}</div>
                  <div className='font-bold'>
                    <Price value={row.discountPrice} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    );
  }

  if (storeCode === _Store.type4) {
    return (
      <div className='bg-gray-100 flex flex-wrap text-center border border-gray-300'>
        <div className='hidden md:block text-left'>
          <div className='p-1 px-2 border-r border-b border-gray-300 font-semibold'>
            Quantity:
          </div>
          <div className='p-1 px-2 border-r border-gray-300 font-semibold'>
            Price:
          </div>
        </div>
        <div className='flex flex-wrap text-center grow gap-y-5'>
          {discounts?.subRows.map((row) => (
            <div className='w-1/2 md:w-1/5' key={row.displayQuantity}>
              <div className='p-1 px-2 border-b border-gray-300'>
                {row.displayQuantity}
              </div>
              <div className='p-1 px-2'>
                <Price value={row.discountPrice} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <></>;
};

export default QtyPriceTable;
