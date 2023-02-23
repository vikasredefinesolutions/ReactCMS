import { _GetPageType } from '@type/slug.type';
import { TwitterTagsData } from 'mock/metatags.mock';
import Head from 'next/head';
import React from 'react';

interface _Props {
  pageMetaData: _GetPageType | null;
  routeUrl: string;
}
const TwitterTags: React.FC<_Props> = (props) => {
  const { pageMetaData, routeUrl } = props;
  return (
    <Head>
      <meta name={`${TwitterTagsData?.tagName}:card`} content='Summary' />
      <meta
        name={`${TwitterTagsData?.tagName}:site`}
        content={`${TwitterTagsData?.tagSite}`}
      />
      <meta
        name={`${TwitterTagsData?.tagName}:description`}
        content={pageMetaData?.meta_Description}
      />
      <meta
        name={`${TwitterTagsData?.tagName}:image`}
        content='https://www.corporategear.com/images/logo.png/'
      />
      <meta
        name={`${TwitterTagsData?.tagName}:title`}
        content={pageMetaData?.meta_Title}
      />
      <meta name={`${TwitterTagsData?.tagName}:url`} content={`${routeUrl}`} />
    </Head>
    //    {metatagsdata.map((tags, index) => {
    //     return (
    //       <React.Fragment key={`${tags}-${{ index }}`}>
    //         <meta name={`${tags?.tagName}:card`} content='Summary' />
    //         <meta name={`${tags?.tagName}:site`} content={`${tags?.tagSite}`} />
    //         <meta
    //           name={`${tags?.tagName}:image`}
    //           content='https://www.corporategear.com/images/logo.png/'
    //         />
    //         <meta
    //           name={`${tags?.tagName}:description`}
    //           content={pageMetaData?.meta_Description}
    //         />
    //         <meta
    //           name={`${tags?.tagName}:title`}
    //           content={pageMetaData?.meta_Title}
    //         />
    //         <meta
    //           name={`${tags?.tagName}:url`}
    //           content={`${routeUrl}`}
    //         />
    //       </React.Fragment>
    //     );
    //   })}
  );
};
export default TwitterTags;
