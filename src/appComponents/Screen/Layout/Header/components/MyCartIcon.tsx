import { paths } from 'constants/paths.constant';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import React from 'react';

const MyCartIcon: React.FC = () => {
  const router = useRouter();
  const storeLayout = useTypedSelector((state) => state.store.layout);
  if (storeLayout === _Store.type2) {
    return (
      <div className="flow-root">
        <button
          className="text-gray-600 hover:text-primary group flex items-center gap-1 relative pr-2"
          onClick={() => router.push(paths.CART)}
        >
          <span className="hidden">my cart</span>
          <svg
            className="h-6 w-6 text-gray-600 group-hover:text-primary"
            x-description="Heroicon name: outline/shopping-cart"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <span className="absolute right-0 -top-2 w-4 h-4 rounded-full flex items-center justify-center bg-gray-200 text-[9px] font-medium text-gray-500">
            0
          </span>
        </button>
      </div>
    );
  }
  if (storeLayout === _Store.type1) {
    return (
      <div className="flow-root">
        <Link
          href={paths.CART}
          className="text-primary hover:text-gray-500 group flex items-center gap-1 relative pr-2"
        >
          <>
            <span className="sr-only">my cart</span>
            <svg
              className="flex-shrink-0 h-6 w-6 text-primary group-hover:text-gray-500"
              x-description="Heroicon name: outline/shopping-cart"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            <span className="absolute w-4 h-4 rounded-full flex items-center justify-center bg-gray-200 text-xs font-medium text-gray-500">
              0
            </span>
          </>
        </Link>
      </div>
    );
  }

  if (storeLayout === _Store.type3) {
    return (
      <div className="flow-root">
        <Link
          href={paths.CART}
          className="text-gray-600 hover:text-primary group flex items-center gap-1 relative pr-2"
        >
          <>
            <span className="hidden">my cart</span>
            <svg
              className="h-6 w-6 text-gray-600 group-hover:text-primary"
              x-description="Heroicon name: outline/shopping-cart"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            <span className="absolute right-0 -top-2 w-4 h-4 rounded-full flex items-center justify-center bg-gray-200 text-[9px] font-medium text-gray-500">
              0
            </span>
          </>
        </Link>
      </div>
    );
  }

  if (storeLayout === _Store.type4) {
    return (
      <div className="flow-root">
        <Link
          href={paths.CART}
          className="lg:mx-2 py-2 text-white hover:text-white flex items-center gap-1"
        >
          <>
            <span className="lg:hidden material-icons-outlined">
              shopping_cart
            </span>
            <span className="hidden lg:inline-block">My Cart</span>
          </>
        </Link>
      </div>
    );
  }
  return <></>;
};

export default MyCartIcon;
