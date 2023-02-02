import { paths } from '@constants/paths.constant';
import { _GiftCard } from '@services/gift.service.type';
import Image from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import Link from 'next/link';
import React from 'react';

interface _props {
  giftCards: _GiftCard[];
  storeCode: null | string;
}

const Corporate_GiftCardsList: React.FC<_props> = ({ giftCards }) => {
  return (
    <ul
      role='list'
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8'
    >
      {giftCards.map((item, index) => {
        return (
          <li key={index} className='text-center'>
            <div className=''>
              <div className='flex text-center lg:w-auto'>
                <div className='relative border border-transparent  hover:border-gray-200 pb-4 hover:shadow-lg w-full'>
                  <div className='w-full text-center'>
                    <Link
                      href={`${paths.GIFT_CARDS}/${item.seName}`}
                      className='relative'
                    >
                      <a>
                        <Image
                          src={item.imageName}
                          alt=''
                          className='max-h-full inline-block'
                        />
                      </a>
                    </Link>
                  </div>
                  <div className='mt-6'>
                    <div className='mt-1 text-anchor hover:text-anchor-hover'>
                      <Link
                        href={`${paths.GIFT_CARDS}/${item.seName}`}
                        className='relative underline'
                      >
                        <a>
                          <span className='absolute inset-0'></span> {item.name}
                        </a>
                      </Link>
                    </div>
                    <div className='mt-3 text-black text-base tracking-wider'>
                      <span className='font-semibold'>
                        <Price value={item.salePrice} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Corporate_GiftCardsList;
