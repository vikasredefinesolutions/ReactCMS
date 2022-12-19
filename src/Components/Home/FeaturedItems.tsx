import { _FeaturedProduct } from '@type/APIs/storeDetails.res';
import Image from 'appComponents/reusables/Image';
import Price from 'appComponents/reusables/Price';
import { conditionalLogV2, __console } from 'helpers/global.console';
import { useActions } from 'hooks';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import FeatureDisplayImage from './FeatureDisplayImage';

interface _props {
  brands: { name: string; id: number }[] | null;
  products: Array<_FeaturedProduct[]> | null;
}

const FeaturedItems: React.FC<_props> = ({ brands, products: productsArr }) => {
  conditionalLogV2({
    data: {
      brands,
      productsArr,
    },
    show: __console.home.component.featuredItems,
    type: 'COMPONENT',
    name: 'FeaturedItems (Home Page) received props',
  });

  const { showFeaturedImage } = useActions();
  const [brandIndex, setBrandIndex] = useState(0);

  useEffect(() => {
    if (productsArr) {
      productsArr.forEach((products, brandIndx) => {
        if (brandIndx === brandIndex) {
          products.forEach((prod, prodIndex) => {
            showFeaturedImage({
              imageDetails: prod.moreImages[0],
              productIndex: prodIndex,
            });
          });
        }
      });
    }
  }, [brandIndex]);

  return (
    <>
      {/* <section className="mainsection container mx-auto mt-20 text-center">
        <img
          className="text-center inline-block"
          src="images/seperator-design.png"
          alt=""
        />
      </section> */}
      <section className="mainsection container mx-auto mt-20">
        <div className="w-full text-2xl md:text-3xl lg:text-title font-title text-color-title text-center mb-4">
          FEATURED ITEMS
        </div>
        <div className="flex flex-col md:flex-row md:-mr-px text-sm">
          <div
            // x-data="{activeTab:01, activeClass: 'tab py-2 mr-1 px-2 block hover:text-primary text-primary focus:outline-none text-default-text border-b-2 font-medium border-primary', inactiveClass : 'tab py-2 px-2 block text-default-text hover:text-primary focus:outline-none mr-1 rounded-sm font-medium border-slate-300 hover:border-primary' }"
            className="w-full"
          >
            {brands && (
              <ul className="w-full flex justify-center max-w-4xl mx-auto flex-wrap">
                {brands.map((brand, index) => (
                  <li
                    key={index}
                    className="mx-8 md:mr-0 font-semibold"
                    onClick={() => setBrandIndex(index)}
                  >
                    <a>{brand.name}</a>
                  </li>
                ))}
              </ul>
            )}
            <div className="text-center mx-auto pt-10">
              <div className="panel-01 tab-content overflow-hidden">
                <div className="flex flex-wrap sm:-mx-3 gap-y-6">
                  {productsArr?.map((products, brandIndx) => {
                    if (brandIndx === brandIndex) {
                      return products?.map((product, productIndex) => {
                        return (
                          <div
                            key={productIndex}
                            className="w-full lg:w-1/4 sm:w-1/2 sm:px-3"
                          >
                            <div className="">
                              <div className="flex text-center lg:w-auto">
                                <div className="relative border border-gray-200 pb-4">
                                  <div className="mt-6">
                                    <FeatureDisplayImage
                                      productIndex={productIndex}
                                      seName={product.productSEName}
                                    />
                                    <Link
                                      href={product.productSEName}
                                      className="mt-1 text-anchor hover:text-anchor-hover"
                                    >
                                      <a className="relative">
                                        <span className="absolute inset-0"></span>
                                        {product.productName}
                                      </a>
                                    </Link>
                                    <div className="mt-3 text-black text-base tracking-wider">
                                      <span className="font-semibold">
                                        MSRP <Price value={product.msrp} />
                                      </span>
                                    </div>
                                    <ul
                                      role="list"
                                      className="flex items-center mt-2 justify-center space-x-1"
                                    >
                                      {product.moreImages.map(
                                        (image, imageIndex) => (
                                          <li
                                            key={imageIndex}
                                            className="w-7 h-7 border-2 border-secondary hover:border-secondary"
                                            onClick={() =>
                                              showFeaturedImage({
                                                imageDetails: image,
                                                productIndex: productIndex,
                                              })
                                            }
                                          >
                                            <Image
                                              src={image.imageUrl}
                                              alt={image.altTag}
                                              className=""
                                            />
                                          </li>
                                        ),
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      });
                    }
                    return <></>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedItems;
