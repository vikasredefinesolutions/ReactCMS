import { _ProductColor } from '@type/APIs/colors.res';
import Image from 'appComponents/reUsable/Image';
import { useActions, useTypedSelector } from 'hooks';
import React, { useEffect } from 'react';

interface _props {
  colors: _ProductColor[];
}

const StoreBuilder_ProductDetails_ChooseColor: React.FC<_props> = ({
  colors,
}) => {
  const { product_UpdateSelectedValues } = useActions();
  const selectedColor = useTypedSelector(
    (state) => state.product.selected.color,
  );

  useEffect(() => {
    product_UpdateSelectedValues({
      type: 'COLOR',
      data: colors[0],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='flex align-top mb-4'>
      <div className='w-32 text-sm'>
        <span className='text-sm font-semibold'>Colors:</span>
      </div>
      <div className='flex flex-wrap gap-1 text-sm text-center'>
        {colors.map((color, index) => {
          const hightlight =
            color.attributeOptionId === selectedColor?.attributeOptionId
              ? 'border-secondary'
              : 'border-gray-300 hover:border-secondary';

          return (
            <div
              key={index}
              className='w-8'
              onClick={() =>
                product_UpdateSelectedValues({
                  type: 'COLOR',
                  data: color,
                })
              }
            >
              <div className={`border ${hightlight} p-px cursor-pointer`}>
                <Image
                  src={color.imageUrl}
                  alt={color.name}
                  className='w-full object-center object-cover'
                />
              </div>
              <div className='hidden'>{color.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StoreBuilder_ProductDetails_ChooseColor;
