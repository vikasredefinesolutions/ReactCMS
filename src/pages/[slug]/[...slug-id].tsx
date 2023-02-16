/* eslint-disable react-hooks/rules-of-hooks */
import {
  _SlugServerSideProps,
  _SlugServerSide_WentWrong,
} from '@type/slug.type';
import PageNotFound from 'appComponents/reUsable/404';
import SeoHead from 'appComponents/reUsable/SeoHead';
import ProductList from 'Components/ProductList';
import { cLog } from 'helpers/global.console';
import { useActions } from 'hooks';
import _ from 'lodash';
import { NextPage } from 'next';
import { useEffect } from 'react';
import Redefine_ProductDetails from 'Templates/Redefine_ProductDetail';
import { getServerSideProps } from '../../Components/Slug/getServerSideProps';
const ProductListing: NextPage<
  _SlugServerSideProps | _SlugServerSide_WentWrong
> = (props) => {
  if ('error' in props) {
    const { error } = props;
    return <>{error}</>;
  }

  const { updatePageType } = useActions();
  const { _store, pageMetaData, page } = props;

  useEffect(() => {
    if (!_.isEmpty(pageMetaData)) {
      updatePageType(pageMetaData);
    }
  }, [pageMetaData]);

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

  if (pageMetaData?.type === 'collection') {
    return (
      <>
        <SeoHead
          title={pageMetaData?.meta_Title || 'Collection'}
          description={pageMetaData?.meta_Description || ''}
          keywords={pageMetaData?.meta_Keywords || 'Branded Promotional'}
        />
        <>Collection Page would come here</>
      </>
    );
  }

  if (pageMetaData?.type === 'product' && page.productDetails && _store) {
    return <Redefine_ProductDetails {...page.productDetails} {..._store} />;
  }

  if ('brand,category'.includes(pageMetaData?.type)) {
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
        <ProductList
          pageData={page.productListing}
          slug={pageMetaData?.slug}
          seType={pageMetaData?.type}
        />
      </>
    );
  }

  return (
    <>
      <SeoHead
        title={pageMetaData?.meta_Title || 'No Matches found'}
        description={pageMetaData?.meta_Description || ''}
        keywords={pageMetaData?.meta_Keywords || 'Branded Promotional'}
      />
      {cLog('No match found', '404')}
      <PageNotFound />
    </>
  );
};

export { getServerSideProps };

export default ProductListing;
