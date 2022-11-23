import {
  ColorChangeHandler,
  FilterChangeHandler,
  FilterType,
  ProductList as ProductListType,
} from '@type/productList.type';
import Layout1 from './layouts/layout1';
import ProductListController from './ProductListController';

export type list_FnProps = {
  filters: FilterType;
  products: ProductListType;
  checkedFilters: any;
  totalCount: number;
  productView: string;
  showFilter: boolean;
  showSortMenu: boolean;
  skuList: string[];
  compareCheckBoxHandler: (sku: number) => void;
  colorChangeHandler: ColorChangeHandler;
  handleChange: FilterChangeHandler;
  loadMore: () => void;
  sortProductJson: (arg: number) => void;
  setShowSortMenu: (arg: boolean) => void;
  setProductView: (arg: string) => void;
  setShowFilter: (arg: boolean) => void;
  clearFilters: () => void;
};
const ProductList = ({ pageData, slug }: { pageData: any; slug: string }) => {
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
  } = ProductListController(pageData, slug, checkedFilters || []);

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
    />
  );
};
export default ProductList;
