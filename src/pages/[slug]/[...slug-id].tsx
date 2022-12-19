import {
  _SlugServerSideProps,
  _SlugServerSide_WentWrong,
} from '@type/slug.type';
import SeoHead from 'appComponents/Screen/Layout/Head';
import ProductDetails from 'Components/ProductDetails';
import { NextPage } from 'next';
import ProductList from 'pages/ProductList';
import { getServerSideProps } from '../../Components/Slug/getServerSideProps';
const ProductListing: NextPage<
  _SlugServerSideProps | _SlugServerSide_WentWrong
> = (props) => {
  if ('error' in props) {
    const { error } = props;
    return <>{error}</>;
  }

  const { pageMetaData, page } = props;

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
  return <>Nothing matches send to home page</>;
};

export { getServerSideProps };

export default ProductListing;
