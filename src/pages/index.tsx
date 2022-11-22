import Head from 'next/head';
import Home from 'pages/Home';
import { getServerSideProps } from 'pages/[slug]/getServerSideProps';
export default function Search(props: any) {
  const { pageType, pageData, slug } = props;

  let page = <>Loading ...</>;
  if (pageType && pageData) {
    if (pageType === 'topic') {
      const { seo } = pageData;

      page = (
        <>
          <Head>
            <title>{seo?.seTitle}</title>
            <meta name="description" content={seo?.seDescription} key="desc" />
            <meta name="keywords" content={seo?.seKeyWords} />
          </Head>
          <Home />
        </>
      );
    }
  }
  return <>{page}</>;
}

export { getServerSideProps };
