import { showcolors } from '@constants/global.constant';
import {
  GetlAllProductList,
  GetProductImageOptionList,
} from '@type/productList.type';
import config from 'api.config';
import ImageComponent from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import ProductBoxController from 'Components/ProductList/components/PorudctComponent/ProductBox.controller';
import Link from 'next/link';
import React from 'react';

interface _props {
  product: GetlAllProductList;
  colorChangeHandler: (
    productId: number | undefined,
    seName: string | undefined,
    color: string | undefined | null,
  ) => void;
}

const BrandProduct: React.FC<_props> = (props) => {
  const { product, colorChangeHandler } = props;
  const { currentProduct, origin, setCurrentProduct } = ProductBoxController({
    product,
    colorChangeHandler,
  });
  let flag: boolean = false;
  return (
    <>
      <li className='text-center relative border border-gray-200 bg-white border-solid'>
        <Link
          href={`${origin}/${product.productSEName}.html?v=product-detail&altview=1`}
          className='relative'
        >
          <div className='w-full overflow-hidden aspect-w-1 aspect-h-1'>
            <ImageComponent
              src={
                config.mediaBaseUrl + currentProduct && currentProduct?.imageUrl
                  ? currentProduct.imageUrl
                  : ''
              }
              alt='no image'
              className='w-auto h-auto m-auto max-h-[400px]'
              height={350}
              width={350}
              key={currentProduct?.id}
            />
          </div>
        </Link>
        <div className='mt-6 pb-4'>
          <div className='hover:text-primary text-lg test'>
            <Link
              href={`${origin}/${product.productSEName}.html?v=product-detail&altview=1`}
            >
              <a className='relative text-sm'>{product.productName}</a>
            </Link>
          </div>
          <div className='mt-3 text-gray-900'>
            <span className='font-bold'>
              MSRP{' '}
              <Price
                value={undefined}
                prices={{
                  msrp: product.msrp,
                  salePrice: product.salePrice,
                }}
              />
            </span>
          </div>
          <ul role='list' className='flex items-center justify-center mt-2'>
            {product &&
              product?.moreImages &&
              product?.moreImages.map(
                (option: GetProductImageOptionList, index: number) =>
                  index < showcolors ? (
                    <li
                      key={index}
                      className={`border-2  w-7 h-7 text-center overflow-hidden ${
                        option.displayOrder == currentProduct?.displayOrder
                          ? 'border-secondary'
                          : ''
                      } hover:border-secondary`}
                      onClick={() => {
                        colorChangeHandler(
                          product.productId,
                          product.productSEName || '',
                          option.attributeOptionName,
                        );
                        setCurrentProduct(option);
                      }}
                    >
                      <img
                        src={`${config.mediaBaseUrl}${option.imageUrl}`}
                        alt=''
                        title=''
                        className='max-h-full m-auto'
                      />
                    </li>
                  ) : (
                    <>{(flag = true)}</>
                  ),
              )}
            {flag ? (
              <li className='extra w-8 h-8 text-center border-2xtra'>
                <span> +</span>
                {product &&
                  product?.moreImages &&
                  product.moreImages.length - showcolors}
              </li>
            ) : null}
          </ul>
        </div>
      </li>
    </>
  );
};

export default BrandProduct;
