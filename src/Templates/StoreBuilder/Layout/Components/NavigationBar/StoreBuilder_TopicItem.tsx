import React, { useState } from 'react';

import { useActions } from 'hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface _props {
  title: string;
  url: string;
  view: 'MOBILE' | 'DESKTOP';
}

const StoreBuilder_Topic: React.FC<_props> = ({ title, url, view }) => {
  const { toggleSideMenu } = useActions();
  const router = useRouter();

  // ----------------------------------------------------------
  const [focus, setFocus] = useState<boolean>(false);

  if (view === 'MOBILE') {
    return (
      <div className='text-sm border-b border-gray-300'>
        <div className='flex items-center justify-between py-3 px-2 pl-8'>
          <div className=''>
            <button
              onClick={() => {
                toggleSideMenu('CLOSE');
                router.push(`/${url}`);
              }}
            >
              {title}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'DESKTOP') {
    return (
      <Link href={`${url}`} className='flex'>
        <div className=''>
          <button
            onMouseOver={() => setFocus(true)}
            onMouseOut={() => setFocus(false)}
            type='button'
            className={`relative z-10 flex items-center transition-colors ease-out duration-200 font-semibold border-0 border-b-2 py-2 border-transparent text-white hover:text-primary-hover ${
              focus
                ? `border-b-primary text-primary-hover`
                : `border-transparent text-white hover:text-primary-hover`
            }`}
          >
            <span className='uppercase text-primary'>{title}</span>
          </button>
        </div>
      </Link>
    );
  }

  return <></>;
};

export default StoreBuilder_Topic;
