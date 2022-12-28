import {
  _SlugServerSideProps,
  _SlugServerSide_WentWrong,
  _TopicHomeProps
} from '@type/slug.type';
import SeoHead from 'appComponents/Screen/Layout/Head';
import { getServerSideProps } from 'Components/Slug/getServerSideProps';
import { NextPage } from 'next';
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

  if (pageMetaData.type === '404') {
    return (
      <>
        <SeoHead
          title={pageMetaData.meta_title || '404: No Page found'}
          description={pageMetaData.meta_description || ''}
          keywords={pageMetaData.meta_keywords || 'Branded Promotional'}
        />
        <h3>404: No page found</h3>
      </>
    );
  }

  if (pageMetaData.type === 'topic') {
    const tprops: _TopicHomeProps = {
      pageData: page.topicHome,
      pageType: pageMetaData.type,
      slug: pageMetaData.slug,
    };

    return (
      <>
        <SeoHead
          title={pageMetaData?.meta_title ? pageMetaData.meta_title : 'Home'}
          description={
            pageMetaData?.meta_description ? pageMetaData.meta_description : ''
          }
          keywords={
            pageMetaData?.meta_keywords
              ? pageMetaData.meta_keywords
              : 'Branded Promotional'
          }
        />
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

  return (
    <>
      <SeoHead
        title={'No Matches found'}
        description={''}
        keywords={'Branded Promotional'}
      />
      If no matchess found what to show
    </>
  );
};

export { getServerSideProps };
export default TopicHome;
