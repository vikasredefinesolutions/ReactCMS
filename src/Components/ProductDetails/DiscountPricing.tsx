import Price from 'appComponents/reUsable/Price';
import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React, { useState } from 'react';
import QtyPriceTable from './PriceTable';
interface _props {
  showMsrpLine: boolean;
}

const DiscountPricing: React.FC<_props & { storeCode: string }> = ({
  showMsrpLine,
  storeCode,
}) => {
  const [showMsg, setShowMsg] = useState(false);

  const discountedPrice = useTypedSelector(
    (state) => state.product.toCheckout.price,
  );
  const { minQuantity } = useTypedSelector(
    (state) => state.product.selected.color,
  );
  const unitUnits = minQuantity > 1 ? 'units' : 'unit';
  const showMinQuantity = minQuantity > 0;

  if (storeCode === _Store.type4) {
    return (
      <div className="mb-5">
        <div>
          <div className="text-sm text-gray-900 bg-secondary flex flex-wrap justify-between items-center p-2 md:p-0 md:pl-2 mt-5">
            <span className="text-lg font-semibold text-white">
              Discount Pricing:
            </span>
            <button
              onClick={() => setShowMsg((show) => !show)}
              className="text-white py-1 md:px-2 flex flex-wrap text-sm font-semibold uppercase items-center"
              data-target="#minimum-order"
              id="aMinOrder"
            >
              <span>MINIMUM ORDER :</span>
              {` ${minQuantity} ${unitUnits} per color`}
            </button>
          </div>
          <QtyPriceTable storeCode={storeCode} />
          {showMsg && (
            <div className="text-xs p-3 pb-0" id="divMinorder">
              <p>
                We reserve the right to reject orders that do not meet the
                {minQuantity}
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
      <div className="mb-5">
        <div>
          <div className="text-sm text-gray-900 bg-black flex flex-wrap justify-between items-center p-2 md:p-0 md:pl-2 mt-5 mb-5">
            <span className="text-lg font-semibold text-white">
              Discount Pricing:
            </span>
            {showMinQuantity ? (
              <button
                onClick={() => setShowMsg((show) => !show)}
                className="text-white py-1 md:px-2 flex flex-wrap text-sm font-semibold uppercase items-center"
                id="aMinOrder"
              >
                <span>MINIMUM ORDER :</span>
                {` ${minQuantity} ${unitUnits} per color`}
              </button>
            ) : null}
          </div>
          {showMsrpLine && (
            <div className="text-sm text-gray-900 flex flex-wrap justify-between items-center mt-2">
              <p className="">
                <span className="text-lg font-semibold mr-1">
                  Price: <Price value={discountedPrice} />
                </span>
                per item
              </p>
              {showMinQuantity ? (
                <button
                  onClick={() => setShowMsg((show) => !show)}
                  className="uppercase items-center"
                  id="aMinOrder"
                >
                  <strong>DISCOUNT PRICING AVAILABLE!</strong>
                </button>
              ) : null}
            </div>
          )}
          <QtyPriceTable storeCode={storeCode} />
          {showMsg && (
            <div className="text-xs p-3 pb-0" id="divMinorder">
              <p>
                We reserve the right to reject orders that do not meet the{' '}
                {minQuantity}
                piece minimum per style <br /> and color, exceptions may apply
                for men’s and women’s companion styles per color.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }


  if (storeCode === _Store.type1) {
    return (
      <div className="mb-5">
        <div>
          <div className="text-sm text-gray-900 bg-primary flex flex-wrap justify-between items-center p-2 md:p-0 md:pl-2 mt-5">
            <span className="text-lg font-semibold text-white">
              Discount Pricing:
            </span>
            {showMinQuantity ? (
              <button
                onClick={() => setShowMsg((show) => !show)}
                className="text-white py-1 md:px-2 flex flex-wrap text-sm font-semibold uppercase items-center"
                id="aMinOrder"
              >
                <span>MINIMUM ORDER :</span>
                {` ${minQuantity} ${unitUnits} per color`}
              </button>
            ) : null}
          </div>
          {showMsrpLine && (
            <div className="text-sm text-gray-900 flex flex-wrap justify-between items-center mt-2">
              <p className="">
                <span className="text-lg font-semibold mr-1">
                  Price: <Price value={discountedPrice} />
                </span>
                per item
              </p>
              {showMinQuantity ? (
                <button
                  onClick={() => setShowMsg((show) => !show)}
                  className="uppercase items-center"
                  id="aMinOrder"
                >
                  <strong>DISCOUNT PRICING AVAILABLE!</strong>
                </button>
              ) : null}
            </div>
          )}
          <QtyPriceTable storeCode={storeCode} />
          {showMsg && (
            <div className="text-xs p-3 pb-0" id="divMinorder">
              <p>
                We reserve the right to reject orders that do not meet the{' '}
                {minQuantity}
                piece minimum per style <br /> and color, exceptions may apply
                for men’s and women’s companion styles per color.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return <></>;
};

export default DiscountPricing;
