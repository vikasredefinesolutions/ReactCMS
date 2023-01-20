import Image from 'appComponents/reUsable/Image';
import { useActions, useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React from 'react';

const ProductColors: React.FC<{ storeCode: string }> = ({ storeCode }) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const colors = useTypedSelector((state) => state.product.product.colors);
  const { setColor } = useActions();
  const selectedColor = useTypedSelector(
    (state) => state.product.selected.color,
  );

  if (colors === null) return <></>;


  if (storeCode === _Store.type3) {
    return (
      <>
        <div className="w-full flex justify-center text-center gap-2 text-md font-bold mb-2">
          Available Color:
        </div>
        <div className="sub-image w-full flex justify-center text-center gap-2 text-xs flex-wrap">
          {colors.map((product) => {
            const highlight =
              product.attributeOptionId === selectedColor.attributeOptionId
                ? 'border-primary'
                : 'hover:border-primary';
            return (
              <div
                className="overflow-hidden"
                key={product.attributeOptionId}
                onClick={() => setColor(product)}
              >
                <div
                  className={`w-20 h-20 border ${highlight} p-1 mb-1 mx-auto`}
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.altTag}
                    className="max-h-full mx-auto"
                  />
                </div>
                <div className="text-primary break-word">{product.name}</div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
  return <></>;
};

export default ProductColors;
