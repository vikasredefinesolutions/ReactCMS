import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React from 'react';
import { Bacardi_Header } from './Corporate_Headers';

const Corporate_Header: React.FC = () => {
  const { layout: storeLayout } = useTypedSelector((state) => state.store);

  if (
    storeLayout === _Store.type5 ||
    storeLayout === _Store.type6 ||
    storeLayout === _Store.type7
  ) {
    return <Bacardi_Header />;
  }

  if (storeLayout === _Store.type10) {
    return <Bacardi_Header />;
  }

  if (storeLayout === _Store.type11) {
    return <Bacardi_Header />;
  }

  if (storeLayout === _Store.type14) {
    return <Bacardi_Header />;
  }

  if (
    storeLayout === _Store.type16 ||
    storeLayout === _Store.type17 ||
    storeLayout === _Store.type18 ||
    storeLayout === _Store.type19 ||
    storeLayout === _Store.type20
  ) {
    return <Bacardi_Header />;
  }

  if (
    storeLayout === _Store.type22 ||
    storeLayout === _Store.type23 ||
    storeLayout === _Store.type24
  ) {
    return <Bacardi_Header />;
  }

  if (storeLayout === _Store.type25) {
    return <Bacardi_Header />;
  }

  return <></>;
};

export default Corporate_Header;
