import React from 'react';
import { useTypedSelector } from 'hooks';

interface _props {
  value?: number | string;
  prices?: { msrp: number; ourCost: number; salePrice: number };
}

const Price: React.FC<_props> = ({ value, prices }) => {
  let price = 0;
  const currency = useTypedSelector((state) => state.store.currency);

  if (value) prices === null ? (price = 0) : (price = +value);

  if (prices) {
    prices === null ? (price = 0) : prices.msrp;
  }

  const toShow = price.toFixed(2);

  return (
    <>
      {currency}
      {toShow}
    </>
  );
};

export default Price;
