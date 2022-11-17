import SeoHead from 'appComponents/Screen/Layout/Head';
import ProductDetails from 'Components/ProductDetails';
import ProductList from 'pages/ProductList';
import {getServerSideProps} from './getServerSideProps';
export default function Search(props: any) {
    const { pageType, pageData, slug } = props;
    let page = <>Loading ...</>;
    if (pageType && pageData && slug) {
        if (pageType === 'collection') {
            page = <>Collection</>;
        }
        else if (pageType === 'product') {
          page = <ProductDetails product={pageData} />;
        }   
        else if ('brand,category'.includes(pageType)) {
            const { seo } = pageData;
            page = <>
                <SeoHead title={seo?.seTitle} description={seo?.seDescription} keywords={seo?.seKeyWords} />
                <ProductList pageData={pageData} slug={slug} />
            </>
        }
        else {
            page = <>Home</>
        }
    }
    return <>{page}</>;
}

export { getServerSideProps };
