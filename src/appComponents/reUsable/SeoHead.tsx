import Head from 'next/head';
import React from 'react';

interface _props {
  title: string;
  keywords: string;
  description: string;
}

const SeoHead: React.FC<_props> = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} key="desc" />
      <meta name="keywords" content={props.keywords} />
    </Head>
  );
};

export default SeoHead;
