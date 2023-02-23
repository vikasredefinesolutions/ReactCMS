import React from 'react';

import { _StoreCache } from '@type/slug.type';
import { _ProductDetailsProps } from 'definations/APIs/productDetail.res';
import {
  BuyNow,
  ChooseColor,
  Description,
  DisplayImage,
  Size_Qty,
} from './Components';

const StoreBuilder_ProductDetails_View: React.FC<
  _ProductDetailsProps & _StoreCache
> = (product) => {
  if (!product.details || !product.colors) return <></>;

  return (
    <>
      <section className=''>
        <div className='container mx-auto'>
          <div className='bg-white pt-8'>
            <div className='lg:grid lg:grid-cols-12 lg:items-start px-3 gap-4'>
              {/* <!-- <div className="lg:col-start-2 lg:col-end-7"> --> */}
              <DisplayImage colors={product.colors} />
              <div className='lg:col-span-5'>
                <div className='mb-4 border-b border-b-gray-300'>
                  <div className='text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title mb-4'>
                    {product.details.name}
                  </div>
                </div>
                <div className='mb-4'>
                  <div className='text-gray-700 text-sm'>
                    <span className='inline-block w-32 font-semibold'>
                      Product Code :
                    </span>
                    <span> {product.details.sku}</span>
                  </div>
                </div>
                <ChooseColor colors={product.colors} />
                <Size_Qty price={product.details.salePrice} />
                <BuyNow />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Description text={product.details.description} />
    </>
  );
};

export default StoreBuilder_ProductDetails_View;
