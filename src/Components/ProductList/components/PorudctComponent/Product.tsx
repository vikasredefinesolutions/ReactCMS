import { listing_max_showcolors, zeroValue } from '@constants/global.constant';
import config from 'api.config';
import Image from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import Wishlist from 'appComponents/ui/Wishlist';
import { GetlAllProductList } from 'definations/productList.type';
import { getCompareLink } from 'helpers/compare.helper';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { _Store } from 'page.config';
import { useEffect, useState } from 'react';
import ProductBoxController from './ProductBox.controller';
// import Price from 'appComponents/reUsable/Price';
// import Wishlist from '../ui/Wishlist';
import ImageComponent from 'appComponents/reUsable/Image';

const ProductComponent = ({
  brandId,
  product,
  skuList,
  colorChangeHandler,
  compareCheckBoxHandler,
  storeLayout,
}: {
  brandId: number | null;
  product: GetlAllProductList;
  skuList: string[];
  colorChangeHandler: (
    productid: number | undefined,
    seName: string | undefined,
    color: string | undefined | null,
  ) => void;
  compareCheckBoxHandler: (sku: string) => void;
  storeLayout: string | null;
}) => {
  let flag: boolean = false;
  const [wishListId, setWishListId] = useState<number>(0);
  const [wishlistPresent, setWishlistPresent] = useState<boolean>(false);
  const customerId = useTypedSelector((state) => state.user.id);
  const wishListData = useTypedSelector((state) => state.wishlist.wishListData);

  const { currentProduct, origin, setCurrentProduct } = ProductBoxController({
    product,
    colorChangeHandler,
  });

  useEffect(() => {
    setCurrentProduct(
      product.getProductImageOptionList && product.getProductImageOptionList[0],
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

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

  if (!currentProduct) {
    return <></>;
  }

  return (
    <li
      className={
        storeLayout === _Store.type27
          ? 'text-center relative p-1 border border-transparent hover:border-gray-300 hover:shadow'
          : 'text-center flex'
      }
    >
      <div className='h-hull w-full'>
        <div className='flex text-center lg:w-auto h-full'>
          <div
            className={
              storeLayout === _Store.type27
                ? 'relative pb-4 w-full'
                : 'relative border border-gray-200 pb-4 w-full'
            }
          >
            <div className='w-full bg-white rounded-md overflow-hidden aspect-w-1 aspect-h-1'>
              <Link href={`/${product.sename}.html?v=product-detail&altview=1`}>
                <a className='w-full bg-white rounded-md overflow-hidden aspect-w-1 aspect-h-1'>
                  <ImageComponent
                    src={
                      currentProduct?.imageName ? currentProduct.imageName : ''
                    }
                    alt=''
                    className='w-auto h-auto m-auto max-h-[400px] cursor-pointer'
                    height={400}
                    width={350}
                    cKey={currentProduct.id}
                  />
                </a>
              </Link>
              {storeLayout === _Store.type27 ? (
                <></>
              ) : (
                <div className='absolute top-5 right-5 text-gray-800 p-1 z-25'>
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
              )}
            </div>
            <div className='mt-2 relative'>
              {/* <div className="text-sm absolute -top-4 left-0 right-0">
                <span className="w-2.5 h-2.5 bg-rose-500 inline-block rounded-full mr-1"></span>
                Available Ofline
              </div> */}
              {storeLayout === _Store.type27 ? (
                <></>
              ) : (
                <div className='mt-1 text-center h-12'>
                  <img
                    className='inline-block max-h-full'
                    src={`${config.mediaBaseUrl}/rdc${
                      product?.brandlogo &&
                      product?.brandlogo.replace('/rdc', '')
                    }`}
                    alt={product.brandlogo}
                  />
                </div>
              )}
              {/* <div className="mt-1">
                <a
                  className="inline-flex items-center gap-1"
                >
                  <span>
                    <img
                      src="images/personalize-icon.png"
                      className="max-h-6"
                      alt=""
                    />
                  </span>
                  <span>Personalize</span>
                </a>
              </div> */}
              <div
                className={`${
                  storeLayout === _Store.type27
                    ? 'mt-1 h-10 overflow-hidden text-sm text-anchor tracking-wider hover:text-primary-hover'
                    : storeLayout === _Store.type21
                    ? 'mt-1 text-anchor hover:text-anchor-hover underline'
                    : 'relative mt-1 text-anchor hover:text-anchor-hover text-ellipsis overflow-hidden line-clamp-2'
                } text-[13px] tracking-[1.4px]`}
              >
                <Link key={product.id} href={`/${product.sename}.html`}>
                  <a className='relative underline min-h-[48px]'>
                    {product.name}
                  </a>
                </Link>
              </div>
              <div
                className={
                  storeLayout === _Store.type27
                    ? 'mt-4 text-default text-xl'
                    : storeLayout === _Store.type21
                    ? 'mt-3 text-black text-base tracking-wider font-semibold'
                    : `mt-2 text-black text-base tracking-wider ${
                        storeLayout === _Store.type1 ? 'font-semibold' : ''
                      }`
                }
              >
                {storeLayout === _Store.type27 ? <></> : <>MSRP </>}
                <Price
                  value={undefined}
                  prices={{
                    msrp: product.msrp,
                    salePrice: product.salePrice,
                  }}
                />
              </div>

              {storeLayout === _Store.type27 ||
              storeLayout === _Store.type21 ||
              storeLayout === _Store.type1 ? (
                <></>
              ) : (
                <div className='form-group mt-2'>
                  <label className='checkbox-inline'>
                    <input
                      checked={skuList.includes(
                        product?.sku ? product.sku : '',
                      )}
                      onChange={() =>
                        compareCheckBoxHandler(product?.sku ? product.sku : '')
                      }
                      type='checkbox'
                    />{' '}
                    {
                      <>
                        {skuList.length &&
                        skuList.includes(product?.sku ? product.sku : '') ? (
                          <Link href={getCompareLink()}>
                            <a>Compare {skuList.length}</a>
                          </Link>
                        ) : (
                          <>Add to Compare</>
                        )}
                      </>
                    }
                  </label>
                </div>
              )}
              {product.getProductImageOptionList &&
                product.getProductImageOptionList.length && (
                  <div className='w-full h-12'>
                    <ul
                      role='list'
                      className='flex items-center mt-2 justify-center space-x-1 testlayoutclass w-full'
                    >
                      {product.getProductImageOptionList.map((subRow, index) =>
                        index < listing_max_showcolors ? (
                          <li
                            className={`border-2 overflow-hidden hover:border-secondary ml-2 ${
                              subRow.id === currentProduct.id
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
                            <div className='w-7 h-7'>
                              <Image
                                src={`${config.mediaBaseUrl}${subRow.imageName}`}
                                alt=''
                                className='max-w-full max-h-full'
                              />
                            </div>
                          </li>
                        ) : (
                          <>{(flag = true)}</>
                        ),
                      )}
                      {flag ? (
                        <li className='extra w-7 h-7 text-center border-2 hover:border-secondary inset-0 bg-primary text-xs font-semibold flex items-center justify-center text-white'>
                          <span> +</span>
                          {product.getProductImageOptionList &&
                            product.getProductImageOptionList.length -
                              listing_max_showcolors}
                        </li>
                      ) : null}
                    </ul>
                  </div>
                )}
              {/* <div className="mt-3">
                <a  className="btn btn-primary">
                  CONTACT US
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductComponent;
