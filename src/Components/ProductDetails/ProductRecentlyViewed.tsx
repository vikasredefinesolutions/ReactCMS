import { _ProductsRecentlyViewedResponse } from '@type/APIs/productDetail.res';
import Image from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { __constant } from 'page.config';
import React, { useRef } from 'react';
import Slider from 'react-slick';

interface _props {
  title: string;
  products: _ProductsRecentlyViewedResponse[] | null;
}

const ProductRecentlyViewed: React.FC<_props> = ({ title, products }) => {
  const router = useRouter();
  const sliderRef = useRef<null | Slider>(null);

  const goToNextProduct = () => {
    sliderRef.current!.slickNext();
  };

  const goToPrevProduct = () => {
    sliderRef.current!.slickPrev();
  };

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
                  products.length > 3 ? 'absolute' : 'hidden'
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
                {...__constant._productDetails.recentlyViewed.sliderSettings}
              >
                {products.map((product) => {
                  return (
                    <>
                      <div key={product.id} className='slide-item '>
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
                                    <span className='ml-1'>ADD TO CART</span>
                                  </a>
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
                  products.length > 3 ? 'absolute' : 'hidden'
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
};

export default ProductRecentlyViewed;
