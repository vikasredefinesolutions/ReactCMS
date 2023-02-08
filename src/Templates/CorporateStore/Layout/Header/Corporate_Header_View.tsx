import { _Store } from 'page.config';
import React from 'react';
import { Bacardi_Header, Usaa_Header } from './Corporate_Headers';

interface _props {
  storeCode: string;
}

const Corporate_Header: React.FC<_props> = ({ storeCode }) => {
  console.log(storeCode, _Store.type5);
  if (
    storeCode === _Store.type5 ||
    storeCode === _Store.type6 ||
    storeCode === _Store.type7 ||
    storeCode === _Store.type13
  ) {
    return <Bacardi_Header />;
  }

  if (storeCode === _Store.type10) {
    return <Bacardi_Header />;
  }

  if (storeCode === _Store.type11) {
    return <Bacardi_Header />;
  }

  if (storeCode === _Store.type14) {
    return <Bacardi_Header />;
  }

  if (
    storeCode === _Store.type16 ||
    storeCode === _Store.type17 ||
    storeCode === _Store.type18 ||
    storeCode === _Store.type19 ||
    storeCode === _Store.type20
  ) {
    return <Bacardi_Header />;
  }

  if (
    storeCode === _Store.type22 ||
    storeCode === _Store.type23 ||
    storeCode === _Store.type24
  ) {
    return <Usaa_Header />;
  }

  if (storeCode === _Store.type25) {
    return <Bacardi_Header />;
  }

  return <></>;
};

export default Corporate_Header;
