import { _CompareProducts } from '@type/compare';
import React from 'react';
import Ecommerce_CompareProduct from 'Templates/Ecommerce/CompareProduct';

interface _props {
  products: _CompareProducts | null;
}

const Corporate_CompareProduct: React.FC<_props> = (props) => {
  return <Ecommerce_CompareProduct {...props} />;
};

export default Corporate_CompareProduct;
