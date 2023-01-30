import { _MyAcc_OrderProductDetails } from '@type/APIs/user.res';
import Image from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import { __StaticImg } from 'Assets/images.asset';
import { StaticImageData } from 'next/image';
import React from 'react';

const InvoiceItem: React.FC<_MyAcc_OrderProductDetails> = (prod) => {
  return (
    <div
      key={prod.sku}
      className='flex flex-wrap justify-between -mx-3 gap-y-4'
    >
      <div className='px-3'>
        <div className='lg:flex-shrink-0 sm:w-52 sm:h-52 w-full h-auto overflow-hidden rounded-lg text-center'>
          <Image
            src={prod.colorImage}
            alt={`${prod.productName}`}
            className='max-h-full'
          />
        </div>
      </div>
      <div className='w-full lg:w-auto lg:flex-1 sm:mt-0 mt-6 text-sm text-center sm:text-left px-3'>
        <div className='font-bold text-xl'>{prod.productName}</div>
        <div className='mt-1'>
          <span className='font-semibold'>SIZE : </span>{' '}
          {prod.attributeOptionId}
        </div>
        <div className='mt-1'>
          <span className='font-semibold'>COLOR : </span>{' '}
          {prod.attributeOptionValue}
        </div>
        <div className='border-t border-b border-gray-200 my-4 py-4'>
          {prod.shoppingCartItemDetailsViewModels.map((item) => (
            <div
              key={item?.attributeOptionId}
              className='flex flex-wrap justify-between -mx-3'
            >
              <div className='w-1/3 px-3'>
                <div className='font-semibold'>SIZE</div>
                <div className=''>{item.attributeOptionId}</div>
              </div>
              <div className='w-1/3 px-3'>
                <div className='font-semibold'>PRICE</div>
                <div className=''>
                  <Price value={item.price} />
                </div>
              </div>
              <div className='w-1/3 px-3'>
                <div className='font-semibold'>QTY</div>
                <div className=''>{item.qty}</div>
              </div>
            </div>
          ))}
        </div>
        <div className='border-b border-gray-200 my-4 py-4'>
          {prod.shoppingCartLogoPersonViewModels.map((logo) => {
            let logoToShow: string | StaticImageData = logo.logoImagePath;

            if (logo.logoName === 'Add Logo Later') {
              logoToShow = __StaticImg.orderDetails.logoWillComeHere;
            }

            if (logo.logoName === 'Customize Logo') {
              logoToShow = logo.logoPositionImage;
            }

            return (
              <div
                key={logo?.logoImagePath}
                className='flex flex-wrap justify-between -mx-3'
              >
                <div className='w-1/3 px-3'>
                  <div className='font-semibold'>Logo</div>
                  <div className='w-20 h-20 border flex items-center justify-center'>
                    <Image
                      className='inline-block max-h-full w-full h-full'
                      src={logoToShow}
                      alt=''
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className='w-1/3 px-3'>
                  <div className='font-semibold'>Location</div>
                  <div className=''>{logo.logoLocation}</div>
                </div>
                <div className='w-1/3 px-3'>
                  <div className='font-semibold'>Price</div>
                  <div className=''>
                    <Price value={logo.logoPrice} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='flex flex-wrap justify-between -mx-3'>
          <div className='w-1/2 px-3'>
            <div className='font-semibold'>UNIT TOTAL</div>
            <div className=''>
              <Price value={prod.totalPrice} />
            </div>
          </div>
          <div className='w-1/2 px-3'>
            <div className='font-semibold'>ESTIMATED PRICE</div>
            <div className=''>
              <Price value={prod.totalPrice} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceItem;
