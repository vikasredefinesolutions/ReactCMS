/* eslint-disable react-hooks/rules-of-hooks */
import {
  _SlugServerSideProps,
  _SlugServerSide_WentWrong,
  _TopicHomeProps,
} from '@type/slug.type';
import PageNotFound from 'appComponents/reUsable/404';
import SeoHead from 'appComponents/reUsable/SeoHead';
import { getServerSideProps } from 'Components/Slug/getServerSideProps';
import { cLog } from 'helpers/global.console';
import { useActions, useTypedSelector } from 'hooks';
import _ from 'lodash';
import { NextPage } from 'next';
import Home from 'pages/Home';
import { useEffect } from 'react';
import Redefine_ProductDetails from 'Templates/Redefine_ProductDetail';
import Redefine_ProductList from 'Templates/Redefine_ProductList';

const SlugSearch: NextPage<_SlugServerSideProps | _SlugServerSide_WentWrong> = (
  props,
) => {
  if ('error' in props) {
    const { error } = props;
    return <>{error}</>;
  }
  const { updatePageType } = useActions();
  const { page, pageMetaData, _store } = props;
  const { layout: storeLayout } = useTypedSelector((state) => state.store);

  useEffect(() => {
    console.log('alert');
    if (!_.isEmpty(pageMetaData)) {
      updatePageType(pageMetaData);
    }
  }, [pageMetaData]);

  if (!_store || !pageMetaData || !page) {
    cLog('No page data found', '404');
    return <PageNotFound />;
  }
  if (pageMetaData.type === '404') {
    return (
      <>
        <SeoHead
          title={pageMetaData.meta_Title || '404: No Page found'}
          description={pageMetaData.meta_Description || ''}
          keywords={pageMetaData.meta_Keywords || 'Branded Promotional'}
        />
        <PageNotFound />
      </>
    );
  }

  if (pageMetaData?.type === 'collection') {
    return (
      <>
        <SeoHead
          title={pageMetaData.meta_Title || 'Collection'}
          description={pageMetaData.meta_Description || ''}
          keywords={pageMetaData.meta_Keywords || 'Branded Promotional'}
        />
        <>Collection Page would come here</>
      </>
    );
  }

  if (pageMetaData?.type === 'product' && page.productDetails && _store) {
    let storeCode = _store.storeCode;
    if (storeLayout !== null) {
      storeCode = storeLayout;
    }

    return (
      <Redefine_ProductDetails
        {...page.productDetails}
        storeCode={storeCode}
        storeTypeId={_store.storeTypeId}
      />
    );
  }

  if (pageMetaData?.type === 'topic') {
    const tprops: _TopicHomeProps = {
      pageData: page.topicHome,
      pageType: pageMetaData.type,
      slug: pageMetaData.slug,
    };

    return (
      <>
        <SeoHead
          title={pageMetaData?.meta_Title ? pageMetaData.meta_Title : 'Home'}
          description={
            pageMetaData?.meta_Description ? pageMetaData.meta_Description : ''
          }
          keywords={
            pageMetaData?.meta_Keywords
              ? pageMetaData.meta_Keywords
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
        <Redefine_ProductList
          {...{
            productListing: listing,
            slug: pageMetaData.slug,
            seType: pageMetaData?.type,
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
export default SlugSearch;
