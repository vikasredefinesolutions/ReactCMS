import React from 'react';
import Price from 'appComponents/reusables/Price';
import { ShoppingCartItemDetailsViewModel } from 'definations/APIs/cart.res';
import { _ProductInventoryTransfomed } from 'definations/APIs/inventory.res';
import { useTypedSelector } from 'hooks';
import SelectOrInput from './SelectOrInput';

interface _props {
  inventory: _ProductInventoryTransfomed;
  editDetailsQuantity?: ShoppingCartItemDetailsViewModel[];
}

const SizePriceQtyTable: React.FC<_props> = ({
  inventory,
  editDetailsQuantity,
}) => {
  const price = useTypedSelector((state) => state.product.product.price);
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
            {inventory?.sizes.map((size) => {
              const foundIt = inventory.inventory.find(
                (int) => int.name === size,
              );
              const qty =
                editDetailsQuantity &&
                editDetailsQuantity.find((q) => q.attributeOptionValue === size)
                  ?.qty;
              if (foundIt) {
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
                    <SelectOrInput qty={qty || 0} size={size} price={price!} />
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SizePriceQtyTable;
