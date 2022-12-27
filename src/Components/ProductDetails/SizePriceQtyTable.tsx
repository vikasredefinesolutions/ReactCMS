import Price from 'appComponents/reusables/Price';
import { useTypedSelector } from 'hooks';
import React from 'react';
import SelectOrInput from './SelectOrInput';

const SizePriceQtyTable: React.FC = () => {
  const { price, inventory } = useTypedSelector(
    (state) => state.product.product,
  );
  const { color } = useTypedSelector((state) => state.product.selected);
  const { sizeQtys } = useTypedSelector((state) => state.product.toCheckout);

  return (
    <div className="">
      <div className="overflow-x-auto max-h-screen">
        <table
          cellPadding="0"
          cellSpacing="0"
          className="table-auto w-full text-xs text-center text-[#191919]"
        >
          <thead className="text-xs font-semibold border-b border-neutral-200">
            <tr className="">
              <th className="px-2 py-4 w-32">
                <div className="">Size</div>
              </th>
              <th className="px-2 py-4 w-32">
                <div className="">Price</div>
              </th>
              <th className="px-2 py-4 w-32">
                <div className="">Qty</div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {inventory?.sizes.map((colorWithAllSizes) => {
              const showOrNot =
                colorWithAllSizes.colorAttributeOptionId ===
                color.attributeOptionId;

              if (!showOrNot) return <></>;

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
                  <tr className="" key={size}>
                    <td className="px-2 py-4">
                      <div className="">{size}</div>
                    </td>
                    <td className="px-2 py-4">
                      <div className="">
                        <Price value={price?.msrp!} />
                      </div>
                    </td>
                    <SelectOrInput
                      qty={qty?.qty || 0}
                      size={size}
                      price={price!}
                    />
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SizePriceQtyTable;
