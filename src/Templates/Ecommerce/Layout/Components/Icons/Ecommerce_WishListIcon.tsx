import { __Cookie } from '@constants/global.constant';
import { WishlistType } from '@type/wishlist.type';
import { paths } from 'constants/paths.constant';
import { extractCookies } from 'helpers/common.helper';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import React, { useEffect, useState } from 'react';

const WishListIcon: React.FC = () => {
  const router = useRouter();
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const [wishlist, setWishlist] = useState<WishlistType>([]);
  const customerId = useTypedSelector((state) => state.user.id);
  const wishListData = useTypedSelector((state) => state.wishlist.wishListData);
  useEffect(() => {
    const tempCustomerId = extractCookies(
      __Cookie.tempCustomerId,
      'browserCookie',
    ).tempCustomerId;

    if (customerId || tempCustomerId) {
      setWishlist(wishListData);
    }
  }, [customerId, wishListData]);

  if (storeLayout === _Store.type3) {
    return (
      <div className='flow-root'>
        <Link
          href={paths.WISHLIST}
          className='text-gray-600 hover:text-primary group flex items-center gap-1 relative pr-2'
        >
          <>
            {' '}
            <span className='hidden'>Wishlist</span>
            <svg
              className='h-6 w-6 '
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 0 24 24'
              width='24px'
              fill='currentColor'
            >
              <path d='M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z' />
            </svg>
            <i className='fa-solid fa-shuffle text-xl'></i>
            <span className='absolute right-0 -top-2 w-4 h-4 rounded-full flex items-center justify-center bg-gray-200 text-[9px] font-medium text-gray-500'>
              {wishlist.length}
            </span>
          </>
        </Link>
      </div>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <div className='flow-root'>
        <button
          className='text-gray-600 hover:text-primary group flex items-center gap-1 relative pr-2'
          onClick={() => router.push(paths.WISHLIST)}
        >
          <span className='hidden'>Wishlist</span>

          <svg
            className='h-6 w-6 '
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            fill='currentColor'
          >
            <path d='M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z' />
          </svg>

          <span className='absolute right-0 -top-2 w-4 h-4 rounded-full flex items-center justify-center bg-gray-200 text-[9px] font-medium text-gray-500'>
            {wishlist.length}
          </span>
        </button>
      </div>
    );
  }
  if (
    storeLayout === _Store.type1 ||
    storeLayout === _Store.type15 ||
    storeLayout === _Store.type16
  ) {
    return (
      <div className='flex !ml-2'>
        <Link href={paths.WISHLIST}>
          <a className='relative  hover:text-primary' title='Wishlist'>
            <span className='sr-only'>Wishlist</span>{' '}
            <svg
              className='w-6 h-6 fill-[#003a70] hover:fill-gray-500'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M12 21 10.55 19.7Q6.625 16.2 4.312 13.612Q2 11.025 2 8.15Q2 5.8 3.575 4.225Q5.15 2.65 7.5 2.65Q8.825 2.65 10 3.212Q11.175 3.775 12 4.75Q12.825 3.775 14 3.212Q15.175 2.65 16.5 2.65Q18.85 2.65 20.425 4.225Q22 5.8 22 8.15Q22 11.025 19.688 13.612Q17.375 16.2 13.45 19.7ZM12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475Q12 11.475 12 11.475ZM12 18.3Q15.575 15.05 17.788 12.7Q20 10.35 20 8.15Q20 6.65 19 5.65Q18 4.65 16.5 4.65Q15.325 4.65 14.325 5.312Q13.325 5.975 12.95 7H11.05Q10.675 5.975 9.675 5.312Q8.675 4.65 7.5 4.65Q6 4.65 5 5.65Q4 6.65 4 8.15Q4 10.35 6.213 12.7Q8.425 15.05 12 18.3Z'></path>
            </svg>{' '}
            <span className='absolute -right-2 -top-2 w-4 h-4 rounded-full flex items-center justify-center bg-gray-200 text-xs font-medium text-gray-500'>
              {wishlist.length}
            </span>
          </a>
        </Link>
      </div>
    );
  }
  return <></>;
};

export default WishListIcon;
