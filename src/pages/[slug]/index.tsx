import SeoHead from 'appComponents/Screen/Layout/Head';
import ProductDetails from 'Components/ProductDetails';
import ProductList from 'pages/ProductList';
import {getServerSideProps} from './getServerSideProps';
import Head from 'next/head';
import Home from 'pages/Home';
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
        else if(pageType === 'topic')
        {
            const { seo } = pageData;
                        console.log(seo);

            page = <>
                <Head>
                    <title>{seo?.seTitle}</title>
                    <meta
                        name="description"
                        content={seo?.seDescription}
                        key="desc"
                    />
                    <meta name="keywords" content={seo?.seKeyWords} />
                </Head>
                <Home pageData={pageData} />
            </>
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
