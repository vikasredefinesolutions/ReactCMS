import { FetchColors, FetchProductsBySKUs } from '@services/product.service';
import { _FetchColors, _ProductColor } from '@type/APIs/colors.res';
import { _ProductBySku } from '@type/APIs/productDetail.res';
import { highLightError } from 'helpers/common.helper';

export const FetchProductsDetail = async (params: {
  skus: string;
  storeId: number;
  isAttributeSaparateProduct: boolean;
}): Promise<{
  details: _ProductBySku[] | null;
  colors: Array<_ProductColor[] | null> | null;
}> => {
  const expectedProps: {
    productsDetail: _ProductBySku[] | null;
    productsColor: null | Array<_ProductColor[] | null>;
  } = {
    productsDetail: null,
    productsColor: null,
  };

  try {
    expectedProps.productsDetail = await FetchProductsBySKUs({
      storeId: params.storeId,
      SKUs: params.skus,
    });

    if (
      expectedProps.productsDetail &&
      expectedProps.productsDetail.length > 0
    ) {
      const colorsToFetch = await expectedProps.productsDetail!.map(
        (product) => {
          return FetchColors({
            productId: product.id,
            storeId: params.storeId,
            isAttributeSaparateProduct: params.isAttributeSaparateProduct,
          });
        },
      );

      await Promise.allSettled(colorsToFetch).then((values) =>
        values.forEach((value, index) => {
          const colors = value.status === 'fulfilled' ? value.value : null;
          if (expectedProps.productsColor === null) {
            expectedProps.productsColor = [colors];
          }
          expectedProps.productsColor[index] = colors;
        }),
      );
    }
  } catch (error) {
    highLightError({ error, component: `Compare Products Controller` });
  }

  return {
    details: expectedProps.productsDetail,
    colors: expectedProps.productsColor,
  };
};
