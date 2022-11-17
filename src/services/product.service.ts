/* eslint-disable no-unused-vars */
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { _ProductColor } from 'definations/APIs/colors.res';
import { _ProductDiscountTable } from 'definations/APIs/discountTable.res';
import {
  _ProductInventory,
  _ProductInventoryTransfomed,
} from 'definations/APIs/inventory.res';
import {
  _ProductDetails,
  _ProductDoNotExist,
  _ProductSEO,
} from 'definations/APIs/productDetail.res';
import {
  _SizeChart,
  _SizeChartTransformed,
} from 'definations/APIs/sizeChart.res';
import { _Reviews } from 'definations/product.type';
import { BrandFilter, FilterApiRequest } from 'definations/productList.type';
import { conditionalLog } from 'helpers/global.console';
import { SendAsyncV2 } from '../utils/axios.util';

export const FetchProductById = async (payload: {
  seName: string;
  storeId: number;
}): Promise<_ProductDetails | null | _ProductDoNotExist> => {
  const url = `StoreProduct/getstoreproductbysename/${payload.seName}/${payload.storeId}.json`;

  try {
    const res = await SendAsyncV2<_ProductDetails>({
      url: url,
      method: 'GET',
    });

    if (res.data === null) {
      conditionalLog({
        // @ts-ignore: Unreachable code error
        data: res.otherData,
        name: 'FetchProductById',
        type: 'API',
        show: res.data === null,
      });
      // @ts-ignore: Unreachable code error
      return { id: null, productDoNotExist: res.otherData };
    }

    return res.data;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'FetchProductById',
      type: 'API',
      show: true,
      error: true,
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

  try {
    const res = await SendAsyncV2<_SizeChart>({
      url: url,
      method: 'GET',
    });

    conditionalLog({
      data: res.data,
      name: 'FetchSizeChartById',
      type: 'API',
      show: res.data === null,
    });

    const sizeChart: [{ [key: string]: string }] = JSON.parse(
      res.data?.sizeChartView,
    );

    const transformedData: _SizeChartTransformed = {
      ...res.data,
      sizeChartRange: res.data.sizeChartRange.split(','),
      sizeChartView: sizeChart[0],
      measurements: res.data.measurements.split(','),
    };

    return transformedData;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'FetchSizeChartById',
      type: 'API',
      show: true,
      error: true,
    });
    return null;
  }
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

    const transformedData: _ProductInventoryTransfomed = {
      inventory: res.data,
      sizes: removeDuplicates(res.data.map((int) => int.name)),
    };
    return transformedData;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'FetchInventoryById',
      type: 'API',
      show: true,
      error: true,
    });
    return null;
  }
};

export const FetchColors = async ({
  productId,
}: {
  productId: number;
}): Promise<_ProductColor[] | null> => {
  const url = `StoreProduct/getproductattributecolor/${productId}.json`;

  try {
    const res = await SendAsyncV2<_ProductColor[]>({
      url: url,
      method: 'POST',
    });

    conditionalLog({
      data: res.data,
      name: 'FetchColors',
      type: 'API',
      show: res.data === null,
    });

    return res.data;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'FetchColors',
      type: 'API',
      show: true,
      error: true,
    });
    return null;
  }
};

export const FetchFiltersJsonByBrand = async (
  filterRequest: FilterApiRequest,
) => {
  const url = `/StoreProductFilter/GetFilterByBrand.json`;
  const res = await SendAsyncV2<BrandFilter>({
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

  try {
    const res = await SendAsyncV2<_ProductDiscountTable>({
      url: url,
      method: 'POST',
      data: payload,
    });

    conditionalLog({
      data: res.data,
      name: 'FetchDiscountTablePrices',
      type: 'API',
      show: res.data === null,
    });

    return res.data;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'FetchDiscountTablePrices',
      type: 'API',
      show: true,
      error: true,
    });

    return null;
  }
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

  try {
    const res = await SendAsyncV2<_ProductSEO>({
      url: url,
      method: 'GET',
    });

    conditionalLog({
      data: res.data,
      name: 'FetchProductSEOtags',
      type: 'API',
      show: res.data === null,
    });

    return res.data;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'FetchProductSEOtags',
      type: 'API',
      show: true,
      error: true,
    });

    return null;
  }
};

export const FetchBrandProductList = async ({
  storeId,
  seName,
}: {
  storeId: number;
  seName: string;
}) => {
  const url = `Brand/getbrandseodetails/${storeId}/${seName}.json`;
  const res = await SendAsyncV2<_ProductSEO>({
    url: url,
    method: 'GET',
  });

  return res.data;
};
