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

  if (storeLayout === _Store.type6) {
    if (screen === 'DESKTOP') {
      return (
        <div
          className='lg:flex lg:items-center after:absolute after:w-full after:h-1 after:left-0 after:bottom-[-11px] after:bg-secondary'
          style={{ maxWidth: '165px', width: '100%', position: 'relative' }}
        >
          <Link href={paths.HOME}>
            <Image
              className='max-h-20 w-auto brand-logo'
              src={logo?.desktop}
              alt='Bacardi'
            />
          </Link>
        </div>
      );
    }
    if (screen === 'MOBILE') {
      return (
        <Link href={paths.HOME}>
          <Image src={logo?.mobile} alt='' className='h-6 w-auto' />
        </Link>
      );
    }
  }

  return <></>;
};

export default CompanyLogo;
