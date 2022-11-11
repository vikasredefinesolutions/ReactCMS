import React, { useEffect, useState } from 'react';
import { _Store } from 'constants/store.constant';
import { _Header } from 'definations/header.type';
import { useTypedSelector } from 'hooks';
import BreadCrumb from '../BreadCrumb';
import Notification from '../Notification';
import Rec_001_Header from './Rec_001_Header';
import Rec_002_Header from './Rec_002_Header';
import Rec_003_Header from './Rec_003_Header';
import Rec_004_Header from './Rec_004_Header';

const Header: React.FC = () => {
  const show = useTypedSelector((state) => state.store.display.header);
  const storeLayout = useTypedSelector((state) => state.store.layout);

  if (true) return <div>Loading...</div>;

  return (
    <>
      {show.notification && <Notification />}
      {storeLayout === _Store.type1 && <Rec_001_Header />}
      {storeLayout === _Store.type2 && <Rec_002_Header />}
      {storeLayout === _Store.type3 && <Rec_003_Header />}
      {storeLayout === _Store.type4 && <Rec_004_Header />}
      {show.breadCrumb && <BreadCrumb />}
    </>
  );
};

export default Header;
