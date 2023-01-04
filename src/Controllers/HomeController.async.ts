import { FetchFeaturedProducts } from '@services/home.service';
import { _FeaturedProduct } from '@type/APIs/storeDetails.res';
import { conditionalLogV2, __console } from 'helpers/global.console';

interface _featuredProducts_ {
  storeId: number;
  brandIds: number[];
  maximumItemsForFetch: number;
}

interface _FetchFeaturedItems {
  products: null | Array<_FeaturedProduct[] | null>;
}

export const fetchFeaturedItems = async ({
  storeId,
  brandIds,
  maximumItemsForFetch,
}: _featuredProducts_): Promise<_FetchFeaturedItems> => {
  let expectedProducts: null | Array<_FeaturedProduct[] | null> = null;

  /*----------------------------------------------------*/
  try {
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

    conditionalLogV2({
      data: expectedProducts,
      show: __console.home.controller,
      type: 'CONTROLLER',
      name: 'Home: fetchFeaturedItems',
    });
  } catch (error) {
    conditionalLogV2({
      data: error,
      show: __console.allCatch,
      type: 'CATCH',
      name: 'Home: fetchFeaturedItems - Something went wrong',
    });
  }

  return {
    products: expectedProducts,
  };
};
