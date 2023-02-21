import Image from 'appComponents/reUsable/Image';
import { paths } from 'constants/paths.constant';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { _Store } from 'page.config';
import React from 'react';

interface _props {
  screen: 'DESKTOP' | 'MOBILE';
  logo: {
    mobile: string;
    desktop: string;
  };
}

const CompanyLogo: React.FC<_props> = ({ screen, logo }) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const { storeName } = useTypedSelector((state) => state.store);

  if (
    storeLayout === _Store.type1 ||
    storeLayout === _Store.type15 ||
    storeLayout === _Store.type16
  ) {
    if (screen === 'DESKTOP') {
      return (
        <div className='lg:flex lg:items-center max-w-[350px] w-full relative'>
          <Link href={paths.HOME}>
            <a title={storeName || storeLayout} className='w-full'>
              <Image
                className='brand-logo w-full'
                src={logo?.desktop}
                alt={storeName ? storeName : ''}
              />
            </a>
          </Link>
        </div>
      );
    }
    if (screen === 'MOBILE') {
      return (
        <div className='lg:flex lg:items-center max-w-[350px] w-full relative mr-5'>
          <Link href={paths.HOME} className='xl:hidden'>
            <a title={storeName || storeLayout} className='w-full '>
              <Image
                src={logo?.mobile}
                alt={storeLayout}
                className='brand-logo w-full'
              />
            </a>
          </Link>
        </div>
      );
    }
  }

  if (storeLayout === _Store.type2) {
    if (screen === 'DESKTOP') {
      return (
        <div
          className='lg:flex lg:items-center'
          style={{ maxWidth: '240px', width: '100%', position: 'relative' }}
        >
          <Link href={paths.HOME}>
            <Image
              className='max-h-14 w-auto brand-logo'
              src={logo?.desktop}
              alt={storeName ? storeName : ''}
            />
          </Link>
        </div>
      );
    }
    if (screen === 'MOBILE') {
      return (
        <Link href={paths.HOME}>
          <Image src={logo?.mobile} alt={storeLayout} className='h-6 w-auto' />
        </Link>
      );
    }
  }

  if (storeLayout === _Store.type3) {
    if (screen === 'DESKTOP') {
      return (
        <div
          className='lg:flex lg:items-center'
          style={{ maxWidth: '240px', width: '100%', position: 'relative' }}
        >
          <Link href={paths.HOME}>
            <Image
              className='max-h-20 w-auto brand-logo'
              src={logo?.desktop}
              alt={storeName ? storeName : ''}
            />
          </Link>
        </div>
      );
    }

    if (screen === 'MOBILE') {
      return (
        <Link href={paths.HOME}>
          <Image src={logo?.mobile} alt={storeLayout} className='h-6 w-auto' />
        </Link>
      );
    }
  }

  if (storeLayout === _Store.type4) {
    if (screen === 'DESKTOP') {
      return (
        <div
          className='lg:flex lg:items-center'
          style={{ maxWidth: '240px', width: '100%', position: 'relative' }}
        >
          <Link href={paths.HOME}>
            <>
              <span className='sr-only'>Workflow</span>
              <Image
                className='h-16 w-auto brand-logo'
                src={logo?.desktop}
                alt={storeName ? storeName : ''}
              />
            </>
          </Link>
        </div>
      );
    }
    if (screen === 'MOBILE') {
      return (
        <Link href={paths.HOME}>
          <Image src={logo?.mobile} alt={storeLayout} className='h-8 w-auto' />
        </Link>
      );
    }
  }

  return <></>;
};

export default CompanyLogo;
