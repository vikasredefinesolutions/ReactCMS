import { showcolors, zeroValue } from '@constants/global.constant';
import {
  GetlAllProductList,
  GetProductImageOptionList,
} from '@type/productList.type';
import config from 'api.config';
import ImageComponent from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import Wishlist from 'appComponents/ui/Wishlist';
import ProductBoxController from 'Components/ProductList/components/PorudctComponent/ProductBox.controller';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface _props {
  brandId: number;
  product: GetlAllProductList;
  colorChangeHandler: (
    productId: number | undefined,
    seName: string | undefined,
    color: string | undefined | null,
  ) => void;
  style?: 'Flex' | null;
}

const BrandProduct: React.FC<_props> = (props) => {
  const [wishListId, setWishListId] = useState<number>(0);
  const [wishlistPresent, setWishlistPresent] = useState<boolean>(false);
  const { product, colorChangeHandler, style } = props;
  const { currentProduct, origin, setCurrentProduct } = ProductBoxController({
    product,
    colorChangeHandler,
  });
  const customerId = useTypedSelector((state) => state.user.id);
  const wishListData = useTypedSelector((state) => state.wishlist.wishListData);
  let flag: boolean = false;
  useEffect(() => {
    if (customerId) {
      wishListData.map((item) => {
        if (item.productId === product?.id) {
          setWishlistPresent(true);
          setWishListId(item.id);
        }
      });
    }
  }, [customerId, wishListData]);
  return (
    <>
      <li
        className={`w-full ${
          style === 'Flex' ? '' : 'lg:w-3/12'
        } relative  text-center px-[15px]`}
        data-id={product.id}
      >
        <div className='border border-gray-200 bg-white border-solid'>
          <Link
            href={`${origin}/${product.productSEName}.html?v=product-detail&altview=1`}
            className='relative'
          >
            <div className='w-full overflow-hidden aspect-w-1 aspect-h-1'>
              <ImageComponent
                src={
                  config.baseUrl.media + currentProduct &&
                  currentProduct?.imageUrl
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
          <div className='absolute top-5 right-5 text-gray-800 p-1 z-25'>
            <button className=''>
              <Wishlist
                {...{
                  productId:
                    product && product?.productId
                      ? product?.productId
                      : zeroValue,
                  name: product?.productName ? product.productName : '',
                  color: currentProduct?.colorName
                    ? currentProduct?.colorName
                    : '',
                  price: product.salePrice,
                  wishlistId: wishListId,
                }}
                iswishlist={wishlistPresent}
                brandId={props.brandId}
              />
            </button>
          </div>
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
                          option.attributeOptionID ==
                          currentProduct?.attributeOptionID
                            ? 'border-secondary'
                            : ''
                        } hover:border-secondary ml-1`}
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
                          src={`${config.baseUrl.media}${option.imageUrl}`}
                          alt=''
                          title=''
                          className='max-h-full m-auto'
                          data-option={JSON.stringify(option)}
                        />
                      </li>
                    ) : (
                      <>{(flag = true)}</>
                    ),
                )}
              {flag ? (
                <Link key={product.id} href={`/${product.productSEName}.html`}>
                  <li className='extra w-7 h-7 text-center border-2 hover:border-secondary inset-0 bg-primary text-xs font-semibold flex items-center justify-center text-white cursor-pointer'>
                    <span> +</span>
                    {product &&
                      product?.moreImages &&
                      product.moreImages.length - showcolors}
                  </li>
                </Link>
              ) : null}
            </ul>
          </div>
        </div>
      </li>
    </>
  );
};

export default BrandProduct;
