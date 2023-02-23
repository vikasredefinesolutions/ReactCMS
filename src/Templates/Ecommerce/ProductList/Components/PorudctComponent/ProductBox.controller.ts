import { GetlAllProductList } from '@type/productList.type';
import { useEffect, useState } from 'react';

const ProductBoxController = ({
  product,
  colorChangeHandler,
}: {
  product: GetlAllProductList;
  colorChangeHandler: (
    productid: number | undefined,
    seName: string | undefined,
    color: string | undefined | null,
  ) => void;
}) => {
  const [origin, setOrigin] = useState('');
  const [currentProduct, setCurrentProduct] = useState(
    product.getProductImageOptionList && product.getProductImageOptionList[0],
  );
  useEffect(() => {
    colorChangeHandler(
      product.id,
      product.sename || '',
      product.getProductImageOptionList &&
        product.getProductImageOptionList[0].colorName,
    );
    if (window !== undefined) {
      setOrigin(window.location.origin);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCurrentProduct(
      product.getProductImageOptionList && product.getProductImageOptionList[0],
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  return {
    currentProduct,
    origin,
    setCurrentProduct,
  };
};

export default ProductBoxController;
