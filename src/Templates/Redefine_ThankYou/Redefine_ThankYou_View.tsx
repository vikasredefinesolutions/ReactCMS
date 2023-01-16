import {
  _MyAcc_OrderBillingDetails,
  _MyAcc_OrderProductDetails,
} from '@type/APIs/user.res';
import React from 'react';

import ThankYouAccordion from 'Templates/Redefine_ThankYou/Components/ThankYouAccordion';
import ThankYouHeader from 'Templates/Redefine_ThankYou/Components/ThankYouHeader';

interface _props {
  billing: _MyAcc_OrderBillingDetails | null;
  product: _MyAcc_OrderProductDetails[] | null;
}

const Redefine_ThankYou: React.FC<_props> = (order) => {
  return (
    <>
      <ThankYouHeader order={order} />
      <section id=''>
        <div className='bg-white'>
          <div className='container mx-auto'>
            <ThankYouAccordion order={order} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Redefine_ThankYou;
