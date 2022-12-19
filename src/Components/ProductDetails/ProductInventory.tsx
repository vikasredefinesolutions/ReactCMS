import { FetchInventoryById } from '@services/product.service';
import { _ProductInventoryTransfomed } from '@type/APIs/inventory.res';
import Image from 'appComponents/reusables/Image';
import Price from 'appComponents/reusables/Price';
import { useActions, useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React, { useEffect, useState } from 'react';
import InventoryInput from './InventoryInput';

interface _props {
  productId: number;
}

const Inventory: React.FC<_props> = ({ productId }) => {
  const { updatePrice } = useActions();
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const { color } = useTypedSelector((state) => state.product.selected);
  const { totalPrice } = useTypedSelector((state) => state.product.toCheckout);
  const { price, colors } = useTypedSelector((state) => state.product.product);

  const [inventory, setInventory] =
    useState<null | _ProductInventoryTransfomed>(null);

  useEffect(() => {
    updatePrice({ price: price?.msrp || 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price?.msrp]);

  const showInventoryFor = (payload: {
    productId: number;
    attributeOptionId: number[];
  }) => {
    FetchInventoryById(payload).then((res) => setInventory(res));
    // .catch((err) => console.log('err', err))
    // .finally(() => );
  };
  useEffect(() => {
    if (colors === null) return;
    showInventoryFor({
      productId: colors[0].productId,
      attributeOptionId: [colors[0].attributeOptionId],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors]);
  if (inventory === null) return <></>;

  if (storeLayout === _Store.type3) {
    return (
      <div className="mb-4">
        <div className="">
          <div className="flex flex-wrap justify-between bg-gray-300 py-3 font-semibold">
            <div className="px-2">Size</div>
            <div className="">Availability</div>
            <div className="w-20">QTY</div>
          </div>
          {inventory?.sizes.map((product) => {
            if (product.colorAttributeOptionId === color.attributeOptionId) {
              return product.sizeArr.map((size) => (
                <div
                  key={size}
                  className="flex flex-wrap items-center justify-between border-b border-b-gray-300 py-2"
                >
                  <div className="font-semibold px-2">{size}</div>
                  <div className="">
                    {inventory.inventory.find(
                      (int) =>
                        int.colorAttributeOptionId ===
                          color.attributeOptionId && int.name === size,
                    )?.inventory || 'Out of Stock'}
                  </div>
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
              ));
            }

            return <></>;
          })}
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
              {inventory?.sizes.map((product) => {
                if (
                  product.colorAttributeOptionId === color.attributeOptionId
                ) {
                  return product.sizeArr.map((size, index) => (
                    <div key={index} className="p-2 w-1/2 md:w-1/12">
                      <div className="font-semibold">{size}</div>
                    </div>
                  ));
                }

                return <></>;
              })}
            </div>
          </div>

          {colors?.map((color) => (
            <div
              key={color.attributeOptionId}
              className="flex flex-wrap gap-y-5 border-b last:border-b-0 border-b-gray-300 mb-5 md:mb-0"
            >
              <div className="p-2 w-full md:w-2/12 text-center md:text-left">
                <div className="md:hidden font-semibold text-center mb-1">
                  Color:
                </div>
                <div className="mb-1 text-center w-10 h-10 mx-auto md:m-0 border-gray-300 p-1 bg-white">
                  <Image
                    src={color.imageUrl}
                    alt={color.altTag}
                    className="max-h-full inline-block"
                  />
                </div>
                <div className="">{color.name}</div>
              </div>
              <div className="flex flex-wrap justify-evenly text-center gap-y-5 w-full md:w-10/12">
                {inventory?.sizes.map((product) => {
                  if (
                    product.colorAttributeOptionId === color.attributeOptionId
                  ) {
                    return product.sizeArr.map((size, index) => {
                      const inv =
                        inventory.inventory.find(
                          (int) =>
                            int.colorAttributeOptionId ===
                              color.attributeOptionId && int.name === size,
                        )?.inventory || 0;
                      const inventry = inventory.inventory.find(
                        (int) =>
                          int.colorAttributeOptionId ===
                            color.attributeOptionId && int.name === size,
                      );
                      return inv > 0 ? (
                        <>
                          <div key={index} className="p-2 w-1/2 md:w-1/12">
                            <div className="mb-1">{inv > 50 ? '50+' : inv}</div>
                            <InventoryInput
                              size={size}
                              qty={inv}
                              price={inventry?.price || 5}
                              color={color.name}
                              isDisabled={inv < 1}
                            />
                          </div>
                        </>
                      ) : (
                        <div className="p-2 w-1/2 md:w-1/12">
                          <div className="border-bottom p-b-10">
                            <strong className="text-center center"> - </strong>{' '}
                          </div>
                        </div>
                      );
                    });
                  }
                  return <></>;
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

            {inventory?.sizes.map((product) => {
              if (product.colorAttributeOptionId === color.attributeOptionId) {
                return product.sizeArr.map((size, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-b-gray-300 py-3 pl-4"
                  >
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
                ));
              }
              return <></>;
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
