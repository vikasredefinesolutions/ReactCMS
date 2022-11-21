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
  productView: string,
  showFilter: boolean,
  showSortMenu: boolean,
  colorChangeHandler: ColorChangeHandler;
  handleChange: FilterChangeHandler;
  loadMore: () => void;
  sortProductJson: (arg: number) => void;
  setShowSortMenu: (arg: boolean) => void;
  setProductView: (arg: string) => void;
  setShowFilter: (arg: boolean) => void;
}
const ProductList = ({ pageData, slug }: { pageData: any; slug: string }) => {
  const { checkedFilters } = pageData;
  const {
    filters,
    product,
    totalCount,
    productView,
    showFilter,
    showSortMenu,
    handleChange,
    colorChangeHandler,
    loadMore,
    sortProductJson,
    setShowSortMenu,
    setProductView,
    setShowFilter,
  } = ProductListController(pageData, slug, checkedFilters || []);
  return (
    <Layout1
      showSortMenu={showSortMenu}
      filters={filters}
      products={product}
      colorChangeHandler={colorChangeHandler}
      handleChange={handleChange}
      checkedFilters={checkedFilters}
      totalCount={totalCount}
      loadMore={loadMore}
      sortProductJson={sortProductJson}
      productView={productView}
      showFilter={showFilter}
      setShowSortMenu={setShowSortMenu}
      setProductView={setProductView}
      setShowFilter={setShowFilter}
    />
  );
};
export default ProductList;
