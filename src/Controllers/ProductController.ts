import {
  _ProductDetails,
  _ProductSEO,
} from 'definations/APIs/productDetail.res';
import { _Reviews } from 'definations/product.type';
import * as ProductServices from 'services/product.service';
import { _ProductColor } from 'definations/APIs/colors.res';
import { _SizeChartTransformed } from 'definations/APIs/sizeChart.res';
import { _ProductDiscountTable } from 'definations/APIs/discountTable.res';

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// SERVER SIDE FUNCTIONS ---------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const FetchProductDetails = async (payload: {
  storeId: number;
  seName: string;
}): Promise<{
  details: null | _ProductDetails;
  colors: null | _ProductColor[];
  sizes: null | _SizeChartTransformed;
  discount: null | _ProductDiscountTable;
  SEO: null | _ProductSEO;
}> => {
  let productColors: null | _ProductColor[] = null;
  let productDetails: null | _ProductDetails = null;
  let productSizeChart: null | _SizeChartTransformed = null;
  let productDiscountTablePrices: null | _ProductDiscountTable = null;
  let productSEOtags: null | _ProductSEO = null;
  // let productInventoryList: null;
  // let productReviews: null;
  // let productAlikes: null;

  try {
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
      seName: payload.seName,
      storeId: payload.storeId,
      customerId: 28,
      attributeOptionId: 1380,
    }).then((discount) => (productDiscountTablePrices = discount));

    // Request - 5
    await ProductServices.FetchProductSEOtags({
      seName: payload.seName,
      storeId: payload.storeId,
    }).then((seo) => (productSEOtags = seo));

    // Request - 6
    // await ProductServices.FetchInventoryById({productId: productDetails!.id, attributeOptionId: [color.attributeOptionId]})

    // Request - 7
    // await ProductServices. ---> Fetch Product Reviews
  } catch (error) {
    console.log('Error: Product Controller => ', error);
  }

  return {
    details: productDetails,
    colors: productColors,
    sizes: productSizeChart,
    discount: productDiscountTablePrices,
    SEO: productSEOtags,
  };
};
