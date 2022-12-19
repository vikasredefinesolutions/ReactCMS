import Price from 'appComponents/reusables/Price';
import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React, { useState } from 'react';
import QtyPriceTable from './PriceTable';
interface _props {
  price: {
    ourCost: number;
    msrp: number;
    imap: number;
    salePrice: number;
  };
  showPriceTable: boolean;
}

const DiscountPricing: React.FC<_props> = ({ showPriceTable, price }) => {
  const [showMsg, setShowMsg] = useState(false);
  const { layout: storeLayout } = useTypedSelector((state) => state.store);
  const { minQuantity } = useTypedSelector(
    (state) => state.product.selected.color,
  );
  const unitUnits = minQuantity > 1 ? 'units' : 'unit';

  if (storeLayout === _Store.type4) {
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
          <QtyPriceTable />
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

  if (storeLayout === _Store.type1) {
    return (
      <div className="mb-5">
        <div>
          <div className="text-sm text-gray-900 bg-primary flex flex-wrap justify-between items-center p-2 md:p-0 md:pl-2 mt-5">
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
          <div className="text-sm text-gray-900 flex flex-wrap justify-between items-center mt-2">
            <p className="">
              <span className="text-lg font-semibold mr-1">
                Price: <Price value={price.msrp} />
              </span>
              per item
            </p>
            <button
              onClick={() => setShowMsg((show) => !show)}
              className="uppercase items-center"
              data-target="#minimum-order"
              id="aMinOrder"
            >
              <strong>DISCOUNT PRICING AVAILABLE!</strong>
            </button>
          </div>
          {showPriceTable && <QtyPriceTable />}
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
