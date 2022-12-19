import { _ProductInventoryTransfomed } from '@type/APIs/inventory.res';
import { _ProductColor } from 'definations/APIs/colors.res';
import { _ProductDiscountTable } from 'definations/APIs/discountTable.res';
import {
  _ProductDetails,
  _ProductDoNotExist,
  _ProductsAlike,
  _ProductSEO,
} from 'definations/APIs/productDetail.res';
import { _SizeChartTransformed } from 'definations/APIs/sizeChart.res';
import { conditionalLogV2, __console } from 'helpers/global.console';
import {
  FetchColors,
  FetchDiscountTablePrices,
  FetchInventoryById,
  FetchProductById,
  FetchProductSEOtags,
  FetchSimilartProducts,
  FetchSizeChartById,
} from 'services/product.service';

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// TYPES: JUST FOR  THIS PAGE ----------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

interface _FetchProductDetails {
  details: null | _ProductDetails | _ProductDoNotExist;
  colors: null | _ProductColor[];
  sizes: null | _SizeChartTransformed;
  discount: null | _ProductDiscountTable;
  SEO: null | _ProductSEO;
  inventory: null | _ProductInventoryTransfomed;
  alike: null | _ProductsAlike[];
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// SERVER SIDE FUNCTIONS ---------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const getProductDetailProps = async (payload: {
  storeId: number;
  seName: string;
  isAttributeSaparateProduct: boolean;
}) => {
  return await FetchProductDetails(payload);
};

export const FetchProductDetails = async (payload: {
  storeId: number;
  seName: string;
  isAttributeSaparateProduct: boolean;
}): Promise<_FetchProductDetails> => {
  let productColors: null | _ProductColor[] = null;
  let productDetails: null | _ProductDetails | _ProductDoNotExist = null;
  let productSizeChart: null | _SizeChartTransformed = null;
  let productDiscountTablePrices: null | _ProductDiscountTable = null;
  let productSEOtags: null | _ProductSEO = null;
  let productsAlike: null | _ProductsAlike[] = null;
  let productInventoryList: null | _ProductInventoryTransfomed = null;
  // let productReviews: null;

  try {
    // Request - 1
    productDetails = await FetchProductById({
      seName: payload.seName,
      storeId: payload.storeId,
      productId: 0, // Not required when fetching details by seName
    });

    if (productDetails?.id) {
      // Request - 2,3,4,5 based on 1
      await Promise.allSettled([
        FetchColors({
          productId: productDetails.id,
          storeId: payload.storeId,
          isAttributeSaparateProduct: payload.isAttributeSaparateProduct,
        }),
        FetchSizeChartById(productDetails.id),
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
        FetchSimilartProducts({
          productId: productDetails.id,
          storeId: payload.storeId,
        }),
      ]).then((values) => {
        productColors =
          values[0].status === 'fulfilled' ? values[0].value : null;
        productSizeChart =
          values[1].status === 'fulfilled' ? values[1].value : null;
        productDiscountTablePrices =
          values[2].status === 'fulfilled' ? values[2].value : null;
        productSEOtags =
          values[3].status === 'fulfilled' ? values[3].value : null;
        productsAlike =
          values[4].status === 'fulfilled' ? values[4].value : null;
      });

      // Request - 6 based on 2
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
    conditionalLogV2({
      data: {
        details: productDetails,
        colors: productColors,
        sizes: productSizeChart,
        discount: productDiscountTablePrices,
        SEO: productSEOtags,
        inventory: productInventoryList,
        alike: productsAlike,
      },
      show: __console.productDetails.controller,
      type: 'CONTROLLER',
      name: 'Product Details',
    });
  } catch (error) {
    conditionalLogV2({
      data: error,
      show: __console.allCatch,
      type: 'CATCH',
      name: 'Product Details: Controller - Something went wrong',
    });
  }

  return {
    details: productDetails,
    colors: productColors,
    sizes: productSizeChart,
    discount: productDiscountTablePrices,
    SEO: productSEOtags,
    inventory: productInventoryList,
    alike: productsAlike,
  };
};
