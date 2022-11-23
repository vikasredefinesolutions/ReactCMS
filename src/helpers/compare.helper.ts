export const AddRemoveToCompare = (sku: number) => {
  if (localStorage) {
    const skuList = getSkuList();
    const index = skuList.findIndex((_sku: number) => _sku === sku);
    console.log(index);
    if (index > -1) {
      skuList.splice(index, 1);
    } else {
      skuList.push(sku);
    }

    localStorage.setItem('compareList', JSON.stringify(skuList));
  }
};

export const checkCompare = (sku: number) => {
  if (localStorage) {
    const skuList = getSkuList()
    const index = skuList.indexOf((_sku: number) => _sku === sku);
    if (index) {
      return true;
    }
  }
  return false;
};

export const getCompareLink = () => {
  if (localStorage) {
    const skuList = getSkuList()
    return `/itempage/Productcomapre?SKU=${skuList.toString()}`;
  }
  return '';
};

export const getSkuList = () => {
  const data = localStorage.getItem('compareList');
  return data ? JSON.parse(data) : [];
}