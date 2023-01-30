import React, { useState } from 'react';


const Corporate_MyCartDropDown: React.FC = () => {
  return (
    <div className="relative bg-gray-100 z-50">
      <div className="border-t first:border-t-0 border-gray-300 py-3 px-3">
      <ul className="">
          <li className="border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0">
            <div className="flex flex-wrap -mx-1">
              <div className="w-1/4 px-1">
                <img src="../images/1040623_25528_STH.jpg" alt="" />
              </div>
              <div className="w-3/4 px-1">
                <div className="">
                  <a className="inline-block" href="product-page.html">
                    Patagonia Men's Better Sweater Jacket
                  </a>
                </div>
                <div className="flex flex-wrap justify-between -mx-1 mt-2 text-xs">
                  <div className="px-1">
                    QTY : <span>10</span>
                  </div>
                  <div className="px-1">
                    Subtotal : <span>$600.00</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0">
            <div className="flex flex-wrap -mx-1">
              <div className="w-1/4 px-1">
                <img src="../images/1040623_25528_STH.jpg" alt="" />
              </div>
              <div className="w-3/4 px-1">
                <div className="">
                  <a className="inline-block" href="product-page.html">
                    The North Face Men's ThermoBall Trekker Vest
                  </a>
                </div>
                <div className="flex flex-wrap justify-between -mx-1 mt-2 text-xs">
                  <div className="px-1">
                    QTY : <span>10</span>
                  </div>
                  <div className="px-1">
                    Subtotal : <span>$1,390.00</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="border-t first:border-t-0 border-gray-300 pt-3 first:pt-0 pb-3 last:pb-0">
            <div className="flex flex-wrap -mx-1">
              <div className="w-1/4 px-1">
                <img src="../images/1040623_25528_STH.jpg" alt="" />
              </div>
              <div className="w-3/4 px-1">
                <div className="">
                  <a className="inline-block" href="product-page.html">
                    Patagonia Men's Better Sweater Jacket
                  </a>
                </div>
                <div className="flex flex-wrap justify-between -mx-1 mt-2 text-xs">
                  <div className="px-1">
                    QTY : <span>10</span>
                  </div>
                  <div className="px-1">
                    Subtotal : <span>$600.00</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="border-t first:border-t-0 border-gray-300 py-3 px-3">
        <div className="mb-3 font-semibold text-right">
          <div className="">10 ITEMS IN CART</div>
          <div className="">Total $600.00</div>
        </div>
        <div className="">
          <a href="cart.html" className="btn btn-primary w-full text-center">
            CHECKOUT NOW
          </a>
        </div>
      </div>
    </div>
  );
};

const Corporate_MyCartBtn: React.FC = () => {
  
  return (
    <button className="text-white group flex items-center gap-1 relative pr-2" >
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
      <span className="">(30)</span>
    </button>
  );
};

const Corporate_MyCartIcon: React.FC = () => {
  const [focus , setfocus] = useState(false);
  return (
    <span className="flow-root relative" onMouseEnter={() => setfocus(true)} onMouseLeave={() => setfocus(false)}>
      <div className="cartBtn">
        <Corporate_MyCartBtn />
      </div>
      {
        focus && <div className="absolute top-full right-0 w-80 text-sm shadow z-50">
        <div className="absolute inset-0 top-1/2 bg-white shadow"></div>
        <Corporate_MyCartDropDown />
      </div>
      }
    </span>
  );
};

export default Corporate_MyCartIcon;
