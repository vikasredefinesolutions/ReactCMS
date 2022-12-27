import { FetchOrderDetails } from '@services/user.service';
import {
  _MyAcc_OrderBillingDetails,
  _MyAcc_OrderProductDetails,
} from '@type/APIs/user.res';
import ThankYouAccordion from 'Components/ThankYou/ThankYouAccordion';
import ThankYouHeader from 'Components/ThankYou/ThankYouHeader';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ThankYou: NextPage = () => {
  const { query, push } = useRouter();
  const orderId = query.orderNumber;

  const [showLoader, setShowLoader] = useState(true);
  const [order, setOrderDetails] = useState<{
    billing: _MyAcc_OrderBillingDetails | null;
    product: _MyAcc_OrderProductDetails[] | null;
  } | null>(null);

  useEffect(() => {
    if (orderId && order === null) {
      FetchOrderDetails({ orderId: +orderId })
        .then((details) => setOrderDetails(details))
        .finally(() => setShowLoader(false));
      return;
    }
    if (!orderId) {
      push('/');
    }
  }, []);

  if (order === null && showLoader) {
    return (
      <div id="root">
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      </div>
    );
  }

  if (order === null) {
    return <>Something went wrong, could redirect after 2 secs</>;
  }

  return (
    <>
      <ThankYouHeader order={order} />
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
