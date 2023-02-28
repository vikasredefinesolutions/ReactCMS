import { _SelectedBrands } from '@type/APIs/storeDetails.res';
import React from 'react';
import ProductsInfoTabs from './GeneralProductContainer/GeneralProductTabs';
import ProductsInfo from './GeneralProductContainer/ProductInfo';

interface _props {
  dataArr: _SelectedBrands;
}

const FeaturedProducts: React.FC<_props> = ({ dataArr }) => {
  return (
    <section className='mainsection container mx-auto featured_items text-center'>
      <div className='peter-millar-promotional-embroidered-clothing-nw'>
        {dataArr.featuredproducts_section_title.value ?? ''}
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
