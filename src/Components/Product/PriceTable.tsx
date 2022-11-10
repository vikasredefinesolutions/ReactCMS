import React, { useEffect, useState } from 'react';
import Price from '../../../components/reusables/Price';
import { _Store } from '../../../constants/store.constant';
import { _ProductDiscountTable } from '../../../definations/APIs/discountTable.res';
import { useTypedSelector } from '../../../hooks';
import { FetchDiscountTablePrices } from '../../../services/product.service';

const QtyPriceTable: React.FC = () => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const customerId = useTypedSelector((state) => state.user.id);
  const [discounts, setDiscounts] = useState<null | _ProductDiscountTable>(
    null,
  );

  useEffect(() => {
    // if (store.id === null || user.id === null) return;
    // FetchDiscountTablePrices({
    //   storeId: store.id!,
    //   seName: store.seName,
    //   customerId: user.id!,
    //   attributeOptionId: 0,
    // }).then((res) => console.log('res', res));

    FetchDiscountTablePrices({
      storeId: 4,
      seName: 'Nike-Men-s-Club-Fleece-Sleeve-Swoosh-Pullover-Hoodie',
      customerId: customerId || 0,
      attributeOptionId: 1380,
    }).then(setDiscounts);
  }, []);

  if (storeLayout === _Store.type1) {
    return (
      <div className="bg-gray-100 flex flex-wrap text-center border border-gray-300">
        <div className="hidden md:block text-left">
          <div className="p-1 px-2 border-r border-b border-gray-300 font-semibold">
            Quantity:
          </div>
          <div className="p-1 px-2 border-r border-gray-300 font-semibold">
            Price:
          </div>
        </div>
        <div className="flex flex-wrap text-center grow">
          {discounts?.subRows?.map((column) => (
            <div className="sm:w-1/5" key={column.discountPrice}>
              <div className="p-1 px-2 border-b border-gray-300">
                {column.displayQuantity}
              </div>
              <div className="p-1 px-2">
                <Price value={column.discountPrice} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (storeLayout === _Store.type3) {
    return (
      <div className="mb-4 border border-gray-300 text-center">
        <div className="bg-gray-300 p-2 font-semibold">QUANTITY DISCOUNT</div>
        <div className="flex flex-wrap justify-center py-3">
          {discounts?.subRows.map((row) => (
            <div
              key={row.displayQuantity}
              className="border-r last:border-r-0 border-r-gray-300 px-2"
            >
              <div className="">{row.displayQuantity}</div>
              <div className="">
                <Price value={row.discountPrice} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (storeLayout === _Store.type4) {
    return (
      <div className="bg-gray-100 flex flex-wrap text-center border border-gray-300">
        <div className="hidden md:block text-left">
          <div className="p-1 px-2 border-r border-b border-gray-300 font-semibold">
            Quantity:
          </div>
          <div className="p-1 px-2 border-r border-gray-300 font-semibold">
            Price:
          </div>
        </div>
        <div className="flex flex-wrap text-center grow gap-y-5">
          {discounts?.subRows.map((row) => (
            <div className="w-1/2 md:w-1/5" key={row.displayQuantity}>
              <div className="p-1 px-2 border-b border-gray-300">
                {row.displayQuantity}
              </div>
              <div className="p-1 px-2">
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
