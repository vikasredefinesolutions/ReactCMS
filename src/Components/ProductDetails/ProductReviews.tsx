import { paths } from '@constants/paths.constant';
import ForgotModal from 'appComponents/modals/ForgotModal';
import LoginModal from 'appComponents/modals/LoginModal';
import { _modals, _Reviews } from 'definations/product.type';
import { useTypedSelector } from 'hooks';
import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import React, { useState } from 'react';

interface _Props {
  reviews: _Reviews | null;
}

const ProductReviews: React.FC<_Props> = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState<null | _modals>(null);
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const { id: userId } = useTypedSelector((state) => state.user);
  const { id: productId } = useTypedSelector((state) => state.product.product);

  const modalHandler = (param: null | _modals) => {
    if (param) {
      setOpenModal(param);
      return;
    }
    setOpenModal(null);
  };

  if (storeLayout === _Store.type4) {
    return (
      <section className="">
        <div className="container mx-auto pt-10">
          <div className="w-full text-center text-xl md:text-2xl lg:text-sub-title font-sub-title mb-4">
            REVIEW
          </div>
          <div className="text-default-text font-default-text text-center">
            NO REVIEWS ARE AVAILABLE FOR THIS PRODUCT.
          </div>
          <div className="mt-5 p-6 bg-[#f5f5f6]">
            <div className="text-small-title font-small-title text-center mb-5">
              WE WANT TO HEAR FROM YOU
            </div>
            <div className="text-default-text font-default-text text-center mb-6">
              Tell us what you think about this item. It helps us get better at
              what we do, and ultimately provide you with better products
            </div>
            <div className="text-default-text font-default-text text-center">
              <button
                type="submit"
                className="btn btn-lg btn-secondary uppercase"
              >
                Write A Review
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (storeLayout === _Store.type1) {
    return (
      <section className="mainsection mt-10 mb-20">
        <div className="container mx-auto">
          <div className="w-full text-center text-2xl md:text-3xl lg:text-title font-title mb-4">
            REVIEW
          </div>
          <div className="text-default-text font-default-text text-center">
            NO REVIEWS ARE AVAILABLE FOR THIS PRODUCT.
          </div>
          <div className="mt-5 p-6 bg-[#f5f5f6]">
            <div className="text-lg md:text-xl lg:text-small-title font-small-title text-center mb-5">
              WE WANT TO HEAR FROM YOU
            </div>
            <div className="text-default-text font-default-text text-center mb-6">
              Tell us what you think about this item. It helps us get better at
              what we do, and ultimately provide you with better products
            </div>
            <div className="text-default-text font-default-text text-center">
              <button
                type="submit"
                className="btn btn-lg btn-secondary uppercase"
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
