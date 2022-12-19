import {
  _SlugServerSideProps,
  _SlugServerSide_WentWrong,
  _TopicHomeProps,
} from '@type/slug.type';
import SeoHead from 'appComponents/Screen/Layout/Head';
import ProductDetails from 'Components/ProductDetails';
import { NextPage } from 'next';
import Home from 'pages/Home';
import ProductList from 'pages/ProductList';
import { getServerSideProps } from '../../Components/Slug/getServerSideProps';

const SlugSearch: NextPage<_SlugServerSideProps | _SlugServerSide_WentWrong> = (
  props,
) => {
  if ('error' in props) {
    const { error } = props;
    return <>{error}</>;
  }

  const { page, pageMetaData } = props;

  const _SEO = {
    title: pageMetaData?.meta_title || 'Home',
    desc: pageMetaData?.meta_description || 'Home page',
    keywords:
      pageMetaData?.meta_keywords || 'Custom Embroidery | Branded Promotional',
  };

  if (page === null) {
    return <>If no page data is found</>;
  }

  if (pageMetaData.type === 'collection') {
    return (
      <>
        <SeoHead
          title={_SEO.title}
          description={_SEO.desc}
          keywords={_SEO.keywords}
        />
        <>Collection Page would come here</>
      </>
    );
  }
  if (pageMetaData.type === 'product' && page.productDetails) {
    return <ProductDetails {...page.productDetails} />;
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
          title={_SEO.title}
          description={_SEO.title}
          keywords={_SEO.title}
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
        <ProductList pageData={page.productListing} slug={pageMetaData.slug} />
      </>
    );
  }
  return (
    <>
      <SeoHead
        title={_SEO.title}
        description={_SEO.desc}
        keywords={_SEO.keywords}
      />
      If no matchess found what to show
    </>
  );
};

export { getServerSideProps };
export default SlugSearch;
