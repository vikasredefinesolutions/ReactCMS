import {
  GetlAllProductList,
  GetProductImageOptionList,
} from '@type/productList.type';
import { useEffect, useState } from 'react';

const ProductBoxController = ({
  product,
  colorChangeHandler,
}: {
  product: NonNullable<GetlAllProductList>;
  colorChangeHandler: (
    productid: number | undefined,
    seName: string | undefined,
    color: string | undefined | null,
  ) => void;
}) => {
  const [origin, setOrigin] = useState('');
  const firstImage = product?.moreImages ?? product?.getProductImageOptionList;
  const [currentProduct, setCurrentProduct] = useState<
    GetProductImageOptionList | undefined
  >(firstImage ? firstImage[0] : undefined);
  useEffect(() => {
    colorChangeHandler(
      product.id ?? product?.productId,
      product?.sename ?? product?.productSEName,
      Array.isArray(firstImage)
        ? firstImage[0]?.colorName ?? firstImage[0]?.attributeOptionName
        : null,
    );
    if (window !== undefined) {
      setOrigin(window.location.origin);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCurrentProduct(firstImage ? firstImage[0] : undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  return {
    currentProduct,
    origin,
    setCurrentProduct,
  };
};

export default ProductBoxController;
