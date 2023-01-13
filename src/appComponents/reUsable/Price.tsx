import { useTypedSelector } from 'hooks';
import React from 'react';

interface _props {
  value: number | string | undefined;
  prices?: { msrp: number; ourCost: number; salePrice: number };
  addColon?: boolean;
}

const Price: React.FC<_props> = ({ value, prices, addColon = true }) => {
  let price = 0;

  const currency = useTypedSelector((state) => state.store.currency);

  if (value) prices === null ? (price = 0) : (price = +value);

  if (prices) {
    prices === null ? (price = 0) : prices.msrp;
  }

  const toShow = price.toFixed(2);

  if (addColon) {
    return (
      <>
        : {currency}
        {toShow}
      </>
    );
  }

  return (
    <>
      {currency}
      {toShow}
    </>
  );
};

export default Price;
