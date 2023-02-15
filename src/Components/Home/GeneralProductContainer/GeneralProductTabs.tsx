// ** React Imports
import { useTypedSelector } from 'hooks';
import React, { useEffect, useState } from 'react';

// ** MUI Imports
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import MuiTab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import { FetchDataByBrand } from '@services/brand.service';
import { _SelectedBrands } from '@type/APIs/storeDetails.res';
import { GetlAllProductList } from '@type/productList.type';
import BrandProductListing from './BrandProducsListing';

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

const ProductsInfoTabs: React.FC<_props> = ({ dataArr }) => {
  // ** State
  const [value, setValue] = useState(
    dataArr?.featuredproducts_selected_brands?.value[0]?.value,
  );
  const initialData = [
    {
      imageUrl: '',
      imap: '',
      getProductImageOptionList: [],
      productId: 0,
      productName: '',
      productSEName: '',
      productDisplayOrder: 0,
      ourCost: 0,
      msrp: 0,
      salePrice: 0,
    },
  ];

  const [brandsData, setBrandsData] =
    useState<GetlAllProductList[]>(initialData);
  const storeId = useTypedSelector((state) => state.store.id);

  const fetchBrandData = async () => {
    let body = {
      brandId: value,
      storeId: storeId ?? 4,
      maximumItemsForFetch: dataArr.featuredproducts_product_count.value,
      tagName: 'featured',
    };
    const data = await FetchDataByBrand(body);
    setBrandsData(data?.data);
  };

  // Fetching products by brand
  useEffect(() => {
    fetchBrandData();
  }, [value]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Card>
        <TabList
          variant='scrollable'
          scrollButtons='auto'
          onChange={handleChange}
          aria-label='forced scroll tabs example'
          sx={{
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            marginLeft: '30px',
          }}
          className='tab-container'
        >
          {dataArr?.featuredproducts_selected_brands.value.map(
            (brand, index) => {
              return (
                <Tab
                  key={index}
                  className='mr-0.5 md:mr-0 font-semibold py-2 px-2 hover:text-primary hover:border-primary featured_title font-Outfit'
                  value={brand.value}
                  label={brand.label}
                />
              );
            },
          )}
        </TabList>
      </Card>
      <Box sx={{ marginTop: 0 }}>
        {dataArr?.featuredproducts_selected_brands.value.map((brand, index) => {
          return (
            <TabPanel sx={{ p: 0 }} value={brand.value} key={index}>
              <BrandProductListing brandsData={brandsData} />
            </TabPanel>
          );
        })}
      </Box>
    </TabContext>
  );
};

export default ProductsInfoTabs;
