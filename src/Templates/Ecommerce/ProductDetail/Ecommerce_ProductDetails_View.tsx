import ProductDescription from 'Components/ProductDetails/ProductDescription';
import ProductDetails from 'Components/ProductDetails/ProductDetails';
import SizeChart from 'Components/ProductDetails/SizeChartModal';
import { useActions, useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React, { useEffect, useState } from 'react';

import {
  fetchCategoryByproductId,
  FetchInventoryById,
  FetchProductRecentlyViewed,
  InsertProductRecentlyViewed,
} from '@services/product.service';
import { CategoriesByPid } from '@type/APIs/category.res';
import { _StoreCache } from '@type/slug.type';
import ProductAlike from 'Components/ProductDetails/ProductAlike';
import ProductFeatures from 'Components/ProductDetails/ProductFeatures';
import ProductRecentlyViewed from 'Components/ProductDetails/ProductRecentlyViewed';
import ProductReviews from 'Components/ProductDetails/ProductReviews';
import {
  _ProductDetailsProps,
  _ProductsRecentlyViewedResponse,
} from 'definations/APIs/productDetail.res';
import { KlaviyoScriptTag } from 'helpers/common.helper';
import getLocation from 'helpers/getLocation';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Ecommerce_ProductDetails_View: React.FC<
  _ProductDetailsProps & _StoreCache
> = (product) => {
  const {
    store_productDetails,
    setColor,
    setShowLoader,
    product_storeData,
    product_UpdateSelectedValues,
  } = useActions();

  const { id: storeId, pageType } = useTypedSelector((state) => state.store);
  const customerId = useTypedSelector((state) => state.user.id);
  const router = useRouter();
  const [recentlyViewedProduct, setRecentlyViewedProduct] = useState<
    Array<_ProductsRecentlyViewedResponse>
  >([]);

  const getCategoriesArr = (): string[] => {
    let categories: CategoriesByPid = [];
    let categoryArr: string[] = [];

    fetchCategoryByproductId(+pageType.id, storeId!).then((res) => {
      categories = res;
    });
    if (categories.length > 0) {
      categoryArr = categories[0].name.split(' > ');
    }
    return categoryArr;
  };

  useEffect(() => {
    if (product.details && storeId && pageType.id) {
      product_UpdateSelectedValues({
        type: 'BASIC_PRODUCT_DETAILS',
        prop: {
          sku: product.details.sku,
        },
      });

      const categories = getCategoriesArr();
      const item = {
        ProductName: product.details.name,
        ProductID: product.details.id,
        SKU: product.details.sku,
        Categories: categories,
        ImageURL: product.colors && product.colors[0].imageUrl,
        URL: window.location.href,
        Brand: product.details.brandName,
        Price: product.details.salePrice,
        CompareAtPrice: product.details.msrp,
      };
      const viewedItem = {
        Title: item.ProductName,
        ItemId: item.ProductID,
        Categories: item.Categories,
        ImageUrl: item.ImageURL,
        Url: item.URL,
        Metadata: {
          Brand: item.Brand,
          Price: item.Price,
          CompareAtPrice: item.CompareAtPrice,
        },
      };

      KlaviyoScriptTag(['track', 'Viewed Product', item]);
      KlaviyoScriptTag(['trackViewedItem', viewedItem]);
    }
  }, [storeId, pageType.id]);

  useEffect(() => {
    if (product.details) {
      store_productDetails({
        brand: {
          id: product.details!.brandID,
          name: product.details!.brandName,
          url: product.details!.brandColorLogoUrl,
        },
        product: {
          id: product.details!.id || null,
          name: product.details!.name || null,
          sizes: product.details?.sizes || '',
          sizeChart: product.sizes || null,
          colors: product.colors || null,
          customization: product.details?.isEnableLogolocation,
          price:
            {
              msrp: product.details!.msrp,
              ourCost: product.details!.ourCost,
              salePrice: product.details!.salePrice,
            } || null,
        },
      });
      if (product.colors) {
        setColor(product.colors[0]);

        const allColorAttributes = product.colors.map(
          (color) => color.attributeOptionId,
        );

        FetchInventoryById({
          productId: product.details.id,
          attributeOptionId: allColorAttributes,
        }).then((res) =>
          product_storeData({
            type: 'INVENTORY_LIST',
            data: res,
          }),
        );
      }
    }

    addRecentlyViewedProduct().then((res) => {
      setRecentlyViewedProduct(res);
    });

    setShowLoader(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.details]);

  const addRecentlyViewedProduct = async () => {
    const location = await getLocation();
    const pageUrl = router.query;
    let payloadObj = {
      recentViewModel: {
        productId: product.SEO?.productId || 0,
        customerId: customerId || 0,
        pageName: 'descriptionPage',
        pageUrl: `${pageUrl.slug}`,
        ipAddress: `${location.ip_address}`,
        recStatus: 'A',
      },
    };
    InsertProductRecentlyViewed(payloadObj);

    if (storeId) {
      let fetchRecentlyViewedPayload = {
        productId: product.SEO?.productId || 0,
        storeId: 4,
        ipAddress: `${location.ip_address}`,
        customerId: customerId || 0,
        maximumItemsForFetch: 10,
      };

      return FetchProductRecentlyViewed(fetchRecentlyViewedPayload);
    }
    return [];
  };

  if (product === null) return <p>Product Page Loading...</p>;

  if (product?.details === null || product?.details === undefined) {
    return <> Product Details not found </>;
  }

  const _SEO = {
    title: product.SEO?.pageTitle || product.details.name || 'Product Page',
    desc:
      product.SEO?.metaDescription ||
      product.details.description ||
      'Product Description',
    keywords:
      product.SEO?.metaKeywords || product.details.name || 'Product Keywords',
  };

  const HeadTag = (
    <Head>
      <title>{_SEO.title}</title>
      <meta name='description' content={_SEO.desc} key='desc' />
      <meta name='keywords' content={_SEO.keywords} />
    </Head>
  );

  // console.log('single product destails page ', product);

  if (product.storeCode === _Store.type1) {
    return (
      <>
        {HeadTag}
        <div className={`font-Outfit`}>
          <ProductDetails
            product={product.details}
            storeCode={product.storeCode}
          />
          <ProductAlike
            storeCode={product.storeCode}
            title='YOU MAY ALSO LIKE'
            products={product.alike}
          />
          <ProductReviews
            reviews={null}
            storeCode={product.storeCode}
            productId={product.details.id}
          />
        </div>
      </>
    );
  }
  if (product.storeCode === _Store.type2) {
    return (
      <>
        {HeadTag}
        <div className={`font-Outfit tracking-wider`}>
          <ProductDetails
            product={product.details}
            storeCode={product.storeCode}
          />
          {product.details.isEnableLogolocation && (
            <ProductFeatures fewFeatures storeCode={product.storeCode} />
          )}
          <ProductDescription
            heading='DESCRIPTION'
            text={product.details.description}
            storeCode={product.storeCode}
          />
          <ProductReviews
            reviews={null}
            storeCode={product.storeCode}
            productId={product.details.id}
          />
          {recentlyViewedProduct.length && (
            <ProductRecentlyViewed
              storeCode={product.storeCode}
              title='RECENTLY VIEWED'
              products={recentlyViewedProduct}
            />
          )}
          <ProductAlike
            storeCode={product.storeCode}
            title='YOU MAY ALSO LIKE'
            products={product.alike}
          />
        </div>
      </>
    );
  }

  if (product.storeCode === _Store.type3) {
    return (
      <>
        {HeadTag}
        <div className={`font-Outfit`}>
          <ProductDetails
            product={product.details}
            storeCode={product.storeCode}
          />
          <ProductDescription
            heading='Information'
            text={product.details.description}
            storeCode={product.storeCode}
          />
          <SizeChart
            modalHandler={() => 'Do nothing'}
            modal={'NO'}
            storeCode={product.storeCode}
          />
          <ProductAlike
            storeCode={product.storeCode}
            title='YOU MAY ALSO LIKE'
            products={product.alike}
          />
        </div>
      </>
    );
  }

  if (product.storeCode === _Store.type4) {
    return (
      <>
        {HeadTag}
        <div className={`font-Outfit tracking-wider`}>
          <ProductDetails
            product={product.details}
            storeCode={product.storeCode}
          />
          <ProductDescription
            heading='Description'
            text={product.details.description}
            storeCode={product.storeCode}
          />
          <ProductAlike
            storeCode={product.storeCode}
            title='YOU MAY ALSO LIKE'
            products={product.alike}
          />
          <ProductReviews
            reviews={null}
            storeCode={product.storeCode}
            productId={product.details.id}
          />
        </div>
      </>
    );
  }

  if (
    product.storeCode === _Store.type15 ||
    product.storeCode === _Store.type16
  ) {
    return (
      <>
        {HeadTag}
        <div className={`font-Outfit`}>
          <ProductDetails
            product={product.details}
            storeCode={product.storeCode}
          />
          <ProductAlike
            storeCode={product.storeCode}
            title='YOU MAY ALSO LIKE'
            products={product.alike}
          />
          <ProductReviews
            reviews={null}
            storeCode={product.storeCode}
            productId={product.details.id}
          />
        </div>
      </>
    );
  }

  return <>No store layout found</>;
};

export default Ecommerce_ProductDetails_View;
