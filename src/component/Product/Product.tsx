import ImageComponent from 'appComponents/reusables/Image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import config from '../../../config';
import { GetlAllProductList } from '../../definations/productList.type';
// import Price from '../reusables/Price';
// import Wishlist from '../ui/Wishlist';

const ProductComponent = ({
  product,
  colorChangeHandler,
}: {
  product: GetlAllProductList;
  colorChangeHandler: (
    productid: number,
    seName: string,
    color: string,
  ) => void;
}) => {
  const [currentProduct, setCurrentProduct] = useState(
    product.getProductImageOptionList[0],
  );

  useEffect(() => {
    colorChangeHandler(
      product.id,
      product.sename || '',
      product.getProductImageOptionList[0].colorName,
    );
  }, []);

  return (
    <li className="text-center flex">
      <div className="h-hull w-full">
        <div className="flex text-center lg:w-auto h-full">
          <div className="relative border border-gray-200 pb-4 w-full">
            <div className="w-full bg-white rounded-md overflow-hidden aspect-w-1 aspect-h-1">
              <a href="product-page.html">
                <ImageComponent
                  src={`${config.mediaBaseUrl}${currentProduct.imageName}`}
                  alt=""
                  className="w-auto h-auto m-auto max-h-[400px]"
                  height={400}
                  width={350}
                />
              </a>
              <div className="absolute top-5 right-5 text-gray-800 p-1 z-5">
                <button className="">
                  {/* <Wishlist
                    {...{
                      productId: product.id,
                      name: product.name,
                      color: currentProduct.colorName,
                      price: product.salePrice,
                      wishlistId: product.wishListId,
                    }}
                    iswishlist={product.iswishlist}
                  /> */}
                </button>
              </div>
            </div>
            <div className="mt-6">
              <div className="mt-1 text-center">
                <img
                  className="inline-block"
                  src={`${config.mediaBaseUrl}/rdc${product.brandlogo}`}
                  alt={product.brandlogo}
                  style={{ height: '45px' }}
                />
              </div>
              <div className="mt-1 text-anchor min-h-[48px]">
                <Link
                  className="relative underline min-h-[48px]"
                  key={product.id}
                  href={`${product.sename}.html?v=product-detail`}
                >
                  <>
                    <span className="absolute inset-0"></span>
                    {product.name}
                  </>
                </Link>
              </div>
              <div className="mt-3 text-black text-base tracking-wider">
                <span className="font-semibold">
                  <>{/* MSRP <Price value={product.salePrice} /> */}</>
                </span>
              </div>
              {product.getProductImageOptionList.length > 0 && (
                <ul
                  role="list"
                  className="flex items-center mt-2 justify-center space-x-1"
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
                          alt=""
                          title=""
                          className="max-h-full m-auto"
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
