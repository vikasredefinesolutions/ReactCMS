/* eslint-disable no-unused-vars */
import { LogoList } from '@type/APIs/logo.res';
import { _BrandSEO } from '@type/slug.type';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { _ProductColor } from 'definations/APIs/colors.res';
import { _ProductDiscountTable } from 'definations/APIs/discountTable.res';
import {
  _ProductInventory,
  _ProductInventoryTransfomed,
} from 'definations/APIs/inventory.res';
import {
  _ProductBySku,
  _ProductDetails,
  _ProductDoNotExist,
  _ProductsAlike,
  _ProductSEO,
} from 'definations/APIs/productDetail.res';
import {
  _SizeChart,
  _SizeChartTransformed,
} from 'definations/APIs/sizeChart.res';
import { _Reviews } from 'definations/product.type';
import {
  BrandFilter,
  CategoryFilter,
  FilterApiRequest,
} from 'definations/productList.type';
import { CallAPI } from 'helpers/common.helper';
import {
  conditionalLog,
  conditionalLogV2,
  __console,
} from 'helpers/global.console';
import { _showConsoles } from 'show.config';
import { SendAsyncV2 } from '../utils/axios.util';

export type _ProducDetailAPIs =
  | 'FetchProductsBySKUs'
  | 'FetchSizeChartById'
  | 'FetchDiscountTablePrices'
  | 'FetchSimilartProducts'
  | 'FetchProductSEOtags'
  | 'FetchColors'
  | 'FetchProductById'
  | 'FetchBrandProductList';

export type _ProductDetailService = {
  service: 'productDetails';
  api: _ProducDetailAPIs;
};

export const FetchProductsBySKUs = async (payload: {
  SKUs: string;
  storeId: number;
}): Promise<_ProductBySku[] | null> => {
  const url = `StoreProduct/getstoreproductbyskus/${payload.SKUs}/${payload.storeId}.json`;

  const response = await CallAPI<_ProductBySku[]>({
    name: {
      service: 'productDetails',
      api: 'FetchProductsBySKUs',
    },
    request: {
      url: url,
      method: 'POST',
      data: payload,
    },
  });

  return response;
};

export const FetchProductById = async (payload: {
  seName: string;
  storeId: number;
  productId: number;
}): Promise<_ProductDetails | null | _ProductDoNotExist> => {
  const url = `StoreProduct/getstoreproductbysename/${payload.seName}/${payload.storeId}/${payload.productId}.json`;

  conditionalLogV2({
    data: payload,
    show: __console.productDetails.service.FetchProductById,
    type: 'API-PAYLOAD',
    name: 'FetchProductById',
  });

  try {
    const res = await SendAsyncV2<_ProductDetails>({
      url: url,
      method: 'GET',
    });

    if (res.data === null) {
      conditionalLogV2({
        // @ts-ignore: Unreachable code error
        data: res.otherData,
        show: __console.productDetails.service.FetchProductById,
        type: 'API-RESPONSE',
        name: 'FetchProductById',
      });
      // @ts-ignore: Unreachable code error
      return { id: null, productDoNotExist: res.otherData };
    }

    return res.data;
  } catch (error) {
    conditionalLogV2({
      // @ts-ignore: Unreachable code error
      data: error,
      show: __console.productDetails.service.FetchProductById,
      type: 'API-ERROR',
      name: 'FetchProductById',
    });
    return null;
  }
};

export const FetchReviewsById = async (payload: number) => {
  const url = '/reviews';
  // const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
  //   url: url,
  //   method: "GET",
  // });
  let res = {} as _Reviews;

  return res;
};

export const FetchSizeChartById = async (
  payload: number,
): Promise<_SizeChartTransformed | null> => {
  const url = `StoreProduct/getsizechartbyproductid/${payload}.json`;

  const response = await CallAPI<_SizeChart>({
    name: {
      service: 'productDetails',
      api: 'FetchSizeChartById',
    },
    request: {
      url: url,
      method: 'POST',
      data: payload,
    },
  });

  if (response !== null) {
    const sizeChart: [{ [key: string]: string }] = JSON.parse(
      response.sizeChartView,
    );

    const transformedData: _SizeChartTransformed = {
      ...response,
      sizeChartRange: response.sizeChartRange.split(','),
      sizeChartView: sizeChart[0],
      measurements: response.measurements.split(','),
    };

    return transformedData;
  }

  return null;
};

