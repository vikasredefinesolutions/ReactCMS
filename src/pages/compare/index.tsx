import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Price from 'appComponents/reusables/Price';
import { _SeName } from 'constants/store.constant';
import { useTypedSelector } from 'hooks';
import { FetchColors, FetchProductById } from 'services/product.service';
import AllColors from 'Components/Compare/AllColors';
import DisplayCompareImage from 'Components/Compare/DisplayCompareImage';
import Link from 'next/link';

const ProductCompare: NextPage = () => {
  const storeId = useTypedSelector((state) => state.store.id);
  const [items, setItems] = useState<{
    colors: Array<
      | {
          label: string;
          url: string;
        }[]
      | '-'
    >;
    productName: Array<string>;
    id: Array<number>;
    sizes: Array<string[] | '-'>;
    price: Array<string | number>;
    sku: Array<string>;
    description: Array<string>;
  } | null>(null);

  const addProductToTable = (res: any) => {
    setItems((state) => {
      if (state === null) {
        return {
          productName: [res.productName],
          sku: [res.sku],
          price: [res.price],
          colors: [res.colors],
          sizes: [res.sizes],
          description: [res.description],
          id: [res.id],
        };
      }

      return {
        productName: [...state.productName, res.productName],
        sku: [...state.sku, res.sku],
        price: [...state.price, res.price],
        colors: [...state.colors, res.colors],
        sizes: [...state.sizes, res.sizes],
        description: [...state.description, res.description],
        id: [...state.id, res.id],
      };
    });
  };

  const fetchColorsById = (payload: {
    productName: string;
    id: number;
    sizes: string[] | '-';
    price: string | number;
    sku: string;
    description: string;
  }): Promise<{
    colors:
      | {
          label: string;
          url: string;
        }[]
      | '-';
    productName: string;
    id: number;
    sizes: string[] | '-';
    price: string | number;
    sku: string;
    description: string;
  }> => {
    return FetchColors({ productId: payload.id }).then((res) => {
      const colors = res.map((color) => ({
        label: color.name,
        url: color.imageUrl,
      }));

      if (colors.length === 0) {
        return { ...payload, colors: '-' };
      }

      return { ...payload, colors };
    });
  };

  const fetchProductDetails = ({
    seName,
    storeId,
  }: {
    seName: string;
    storeId: number;
  }) => {
    FetchProductById({
      seName,
      storeId,
    }).then((res) => ({
      productName: res.name || '-',
      id: res.id,
      sizes: res.sizes || '-',
      price: res.msrp || '-',
      sku: res.sku || '-',
      description: res.description || '-',
    }));
    // .then((info) => fetchColorsById(info))
    // .then((product) => addProductToTable(product));
  };

  useEffect(() => {
    if (storeId) {
      // const sku = _sku.split(',');
      ['', ''].map(() => {
        fetchProductDetails({
          seName: _SeName.nike,
          storeId: storeId!,
        });
      });
    }
  }, []);

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
                {items?.productName.map((name, index) => (
                  <td key={index} className="">
                    <div className="p-2">{name}</div>
                  </td>
                ))}
              </tr>
              <tr className="divide-x divide-x-gray-300">
                <td className="">
                  <div className="p-2">SKU</div>
                </td>
                {items?.sku.map((sku, index) => (
                  <td key={index} className="">
                    <div className="p-2">{sku}</div>
                  </td>
                ))}
              </tr>
              <tr className="divide-x divide-x-gray-300">
                <td className="">
                  <div className="p-2">Price</div>
                </td>
                {items?.price.map((price, index) => (
                  <td key={index} className="">
                    <div className="p-2">
                      MSRP <Price value={price} />
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="divide-x divide-x-gray-300">
                <td className="">
                  <div className="p-2">Color</div>
                </td>
                {items?.colors.map((color, index) => (
                  <AllColors color={color} index={index} />
                ))}
              </tr>
              <tr className="divide-x divide-x-gray-300">
                <td className="">
                  <div className="p-2">Size</div>
                </td>
                {items?.sizes.map((sizes) => {
                  if (sizes === '-') {
                    return (
                      <td className="">
                        <div className="p-2 flex flex-wrap gap-2">"-"</div>
                      </td>
                    );
                  }
                  return (
                    <td className="">
                      <div className="p-2 flex flex-wrap gap-2">
                        {sizes.map((size) => (
                          <div className="w-10 h-10 border border-gray-300 bg-gray-100 flex justify-center items-center">
                            {size}
                          </div>
                        ))}
                      </div>
                    </td>
                  );
                })}
              </tr>
              <tr className="divide-x divide-x-gray-300">
                <td className="">
                  <div className="p-2">Description</div>
                </td>
                {items?.description.map((desc, index) => (
                  <td key={index} className="">
                    <div
                      className="p-2"
                      dangerouslySetInnerHTML={{ __html: desc }}
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
