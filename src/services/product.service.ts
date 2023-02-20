/* eslint-disable no-unused-vars */
import { CategoriesByPid } from '@type/APIs/category.res';
import { LogoListPosition } from '@type/APIs/logo.res';
import { _BrandSEO } from '@type/slug.type';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { _ProductColor } from 'definations/APIs/colors.res';
import { _ProductDiscountTable } from 'definations/APIs/discountTable.res';
import {
  _ProductInventory,
  _ProductInventoryTransfomed,
} from 'definations/APIs/inventory.res';
import {
  _FetchProductsRecentlyViewedPayload,
  _FetchTagsName,
  _LogoLocation,
  _ProductBySku,
  _ProductDetails,
  _ProductDoNotExist,
  _ProductsAlike,
  _ProductSEO,
  _ProductsRecentlyViewed,
  _ProductsRecentlyViewedPayload,
  _ProductsRecentlyViewedResponse,
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
import { conditionalLogV2, __console } from 'helpers/global.console';
import { __constant } from 'page.config';
import { SendAsyncV2 } from '../utils/axios.util';

export type _ProducDetailAPIs =
  | 'FetchProductsBySKUs'
  | 'FetchSizeChartById'
  | 'FetchDiscountTablePrices'
  | 'FetchSimilartProducts'
  | 'FetchProductSEOtags'
  | 'FetchColors'
  | 'FetchProductById'
  | 'FetchInventoryById'
  | 'FetchBrandProductList'
  | 'FetchProductsTagsName'
  | 'FetchLogoLocationByProductId';

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

export const FetchLogoLocationByProductId = async (payload: {
  productId: number;
}): Promise<_LogoLocation | null> => {
  const url = `StoreProduct/getproductlogolocationdetails/${payload.productId}.json`;

  const response = await CallAPI<_LogoLocation>({
    name: {
      service: 'productDetails',
      api: 'FetchLogoLocationByProductId',
    },
    request: {
      url: url,
      method: 'GET',
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
      method: 'GET',
    },
  });

  // const response = await SendAsyncV2<_SizeChart>({
  //e   url: url,
  //   mthod: 'GET',
  //   data: payload,
  // });

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

  const response = await CallAPI<_ProductInventory[]>({
    name: {
      service: 'productDetails',
      api: 'FetchInventoryById',
    },
    request: {
      url: url,
      method: 'POST',
      data: payload,
    },
  });

  if (response === null) {
    return null;
  }

  const sizes = payload.attributeOptionId.map((id) => {
    const repeatedSizes = response
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
    inventory: response,
    sizes: sizes,
  };
  return transformedData;
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

interface CategoryItem {
  createdName: string;
  modifiedName: string;
  id: number;
  name: string;
  description: string;
  collectionImageURl: string;
  recStatus: string;
  createdDate: Date;
  createdBy: number;
  modifiedDate: Date;
  modifiedBy: number;
  rowVersion: string;
  location: Location;
  ipAddress: string;
  macAddress: string;
}

interface _t_CategoryItem {
  id: number;
  name: string;
}

export const FetchAllCategoires = async (): Promise<
  _t_CategoryItem[] | null
> => {
  const url =
    'https://redefine-admin-beta.redefinecommerce.io/Category/list.json';

  const payload = {
    args: {
      pageIndex: 0,
      pageSize: 0,
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
  };

  const headers = {
    Authorization: `Bearer ${__constant._itemsList.token}`,
  };

  try {
    const response: CategoryItem[] = await axios
      .post(url, payload, { headers })
      .then((res) => res.data.data.items);

    if (!response) {
      return null;
    }

    const transformedResponse: _t_CategoryItem[] = response.map(
      (categoryItem) => ({
        id: categoryItem.id,
        name: categoryItem.name,
      }),
    );

    return transformedResponse;
  } catch (error) {
    conditionalLogV2({
      data: error,
      name: `ProductList - FetchAllCategoires`,
      type: 'API-ERROR',

      show: true,
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
): Promise<LogoListPosition> => {
  const url = `/StoreProduct/getproductlogolocationdetails/${customerId}.json`;
  const res = await SendAsyncV2<LogoListPosition>({
    url,
    method: 'GET',
  });

  return res.data;
};

export const fetchCategoryByproductId = async (
  productId: number,
  storeId: number,
): Promise<CategoriesByPid> => {
  const url = `/Category/getcategorysbyproductid/${storeId}/${productId}.json`;
  const res = await SendAsyncV2<CategoriesByPid>({
    url,
    method: 'GET',
  });

  return res.data;
};

export const fetchCategoryByCategoryId = async (
  catId: number,
  storeId: number,
): Promise<CategoriesByPid> => {
  const url = `/Category/getcategorypathbycategoryid/${storeId}/${catId}.json`;
  const res = await SendAsyncV2<CategoriesByPid>({
    url,
    method: 'GET',
  });

  return res.data;
};

export const InsertProductRecentlyViewed = async (
  payload: _ProductsRecentlyViewedPayload,
): Promise<_ProductsRecentlyViewed | null> => {
  const url = `StoreProductRecentlyViewed/insertproductrecentlyview.json`;
  try {
    const res = await SendAsyncV2<_ProductsRecentlyViewed>({
      url: url,
      method: 'POST',
      data: payload,
    });
    return res.data;
  } catch (error) {
    return null;
  }
};

export const FetchProductRecentlyViewed = async (
  payload: _FetchProductsRecentlyViewedPayload,
): Promise<_ProductsRecentlyViewedResponse[]> => {
  const url = `StoreProductRecentlyViewed/getproductsrecentlyview.json`;

  const res = await SendAsyncV2<_ProductsRecentlyViewedResponse[]>({
    url: url,
    method: 'POST',
    data: payload,
  });
  return res.data;
};

export const FetchTagsName = async (
  productId: number,
): Promise<_FetchTagsName[] | null> => {
  const url = `StoreProduct/getproducttagimages/${productId}.json`;

  const response = await CallAPI<_FetchTagsName[]>({
    name: {
      service: 'productDetails',
      api: 'FetchProductsTagsName',
    },
    request: {
      url: url,
      method: 'GET',
    },
  });

  return response;
};
