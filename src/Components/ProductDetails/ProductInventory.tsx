import React, { useEffect, useState } from 'react';
import Image from '../../../components/reusables/Image';
import Price from '../../../components/reusables/Price';
import { _Store } from '../../../constants/store.constant';
import { _ProductInventoryTransfomed } from '../../../definations/APIs/inventory.res';
import { useActions, useTypedSelector } from '../../../hooks';
import { FetchInventoryById } from '../../../services/product.service';
import InventoryInput from './InventoryInput';

interface _props {
  productId: number;
}

const Inventory: React.FC<_props> = ({ productId }) => {
  const { updatePrice } = useActions();
  const [inventory, setInventory] =
    useState<null | _ProductInventoryTransfomed>(null);
  const storeLayout = useTypedSelector((state) => state.store.layout);

  const { color } = useTypedSelector((state) => state.product.selected);
  const { totalPrice } = useTypedSelector((state) => state.product.toCheckout);
  const { price, colors } = useTypedSelector((state) => state.product.product);

  const fetchInventory = (payload: {
    productId: number;
    attributeOptionId: number[];
  }) => {
    FetchInventoryById(payload).then((res) => setInventory(res));
    // .catch((err) => console.log('err', err))
    // .finally(() => console.log('stop loader'));
  };

  useEffect(() => {
    fetchInventory({
      productId: productId,
      attributeOptionId: [color.attributeOptionId],
    });
  }, [color.attributeOptionId]);

  useEffect(() => {
    updatePrice({ price: price?.msrp || 0 });
  }, []);

  if (storeLayout === _Store.type3) {
    return (
      <div className="mb-4">
        <div className="">
          <div className="flex flex-wrap justify-between bg-gray-300 py-3 font-semibold">
            <div className="px-2">Size</div>
            <div className="">Availability</div>
            <div className="w-20">QTY</div>
          </div>
          {inventory?.sizes.map((size) => (
            <div
              key={size}
              className="flex flex-wrap items-center justify-between border-b border-b-gray-300 py-2"
            >
              <div className="font-semibold px-2">{size}</div>
              <div className="">
                {inventory.inventory.find(
                  (int) =>
                    int.colorAttributeOptionId === color.attributeOptionId &&
                    int.name === size,
                )?.inventory || 'Out of Stock'}
              </div>
              <InventoryInput
                size={size}
                qty={
                  inventory.inventory.find(
                    (int) =>
                      int.colorAttributeOptionId === color.attributeOptionId &&
                      int.name === size,
                  )?.inventory || 0
                }
                price={price?.msrp || 0}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (storeLayout === _Store.type4) {
    return (
      <div className="">
        <div className="text-xs bg-gray-100 mb-5">
          <div className="hidden md:flex flex-wrap gap-y-5 bg-secondary text-white">
            <div className="p-2 w-full md:w-2/12">
              <div className="font-semibold">Color</div>
            </div>
            <div className="flex flex-wrap justify-evenly text-center gap-y-5 w-full md:w-10/12">
              {inventory?.sizes.map((size) => {
                return (
                  <div className="p-2 w-1/2 md:w-1/12">
                    <div className="font-semibold">{size}</div>
                  </div>
                );
              })}
            </div>
          </div>
          {colors?.map((color) => (
            <div
              key={color.id}
              className="flex flex-wrap gap-y-5 border-b last:border-b-0 border-b-gray-300 mb-5 md:mb-0"
            >
              <div className="p-2 w-full md:w-2/12 text-center md:text-left">
                <div className="md:hidden font-semibold text-center mb-1">
                  Color:
                </div>
                <div className="mb-1 text-center w-10 h-10 mx-auto md:m-0 border-gray-300 p-1 bg-white">
                  <Image
                    src={color.url}
                    alt={color.alt}
                    className="max-h-full inline-block"
                  />
                </div>
                <div className="">{color.label}</div>
              </div>
              <div className="flex flex-wrap justify-evenly text-center gap-y-5 w-full md:w-10/12">
                {inventory?.sizes.map((size) => {
                  return (
                    <div className="p-2 w-1/2 md:w-1/12">
                      <div className="mb-1">
                        {inventory.inventory.find(
                          (int) =>
                            int.colorAttributeOptionId === color.id &&
                            int.name === size,
                        )?.inventory || 0}
                      </div>
                      <InventoryInput
                        size={size}
                        qty={
                          inventory.inventory.find(
                            (int) =>
                              int.colorAttributeOptionId === color.id &&
                              int.name === size,
                          )?.inventory || 0
                        }
                        price={price?.msrp || 0}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <>
        <div className="mb-4">
          <div className="text-left pl-0 block">
            <div className="flex items-center font-bold justify-between border-b border-b-gray-300 py-3 px-4 bg-[#cfd2d3]">
              <div className="">Size</div>
              <div className="">QTY.</div>
            </div>

            {inventory?.sizes.map((size) => {
              return (
                <div className="flex items-center justify-between border-b border-b-gray-300 py-3 pl-4">
                  <div className="">{size}</div>
                  <InventoryInput
                    size={size}
                    qty={
                      inventory.inventory.find(
                        (int) =>
                          int.colorAttributeOptionId ===
                            color.attributeOptionId && int.name === size,
                      )?.inventory || 0
                    }
                    price={price?.msrp || 0}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mb-3 font-bold bg-[#051C2C] px-4 py-2.5 text-white tracking-widest text-center">
          Add 12 more of this johnnie-O Men's The Original 4-Button Polo to your
          cart to save an additional $8.00 per Item!
        </div>
        <div className="bg-[#d8dfe1] text-sm text-gray-900 flex flex-wrap p-5 items-center gap-2 tracking-wider mb-3">
          <span className="">Price Per Item</span>
          <span className="text-4xl font-bold">
            <Price value={totalPrice} />
          </span>
        </div>
      </>
    );
  }

  return <></>;
};

export default Inventory;
