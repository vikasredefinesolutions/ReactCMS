import Head from 'next/head';
import Home from 'pages/Home';
import { getServerSideProps } from 'pages/[slug]/getServerSideProps';
export default function Search(props: any) {
  const { pageType, pageData, slug } = props;

  let page = <>Loading ...</>;
  if (pageType && pageData) {
    const seo = {
      seTitle: 'TITLE HERE',
      seDescription: 'DESCRIPTION',
      seKeyWords: 'PAGE',
    };
    if (pageType === 'topic') {
      const props = {
        pageData: pageData,
        pageType: pageType,
        slug: slug,
      };
      page = (
        <>
          <Head>
            <title>{pageData?.seTitle}</title>
            <meta
              name="description"
              content={pageData?.seDescription}
              key="desc"
            />
            <meta name="keywords" content={pageData?.seKeyWords} />
          </Head>
          <Home props={props} />
        </>
      );
    }

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

  return <>{page}</>;
}

export { getServerSideProps };