export const FetchInventoryById = async (payload: {
  productId: number;
  attributeOptionId: number[];
}): Promise<_ProductInventoryTransfomed | null> => {
  const url = `StoreProduct/getproductattributesizes.json`;
  function removeDuplicates(arr: string[]) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  try {
    const res = await SendAsyncV2<_ProductInventory[]>({
      url: url,
      method: 'POST',
      data: payload,
    });

    conditionalLog({
      data: res.data,
      name: 'FetchInventoryById',
      type: 'API',
      show: res.data === null || res.data.length === 0,
    });

    const sizes = payload.attributeOptionId.map((id) => {
      const repeatedSizes = res.data
        .map((int) => {
          if (int.colorAttributeOptionId === id) {
            return int.name;
          }
          return '';
        })
        .filter(Boolean);

      return {
        colorAttributeOptionId: id,
        sizeArr: removeDuplicates(repeatedSizes),
      };
    });

    const transformedData: _ProductInventoryTransfomed = {
      inventory: res.data,
      sizes: sizes,
    };
    return transformedData;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'FetchInventoryById',
      type: 'API',
      show: _showConsoles.services.productDetails,
      error: true,
    });
    return null;
  }
};

export const FetchColors = async ({
  productId,
  storeId,
  isAttributeSaparateProduct,
}: {
  productId: number;
  storeId: number;
  isAttributeSaparateProduct: boolean;
}): Promise<_ProductColor[] | null> => {
  let url = '';
  if (isAttributeSaparateProduct === true) {
    url = `https://redefine-front-staging.azurewebsites.net/StoreProduct/getproductattributecolorbyseparation/${productId}/${storeId}.json`;
  } else {
    url = `StoreProduct/getproductattributecolor/${productId}.json`;
  }

  const response = await CallAPI<_ProductColor[]>({
    name: {
      service: 'productDetails',
      api: 'FetchColors',
    },
    request: {
      url: url,
      method: 'POST',
    },
  });

  return response;
};

export const FetchFiltersJsonByBrand = async (
  filterRequest: FilterApiRequest,
) => {
  const url = `/StoreProductFilter/GetFilterByBrandByCatche.json`;
  const res = await SendAsyncV2<BrandFilter>({
    url: url,
    method: 'POST',
    data: filterRequest,
  });

  return res.data;
};

export const FetchFiltersJsonByCategory = async (
  filterRequest: FilterApiRequest,
) => {
  const url = `/StoreProductFilter/GetFilterByCategoryByCatche.json`;
  const res = await SendAsyncV2<CategoryFilter>({
    url: url,
    method: 'POST',
    data: filterRequest,
  });

  return res.data;
};

export const FetchDiscountTablePrices = async (payload: {
  storeId: number;
  seName: string;
  customerId: number;
  attributeOptionId: number;
}): Promise<_ProductDiscountTable | null> => {
  const url = `StoreProduct/getproductquantitydiscounttabledetail.json`;

  const response = await CallAPI<_ProductDiscountTable>({
    name: {
      service: 'productDetails',
      api: 'FetchDiscountTablePrices',
    },
    request: {
      url: url,
      method: 'POST',
      data: payload,
    },
  });

  return response;
};

export const FetchSimilartProducts = async (payload: {
  storeId: number;
  productId: number;
}): Promise<_ProductsAlike[] | null> => {
  const url = `StoreProduct/getyoumaylikeproducts/${payload.productId}/${payload.storeId}.json`;

  const response = await CallAPI<_ProductsAlike[]>({
    name: {
      service: 'productDetails',
      api: 'FetchSimilartProducts',
    },
    request: {
      url: url,
      method: 'POST',
      data: payload,
    },
  });

  return response;
};

export const fetchProductList = async (storeId: string) => {
  const url = '/StoreProduct/list.json';
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
    data: {
      args: {
        pageIndex: 0,
        pageSize: 6,
        pagingStrategy: 0,
        sortingOptions: [
          {
            field: 'string',
            direction: 0,
            priority: 0,
          },
        ],
        filteringOptions: [
          {
            field: 'string',
            operator: 0,
            value: 'string',
          },
        ],
      },
      storeId: storeId,
    },
  });
  return res;
};

export const FetchProductSEOtags = async ({
  storeId,
  seName,
}: {
  storeId: number;
  seName: string;
}): Promise<_ProductSEO | null> => {
  const url = `StoreProductSeo/GetDetails/${storeId}/${seName}.json`;

  const response = await CallAPI<_ProductSEO>({
    name: {
      service: 'productDetails',
      api: 'FetchProductSEOtags',
    },
    request: {
      url: url,
      method: 'GET',
    },
  });

  return response;
};

export const FetchBrandProductList = async ({
  storeId,
  seName,
}: {
  storeId: number;
  seName: string;
}) => {
  const url = `Brand/getbrandseodetails/${storeId}/${seName}.json`;

  const response = CallAPI<_BrandSEO>({
    name: {
      service: 'productDetails',
      api: 'FetchBrandProductList',
    },
    request: {
      url: url,
      method: 'GET',
    },
  });

  return response;
};

export const getLogoPositionList = async (
  customerId: number,
): Promise<LogoList> => {
  const url = `/StoreProduct/getproductlogolocationdetails/${customerId}.json`;
  const res = await SendAsyncV2<LogoList>({
    url,
    method: 'GET',
  });

  return res.data;
};
