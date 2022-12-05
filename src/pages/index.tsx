import { getServerSideProps } from 'Components/Slug/getServerSideProps';
import Head from 'next/head';
import Home from 'pages/Home';
export default function Search(props: any) {
  //console.log(props);
  const { pageType, pageData, slug } = props;

  let page = <>Loading ...</>;
  if (pageType && pageData) {
    if (pageType === 'topic') {
      
      const tprops = {
        pageData: pageData,
        pageType: pageType,
        slug: slug,
      };
//      console.log(tprops);  
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
          <Home props={tprops} />
        </>
      );
    }

    
  }

  return <>{page}</>;
}

export { getServerSideProps };

