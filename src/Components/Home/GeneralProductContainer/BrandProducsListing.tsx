import { GetlAllProductList } from '@type/productList.type';
import React from 'react';
import BrandProduct from './BrandProduct';

interface _props {
  brandsData: GetlAllProductList[];
}

const BrandProductListing: React.FC<_props> = ({ brandsData }) => {
  const colorChangeHandler = (
    productId: number | undefined,
    seName: string | undefined,
    color: string | undefined | null,
  ) => {
    const storageString = localStorage.getItem('selectedProducts');
    const selectedProducts: Array<{
      productId: number | undefined;
      seName: string | undefined;
      color: string | undefined | null;
    }> = storageString ? JSON.parse(storageString) : [];
    const index = selectedProducts.findIndex(
      (product) => product.productId === productId,
    );

    const productObject = {
      productId,
      seName,
      color,
    };

    if (index > -1) {
      selectedProducts[index] = productObject;
    } else {
      selectedProducts.push(productObject);
    }
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
  };

  return (
    <>
      <div aria-labelledby='products-heading' className='mt-8'>
        <div className='mt-8 relative gridlistview' id='gridview'>
          <div className='relative w-full pb-6 -mb-6'>
            <ul
              role='list'
              className={
                'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'
              }
            >
              {brandsData &&
                brandsData?.length > 0 &&
                brandsData.map((product: GetlAllProductList, index: number) => (
                  <BrandProduct
                    key={index}
                    product={product}
                    colorChangeHandler={colorChangeHandler}
                  />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandProductListing;
