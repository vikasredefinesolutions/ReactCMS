import { __Cookie } from '@constants/global.constant';
import { addToCart } from '@services/cart.service';
import {
  FetchInventoryById,
  FetchProductRecentlyViewed,
  InsertProductRecentlyViewed,
} from '@services/product.service';
import { _StoreCache } from '@type/slug.type';
import config from 'api.config';
import Price from 'appComponents/reUsable/Price';
import ProductImg from 'Components/ProductDetails/ProductImg';
import SizeChartModal from 'Components/ProductDetails/SizeChartModal';
import {
  _ProductDetails,
  _ProductDetailsProps,
  _ProductsRecentlyViewedResponse,
} from 'definations/APIs/productDetail.res';
import { _Store, __constant } from 'page.config';

import ProductAlike from 'Components/ProductDetails/ProductAlike';
import ProductRecentlyViewed from 'Components/ProductDetails/ProductRecentlyViewed';
import { getAddToCartObject, setCookie } from 'helpers/common.helper';
import getLocation from 'helpers/getLocation';
import { highLightError } from 'helpers/global.console';
import { useActions, useTypedSelector } from 'hooks';
import { properties } from 'mock/properties.mock';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface INVENTORY_SIZE {
  [key: string]: number;
}

const Corporate_ProductDetails: React.FC<_ProductDetailsProps & _StoreCache> = (
  product,
) => {
  const { showModal, updateQuantities, updateQuantitieSingle } = useActions();
  const selectedproduct = useTypedSelector((state) => state.product.selected);
  const productinventory = useTypedSelector(
    (state) => state.product.product.inventory?.inventory,
  );
  const storeId = useTypedSelector((state) => state.store.id);
  const customerId = useTypedSelector((state) => state.user.id);
  const { store_productDetails, setColor, setShowLoader, product_storeData } =
    useActions();
  const [color, setColors] = useState<string | null>(null);
  const router = useRouter();
  const [size, setSize] = useState<string | null>(null);
  const [qty, setQty] = useState<number>(0);
  const [sizeAttributeOptionId, setSizeAttributeOptionId] = useState<number>(0);
  const [productInventory, setProductInventory] = useState<INVENTORY_SIZE>({});
  const [recentlyViewedProduct, setRecentlyViewedProduct] = useState<
    Array<_ProductsRecentlyViewedResponse>
  >([]);
  const [showMultipleSize, setShowMultipleSize] = useState(false);
  const [multipleQty, setMultipleQty] = useState<
    Array<{
      id: number;
      attributeOptionId: number;
      qty: number;
      size: string;
      price: number;
    }>
  >([]);
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [availaibleSizes, setAvailaibleSizes] = useState<Array<string>>([]);
  const [stock, setstock] = useState<string>('Out Of Stock');
  // const addParams = () => {
  //   router.query.altview = '1';
  //   router.query.v = 'product-detail';
  //   router.push(router);
  // };

  const salePrice = useTypedSelector(
    (state) => state.product.product?.price?.salePrice,
  );

  useEffect(() => {
    if (product.details) {
      store_productDetails({
        brand: {
          id: product.details!.brandID,
          name: product.details!.brandName,
          url: product.details!.brandColorLogoUrl,
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
        }).then((res) => {
          product_storeData({
            type: 'INVENTORY_LIST',
            data: res,
          });
        });
      }
    }
    addRecentlyViewedProduct().then((res) => {
      setRecentlyViewedProduct(res);
    });
    setShowLoader(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    availaibleSize();
    availaibleInventory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productinventory]);
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
      <meta name='description' content={_SEO.desc} key='desc' />
      <meta name='keywords' content={_SEO.keywords} />
    </Head>
  );
  const multipleQtyChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: _size, id: _attributeOptionId, value } = e.target;
    const _qty = ~~value;

    setSize(_size);
    setSizeAttributeOptionId(+_attributeOptionId);
    setQty(_qty);
    handleChange(_size, _qty, _attributeOptionId);

    let multipleArray = multipleQty !== null ? [...multipleQty] : [];
    const index = multipleArray?.findIndex(({ size }) => _size === size);
    if (product.details) {
      const price = product.details.salePrice;

      if (index !== undefined && index > -1) {
        multipleArray?.splice(index, 1);
      }
      if (_qty > productInventory[`${_size}_max`]) {
        multipleArray?.push({
          id: 0,
          qty: productInventory[`${_size}_max`],
          attributeOptionId: sizeAttributeOptionId,
          size: _size,
          price,
        });
      } else {
        multipleArray?.push({
          id: 0,
          attributeOptionId: sizeAttributeOptionId,
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

  const availaibleSize = () => {
    let flag = false;
    setAvailaibleSizes([]);
    productinventory?.forEach((val) => {
      if (
        selectedproduct.color.attributeOptionId ===
          val.colorAttributeOptionId &&
        val.inventory > 0
      ) {
        setAvailaibleSizes((prev) => [...prev, val.name]);
        product.details?.sizes.split(',').forEach((_size) => {
          if (val.name === _size) {
            flag = true;
          }
        });
      }
    });
    if (flag) {
      setstock('In Stock');
      flag = false;
    } else {
      setstock('Out Of Stock');
    }
  };

  const availaibleInventory = () => {
    let obj: INVENTORY_SIZE = {};
    productinventory?.forEach((val) => {
      if (
        selectedproduct.color.attributeOptionId === val.colorAttributeOptionId
      ) {
        obj[`${val.name}_max`] = val.inventory;
      }
    });
    setProductInventory(obj);
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

  const handleChange = (
    size: string,
    qty: number,
    attributeOptionId: string,
  ) => {
    if (size != null) {
      updateQuantities({
        attributeOptionId: +attributeOptionId,
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
      } else {
        let totalQty = 0;
        multipleQty.forEach((val) => {
          totalQty = totalQty + val.qty;
        });
        if (totalQty < selectedproduct.color.minQuantity) {
          showModal({
            message: `Please enter quantity greater than or equal to ${selectedproduct.color.minQuantity}.`,
            title: 'Required Quantity',
          });
          return;
        }
      }
    } else {
      if (!color || !size) {
        showModal({
          message: 'Please select any one size.',
          title: 'Required Size',
        });
        return;
      }
      if (qty < selectedproduct.color.minQuantity) {
        showModal({
          message: `Please enter quantity greater than or equal to ${selectedproduct.color.minQuantity}.`,
          title: 'Required Quantity',
        });
        return;
      }
    }
    if (product.details) {
      const price = product.details.salePrice;
      const cartObject = await getAddToCartObject({
        userId: customerId || 0,
        storeId: storeId || 0,
        // Passed hardcode value because employee login is only available in CG.
        isEmployeeLoggedIn: false,
        note: '',
        sizeQtys: showMultipleSize
          ? multipleQty
          : [
              {
                id: 0,
                attributeOptionId: sizeAttributeOptionId,
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
            setCookie(__Cookie.tempCustomerId, res, 'Session');
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
    setSize(value);
    if (size != null) {
      updateQuantitieSingle({
        attributeOptionId: sizeAttributeOptionId,
        size: value,
        qty: qty,
        price: salePrice!,
      });
    }
  };
  const singleChangeQuantity = (value: string) => {
    if (+value > productInventory[`${size}_max`]) {
      setQty(productInventory[`${size}_max`]);
    } else {
      setQty(+value);
    }
    if (size != null) {
      updateQuantitieSingle({
        attributeOptionId: sizeAttributeOptionId,
        size: size,
        qty: +value,
        price: salePrice!,
      });
    }
  };

  const addRecentlyViewedProduct = async () => {
    const location = await getLocation();
    const pageUrl = router.query;
    let payloadObj = {
      recentViewModel: {
        productId: product.SEO?.productId || 0,
        customerId: customerId || 0,
        pageName: 'descriptionPage',
        pageUrl: `${pageUrl.slug}`,
        ipAddress: `${location.ip_address}`,
        recStatus: 'A',
      },
    };
    InsertProductRecentlyViewed(payloadObj);

    if (storeId) {
      let fetchRecentlyViewedPayload = {
        productId: product.SEO?.productId || 0,
        storeId: storeId,
        ipAddress: `${location.ip_address}`,
        customerId: customerId || 0,
        maximumItemsForFetch: 10,
      };

      return FetchProductRecentlyViewed(fetchRecentlyViewedPayload);
    }
    return [];
  };
  if (
    product.storeCode === _Store.type5 ||
    product.storeCode === _Store.type6 ||
    product.storeCode === _Store.type8 ||
    product.storeCode === _Store.type10 ||
    product.storeCode === _Store.type12 ||
    product.storeCode === _Store.type13 ||
    product.storeCode === _Store.type21 ||
    product.storeCode === _Store.type22 ||
    product.storeCode === _Store.type23 ||
    product.storeCode === _Store.type24 ||
    product.storeCode === _Store.type26 ||
    product.storeCode === _Store.type27
  ) {
    return (
      <>
        {HeadTag}
        <div className={`font-Outfit`}>
          <div className='container mx-auto mt-6'>
            <div className='lg:grid lg:grid-cols-12 lg:items-start px-3'>
              <ProductImg
                product={product as unknown as _ProductDetails}
                storeCode={product.storeCode || ''}
              />
              <div className='lg:col-end-13 lg:col-span-5 mt-4 md:mt-10 px-2 md:px-4 sm:px-0 sm:mt-16 lg:mt-0'>
                <div className='mb-4 border-b border-b-gray-300'>
                  <div className='text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title mb-4'>
                    {product.details.name}
                  </div>
                </div>
                {product.storeCode === _Store.type26 && (
                  <div className='mb-4 border-b border-b-gray-300'>
                    <div className='mb-4 text-rose-800 font-semibold text-xs'>
                      ATTENTION: EMPLOYEES MAY REDEEM ONLY 1 PIECE OF APPAREL.
                    </div>
                  </div>
                )}
                <div className='mb-4'>
                  <div className='text-gray-700 text-sm'>
                    <span className='inline-block mr-1 font-semibold'>
                      Product Code :
                    </span>{' '}
                    <span>{product.details.sku}</span>
                  </div>
                </div>
                {(product.storeCode === _Store.type26 ||
                  product.storeCode === _Store.type12) && (
                  <div className='mb-4'>
                    <div className='text-gray-700 text-sm'>
                      <span className='inline-block mr-1 font-semibold'>
                        Availability :
                      </span>{' '}
                      <span>{stock}</span>
                    </div>
                  </div>
                )}
                <div className='flex align-top mb-4'>
                  <div className='flex items-center text-sm mr-2'>
                    {' '}
                    <span className='text-sm font-semibold'>Colors:</span>{' '}
                  </div>
                  <div className='flex flex-wrap gap-1 text-sm text-center'>
                    {product.colors?.map((colour) => {
                      const colorName = colour.name;
                      return (
                        <div
                          onClick={() => {
                            setColor(colour);
                            setColors(colour.name);
                            setSize('');
                            availaibleSize();
                            availaibleInventory();
                          }}
                          key={colour.name}
                          className={`w-8 h-8 text-center border-2 cursor-pointer${
                            colour.name === color ? ' border-primary' : ''
                          } hover:border-primary`}
                        >
                          <div>
                            <img
                              src={`${config.mediaBaseUrl}${colour.imageUrl}`}
                              alt=''
                              className='object-center object-cover w-7 h-7'
                            />
                          </div>
                          <div className='hidden'>{colour.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {!showMultipleSize && (
                  <div className='flex flex-wrap mb-4'>
                    <div className='flex mr-2 text-sm items-center'>
                      {' '}
                      <span className='text-sm font-semibold'>Size:</span>
                    </div>
                    <div className='text-sm flex items-center gap-1'>
                      {properties.product.size_input === 'checkbox' ? (
                        productinventory?.map((inventory) => {
                          if (
                            inventory.colorAttributeOptionId ===
                            selectedproduct.color.attributeOptionId
                          ) {
                            return (
                              <>
                                <button
                                  onClick={() => {
                                    setSize(inventory.name);
                                    setSizeAttributeOptionId(
                                      inventory.attributeOptionId,
                                    );
                                  }}
                                  key={inventory.name}
                                  className={`border-2 border-gray-300 hover:border-secondary h-8 w-8 flex items-center justify-center cursor-pointer ${
                                    inventory.name === size
                                      ? ' border-primary'
                                      : ''
                                  }`}
                                >
                                  {inventory.name}
                                </button>
                              </>
                            );
                          }
                        })
                      ) : properties.product.size_input === 'select' ? (
                        <>
                          <div className='text-sm flex flex-wrap items-center gap-1'>
                            {productinventory?.map((inventory) => {
                              if (
                                inventory.colorAttributeOptionId ===
                                selectedproduct.color.attributeOptionId
                              ) {
                                return (
                                  <>
                                    <button
                                      onClick={() => {
                                        setSize(inventory.name);
                                        setQty(0);
                                        setSizeAttributeOptionId(
                                          inventory.attributeOptionId,
                                        );
                                      }}
                                      key={inventory.name}
                                      disabled={
                                        !availaibleSizes.includes(
                                          inventory.name,
                                        )
                                      }
                                      className={`border-2 border-gray-300 hover:bg-[#D40F8D]  h-8 w-8 flex items-center justify-center ${
                                        inventory.name === size
                                          ? product.storeCode !== _Store.type21
                                            ? 'bg-secondary border-primary'
                                            : 'opacity-50'
                                          : ''
                                      }
                               ${
                                 !availaibleSizes.includes(inventory.name)
                                   ? 'cursor-not-allowed opacity-50'
                                   : 'cursor-pointer '
                               }
                              `}
                                    >
                                      {inventory.name}
                                    </button>
                                  </>
                                );
                              }
                            })}
                          </div>
                        </>
                      ) : (
                        <select
                          className='form-input md:pr-3'
                          onChange={(e) => {
                            singleChangeSize(e.target.value);
                            setSizeAttributeOptionId(+e.target.id);
                          }}
                        >
                          <option>Select Size </option>
                          {productinventory?.map((inventory) => {
                            if (
                              inventory.colorAttributeOptionId ===
                              selectedproduct.color.attributeOptionId
                            ) {
                              return (
                                <>
                                  <option
                                    value={inventory.name}
                                    id={`${inventory.attributeOptionId}`}
                                  >
                                    {inventory.name}
                                  </option>
                                </>
                              );
                            }
                          })}
                        </select>
                      )}
                      {product.storeCode !== _Store.type21 && (
                        <button
                          className='ml-2'
                          onClick={() => setShowSizeChart(true)}
                        >
                          Size Chart
                        </button>
                      )}
                    </div>
                  </div>
                )}
                <div className='flex flex-wrap items-center mb-4'>
                  <div
                    className={`${
                      product.storeCode !== _Store.type21
                        ? 'flex mr-2 items-center text-sm'
                        : 'w-32 text-sm items-center'
                    }`}
                  >
                    {' '}
                    <span className='text-sm font-semibold'>Qty:</span>
                  </div>
                  <div className='text-sm'>
                    {!showMultipleSize ? (
                      <div className='w-20'>
                        <input
                          min={0}
                          max={productInventory[`${size}_max`]}
                          onChange={(e) => {
                            singleChangeQuantity(e.target.value);
                          }}
                          value={qty}
                          type='number'
                          className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2'
                          id='QTY'
                          placeholder=''
                        />
                      </div>
                    ) : (
                      <div className='mb-4'>
                        {color &&
                          productinventory?.map((inventory) => {
                            if (
                              inventory.colorAttributeOptionId ===
                              selectedproduct.color.attributeOptionId
                            ) {
                              return (
                                <div
                                  className='flex flex-wrap item-center mb-4'
                                  key={inventory.name}
                                >
                                  <p
                                    className={`w-32 item-center ${
                                      availaibleSizes.includes(inventory.name)
                                        ? 'line-through'
                                        : ''
                                    }`}
                                  >
                                    {inventory.name}
                                  </p>
                                  <p className='w-32 item-center'>
                                    {productInventory[`${inventory.name}_max`]}
                                  </p>
                                  <div className='w-32'>
                                    <input
                                      min={0}
                                      max={
                                        productInventory[
                                          `${inventory.name}_max`
                                        ]
                                      }
                                      name={inventory.name}
                                      disabled={
                                        !availaibleSizes.includes(
                                          inventory.name,
                                        )
                                      }
                                      onChange={multipleQtyChangeHandler}
                                      value={getMultipleQtyValue(
                                        inventory.name,
                                      )}
                                      type='number'
                                      className='form-input w-35 pl-5'
                                      id={`${inventory.attributeOptionId}`}
                                      placeholder=''
                                    />
                                  </div>
                                </div>
                              );
                            }
                          })}
                      </div>
                    )}
                    {properties.product.isMultiple && (
                      <button
                        onClick={() => {
                          updateQuantitieSingle({
                            attributeOptionId: 0,
                            size: '',
                            qty: 0,
                            price: 0,
                          });
                          setShowMultipleSize(!showMultipleSize);
                        }}
                      >
                        Click here to add{' '}
                        {showMultipleSize ? 'single' : 'mutiple'} sizes
                      </button>
                    )}
                  </div>
                </div>
                <div className='pay'>
                  <div
                    className={`mt-3 ${
                      product.storeCode === _Store.type21
                        ? 'bg-light-gray'
                        : 'bg-gray-100'
                    } p-4`}
                  >
                    <div className='text-sm text-gray-900 flex flex-wrap items-end'>
                      <div className='w-28'>
                        <span className=''>You Pay</span>
                      </div>
                      <div className=''>
                        <span className='text-2xl tracking-wider'>
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
                    <div className='w-full text-left flex justify-end mt-4'>
                      <button
                        type='button'
                        onClick={buyNowHandler}
                        className={`btn ${
                          product.storeCode === _Store.type21 ||
                          product.storeCode === _Store.type26 ||
                          product.storeCode === _Store.type24 ||
                          product.storeCode === _Store.type23 ||
                          product.storeCode === _Store.type22
                            ? 'btn-primary'
                            : 'btn-secondary'
                        }  w-full text-center !font-bold`}
                      >
                        {product.storeCode === _Store.type21 ||
                        product.storeCode === _Store.type23
                          ? 'Buy Now'
                          : 'ADD TO CART'}
                      </button>
                    </div>
                  </div>

                  {product.details.description &&
                  product.storeCode === _Store.type27 ? (
                    <div className='description'>
                      <div className=' w-full'>
                        <div className='bg-white pt-10 pb-10'>
                          <div className='text-sm text-gray-700 tracking-widest p-6 border border-gray-300'>
                            <p className='mb-4'>
                              {product.details.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
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

          {product.details.description &&
          product.storeCode !== _Store.type27 ? (
            <div className='description'>
              <div className='container mx-auto'>
                <div className='bg-white pt-10 pb-10 px-4'>
                  <div
                    className={`${
                      product.storeCode === _Store.type6
                        ? 'bg-transparent border border-gray-300 border-b-0'
                        : `bg-${
                            product.storeCode == _Store.type23 ||
                            product.storeCode == _Store.type24
                              ? 'primary'
                              : 'secondary'
                          } text-white`
                    }  py-2 px-4  inline-block rounded-t-md`}
                  >
                    Description
                  </div>
                  <div className='text-sm text-gray-700 tracking-widest p-6 border border-gray-300'>
                    <p className='mb-4'>{product.details.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}

          <ProductAlike
            storeCode={product.storeCode}
            title='YOU MAY ALSO LIKE'
            products={product.alike}
          />
          {recentlyViewedProduct.length >
            __constant._productAlike.carouselCounter &&
          (product.storeCode === _Store.type24 ||
            product.storeCode === _Store.type5 ||
            product.storeCode === _Store.type6 ||
            product.storeCode === _Store.type10 ||
            product.storeCode === _Store.type23 ||
            product.storeCode === _Store.type27 ||
            product.storeCode === _Store.type24) ? (
            <ProductRecentlyViewed
              storeCode={product.storeCode}
              title='RECENTLY VIEWED'
              products={recentlyViewedProduct}
            />
          ) : (
            ''
          )}
        </div>
      </>
    );
  }

  return (
    <>
      {HeadTag}
      <div className={`font-Outfit`}>
        <div className='container mx-auto mt-6'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-4 lg:items-start'>
            <ProductImg
              product={product as unknown as _ProductDetails}
              storeCode={product.storeCode || ''}
            />
            <div className=''>
              <div className='mb-4 border-b border-b-gray-300'>
                <div className='text-xl md:text-2xl lg:text-sub-title font-sub-title text-color-sub-title mb-4'>
                  {product.details.name}
                </div>
              </div>
              <div className='mb-4'>
                <div className='text-gray-700 text-sm'>
                  {' '}
                  <span className='inline-block w-32 font-semibold'>
                    Product Code :
                  </span>{' '}
                  <span>{product.details.sku}</span>
                </div>
              </div>
              <div className='flex align-top mb-4'>
                <div className='w-32 text-sm'>
                  {' '}
                  <span className='text-sm font-semibold'>Colors:</span>{' '}
                </div>
                <div className='flex flex-wrap gap-1 text-sm text-center'>
                  {product.colors?.map((colour) => {
                    const colorName = colour.name;
                    return (
                      <div
                        onClick={() => {
                          setColor(colour);
                          setColors(colour.name);
                        }}
                        key={colour.name}
                        className='w-8'
                      >
                        <div
                          className={`border border-gray-300 p-px cursor-pointer hover:border-secondary ${
                            color && colorName === color
                              ? ' border-secondary'
                              : ''
                          }`}
                        >
                          <img
                            src={`${config.mediaBaseUrl}${colour.imageUrl}`}
                            alt=''
                            className='w-full object-center object-cover'
                          />
                        </div>
                        <div className='hidden'>{colour.name}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {!showMultipleSize && (
                <div className='flex flex-wrap mb-4'>
                  <div className='w-32 text-sm items-center'>
                    {' '}
                    <span className='text-sm font-semibold'>Size:</span>
                  </div>

                  <div className='text-sm flex items-center gap-1'>
                    {properties.product.size_input === 'checkbox' ? (
                      product.details.sizes.split(',').map((_size) => (
                        <button
                          onClick={() => setSize(_size)}
                          key={_size}
                          className={`border border-gray-300 hover:border-secondary h-8 w-8 flex items-center justify-center cursor-pointer ${
                            _size === size ? ' border-secondary' : ''
                          }`}
                        >
                          {_size}
                        </button>
                      ))
                    ) : properties.product.size_input === 'select' ? (
                      <>
                        <div className='text-sm flex flex-wrap items-center gap-1'>
                          {product.details.sizes.split(',').map((_size) => (
                            <button
                              onClick={() => {
                                availaibleInventory();
                                setSize(_size);
                              }}
                              key={_size}
                              disabled={availaibleSizes.includes(_size)}
                              className={`border border-gray-300 hover:bg-[#D40F8D]  h-8 w-8 flex items-center justify-center ${
                                _size === size
                                  ? product.storeCode !== _Store.type21
                                    ? 'bg-secondary'
                                    : 'opacity-50'
                                  : ''
                              } ${
                                availaibleSizes.includes(_size)
                                  ? 'cursor-not-allowed opacity-50'
                                  : 'cursor-pointer '
                              }`}
                            >
                              {_size}
                            </button>
                          ))}
                        </div>
                      </>
                    ) : (
                      <select
                        className='form-input md:pr-3'
                        onChange={(e) => {
                          singleChangeSize(e.target.value);
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
                    {product.storeCode !== _Store.type21 && (
                      <button
                        className='ml-2'
                        onClick={() => setShowSizeChart(true)}
                      >
                        Size Chart
                      </button>
                    )}
                  </div>
                </div>
              )}
              <div className='flex flex-wrap items-center mb-4'>
                <div className='w-32 text-sm items-center'>
                  {' '}
                  <span className='text-sm font-semibold'>Qty:</span>
                </div>
                <div className='text-sm'>
                  {!showMultipleSize ? (
                    <div className='w-28'>
                      <input
                        onChange={(e) => setQty(~~e.target.value)}
                        value={qty}
                        type='number'
                        className='form-input'
                        id='QTY'
                        placeholder=''
                      />
                    </div>
                  ) : (
                    <div className='mb-4'>
                      {product.details.sizes.split(',').map((_size) => (
                        <div
                          className='flex flex-wrap item-center mb-4'
                          key={_size}
                        >
                          <p className='w-32 item-center'>{_size}</p>
                          <p className='w-32 item-center'>100</p>
                          <div className='w-28'>
                            <input
                              name={_size}
                              onChange={multipleQtyChangeHandler}
                              value={getMultipleQtyValue(_size)}
                              type='number'
                              className='form-input w-32 pr-0'
                              id='QTY'
                              placeholder=''
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
                <div className='mt-3 bg-gray-100 p-4'>
                  <div className='text-sm text-gray-900 flex flex-wrap items-end'>
                    <div className='w-28'>
                      <span className=''>You Pay</span>
                    </div>
                    <div className=''>
                      <span className='text-2xl tracking-wider'>
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
                  <div className='w-full text-left flex justify-end mt-4'>
                    <button
                      type='button'
                      onClick={buyNowHandler}
                      className='btn btn-secondary w-full text-center !font-bold'
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
        {product.details.description ? (
          <div className='description'>
            <div className='container mx-auto'>
              <div className='bg-white pt-10 pb-10 px-4'>
                <div className='bg-secondary py-2 px-4 text-white inline-block rounded-t-md'>
                  Description
                </div>
                <div className='text-sm text-gray-700 tracking-widest p-6 border border-gray-300'>
                  <p className='mb-4'>{product.details.description}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}

        <ProductAlike
          storeCode={product.storeCode}
          title='YOU MAY ALSO LIKE'
          products={product.alike}
        />
      </div>
    </>
  );
};

export default Corporate_ProductDetails;
