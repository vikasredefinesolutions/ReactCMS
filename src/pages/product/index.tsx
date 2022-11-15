import React, { useEffect } from 'react';
import { _SeName, _Store } from 'constants/store.constant';
import ProductDescription from 'Components/ProductDetails/ProductDescription';
import ProductDetails from 'Components/ProductDetails/ProductDetails';
import ProductFeatures from 'Components/ProductDetails/ProductFeatures';
import SizeChart from 'Components/ProductDetails/SizeChartModal';

import * as _AppController from 'Controllers/_AppController';
import * as ProductController from 'Controllers/ProductController';

import { GetServerSideProps, NextPage } from 'next';
import { __domain } from 'page.config';
import {
  _ProductDetails,
  _ProductSEO,
} from 'definations/APIs/productDetail.res';
import { _ExpectedProductProps } from 'definations/product.type';
import { useActions, useTypedSelector } from 'hooks';
import { _ProductDiscountTable } from 'definations/APIs/discountTable.res';
import { _SizeChartTransformed } from 'definations/APIs/sizeChart.res';
import { _ProductColor } from 'definations/APIs/colors.res';
import Head from 'next/head';

interface _props {
  product: {
    details: _ProductDetails | null;
    colors: _ProductColor[] | null;
    sizes: _SizeChartTransformed | null;
    discount: _ProductDiscountTable | null;
    SEO: _ProductSEO | null;
  } | null;
}

const Product: NextPage<_props> = ({ product }) => {
  if (product === null) return <>Product Page Loading... </>;
  console.log('seo', product);
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const { store_productDetails, setColor } = useActions();

  if (product?.details === null || product?.details === undefined)
    return <> Product Details not found</>;

  useEffect(() => {
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
      },
    });
    if (product.colors) {
      setColor(product.colors[0]);
    }
  }, []);

  const HeadTag = (
    <Head>
      <title>{product.SEO?.pageTitle}</title>
      <meta
        name="description"
        content={product.SEO?.metaDescription}
        key="desc"
      />
      <meta name="keywords" content={product.SEO?.metaKeywords} />
    </Head>
  );

  if (storeLayout === _Store.type1) {
    return (
      <>
        {HeadTag}
        <div className={`font-Outfit`}>
          <ProductDetails product={product.details} />
          {/* {show.similarProducts && <ProductAlike products={[product]} />} */}
          {/* {show.reviews && <ProductReviews reviews={reviews} />} */}
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
          {/* {show.similarProducts && <ProductAlike products={[product]} />} */}
          <ProductFeatures fewFeatures />
          <ProductDescription
            heading="DESCRIPTION"
            text={product.details.description}
          />
          {/* {show.reviews && <ProductReviews reviews={reviews} />} */}
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

          {/* {show.similarProducts && <ProductAlike products={[product]} />} */}
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
          {/* {show.similarProducts && <ProductAlike products={[product]} />} */}
          {/* {show.reviews && <ProductReviews reviews={reviews} />} */}
        </div>
      </>
    );
  }

  return <></>;
};

export default Product;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// SERVER SIDE FUNCTIONS ---------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const getServerSideProps: GetServerSideProps = async (context) => {
  let expectedProps: _ExpectedProductProps = {
    store: null,
    product: {
      details: null,
      colors: null,
      sizes: null,
      SEO: null,
      discount: null,
    },
  };
  try {
    const domain = __domain.layout || context.req.rawHeaders[1]!;
    const seName = _SeName.nike;
    // const pathNames = context.req.url?.split('/')!;
    // const seName =  pathNames ? pathNames[pathNames?.length - 1] : null;

    if (seName) {
      expectedProps.store = await _AppController.FetchStoreDetails(
        domain,
        seName!,
      );

      if (expectedProps.store) {
        expectedProps.product = await ProductController.FetchProductDetails({
          storeId: expectedProps.store.storeId!,
          seName: seName,
        });
      }
    }
  } catch (error) {
    console.log('Error: Product page => ', error);
  }
  // console.log('props: product => ', expectedProps);
  return {
    props: {
      product: expectedProps.product,
    },
  };
};
