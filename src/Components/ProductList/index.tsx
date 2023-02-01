import {
  ColorChangeHandler,
  FilterChangeHandler,
  FilterType,
  ProductList as ProductListType
} from '@type/productList.type';
import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React from 'react';
import ProductListController from '../../Controllers/ProductListController';
import Layout1 from './layouts/layout1';
import Layout2 from './layouts/layout2';
import Layout3 from './layouts/layout3';
import Layout4 from './layouts/layout4';

export type list_FnProps = {
  filters: FilterType;
  products: ProductListType;
  checkedFilters: any;
  totalCount: number;
  productView: string;
  showFilter: boolean;
  showSortMenu: boolean;
  skuList: string[];
  compareCheckBoxHandler: (sku: string) => void;
  colorChangeHandler: ColorChangeHandler;
  handleChange: FilterChangeHandler;
  loadMore: () => void;
  sortProductJson: (arg: number) => void;
  setShowSortMenu: (arg: boolean) => void;
  setProductView: (arg: string) => void;
  setShowFilter: (arg: boolean) => void;
  clearFilters: () => void;
  slug?: string;
};
const ProductList = ({
  pageData,
  slug,
}: {
  pageData: any | null;
  slug: string;
}) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);

  if (pageData === null) {
    return <>No Product Found</>;
  }

  const { checkedFilters } = pageData;
  const {
    filters,
    product,
    totalCount,
    productView,
    showFilter,
    showSortMenu,
    skuList,
    compareCheckBoxHandler,
    handleChange,
    colorChangeHandler,
    loadMore,
    sortProductJson,
    setShowSortMenu,
    setProductView,
    setShowFilter,
    clearFilters,
  } = ProductListController(
    pageData,
    slug,
    checkedFilters || [],
    pageData.brandId,
  );
  let Layout: React.FC<list_FnProps> | null = null;
  if (
    storeLayout === _Store.type1 ||
    storeLayout === _Store.type15 ||
    storeLayout === _Store.type16
  ) {
    Layout = Layout1;
  } else if (storeLayout === _Store.type2) {
    Layout = Layout2;
  } else if (storeLayout === _Store.type3 || storeLayout === _Store.type22 || storeLayout === _Store.type5 || storeLayout === _Store.type10 || storeLayout === _Store.type8 || storeLayout === _Store.type13) {
    Layout = Layout3;
  } else if (storeLayout === _Store.type4) {
    Layout = Layout4;
  }
  if (totalCount > 0 && Layout) {
    return (
      <Layout
        showSortMenu={showSortMenu}
        filters={filters}
        products={product}
        checkedFilters={checkedFilters}
        totalCount={totalCount}
        productView={productView}
        showFilter={showFilter}
        skuList={skuList}
        colorChangeHandler={colorChangeHandler}
        handleChange={handleChange}
        loadMore={loadMore}
        sortProductJson={sortProductJson}
        setShowSortMenu={setShowSortMenu}
        setProductView={setProductView}
        setShowFilter={setShowFilter}
        clearFilters={clearFilters}
        compareCheckBoxHandler={compareCheckBoxHandler}
        slug={slug}
      />
    );
  } else {
    return (
      <p
        style={{
          padding: '150px',
        }}
        className='text-center'
      >
        {' '}
        No Product Found
      </p>
    );
  }
};
export default ProductList;
