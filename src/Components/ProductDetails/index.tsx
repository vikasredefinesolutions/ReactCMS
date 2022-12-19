import ProductDescription from 'Components/ProductDetails/ProductDescription';
import ProductDetails from 'Components/ProductDetails/ProductDetails';
import ProductFeatures from 'Components/ProductDetails/ProductFeatures';
import SizeChart from 'Components/ProductDetails/SizeChartModal';
import { useActions, useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React, { useEffect } from 'react';

import { _ProductDetailsProps } from 'definations/APIs/productDetail.res';
import { conditionalLogV2, __console } from 'helpers/global.console';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ProductAlike from './ProductAlike';
import ProductReviews from './ProductReviews';

const Product: React.FC<_ProductDetailsProps> = (product) => {
  conditionalLogV2({
    data: product,
    show: __console.productDetails.page,
    type: 'PAGE',
    name: 'Product Details - Props',
  });

  const router = useRouter();
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const { store_productDetails, setColor, setShowLoader } = useActions();

  const addParams = () => {
    router.query.altview = '1';
    router.query.v = 'product-detail';
    router.push(router);
  };

  const addHtml = () => {
    // console.log(router.pathname);
  };

  useEffect(() => {
    if (!window.location.pathname.includes('.html')) {
      addHtml();
    } else if (
      router.query.altview === undefined ||
      router.query.v === undefined
    ) {
      addParams();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (product) {
      store_productDetails({
        brand: {
          id: product.details!.brandID,
          name: product.details!.brandName,
          url: product.details!.brandImage,
        },
        product: {
          id: product.details!.id || null,
          name: product.details!.name || null,
          discounts: product.discount || null,
          sizes: product.details?.sizes || '',
          sizeChart: product.sizes || null,
          colors: product.colors || null,
          price:
            {
              msrp: product.details!.msrp,
              ourCost: product.details!.ourCost,
              salePrice: product.details!.salePrice,
            } || null,
          inventory: product.inventory,
        },
      });
      if (product.colors) {
        setColor(product.colors[0]);
      }
    }

    setShowLoader(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (product === null) return <>Product Page Loading... </>;

  if (product?.details === null || product?.details === undefined) {
    return <> Product Details not found </>;
  }

  const HeadTag = (
    <Head>
      <title>{product.SEO?.pageTitle || product.details.name}</title>
      <meta
        name="description"
        content={product.SEO?.metaDescription || product.details.description}
        key="desc"
      />
      <meta
        name="keywords"
        content={product.SEO?.metaKeywords || product.details.name}
      />
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Head>
  );

  if (storeLayout === _Store.type1) {
    return (
      <>
        {HeadTag}
        <div className={`font-Outfit`}>
          <ProductDetails product={product.details} />
          <ProductAlike title="YOU MAY ALSO LIKE" products={product.alike} />
          <ProductReviews reviews={null} />
        </div>
      </>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <>
        {HeadTag}
        <div className={`font-Outfit tracking-wider`}>
          <ProductDetails product={product.details} />
          <ProductFeatures fewFeatures />
          <ProductDescription
            heading="DESCRIPTION"
            text={product.details.description}
          />
          <ProductReviews reviews={null} />
          <ProductAlike title="YOU MAY ALSO LIKE" products={product.alike} />
        </div>
      </>
    );
  }

  if (storeLayout === _Store.type3) {
    return (
      <>
        {HeadTag}
        <div className={`font-Outfit`}>
          <ProductDetails product={product.details} />
          <ProductDescription
            heading="Description"
            text={product.details.description}
          />
          <SizeChart modalHandler={() => 'Do nothing'} modal={'NO'} />
          <ProductAlike title="YOU MAY ALSO LIKE" products={product.alike} />
        </div>
      </>
    );
  }

  if (storeLayout === _Store.type4) {
    return (
      <>
        {HeadTag}
        <div className={`font-Outfit tracking-wider`}>
          <ProductDetails product={product.details} />
          <ProductDescription
            heading="Description"
            text={product.details.description}
          />
          <ProductAlike title="YOU MAY ALSO LIKE" products={product.alike} />
          <ProductReviews reviews={null} />
        </div>
      </>
    );
  }

  return <></>;
};

export default Product;
