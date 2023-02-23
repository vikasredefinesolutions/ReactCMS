import { addToCart, deleteItemCart } from '@services/cart.service';
import Image from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import CartController from 'Controllers/CartController';
import { getAddToCartObject } from 'helpers/common.helper';
import { highLightError } from 'helpers/global.console';
import { useActions, useTypedSelector } from 'hooks';
import Link from 'next/link';
import { _Store } from 'page.config';
import React, { useState } from 'react';
import { _InCart_Product_model } from 'redux/slices/_slices';
import { SC_SizeQtyPriceTable } from './SC_SizeQtyPrice';

export const SC_ProductCartItem_withoutPersonalization: React.FC<
  _InCart_Product_model
> = (item) => {
  const { cart_update_item, showModal } = useActions();
  const { deleteCartItem } = CartController();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const customerId = useTypedSelector((state) => state.user.id);
  const { layout: storeLayout, id: storeId } = useTypedSelector(
    (state) => state.store,
  );

  const removeItemHandler = ({
    productId,
    colorId,
  }: {
    productId: number;
    colorId: number;
  }) => {
    cart_update_item({
      type: 'remove_item',
      data: {
        itemType: 'product',
        productId,
        colorId,
      },
    });
  };

  const getTotals = () => {
    let totalQty = 0;
    let price = 0;
    if (item.itemPrice) {
      price = item.itemPrice;
    }
    item.attributes?.forEach(({ qty }) => (totalQty += qty));

    return {
      totalQty,
      totalPrice: totalQty * price,
    };
  };

  const productDetails = {
    productId: item.productId,
    image: {
      id: item.colorId,
      imageUrl: item.colorImageURL,
      altTag: '',
    },
    color: {
      productId: item.productId,
      productName: item.name,
      productSEName: item.seName,
      attributeOptionId: item.colorId,
      name: item.colorName,
      imageUrl: item.colorImageURL,
      displayOrder: 1,
      altTag: '',
      moreImages: [],
      minQuantity: 0, //not getting minQuantity
      multipleQuantity: 1,
    },
    inventory: null,
  };

  const updateHandler = async () => {
    const cartObject = await getAddToCartObject({
      userId: customerId || 0,
      note: '',
      storeId: storeId || 0,
      isEmployeeLoggedIn: false,
      sizeQtys: item.attributes,
      productDetails: productDetails,
      total: getTotals(),
      shoppingCartItemId: item.cartItemId,
    });
    if (cartObject) {
      try {
        const res = await addToCart(cartObject);
        showModal({
          message: 'Updated cart Successfully',
          title: 'Success',
        });
      } catch (error) {
        highLightError({ error, component: 'StartOrderModal' });
      }
    }
  };

  const toggleConfirmationMsg = (action: 'ALERT' | 'HIDE' | 'CONFIRM') => {
    if (action === 'ALERT') {
      setShowAlert(true);
    }

    if (action === 'HIDE') {
      setShowAlert(false);
    }

    if (action === 'CONFIRM') {
      removeItemHandler({
        productId: item.productId,
        colorId: item.colorId,
      });
      setShowAlert(false);
    }
  };

  if (item === null) {
    return <></>;
  }

  if (storeLayout === _Store.type5) {
    return (
      <>
        <li className='border-b border-b-gray-300'>
          <div className='flex flex-wrap py-5 -mx-3' x-data='{ open : false }'>
            <div className='w-full lg:w-1/3 px-3'>
              <Link
                href={item?.seName}
                title=''
                className='block border border-gray-100'
              >
                <Image
                  src={item?.colorImageURL}
                  alt={item?.name}
                  className=''
                />
              </Link>
            </div>
            <div className='w-full lg:w-2/3 px-3 flex flex-wrap lg:justify-between'>
              <div className='text-lg font-semibold'>
                <Link
                  href={item?.seName}
                  className='text-black hover:text-anchor-hover'
                >
                  {item?.name}
                </Link>
              </div>
              <div className='w-full flex flex-wrap'>
                <div className='w-full mt-4'>
                  <div className='flex justify-between'>
                    <div className='text-base'>
                      <span className='font-semibold'>SKU :</span> {item?.sku}
                    </div>
                    <div className='text-base'>
                      <span className='font-semibold'>Color :</span>{' '}
                      {item?.colorName}
                    </div>
                  </div>
                  <div className='mt-4 border-t border-t-gray-500'>
                    {/* <div className="flex justify-between items-center py-3"> */}
                    <div className='w-full  gap-2'>
                      <SC_SizeQtyPriceTable
                        details={item?.attributes}
                        toRemove={{
                          productName: item.name,
                          productId: item.productId,
                          colorId: item.colorId,
                        }}
                      />
                    </div>
                    <div className='w-full flex gap-2'>
                      <div className=''>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            updateHandler();
                          }}
                          className='btn btn-secondary !w-full !py-1 text-center'
                        >
                          UPDATE
                        </button>
                      </div>
                      <div className='lg:ml-10'>
                        <button
                          onClick={async (e) => {
                            e.preventDefault();
                            await deleteItemCart(item.cartItemId).then(() =>
                              cart_update_item({
                                type: 'remove_item',
                                data: {
                                  itemType: 'product',
                                  productId: item.productId,
                                  colorId: item.colorId,
                                },
                              }),
                            );
                          }}
                          className='btn btn-primary !w-full !py-1 text-center'
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </>
    );
  } else if (storeLayout === _Store.type21) {
    return (
      <>
        <li className='flex flex-wrap py-5 border border-gray-200 p-4'>
          <div className='w-full lg:w-1/3 px-3'>
            <Link
              href={item?.seName}
              title=''
              className='block border border-gray-100'
            >
              <Image src={item?.colorImageURL} alt={item?.name} className='' />
            </Link>
          </div>
          <div className='lg:ml-4 sm:ml-0 flex-1 flex flex-wrap lg:justify-between'>
            <div className='text-lg font-semibold'>
              <Link
                href={item?.seName}
                className='text-black hover:text-anchor-hover'
              >
                {item?.name}
              </Link>
            </div>
            <div className='w-full flex flex-wrap'>
              <div className=' w-full mt-2'>
                <div className='flex justify-between'>
                  <div className='text-base'>
                    <span className='font-semibold'>SKU :</span> {item?.sku}
                  </div>
                </div>
                <div className='mt-1 flex'>
                  <div className='text-base'>
                    <span className='font-semibold'>Color :</span>
                    {item?.colorName}
                  </div>
                  <div className='lg:ml-10'>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        updateHandler();
                      }}
                      className='btn btn-primary !w-full !py-1 text-center'
                    >
                      UPDATE
                    </button>
                  </div>
                  <div className='lg:ml-10'>
                    <button
                      onClick={async (e) => {
                        e.preventDefault();
                        await deleteItemCart(item.cartItemId).then(() =>
                          cart_update_item({
                            type: 'remove_item',
                            data: {
                              itemType: 'product',
                              productId: item.productId,
                              colorId: item.colorId,
                            },
                          }),
                        );
                      }}
                      className='btn btn-primary !w-full !py-1 text-center'
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
                <div className='w-full  gap-2'>
                  <SC_SizeQtyPriceTable
                    details={item?.attributes}
                    toRemove={{
                      productName: item.name,
                      productId: item.productId,
                      colorId: item.colorId,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
      </>
    );
  }

  return (
    <li className='flex flex-wrap py-5 -mx-3'>
      <div className='w-full lg:w-1/4 px-3'>
        <Link href={item?.seName} title=''>
          <Image src={item?.colorImageURL} alt={item?.name} className='' />
        </Link>
      </div>

      <div className='w-full lg:w-3/4 px-3 flex flex-wrap lg:justify-between'>
        <div className='text-lg font-semibold'>
          <Link
            href={item?.seName}
            className='text-black hover:text-anchor-hover'
          >
            {item?.name}
          </Link>
        </div>
        <div className='w-full flex flex-wrap'>
          <div className='lg:w-2/3 w-full mt-2'>
            <div className='flex justify-between'>
              <div className='text-base'>
                <span className='font-semibold'>SKU :</span> {item?.sku}
              </div>
            </div>
            <div className='mt-1 flex'>
              <div className='text-base'>
                <span className='font-semibold'>Color :</span>
                {item?.colorName}
              </div>
            </div>
            <SC_SizeQtyPriceTable
              details={item?.attributes}
              toRemove={{
                productName: item.name,
                productId: item.productId,
                colorId: item.colorId,
              }}
            />
          </div>
          <div className='mt-2 lg:w-1/3 w-full'>
            <div className='bold text-xl text-right'>
              <span className=''>
                Item Total:
                <Price value={item?.itemTotalPrice} />
              </span>
            </div>
            <div className='mt-3 lg:ml-10'>
              <button
                onClick={async (e) => {
                  e.preventDefault();
                  await deleteItemCart(item.cartItemId).then(() =>
                    cart_update_item({
                      type: 'remove_item',
                      data: {
                        itemType: 'product',
                        productId: item.productId,
                        colorId: item.colorId,
                      },
                    }),
                  );
                }}
                className='btn btn-primary !w-full !py-1 text-center'
              >
                REMOVE
              </button>
            </div>
            <div className={`mt-3 lg:ml-10`}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  updateHandler();
                }}
                className='btn btn-secondary !w-full !py-1 text-center'
              >
                UPDATE
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {showAlert ? (
        <MsgContainer
          modalHandler={() => toggleConfirmationMsg('HIDE')}
          message={item.name}
          confirmButton={() => toggleConfirmationMsg('CONFIRM')}
          title={'Are you sure want to remove?'}
        />
      ) : null} */}
    </li>
  );
};
