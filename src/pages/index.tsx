import {
  _SlugServerSideProps,
  _SlugServerSide_WentWrong,
  _TopicHomeProps,
} from '@type/slug.type';
import { getServerSideProps } from 'Components/Slug/getServerSideProps';
import { NextPage } from 'next';
import Head from 'next/head';
import Home from 'pages/Home';

const TopicHome: NextPage<_SlugServerSideProps | _SlugServerSide_WentWrong> = (
  props,
) => {
  if ('error' in props) {
    const { error } = props;
    return <>{error}</>;
  }

  const { pageMetaData, page } = props;

  if (page === null) {
    return <>No page data found</>;
  }

  const _SEO = {
    title: pageMetaData?.meta_title || 'Home',
    desc: pageMetaData?.meta_description || 'Home page',
    keywords:
      pageMetaData?.meta_keywords || 'Custom Embroidery | Branded Promotional',
  };

  const HeadTag = (
    <Head>
      <title>{_SEO.title}</title>
      <meta name="description" content={_SEO.desc} key="desc" />
      <meta name="keywords" content={_SEO.keywords} />
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Head>
  );

  if (pageMetaData.type === 'topic') {
    const tprops: _TopicHomeProps = {
      pageData: page.topicHome,
      pageType: pageMetaData.type,
      slug: pageMetaData.slug,
    };

    return (
      <>
        {HeadTag}
        <Home
          props={tprops}
          featuredItems={{
            products: page.home.featuredItems,
            brands: null,
          }}
        />
      </>
    );
  }

  return <>if page type do not matched to "topic" what to do???</>;
};

export { getServerSideProps };
export default TopicHome;
