import { _CI_ShoppingCartLogoPersonViewModel } from '@type/APIs/cart.res';
import Image from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import React from 'react';

const SC_LogoDetails: React.FC<_CI_ShoppingCartLogoPersonViewModel> = (
  logo,
) => {
  return (
    <div className="p-3 border border-gray-300">
      <div className="flex flex-wrap items-center gap-2">
        <div className="">Location</div>
        <div className="font-semibold">{logo.logoLocation}</div>
      </div>
      <div className="w-24 h-24">
        <Image src={logo.logoPositionImage} alt="" className="max-h-full" />
      </div>
      <div className="flex flex-wrap justify-between gap-y-2 mt-4">
        <div className="w-full lg:w-1/2">
          <div className="mb-1">Logo #PGLOGOLATER</div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="">LOGO 1 :</div>
            <div className="w-20 h-20">
              <Image src={logo.logoImagePath} className="" alt="" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mb-1">Price</div>
          <div className="font-semibold">
            <div className="">
              <Price value={logo.logoPrice} />
            </div>
            <div className="">First Logo Free</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SC_LogoDetails;
