import {
  _SlugServerSideProps,
  _SlugServerSide_WentWrong,
  _TopicHomeProps,
} from '@type/slug.type';
import SeoHead from 'appComponents/reUsable/SeoHead';
import { getServerSideProps } from 'Components/Slug/getServerSideProps';
import { NextPage } from 'next';
import Home from 'pages/home';
import Redefine_ProductDetails from 'Templates/Redefine_ProductDetail';
import Redefine_ProductList from 'Templates/Redefine_ProductList';

const SlugSearch: NextPage<_SlugServerSideProps | _SlugServerSide_WentWrong> = (
  props,
) => {
  if ('error' in props) {
    const { error } = props;
    return <>{error}</>;
  }

  const { page, pageMetaData, _store } = props;

  if (page === null) {
    return <>If no page data is found</>;
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

  if (pageMetaData.type === 'collection') {
    return (
      <>
        <SeoHead
          title={pageMetaData.meta_title || 'Collection'}
          description={pageMetaData.meta_description || ''}
          keywords={pageMetaData.meta_keywords || 'Branded Promotional'}
        />
        <>Collection Page would come here</>
      </>
    );
  }
  if (pageMetaData.type === 'product' && page.productDetails && _store) {
    return <Redefine_ProductDetails {...page.productDetails} {..._store} />;
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
  if ('brand,category'.includes(pageMetaData.type)) {
    const listing = page.productListing;
    return (
      <>
        {listing?.brandSEO && (
          <SeoHead
            title={listing.brandSEO.seTitle}
            description={listing.brandSEO.seDescription}
            keywords={listing.brandSEO.seKeyWords}
          />
        )}
        <Redefine_ProductList
          {...{
            productListing: listing,
            slug: pageMetaData.slug,
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
export default SlugSearch;
