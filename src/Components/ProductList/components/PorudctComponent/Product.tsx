import config from 'api.config';
import ImageComponent from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import Wishlist from 'appComponents/ui/Wishlist';
import { GetlAllProductList } from 'definations/productList.type';
import { getCompareLink } from 'helpers/compare.helper';
import Link from 'next/link';
import { _Store } from 'page.config';
import { useEffect } from 'react';
import ProductBoxController from './ProductBox.controller';
// import Price from 'appComponents/reUsable/Price';
// import Wishlist from '../ui/Wishlist';

const ProductComponent = ({
  product,
  skuList,
  colorChangeHandler,
  compareCheckBoxHandler,
  storeLayout,
}: {
  product: GetlAllProductList;
  skuList: string[];
  colorChangeHandler: (
    productid: number,
    seName: string,
    color: string,
  ) => void;
  compareCheckBoxHandler: (sku: string) => void;
  storeLayout: string | null;
}) => {
  const { currentProduct, origin, setCurrentProduct } = ProductBoxController({
    product,
    colorChangeHandler,
  });

  useEffect(() => {
    setCurrentProduct(product.getProductImageOptionList[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

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
              <ImageComponent
                src={currentProduct.imageName}
                alt=''
                className='w-auto h-auto m-auto max-h-[400px] cursor-pointer'
                height={400}
                width={350}
                cKey={currentProduct.id}
              />
              {storeLayout === _Store.type27 ? (
                <></>
              ) : (
                <div className='absolute top-5 right-5 text-gray-800 p-1 z-25'>
                  <button className=''>
                    <Wishlist
                      {...{
                        productId: product.id,
                        name: product.name,
                        color: currentProduct.colorName,
                        price: product.salePrice,
                        wishlistId: product.wishListId,
                      }}
                      iswishlist={product.iswishlist}
                    />
                  </button>
                </div>
              )}
            </div>
            <div className='mt-6 relative'>
              {/* <div className="text-sm absolute -top-4 left-0 right-0">
                <span className="w-2.5 h-2.5 bg-rose-500 inline-block rounded-full mr-1"></span>
                Available Ofline
              </div> */}
              {storeLayout === _Store.type27 ? (
                <></>
              ) : (
                <div className='mt-1'>
                  <img
                    className='inline-block max-h-12'
                    src={`${config.mediaBaseUrl}/rdc${product.brandlogo.replace(
                      '/rdc',
                      '',
                    )}`}
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
                className={
                  storeLayout === _Store.type27
                    ? 'mt-1 h-15 overflow-hidden text-sm text-anchor tracking-wider hover:text-primary-hover'
                    : 'relative mt-1 text-anchor hover:text-anchor-hover h-14 text-ellipsis overflow-hidden line-clamp-2'
                }
              >
                <Link
                  key={product.id}
                  href={`${origin}/${product.sename}.html?v=product-detail&altview=1`}
                  className='relative underline min-h-[48px] '
                >
                  {product.name}
                </Link>
              </div>
              <div
                className={
                  storeLayout === _Store.type27
                    ? 'mt-4 text-default text-xl'
                    : 'mt-2 text-black text-base tracking-wider'
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

              {storeLayout === _Store.type27 ? (
                <></>
              ) : (
                <div className='form-group mt-2'>
                  <label className='checkbox-inline'>
                    <input
                      checked={skuList.includes(product.sku)}
                      onChange={() => compareCheckBoxHandler(product.sku)}
                      type='checkbox'
                    />{' '}
                    {
                      <>
                        {skuList.length && skuList.includes(product.sku) ? (
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
              {product.getProductImageOptionList.length > 0 && (
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
