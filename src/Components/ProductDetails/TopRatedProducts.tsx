import { _SuggestedProduct } from '@type/APIs/productDetail.res';
import Image from 'appComponents/reusables/Image';
import Price from 'appComponents/reusables/Price';
import Link from 'next/link';
import { sliderSettings } from 'page.config';
import React, { useRef } from 'react';
import Slider from 'react-slick';

interface _props {
  title: string;
  suggestedProducts: _SuggestedProduct[];
}

const TopRatedProducts: React.FC<_props> = ({ title, suggestedProducts }) => {
  return (
    <section className="mainsection mt-10">
      <div className="container mx-auto">
        <div className="w-full text-center text-2xl md:text-3xl lg:text-title font-title text-color-title text-color-title mb-4">
          {title}
        </div>
        <div className="relative" id="slider">
          <Slider {...sliderSettings.topRatedProduct}>
            {suggestedProducts.map((product) => {
              return (
                <div
                  key={product.sku}
                  className="slide-item"
                  onClick={() => console.log('clicked')}
                >
                  <div className="px-2">
                    <div className="flex text-center lg:w-auto mb-6">
                      <div className="relative pb-4">
                        <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                          <Link
                            href={`/${product.seName}`}
                            className="relative"
                          >
                            <Image
                              src={product.image}
                              alt={product.name}
                              className="w-auto h-auto max-h-max"
                            />
                          </Link>
                        </div>
                        <div className="mt-6">
                          <div className="mt-1 text-anchor hover:text-anchor-hover">
                            <Link
                              href={`/${product.seName}`}
                              className="relative underline"
                            >
                              <>
                                <span className="absolute inset-0"></span>
                                {product.name}
                              </>
                            </Link>
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
        </div>
      </div>
    </section>
  );
};

export default TopRatedProducts;
