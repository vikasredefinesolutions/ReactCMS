import { __LocalStorage } from '@constants/global.constant';
import { paths } from '@constants/paths.constant';
import { _CompareProducts } from '@type/compare';
import Price from 'appComponents/reUsable/Price';
import AllColors from 'Components/Compare/AllColors';
import AllSizes from 'Components/Compare/AllSizes';
import DisplayCompareImage from 'Components/Compare/DisplayCompareImage';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface _props {
  products: _CompareProducts | null;
}

const Ecommerce_CompareProduct: React.FC<_props> = (props) => {
  const router = useRouter();
  const [products, setProducts] = useState<_CompareProducts | null>(
    props.products,
  );

  const removeSkuFromQueryParams = (skuToKeep: string[] | 'REMOVE ALL') => {
    if (skuToKeep === 'REMOVE ALL') {
      router.replace({ pathname: router.pathname, query: '' }, undefined, {
        shallow: true,
      });
      return;
    }

    const querySkus = skuToKeep.toString();

    router.replace({ pathname: router.pathname, query: querySkus }, undefined, {
      shallow: true,
    });
  };

  const removeSkuFromLocalStorage = (skuToKeep: string[] | 'REMOVE ALL') => {
    if (skuToKeep === 'REMOVE ALL') {
      localStorage.setItem(__LocalStorage.compareProducts, JSON.stringify([]));
      return;
    }

    localStorage.setItem(
      __LocalStorage.compareProducts,
      JSON.stringify(skuToKeep),
    );
  };

  const removeProductFromTable = (
    prods: _CompareProducts | null,
    indexToRemove: number,
  ) => {
    if (prods === null) {
      return prods;
    }

    const updated: _CompareProducts = {
      details:
        prods.details?.filter((detail, index) => index !== indexToRemove) ||
        null,
      colors:
        prods.colors?.filter((color, index) => index !== indexToRemove) || null,
      inventory:
        prods.inventory?.filter((detail, index) => index !== indexToRemove) ||
        null,
    };

    return updated;
  };

  const removeHandler = (indexToRemove: number) => {
    const skuToRemove = products?.details?.find(
      (detail, index) => index === indexToRemove,
    );

    if (skuToRemove) {
      const storedSKUs = localStorage.getItem(__LocalStorage.compareProducts);

      if (storedSKUs) {
        const skuStoredIdArr = JSON.parse(storedSKUs) as string[];

        if (skuStoredIdArr.length === 1) {
          removeSkuFromQueryParams('REMOVE ALL');
          removeSkuFromLocalStorage('REMOVE ALL');
          setProducts(null);
          return;
        }

        const skuToKeep = skuStoredIdArr.filter(
          (sku) => sku !== skuToRemove.sku,
        );

        if (skuToKeep) {
          removeSkuFromQueryParams(skuToKeep);
          removeSkuFromLocalStorage(skuToKeep);
          setProducts((prods) => removeProductFromTable(prods, indexToRemove));
          return;
        }
      }
    }
  };

  return (
    <section className='pt-10 pb-10'>
      <Head>
        <title>{'Compare Products'}</title>
        {/* <meta name="description" content={_SEO.desc} key="desc" />
      <meta name="keywords" content={_SEO.keywords} /> */}
      </Head>
      <div className='container mx-auto'>
        <div className=''>
          <div className='text-2xl md:text-3xl lg:text-title font-title text-color-title text-center mb-4'>
            Compare
          </div>
        </div>
        <div className='relative overflow-auto border border-gray-300'>
          <table className='w-full'>
            {products?.details && products.details.length > 0 ? (
              <tbody className='divide-y divide-y-gray-300'>
                <DisplayCompareImage onRemove={removeHandler} />
                <tr className='divide-x divide-x-gray-300'>
                  <td className=''>
                    <div className='p-2'>Title</div>
                  </td>
                  {products?.details?.map((product, index) => (
                    <td key={index} className=''>
                      <Link href={product.seName} className='p-2'>
                        {product.name}
                      </Link>
                    </td>
                  ))}
                </tr>
                <tr className='divide-x divide-x-gray-300'>
                  <td className=''>
                    <div className='p-2'>SKU</div>
                  </td>
                  {products?.details?.map((product, index) => (
                    <td key={index} className=''>
                      <div className='p-2'>{product.sku}</div>
                    </td>
                  ))}
                </tr>
                <tr className='divide-x divide-x-gray-300'>
                  <td className=''>
                    <div className='p-2'>Price</div>
                  </td>
                  {products?.details?.map((product, index) => (
                    <td key={index} className=''>
                      <div className='p-2'>
                        MSRP{' '}
                        <Price
                          value={undefined}
                          prices={{
                            msrp: +product.msrp,
                            salePrice: +product.salePrice,
                          }}
                        />
                      </div>
                    </td>
                  ))}
                </tr>
                <tr className='divide-x divide-x-gray-300'>
                  <td className=''>
                    <div className='p-2'>Color</div>
                  </td>
                  {products?.colors?.map((colors, index) => (
                    <AllColors
                      key={index}
                      color={colors}
                      index={index}
                      seName={
                        (products.details && products.details[index].seName) ||
                        '/'
                      }
                    />
                  ))}
                </tr>
                <tr className='divide-x divide-x-gray-300'>
                  <td className=''>
                    <div className='p-2'>Size</div>
                  </td>
                  {products?.inventory?.map((inventory, index) => {
                    if (inventory === null) {
                      return (
                        <td key={index} className=''>
                          <div className='p-2 flex flex-wrap gap-2'>"-"</div>
                        </td>
                      );
                    }
                    return inventory.sizes.map((sizes, sIndex) => (
                      <AllSizes key={sIndex} index={index} sizes={sizes} />
                    ));
                  })}
                </tr>
                <tr className='divide-x divide-x-gray-300'>
                  <td className=''>
                    <div className='p-2'>Description</div>
                  </td>
                  {products?.details?.map((product, index) => (
                    <td key={index} className=''>
                      <div
                        className='p-2'
                        dangerouslySetInnerHTML={{
                          __html: product.description,
                        }}
                      ></div>
                    </td>
                  ))}
                </tr>
              </tbody>
            ) : (
              <h4>No Result(s) Found.</h4>
            )}
          </table>
        </div>
        <div className='text-center mt-4'>
          <Link href={paths.PRODUCT_LISTING} className='btn btn-primary'>
            SEND LINK
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ecommerce_CompareProduct;
