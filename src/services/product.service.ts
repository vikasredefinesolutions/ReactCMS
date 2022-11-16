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
  _ProductSEO,
} from 'definations/APIs/productDetail.res';
import {
  _SizeChart,
  _SizeChartTransformed,
} from 'definations/APIs/sizeChart.res';
import { _Reviews } from 'definations/product.type';
import { BrandFilter, FilterApiRequest } from 'definations/productList.type';
import { SendAsyncV2 } from '../utils/axios.util';

export const FetchProductById = async (payload: {
  seName: string;
  storeId: number;
}): Promise<_ProductDetails> => {
  const url = `StoreProduct/getstoreproductbysename/${payload.seName}/${payload.storeId}.json`;

  const res = await SendAsyncV2<_ProductDetails>({
    url: url,
    method: 'GET',
  });

  return res.data;
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
): Promise<_SizeChartTransformed> => {
  const url = `StoreProduct/getsizechartbyproductid/${payload}.json`;
  const res = await SendAsyncV2<_SizeChart>({
    url: url,
    method: 'GET',
  });

  const sizeChart: [{ [key: string]: string }] = JSON.parse(
    res.data.sizeChartView,
  );

  const transformedData: _SizeChartTransformed = {
    ...res.data,
    sizeChartRange: res.data.sizeChartRange.split(','),
    sizeChartView: sizeChart[0],
    measurements: res.data.measurements.split(','),
  };

  return transformedData;
};

export const FetchInventoryById = async (payload: {
  productId: number;
  attributeOptionId: number[];
}): Promise<_ProductInventoryTransfomed> => {
  const url = `StoreProduct/getproductattributesizes.json`;

  const res = await SendAsyncV2<_ProductInventory[]>({
    url: url,
    method: 'POST',
    data: payload,
  });

  function removeDuplicates(arr: string[]) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  const transformedData: _ProductInventoryTransfomed = {
    inventory: res.data,
    sizes: removeDuplicates(res.data.map((int) => int.name)),
  };

  return transformedData;
};

export const FetchColors = async ({
  productId,
}: {
  productId: number;
}): Promise<_ProductColor[]> => {
  const url = `StoreProduct/getproductattributecolor/${productId}.json`;

  const res = await SendAsyncV2<_ProductColor[]>({
    url: url,
    method: 'POST',
  });

  return res.data;
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
}): Promise<_ProductDiscountTable> => {
  const url = `StoreProduct/getproductquantitydiscounttabledetail.json`;

  const res = await SendAsyncV2<_ProductDiscountTable>({
    url: url,
    method: 'POST',
    data: payload,
  });

  return res.data;
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
}): Promise<_ProductSEO> => {
  const url = `StoreProductSeo/GetDetails/${storeId}/${seName}.json`;
  const res = await SendAsyncV2<_ProductSEO>({
    url: url,
    method: 'GET',
  });

  return res.data;
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
