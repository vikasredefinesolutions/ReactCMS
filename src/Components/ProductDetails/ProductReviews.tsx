import { paths } from '@constants/paths.constant';
import { FetchProductReview } from '@services/review.service';
import { ProductReviewCounts } from '@type/APIs/review.res';
import ForgotModal from 'appComponents/modals/ForgotModal';
import LoginModal from 'appComponents/modals/LoginModal';
import { _modals, _Reviews } from 'definations/product.type';
import { useTypedSelector } from 'hooks';
import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import React, { useEffect, useState } from 'react';
import ProductReviewDetails from './ProductReviewDetails';
import ProductReviewRating from './ProductReviewRating';

interface _Props {
  reviews: _Reviews | null;
  productId: number;
}

const ProductReviews: React.FC<_Props & { storeCode: string }> = ({
  storeCode,
  productId,
}) => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState<null | _modals>(null);
  const [reviewsCount, setReviewsCount] = useState<ProductReviewCounts>();
  const { id: userId } = useTypedSelector((state) => state.user);

  useEffect(() => {
    if (productId) {
      FetchProductReview(productId).then((count) => setReviewsCount(count));
    }
  }, [productId]);
  const modalHandler = (param: null | _modals) => {
    if (param) {
      setOpenModal(param);
      return;
    }
    setOpenModal(null);
  };

  if (
    storeCode === _Store.type1 ||
    storeCode === _Store.type15 ||
    storeCode === _Store.type16 ||
    storeCode == _Store.type2 ||
    storeCode === _Store.type4
  ) {
    return (
      <section className='mainsection mt-10 mb-20'>
        <div className='container mx-auto'>
          <div className='w-full text-center text-2xl md:text-3xl lg:text-title font-title mb-4'>
            REVIEW
          </div>
          {!reviewsCount?.totalRatingCount ? (
            <div className='text-default-text font-default-text text-center'>
              NO REVIEWS ARE AVAILABLE FOR THIS PRODUCT.
            </div>
          ) : (
            <div className='mt-5'>
              <div className='bg-white'>
                <div className='mx-auto max-w-2xl py-5 px-4 sm:py-5 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-10 lg:px-8'>
                  <ProductReviewRating
                    storeCode={storeCode}
                    reviewsCount={reviewsCount}
                  />
                  <ProductReviewDetails
                    storeCode={storeCode}
                    productId={productId}
                  />
                </div>
              </div>
            </div>
          )}
          <div className='mt-5 p-6 bg-[#f5f5f6]'>
            <div className='text-lg md:text-xl lg:text-small-title font-small-title text-center mb-5'>
              WE WANT TO HEAR FROM YOU
            </div>
            <div className='text-default-text font-default-text text-center mb-6'>
              Tell us what you think about this item. It helps us get better at
              what we do, and ultimately provide you with better products
            </div>
            <div className='text-default-text font-default-text text-center'>
              <button
                type='submit'
                className='btn btn-lg btn-secondary uppercase'
                onClick={() => {
                  if (userId) {
                    router.push(
                      `${paths.WRITE_A_REVIEW}?ProductId=${productId}`,
                    );
                    return;
                  }
                  modalHandler('login');
                }}
              >
                Write A Review
              </button>
            </div>
          </div>
        </div>
        {openModal === 'login' && <LoginModal modalHandler={modalHandler} />}
        {openModal === 'forgot' && <ForgotModal modalHandler={modalHandler} />}
      </section>
    );
  }
  return <></>;
};

export default ProductReviews;
