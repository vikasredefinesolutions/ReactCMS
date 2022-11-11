import React from 'react';
import { _Store } from 'constants/store.constant';
import ProductDescription from 'Components/ProductDetails/ProductDescription';
import ProductDetails from 'Components/ProductDetails/ProductDetails';
import ProductFeatures from 'Components/ProductDetails/ProductFeatures';
import ProductReviews from 'Components/ProductDetails/ProductReviews';
import SizeChart from 'Components/ProductDetails/SizeChartModal';
import ProductController from 'Controllers/ProductController';
import { NextPage } from 'next';

const Product: NextPage<any> = ({ name }) => {
  // const { product, reviews, show, storeLayout } = ProductController();
  if (name) console.log('name', name);
  return <>Product page</>;
  // if (product === null) {
  //   return <div>Loading Product...</div>;
  // }

  // if (storeLayout === _Store.type1) {
  //   return (
  //     <div className={`font-Outfit`}>
  //       <ProductDetails product={product} />
  //       {/* {show.similarProducts && <ProductAlike products={[product]} />} */}
  //       {show.reviews && <ProductReviews reviews={reviews} />}
  //     </div>
  //   );
  // }

  // if (storeLayout === _Store.type2) {
  //   return (
  //     <div className={`font-Outfit tracking-wider`}>
  //       <ProductDetails product={product} />
  //       {/* {show.similarProducts && <ProductAlike products={[product]} />} */}
  //       <ProductFeatures fewFeatures />
  //       <ProductDescription heading="DESCRIPTION" text={product.description} />
  //       {show.reviews && <ProductReviews reviews={reviews} />}
  //     </div>
  //   );
  // }

  // if (storeLayout === _Store.type3) {
  //   return (
  //     <div className={`font-Outfit`}>
  //       <ProductDetails product={product} />
  //       <ProductDescription heading="Description" text={product.description} />
  //       <SizeChart modalHandler={() => 'Do nothing'} modal={'NO'} />

  //       {/* {show.similarProducts && <ProductAlike products={[product]} />} */}
  //     </div>
  //   );
  // }

  // if (storeLayout === _Store.type4) {
  //   return (
  //     <div className={`font-Outfit tracking-wider`}>
  //       <ProductDetails product={product} />
  //       <ProductDescription heading="Description" text={product.description} />
  //       {/* {show.similarProducts && <ProductAlike products={[product]} />} */}
  //       {show.reviews && <ProductReviews reviews={reviews} />}
  //     </div>
  //   );
  // }

  return <></>;
};

export default Product;

export async function getServerSideProps(context: any) {
  // const { params, req, res } = context;

  // if ('data do not exist') {
  //   return {
  //     redirect: {
  //       destination: '/no-product-exist',
  //     },
  //   };
  // }

  // if ('data not found') {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      name: 'hello',
    }, // will be passed to the page component as props
    // revalidate: 10, Do not exist on getServerSideProps
    notFound: true,
  };
}
