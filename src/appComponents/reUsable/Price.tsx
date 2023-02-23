import { useTypedSelector } from 'hooks';
import React from 'react';

interface _props {
  value: number | string | undefined;
  prices?: { msrp: number; ourCost?: number; salePrice: number };
  addColon?: boolean;
}

const Price: React.FC<_props> = ({ value, prices, addColon = false }) => {
  let priceToDisplay = 0;

  const currency = useTypedSelector((state) => state.store.currency);
  const loggedIn = useTypedSelector((state) => state.user.id);

  if (value) {
    priceToDisplay = +value;
  }

  if (prices) {
    priceToDisplay = +prices.msrp;
    if (loggedIn && prices?.salePrice < prices?.msrp) {
      priceToDisplay = +prices.salePrice;
    }
  }

  if (isNaN(priceToDisplay)) {
    priceToDisplay = 0;
  }

  const toShow = priceToDisplay.toFixed(2);

  if (addColon) {
    return <>{`: ${currency}${toShow}`}</>;
  }

  return <>{`${currency}${toShow}`}</>;
};

export default Price;
