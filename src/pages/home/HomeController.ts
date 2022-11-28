import { FetchFeaturedProducts } from '@services/home.service';
import { _FeaturedProduct } from '@type/APIs/storeDetails.res';
import { conditionalLog } from 'helpers/global.console';
import { _showConsoles, __fileNames } from 'show.config';

export const FeaturedProducts = async ({
  storeId,
  brandIds,
  maximumItemsForFetch,
}: {
  storeId: number;
  brandIds: number[];
  maximumItemsForFetch: number;
}): Promise<{ products: null | Array<_FeaturedProduct[] | null> }> => {
  let expectedProducts: null | Array<_FeaturedProduct[] | null> = null;

  const productListToFetch = brandIds.map((brandId) => {
    return FetchFeaturedProducts({
      storeId,
      maximumItemsForFetch,
      brandId: brandId,
    });
  });

  await Promise.allSettled(productListToFetch).then((values) => {
    values.forEach((value, index) => {
      const product = value.status === 'fulfilled' ? value.value : null;
      if (expectedProducts === null) {
        expectedProducts = [product];
      }
      expectedProducts[index] = product;
    });
  });

  conditionalLog({
    show: _showConsoles.home,
    data: expectedProducts,
    type: 'CONTROLLER',
    name: __fileNames.home,
  });

  return {
    products: expectedProducts,
  };
};
