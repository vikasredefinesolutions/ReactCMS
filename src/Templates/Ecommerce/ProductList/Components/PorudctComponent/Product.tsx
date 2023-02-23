import { zeroValue } from '@constants/global.constant';
import config from 'api.config';
import ImageComponent from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import Wishlist from 'appComponents/ui/Wishlist';
import { GetlAllProductList } from 'definations/productList.type';
import { getCompareLink } from 'helpers/compare.helper';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ProductBoxController from './ProductBox.controller';
// import Price from 'appComponents/reUsable/Price';
// import Wishlist from '../ui/Wishlist';

const ProductComponent = ({
  brandId,
  product,
  skuList,
  colorChangeHandler,
  compareCheckBoxHandler,
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
}) => {
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

  // console.log(product);
  return (
    <li className='text-center flex'>
      <div className='h-hull w-full'>
        <div className='flex text-center lg:w-auto h-full'>
          <div className='relative border border-gray-200 pb-4 w-full'>
            <div className='w-full bg-white rounded-md overflow-hidden aspect-w-1 aspect-h-1'>
              <ImageComponent
                src={currentProduct?.imageName ? currentProduct.imageName : ''}
                alt=''
                className='w-auto h-auto m-auto max-h-[400px]'
                height={400}
                width={350}
                cKey={currentProduct.id}
              />
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
            </div>
            <div className='mt-6 relative'>
              {/* <div className="text-sm absolute -top-4 left-0 right-0">
                <span className="w-2.5 h-2.5 bg-rose-500 inline-block rounded-full mr-1"></span>
                Available Ofline
              </div> */}
              <div className='mt-1'>
                <img
                  className='inline-block max-h-12'
                  src={`${config.mediaBaseUrl}/rdc${
                    product.brandlogo && product.brandlogo.replace('/rdc', '')
                  }`}
                  alt={product.brandlogo}
                />
              </div>
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
              <div className='relative mt-1 text-anchor hover:text-anchor-hover h-14 text-ellipsis overflow-hidden line-clamp-2'>
                <Link
                  key={product.id}
                  href={`${origin}/${product.sename}.html?v=product-detail&altview=1`}
                  className='relative underline min-h-[48px]'
                >
                  <a>
                    <span className='absolute inset-0'></span>
                    {product.name}
                  </a>
                </Link>
              </div>
              <div className='mt-2 text-black text-base tracking-wider'>
                MSRP{' '}
                <Price
                  value={undefined}
                  prices={{
                    msrp: product.msrp,
                    salePrice: product.salePrice,
                  }}
                />
              </div>

              <div className='form-group mt-2'>
                <label className='checkbox-inline'>
                  <input
                    checked={skuList.includes(product?.sku ? product.sku : '')}
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
              {product.getProductImageOptionList &&
                product.getProductImageOptionList.length && (
                  <ul
                    role='list'
                    className='flex items-center mt-2 justify-center space-x-1'
                  >
                    {product.getProductImageOptionList.map((subRow, index) =>
                      index < 6 ? (
                        <li
                          className={`w-7 h-7 border-2${
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
                  </ul>
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
