import React, { useEffect, useState } from 'react';
import { _Store } from '../constants/store.constant';
import { _Header } from '../definations/header.type';
import { useTypedSelector } from '../hooks';
import { FetchHeaderInformation } from '../../../../services/header.service';
import BreadCrumb from '../BreadCrumb';
import Notification from '../Notification';
import Rec_001_Header from './Rec_001_Header';
import Rec_002_Header from './Rec_002_Header';
import Rec_003_Header from './Rec_003_Header';
import Rec_004_Header from './Rec_004_Header';

const Header: React.FC = () => {
  const [header, setHeader] = useState<null | _Header>(null);
  const show = useTypedSelector((state) => state.store.display.header);
  const storeLayout = useTypedSelector((state) => state.store.layout);
  useEffect(() => {
    if (header === null) {
      FetchHeaderInformation().then((res) => {
        setHeader(res);
      });
      // .catch((err) => console.log('err'))
      // .finally(() => console.log('close loader'));
    }
  }, [header]);

  if (header === null) return <div>Loading...</div>;

  return (
    <>
      {show.notification && <Notification />}
      {storeLayout === _Store.type1 && <Rec_001_Header header={header} />}
      {storeLayout === _Store.type2 && <Rec_002_Header />}
      {storeLayout === _Store.type3 && <Rec_003_Header />}
      {storeLayout === _Store.type4 && <Rec_004_Header />}
      {show.breadCrumb && <BreadCrumb />}
    </>
  );
};

export default Header;
