import { FetchProductReviewDetails } from '@services/review.service';
import { ProductReviewDetailsRes } from '@type/APIs/review.res';
import Image from 'appComponents/reUsable/Image';
import React, { useEffect, useState } from 'react';

const ProductReviewDetails: React.FC<{
  storeCode: string;
  productId: number | null;
}> = ({ storeCode, productId }) => {
  const [reviewsDeatils, setReviewsdetails] =
    useState<ProductReviewDetailsRes[]>();
  useEffect(() => {
    if (productId) {
      FetchProductReviewDetails(productId).then((details) =>
        setReviewsdetails(details),
      );
    }
  }, [productId]);
  return (
    <>
      {' '}
      <div className='mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0'>
        <h3 className='sr-only'>Recent reviews</h3>
        <div className='flow-root'>
          <div className='-my-8 divide-y divide-gray-200'>
            {reviewsDeatils?.map((reviewsDeatil, index) => {
              return (
                <div className='py-8' key={index}>
                  <div className='flex items-center'>
                    <div className=''>
                      <h4 className='text-sm font-bold text-gray-900 uppercase'>
                        {reviewsDeatil.name}
                      </h4>
                      <div className='mt-1 flex items-center'>
                        {Array(5)
                          .fill('')
                          .map((_, index) => {
                            return (
                              <svg
                                key={index}
                                className={`h-5 w-5 flex-shrink-0 text-${
                                  reviewsDeatil?.rating &&
                                  index < reviewsDeatil?.rating
                                    ? 'yellow-400'
                                    : 'gray-300'
                                }`}
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                              </svg>
                            );
                          })}
                      </div>
                      <p className='sr-only'>
                        {reviewsDeatil.rating} out of 5 stars
                      </p>
                      <div className='flex flex-wrap gap-5 text-sm text-center px-2 available-colors'>
                        {reviewsDeatil.images.map((image) => {
                          return (
                            <>
                              <div className='border-2 border-secondary hover:border-secondary mb-1 last:mb-0'>
                                <Image
                                  src={image.ImageName}
                                  alt=''
                                  className='w-full object-center object-cover'
                                />
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className='mt-4 space-y-6 text-base italic text-gray-600'>
                    <p>{reviewsDeatil.comments}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductReviewDetails;
