import { __Cookie } from '@constants/global.constant';
import { addToCart } from '@services/cart.service';
import { FetchInventoryById } from '@services/product.service';
import { _StoreCache } from '@type/slug.type';
import config from 'api.config';
import Price from 'appComponents/reUsable/Price';
import ProductImg from 'Components/ProductDetails/ProductImg';
import SizeChartModal from 'Components/ProductDetails/SizeChartModal';
import {
  _ProductDetails,
  _ProductDetailsProps
} from 'definations/APIs/productDetail.res';
import { _Store } from 'page.config';

import { getAddToCartObject, setCookie } from 'helpers/common.helper';
import { highLightError } from 'helpers/global.console';
import { useActions, useTypedSelector } from 'hooks';
import { properties } from 'mock/properties.mock';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const Corporate_ProductDetails: React.FC<_ProductDetailsProps & _StoreCache> = (
  product,
) => {
  const { showModal, updateQuantities, updateQuantitieSingle } = useActions();
  const selectedproduct = useTypedSelector((state) => state.product.selected);
  const customerId = useTypedSelector((state) => state.user.id);
  const { store_productDetails, setColor, setShowLoader, product_storeData } =
    useActions();
  const [color, setColors] = useState<string | null>(null);
  const [size, setSize] = useState<string | null>(null);
  const [qty, setQty] = useState<number>(0);
  const [showMultipleSize, setShowMultipleSize] = useState(false);
  const [multipleQty, setMultipleQty] = useState<Array<{
    qty: number;
    size: string;
    price: number;
  }> | null>(null);
  const [showSizeChart, setShowSizeChart] = useState(false);
  // const addParams = () => {
  //   router.query.altview = '1';
  //   router.query.v = 'product-detail';
  //   router.push(router);
  // };

  const salePrice = useTypedSelector((state) => state.product.product?.price?.salePrice)

  useEffect(() => {
    if (product.details) {
      store_productDetails({
        brand: {
          id: product.details!.brandID,
          name: product.details!.brandName,
          url: product.details!.brandImage,
        },
        product: {
          customization: product.details.isEnableLogolocation || false,
          id: product.details!.id || null,
          name: product.details!.name || null,
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
        setColors(product.colors[0].name);
        const allColorAttributes = product.colors.map(
          (color) => color.attributeOptionId,
        );

        FetchInventoryById({
          productId: product.details.id,
          attributeOptionId: allColorAttributes,
        }).then((res) =>
          product_storeData({
            type: 'INVENTORY_LIST',
            data: res,
          }),
        );
      }
    }

    setShowLoader(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (product === null) return <p>Product Page Loading...</p>;

  if (product?.details === null || product?.details === undefined) {
    return <> Product Details not found </>;
  }

  const _SEO = {
    title: product.SEO?.pageTitle || product.details.name || 'Product Page',
    desc:
      product.SEO?.metaDescription ||
      product.details.description ||
      'Product Description',
    keywords:
      product.SEO?.metaKeywords || product.details.name || 'Product Keywords',
  };

  const HeadTag = (
    <Head>
      <title>{_SEO.title}</title>
      <meta name="description" content={_SEO.desc} key="desc" />
      <meta name="keywords" content={_SEO.keywords} />
    </Head>
  );
  const multipleQtyChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name: _size, value } = e.target;
    const _qty = ~~value;

    setSize(_size)
    setQty(_qty)
    handleChange(_size,_qty)
    
    let multipleArray = multipleQty !== null ? [...multipleQty] : [];
    const index = multipleArray?.findIndex(({ size }) => _size === size);
    if (product.details) {
      const price = product.details.salePrice;

      if (index !== undefined && index > -1) {
        multipleArray?.splice(index, 1);
      }
      if (_qty >= 1) {
        multipleArray?.push({
          qty: _qty,
          size: _size,
          price,
        });
      }
      setMultipleQty(multipleArray);
    }
  };

  const getMultipleQtyValue = (_size: string) => {
    const qtyObject = multipleQty?.find(({ size }) => _size === size);
    if (qtyObject) {
      return qtyObject.qty;
    }
    return 0;
  };

  const getTotals = () => {
    let totalQty = 0;
    let price = 0;
    if (product.details) {
      price = product.details.salePrice;
    }
    multipleQty?.forEach(({ qty }) => (totalQty += qty));

    return {
      totalQty,
      totalPrice: totalQty * price,
    };
  };

  const handleChange = (size : string,qty : number) => {
    if(size != null) {
      updateQuantities({
        size: size,
        qty: qty,
        price: product?.details?.salePrice ?? 0,
      });
    }
  };

  const buyNowHandler = async () => {
    if (showMultipleSize) {
      if (multipleQty === null) {
        showModal({
          message: 'Please select any one size.',
          title: 'Required Size',
        });
        return;
      }
    } else {
      if (!color || !size) {
        showModal({
          message: 'Please select any one size.',
          title: 'Required Size',
        });
        return;
      }
      if (qty < 1) {
        showModal({
          message: 'Please enter valid quantity.',
          title: 'Required Quantity',
        });
        return;
      }
    }
    if (product.details) {
      const price = product.details.salePrice;
      const cartObject = await getAddToCartObject({
        userId: customerId || 0,
        note: '',
        sizeQtys: showMultipleSize
          ? multipleQty
          : [
            {
              qty,
              size: size || '',
              price,
            },
          ],
        productDetails: selectedproduct,
        total: showMultipleSize
          ? getTotals()
          : {
            totalPrice: price * qty,
            totalQty: qty,
          },
      });

      if (cartObject) {
        try {
          const res = await addToCart(cartObject);
          if (!customerId) {
            setCookie(__Cookie.tempCustomerId, res, 7);
          }
          showModal({
            message: 'Added to cart Successfully',
            title: 'Success',
          });
        } catch (error) {
          highLightError({ error, component: 'StartOrderModal' });
        }
      }
    }
  };


  const singleChangeSize = (value: string) => {
    setSize(value)
    if (size != null) {
      updateQuantitieSingle({
        size: value,
        qty: qty,
        price: salePrice!
      })
    }
  }
  const singleChangeQuantity = (value: string) => {
    setQty(+value)
    if (size != null) {
      updateQuantitieSingle({
        size: size,
        qty: +value,
        price: salePrice!
      })
    }
  }

  if (product.storeCode === _Store.type22 || product.storeCode === _Store.type5) {
    return (
      <>
        {HeadTag}
        <div className={`font-Outfit`}>
          <div className="container mx-auto mt-6">
            <div className="lg:grid lg:grid-cols-12 lg:items-start px-3">
              <ProductImg
                product={product as unknown as _ProductDetails}
                storeCode={product.storeCode || ''}
              />
              <div className="lg:col-end-13 lg:col-span-5 mt-4 md:mt-10 px-2 md:px-4 sm:px-0 sm:mt-16 lg:mt-0">
                <div className="mb-4 border-b border-b-gray-300">
                  <div className="text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title mb-4">
                    {product.details.name}
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-gray-700 text-sm">
                    <span className="inline-block mr-1 font-semibold">
                      Product Code :
                    </span>{' '}
                    <span>{product.details.sku}</span>
                  </div>
                </div>
                <div className="flex align-top mb-4">
                  <div className="flex items-center text-sm mr-2">
                    {' '}
                    <span className="text-sm font-semibold">Colors:</span>{' '}
                  </div>
                  <div className="flex flex-wrap gap-1 text-sm text-center">
                    {product.colors?.map((colour) => {
                      const colorName = colour.name;
                      return (
                        <div
                          onClick={() => {
                            setColor(colour);
                            setColors(colour.name);
                          }}
                          key={colour.name}
                          className="w-8 h-8"
                        >
                          <div
                            className={`border border-gray-300 p-px cursor-pointer${color && colorName === color
                              ? ' border-secondary'
                              : ''
                              }`}
                          >
                            <img
                              src={`${config.mediaBaseUrl}${colour.imageUrl}`}
                              alt=""
                              className="w-full object-center object-cover w-7 h-7"
                            />
                          </div>
                          <div className="hidden">{colour.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {!showMultipleSize && (
                  <div className="flex flex-wrap mb-4">
                    <div className="flex mr-2 text-sm items-center">
                      {' '}
                      <span className="text-sm font-semibold">Size:</span>
                    </div>

                    <div className="text-sm flex items-center gap-1">
                      {properties.product.size_input === 'checkbox' ? (
                        product.details.sizes.split(',').map((_size) => (
                          <div
                            onClick={() => setSize(_size)}
                            key={_size}
                            className={`border border-gray-300 hover:border-secondary h-8 w-8 flex items-center justify-center cursor-pointer${_size === size ? ' border-secondary' : ''
                              }`}
                          >
                            {_size}
                          </div>
                        ))
                      ) : (
                        <select
                          className="form-input md:pr-3"
                          onChange={(e) => {
                            singleChangeSize(e.target.value)
                          }}
                        >
                          <option>Select Size </option>
                          {product.details.sizes.split(',').map((_size) => (
                            <option value={_size} key={_size}>
                              {_size}
                            </option>
                          ))}
                        </select>
                      )}
                      <button
                        className='ml-2'
                        onClick={() => setShowSizeChart(true)}
                      >
                        Size Chart
                      </button>
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap items-center mb-4">
                  <div className="flex mr-2 items-center text-sm">
                    {' '}
                    <span className="text-sm font-semibold">Qty:</span>
                  </div>
                  <div className="text-sm">
                    {!showMultipleSize ? (
                      <div className="w-28">
                        <input
                          min={0}
                          onChange={(e) => {
                            singleChangeQuantity(e.target.value)
                          }}
                          value={qty}
                          type="number"
                          className="form-input text-center"
                          id="QTY"
                          placeholder=""
                        />
                      </div>
                    ) : (
                      <div className="mb-4">
                        {product.details.sizes.split(',').map((_size) => (
                          <div
                            className="flex flex-wrap item-center mb-4"
                            key={_size}
                          >
                            <p className="w-32 item-center">{_size}</p>
                            <p className="w-32 item-center">100</p>
                            <div className="w-28">
                              <input
                                min={0}
                                name={_size}
                                onChange={multipleQtyChangeHandler}
                                value={getMultipleQtyValue(_size)}
                                type="number"
                                className="form-input w-32 pr-0"
                                id="QTY"
                                placeholder=""
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {properties.product.isMultiple ?
                      <button
                        onClick={() => {
                          updateQuantitieSingle({
                            size: '',
                            qty: 0,
                            price: 0  
                          })
                          setShowMultipleSize(!showMultipleSize);
                        }}
                      >
                        Click here to add {showMultipleSize ? 'single' : 'mutiple'}{' '}
                        sizes
                      </button> :
                      null
                    }
                  </div>
                </div>
                <div className='pay'>
                  <div className="mt-3 bg-gray-100 p-4">
                    <div className="text-sm text-gray-900 flex flex-wrap items-end">
                      <div className="w-28">
                        <span className="">You Pay</span>
                      </div>
                      <div className="">
                        <span className="text-2xl tracking-wider">
                          <Price
                            value={
                              showMultipleSize
                                ? getTotals().totalPrice
                                : product.details.salePrice * qty
                            }
                          />
                        </span>
                      </div>
                    </div>
                    <div className="w-full text-left flex justify-end mt-4">
                      <button
                        type="button"
                        onClick={buyNowHandler}
                        className="btn btn-secondary w-full text-center !font-bold"
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {showSizeChart && (
                <SizeChartModal
                  modalHandler={() => {
                    setShowSizeChart(false);
                  }}
                  storeCode={product.storeCode || ''}
                />
              )}
            </div>
          </div>

          {product.details.description ?
            <div className='description'>
              <div className="container mx-auto">
                <div className="bg-white pt-10 pb-10 px-4">
                  <div className="">
                    <div className="bg-primary py-2 px-4 text-white inline-block">
                      Description
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 tracking-widest p-6 border border-gray-300">
                    <p className='mb-4'>
                      {product.details.description}
                    </p>
                  </div>
                </div>
              </div>
            </div> : ''
          }
        </div>
      </>
    );
  }


  return (
    <>
      {HeadTag}
      <div className={`font-Outfit`}>
        <div className="container mx-auto mt-6">
          <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:items-start">
            <ProductImg
              product={product as unknown as _ProductDetails}
              storeCode={product.storeCode || ''}
            />
            <div className="">
              <div className="mb-4 border-b border-b-gray-300">
                <div className="text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title mb-4">
                  {product.details.name}
                </div>
              </div>
              <div className="mb-4">
                <div className="text-gray-700 text-sm">
                  {' '}
                  <span className="inline-block w-32 font-semibold">
                    Product Code :
                  </span>{' '}
                  <span>{product.details.sku}</span>
                </div>
              </div>
              <div className="flex align-top mb-4">
                <div className="w-32 text-sm">
                  {' '}
                  <span className="text-sm font-semibold">Colors:</span>{' '}
                </div>
                <div className="flex flex-wrap gap-1 text-sm text-center">
                  {product.colors?.map((colour) => {
                    const colorName = colour.name;
                    return (
                      <div
                        onClick={() => {
                          setColor(colour);
                          setColors(colour.name);
                        }}
                        key={colour.name}
                        className="w-8"
                      >
                        <div
                          className={`border border-gray-300 p-px cursor-pointer${color && colorName === color
                            ? ' border-secondary'
                            : ''
                            }`}
                        >
                          <img
                            src={`${config.mediaBaseUrl}${colour.imageUrl}`}
                            alt=""
                            className="w-full object-center object-cover"
                          />
                        </div>
                        <div className="hidden">{colour.name}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {!showMultipleSize && (
                <div className="flex flex-wrap mb-4">
                  <div className="w-32 text-sm items-center">
                    {' '}
                    <span className="text-sm font-semibold">Size:</span>
                  </div>

                  <div className="text-sm flex flex-wrap items-center gap-1">
                    {properties.product.size_input === 'checkbox' ? (
                      product.details.sizes.split(',').map((_size) => (
                        <div
                          onClick={() => setSize(_size)}
                          key={_size}
                          className={`border border-gray-300 hover:border-secondary h-8 w-8 flex items-center justify-center cursor-pointer${_size === size ? ' border-secondary' : ''
                            }`}
                        >
                          {_size}
                        </div>
                      ))
                    ) : (
                      <select
                        className="form-input"
                        onChange={(e) => setSize(e.target.value)}
                      >
                        <option>Select Size</option>
                        {product.details.sizes.split(',').map((_size) => (
                          <option value={_size} key={_size}>
                            {_size}
                          </option>
                        ))}
                      </select>
                    )}
                    <div className="">
                      <button
                        onClick={() => setShowSizeChart(true)}
                        data-modal-toggle="sizechartModal"
                      >
                        Size Chart
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex flex-wrap items-center mb-4">
                <div className="w-32 text-sm items-center">
                  {' '}
                  <span className="text-sm font-semibold">Qty:</span>
                </div>
                <div className="text-sm">
                  {!showMultipleSize ? (
                    <div className="w-28">
                      <input
                        onChange={(e) => setQty(~~e.target.value)}
                        value={qty}
                        type="number"
                        className="form-input"
                        id="QTY"
                        placeholder=""
                      />
                    </div>
                  ) : (
                    <div className="mb-4">
                      {product.details.sizes.split(',').map((_size) => (
                        <div
                          className="flex flex-wrap item-center mb-4"
                          key={_size}
                        >
                          <p className="w-32 item-center">{_size}</p>
                          <p className="w-32 item-center">100</p>
                          <div className="w-28">
                            <input
                              name={_size}
                              onChange={multipleQtyChangeHandler}
                              value={getMultipleQtyValue(_size)}
                              type="number"
                              className="form-input w-32 pr-0"
                              id="QTY"
                              placeholder=""
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <button
                    onClick={() => {
                      setShowMultipleSize(!showMultipleSize);
                    }}
                  >
                    Click here to add {showMultipleSize ? 'single' : 'mutiple'}{' '}
                    sizes
                  </button>
                </div>
              </div>
              <div>
                <div className="mt-3 bg-gray-100 p-4">
                  <div className="text-sm text-gray-900 flex flex-wrap items-end">
                    <div className="w-28">
                      <span className="">You Pay</span>
                    </div>
                    <div className="">
                      <span className="text-2xl tracking-wider">
                        <Price
                          value={
                            showMultipleSize
                              ? getTotals().totalPrice
                              : product.details.salePrice * qty
                          }
                        />
                      </span>
                    </div>
                  </div>
                  <div className="w-full text-left flex justify-end mt-4">
                    <button
                      type="button"
                      onClick={buyNowHandler}
                      className="btn btn-secondary w-full text-center !font-bold"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <ProductInfo product={product} /> */}
            {showSizeChart && (
              <SizeChartModal
                modalHandler={() => {
                  setShowSizeChart(false);
                }}
                storeCode={product.storeCode || ''}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Corporate_ProductDetails;
