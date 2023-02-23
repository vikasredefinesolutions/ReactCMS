import { _GetPageType } from '@type/slug.type';
import React, { useEffect, useState } from 'react';
import OgTags from './OgTags';
import TwitterTags from './TwitterTags';

interface _Props {
  storeName: string | null;
  pageMetaData: _GetPageType | null;
  routepath: string;
}
const Metatags: React.FC<_Props> = (props) => {
  const [routeUrl, setRouteUrl] = useState<string>('');
  useEffect(() => {
    setRouteUrl(window.location.href);
  }, [props.routepath]);
  return (
    <>
      <OgTags
        storeName={props.storeName}
        pageMetaData={props.pageMetaData}
        routeUrl={routeUrl}
      />
      <TwitterTags pageMetaData={props.pageMetaData} routeUrl={routeUrl} />
    </>
  );
};

export default Metatags;
