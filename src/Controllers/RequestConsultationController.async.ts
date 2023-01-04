import { _ProductColor } from 'definations/APIs/colors.res';
import {
  _ProductDetails,
  _ProductDoNotExist,
  _ProductsAlike,
  _ProductSEO,
} from 'definations/APIs/productDetail.res';
import { conditionalLogV2, __console } from 'helpers/global.console';
import {
  FetchColors,
  FetchProductById,
  FetchSimilartProducts,
} from 'services/product.service';
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// TYPES: JUST FOR  THIS PAGE ----------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

interface _FetchProductDetails {
  details: null | _ProductDetails | _ProductDoNotExist;
  colors: null | _ProductColor[];
  alike: null | _ProductsAlike[];
  seo: null | _ProductSEO;
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// SERVER SIDE FUNCTIONS ---------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const FetchProductDetails = async (payload: {
  storeId: number;
  productId: number;
  isAttributeSaparateProduct: boolean;
}): Promise<_FetchProductDetails> => {
  const expected: _FetchProductDetails = {
    colors: null,
    details: null,
    alike: null,
    seo: null,
  };

  try {
    expected.details = await FetchProductById({
      // Request - 1
      seName: `""`, // Empty string must be passed.
      storeId: payload.storeId,
      productId: payload.productId,
    });

    if (expected.details?.id) {
      await Promise.allSettled([
        FetchColors({
          // Request - 2 based on 1
          storeId: payload.storeId,
          isAttributeSaparateProduct: payload.isAttributeSaparateProduct,
          productId: expected.details!.id,
        }),
        // Request - 3 based on 1
        FetchSimilartProducts({
          productId: expected.details.id,
          storeId: payload.storeId,
        }),
        // Request - 4 based on 1  ( 'MISSING SeName from product API' )
        // FetchProductSEOtags({
        //   seName: payload.seName,
        //   storeId: payload.storeId,
        // }),
      ]).then((values) => {
        expected.colors =
          values[0].status === 'fulfilled' ? values[0].value : null;
        expected.alike =
          values[1].status === 'fulfilled' ? values[1].value : null;
        // expected.seo =
        //   values[2].status === 'fulfilled' ? values[2].value : null;
      });
    }

    conditionalLogV2({
      data: {
        ...expected,
      },
      show: __console.requestConsultation.controller,
      type: 'CONTROLLER',
      name: 'Request Consultation: FetchProductDetails - Return values',
    });
  } catch (error) {
    conditionalLogV2({
      data: error,
      show: __console.allCatch,
      type: 'CATCH',
      name: 'Request Consultation: Controller - Something went wrong',
    });
  }

  return {
    ...expected,
  };
};
