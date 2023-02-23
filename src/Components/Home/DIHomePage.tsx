import ImageComponent from 'appComponents/reUsable/Image';
import { capitalizeFirstLetter } from 'helpers/common.helper';
import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';
import { FetchBrands } from 'services/brand.service';
interface _props {
  storeId: number;
}

const DIHomePage: React.FC<_props> = ({ storeId }) => {
  useEffect(() => {
    fetchBrandImages();
  }, []);

  const [brandImages, setBrandImages] = useState<
    {
      id: number;
      brandName: string;
      seName: string;
      brandColorImageUrl: string;
      brandCollectionUrl: string | null;
    }[]
  >([]);
  const fetchBrandImages = async () => {
    const brands = await FetchBrands(storeId.toString());
    setBrandImages(brands.data);
  };

  return (
    <section className='container mx-auto pt-20 brand-logo-list white-title'>
      <div>
        <div className='text-center pb-8'>
          <div className='text-2xl md:text-3xl lg:text-title font-title text-color-title mb-2'>
            Our Exclusive Brands You Can Buy Online
          </div>
        </div>
        <div className='brand-image-list'>
          <ul className='flex flex-wrap justify-center'>
            {brandImages.map((brandImage) => {
              return (
                <Fragment key={brandImage.id}>
                  <li className='w-1/2 md:w-1/3 lg:w-1/5'>
                    <Link href={`/${brandImage.seName}`}>
                      <ImageComponent
                        src={brandImage.brandColorImageUrl}
                        className=''
                        alt={capitalizeFirstLetter(brandImage.brandName)}
                        height={200}
                        width={200}
                        useNextImage={false}
                      />
                    </Link>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DIHomePage;
