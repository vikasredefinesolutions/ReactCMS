import Link from 'next/link';
import { sliderSettings } from 'page.config';
import React, { useRef } from 'react';
import Slider from 'react-slick';

const ProductAlike: React.FC<{ title: string }> = ({ title }) => {
  const sliderRef = useRef<null | Slider>(null);

  const goToNextProduct = () => {
    sliderRef.current!.slickNext();
  };

  const goToPrevProduct = () => {
    sliderRef.current!.slickPrev();
  };

  return (
    <section className="mainsection mt-10">
      <div className="container mx-auto">
        <div className="w-full text-center text-2xl md:text-3xl lg:text-title font-title text-color-title text-color-title mb-4">
          {title}
        </div>
        <div className="relative" id="slider">
          {/* <button onClick={() => goToPrevProduct()}>Prev</button> */}
          <Slider ref={sliderRef} {...sliderSettings.similarProducts}>
            {['', '', '', '', ''].map((ele) => {
              return (
                <div className="slide-item">
                  <div className="px-2">
                    <div className="flex text-center lg:w-auto mb-6">
                      <div className="relative pb-4">
                        <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                          <Link href="product-page.html" className="relative">
                            <img
                              src="./images/1040623_25528_STH.jpg"
                              alt=""
                              className="w-auto h-auto max-h-max"
                            />
                          </Link>
                        </div>
                        <div className="mt-6">
                          <div className="mt-1 text-anchor hover:text-anchor-hover">
                            <Link
                              href="product-page.html"
                              className="relative underline"
                            >
                              <>
                                <span className="absolute inset-0"></span>
                                Patagonia Men's Better Sweater Jacket
                              </>
                            </Link>
                          </div>
                          <div className="mt-3 text-black text-base tracking-wider">
                            <span className="font-semibold">MSRP $149.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          {/* <button onClick={() => goToNextProduct()}>Next</button> */}
        </div>
      </div>
    </section>
  );
};

export default ProductAlike;
