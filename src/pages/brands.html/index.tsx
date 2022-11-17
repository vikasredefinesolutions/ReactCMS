import SeoHead from 'appComponents/Screen/Layout/Head';
import { _Store } from '../../constants/store.constant';
import BrandController from './BrandController';
import Stroe1LayouBrand from './Components/Store1Layout';
import Store2LayoutBannd from './Components/Store2Layout';
import getServerSideProps from './getServerSideProps';
import { BrandList } from 'constants/seo.constant';

const Brands = (props: any) => {
  let layout: JSX.Element = <></>
  const { storeLayout } = BrandController();

  if (storeLayout === _Store.type1) {
    layout = <Stroe1LayouBrand {...props} />;
  }

  if (storeLayout === _Store.type2) {
    layout = <Store2LayoutBannd />;
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

  return <>
    <SeoHead  {...BrandList} />
    {layout}
  </>;
};

export { getServerSideProps }

export default Brands;
