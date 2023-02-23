import Image from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import { paths } from 'constants/paths.constant';
import CartSummaryController from 'Controllers/cartSummarryController';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const StoreBuilder_MyCartIcon: React.FC = () => {
  const [totalCartQty, setTotalCartQty] = useState(0);
  const cart = useTypedSelector((state) => state.cart);

  const { getTotalProduct, getTotalPrice } = CartSummaryController();
  const { totalPrice } = getTotalPrice();
  const [Focus, setFocus] = useState(false);

  useEffect(() => {
    const totalQty = getTotalProduct();
    setTotalCartQty(totalQty);
  }, [cart]);

  return (
    <div
      onMouseOver={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      className='flow-root relative'
    >
      <Link href={paths.CART}>
        <a className='text-primary hover:text-anchor-hover group flex items-center gap-1 relative py-2 pr-2'>
          {/* <span className="text-sm hidden xl:inline-block">my cart</span>{' '} */}
          <svg
            className='flex-shrink-0 h-6 w-6 text-primary group-hover:text-anchor-hover'
            x-description='Heroicon name: outline/shopping-cart'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            ></path>
          </svg>{' '}
          <span className='absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-gray-200 text-[10px] font-medium text-gray-500'>
            {totalCartQty}
          </span>
        </a>
      </Link>
      {Focus && totalCartQty > 0 && (
        <div className='absolute top-full right-0 w-80 text-sm shadow'>
          <div
            className='absolute inset-0 top-1/2 bg-white shadow'
            aria-hidden='true'
          ></div>
          <div className='relative bg-gray-100 z-50'>
            <div className='border-t first:border-t-0 border-gray-300 py-3 px-3 h-60 overflow-auto'>
              <ul className=''>
                {cart.cart?.map((cartItem) => (
                  <li
                    key={cartItem.attributeOptionId}
                    className='border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0'
                  >
                    <div className='flex flex-wrap -mx-1'>
                      <div className='w-1/4 px-1'>
                        <Image
                          src={cartItem.colorImage}
                          alt='cartItem'
                          className=''
                        />
                      </div>
                      <div className='w-3/4 px-1'>
                        <div className=''>
                          <Link
                            className='inline-block'
                            href='product-page.html'
                          >
                            {cartItem.productName}
                          </Link>
                        </div>
                        <div className='flex flex-wrap justify-between -mx-1 mt-2 text-xs'>
                          <div className='px-1'>
                            QTY : <span>{cartItem.totalQty}</span>
                          </div>
                          <div className='px-1'>
                            Subtotal :{' '}
                            <span>
                              <Price
                                value={cartItem.totalPrice * cartItem.totalQty}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className='border-t first:border-t-0 border-gray-300 py-3 px-3'>
              <div className='mb-3 font-semibold text-right'>
                <div className=''>{totalCartQty} ITEMS IN CART</div>
                <div className=''>
                  Total <Price value={totalPrice} />
                </div>
              </div>
              <div className=''>
                <Link
                  href={'/checkout.html'}
                  className='btn btn-primary w-full text-center'
                >
                  CHECKOUT NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoreBuilder_MyCartIcon;
