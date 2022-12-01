import { getServerSideProps } from 'Components/Slug/getServerSideProps';
import Head from 'next/head';
import Home from 'pages/Home';
export default function Search(props: any) {
  const { pageType, pageData, slug } = props;

  let page = <>Loading ...</>;
  if (pageType && pageData) {
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
          <title>{pageData.seo?.seTitle}</title>
          <meta
            name="description"
            content={pageData.seo?.seDescription}
            key="desc"
          />
          <meta name="keywords" content={pageData.seo?.seKeyWords} />
        </Head>
        <Home />
      </>
    );
  }

  return <>{page}</>;
}

export { getServerSideProps };
