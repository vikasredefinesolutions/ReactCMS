import { FetchInventoryById } from '@services/product.service';
import { _ProductInventoryTransfomed } from '@type/APIs/inventory.res';
import { useActions, useTypedSelector } from 'hooks';
import React, { useEffect, useState } from 'react';

interface _props {
  selectedSize: string;
  setSelectedSize(val: string): void;
}

const StoreBuilder_ProductDetails_SizeList: React.FC<_props> = ({
  selectedSize,
  setSelectedSize,
}) => {
  const { setShowLoader } = useActions();
  const currentVisibleColor = useTypedSelector(
    (state) => state.product.selected.color,
  );
  const [currentColorInventory, setCurrentColorInventory] =
    useState<null | _ProductInventoryTransfomed>(null);

  const showInventoryFor = (payload: {
    productId: number;
    attributeOptionId: number[];
  }) => {
    setShowLoader(true);
    FetchInventoryById(payload)
      .then((res) => {
        setCurrentColorInventory(res);
        setSelectedSize(res?.sizes[0].sizeArr[0] || '');
      })
      .finally(() => setShowLoader(false));
  };

  const selectSizeHandler = (enteredSize: string) => {
    setSelectedSize(enteredSize);
  };

  useEffect(() => {
    if (currentVisibleColor === null) return;
    showInventoryFor({
      productId: currentVisibleColor.productId,
      attributeOptionId: [currentVisibleColor.attributeOptionId],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentVisibleColor]);

  return (
    <div className='flex flex-wrap mb-4'>
      <div className='w-32 text-sm items-center'>
        <span className='text-sm font-semibold'>Size:</span>
      </div>
      <div className='text-sm flex flex-wrap items-center gap-1'>
        {currentColorInventory?.sizes.map((sizes) => {
          return sizes.sizeArr.map((size, index) => {
            const active = size === selectedSize ? '' : ' opacity-50';
            return (
              <div
                key={index}
                className={`border border-gray-300 hover:border-secondary h-8 w-8 flex items-center justify-center cursor-pointer ${active}`}
                onClick={() => selectSizeHandler(size)}
              >
                {size}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default StoreBuilder_ProductDetails_SizeList;
