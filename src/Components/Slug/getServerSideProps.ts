import { __Error } from '@constants/global.constant';
import { paths } from '@constants/paths.constant';
import { getPageComponents } from '@services/home.service';
import {
  FetchFiltersJsonByBrand,
  FetchFiltersJsonByCategory
} from '@services/product.service';
import { getPageType } from '@services/slug.service';
import { _ProductDetailsProps } from '@type/APIs/productDetail.res';
import { _FeaturedProduct } from '@type/APIs/storeDetails.res';
import { BrandFilter, CategoryFilter } from '@type/productList.type';

import {
  Filter,
  FilterOption,
  Product,
  _GetPageType,
  _ProductListProps,
  _SlugServerSideProps,
  _SlugServerSide_WentWrong
} from '@type/slug.type';
import { getProductDetailProps } from 'Controllers/ProductController.async';

import { extractSlugName } from 'helpers/common.helper';
import {
  conditionalLogV2,
  highLightError,
  __console
} from 'helpers/global.console';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { _globalStore } from 'store.global';

export interface _ExpectedSlugProps {
  store: {
    storeId: null | number;
    isAttributeSaparateProduct: boolean;
    storeCode: null | string;
    storeTypeId: null | number;
  };
  pageMetaData: _GetPageType | null;
  page: {
    productDetails: _ProductDetailsProps | null;
    productListing: _ProductListProps | null;
    topicHome: {
      components: any;
    };
    slug: string | null;
    home: {
      featuredItems: null | Array<_FeaturedProduct[] | null>;
    };
  };
}

const _expectedSlugProps: _ExpectedSlugProps = {
  store: {
    storeId: null,
    storeCode: null,
    storeTypeId: null,
    isAttributeSaparateProduct: false,
  },
  pageMetaData: null,
  page: {
    productDetails: null,
    productListing: null,
    slug: null,
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
): Promise<
  GetServerSidePropsResult<_SlugServerSideProps | _SlugServerSide_WentWrong>
> => {
  const { slug, slugID } = extractSlugName(context.params);
  let { store, pageMetaData, page } = _expectedSlugProps;
  // ---------------------------------------------------------------
  if (_globalStore.storeId) {
    store = {
      storeCode: _globalStore.code,
      storeTypeId: _globalStore.storeTypeId,
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
        pageId: pageMetaData.id,
        type: '',
      });
      page.slug = slug;

      page.home.featuredItems = [];
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
        conditionalLogV2({
          data: productDetails,
          show: __console.allCatch,
          type: 'CATCH',
          name: `Slug: ${
            productDetails.details?.productDoNotExist?.info ||
            'Product not found'
          }`,
        });
        return {
          redirect: {
            destination:
              productDetails.details?.productDoNotExist
                ?.retrunUrlOrCategorySename || paths.NOT_FOUND,
            permanent: true,
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
            label:
              key === 'storeCategoryProductCategoryListViewModel'
                ? 'Category'
                : element[0].label || element[0].name || '',
            options: element as FilterOption[],
          });
        } else if (key === 'getlAllProductList') {
          product = element as unknown as Product[];
        }
      }
      page.productListing = {
        brandSEO: {
          seTitle: pageMetaData.meta_Title,
          seDescription: pageMetaData.meta_Description,
          seKeyWords: pageMetaData.meta_Keywords,
          brandName: pageMetaData.slug,
          brandId: pageMetaData.id,
          seName: pageMetaData.slug,
        },
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

  if (!store.storeCode || !store.storeTypeId || !pageMetaData || !page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      _store: {
        storeCode: store.storeCode,
        storeTypeId: store.storeTypeId,
      },
      pageMetaData: pageMetaData,
      page: page,
    },
  };
};
