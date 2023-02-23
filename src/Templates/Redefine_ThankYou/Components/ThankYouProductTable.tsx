import { CustomizeLater } from '@constants/global.constant';
import { _MyAcc_OrderProductDetails } from '@type/APIs/user.res';
import config from 'api.config';
import Price from 'appComponents/reUsable/Price';
import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React from 'react';

interface _props {
  product: _MyAcc_OrderProductDetails;
}

const ThankYouProductTable: React.FC<_props> = ({ product }) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  return (
    <div className='mt-10 mb-5 w-full'>
      <div className='text-base font-semibold border-b pb-2'>Item Details</div>
      <div className='flex justify-between py-2'>
        <div className='text-base font-semibold w-28'>Size </div>
        <div className='text-base font-semibold w-16 text-center'>Qty</div>
        <div className='text-base font-semibold w-20 text-right'>Price</div>
      </div>

      {product.shoppingCartItemDetailsViewModels.map((prod, index) => (
        <div key={index} className='flex justify-between py-2'>
          <div className='text-base w-28'>{prod.attributeOptionValue} </div>
          <div className='text-base w-16 text-center'>{prod.qty}</div>
          <div className='text-base w-20 text-right'>
            <Price value={prod.price} />
          </div>
        </div>
      ))}

      <div className='flex justify-between py-3 border-t border-b'>
        <div className='text-base w-28'>Product Total: </div>
        <div className='text-base w-16 text-center'>{product.totalQty}</div>
        <div className='text-base w-20 text-right'>
          <Price value={product.totalPrice} />
        </div>
      </div>
      {product.shoppingCartLogoPersonViewModels.map(
        (item: any, index: number) => {
          return item.logoName === 'Customize Later' &&
            storeLayout === _Store.type1 ? (
            <div className='flex justify-start items-center mt-3'>
              <div>
                <span className='material-icons text-[60px] mr-3'>
                  support_agent
                </span>
              </div>
              <div>
                <div className='text-lg font-semibold'>Customize Later</div>
                <div className='text-base'>{CustomizeLater}</div>
              </div>
            </div>
          ) : (
            <div
              key={`${item}-${index}`}
              className='w-full flex justify-between py-3'
            >
              <div className='text-base'>
                <div className='mb-3 flex'>
                  {item.logoImagePath === '' ? (
                    <img
                      className='w-14 h-12'
                      src='/images/logo-to-be-submitted.webp'
                      title=''
                      alt={item.logoImagePath}
                    />
                  ) : (
                    <img
                      className='w-14 h-12'
                      src={`${config.mediaBaseUrl}${item.logoImagePath}`}
                      title=''
                      alt={item.logoImagePath}
                    />
                  )}

                  {item.logoName === 'Add Logo Later' ? (
                    <span className='font-semibold ml-3'>
                      Logo to be
                      <br />
                      submitted
                    </span>
                  ) : (
                    <span className='font-semibold ml-3'>
                      Logo
                      <br />
                      submitted
                    </span>
                  )}
                </div>
                <div>
                  <span className='font-semibold mr-1'>Location:</span>
                  <span>{item.logoLocation}</span>
                </div>
              </div>
              <div className='text-base text-right'>
                <div className='font-semibold'>Logo Price</div>
                <div>
                  {index === 0 && item.logoPrice === 0
                    ? 'First Logo Free'
                    : `$${item.logoPrice}`}
                </div>
              </div>
            </div>
          );
        },
      )}
    </div>
  );
};

export default ThankYouProductTable;
