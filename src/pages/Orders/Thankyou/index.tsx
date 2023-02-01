import { paths } from '@constants/paths.constant';
import { FetchOrderDetails } from '@services/user.service';
import {
  _MyAcc_OrderBillingDetails,
  _MyAcc_OrderProductDetails
} from '@type/APIs/user.res';
import { useTypedSelector } from 'hooks';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Redefine_ThankYou from 'Templates/Redefine_ThankYou';

const ThankYou: NextPage = () => {
  const router = useRouter();
  const orderId = router.query.orderNumber;

  const [order, setOrderDetails] = useState<
    | {
      billing: _MyAcc_OrderBillingDetails | null;
      product: _MyAcc_OrderProductDetails[] | null;
    }
    | null
    | 'SOMETHING WENT WRONG'
  >(null);
  const showThankYou = useTypedSelector((state) => state.cart.showThankYou);

  useEffect(() => {

    // if (!showThankYou ) {

    //   router.push(paths.thankYou.notAuthorized);
    //   return;
    // }

    if (orderId && order === null) {
      FetchOrderDetails({ orderId: +orderId })
        .then((details) => setOrderDetails(details))
        .catch(() => setOrderDetails('SOMETHING WENT WRONG'));
      return;
    }

    if (!orderId) {
      router.push(paths.HOME);
    }
  }, []);

  // if (!showThankYou) {
  //   return <></>;
  // }

  if (order === null) {
    return (
      <div id='root'>
        <div className='loader-wrapper'>
          <div className='loader'></div>
        </div>
      </div>
    );
  }


  if (order === 'SOMETHING WENT WRONG') {
    return <>Something went wrong!!!</>;
  }

  return (
    <>
      <Redefine_ThankYou {...order} />
    </>
  );
};

export default ThankYou;
