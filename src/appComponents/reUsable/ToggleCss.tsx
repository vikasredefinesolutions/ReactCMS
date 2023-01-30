import Head from 'next/head';
import React from 'react';

interface _props {
  style: string;
}

const ToogleCss: React.FC<_props> = (props) => {

  return (
    <Head>
        <link rel="stylesheet" href={`http://ystore.us/HTML/RedefineCommerce/Ecom-front/${props.style}/main.css`} />
    </Head>
  );
};

export default ToogleCss;
