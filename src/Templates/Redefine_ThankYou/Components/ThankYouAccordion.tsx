import {
  _MyAcc_OrderBillingDetails,
  _MyAcc_OrderProductDetails,
} from '@type/APIs/user.res';
import React, { Fragment } from 'react';
import ThankYouProduct from './ThankYouProduct';
import ThankYouSubTotal from './ThankYouSubTotal';

interface _props {
  order: {
    billing: _MyAcc_OrderBillingDetails | null;
    product: _MyAcc_OrderProductDetails[] | null;
  };
}

const ThankYouAccordion: React.FC<_props> = ({ order }) => {
  return (
    <div className='accordion w-full mb-7' id='accordionExample'>
      <div className='accordion-item !rounded-none bg-white border border-gray-300'>
        <h2 className='accordion-header mb-0' id='headingOne'>
          <div className='accordion relative flex items-center w-full py-4 px-5 !text-primary text-left bg-white border-0 rounded-none transition focus:outline-none text-2xl '>
            Detailed Order Reciept :{order.billing?.id}
          </div>
        </h2>
        <div
          id='collapseOne'
          className='accordion-collapse show'
          aria-labelledby='headingOne'
        >
          <div className='accordion-body py-4 px-4'>
            <ul
              role='list'
              className='border-b border-gray-900 divide-y divide-gray-300'
            >
              {order.product?.map((prod, index) => (
                <Fragment key={index}>
                  <ThankYouProduct product={prod} />
                </Fragment>
              ))}
            </ul>
            <ThankYouSubTotal billing={order.billing} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouAccordion;
