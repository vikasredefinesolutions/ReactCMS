import { _FeaturedProduct } from '@type/APIs/storeDetails.res';
import Image from 'appComponents/reusables/Image';
import Price from 'appComponents/reusables/Price';
import { useActions } from 'hooks';
import Link from 'next/link';
import React, { useState } from 'react';
import FeatureDisplayImage from './FeatureDisplayImage';

interface _props {
  brands: { name: string; id: number }[] | null;
  products: Array<_FeaturedProduct[]> | null;
}

const FeaturedItems: React.FC<_props> = ({ brands }) => {
  const { showFeaturedImage } = useActions();
  const [brandIndex, setBrandIndex] = useState(0);
  const product = [
    {
      productId: 380,
      productName: 'Nike Featherlight Hat',
      productSEName: 'nike-featherlight-hat',
      ourCost: '15.60',
      msrp: '31.20',
      imap: '0.00',
      salePrice: '24.00',
      productDisplayOrder: 9999,
      imageUrl: '/rdc/1/product/attributeimages/attribute_6179_6179.jpg',
      moreImages: [
        {
          id: 0,
          attributeOptionID: 1880,
          attributeOptionName: 'Anthracite',
          imageUrl: '/rdc/1/product/attributeimages/attribute_6179_6179.jpg',
          displayOrder: 1,
          altTag: 'Nike Featherlight Hat Anthracite',
        },
      ],
    },
    {
      productId: 388,
      productName: 'Nike Brasilia Extra Small Training Duffel Bag',
      productSEName: 'nike-brasilia-extra-small-training-duffel-bag',
      ourCost: '11.85',
      msrp: '30.00',
      imap: '0.00',
      salePrice: '30.00',
      productDisplayOrder: 9999,
      imageUrl: '/rdc/1/product/attributeimages/attribute_3287_3287.jpg',
      moreImages: [
        {
          id: 0,
          attributeOptionID: 1957,
          attributeOptionName: 'Black',
          imageUrl: '/rdc/1/product/attributeimages/attribute_3287_3287.jpg',
          displayOrder: 1,
          altTag: 'Nike Brasilia Extra Small Training Duffel Bag Black',
        },
      ],
    },
  ];
  const products: _FeaturedProduct[][] = [product, product];

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
            <ul className="w-full flex justify-center max-w-4xl mx-auto flex-wrap">
              {['', '', '', ''].map((brand, index) => (
                <li
                  className="mr-0.5 md:mr-0 font-semibold"
                  onClick={() => setBrandIndex(index)}
                >
                  <a>Patagonia</a>
                </li>
              ))}
            </ul>
            <div className="text-center mx-auto pt-10">
              <div className="panel-01 tab-content overflow-hidden">
                <div className="flex flex-wrap sm:-mx-3 gap-y-6">
                  {products?.map((prod, index) => {
                    if (index === brandIndex) {
                      return prod?.map((product, productIndex) => {
                        return (
                          <div className="w-full lg:w-1/4 sm:w-1/2 sm:px-3">
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
                                      {product.moreImages.map((image) => (
                                        <li
                                          key={image.id}
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
                                      ))}
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
