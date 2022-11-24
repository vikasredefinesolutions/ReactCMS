import { GetlAllProductList } from '@type/productList.type';
import { AddRemoveToCompare, getSkuList } from 'helpers/compare.helper';
import { useState, useEffect } from 'react';

const ProductBoxController = ({
  product,
  colorChangeHandler,
}: {
  product: GetlAllProductList;
  colorChangeHandler: (
    productid: number,
    seName: string,
    color: string,
  ) => void;
}) => {
  const [origin, setOrigin] = useState('');
  const [currentProduct, setCurrentProduct] = useState(
    product.getProductImageOptionList[0],
  );
  useEffect(() => {
    colorChangeHandler(
      product.id,
      product.sename || '',
      product.getProductImageOptionList[0].colorName,
    );
    if (window !== undefined) {
      setOrigin(window.location.origin);
    }
  }, []);

  useEffect(() => {
    setCurrentProduct(product.getProductImageOptionList[0]);
  }, [product]);

  

  return {
    currentProduct,
    origin,
    setCurrentProduct
  };
};

export default ProductBoxController;
