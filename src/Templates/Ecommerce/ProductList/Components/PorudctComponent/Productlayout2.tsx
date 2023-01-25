import config from 'api.config';
import ImageComponent from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import Wishlist from 'appComponents/ui/Wishlist';
import ProductQuoteRequest from 'Components/ProductDetails/ProductQuoteRequest';
import { _modals } from 'definations/product.type';
import { GetlAllProductList } from 'definations/productList.type';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ProductBoxController from './ProductBox.controller';
// import Price from 'appComponents/reUsable/Price';
// import Wishlist from '../ui/Wishlist';

const ProductLayout2 = ({
  product,
  skuList,
  colorChangeHandler,
  compareCheckBoxHandler,
}: {
  product: GetlAllProductList;
  skuList: string[];
  colorChangeHandler: (
    productid: number,
    seName: string,
    color: string,
  ) => void;
  compareCheckBoxHandler: (sku: string) => void;
}) => {
  const { currentProduct, origin, setCurrentProduct } = ProductBoxController({
    product,
    colorChangeHandler,
  });
  const [openModal, setOpenModal] = useState<null | _modals>(null);
  const storeCode = useTypedSelector((state) => state.store.layout);
 
  useEffect(() => {
    setCurrentProduct(product.getProductImageOptionList[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  if (!currentProduct) {
    return <></>;
  }
  const modalHandler = (param: null | _modals) => {
    if (param) {
      setOpenModal(param);
      return;
    }
    setOpenModal(null);
  };

  // console.log(product);
  return (
    <>
    <li className="text-center flex">
      <div className="h-hull w-full">
        <div className="flex text-center lg:w-auto h-full">
          <div className="relative border border-gray-200 pb-4 w-full">
            <div className="w-full bg-white rounded-md overflow-hidden aspect-w-1 aspect-h-1">
              <ImageComponent
                src={currentProduct.imageName}
                alt=""
                className="w-auto h-auto m-auto max-h-[400px]"
                height={400}
                width={350}
                cKey={currentProduct.id}
              />
              <div className="absolute top-5 right-5 text-gray-800 p-1 z-25">
                <button className="">
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
            </div>
            <div className="mt-6 relative">
              {/* <div className="text-sm absolute -top-4 left-0 right-0">
                <span className="w-2.5 h-2.5 bg-rose-500 inline-block rounded-full mr-1"></span>
                Available Ofline
              </div> */}
              {/* <div className="mt-1">
                <img
                  className="inline-block max-h-12"
                  src={`${config.mediaBaseUrl}/rdc${product.brandlogo.replace(
                    '/rdc',
                    '',
                  )}`}
                  alt={product.brandlogo}
                />
              </div> */}
              <div className="mt-1">
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
              </div>
              <div className="relative mt-1 text-anchor hover:text-anchor-hover h-14 text-ellipsis overflow-hidden line-clamp-2">
                <Link
                  key={product.id}
                  href={`${origin}/${product.sename}.html?v=product-detail&altview=1`}
                  className="relative underline min-h-[48px]"
                >
                    <h3 className="mt-1 font-bold text-xl text-gray-900 px-3 hover:text-blue-500">

                  <a>
                    <span className="absolute inset-0"></span>
                    {product.name}
                  </a>
                    </h3>
                </Link>
              </div>
              <div className="mt-2 text-black text-base tracking-wider">
                {/* <span className="font-semibold">$159.00</span>{' '}
                <del>$199.00</del> */}
                <p className="mt-4 text-[#415364]">
                    <span className="font-bold">  MSRP <Price value={product.salePrice} />
                    </span></p>
              
              </div>

              {/* <div className="form-group mt-2">
                <label className="checkbox-inline">
                  <input
                    checked={skuList.includes(product.sku)}
                    onChange={() => compareCheckBoxHandler(product.sku)}
                    type="checkbox"
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
              </div> */}

              {product.getProductImageOptionList.length > 0 && (
                <ul
                  role="list"
                  className="flex items-center mt-2 justify-center space-x-1"
                >
                  {product.getProductImageOptionList.map((subRow, index) =>
                    index < 6 ? (
                      
                      <li
                        className={`w-8 h-8 border-2${
                          subRow.id === currentProduct.id
                            ? ' border-primary'
                            : ' border-secondary hover:border-primary'
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
                          alt=""
                          title=""
                          className="max-h-full m-auto"
                        />
                      </li>
                    ) : null,
                  )}
                </ul>
              )}
              {/* bg-[#051c2c] hover:bg-[#cdde00] text-[#cdde00] hover:text-[#051c2c] text-lg py-2 px-5 inline-block */}
              <div className="mt-3  ">
                <button onClick={()=>setOpenModal('qouteRequest')}>

                <a  className=" bg-[#051c2c] hover:bg-[#cdde00] text-[#cdde00] hover:text-[#051c2c] text-lg py-2 px-5 inline-block">
                  CONTACT US
                </a>
                </button>
              </div>
                
                        {openModal === 'qouteRequest' && (
                            <ProductQuoteRequest
                                storeCode={storeCode||''}
                                modalHandler={modalHandler}
                                product=  {product.name}
                            />
                            )}
            </div>
          </div>
        </div>
      </div>
    </li>
    </>
  );
};

export default ProductLayout2;
