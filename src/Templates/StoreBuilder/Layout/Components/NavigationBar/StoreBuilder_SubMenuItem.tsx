import React from 'react';

import { useActions } from 'hooks';
import Link from 'next/link';

interface _props {
  itemLabel: string;
  itemUrl: string;
  type: 'BRAND' | 'CATEGORY';
  view: 'DESKTOP' | 'MOBILE';
}

const StoreBuilder_SubMenuItem: React.FC<_props> = ({
  type,
  itemLabel,
  itemUrl,
  view,
}) => {
  const { toggleSideMenu } = useActions();

  if (type === 'BRAND') {
    if (view === 'MOBILE') {
      return (
        <li
          className='w-full flex items-center'
          onClick={() => toggleSideMenu('CLOSE')}
        >
          <span className='material-icons-outlined text-lg'>chevron_right</span>
          <Link
            href={`/${itemUrl}`}
            className='text-anchor hover:text-anchor-hover'
          >
            {itemLabel}
          </Link>
        </li>
      );
    }
    if (view === 'DESKTOP') {
      return (
        <li className='flex items-center'>
          <span className='material-icons-outlined text-lg'>chevron_right</span>
          <Link
            href={`/${itemUrl}`}
            className='text-anchor hover:text-anchor-hover'
          >
            {itemLabel}
          </Link>
        </li>
      );
    }
  }

  if (type === 'CATEGORY') {
    if (view === 'MOBILE') {
      return (
        <li
          className='w-full lg:w-1/2 flex items-center'
          onClick={() => toggleSideMenu('CLOSE')}
        >
          <span className='material-icons-outlined text-lg'>chevron_right</span>
          <Link
            href={`/${itemUrl}`}
            className='text-anchor hover:text-anchor-hover'
          >
            {itemLabel}
          </Link>
        </li>
      );
    }

    if (view === 'DESKTOP') {
      return (
        <li className='w-full lg:w-1/2 flex items-center'>
          <span className='material-icons-outlined text-lg'>chevron_right</span>
          <Link
            href={`/${itemUrl}`}
            className='text-anchor hover:text-anchor-hover'
          >
            {itemLabel}
          </Link>
        </li>
      );
    }
  }

  return <></>;
};

export default StoreBuilder_SubMenuItem;
