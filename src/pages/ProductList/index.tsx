import { ColorChangeHandler, FilterChangeHandler, FilterType, ProductList as ProductListType } from "@type/productList.type";
import Layout1 from "./layouts/layout1";
import ProductListController from "./ProductListController";

const ProductList = ({ pageData, slug }: { pageData: any, slug: string }) => {
    const { checkedFilters } = pageData;
    const { product, filters, totalCount, handleChange, colorChangeHandler, loadMore, sortProductJson } = ProductListController(pageData, slug, checkedFilters || []);
    return <Layout1 filters={filters} products={product} colorChangeHandler={colorChangeHandler} handleChange={handleChange} checkedFilters={checkedFilters} totalCount={totalCount} loadMore={loadMore} sortProductJson={sortProductJson}/>
}
export default ProductList;
