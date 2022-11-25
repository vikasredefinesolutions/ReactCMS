import { _ProductColor } from '@type/APIs/colors.res';
import { _ProductInventoryTransfomed } from '@type/APIs/inventory.res';
import { _ProductBySku } from '@type/APIs/productDetail.res';
import { _StoreReturnType } from '@type/store.type';
import Price from 'appComponents/reusables/Price';
import AllColors from 'Components/Compare/AllColors';
import AllSizes from 'Components/Compare/AllSizes';
import DisplayCompareImage from 'Components/Compare/DisplayCompareImage';
import * as CompareController from 'Controllers/CompareProductsController';
import * as _AppController from 'Controllers/_AppController';
import { conditionalLog, highLightError } from 'helpers/global.console';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { __domain } from 'page.config';
import { _showConsoles, __fileNames } from 'show.config';

interface _props {
  products: {
    details: _ProductBySku[] | null;
    colors: Array<_ProductColor[] | null> | null;
    inventory: (_ProductInventoryTransfomed | null)[] | null;
  } | null;
}

const ProductCompare: NextPage<_props> = ({ products }) => {
  return (
    <section className="pt-10 pb-10">
      <div className="container mx-auto">
        <div className="">
          <div className="text-2xl md:text-3xl lg:text-title font-title text-color-title text-center mb-4">
            Compare
          </div>
        </div>
        <div className="relative overflow-auto border border-gray-300">
          <table className="w-full">
            <tbody className="divide-y divide-y-gray-300">
              <DisplayCompareImage />
              <tr className="divide-x divide-x-gray-300">
                <td className="">
                  <div className="p-2">Title</div>
                </td>
                {products?.details?.map((product, index) => (
                  <td key={index} className="">
                    <Link href={product.seName} className="p-2">
                      {product.name}
                    </Link>
                  </td>
                ))}
              </tr>
              <tr className="divide-x divide-x-gray-300">
                <td className="">
                  <div className="p-2">SKU</div>
                </td>
                {products?.details?.map((product, index) => (
                  <td key={index} className="">
                    <div className="p-2">{product.sku}</div>
                  </td>
                ))}
              </tr>
              <tr className="divide-x divide-x-gray-300">
                <td className="">
                  <div className="p-2">Price</div>
                </td>
                {products?.details?.map((product, index) => (
                  <td key={index} className="">
                    <div className="p-2">
                      MSRP <Price value={product.msrp} />
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="divide-x divide-x-gray-300">
                <td className="">
                  <div className="p-2">Color</div>
                </td>
                {products?.colors?.map((colors, index) => (
                  <AllColors
                    color={colors}
                    index={index}
                    seName={
                      (products.details && products.details[index].seName) ||
                      '/'
                    }
                  />
                ))}
              </tr>
              <tr className="divide-x divide-x-gray-300">
                <td className="">
                  <div className="p-2">Size</div>
                </td>
                {products?.inventory?.map((inventory, index) => {
                  if (inventory === null) {
                    return (
                      <td key={index} className="">
                        <div className="p-2 flex flex-wrap gap-2">"-"</div>
                      </td>
                    );
                  }
                  return inventory.sizes.map((sizes) => (
                    <AllSizes key={index} index={index} sizes={sizes} />
                  ));
                })}
              </tr>
              <tr className="divide-x divide-x-gray-300">
                <td className="">
                  <div className="p-2">Description</div>
                </td>
                {products?.details?.map((product, index) => (
                  <td key={index} className="">
                    <div
                      className="p-2"
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    ></div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center mt-4">
          <Link href={'/product-listing'} className="btn btn-primary">
            SEND LINK
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCompare;

interface _ExpectedCompareProductsProps {
  store: null | _StoreReturnType;
  products: null | {
    details: _ProductBySku[] | null;
    colors: Array<_ProductColor[] | null> | null;
    inventory: (_ProductInventoryTransfomed | null)[] | null;
  };
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let expectedProps: _ExpectedCompareProductsProps = {
    products: null,
    store: null,
  };
  const domain = __domain.domain || context.req.rawHeaders[1]!;
  const query: {
    SKUs: undefined | string | string[];
  } = {
    SKUs: context.query?.SKU,
  };

  if (typeof query.SKUs === 'string') {
    query.SKUs = query.SKUs;
  } else {
    query.SKUs = undefined;
  }

  try {
    expectedProps.store = await _AppController.FetchStoreDetails(domain, '');
    if (expectedProps.store && query.SKUs) {
      expectedProps.products = await CompareController.FetchProductsDetail({
        skus: query.SKUs,
        storeId: expectedProps.store.storeId!,
        isAttributeSaparateProduct:
          expectedProps.store.isAttributeSaparateProduct,
      });
    }
  } catch (error) {
    highLightError({ error, component: `Compare Products page` });
  }

  conditionalLog({
    show: _showConsoles.compareProducts,
    data: expectedProps.products,
    type: 'NEXTJS PROPS',
    name: __fileNames.compareProducts,
  });

  return {
    props: {
      products: expectedProps.products,
    },
  };
};
