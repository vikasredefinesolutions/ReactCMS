import React from 'react';

import { _ProductListProps } from '@type/slug.type';

import ProductListController, {
  productListPageData,
} from 'Controllers/ProductListController';
import { _Store } from 'page.config';
import Layout1 from 'Templates/Ecommerce/ProductList/layouts/layout1';

interface _props {
  productListing: _ProductListProps | null;
  slug: string;
  seType: string;
}
const StoreBuilder_ProductList: React.FC<_props> = (props) => {
  const { productListing: pageData, slug, seType } = props;

  if (pageData === null) {
    return (
      <p
        style={{
          padding: '150px',
        }}
        className='text-center'
      >
        No Products List Found
      </p>
    );
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

  return (
    <Layout1
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
      storeLayout={_Store.type1}
      seType={seType}
      brandId={pageData.brandId}
    />
  );
};

export default StoreBuilder_ProductList;
