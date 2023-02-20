import { _GetPageType } from '@type/slug.type';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import OgTags from './OgTags';

import TwitterTags from './TwitterTags';

interface _Props {
  storeName: string | null;
  pageMetaData: _GetPageType | null;
}
const Metatags: React.FC<_Props> = (props) => {
  const router = useRouter();

  return (
    <Head>
      <OgTags
        storeName={props.storeName}
        pageMetaData={props?.pageMetaData}
        routepath={router.asPath}
      />
      <TwitterTags
        pageMetaData={props?.pageMetaData}
        routepath={router.asPath}
      />
    </Head>
  );
};

export default Metatags;
