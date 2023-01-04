import {
  FetchColors,
  FetchInventoryById,
  FetchProductsBySKUs,
} from '@services/product.service';
import { _ProductColor } from '@type/APIs/colors.res';
import { _ProductInventoryTransfomed } from '@type/APIs/inventory.res';
import { _ProductBySku } from '@type/APIs/productDetail.res';
import { conditionalLog, highLightError } from 'helpers/global.console';
import { _showConsoles, __fileNames } from 'show.config';

export const FetchProductsDetail = async (params: {
  skus: string;
  storeId: number;
  isAttributeSaparateProduct: boolean;
}): Promise<{
  details: _ProductBySku[] | null;
  colors: Array<_ProductColor[] | null> | null;
  inventory: Array<_ProductInventoryTransfomed | null> | null;
}> => {
  const expectedProps: {
    productsDetail: _ProductBySku[] | null;
    productsColor: Array<_ProductColor[] | null> | null;
    productInventory: Array<_ProductInventoryTransfomed | null> | null;
  } = {
    productsDetail: null,
    productsColor: null,
    productInventory: null,
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
            productId: product.productId,
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

      const sizesToFetch = await expectedProps.productsColor!.map(
        (color, index) => {
          const attributeOptionIds = (color &&
            color.map((clr) => clr.attributeOptionId)) || [0];

          return FetchInventoryById({
            productId:
              (expectedProps.productsDetail &&
                expectedProps.productsDetail[index].productId) ||
              0,
            attributeOptionId: [...attributeOptionIds],
          });
        },
      );

      await Promise.allSettled(sizesToFetch).then((values) =>
        values.forEach((value, index) => {
          const inventory = value.status === 'fulfilled' ? value.value : null;
          if (expectedProps.productInventory === null) {
            expectedProps.productInventory = [inventory];
          }
          expectedProps.productInventory[index] = inventory;
        }),
      );
    }
  } catch (error) {
    highLightError({ error, component: `Compare Products Controller` });
  }

  conditionalLog({
    show: _showConsoles.compareProducts,
    data: expectedProps,
    type: 'CONTROLLER',
    name: __fileNames.compareProducts,
  });

  return {
    details: expectedProps.productsDetail,
    colors: expectedProps.productsColor,
    inventory: expectedProps.productInventory,
  };
};
