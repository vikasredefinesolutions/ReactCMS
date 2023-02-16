import Image from 'appComponents/reUsable/Image';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { _Store } from 'page.config';
import React from 'react';

interface _props {
  url: string;
  alt: string;
  src: string;
}

const BrandImage: React.FC<_props> = ({ url, src, alt }) => {
  const { layout: storeLayout, view } = useTypedSelector(
    (state) => state.store,
  );
  if (
    storeLayout === _Store.type1 ||
    storeLayout === _Store.type15 ||
    storeLayout === _Store.type16
  ) {
    if (view === 'MOBILE') {
      return (
        <div className='flex flex-wrap py-3  w-1/2 relative max-w-[140px]'>
          <div className='w-1/2 lg:w-1/4 text-center'>
            <Link href={`/${url}`} className='block p-2 bg-secondary m-2'>
              <a title={alt}>
                <Image className='h-14 w-auto brand-logo' src={src} alt={alt} />
              </a>
            </Link>
          </div>
        </div>
      );
    }

    if (view === 'DESKTOP') {
      return (
        <div className='lg:w-1/4 text-center w-full relative max-w-[140px]'>
          <Link
            href={`/${url}`}
            className='text-anchor hover:text-anchor-hover'
          >
            <a title={alt}>
              <Image className='h-14 w-auto brand-logo' src={src} alt={alt} />
            </a>
          </Link>
        </div>
      );
    }
  }
  if (storeLayout === _Store.type2) {
    if (view === 'MOBILE') {
      return (
        <div className='flex flex-wrap border-t first:border-t-0 py-3  w-1/2 relative max-w-[140px]'>
          <div className='w-1/2 lg:w-1/4 text-center'>
            <Link href={`/${url}`} className='block p-2 bg-secondary m-2'>
              <a>
                <Image className='h-14 w-auto brand-logo' src={src} alt={alt} />
              </a>
            </Link>
          </div>
        </div>
      );
    }

    if (view === 'DESKTOP') {
      return (
        <div className='w-full lg:w-1/4 text-center relative max-w-[140px] '>
          <Link href={`/${url}`} className='block p-2 bg-secondary m-2'>
            <a>
              <Image className='h-14 w-auto brand-logo' src={src} alt={alt} />
            </a>
          </Link>
        </div>
      );
    }
  }
  if (storeLayout === _Store.type3) {
    if (view === 'MOBILE') {
      return (
        <div className='w-1/2 lg:w-1/4 text-center relative max-w-[140px] '>
          <Link href={`/${url}`} className='block p-2 bg-secondary m-2'>
            <a>
              <Image className='h-14 w-auto brand-logo' src={src} alt={alt} />
            </a>
          </Link>
        </div>
      );
    }
    if (view === 'DESKTOP') {
      return (
        <div className='w-full lg:w-1/3 px-3 text-center relative max-w-[140px] '>
          <Link
            href={`/${url}`}
            className='inline-block P-2 text-anchor hover:text-anchor-hover hover:shadow-md hover:bg-white'
          >
            <a>
              <Image className='h-14 w-auto brand-logo' src={src} alt={alt} />
            </a>
          </Link>
        </div>
      );
    }
  }
  if (storeLayout === _Store.type4) {
    if (view === 'MOBILE') {
      return <></>;
    }
    if (view === 'DESKTOP') {
      return (
        <div className='w-full lg:w-1/2 text-center relative max-w-[140px] '>
          <Link
            href={`/${url}`}
            className='text-anchor hover:text-anchor-hover'
          >
            <a>
              <Image className='h-14 w-auto brand-logo' src={src} alt={alt} />
            </a>
          </Link>
        </div>
      );
    }
  }

  return <></>;
};

export default BrandImage;
