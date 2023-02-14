import { paths } from '@constants/paths.constant';
import Price from 'appComponents/reUsable/Price';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import React, { useState } from 'react';

interface _MyCartDropDown_Props {
  onMouseOver: () => void;
  onMouseLeave: () => void;
}

interface _MyCartIcon_Props {
  screen: string;
}

const Corporate_MyCartDropDown: React.FC<_MyCartDropDown_Props> = ({
  onMouseLeave: mouseLeaveHandler,
  onMouseOver: mouseOverHandler,
}) => {
  const router = useRouter();
  const { order, items } = useTypedSelector(
    (state) => state.cart.corporateStoreCart,
  );

  return (
    <div
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
      // x-transition:enter="transition ease-out duration-200"
      // x-transition:enter-start="opacity-0"
      // x-transition:enter-end="opacity-100"
      // x-transition:leave="transition ease-in duration-150"
      // x-transition:leave-start="opacity-100"
      // x-transition:leave-end="opacity-0"
      // x-description="'Men' mega menu, show/hide based on flyout menu state."
      className='absolute top-full right-0 w-80 text-sm shadow'
      // x-ref="panel" @mouseover="open = true"
    >
      {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
      <div className='absolute inset-0 top-1/2 bg-white shadow'></div>
      <div className='relative bg-gray-100 z-50'>
        <div className='border-t first:border-t-0 border-gray-300 py-3 px-3'>
          <ul className=''>
            {items.map((item, index) => {
              return (
                <li
                  key={index}
                  className='border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0'
                >
                  <div className='flex flex-wrap -mx-1'>
                    <div
                      className='w-1/4 px-1'
                      onClick={() => router.push(item.seName)}
                    >
                      {/* Abhishek Fix */}
                      {/* <Image
                        src={item.colorImageURL}
                        alt={item.productName}
                        className=""
                      /> */}
                    </div>
                    <div className='w-3/4 px-1'>
                      <div className=''>
                        <Link href={item.seName} className='inline-block'>
                          {item.name}
                        </Link>
                      </div>
                      <div className='flex flex-wrap justify-between -mx-1 mt-2 text-xs'>
                        <div className='px-1'>
                          QTY : <span>{item.itemTotalQty}</span>
                        </div>
                        <div className='px-1'>
                          Subtotal :{' '}
                          <span>
                            <Price value={item.itemTotalPrice} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='border-t first:border-t-0 border-gray-300 py-3 px-3'>
          <div className='mb-3 font-semibold text-right'>
            <div className=''>{items.length} ITEMS IN CART</div>
            <div className=''>
              Total <Price value={order.subTotal} />
            </div>
          </div>
          <div className=''>
            <Link
              href={paths.CART}
              className='btn btn-primary w-full text-center'
            >
              CHECKOUT NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Corporate_MyCartIcon: React.FC<_MyCartIcon_Props> = ({ screen }) => {
  const router = useRouter();
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const { items } = useTypedSelector((state) => state.cart.corporateStoreCart);

  const cartBtnHandler = () => {
    if (items.length === 0) return;
    router.push(paths.CART);
  };

  if (storeLayout === _Store.type5 || storeLayout === _Store.type6) {
    return (
      <span
        className='flow-root relative '
        onClick={() => cartBtnHandler()}
        onMouseOver={() => setShowDropDown(true)}
        onMouseLeave={() => setShowDropDown(false)}
      >
        <button className='group flex items-center gap-1 relative pr-2 ml-1 text-gray-800 lg:text-white hover:text-gray-800 lg:hover:text-white focus:text-white '>
          <span
            className={`flex w-6 h-6 ${
              screen === 'DESKTOP' ? 'block' : 'hidden'
            }`}
          >
            <svg
              version='1.1'
              id='Layer_1'
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='0 0 290.5 292.1'
            >
              <g>
                <path
                  className='fill-white'
                  d='M196.3,115.9c-5.5,0-10-4.5-10-10V66.6c0-22.3-18.2-40.5-40.5-40.5c-22.3,0-40.5,18.2-40.5,40.5v39.4 c0,5.5-4.5,10-10,10s-10-4.5-10-10V66.6c0-33.3,27.1-60.5,60.5-60.5c33.3,0,60.5,27.1,60.5,60.5v39.4 C206.3,111.4,201.8,115.9,196.3,115.9z'
                />
              </g>
              <g>
                <path
                  className='fill-white'
                  d='M278.9,216.1L265.6,96.5c0-5.2-4.2-9.4-9.4-9.4h-39.6v18.9c0,11-9,20-20,20s-20-9-20-20V87h-60.9v18.9 c0,11-9,20-20,20s-20-9-20-20V87H35.4c-5.2,0-9.4,4.2-9.4,9.4L12.7,216.1H278.9z'
                />
                <path
                  className='fill-white'
                  d='M11.5,226.1l-5.6,50.5c0,5.2,4.2,9.4,9.4,9.4h260.8c5.2,0,9.4-4.2,9.4-9.4l-5.6-50.5H11.5z'
                />
              </g>
            </svg>
          </span>
          <span
            className={screen === 'DESKTOP' ? 'block text-white' : 'hidden'}
          >
            My Cart
          </span>
          <svg
            className={`flex-shrink-0 h-6 w-6 text-gray-800 group-hover:text-secondary-hover block lg:hidden`}
            x-description='Heroicon name: outline/shopping-cart'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='2'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            ></path>
          </svg>

          <span
            className={`absolute inline right-0 -top-2 w-5 h-5 rounded-full flex items-center justify-center bg-white text-[10px] font-medium text-gray-500 lg:hidden`}
          >
            ({items.length})
          </span>
        </button>

        {items.length > 0 && showDropDown && (
          <Corporate_MyCartDropDown
            onMouseOver={() => setShowDropDown(true)}
            onMouseLeave={() => setShowDropDown(false)}
          />
        )}
      </span>
    );
  }
  return <></>;
};

export default Corporate_MyCartIcon;
