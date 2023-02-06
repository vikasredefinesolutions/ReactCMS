import { showcolors } from '@constants/global.constant';
import { _ProductsAlike } from '@type/APIs/productDetail.res';
import config from 'api.config';
import Image from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { _Store, __constant } from 'page.config';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

interface _props {
  storeCode: string;
  title: string;
  products: _ProductsAlike[] | null;
}
interface _selectedcolor {
  productName: string;
  imageurl: string | null;
}
const ProductAlike: React.FC<_props> = ({ storeCode, title, products }) => {
  const [color, setColors] = useState<string | null>(null);
  const [productImage, setProductImage] = useState<_selectedcolor>();

  const router = useRouter();
  const sliderRef = useRef<null | Slider>(null);

  const goToNextProduct = () => {
    sliderRef.current!.slickNext();
  };

  const goToPrevProduct = () => {
    sliderRef.current!.slickPrev();
  };
  let flag: boolean = false;

  if (storeCode === _Store.type2) {
    return (
      <>
        {products === null ? (
          <></>
        ) : (
          <section className='mainsection mt-10'>
            <div className='container mx-auto'>
              <div className='w-full text-center text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title mb-4'>
                {title}
              </div>
              <div className='relative' id='slider'>
                <div
                  className={`${
                    products.length > __constant._productAlike.carouselCounter
                      ? 'absolute'
                      : 'hidden'
                  } inset-y-0 left-0 z-10 flex items-center`}
                >
                  <button
                    onClick={() => goToPrevProduct()}
                    className='bg-white flex justify-center items-center w-7 h-7 rounded-full shadow focus:outline-none'
                  >
                    <span className='chevron-left ml-2 text-base material-symbols-outlined font-semibold'>
                      arrow_back_ios
                    </span>
                  </button>
                </div>
                <Slider
                  ref={(c) => (sliderRef.current = c)}
                  {...__constant._productDetails.similarProducts.sliderSettings}
                >
                  {products.map((product) => {
                    return (
                      <div key={product.id} className='slide-item'>
                        <div className='px-2'>
                          <div className='flex text-center lg:w-auto mb-6'>
                            <div className='relative pb-4 w-full'>
                              <div className='w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1'>
                                <div
                                  onClick={() => router.push(product.seName)}
                                  // href={`${encodeURIComponent(product.seName)}`}
                                  className='relative'
                                >
                                  {/* Issue: Using functional components as child of <Link/> causes ref-warnings */}
                                  <Image
                                    src={product.image}
                                    alt={product.name}
                                    className='w-auto h-auto max-h-max'
                                  />
                                </div>
                              </div>
                              <div className='mt-6'>
                                <div
                                  onClick={() => router.push(product.seName)}
                                  className='mt-1 text-anchor hover:text-anchor-hover'
                                >
                                  <div className='w-full text-xl mb-3 h-14'>
                                    <span className='text-secondary text-xl font-bold cursor-pointer hover:text-anchor-hover'>
                                      {product.name}
                                    </span>
                                  </div>
                                </div>
                                <div className='text-secondary-hover font-bold'>
                                  MSRP <Price value={product.msrp} />
                                </div>

                                {/* <div className="mt-3 text-black text-base tracking-wider">
                                  <span className="font-semibold">
                                    MSRP <Price value={product.msrp} />
                                  </span>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
                <div
                  className={`${
                    products.length > __constant._productAlike.carouselCounter
                      ? 'absolute'
                      : 'hidden'
                  } inset-y-0 right-0 z-10 flex items-center`}
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
  }

  if (
    storeCode === _Store.type3 ||
    storeCode === _Store.type8 ||
    storeCode === _Store.type27
  ) {
    return (
      <>
        {products === null ? (
          <></>
        ) : (
          <>
            <section className='mainsection mt-10'>
              <div className='container mx-auto'>
                <div className='w-full text-center text-2xl md:text-3xl lg:text-title font-title text-color-title text-color-title mb-4'>
                  {title}
                </div>
                <div className='relative' id='slider'>
                  <div
                    className={`${
                      products.length > __constant._productAlike.carouselCounter
                        ? 'absolute'
                        : 'hidden'
                    } inset-y-0 left-0 z-10 flex items-center`}
                  >
                    <button
                      onClick={() => goToPrevProduct()}
                      className='bg-white flex justify-center items-center w-7 h-7 rounded-full shadow focus:outline-none'
                    >
                      <span className='chevron-left ml-2 text-base material-symbols-outlined font-semibold'>
                        arrow_back_ios
                      </span>
                    </button>
                  </div>
                  <Slider
                    ref={(c) => (sliderRef.current = c)}
                    {...__constant._productDetails.similarProducts
                      .sliderSettings}
                  >
                    {products.map((product) => {
                      return (
                        <>
                          <div key={product.id} className='slide-item'>
                            <div className='px-2'>
                              <div className='flex text-center lg:w-auto mb-6'>
                                <div className='relative pb-4 w-full'>
                                  <div className='w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1'>
                                    <Link
                                      href={`${encodeURIComponent(
                                        product.seName,
                                      )}.html?v=product-detail&altview=1`}
                                    >
                                      <div className='relative'>
                                        {/* Issue: Using functional components as child of <Link/> causes ref-warnings */}
                                        <Image
                                          src={
                                            product.name ==
                                            productImage?.productName
                                              ? productImage.imageurl
                                              : product.image
                                          }
                                          alt={product.name}
                                          className='w-auto h-auto max-h-max'
                                        />
                                      </div>
                                    </Link>
                                  </div>
                                  <div className='mt-6'>
                                    <a
                                      className='h-12'
                                      href={`${encodeURIComponent(
                                        product.seName,
                                      )}.html?v=product-detail&altview=1`}
                                    >
                                      <div className='w-full text-sm mb-2 tracking-wide'>
                                        <div className='relative text-anchor'>
                                          <span className='absolute inset-0 text-anchor h-15'></span>
                                          {product.name}
                                        </div>
                                      </div>
                                    </a>

                                    <div className='mt-3 text-black text-base tracking-wider'>
                                      <span className='mt-2 text-primary'>
                                        MSRP <Price value={product.msrp} />
                                      </span>
                                    </div>
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
                                                setProductImage({
                                                  productName: product.name,
                                                  imageurl: colour.imageName,
                                                });
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
                    } inset-y-0 right-0 z-10 flex items-center`}
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
          </>
        )}
      </>
    );
  }

  if (
    storeCode === _Store.type4 ||
    storeCode === _Store.type10 ||
    storeCode === _Store.type24 ||
    storeCode === _Store.type8
  ) {
    return (
      <>
        {products === null ? (
          <></>
        ) : (
          <>
            <section className='mainsection mt-10'>
              <div className='container mx-auto'>
                {storeCode === _Store.type10 ? (
                  <div className='w-full text-center text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title pt-5 mb-5'>
                    {title}
                  </div>
                ) : (
                  <div className='w-full text-center text-2xl md:text-3xl lg:text-title font-title text-color-title text-color-title mb-4'>
                    {title}
                  </div>
                )}

                <div className='relative' id='slider'>
                  <div
                    className={`${
                      products.length > __constant._productAlike.carouselCounter
                        ? 'absolute'
                        : 'hidden'
                    } inset-y-0 left-0 z-10 flex items-center`}
                  >
                    <button
                      onClick={() => goToPrevProduct()}
                      className='bg-white flex justify-center items-center w-7 h-7 rounded-full shadow focus:outline-none'
                    >
                      <span className='chevron-left ml-2 text-base material-symbols-outlined font-semibold'>
                        arrow_back_ios
                      </span>
                    </button>
                  </div>
                  <Slider
                    ref={(c) => (sliderRef.current = c)}
                    {...__constant._productDetails.similarProducts
                      .sliderSettings}
                  >
                    {products.map((product) => {
                      return (
                        <>
                          <div key={product.id} className='slide-item '>
                            {storeCode === _Store.type10 ||
                            storeCode === _Store.type8 ? (
                              <div className='px-2 border border-transparent hover:border-gray-300 p-1'>
                                <div className='flex text-center lg:w-auto mb-6'>
                                  <div className='relative pb-4 w-full'>
                                    <div className='w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1'>
                                      <a
                                        href={`${encodeURIComponent(
                                          product.seName,
                                        )}.html?v=product-detail&altview=1`}
                                        className={'block'}
                                      >
                                        <div className='relative'>
                                          {/* Issue: Using functional components as child of <Link/> causes ref-warnings */}
                                          <Image
                                            src={product.image}
                                            alt={product.name}
                                            className='w-auto h-auto max-h-max'
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className='mt-6'>
                                      <a
                                        href={`${encodeURIComponent(
                                          product.seName,
                                        )}.html?v=product-detail&altview=1`}
                                      >
                                        <div className='mt-1 text-anchor hover:text-anchor-hover'>
                                          <div className='relative'>
                                            <span className='absolute inset-0'></span>
                                            {product.name}
                                          </div>
                                        </div>
                                      </a>

                                      <div className='mt-3 text-black text-base tracking-wider'>
                                        <span className='mt-2 text-primary'>
                                          MSRP <Price value={product.msrp} />
                                        </span>
                                      </div>
                                      <div className='flex justify-center mx-auto'>
                                        <a
                                          className='btn btn-secondary'
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className='px-2 border border-transparent p-1'>
                                <div className='flex text-center lg:w-auto mb-6'>
                                  <div className='relative pb-4 w-full'>
                                    <div className='w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1'>
                                      <Link
                                        href={`${encodeURIComponent(
                                          product.seName,
                                        )}.html?v=product-detail&altview=1`}
                                      >
                                        <div className='relative'>
                                          {/* Issue: Using functional components as child of <Link/> causes ref-warnings */}
                                          <Image
                                            src={product.image}
                                            alt={product.name}
                                            className='w-auto h-auto max-h-max'
                                          />
                                        </div>
                                      </Link>
                                    </div>
                                    <div className='mt-6'>
                                      <a
                                        href={`${encodeURIComponent(
                                          product.seName,
                                        )}.html?v=product-detail&altview=1`}
                                      >
                                        <div className='mt-1 text-anchor hover:text-anchor-hover'>
                                          <div className='relative'>
                                            <span className='absolute inset-0'></span>
                                            {product.name}
                                          </div>
                                        </div>
                                      </a>

                                      <div className='mt-3 text-black text-base tracking-wider'>
                                        <span className='mt-2 text-primary'>
                                          MSRP <Price value={product.msrp} />
                                        </span>
                                      </div>
                                      <div className='flex justify-center mx-auto'>
                                        <a
                                          className='btn btn-secondary'
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
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
                    } inset-y-0 right-0 z-10 flex items-center`}
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
          </>
        )}
      </>
    );
  }
  return <></>;
};

export default ProductAlike;
