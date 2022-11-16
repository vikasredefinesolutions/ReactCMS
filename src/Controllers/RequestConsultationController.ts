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
}> => {
  let productColors: null | _ProductColor[] = null;
  let productDetails: null | _ProductDetails = null;

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
  } catch (error) {
    console.log('Error: Request Consultation Controller => ', error);
  }

  return {
    details: productDetails,
    colors: productColors,
  };
};
