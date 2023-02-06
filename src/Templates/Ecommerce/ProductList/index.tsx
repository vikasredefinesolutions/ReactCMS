import {
  ColorChangeHandler,
  FilterChangeHandler,
  FilterType,
  ProductList as ProductListType,
} from '@type/productList.type';
import { _ProductListProps } from '@type/slug.type';

import { SpinnerComponent } from 'appComponents/ui/spinner';
import ProductListController, {
  productListPageData,
} from 'Controllers/ProductListController';
import { useTypedSelector } from 'hooks';
import dynamic from 'next/dynamic';
import { _Store } from 'page.config';
import { ComponentType } from 'react';

const Layout1 = dynamic(() => import('./layouts/layout1'), {
  loading: () => <SpinnerComponent />,
});
const Layout2 = dynamic(() => import('./layouts/layout2'), {
  loading: () => <SpinnerComponent />,
});
const Layout3 = dynamic(() => import('./layouts/layout3'), {
  loading: () => <SpinnerComponent />,
});

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
  storeLayout: string | null;
};

interface _props {
  productListing: _ProductListProps | null;
  slug: string;
}
const Ecommerce_ProductList = (props: _props) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const { productListing: pageData, slug } = props;

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
    pageData as unknown as productListPageData,
    slug,
    checkedFilters || [],
    pageData.brandId,
  );
  let Layout: ComponentType<list_FnProps> | null = null;
  if (
    storeLayout === _Store.type1 ||
    storeLayout === _Store.type15 ||
    storeLayout === _Store.type16
  ) {
    Layout = Layout1;
  } else if (storeLayout === _Store.type2) {
    Layout = Layout2;
  } else if (storeLayout === _Store.type3) {
    Layout = Layout3;
  } else if (storeLayout === _Store.type4) {
    Layout = Layout1;
  } else if (storeLayout === _Store.type22) {
    Layout = Layout3;
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
        storeLayout={storeLayout}
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
export default Ecommerce_ProductList;
