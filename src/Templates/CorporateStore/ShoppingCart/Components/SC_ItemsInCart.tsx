import { paths } from '@constants/paths.constant';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import React from 'react';
import SC_GiftCartItem from './SC_GiftCartItem';
import { SC_ProductCartItem_withoutPersonalization } from './SC_ProductCartItem';

// NO NEED TO CALL THIS COMPONENT IN CORPORATE STORES

export const SC_ItemsInCart_withoutPersonalization: React.FC = () => {
  const CartItems = useTypedSelector(
    (state) => state.cart.corporateStoreCart.items,
  );

  return (
    <section
      aria-labelledby='cart-heading'
      className='w-full lg:w-9/12 px-3 mt-3'
    >
      <div className='flex justify-between items-center bg-gray-200 w-full px-4 py-2'>
        <div className='text-2xl mr-3'>Shopping Cart</div>
        <div className='text-base'>
          {CartItems?.length} Item(s)<span className='hidden-xs'> in cart</span>
        </div>
      </div>
      <h2 id='cart-heading' className='sr-only'>
        Items in your shopping cart
      </h2>
      <ul role='list' className=' overflow-hidden'>
        {CartItems?.map((item, index) => {
          if (item.type === 'giftCard') {
            return <SC_GiftCartItem key={index} {...item} />;
          }

          if (item.type === 'product') {
            return (
              <SC_ProductCartItem_withoutPersonalization
                key={index}
                {...item}
              />
            );
          }

          return <></>;
        })}
      </ul>
      <button className='my-2 btn btn-primary text-white'>
        <Link href={paths.cart.keepShopping}>
          <p className='text-white'> CONTINUE SHOPPING</p>
        </Link>
      </button>
    </section>
  );
};
