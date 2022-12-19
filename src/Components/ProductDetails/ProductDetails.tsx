import CustomizeLogo from 'appComponents/ui/cart/customizeLogo';
import { _ProductDetails } from 'definations/APIs/productDetail.res';
import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React from 'react';
import ProductImg from './ProductImg';
import ProductInfo from './ProductInfo';

interface _Props {
  product: _ProductDetails;
}

const ProductDetails: React.FC<_Props> = ({ product }) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  // const show = useTypedSelector((state) => state.store.display.footer);

  if (storeLayout === _Store.type1) {
    return (
      <div className="container mx-auto mt-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:items-start">
          <ProductImg product={product} />
          <ProductInfo product={product} />
        </div>
      </div>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <section className="">
        <div className="container bg-white mx-auto">
          <div className="pt-6 border-t border-[#f0f0f0] mt-6 overflow-hidden">
            {/* <!-- Product --> */}
            <div className="flex flex-wrap -mx-3 gap-y-6">
              <ProductImg product={product} />
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (storeLayout === _Store.type3) {
    return (
      <>
        <section className="mainsection pt-5">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-start">
              <ProductImg product={product} />
              <ProductInfo product={product} />
            </div>
          </div>
        </section>
        <CustomizeLogo />
      </>
    );
  }

  if (storeLayout === _Store.type4) {
    return (
      <section className="">
        <div className="container mx-auto">
          {/* <!-- Product --> */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* <!-- Image gallery --> */}
            <ProductImg product={product} />
            {/* <!-- Product info --> */}
            <ProductInfo product={product} />
          </div>
        </div>
      </section>
    );
  }

  return <></>;
};

export default ProductDetails;
