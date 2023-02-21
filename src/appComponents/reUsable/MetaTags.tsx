import { _GetPageType } from '@type/slug.type';
import React from 'react';
import OgTags from './OgTags';

import TwitterTags from './TwitterTags';

interface _Props {
  storeName: string | null;
  pageMetaData: _GetPageType | null;
  routepath: string;
}
const Metatags: React.FC<_Props> = (props) => {
  return (
    <>
      <OgTags
        storeName={props.storeName}
        pageMetaData={props.pageMetaData}
        routepath={props.routepath}
      />
      <TwitterTags
        pageMetaData={props.pageMetaData}
        routepath={props.routepath}
      />
    </>
  );
};

export default Metatags;
