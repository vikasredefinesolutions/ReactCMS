import React, { useEffect } from 'react';
import Head from 'next/head';
import { useActions, useTypedSelector } from 'hooks';
import { _SeName, _Store } from 'constants/store.constant';
import ProductDescription from 'Components/ProductDetails/ProductDescription';
import ProductDetails from 'Components/ProductDetails/ProductDetails';
import ProductFeatures from 'Components/ProductDetails/ProductFeatures';
import SizeChart from 'Components/ProductDetails/SizeChartModal';

import * as _AppController from 'Controllers/_AppController';

import { __domain } from 'page.config';
import {
  _ProductDetails,
  _ProductDoNotExist,
  _ProductDoNotExistTransformed,
  _ProductSEO,
} from 'definations/APIs/productDetail.res';
import { _ExpectedProductProps } from 'definations/product.type';
import { _ProductDiscountTable } from 'definations/APIs/discountTable.res';
import { _SizeChartTransformed } from 'definations/APIs/sizeChart.res';
import { _ProductColor } from 'definations/APIs/colors.res';
import { _ProductInventoryTransfomed } from '@type/APIs/inventory.res';
import { useRouter } from 'next/router';
import { conditionalLog } from 'helpers/global.console';
import { __fileNames } from 'show.config';

interface _props {
  product: {
    doNotExist: _ProductDoNotExistTransformed;
    details: _ProductDetails | null;
    colors: _ProductColor[] | null;
    sizes: _SizeChartTransformed | null;
    discount: _ProductDiscountTable | null;
    SEO: _ProductSEO | null;
    inventory: null | _ProductInventoryTransfomed;
  } | null;
}

const Product: React.FC<_props> = ({ product }) => {
  const router = useRouter();
  if (product === null) return <>Product Page Loading... </>;

  conditionalLog({
    show: true,
    name: __fileNames.productDetails,
    type: 'PAGE',
    data: product,
  });

  if (product.details?.id === null) {
    router.push(product.doNotExist.retrunUrlOrCategorySename || '/');
    return <></>;
  }

  if (product?.details === null || product?.details === undefined) {
    return <> Product Details not found </>;
  }

  const storeLayout = useTypedSelector((state) => state.store.layout);
  const { store_productDetails, setColor, setShowLoader } = useActions();

  const addParams = () => {
    router.query.altview = '1';
    router.query.v = 'product-detail';
    router.push(router);
  };

  useEffect(() => {
    addParams();

    if (product.doNotExist === null) {
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
  }, []);

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
