import { getPageComponents, getPageType } from '@services/page.service';
import { _StoreReturnType } from 'definations/store.type';

import {
  FetchBrandProductList,
  FetchFiltersJsonByBrand
} from '@services/product.service';
import { _ProductDetailsProps } from '@type/APIs/productDetail.res';
import { BrandFilter } from '@type/productList.type';
import {
  Filter,
  FilterOption,
  Product,
  ProductListPageData,
  TopicProps
} from '@type/slug.type';
import { getProductDetailProps } from 'Controllers/ProductController';
import * as _AppController from 'Controllers/_AppController';
import { domainToShow, extractSlugName } from 'helpers/common.helper';
import { conditionalLog, highLightError } from 'helpers/global.console';
import { GetServerSideProps } from 'next';
import { __domain } from 'page.config';
import { _showConsoles, __fileNames } from 'show.config';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const domain = domainToShow({
    domain: context.req?.rawHeaders[1],
    showProd: __domain.isSiteLive,
  });

  let store: _StoreReturnType | null = null;
  const { slug, slugID } = extractSlugName(context.params);
  store = await _AppController.FetchStoreDetails(domain, slug!);
console.log(store);
  if (!store) {
    highLightError({
      error: 'No store id found',
      component:
        'D:AAASNext_RedefineCommerceFrontWebsrcpages[slug]getServerSideProps.ts',
    });
  }

  const { data }: any = await getPageType({
    store_id: store?.storeId || 0,
    slug,
  });

  if (data === null) {
    throw new Error('No Store-Id found');
  }

  let components: any = null;
  const pageType = data.data.type;
  let pageData: ProductListPageData | null | _ProductDetailsProps | TopicProps =
    null;
  let seo: any = null;

  ////////////////////////////////////////////////
  /////////// Page Type Checks
  ////////////////////////////////////////////////
  if (pageType === 'topic') {
    console.log(pageType);
    pageData = {};
    pageData['seDescription'] = data.data?.meta_description;
    pageData['seKeyWords'] = data.data.meta_keywords;
    pageData['seTitle'] = data.data.meta_title;
    pageData['id'] = data.data.id;
    components = await getPageComponents({
      page_id: data.data.id,
    });
    pageData['components'] = components?.data;
  }

  if (pageType === 'product') {
    pageData = await getProductDetailProps({
      storeId: store?.storeId!,
      seName: slug,
      isAttributeSaparateProduct: store!.isAttributeSaparateProduct,
    });
    conditionalLog({
      show: _showConsoles.productDetails,
      data: pageData,
      name: __fileNames.productDetails,
      type: 'FUNCTION',
    });
  }

  if ('brand,category'.includes(pageType)) {
    const seo = await FetchBrandProductList({
      storeId: store?.storeId || 0,
      seName: slug,
    });
    let filterOptionforfaceteds: Array<{
      name: string;
      value: string;
    }> = [];
    if (slugID) {
      // @ts-ignore: Unreachable code error
      const keys = context.params.slug.split(',');
      const values = slugID[0].split(',');
      keys.forEach((res: string, index: number) =>
        values[index].split('~').forEach((val) => {
          filterOptionforfaceteds.push({
            name: res,
            value: val,
          });
        }),
      );
    }

    let product: Product[] = [];
    const filter = {
      storeID: store?.storeId || 0,
      brandId: data.data.id,
      customerId: 0,
      filterOptionforfaceteds: filterOptionforfaceteds,
    };
    const BrandFilt: BrandFilter = await FetchFiltersJsonByBrand(filter);

    const _filters: Filter[] = [];
    for (const key in BrandFilt) {
      const element = BrandFilt[key];
      if (element.length > 0 && key !== 'getlAllProductList') {
        _filters.push({
          label: element[0].label || '',
          options: element as FilterOption[],
        });
      } else if (key === 'getlAllProductList') {
        product = element as unknown as Product[];
      }
    }
    const page = {} as ProductListPageData;
    pageData = {} as ProductListPageData;
    page['brandId'] = data.data.id;
    page['seo'] = seo;
    page['filters'] = _filters;
    page['product'] = product as Product[];
    page['checkedFilters'] = filterOptionforfaceteds;
    pageData = page;
  }
  return {
    props: {
      pageType,
      pageData,
      slug,
    },
  };
};
