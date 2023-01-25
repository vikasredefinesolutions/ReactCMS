import ProductDescription from 'Components/ProductDetails/ProductDescription';
import ProductDetails from 'Components/ProductDetails/ProductDetails';
import SizeChart from 'Components/ProductDetails/SizeChartModal';
import { useActions } from 'hooks';
import { _Store } from 'page.config';
import React, { useEffect } from 'react';

import { FetchInventoryById } from '@services/product.service';
import { _StoreCache } from '@type/slug.type';
import ProductAlike from 'Components/ProductDetails/ProductAlike';
import ProductFeatures from 'Components/ProductDetails/ProductFeatures';
import ProductReviews from 'Components/ProductDetails/ProductReviews';
import { _ProductDetailsProps } from 'definations/APIs/productDetail.res';
import Head from 'next/head';

const Ecommerce_ProductDetails: React.FC<_ProductDetailsProps & _StoreCache> = (
  product,
) => {
  const { store_productDetails, setColor, setShowLoader, product_storeData } =
    useActions();

  // const addParams = () => {
  //   router.query.altview = '1';
  //   router.query.v = 'product-detail';
  //   router.push(router);
  // };
  useEffect(() => {
    if (product.details) {
      store_productDetails({
        brand: {
          id: product.details!.brandID,
          name: product.details!.brandName,
          url: product.details!.brandImage,
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

    setShowLoader(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <ProductReviews reviews={null} storeCode={product.storeCode} />
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
          <ProductFeatures fewFeatures storeCode={product.storeCode} />
          <ProductDescription
            heading='DESCRIPTION'
            text={product.details.description}
            storeCode={product.storeCode}
          />
          <ProductReviews reviews={null} storeCode={product.storeCode} />
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
          <ProductReviews reviews={null} storeCode={product.storeCode} />
        </div>
      </>
    );
  }

  if (product.storeCode === _Store.type15) {
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
          <ProductReviews reviews={null} storeCode={product.storeCode} />
        </div>
      </>
    );
  }

  return <>No store layout found</>;
};

export default Ecommerce_ProductDetails;
