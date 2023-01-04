import { paths } from '@constants/paths.constant';
import Image from 'appComponents/reUsable/Image';
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

const Corporate_MyCartDropDown: React.FC<_MyCartDropDown_Props> = ({
  onMouseLeave: mouseLeaveHandler,
  onMouseOver: mouseOverHandler,
}) => {
  const router = useRouter();
  const { order, products } = useTypedSelector(
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
      className="absolute top-full right-0 w-80 text-sm shadow"
      // x-ref="panel" @mouseover="open = true"
    >
      {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
      <div className="absolute inset-0 top-1/2 bg-white shadow"></div>
      <div className="relative bg-gray-100 z-50">
        <div className="border-t first:border-t-0 border-gray-300 py-3 px-3">
          <ul className="">
            {products.map((item, index) => {
              return (
                <li
                  key={index}
                  className="border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0"
                >
                  <div className="flex flex-wrap -mx-1">
                    <div
                      className="w-1/4 px-1"
                      onClick={() => router.push(item.seName)}
                    >
                      <Image
                        src={item.colorImageURL}
                        alt={item.productName}
                        className=""
                      />
                    </div>
                    <div className="w-3/4 px-1">
                      <div className="">
                        <Link href={item.seName} className="inline-block">
                          {item.productName}
                        </Link>
                      </div>
                      <div className="flex flex-wrap justify-between -mx-1 mt-2 text-xs">
                        <div className="px-1">
                          QTY : <span>{item.productTotalQty}</span>
                        </div>
                        <div className="px-1">
                          Subtotal :{' '}
                          <span>
                            <Price value={item.productTotalPrice} />
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
        <div className="border-t first:border-t-0 border-gray-300 py-3 px-3">
          <div className="mb-3 font-semibold text-right">
            <div className="">{products.length} ITEMS IN CART</div>
            <div className="">
              Total <Price value={order.subTotal} />
            </div>
          </div>
          <div className="">
            <Link
              href={paths.CART}
              className="btn btn-primary w-full text-center"
            >
              CHECKOUT NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Corporate_MyCartIcon: React.FC = () => {
  const router = useRouter();
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const { products } = useTypedSelector(
    (state) => state.cart.corporateStoreCart,
  );

  const cartBtnHandler = () => {
    if (products.length === 0) return;
    router.push(paths.CART);
  };

  if (storeLayout === _Store.type5) {
    return (
      <span
        className="flow-root relative "
        onClick={() => cartBtnHandler()}
        onMouseOver={() => setShowDropDown(true)}
        onMouseLeave={() => setShowDropDown(false)}
      >
        <button className="text-white group flex items-center gap-1 relative pr-2">
          <span className=" ">My Cart</span>
          <svg
            className="flex-shrink-0 h-6 w-6 text-white group-hover:text-secondary-hover hidden"
            x-description="Heroicon name: outline/shopping-cart"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <span className="">({products.length})</span>
        </button>

        {products.length > 0 && showDropDown && (
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
