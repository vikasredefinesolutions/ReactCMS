import { showcolors } from '@constants/global.constant';
import { _ProductsRecentlyViewedResponse } from '@type/APIs/productDetail.res';
import config from 'api.config';
import Image from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { _Store, __constant } from 'page.config';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

interface _props {
  title: string;
  products: _ProductsRecentlyViewedResponse[] | null;
  storeCode: string;
}

interface _selctedcolor {
  productName: string;
  imageurl: string | null;
}
const ProductRecentlyViewed: React.FC<_props> = ({
  title,
  products: productsData,
  storeCode,
}) => {
  const [color, setColors] = useState<string | null>(null);
  const [products, setProducts] = useState(
    Array.isArray(productsData)
      ? productsData.map((productdata) => ({
          ...productdata,
          selected: productdata.image,
        }))
      : [],
  );
  const router = useRouter();
  const sliderRef = useRef<null | Slider>(null);

  const goToNextProduct = () => {
    sliderRef.current!.slickNext();
  };

  const goToPrevProduct = () => {
    sliderRef.current!.slickPrev();
  };
  const storeLayout = useTypedSelector((state) => state.store.layout);
  let flag: boolean = false;
  return (
    <>
      {products === null ? (
        <></>
      ) : (
        <section className='mainsection mt-10'>
          <div className='container mx-auto'>
            <div className='w-full text-center text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title pt-5 mb-5'>
              {title}
            </div>
            <div className='relative' id='slider'>
              <div
                className={`${
                  products.length > __constant._productAlike.carouselCounter
                    ? 'absolute'
                    : 'hidden'
                } inset-y-0 ${
                  storeCode == _Store.type10 ||
                  storeCode === _Store.type27 ||
                  storeCode === _Store.type24
                    ? 'top-3/4'
                    : 'top-1/2'
                } -translate-x-3.5 lg:-translate-x-1/2 -trnaslate-y-1/2 left-0 z-10 flex items-center`}
              >
                <button
                  onClick={() => goToPrevProduct()}
                  className='flex justify-center items-center w-6 h-6 focus:outline-none text-black'
                >
                  <span className='chevron-left ml-2 text-base material-symbols-outlined font-semibold '>
                    arrow_back_ios
                  </span>
                </button>
              </div>
              <Slider
                ref={(c) => (sliderRef.current = c)}
                {...__constant._productDetails.recentlyViewed.sliderSettings}
              >
                {products.map((product) => {
                  return (
                    <>
                      <div key={product.id} className='slide-item '>
                        <div
                          className={`px-2 border border-transparent p-1 ${
                            storeCode === _Store.type23
                              ? 'hover:border-gray-300'
                              : ''
                          } `}
                        >
                          <div className='flex text-center lg:w-auto mb-6'>
                            <div className='relative pb-4 w-full'>
                              <div className='w-full  rounded-md overflow-hidden aspect-w-1 aspect-h-1 cursor-pointer '>
                                <Link
                                  key={product.id}
                                  href={`${encodeURIComponent(
                                    product.seName,
                                  )}.html?v=product-detail&altview=1`}
                                  className='relative underline min-h-[48px]'
                                >
                                  <div className='relative'>
                                    {/* Issue: Using functional components as child of <Link/> causes ref-warnings */}
                                    <Image
                                      src={product.selected}
                                      alt={product.name}
                                      className='w-auto h-auto max-h-max'
                                    />
                                  </div>
                                </Link>
                              </div>
                              <div className='mt-6 cursor-pointer'>
                                <Link
                                  key={product.id}
                                  href={`${encodeURIComponent(
                                    product.seName,
                                  )}.html?v=product-detail&altview=1`}
                                  className='relative underline min-h-[48px]'
                                >
                                  <div className='w-full text-xl mb-3 h-14'>
                                    <span className='text-secondary text-xl font-bold cursor-pointer hover:text-anchor-hover'>
                                      {product.name}
                                    </span>
                                  </div>
                                </Link>

                                <div
                                  className={
                                    storeCode === _Store.type23
                                      ? 'text-anchor'
                                      : 'mt-3 text-black text-base tracking-wider'
                                  }
                                >
                                  <span
                                    className={
                                      storeCode === _Store.type23
                                        ? ''
                                        : 'mt-2 text-primary'
                                    }
                                  >
                                    {storeCode === _Store.type27 ? '' : 'MSRP'}
                                    <Price value={product.msrp} />
                                  </span>
                                </div>

                                {(storeLayout === _Store.type27 ||
                                  storeLayout === _Store.type5 ||
                                  storeLayout === _Store.type6) && (
                                  <div className='flex flex-wrap gap-1 text-sm text-center justify-center space-x-1'>
                                    {product.getProductImageOptionList?.map(
                                      (colour, index) => {
                                        const colorName = colour.colorName;
                                        return index < showcolors ? (
                                          <div
                                            key={colour.colorName}
                                            className='w-8 h-8'
                                            onClick={() => {
                                              setColors(colour.colorName);
                                              setProducts((prev) =>
                                                prev.map((productdata) => {
                                                  if (
                                                    productdata.name ==
                                                    product.name
                                                  )
                                                    return {
                                                      ...productdata,
                                                      selected:
                                                        colour.imageName,
                                                    };
                                                  return productdata;
                                                }),
                                              );
                                            }}
                                          >
                                            <div
                                              className={`border border-gray-300 p-px cursor-pointer  hover:border-secondary ${
                                                color && colorName === color
                                                  ? ' border-secondary'
                                                  : ''
                                              }`}
                                            >
                                              <img
                                                src={`${config.mediaBaseUrl}${colour.imageName}`}
                                                alt=''
                                                className='w-full object-center object-cover w-7 h-7'
                                              />
                                            </div>
                                            <div className='hidden'>
                                              {colour.colorName}
                                            </div>
                                          </div>
                                        ) : (
                                          <>{(flag = true)}</>
                                        );
                                      },
                                    )}
                                    {flag ? (
                                      <a
                                        href={`${encodeURIComponent(
                                          product.seName,
                                        )}.html?v=product-detail&altview=1`}
                                      >
                                        <ul
                                          className={`border border-gray-300 p-px cursor-pointer   hover:border-secondary  w-7 h-8 pt-1`}
                                        >
                                          <span className=''>
                                            {' '}
                                            +
                                            {product.getProductImageOptionList
                                              .length - 4}
                                          </span>
                                          {(flag = false)}
                                        </ul>
                                      </a>
                                    ) : null}
                                  </div>
                                )}
                                {storeLayout !== _Store.type27 &&
                                  storeLayout !== _Store.type2 && (
                                    <div className='flex justify-center mx-auto mt-4'>
                                      <a
                                        className='btn btn-primary'
                                        href={`${encodeURIComponent(
                                          product.seName,
                                        )}.html?v=product-detail&altview=1`}
                                        title=''
                                      >
                                        <span className='material-icons text-sm'>
                                          local_mall
                                        </span>
                                        <span className='ml-1'>
                                          ADD TO CART
                                        </span>
                                      </a>
                                    </div>
                                  )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
              <div
                className={`${
                  products.length > __constant._productAlike.carouselCounter
                    ? 'absolute'
                    : 'hidden'
                } inset-y-0 ${
                  storeCode == _Store.type10 ||
                  storeCode === _Store.type27 ||
                  storeCode === _Store.type24
                    ? 'top-3/4'
                    : 'top-1/2'
                } -translate-x-3.5 lg:-translate-x-1/2 -trnaslate-y-1/2 right-0 z-10 flex items-center`}
              >
                <button
                  onClick={() => goToNextProduct()}
                  className='bg-white w-7 h-7 rounded-full shadow focus:outline-none'
                >
                  <span className='chevron-right -mr-1  text-base material-symbols-outlined font-semibold'>
                    arrow_forward_ios
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductRecentlyViewed;
