import SeoHead from 'appComponents/reUsable/SeoHead';
import { seoTags } from 'constants/seo.constant';
import { _Store } from 'page.config';
import React from 'react';
import BrandController from '../../Components/Brands/BrandController';
import Stroe1LayouBrand from '../../Components/Brands/Components/Store1Layout';
import Store2LayoutBannd from '../../Components/Brands/Components/Store2Layout';
import getServerSideProps from '../../Components/Brands/getServerSideProps';

const Brands = (props: any) => {
  let layout: React.ReactNode = <></>;
  const { storeLayout } = BrandController();

  if (
    storeLayout === _Store.type1 ||
    storeLayout === _Store.type15 ||
    storeLayout === _Store.type16
  ) {
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

  return (
    <>
      <SeoHead {...seoTags.brandList} />
      {layout}
    </>
  );
};

export { getServerSideProps };

export default Brands;
