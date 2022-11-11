import { fetchProductList } from 'services/product.service';

export const fetchProducts = async (storeId: string) => {
  try {
    const store = await fetchProductList(storeId);
    return { store };
  } catch (error) {
    throw new Error('No store found!!!');
  }
};
