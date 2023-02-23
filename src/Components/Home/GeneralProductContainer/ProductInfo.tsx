// ** React Imports
import { useTypedSelector } from 'hooks';
import React, { useEffect, useState } from 'react';

// ** MUI Imports
import { styled } from '@mui/material/styles';
import MuiTab from '@mui/material/Tab';
import { FetchDataByBrand } from '@services/brand.service';
import { _SelectedBrands } from '@type/APIs/storeDetails.res';
import { GetlAllProductList } from '@type/productList.type';
import ProductListing from './ProductListing';

interface _props {
  dataArr: _SelectedBrands;
}

// ** Styled Tab component
const Tab = styled(MuiTab)(({ theme }) => ({
  minHeight: 48,
  flexDirection: 'row',
  '& svg': {
    marginBottom: '0 !important',
    marginRight: theme.spacing(3),
  },
}));

const ProductsInfo: React.FC<_props> = ({ dataArr }) => {
  // ** State

  const [brandsData, setBrandsData] = useState<GetlAllProductList[] | []>([]);
  const storeId = useTypedSelector((state) => state.store.id);

  const fetchBrandData = async () => {
    let body = {
      brandId: +dataArr?.featuredproducts_selected_brands?.value[0]?.value,
      storeId: storeId ?? 4,
      maximumItemsForFetch: +dataArr.featuredproducts_product_count.value,
      tagName: 'featured',
    };
    const data = await FetchDataByBrand(body);
    setBrandsData(data?.data);
  };

  // Fetching products by brand
  useEffect(() => {
    fetchBrandData();
  }, []);

  return (
    <>
      <ProductListing brandsData={brandsData} />
    </>
  );
};

export default ProductsInfo;
