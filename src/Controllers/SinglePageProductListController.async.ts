import {
  FetchAllCategoires,
  FetchFiltersJsonByCategory,
} from '@services/product.service';
import { GetlAllProductList } from '@type/productList.type';

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// TYPES: JUST FOR  THIS PAGE ----------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

interface _CategoryWithProducts {
  id: number;
  name: string;
  items: GetlAllProductList[] | null;
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// SERVER SIDE FUNCTIONS ---------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const FetchAllCategoiresWithRespectiveProducts = async (
  storeID: number,
): Promise<_CategoryWithProducts[] | null> => {
  const categories = await FetchAllCategoires();

  if (!categories) return null;

  const itemsToFetch = categories.map((item) => {
    const filters = {
      storeID: storeID,
      categoryId: item.id,
      customerId: 0,
      filterOptionforfaceteds: [],
    };

    return FetchFiltersJsonByCategory(filters);
  });

  const categoriesWithItems = await Promise.allSettled(itemsToFetch).then(
    (values) =>
      values.map((value, index) => {
        const replaceEmptyArrs = (
          arr: GetlAllProductList[],
        ): GetlAllProductList[] | null => {
          return arr.length > 0 ? arr : null;
        };

        const products =
          value.status === 'fulfilled'
            ? replaceEmptyArrs(value.value.getlAllProductList)
            : null;

        return {
          id: categories[index].id,
          name: categories[index].name,
          items: products,
        };
      }),
  );

  return categoriesWithItems;
};
