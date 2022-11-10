import React from 'react';
import Link from 'next/link';
import { paths } from 'constants/paths.constant';
import { _Store } from 'constants/store.constant';
import { useTypedSelector } from 'hooks';

interface _props {
  screen: 'DESKTOP' | 'MOBILE';
}

const CompanyLogo: React.FC<_props> = ({ screen }) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);

  if (storeLayout === _Store.type1) {
    if (screen === 'DESKTOP') {
      return (
        <div className="hidden lg:flex lg:items-center">
          <Link href={paths.HOME}>
            <img
              className="h-16 w-auto"
              src="https://www.corporategear.com/images/logo.svg"
              alt="Corporate Gear"
            />
          </Link>
        </div>
      );
    }
    if (screen === 'MOBILE') {
      return (
        <Link href={paths.HOME} className="xl:hidden">
          <img
            src="https://www.corporategear.com/images/logo.svg"
            alt=""
            className="h-14 w-auto"
          />
        </Link>
      );
    }
  }

  if (storeLayout === _Store.type2) {
    if (screen === 'DESKTOP') {
      return (
        <div className="hidden lg:flex lg:items-center">
          <Link href={paths.HOME}>
            <img
              className="max-h-14 w-auto"
              src="../images/logo.png"
              alt="Corporate Gear"
            />
          </Link>
        </div>
      );
    }
    if (screen === 'MOBILE') {
      return (
        <Link href={paths.HOME} className="lg:hidden">
          <img src="../images/logo.png" alt="" className="h-6 w-auto" />
        </Link>
      );
    }
  }

  if (storeLayout === _Store.type3) {
    if (screen === 'DESKTOP') {
      return (
        <div className="hidden lg:flex lg:items-center">
          <Link href={paths.HOME}>
            <img
              className="max-h-20 w-auto"
              src="../images/logo.png"
              alt="Corporate Gear"
            />
          </Link>
        </div>
      );
    }

    if (screen === 'MOBILE') {
      return (
        <Link href={paths.HOME} className="lg:hidden">
          <img src="../images/logo.png" alt="" className="h-6 w-auto" />
        </Link>
      );
    }
  }

  if (storeLayout === _Store.type4) {
    if (screen === 'DESKTOP') {
      return (
        <div className="hidden lg:flex lg:items-center">
          <Link href={paths.HOME}>
            <span className="sr-only">Workflow</span>
            <img
              className="h-16 w-auto"
              src="/images/logo.png"
              alt="Corporate Gear"
            />
          </Link>
        </div>
      );
    }
    if (screen === 'MOBILE') {
      return (
        <Link href={paths.HOME} className="lg:hidden">
          <img src="../images/logo.png" alt="" className="h-8 w-auto" />
        </Link>
      );
    }
  }

  return <></>;
};

export default CompanyLogo;
