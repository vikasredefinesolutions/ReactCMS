import { GetServerSideProps } from 'next';
import React from 'react';

interface _props {
  ids: string[];
}

const CompareProduct: React.FC<_props> = () => {
  return <div>CompareProduct</div>;
};

export default CompareProduct;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const productIds = [];

  if (params) {
    const ids = params.ids;
  }

  return {
    props: {
      ids: ['23'],
    },
  };
};
