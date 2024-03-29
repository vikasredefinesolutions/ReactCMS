import { _GetPageType } from '@type/slug.type';
import { OgTagsData } from 'mock/metatags.mock';
import Head from 'next/head';
import React from 'react';

interface _Props {
  storeName: string | null;
  pageMetaData: _GetPageType | null;
  routeUrl: string;
}
const OgTags: React.FC<_Props> = (props) => {
  const { storeName, pageMetaData, routeUrl } = props;

  return (
    <Head>
      <title>{pageMetaData?.meta_Title}</title>
      <meta
        property='og:description'
        content={`${pageMetaData?.meta_Description}`}
      />
      <meta property='og:url' content={`${routeUrl}`} />
      <meta property='og:locale' content='en_US' />
      <meta property='og:site_name' content={storeName || ''} />
      <meta property='og:latitude' content={OgTagsData.latitude} />
      <meta property='og:type' content='website' />
      <meta property='og:longitude' content={OgTagsData.longitude} />
      <meta property='og:street-address' content={OgTagsData.street_address} />
      <meta property='og:locality' content={OgTagsData.locality} />
      <meta property='og:region' content={OgTagsData.region} />
      <meta property='og:postal-code' content={OgTagsData.postal_code} />
      <meta property='og:country-name' content={OgTagsData.country_name} />
      <link rel='canonical' href={`${routeUrl}`} />
    </Head>
  );
};
export default OgTags;
