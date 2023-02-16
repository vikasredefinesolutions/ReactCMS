import { FetchInventoryById } from '@services/product.service';
import { _ProductInventoryTransfomed } from '@type/APIs/inventory.res';
import Image from 'appComponents/reUsable/Image';
import { useActions, useTypedSelector } from 'hooks';
import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import React, { Fragment, useEffect, useState } from 'react';
import InventoryInput from './InventoryInput';

interface _props {
  productId: number;
}

const Inventory: React.FC<_props & { storeCode: string }> = ({ storeCode }) => {
  const router = useRouter();
  const { updatePrice } = useActions();
  const { color } = useTypedSelector((state) => state.product.selected);
  const { totalPrice } = useTypedSelector((state) => state.product.toCheckout);
  const { price, colors, name } = useTypedSelector(
    (state) => state.product.product,
  );

  const [inventory, setInventory] =
    useState<null | _ProductInventoryTransfomed>(null);

  useEffect(() => {
    updatePrice({ price: price?.msrp || 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price?.msrp]);

  const attributeOptionIds = (colors &&
    colors.map((clr: any) => clr.attributeOptionId)) || [0];
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
    // colors.forEach(color => showInventoryFor({
    //   productId: color.productId,
    //   attributeOptionId: [...attributeOptionIds],
    // }))
    showInventoryFor({
      productId: colors[0].productId,
      attributeOptionId: [...attributeOptionIds],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors]);

  if (inventory === null) return <></>;

  if (storeCode === _Store.type3) {
    return (
      <div className='mb-4'>
        <div className=''>
          <div className='flex flex-wrap justify-between bg-gray-300 py-3 font-semibold'>
            <div className='px-2'>Size</div>
            <div className=''>Availability</div>
            <div className='w-20'>QTY</div>
          </div>
          {inventory?.inventory.map((product) => {
            if (product.colorAttributeOptionId === color.attributeOptionId) {
              return (
                <div
                  key={product.name}
                  className='flex flex-wrap items-center justify-between border-b border-b-gray-300 py-2'
                >
                  <div className='font-semibold px-2'>{product.name}</div>
                  <div className='px-2'>{product.inventory}</div>
                  {product.inventory ? (
                    <InventoryInput
                      size={product.name}
                      storeCode={storeCode}
                      qty={product.inventory}
                      price={price?.msrp || 0}
                      attributeOptionId={product.attributeOptionId}
                    />
                  ) : (
                    <div className=''>
                      <Fragment key={product.name}>Out of Stock</Fragment>
                    </div>
                  )}
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    );
  }

  if (storeCode === _Store.type4) {
    return (
      <div className=''>
        <div className='text-xs bg-gray-100 mb-5'>
          <div className='hidden md:flex flex-wrap gap-y-5 bg-secondary text-white'>
            <div className='p-2 w-full md:w-2/12'>
              <div className='font-semibold'>Color</div>
            </div>
            <div className='flex flex-wrap justify-evenly text-center gap-y-5 w-full md:w-10/12'>
              {inventory?.sizes.map((product) => {
                if (
                  product.colorAttributeOptionId === color.attributeOptionId
                ) {
                  return product.sizeArr.map((size, index) => (
                    <div key={index} className='p-2 w-full md:w-2/12'>
                      <div className='font-semibold'>{size}</div>
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
              className='flex flex-wrap gap-y-5 border-b last:border-b-0 border-b-gray-300 mb-5 md:mb-0'
            >
              <div className='p-2 w-full md:w-2/12 text-center md:text-left'>
                <div className='md:hidden font-semibold text-center mb-1'>
                  Color:
                </div>
                <div className='mb-1 text-center w-10 h-10 mx-auto md:m-0 border-gray-300 p-1 bg-white'>
                  <Image
                    src={color.imageUrl}
                    alt={color.altTag}
                    className='max-h-full inline-block'
                  />
                </div>
                <div className=''>{color.name}</div>
              </div>
              <div className='flex flex-wrap justify-evenly text-center gap-y-5 w-full md:w-10/12'>
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
                        <div key={index} className='p-2 w-1/2 md:w-1/6'>
                          <div className='mb-1'>{inv > 250 ? '250+' : inv}</div>
                          <InventoryInput
                            size={size}
                            storeCode={storeCode}
                            qty={inv}
                            price={price?.msrp || 0}
                            color={color.name}
                            isDisabled={inv < 1}
                            attributeOptionId={color.attributeOptionId}
                          />
                        </div>
                      ) : (
                        <div className='p-2 w-1/2 md:w-1/6'>
                          <div className='border-bottom p-b-10'>
                            <strong className='text-center center'> - </strong>{' '}
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
  if (storeCode === _Store.type2) {
    return (
      <>
        <div className='mb-4'>
          <div className='text-left pl-0 block'>
            <div className='flex items-center font-bold justify-between border-b border-b-gray-300 py-3 px-4 bg-[#cfd2d3]'>
              <div className=''>Size</div>
              <div className=''>QTY.</div>
            </div>

            {inventory?.sizes.map((product) => {
              if (product.colorAttributeOptionId === color.attributeOptionId) {
                return product.sizeArr.map((size, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between border-b border-b-gray-300 py-3 pl-4'
                  >
                    <div className=''>{size}</div>
                    <InventoryInput
                      size={size}
                      storeCode={storeCode}
                      qty={
                        inventory.inventory.find(
                          (int) =>
                            int.colorAttributeOptionId ===
                              color.attributeOptionId && int.name === size,
                        )?.inventory || 0
                      }
                      price={price?.msrp || 0}
                      attributeOptionId={color.attributeOptionId}
                    />
                  </div>
                ));
              }
              return <></>;
            })}
          </div>
        </div>
      </>
    );
  }

  return <></>;
};

export default Inventory;
