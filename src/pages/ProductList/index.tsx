import { ColorChangeHandler, FilterChangeHandler, FilterType, ProductList as ProductListType } from "@type/productList.type";
import Layout1 from "./layouts/layout1";
import ProductListController from "./ProductListController";

const ProductList = ({filters, products, colorChangeHandler, handleChange}: {filters: FilterType, products: ProductListType, colorChangeHandler: ColorChangeHandler, handleChange: FilterChangeHandler}) => {
    return <Layout1 filters={filters} products={products} colorChangeHandler={colorChangeHandler} handleChange={handleChange}/>
}
export default ProductList;
