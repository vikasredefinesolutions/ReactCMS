import Image from 'appComponents/reUsable/Image';
import { paths } from 'constants/paths.constant';
import Link from 'next/link';
import React from 'react';

interface _props {
  screen: 'DESKTOP' | 'MOBILE';
  logo: {
    mobile: string;
    desktop: string;
  };
}

const StoreBuilder_Logo: React.FC<_props> = ({ screen, logo }) => {
  if (screen === 'DESKTOP') {
    return (
      <div
        className='lg:flex lg:items-center'
        style={{ maxWidth: '240px', width: '100%', position: 'relative' }}
      >
        <Link href={paths.HOME}>
          <a>
            <Image
              className='h-16 w-auto brand-logo'
              src={logo?.desktop}
              alt='Corporate Gear'
            />
          </a>
        </Link>
      </div>
    );
  }
  if (screen === 'MOBILE') {
    return (
      <Link href={paths.HOME} className='xl:hidden'>
        <Image src={logo?.mobile} alt='' className='h-14 w-auto' />
      </Link>
    );
  }

  return <></>;
};

export default StoreBuilder_Logo;
