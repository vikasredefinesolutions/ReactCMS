import { _modals } from '@type/product.type';
import Price from 'appComponents/reUsable/Price';
import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React, { useState } from 'react';
import AskToLogin from './AskToLogin';
import QtyPriceTable from './PriceTable';
interface _props {
  showMsrpLine: boolean;
  price: {
    msrp: number;
    salePrice: number;
  };
  modalHandler?: (param: null | _modals) => void;
  showLogin?: boolean;
}

const DiscountPricing: React.FC<_props & { storeCode: string }> = ({
  showMsrpLine,
  storeCode,
  price,
  modalHandler,
  showLogin,
}) => {
  const [showMsg, setShowMsg] = useState(false);

  const { minQty } = useTypedSelector((state) => state.product.toCheckout);
  const unitUnits = minQty > 1 ? 'units' : 'unit';
  const showMinQuantity = minQty > 0;

  if (storeCode === _Store.type4) {
    return (
      <div className='mb-5'>
        <div>
          <div className='text-sm text-gray-900 bg-secondary flex flex-wrap justify-between items-center p-2 md:p-0 md:pl-2 mt-5'>
            <span className='text-lg font-semibold text-white'>
              Discount Pricing:
            </span>
            <button
              onClick={() => setShowMsg((show) => !show)}
              className='text-white py-1 md:px-2 flex flex-wrap text-sm font-semibold uppercase items-center'
              data-target='#minimum-order'
              id='aMinOrder'
            >
              <span>MINIMUM ORDER :</span>
              {` ${minQty} ${unitUnits} per color`}
            </button>
          </div>
          <QtyPriceTable storeCode={storeCode} />
          {showMsg && (
            <div className='text-xs p-3 pb-0' id='divMinorder'>
              <p>
                We reserve the right to reject orders that do not meet the
                {minQty}
                piece minimum per style <br /> and color, exceptions may apply
                for men’s and women’s companion styles per color.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (storeCode === _Store.type2) {
    return (
      <div className='mb-5'>
        <div>
          <div className='text-sm text-gray-900 bg-black flex flex-wrap justify-between items-center p-2 md:p-0 md:pl-2 mt-5 mb-5'>
            <span className='text-lg font-semibold text-white'>
              Discount Pricing:
            </span>
            {showMinQuantity ? (
              <button
                onClick={() => setShowMsg((show) => !show)}
                className='text-white py-1 md:px-2 flex flex-wrap text-sm font-semibold uppercase items-center'
                id='aMinOrder'
              >
                <span>MINIMUM ORDER :</span>
                {` ${minQty} ${unitUnits} per color`}
              </button>
            ) : null}
          </div>
          {showMsrpLine && (
            <div className='text-sm text-gray-900 flex flex-wrap justify-between items-center mt-2'>
              <p className=''>
                <span className='text-lg font-semibold mr-1'>
                  Price:{' '}
                  <Price
                    value={undefined}
                    prices={{
                      msrp: price.msrp,
                      salePrice: price.salePrice,
                    }}
                  />
                </span>
                per itemssss
              </p>
              {showMinQuantity ? (
                <a>
                  <button
                    onClick={() => setShowMsg((show) => !show)}
                    className='uppercase items-center'
                    id='aMinOrder'
                  >
                    <strong>DISCOUNT PRICING AVAILABLE!</strong>
                  </button>
                </a>
              ) : null}
            </div>
          )}
          <QtyPriceTable storeCode={storeCode} />
          {showMsg && (
            <div className='text-xs p-3 pb-0' id='divMinorder'>
              <p>
                We reserve the right to reject orders that do not meet the{' '}
                {minQty}
                piece minimum per style <br /> and color, exceptions may apply
                for men’s and women’s companion styles per color.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (
    storeCode === _Store.type1 ||
    storeCode === _Store.type15 ||
    storeCode === _Store.type16
  ) {
    return (
      <>
        <div>
          <div className='text-sm text-gray-900 bg-primary flex flex-wrap justify-between items-center px-2.5 py-1 mt-5 leading-none'>
            <span className='text-lg font-semibold text-white leading-none'>
              EXCLUSIVE PRICING
            </span>
            {showMinQuantity ? (
              <button
                onClick={() => setShowMsg((show) => !show)}
                className='text-white hover:text-white py-1 md:px-2 flex flex-wrap text-[13px] font-semibold uppercase items-center'
                id='aMinOrder'
              >
                <span>MINIMUM ORDER :</span>
                {` ${minQty} ${unitUnits} per color`}
              </button>
            ) : null}
          </div>
          {showMsrpLine && (
            <div className='text-sm text-gray-900 flex flex-wrap justify-between items-center mt-4'>
              <p className='flex items-start leading-none'>
                <span className='leading-none text-lg font-semibold mr-1'>
                  Price:{' '}
                  <Price
                    value={undefined}
                    prices={{
                      salePrice: price.salePrice,
                      msrp: price.msrp,
                    }}
                  />
                </span>
                per item
              </p>
              {showMinQuantity ? (
                <button
                  onClick={() => setShowMsg((show) => !show)}
                  className='uppercase items-center font-semibold text-black'
                  id='aMinOrder'
                >
                  {/* <strong className='text-anchor hover:text-anchor-hover hover:text-gray-700'> */}
                  EXCLUSIVE PRICING AVAILABLE
                  {/* </strong> */}
                </button>
              ) : null}
            </div>
          )}
          <QtyPriceTable storeCode={storeCode} />
          {showLogin && modalHandler && (
            <AskToLogin modalHandler={modalHandler} />
          )}
        </div>
        {showMsg && (
          <div className='text-xs p-3 pb-0' id='divMinorder'>
            We reserve the right to reject orders that do not meet the {minQty}
            piece minimum per style <br /> and color, exceptions may apply for
            men’s and women’s companion styles per color.
          </div>
        )}
      </>
    );
  }

  return <></>;
};

export default DiscountPricing;
