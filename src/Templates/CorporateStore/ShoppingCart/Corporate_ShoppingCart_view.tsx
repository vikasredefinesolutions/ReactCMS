import { __Cookie } from '@constants/global.constant';
import { FetchCartDetails } from '@services/cart.service';
import { extractCookies } from 'helpers/common.helper';
import { useActions, useTypedSelector } from 'hooks';
import React, { useEffect } from 'react';
import { SC_CartSummary_withoutPersonalization } from './Components/SC_CartSummary';
import { SC_ItemsInCart_withoutPersonalization } from './Components/SC_ItemsInCart';

const Corporate_ShoppingCart: React.FC = () => {
  // const { fetchCartDetails } = useActions();
  const cartItems = useTypedSelector(
    (state) => state.cart.corporateStoreCart.items,
  );
  const { cart_update_item } = useActions();

  const loggedIn_userId = useTypedSelector((state) => state.user.id);
  const isEmployeeLoggedIn = useTypedSelector(
    (state) => state.employee.loggedIn,
  );
  useEffect(() => {
    let guest_or_loggedInUser_ID: string | null | number = extractCookies(
      __Cookie.tempCustomerId,
      'browserCookie',
    ).tempCustomerId;

    if (guest_or_loggedInUser_ID) {
      guest_or_loggedInUser_ID = +guest_or_loggedInUser_ID;

      if (loggedIn_userId) {
        guest_or_loggedInUser_ID = loggedIn_userId;
      }

      FetchCartDetails({
        customerId: guest_or_loggedInUser_ID,
        isEmployeeLoggedIn,
      }).then((res) => {
        res?.forEach((item) => {
          cart_update_item({
            type: 'add_item',
            data: {
              cartItemId: item.shoppingCartItemsId,
              itemType: 'product',
              seName: item.seName,
              colorImageURL: item.colorImage,
              sku: item.sku,
              productId: +item.productId,
              colorId: +item.attributeOptionId,
              productName: item.productName,
              colorName: item.attributeOptionValue,
              productPrice: item.totalPrice / item.totalQty,
              attributes: item.shoppingCartItemDetailsViewModels.map(
                (product) => {
                  return {
                    id: product.id,
                    size: product.attributeOptionValue,
                    attributeOptionId: product.attributeOptionId,
                    qty: product.qty,
                    price: product.price,
                    priceOfqty: product.price,
                    minQtyRequired: 0, // not getting minRequired
                  };
                },
              ),
            },
          });
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn_userId]);

  if (cartItems.length === 0) {
    return (
      <div className='text-center mt-20'>
        <h1>Your Cart is Empty.</h1>
        <h5> There's nothing in your cart.</h5>
        <h5>Not to worry: we have lots of other great finds.</h5>
      </div>
    );
  }

  // Same in all the Stores.
  return (
    <section id='' className=''>
      <div className='container mx-auto'>
        <div className='bg-white p-2'>
          <form className='flex flex-wrap -mx-3 -mt-3 cart-box'>
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

  // return <></>;
};

export default Corporate_ShoppingCart;
