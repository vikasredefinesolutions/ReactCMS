import Image from 'appComponents/reUsable/Image';
import Link from 'next/link';
import React from 'react';

interface _props {
  url: string;
  alt: string;
  src: string;
  view: 'DESKTOP' | 'MOBILE';
}

const StoreBuilder_BrandImage: React.FC<_props> = ({ url, src, alt, view }) => {
  if (view === 'MOBILE') {
    return (
      <div className='flex flex-wrap border-t first:border-t-0 py-3'>
        <div className='w-1/2 lg:w-1/4 text-center'>
          <Link href={`/${url}`} className='block p-2 bg-secondary m-2'>
            <a>
              <Image className='inline-block' src={src} alt={alt} />
            </a>
          </Link>
        </div>
      </div>
    );
  }

  if (view === 'DESKTOP') {
    return (
      <div className='w-full lg:w-1/4 text-center'>
        <Link href={`/${url}`} className='text-anchor hover:text-anchor-hover'>
          <a>
            <Image className='inline-block' src={src} alt={alt} />
          </a>
        </Link>
      </div>
    );
  }

  return <></>;
};

export default StoreBuilder_BrandImage;
