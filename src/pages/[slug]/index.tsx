import ProductDetails from 'Components/ProductDetails/index';
import Head from 'next/head';
import ProductList from 'pages/ProductList';
import { getServerSideProps } from './getServerSideProps';
export default function Search(props: any) {
  const { pageType, pageData, slug } = props;
  let page = <>Loading ...</>;
  if (pageType && pageData && slug) {
    if (pageType === 'collection') {
      page = <>Collection</>;
    } else if (pageType === 'product') {
      page = <ProductDetails product={pageData} />;
    } else if ('brand,category'.includes(pageType)) {
      const { seo } = pageData;
      page = (
        <>
          <Head>
            <title>{seo?.seTitle}</title>
            <meta name="description" content={seo?.seDescription} key="desc" />
            <meta name="keywords" content={seo?.seKeyWords} />
          </Head>
          <ProductList pageData={pageData} slug={slug} />
        </>
      );
    } else {
      page = <>Home</>;
    }
  }
  return <>{page}</>;
}

export { getServerSideProps };
