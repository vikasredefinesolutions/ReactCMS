import ThankYouAccordion from 'Components/ThankYou/ThankYouAccordion';
import ThankYouHeader from 'Components/ThankYou/ThankYouHeader';
import { _ThankYouOrder } from 'definations/thankYou.type';
import thankYouMock from 'mock/thankYou.mock';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { FetchPlacedOrderDetails } from 'services/thankYou.service';

const ThankYou: NextPage = () => {
  const [order] = useState<_ThankYouOrder | null>(thankYouMock);

  useEffect(() => {
    FetchPlacedOrderDetails();
    // .then((res) => setReviews(res))
    // .catch((err) => console.log('err', err))
    // .finally(() => console.log('close loader'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
