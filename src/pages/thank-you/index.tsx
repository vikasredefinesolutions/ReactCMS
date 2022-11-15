import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { _ThankYouOrder } from '../../definations/thankYou.type';
import thankYouMock from '../../mock/thankYou.mock';
import { FetchPlacedOrderDetails } from 'services/thankYou.service';
import ThankYouAccordion from 'Components/ThankYou/ThankYouAccordion';
import ThankYouHeader from 'Components/ThankYou/ThankYouHeader';

const ThankYou: NextPage = () => {
  const [order] = useState<_ThankYouOrder | null>(thankYouMock);

  useEffect(() => {
    FetchPlacedOrderDetails();
    // .then((res) => setReviews(res))
    // .catch((err) => console.log('err', err))
    // .finally(() => console.log('close loader'));
  }, []);

  if (order === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ThankYouHeader order={order} contactNo={order.contactNo} />
      <section id="">
        <div className="bg-white">
          <div className="container mx-auto">
            <ThankYouAccordion order={order} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
