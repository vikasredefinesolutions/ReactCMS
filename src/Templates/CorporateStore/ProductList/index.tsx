import { _ProductListProps } from '@type/slug.type';
import ProductList from 'Components/ProductList';
import React from 'react';

interface _props {
  productListing: _ProductListProps | null;
  slug: string;
}
const Corporate_ProductList: React.FC<_props> = (props) => {
  const { productListing, slug } = props;
  return <ProductList pageData={productListing} slug={slug} />;
};

export default Corporate_ProductList;
