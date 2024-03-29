import { paths } from 'constants/paths.constant';
import { useTypedSelector } from 'hooks';
import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import React from 'react';

const ProductRequestConsultation: React.FC<{ storeCode: string }> = ({
  storeCode,
}) => {
  const router = useRouter();

  const { productId, color } = useTypedSelector(
    (state) => state.product.selected,
  );

  if (
    storeCode === _Store.type1 ||
    storeCode === _Store.type15 ||
    storeCode === _Store.type16
  ) {
    const params = {
      productId: productId,
      color: color.name,
    };

    const consultationURL = `${paths.REQUEST_CONSULTATION}?productid=${params.productId}&title=Request%20Consultation%20%26%20Proof&Color=${params.color}`;

    return (
      <div className='w-full md:w-1/3 mt-2.5 md:text-right text-sm font-semibold text-anchor'>
        <div className='inline-flex items-center'>
          <button
            onClick={() => router.push(consultationURL)}
            className='text-anchor hover:text-anchor-hover underline text-[15px] font-semibold'
          >
            Request Consultation & Proof{' '}
          </button>
          <span className='material-icons-outlined leading-none text-xl font-semibold'>
            chevron_right
          </span>
        </div>
      </div>
    );
  }

  return <></>;
};

export default ProductRequestConsultation;
