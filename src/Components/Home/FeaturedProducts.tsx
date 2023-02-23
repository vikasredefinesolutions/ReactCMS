import { _FeaturedProduct, _SelectedBrands } from '@type/APIs/storeDetails.res';
import React, { useEffect } from 'react';
import ProductsInfoTabs from './GeneralProductContainer/GeneralProductTabs';
import ProductsInfo from './GeneralProductContainer/ProductInfo';

interface _props {
  brands: { name: string; id: number }[] | null;
  products: Array<_FeaturedProduct[]> | null;
  dataArr: _SelectedBrands;
  storeId: number;
}

const FeaturedProducts: React.FC<_props> = ({ dataArr, storeId }) => {
  useEffect(() => {
    // console.log('FPD', dataArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='mainsection container mx-auto mt-20 featured_items'>
      <div className='w-full text-2xl md:text-3xl lg:text-title font-title text-color-title text-center mb-4 text-capitalize capitalize'>
        {dataArr.featuredproducts_section_title
          ? dataArr.featuredproducts_section_title.value
          : ''}
      </div>
      <div>
        {dataArr.featuredproducts_brandwise_display.value === 'Yes' &&
        dataArr.featuredproducts_selected_brands.value.length > 1 ? (
          <ProductsInfoTabs dataArr={dataArr} />
        ) : (
          <ProductsInfo dataArr={dataArr} />
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
