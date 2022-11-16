import { getPageType } from '@services/page.service';
import { FetchBrandProductList, FetchFiltersJsonByBrand } from '@services/product.service';
import { ProductList } from '@type/productList.type';
export default async (context: {
  params: { slug: string; ['slug-id']?: string[] };
}) => {
  let slug = '';
  if (context.params['slug-id']) {
    slug = context.params['slug-id'].at(-1)?.replace('.html', '') || '';
  } else {
    slug = context.params.slug.replace('.html', '');
  }



  const { data } = await getPageType({
    store_id: 4,
    slug,
  });
  const pageType = data.data.type;
  let pageData: any = null;

  if ('brand,category'.includes(pageType)) {
    const seo = await FetchBrandProductList({storeId: 4, seName: slug});
    let filterOptionforfaceteds: Array<{
        name: string;
        value: string;
      }> = [];
    if (context.params['slug-id']) {
      const keys = context.params.slug.split(',');
      const values = context.params['slug-id'][0].split(',');
      keys.forEach((res, index) =>
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
    for (let i = 0; i < 6; i++) {
      const pro = product[0];
      
      product.push({...pro, name: pro.name + '-' + i});
    }
    pageData['seo'] = seo;
    pageData['filters'] = _filters;
    pageData['product'] = product;
    pageData['checkedFilters'] = filterOptionforfaceteds;
  }
  else if(pageType === 'product')
  {
    pageData['sd'] = 'abhishek';
  }
  // Product



  return {
    props: {
      pageType,
      pageData,
      slug,
    },
  };
};
