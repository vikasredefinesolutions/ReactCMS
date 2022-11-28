import { _ProductColor } from 'definations/APIs/colors.res';
import {
  _ProductDetails,
  _ProductDoNotExist,
  _ProductDoNotExistTransformed,
} from 'definations/APIs/productDetail.res';
import { highLightError } from 'helpers/global.console';
import { FetchColors, FetchProductById } from 'services/product.service';

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// SERVER SIDE FUNCTIONS ---------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const FetchProductDetails = async (payload: {
  storeId: number;
  productId: number;
  isAttributeSaparateProduct: boolean;
}): Promise<{
  details: null | _ProductDetails | _ProductDoNotExist;
  colors: null | _ProductColor[];
  doNotExist: null | _ProductDoNotExistTransformed;
}> => {
  const expectedProps: {
    productColors: null | _ProductColor[];
    productDetails: null | _ProductDetails | _ProductDoNotExist;
    doNotExist: null | _ProductDoNotExistTransformed;
  } = {
    productColors: null,
    productDetails: null,
    doNotExist: null,
  };

  try {
    expectedProps.productDetails = await FetchProductById({
      // Request - 1
      seName: `""`,
      storeId: payload.storeId,
      productId: payload.productId,
    });

    if (expectedProps.productDetails?.id === null) {
      expectedProps.doNotExist = expectedProps.productDetails.productDoNotExist;
      expectedProps.productDetails = null;
    }

    if (expectedProps.productDetails?.id) {
      expectedProps.productColors = await FetchColors({
        // Request - 2 based on 1
        storeId: payload.storeId,
        isAttributeSaparateProduct: payload.isAttributeSaparateProduct,
        productId: expectedProps.productDetails!.id,
      });
    }
  } catch (error) {
    highLightError({ error, component: `Request Consultation Controller` });
  }

  return {
    details: expectedProps.productDetails,
    colors: expectedProps.productColors,
    doNotExist: expectedProps.doNotExist,
  };
};
