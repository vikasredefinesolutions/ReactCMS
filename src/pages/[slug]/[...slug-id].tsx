import ProductList from "pages/ProductList";
import { getServerSideProps } from "./getServerSideProps";
const ProductListing = (props: any) => {
    const { pageType, pageData, slug } = props;
    let page = <>Loading ...</>;
    if (pageType) {
        if (pageType === 'collection') {
            page = <>Collection</>;
        }
        else if (pageType === 'product') {
            page = <>'product'</>;
        }
        else if ('brand,category'.includes(pageType)) {
            page = <ProductList pageData={pageData} slug={slug} />
        }
        else {
            page = <>Home</>
        }
    }
    return <>
        {page}
    </>;

}

export { getServerSideProps }

export default ProductListing;