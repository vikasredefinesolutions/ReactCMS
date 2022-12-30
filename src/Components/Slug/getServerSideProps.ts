import { __Error } from '@constants/global.constant';
import { getPageComponents } from '@services/home.service';
import {
  FetchFiltersJsonByBrand,
  FetchFiltersJsonByCategory,
} from '@services/product.service';
import { getPageType } from '@services/slug.service';
import { _ProductDetailsProps } from '@type/APIs/productDetail.res';
import { _FeaturedProduct } from '@type/APIs/storeDetails.res';
import { BrandFilter, CategoryFilter } from '@type/productList.type';

import {
  Filter,
  FilterOption,
  Product,
  _BrandSEO,
  _GetPageType,
  _ProductListProps,
  _SlugServerSideProps,
  _SlugServerSide_WentWrong,
} from '@type/slug.type';
import * as HomeController from 'Controllers/HomeController';
import { getProductDetailProps } from 'Controllers/ProductController';
import { Redirect } from 'Guard/AuthGuard';

import { extractSlugName } from 'helpers/common.helper';
import {
  conditionalLogV2,
  highLightError,
  __console,
} from 'helpers/global.console';
import { GetServerSideProps } from 'next';
import { __constant } from 'page.config';
import { _globalStore } from 'store.global';

export interface _ExpectedSlugProps {
  store: {
    storeId: null | number;
    isAttributeSaparateProduct: boolean;
  };
  pageMetaData: _GetPageType | null;
  page: {
    productDetails: _ProductDetailsProps | null;
    productListing: _ProductListProps | null;
    topicHome: {
      components: any;
    };
    home: {
      featuredItems: null | Array<_FeaturedProduct[] | null>;
    };
  };
}

const _expectedSlugProps: _ExpectedSlugProps = {
  store: {
    storeId: null,
    isAttributeSaparateProduct: false,
  },
  pageMetaData: null,
  page: {
    productDetails: null,
    productListing: null,
    topicHome: {
      components: null,
    },
    home: {
      featuredItems: null,
    },
  },
};

export const getServerSideProps: GetServerSideProps = async (
  context,
): Promise<{ props: _SlugServerSideProps | _SlugServerSide_WentWrong }> => {
  const responseBody = context.res;
  const { slug, slugID } = extractSlugName(context.params);
  let { store, pageMetaData, page } = _expectedSlugProps;
  // ---------------------------------------------------------------
  // store = await _AppController.fetchStoreDetails(domain, slug!);
  if (_globalStore.storeId) {
    store = {
      storeId: _globalStore.storeId,
      isAttributeSaparateProduct: _globalStore.isAttributeSaparateProduct,
    };
  }
  if (store.storeId === null) {
    highLightError({
      error: `No Store found. Can't proceed further`,
      component: 'slug: getServerSideProps.tsx',
    });
    return {
      props: {
        error: __Error.storeIdMissing,
      },
    };
  }

  // ---------------------------------------------------------------

  pageMetaData = await getPageType({
    storeId: store.storeId,
    slug,
  });
  // pageMetaData!.type = 'brand'; // DUMMY VALUE FOR TEST
  if (pageMetaData === null) {
    highLightError({
      error: `No page type found.`,
      component: 'slug: getServerSideProps.tsx',
    });
    return {
      props: {
        error: __Error.noPageTypeFound,
      },
    };
  }
  // ------------------------------------------------------------------

  ////////////////////////////////////////////////
  /////////// Page Type Checks
  ////////////////////////////////////////////////
  try {
    if (pageMetaData.type === 'topic') {
      page.topicHome.components = await getPageComponents({
        page_id: pageMetaData.id,
      });

      page.home.featuredItems = (
        await HomeController.fetchFeaturedItems({
          storeId: store.storeId,
          brandIds: __constant._Home.featuredItems.brandsId,
          maximumItemsForFetch: __constant._Home.featuredItems.noOfItemsToFetch,
        })
      ).products;
    }

    if (pageMetaData.type === 'product') {
      const productDetails = await getProductDetailProps({
        storeId: store.storeId,
        seName: slug,
        isAttributeSaparateProduct: store.isAttributeSaparateProduct,
      });

      if (
        productDetails.details === null ||
        productDetails.details.id === null
      ) {
        Redirect({
          res: responseBody,
          to: '/Orders',
        });
        return {
          props: {
            pageMetaData: pageMetaData,
            page: null,
          },
        };
      }

      page.productDetails = {
        ...productDetails,
        details: productDetails.details,
      };
    }

    if ('brand,category'.includes(pageMetaData.type)) {
      let FilterOptions: Array<{
        name: string;
        value: string;
      }> = [];
      let filterOptionforfaceteds: Array<{
        name: string;
        value: string;
      }> = [];
      if (slugID) {
        // @ts-ignore: Unreachable code error
        const keys = [...context.params.slug.split(',')];
        const values = slugID[0].split(',');
        keys.forEach((res: string, index: number) =>
          values[index].split('~').forEach((val) => {
            FilterOptions.push({
              name: res,
              value: val,
            });
            filterOptionforfaceteds.push({
              name: res.replace(' ', '-').toLowerCase(),
              value: val,
            });
          }),
        );
      }

      let product: Product[] = [];
      const filter = {
        storeID: store.storeId,
        [pageMetaData.type === 'brand' ? 'brandId' : 'categoryId']:
          pageMetaData.id,
        customerId: 0,
        filterOptionforfaceteds: filterOptionforfaceteds,
      };
      let ProductFilt: BrandFilter | CategoryFilter;

      if (pageMetaData.type === 'brand') {
        ProductFilt = await FetchFiltersJsonByBrand(filter);
      } else {
        ProductFilt = await FetchFiltersJsonByCategory(filter);
      }
      const _filters: Filter[] = [];
      for (const key in ProductFilt) {
        const element = ProductFilt[key];
        if (element.length > 0 && key !== 'getlAllProductList') {
          _filters.push({
            label: element[0].label || element[0].name || '',
            options: element as FilterOption[],
          });
        } else if (key === 'getlAllProductList') {
          product = element as unknown as Product[];
        }
      }
      page.productListing = {
        brandSEO: {} as _BrandSEO,
        filters: _filters,
        product: product,
        checkedFilters: FilterOptions,
        brandId: pageMetaData.id,
      };
    }
    conditionalLogV2({
      data: {
        store: store,
        pageMetaData: pageMetaData,
        // page: page,
      },
      show: __console.slug.serverMethod,
      type: 'SERVER_METHOD',
      name: 'Slug: getServerSide sending Props',
    });
  } catch (error) {
    conditionalLogV2({
      data: error,
      show: __console.allCatch,
      type: 'CATCH',
      name: 'Slug: getServerSideProps - Something went wrong',
    });
  }
  return {
    props: {
      pageMetaData: pageMetaData,
      page: page,
    },
  };
};
