import { __LocalStorage } from '@constants/global.constant';
import { useTypedSelector } from 'hooks';
import React, { useEffect } from 'react';
import { SC_CartSummary_withoutPersonalization } from './Components/SC_CartSummary';
import { SC_ItemsInCart_withoutPersonalization } from './Components/SC_ItemsInCart';

const Corporate_ShoppingCart: React.FC = () => {
  // const { fetchCartDetails } = useActions();
  const Cart = useTypedSelector(
    (state) => state.cart.corporateStoreCart.products,
  );

  useEffect(() => {
    if (localStorage) {
      const custID = localStorage.getItem(__LocalStorage.tempCustomerId);

      // if (custID && typeof custID === 'string') {
      // const _custID = +custID;
      // fetchCartDetails(48);
      // }
    }
  });

  if (Cart.length === 0) {
    return (
      <div className="text-center mt-20">
        <h1>Your Cart is Empty.</h1>
        <h5> There's nothing in your cart.</h5>
        <h5>Not to worry: we have lots of other great finds.</h5>
      </div>
    );
  }

  // Same in all the Stores.
  return (
    <section id="" className="">
      <div className="container mx-auto">
        <div className="bg-white p-2">
          <form className="flex flex-wrap -mx-3 -mt-3 cart-box">
            <SC_ItemsInCart_withoutPersonalization />
            <SC_CartSummary_withoutPersonalization />
          </form>
        </div>
      </div>
    </section>
  );

  // if (storeLayout === 'in case required personalization') {
  //   return (
  //     <section id="" className="mt-5">
  //       <div className="bg-white">
  //         <div className="container mx-auto">
  //           <form className="flex flex-wrap -mx-3 -mt-3 cart-box">
  //             <SC_CartSummary_withLogo />
  //             <SC_ItemsInCart_withPersonalization />
  //           </form>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }

  return <></>;
};

export default Corporate_ShoppingCart;
