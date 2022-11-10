import React from 'react';
import { _Store } from '../../constants/store.constant';
import ProductDescription from 'Components/ProductDetails/ProductDescription';
import ProductDetails from 'Components/ProductDetails/ProductDetails';
import ProductFeatures from 'Components/ProductDetails/ProductFeatures';
import ProductReviews from 'Components/ProductDetails/ProductReviews';
import SizeChart from 'Components/ProductDetails/SizeChartModal';
import ProductController from 'Controllers/ProductController';

const Product: React.FC = () => {
  const { product, reviews, show, storeLayout } = ProductController();

  if (product === null) {
    return <div>Loading Product...</div>;
  }

  if (storeLayout === _Store.type1) {
    return (
      <div className={`font-Outfit`}>
        <ProductDetails product={product} />
        {/* {show.similarProducts && <ProductAlike products={[product]} />} */}
        {show.reviews && <ProductReviews reviews={reviews} />}
      </div>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <div className={`font-Outfit tracking-wider`}>
        <ProductDetails product={product} />
        {/* {show.similarProducts && <ProductAlike products={[product]} />} */}
        <ProductFeatures fewFeatures />
        <ProductDescription heading="DESCRIPTION" text={product.description} />
        {show.reviews && <ProductReviews reviews={reviews} />}
      </div>
    );
  }

  if (storeLayout === _Store.type3) {
    return (
      <div className={`font-Outfit`}>
        <ProductDetails product={product} />
        <ProductDescription heading="Description" text={product.description} />
        <SizeChart modalHandler={() => 'Do nothing'} modal={'NO'} />

        {/* {show.similarProducts && <ProductAlike products={[product]} />} */}
      </div>
    );
  }

  if (storeLayout === _Store.type4) {
    return (
      <div className={`font-Outfit tracking-wider`}>
        <ProductDetails product={product} />
        <ProductDescription heading="Description" text={product.description} />
        {/* {show.similarProducts && <ProductAlike products={[product]} />} */}
        {show.reviews && <ProductReviews reviews={reviews} />}
      </div>
    );
  }

  return <></>;
};

export default Product;
