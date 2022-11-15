import { _Store } from '../../constants/store.constant';
import BrandController from './BrandController';
import Stroe1LayouBrand from './Components/Store1Layout';
import Store2LayoutBannd from './Components/Store2Layout';

import getServerSideProps from './getServerSideProps';

const Brands = (props: any) => {
  const { storeLayout } = BrandController();

  if (storeLayout === _Store.type1) {
    return <Stroe1LayouBrand {...props}/>;
  }

  if (storeLayout === _Store.type2) {
    return <Store2LayoutBannd />;
  }

  // if (storeLayout === _Store.type3) {
  //   return (
  //
  //   );
  // }

  // if (storeLayout === _Store.type4) {
  //   return (
  //
  //   );
  // }

  return <></>;
};

export { getServerSideProps }

export default Brands;