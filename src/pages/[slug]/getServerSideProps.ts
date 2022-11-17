import { getPageType } from '@services/page.service';
import { _StoreReturnType } from 'definations/store.type';

import { __domain } from 'page.config';
import {
  FetchBrandProductList,
  FetchFiltersJsonByBrand,
} from '@services/product.service';
import { ProductList } from '@type/productList.type';
import * as _AppController from 'Controllers/_AppController';
import { GetServerSideProps } from 'next';
import { _ExpectedProductProps } from '@type/product.type';
import { getProductDetailProps } from 'Controllers/ProductController';
import { _ProductDetailsProps } from '@type/APIs/productDetail.res';
import { conditionalLog } from 'helpers/global.console';
import { _showConsoles, __fileNames } from 'show.config';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const domain = __domain.layout || context.req.rawHeaders[1];
  let store: _StoreReturnType | null = null;
  let slug = '';
  const slugID = context.params && context.params['slug-id'];

  if (slugID) {
    slug = slugID.at(-1)?.replace('.html', '') || '';
  } else {
    const paramsSlug = context.params!;
    // @ts-ignore: Unreachable code error
    slug = paramsSlug.slug.replace('.html', '');
  }

  store = await _AppController.FetchStoreDetails(domain, slug!);
  const { data } = await getPageType({
    store_id: 4,
    slug,
  });
  const pageType = data.data.type;
  let pageData: any | null | _ProductDetailsProps = null;
  ////////////////////////////////////////////////
  /////////// Page Type Checks
  ////////////////////////////////////////////////
  if (pageType === 'product') {
    pageData = await getProductDetailProps({
      storeId: store.storeId!,
      seName: slug,
    });
    conditionalLog({
      show: _showConsoles.productDetails,
      data: pageData,
      name: __fileNames.productDetails,
      type: 'FUNCTION',
    });
  }

  if ('brand,category'.includes(pageType)) {
    const seo = await FetchBrandProductList({ storeId: 4, seName: slug });
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

    let product: ProductList = [];
    const filter = {
      storeID: 4,
      brandId: 169,
      customerId: 1,
      filterOptionforfaceteds: filterOptionforfaceteds,
    };
    pageData = await FetchFiltersJsonByBrand(filter);
    const _filters = [];
    for (const key in pageData) {
      const element = pageData[key];
      if (element.length > 0 && key !== 'getlAllProductList') {
        _filters.push({
          label: element[0].label,
          options: element,
        });
      } else if (key === 'getlAllProductList') {
        product = element;
      }
    }
    pageData['seo'] = seo;
    pageData['filters'] = _filters;
    pageData['product'] = product;
    pageData['checkedFilters'] = filterOptionforfaceteds;
  }
  return {
    props: {
      pageType,
      pageData,
      slug,
    },
  };
};
