import { _ProductDetailsTransformed } from 'definations/APIs/productDetail.res';
import { _Reviews } from 'definations/product.type';
import * as ProductServices from 'services/product.service';
import { _ProductColor } from 'definations/APIs/colors.res';
import { _SizeChartTransformed } from 'definations/APIs/sizeChart.res';
import { _ProductDiscountTable } from 'definations/APIs/discountTable.res';

//////////////////////////////////////////////////////////////////////
//////// SERVER SIDE FUNCTIONS ---------------------------------------
//////////////////////////////////////////////////////////////////////

export const FetchProductDetails = async (payload: {
  storeId: number;
  seName: string;
}): Promise<{
  details: null | _ProductDetailsTransformed;
  colors: null | _ProductColor[];
  sizes: null | _SizeChartTransformed;
  discount: null | _ProductDiscountTable;
}> => {
  console.log('store,sot', payload.storeId, payload.seName);
  let productColors: null | _ProductColor[] = null;
  let productDetails: null | _ProductDetailsTransformed = null;
  let productSizeChart: null | _SizeChartTransformed = null;
  let productDiscountTablePrices: null | _ProductDiscountTable = null;
  // let productInventoryList: null;
  // let productReviews: null;
  // let productAlikes: null;

  // Request - 1
  await ProductServices.FetchProductById({
    seName: payload.seName,
    storeId: payload.storeId,
  }).then((res) => {
    productDetails = { ...res };
  });

  // Request - 2
  await ProductServices.FetchColors({
    productId: productDetails!.id,
  }).then((colors) => (productColors = colors));

  // Request - 3
  await ProductServices.FetchSizeChartById(productDetails!.id).then(
    (sizeChart) => (productSizeChart = sizeChart),
  );

  // Request - 4
  await ProductServices.FetchDiscountTablePrices({
    storeId: 4,
    seName: 'Nike-Men-s-Club-Fleece-Sleeve-Swoosh-Pullover-Hoodie',
    customerId: 28,
    attributeOptionId: 1380,
  }).then((discount) => (productDiscountTablePrices = discount));

  // await ProductServices.FetchInventoryById({productId: productDetails!.id, attributeOptionId: [color.attributeOptionId]})

  return {
    details: productDetails,
    colors: productColors,
    sizes: productSizeChart,
    discount: productDiscountTablePrices,
  };
};
