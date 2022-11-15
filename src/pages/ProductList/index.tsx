import { ColorChangeHandler, FilterChangeHandler, FilterType, ProductList as ProductListType } from "@type/productList.type";
import Layout1 from "./layouts/layout1";
import ProductListController from "./ProductListController";

const ProductList = ({ pageData, slug }: { pageData: any, slug: string }) => {
    const { checkedFilters } = pageData;
    const { product, filters, totalCount ,handleChange, colorChangeHandler, loadMore } = ProductListController(pageData, slug, []);
    return <Layout1 filters={filters} products={product} colorChangeHandler={colorChangeHandler} handleChange={handleChange} checkedFilters={checkedFilters} totalCount={totalCount} loadMore={loadMore} />
}
export default ProductList;