import { ProductReviewCounts } from '@type/APIs/review.res';
import React from 'react';

const ProductReviewRating: React.FC<{
  storeCode: string;
  reviewsCount?: ProductReviewCounts;
}> = ({ storeCode, reviewsCount }) => {
  const reviewRatingarray = [
    reviewsCount?.fiveStarRatingCount,
    reviewsCount?.fourStarRatingCount,
    reviewsCount?.threeStarRatingCount,
    reviewsCount?.twoStarRatingCount,
    reviewsCount?.oneStarRatingCount,
  ];
  return (
    <>
      {' '}
      <div className='lg:col-span-4'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
          Customer Reviews
        </h2>
        <div className='mt-3 flex items-center'>
          <div>
            <div className='flex items-center justify-end'>
              {Array(5)
                .fill('')
                .map((_, index) => {
                  return (
                    <svg
                      key={index}
                      className={`h-5 w-5 flex-shrink-0 text-${
                        reviewsCount?.ratingAverage &&
                        index < reviewsCount?.ratingAverage
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
              {reviewsCount?.ratingAverage} out of 5 stars
            </p>
          </div>
          <p className='ml-2 text-sm text-gray-900'>
            Based on {reviewsCount?.totalRatingCount} reviews
          </p>
        </div>
        <div className='mt-6'>
          {/* <h3 className='sr-only'>Review data</h3> */}
          <dl className='space-y-3'>
            {reviewRatingarray.map((value, index) => {
              return (
                <div className='flex items-center text-sm' key={index}>
                  <dt className='flex flex-1 items-center'>
                    <p className='w-3 font-medium text-gray-900'>
                      {5 - index}
                      <span className='sr-only'> star reviews</span>
                    </p>
                    <div
                      aria-hidden='true'
                      className='ml-1 flex flex-1 items-center'
                    >
                      <svg
                        className='flex-shrink-0 h-5 w-5 text-yellow-400'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <div className='relative ml-3 flex-1'>
                        <div className='h-3 rounded-full border border-gray-200 bg-gray-100'></div>
                        <div
                          style={{
                            width: ` ${
                              reviewsCount?.totalRatingCount &&
                              value &&
                              `calc(${
                                (value / reviewsCount?.totalRatingCount) * 100
                              }%)`
                            }
                              `,
                          }}
                          className={`absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400 `}
                        ></div>
                      </div>
                    </div>
                  </dt>
                  <dd className='ml-3 w-10 text-right text-sm tabular-nums text-gray-900'>
                    {reviewsCount?.totalRatingCount &&
                      value &&
                      (value / reviewsCount?.totalRatingCount) * 100}
                    %
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
        <div className='mt-10'>
          <h3 className='text-lg font-medium text-gray-900'>
            Share your thoughts
          </h3>
          <p className='mt-1 text-sm text-gray-600'>
            If you’ve used this product, share your thoughts with other
            customers
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductReviewRating;
