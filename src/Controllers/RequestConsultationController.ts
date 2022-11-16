import {
  _ProductDetails,
  _ProductSEO,
} from 'definations/APIs/productDetail.res';
import { _Reviews } from 'definations/product.type';
import { FetchProductById, FetchColors } from 'services/product.service';
import { _ProductColor } from 'definations/APIs/colors.res';
import { _SizeChartTransformed } from 'definations/APIs/sizeChart.res';
import { _ProductDiscountTable } from 'definations/APIs/discountTable.res';
import { highLightError } from 'helpers/common.helper';

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
  const expectedProps: {
    productColors: null | _ProductColor[];
    productDetails: null | _ProductDetails;
  } = {
    productColors: null,
    productDetails: null,
  };

  try {
    expectedProps.productDetails = await FetchProductById({
      // Request - 1
      seName: payload.seName,
      storeId: payload.storeId,
    });

    expectedProps.productColors = await FetchColors({
      // Request - 2
      productId: expectedProps.productDetails!.id,
    });
  } catch (error) {
    highLightError({ error, component: `Request Consultation Controller` });
  }

  return {
    details: expectedProps.productDetails,
    colors: expectedProps.productColors,
  };
};
