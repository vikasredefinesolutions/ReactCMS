import {
  _SlugServerSideProps,
  _SlugServerSide_WentWrong,
  _TopicHomeProps
} from '@type/slug.type';
import PageNotFound from 'appComponents/reUsable/404';
import SeoHead from 'appComponents/reUsable/SeoHead';
import { getServerSideProps } from 'Components/Slug/getServerSideProps';
import { cLog } from 'helpers/global.console';
import { NextPage } from 'next';
import Home from 'pages/Home';

const TopicHome: NextPage<_SlugServerSideProps | _SlugServerSide_WentWrong> = (
  props,
) => {
  if ('error' in props) {
    const { error } = props;
    return <>{error}</>;
  }

  const { pageMetaData, page, _store } = props;

  if (!_store || !pageMetaData || !page) {
    cLog('No page data found', '404');
    return <PageNotFound />;
  }

  if (pageMetaData?.type === '404') {
    cLog('404', '404');
    return (
      <>
        <SeoHead
          title={pageMetaData?.meta_Title || '404: No Page found'}
          description={pageMetaData?.meta_Description || ''}
          keywords={pageMetaData?.meta_Keywords || 'Branded Promotional'}
        />
        <PageNotFound />
      </>
    );
  }

  if (pageMetaData?.type === 'topic') {
    const tprops: _TopicHomeProps = {
      pageData: page.topicHome,
      pageType: pageMetaData?.type,
      slug: pageMetaData?.slug,
    };

    return (
      <>
        <SeoHead
          title={pageMetaData?.meta_Title ? pageMetaData?.meta_Title : 'Home'}
          description={
            pageMetaData?.meta_Description ? pageMetaData?.meta_Description : ''
          }
          keywords={
            pageMetaData?.meta_Keywords
              ? pageMetaData?.meta_Keywords
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
      {cLog('No match found', '404')}
      <PageNotFound />
    </>
  );
};

export { getServerSideProps };
export default TopicHome;
