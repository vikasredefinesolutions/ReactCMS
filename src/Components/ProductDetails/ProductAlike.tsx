import { _ProductsAlike } from '@type/APIs/productDetail.res';
import Image from 'appComponents/reusables/Image';
import Price from 'appComponents/reusables/Price';
import { useRouter } from 'next/router';
import { __constant } from 'page.config';
import React, { useRef } from 'react';
import Slider from 'react-slick';

interface _props {
  title: string;
  products: _ProductsAlike[] | null;
}

const ProductAlike: React.FC<_props> = ({ title, products }) => {
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
        <section className="mainsection mt-10">
          <div className="container mx-auto">
            <div className="w-full text-center text-2xl md:text-3xl lg:text-title font-title text-color-title text-color-title mb-4">
              {title}
            </div>
            <div className="relative" id="slider">
              {/* <button onClick={() => goToPrevProduct()}>Prev</button> */}
              <Slider
                ref={(c) => (sliderRef.current = c)}
                {...__constant._productDetails.similarProducts.sliderSettings}
              >
                {products.map((product) => {
                  return (
                    <div key={product.id} className="slide-item">
                      <div className="px-2">
                        <div className="flex text-center lg:w-auto mb-6">
                          <div className="relative pb-4 w-full">
                            <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                              <div
                                onClick={() => router.push(product.seName)}
                                // href={`${encodeURIComponent(product.seName)}`}
                                className="relative"
                              >
                                {/* Issue: Using functional components as child of <Link/> causes ref-warnings */}
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  className="w-auto h-auto max-h-max"
                                />
                              </div>
                            </div>
                            <div className="mt-6">
                              <div
                                onClick={() => router.push(product.seName)}
                                className="mt-1 text-anchor hover:text-anchor-hover"
                              >
                                <div className="relative underline">
                                  <span className="absolute inset-0"></span>
                                  {product.name}
                                </div>
                              </div>
                              <div className="mt-3 text-black text-base tracking-wider">
                                <span className="font-semibold">
                                  MSRP <Price value={product.msrp} />
                                </span>
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
      )}
    </>
  );
};

export default ProductAlike;
