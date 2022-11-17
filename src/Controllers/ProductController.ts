import {
  _ProductDetails,
  _ProductDoNotExist,
  _ProductSEO,
} from 'definations/APIs/productDetail.res';
import { _Reviews } from 'definations/product.type';
import {
  FetchColors,
  FetchDiscountTablePrices,
  FetchInventoryById,
  FetchSizeChartById,
  FetchProductById,
  FetchProductSEOtags,
} from 'services/product.service';
import { _ProductColor } from 'definations/APIs/colors.res';
import { _SizeChartTransformed } from 'definations/APIs/sizeChart.res';
import { _ProductDiscountTable } from 'definations/APIs/discountTable.res';
import { _ProductInventoryTransfomed } from '@type/APIs/inventory.res';
import { highLightError, highLightResponse } from 'helpers/common.helper';
import { _showConsoles, __fileNames } from 'show.config';
import { conditionalLog } from 'helpers/global.console';

export const getProductDetailProps = async (payload: {
  storeId: number;
  seName: string;
}) => {
  return await FetchProductDetails(payload);
};

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// SERVER SIDE FUNCTIONS ---------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const FetchProductDetails = async (payload: {
  storeId: number;
  seName: string;
}): Promise<{
  details: null | _ProductDetails | _ProductDoNotExist;
  colors: null | _ProductColor[];
  sizes: null | _SizeChartTransformed;
  discount: null | _ProductDiscountTable;
  SEO: null | _ProductSEO;
  inventory: null | _ProductInventoryTransfomed;
  doNotExist: null;
}> => {
  let productColors: null | _ProductColor[] = null;
  let productDetails: null | _ProductDetails | _ProductDoNotExist = null;
  let productSizeChart: null | _SizeChartTransformed = null;
  let productDiscountTablePrices: null | _ProductDiscountTable = null;
  let productSEOtags: null | _ProductSEO = null;
  let productInventoryList: null | _ProductInventoryTransfomed = null;
  let doNotExist: null = null;
  // let productReviews: null;
  // let productAlikes: null;

  try {
    // Request - 1
    productDetails = await FetchProductById({
      seName: payload.seName,
      storeId: payload.storeId,
    });

    if (productDetails?.id) {
      // Request - 2,3,4,5
      await Promise.allSettled([
        FetchColors({
          productId: productDetails!.id,
        }),
        FetchSizeChartById(productDetails!.id),
        FetchDiscountTablePrices({
          seName: payload.seName,
          storeId: payload.storeId,
          customerId: 28,
          attributeOptionId: 1380,
        }),
        FetchProductSEOtags({
          seName: payload.seName,
          storeId: payload.storeId,
        }),
      ]).then((values) => {
        highLightResponse({
          dataToShow: values,
          component: 'Product: All settled',
        });
        productColors =
          values[0].status === 'fulfilled' ? values[0].value : null;
        productSizeChart =
          values[1].status === 'fulfilled' ? values[1].value : null;
        productDiscountTablePrices =
          values[2].status === 'fulfilled' ? values[2].value : null;
        productSEOtags =
          values[3].status === 'fulfilled' ? values[3].value : null;
      });

      // Request - 6
      if (productColors !== null) {
        productColors;
        const allColorAttributes = (productColors as _ProductColor[]).map(
          (color) => color.attributeOptionId,
        );

        productInventoryList = await FetchInventoryById({
          productId: productDetails!.id,
          attributeOptionId: allColorAttributes,
        });
      }
    }

    // Request - 7
    // await  ---> Fetch Product Reviews
    conditionalLog({
      data: {
        details: productDetails,
        colors: productColors,
        sizes: productSizeChart,
        discount: productDiscountTablePrices,
        SEO: productSEOtags,
        inventory: productInventoryList,
      },
      type: 'CONTROLLER',
      name: __fileNames.productDetails,
      show: _showConsoles.productDetails,
    });
  } catch (error) {
    highLightError({ error, component: `Product Controller` });
  }

  return {
    doNotExist: null,
    details: productDetails,
    colors: productColors,
    sizes: productSizeChart,
    discount: productDiscountTablePrices,
    SEO: productSEOtags,
    inventory: productInventoryList,
  };
};
