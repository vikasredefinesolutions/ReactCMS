import { __LocalStorage } from '@constants/global.constant';
import { paths } from '@constants/paths.constant';

export const AddRemoveToCompare = (sku: string) => {
  if (localStorage) {
    const skuList = getSkuList();
    const index = skuList.findIndex((_sku: string) => _sku === sku);
    if (index > -1) {
      skuList.splice(index, 1);
    } else {
      skuList.push(sku);
    }

    localStorage.setItem(
      __LocalStorage.compareProducts,
      JSON.stringify(skuList),
    );
  }
};

export const checkCompare = (sku: string) => {
  if (localStorage) {
    const skuList = getSkuList();
    const index = skuList.indexOf((_sku: string) => _sku === sku);
    if (index) {
      return true;
    }
  }
  return false;
};

export const getCompareLink = () => {
  if (localStorage) {
    const skuList = getSkuList();
    return `${paths.PRODUCT_COMPARE}?SKU=${skuList.toString()}`;
  }
  return '';
};

export const getSkuList = () => {
  const data = localStorage.getItem(__LocalStorage.compareProducts);
  return data ? JSON.parse(data) : [];
};
