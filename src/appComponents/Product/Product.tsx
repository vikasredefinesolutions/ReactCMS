/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { zeroValue } from '@constants/global.constant';
import config from 'api.config';
import { GetlAllProductList } from 'definations/productList.type';
import { useTypedSelector } from 'hooks';
import Price from '../reUsable/Price';
import Wishlist from '../ui/Wishlist';

const ProductComponent = ({
  brandId,
  product,
  colorChangeHandler,
}: {
  brandId: number | null;
  product: NonNullable<GetlAllProductList>;
  colorChangeHandler: (
    productid: number | undefined,
    seName: string | undefined,
    color: string | undefined | null,
  ) => void;
}) => {
  const [wishListId, setWishListId] = useState<number>(0);
  const [wishlistPresent, setWishlistPresent] = useState<boolean>(false);
  const customerId = useTypedSelector((state) => state.user.id);
  const wishListData = useTypedSelector((state) => state.wishlist.wishListData);

  const [currentProduct, setCurrentProduct] = useState(
    product.getProductImageOptionList && product.getProductImageOptionList[0],
  );

  useEffect(() => {
    colorChangeHandler(
      product?.id,
      product?.sename || '',
      product.getProductImageOptionList &&
        product?.getProductImageOptionList[0]?.colorName,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <li className='text-center flex'>
      <div className='h-hull w-full'>
        <div className='flex text-center lg:w-auto h-full'>
          <div className='relative border border-gray-200 pb-4 w-full'>
            <div className='w-full bg-white rounded-md overflow-hidden aspect-w-1 aspect-h-1'>
              <img
                src={`${config.mediaBaseUrl}${
                  currentProduct && currentProduct.imageName
                }`}
                alt=''
                className='w-auto h-auto m-auto max-h-[400px]'
              />
              <div className='absolute top-5 right-5 text-gray-800 p-1 z-5'>
                <button className=''>
                  <Wishlist
                    {...{
                      productId:
                        product && product?.id ? product?.id : zeroValue,
                      name: product?.name ? product.name : '',
                      color: currentProduct?.colorName
                        ? currentProduct?.colorName
                        : '',
                      price: product.salePrice,
                      wishlistId: wishListId,
                    }}
                    iswishlist={wishlistPresent}
                    brandId={brandId}
                  />
                </button>
              </div>
            </div>
            <div className='mt-6'>
              <div className='mt-1 text-center'>
                <img
                  className='inline-block'
                  src={`${config.mediaBaseUrl}/rdc${product.brandlogo}`}
                  alt={product.brandlogo}
                  style={{ height: '45px' }}
                />
              </div>
              <div className='mt-1 text-anchor min-h-[48px]'>
                <Link
                  className='relative underline min-h-[48px]'
                  href={`${product.sename}.html?v=product-detail`}
                >
                  <>
                    <span className='absolute inset-0'></span>
                    {product.name}
                  </>
                </Link>
              </div>
              <div className='mt-3 text-black text-base tracking-wider'>
                <span className='font-semibold'>
                  <>
                    MSRP{' '}
                    <Price
                      value={undefined}
                      prices={{
                        msrp: product.msrp,
                        salePrice: product.salePrice,
                      }}
                    />
                  </>
                </span>
              </div>
              {product?.getProductImageOptionList &&
                product?.getProductImageOptionList.length && (
                  <ul
                    role='list'
                    className='flex items-center mt-2 justify-center space-x-1'
                  >
                    {product.getProductImageOptionList.map((subRow, index) =>
                      index < 6 ? (
                        <li
                          className={`w-7 h-7 border-2${
                            subRow.id === currentProduct?.id
                              ? ' border-secondary'
                              : ''
                          }`}
                          onClick={() => {
                            colorChangeHandler(
                              product.id,
                              product.sename || '',
                              subRow.colorName,
                            );
                            setCurrentProduct(subRow);
                          }}
                          key={subRow.id}
                        >
                          <img
                            src={`${config.mediaBaseUrl}${subRow.imageName}`}
                            alt=''
                            title=''
                            className='max-h-full m-auto'
                          />
                        </li>
                      ) : null,
                    )}
                    {/* 
                  {product.subRows.length > 6 && (
                    <li className="w-7 h-7 border-2 border-light-gray hover:border-secondary relative">
                      <img
                        src="https://www.corporategear.com/Resources/parsonskellogg/Product/color/197285_5696313_color_nkfg.jpg"
                        alt=""
                        title=""
                        className=""
                      />
                      <span className="absolute inset-0 bg-primary text-xs font-semibold flex items-center justify-center text-white">
                        +{product.subRows.length - 6}
                      </span>
                    </li>
                  )} */}
                  </ul>
                )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductComponent;
