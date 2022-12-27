import {
  _SlugServerSideProps,
  _SlugServerSide_WentWrong
} from '@type/slug.type';
import SeoHead from 'appComponents/Screen/Layout/Head';
import ProductList from 'Components/ProductList';
import { NextPage } from 'next';
import Redefine_ProductDetails from 'Templates/Redefine_ProductDetail';
import { getServerSideProps } from '../../Components/Slug/getServerSideProps';
const ProductListing: NextPage<
  _SlugServerSideProps | _SlugServerSide_WentWrong
> = (props) => {
  if ('error' in props) {
    const { error } = props;
    return <>{error}</>;
  }

  const { pageMetaData, page } = props;

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
  if (pageMetaData.type === 'product' && page.productDetails) {
    return <Redefine_ProductDetails {...page.productDetails} />;
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
        title={pageMetaData.meta_title || 'No Matches found'}
        description={pageMetaData.meta_description || ''}
        keywords={pageMetaData.meta_keywords || 'Branded Promotional'}
      />
      If no matchess found what to show
    </>
  );
};

export { getServerSideProps };

export default ProductListing;
