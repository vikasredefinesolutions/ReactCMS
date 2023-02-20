import Price from 'appComponents/reUsable/Price';
import { useTypedSelector } from 'hooks';
import React from 'react';
import SelectOrInput from './SelectOrInput';

type Props = {
  editDetails: {
    price: number;
    qty: number;
    optionValue: string;
  }[];
};
const SizePriceQtyTable: React.FC<Props> = ({ editDetails }) => {
  const { price, inventory } = useTypedSelector(
    (state) => state.product.product,
  );
  const { price: discountedPrice, sizeQtys } = useTypedSelector(
    (state) => state.product.toCheckout,
  );
  const { color } = useTypedSelector((state) => state.product.selected);
  return (
    <div className=''>
      <div className='overflow-x-auto max-h-screen'>
        <table
          cellPadding='0'
          cellSpacing='0'
          className='table-auto w-full text-xs text-center text-[#191919]'
        >
          <thead className='text-xs font-semibold border-b border-neutral-200'>
            <tr className=''>
              <th className='px-2 py-4 w-32'>
                <div className=''>Size</div>
              </th>
              <th className='px-2 py-4 w-32'>
                <div className=''>Price</div>
              </th>
              <th className='px-2 py-4 w-32'>
                <div className=''>Qty</div>
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-slate-200'>
            {/* {inventory?.sizes.map((colorWithAllSizes, index) => {
              const showOrNot =
                colorWithAllSizes.colorAttributeOptionId ===
                color.attributeOptionId;

              if (!showOrNot) return <Fragment key={index}></Fragment>;

              return colorWithAllSizes.sizeArr.map((size) => {
                const foundWithSameSizeAndColor = inventory.inventory?.find(
                  (int) =>
                    int.name === size &&
                    int.colorAttributeOptionId ===
                      colorWithAllSizes.colorAttributeOptionId,
                );

                if (!foundWithSameSizeAndColor) return <></>;
                const qty = sizeQtys?.find(
                  (item) =>
                    item.size === size &&
                    (item?.color
                      ? item.color === foundWithSameSizeAndColor.name
                      : false),
                );
                return (
                  <tr className='' key={size}>
                    <td className='px-2 py-4'>
                      <div className=''>{size}</div>
                    </td>
                    <td className='px-2 py-4'>
                      <div className=''>
                        <Price value={discountedPrice} />
                      </div>
                    </td>
                    <SelectOrInput
                      qty={qty?.qty || 0}
                      size={size}
                      price={price!}
                      attributeOptionId={color.attributeOptionId}
                    />
                  </tr>
                );
              });
            })} */}
            {inventory?.inventory
              .filter(
                (res) => res.colorAttributeOptionId === color.attributeOptionId,
              )
              .map((inventory) => {
                let defaultQty = 0;
                const qtyObj = editDetails.find(
                  (option) => option.optionValue === inventory.name,
                );
                if (qtyObj) {
                  defaultQty = qtyObj.qty;
                }

                return (
                  <tr className='' key={inventory.name}>
                    <td className='px-2 py-4'>
                      <div className=''>{inventory.name}</div>
                    </td>
                    <td className='px-2 py-4'>
                      <div className=''>
                        <Price value={discountedPrice} />
                      </div>
                    </td>
                    <SelectOrInput
                      sizeAttributeOptionId={inventory.attributeOptionId}
                      qty={inventory?.inventory || 0}
                      size={inventory.name}
                      price={price!}
                      defaultQty={defaultQty}
                    />
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SizePriceQtyTable;
