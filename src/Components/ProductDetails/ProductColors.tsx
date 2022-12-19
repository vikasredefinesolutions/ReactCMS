import Image from 'appComponents/reusables/Image';
import { useActions, useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React from 'react';

const ProductColors: React.FC = () => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const colors = useTypedSelector((state) => state.product.product.colors);
  const { setColor } = useActions();

  if (colors === null) return <></>;

  if (storeLayout === _Store.type3) {
    return (
      <div className="flex align-top mb-4">
        <div className="w-24 flex flex-wrap items-center">
          <span className="font-bold">Colors:</span>{' '}
        </div>
        <div className="flex flex-wrap text-center pl-0">
          {colors.map((product) => {
            return (
              <div className="w-8" key={product.productId}>
                <button
                  onClick={() => setColor(product)}
                  className="w-8 h-8 border-2 text-center inline-block border-transparent hover:border-primary border-primary"
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.altTag}
                    className="max-h-full inline-block"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return <></>;
};

export default ProductColors;
