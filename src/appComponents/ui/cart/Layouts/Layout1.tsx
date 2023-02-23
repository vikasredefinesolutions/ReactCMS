import { CustomizeLater } from '@constants/global.constant';
import { CommanMessage } from '@constants/successErrorMessages.constant';
import { addToCart } from '@services/cart.service';
import { _CartItem } from '@type/APIs/cart.res';
import { _ProductColor } from '@type/APIs/colors.res';
import { _ProductInventoryTransfomed } from '@type/APIs/inventory.res';
import { _ProductDetails } from '@type/APIs/productDetail.res';
import config from 'api.config';
import AddOTFItemNo from 'appComponents/modals/AddOTFItems';
import StartOrderModal from 'appComponents/modals/StartOrderModal';
import ImageComponent from 'appComponents/reUsable/Image';
import CartSummary from 'Components/CartSummary/CartSummary';
import { getAddToCartObject } from 'helpers/common.helper';
import { useActions, useTypedSelector } from 'hooks';
import Link from 'next/link';
import { _Store } from 'page.config';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

type _Props = {
  cartProducts: _CartItem[];
  loadProduct: (product: _CartItem) => void;
  deleteCartItem: (id: number) => Promise<void>;
  showEdit: boolean;
  product: _ProductDetails | undefined;
  setShowEdit: (arg: boolean) => void;
  currentCartProduct: _CartItem | undefined;
};

type CartReq = {
  productId: number;
  image: { id: number; imageUrl: string; altTag: string };
  color: _ProductColor;
  inventory: _ProductInventoryTransfomed | null;
};

const CartLayout1 = (props: _Props) => {
  const {
    cartProducts,
    loadProduct,
    deleteCartItem,
    showEdit,
    product,
    setShowEdit,
    currentCartProduct,
  } = props;
  const { fetchCartDetails, setShowLoader, showModal } = useActions();
  const { id: storeId, layout: storeLayout } = useTypedSelector(
    (state) => state.store,
  );
  const userId = useTypedSelector((state) => state.user.id);

  const isEmployeeLoggedIn = useTypedSelector(
    (state) => state.employee.loggedIn,
  );
  const [addOtf, setShowAddOtf] = useState(false);
  const [cartQtyAmtAr, setCartQtyAmtAr] = useState<
    Array<
      Array<{
        attributeOptionId: number;
        size: string;
        qty: number;
        price: number;
        id: number;
      }>
    >
  >([]);
  const getNewOptionAr = () =>
    cartProducts.map((item) =>
      item.shoppingCartItemDetailsViewModels.map((option) => ({
        attributeOptionId: option.attributeOptionId,
        size: option.attributeOptionValue,
        qty: option.qty,
        price: option.price / option.qty,
        id: option.id,
      })),
    );

  useEffect(() => {
    if (cartProducts.length > 0) {
      setCartQtyAmtAr(getNewOptionAr);
    }
  }, [cartProducts]);

  const employeeAmtChangeHandler = (
    event: ChangeEvent<HTMLInputElement>,
    cartProdDetailsIndex: number,
    cartProductIndex: number,
  ) => {
    const { name, value } = event.target;
    const _cartQtyAmtAr = JSON.parse(JSON.stringify(cartQtyAmtAr));
    const currentObj = _cartQtyAmtAr[cartProductIndex][cartProdDetailsIndex];
    _cartQtyAmtAr[cartProductIndex][cartProdDetailsIndex] = {
      ...currentObj,
      [name]: +value,
    };
    setCartQtyAmtAr(_cartQtyAmtAr);
  };

  const amtQtyBlurHandler = useCallback(
    async (cartItemIndex: number) => {
      if (JSON.stringify(getNewOptionAr()) !== JSON.stringify(cartQtyAmtAr)) {
        setShowLoader(true);
        const cartProduct = cartProducts[cartItemIndex];
        const cartItemSelected = cartQtyAmtAr[cartItemIndex];
        if (cartProduct) {
          let totalPrice = 0;
          let totalQty = 0;
          const sizeQtys = cartItemSelected.map((res) => {
            const price = res.price * res.qty;
            totalPrice += price;
            totalQty += res.qty;

            return {
              attributeOptionId: res.attributeOptionId,
              id: res.id,
              size: res.size,
              qty: res.qty,
              price: price,
            };
          });

          const cartObject = await getAddToCartObject({
            userId: userId || 0,
            note: '',
            storeId: storeId || 0,
            isEmployeeLoggedIn,
            sizeQtys,
            productDetails: {
              color: {
                altTag: cartProduct.colorImage,
                imageUrl: cartProduct.colorImage,
                name: cartProduct.attributeOptionValue,
                attributeOptionId: +cartProduct.attributeOptionId,
              } as _ProductColor,
              productId: cartProduct.productId,
            } as CartReq,
            total: {
              totalPrice,
              totalQty,
            },
            shoppingCartItemId: cartProduct.shoppingCartItemsId,
          });

          try {
            const customerId: number = await addToCart(cartObject);
            await fetchCartDetails({
              customerId,
              isEmployeeLoggedIn,
            });
            setShowLoader(false);
          } catch (error) {
            setShowLoader(false);
            showModal({
              message: CommanMessage.Failed,
              title: 'Failed',
            });
          }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }
    },
    [cartQtyAmtAr],
  );

  return (
    <>
      <section id='' className='mt-5'>
        <div className='bg-white'>
          <div className='container mx-auto'>
            <div className='flex flex-wrap -mx-3 -mt-3 cart-box'>
              <section
                aria-labelledby='cart-heading'
                className='w-full lg:w-9/12 px-3 mt-3'
              >
                <div className='flex justify-between items-center bg-gray-200 w-full px-4 py-2'>
                  <div className='text-2xl mr-3'>Shopping Cart</div>
                  {isEmployeeLoggedIn && (
                    <div className='text-2xl mr-3'>
                      <button
                        onClick={() => setShowAddOtf(true)}
                        className='btn btn-lg btn-secondary !flex items-center justify-center w-full !p-1 text-sm border-2 border-black'
                      >
                        Add OTF Items
                      </button>
                    </div>
                  )}
                  <div className='text-base'>
                    {cartProducts.length} Item(s)
                    <span className='hidden-xs'> in cart</span>
                  </div>
                </div>
                <h2 id='cart-heading' className='sr-only'>
                  Items in your shopping cart
                </h2>
                <ul role='list' className='overflow-hidden'>
                  {cartProducts.map((product: any, index: number) => (
                    <li key={index} className='flex flex-wrap py-5 -mx-3'>
                      <div className='w-full lg:w-1/4 px-3'>
                        {/* <Link href={`/${product.seName}`} title=""> */}
                        <ImageComponent
                          src={product.colorImage}
                          alt='products'
                          className=''
                        />
                        {/* </Link> */}
                      </div>
                      <div className='w-full lg:w-3/4 px-3 flex flex-wrap lg:justify-between'>
                        <div className='text-lg font-semibold'>
                          <Link
                            key={product.seName}
                            href={`/${product.seName}`}
                            id={product.seName}
                            className='text-black hover:text-anchor-hover'
                            title=''
                          >
                            {product.productName}
                          </Link>
                        </div>
                        <div className='w-full flex flex-wrap'>
                          <div className='lg:w-2/3 w-full mt-2'>
                            <div className='flex justify-between'>
                              <div className='text-base'>
                                <span className='font-semibold'>SKU :</span>{' '}
                                {product.sku}
                              </div>
                            </div>
                            <div className='mt-1 flex'>
                              <div className='text-base'>
                                <span className='font-semibold'>Color :</span>{' '}
                                {product.attributeOptionValue}
                              </div>
                            </div>
                            <div className='mt-10'>
                              <div className='text-base font-semibold border-b pb-2'>
                                Item Details
                              </div>
                              <div className='flex justify-between py-2'>
                                <div className='text-base font-semibold w-28'>
                                  Size
                                </div>
                                <div className='text-base font-semibold w-16 text-center'>
                                  Qty
                                </div>
                                {isEmployeeLoggedIn && (
                                  <div className='text-base font-semibold w-18 text-center'>
                                    Unit Price
                                  </div>
                                )}
                                <div className='text-base font-semibold w-20 text-right'>
                                  Price
                                </div>
                              </div>

                              {product.shoppingCartItemDetailsViewModels.map(
                                (item: any, cartItemDetialsIndex: number) => {
                                  let qty = 0,
                                    price = 0;
                                  if (
                                    cartQtyAmtAr &&
                                    cartQtyAmtAr[index] &&
                                    cartQtyAmtAr[index][cartItemDetialsIndex]
                                  ) {
                                    qty =
                                      cartQtyAmtAr[index][cartItemDetialsIndex]
                                        ?.qty || 0;
                                    price =
                                      cartQtyAmtAr[index][cartItemDetialsIndex]
                                        ?.price || 0;
                                  }
                                  return (
                                    <div
                                      key={cartItemDetialsIndex}
                                      className='flex justify-between py-2'
                                    >
                                      <div className='text-base w-28'>
                                        {item.attributeOptionValue}
                                      </div>

                                      <div className='text-base w-16 text-center'>
                                        {isEmployeeLoggedIn ? (
                                          <input
                                            className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2'
                                            value={qty}
                                            name='qty'
                                            onChange={(event) =>
                                              employeeAmtChangeHandler(
                                                event,
                                                cartItemDetialsIndex,
                                                index,
                                              )
                                            }
                                            onBlur={() =>
                                              amtQtyBlurHandler(index)
                                            }
                                          />
                                        ) : (
                                          item.qty
                                        )}
                                      </div>
                                      {isEmployeeLoggedIn && (
                                        <div className='text-base w-16 text-center'>
                                          <input
                                            className='block w-full border border-gray-600 shadow-sm text-sm py-1 px-2'
                                            value={price}
                                            name='price'
                                            onChange={(event) =>
                                              employeeAmtChangeHandler(
                                                event,
                                                cartItemDetialsIndex,
                                                index,
                                              )
                                            }
                                            onBlur={() =>
                                              amtQtyBlurHandler(index)
                                            }
                                          />
                                        </div>
                                      )}
                                      <div className='text-base w-20 text-right'>
                                        ${item.price}
                                      </div>
                                    </div>
                                  );
                                },
                              )}

                              <div className='flex justify-between py-3 border-t border-b'>
                                <div className='text-base w-28'>
                                  Product Total:
                                </div>
                                <div className='text-base w-16 text-center'>
                                  {product.totalQty}
                                </div>

                                <div className='text-base w-20 text-right'>
                                  ${product.totalPrice}
                                </div>
                              </div>
                              {product.shoppingCartLogoPersonViewModels.map(
                                (item: any, index: number) => {
                                  return item.logoName === 'Customize Later' &&
                                    storeLayout === _Store.type1 ? (
                                    <div className='flex justify-start items-center mt-3'>
                                      <div>
                                        <span className='material-icons text-[60px] mr-3'>
                                          support_agent
                                        </span>
                                      </div>
                                      <div>
                                        <div className='text-lg font-semibold'>
                                          Customize Later
                                        </div>
                                        <div className='text-base'>
                                          {CustomizeLater}
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <div
                                      key={`${item}-${index}`}
                                      className='flex justify-between py-3'
                                    >
                                      <div className='text-base'>
                                        <div className='mb-3 flex'>
                                          {item.logoImagePath === '' ? (
                                            <img
                                              className='w-14 h-12'
                                              src='/images/logo-to-be-submitted.webp'
                                              title=''
                                              alt={item.logoImagePath}
                                            />
                                          ) : (
                                            <img
                                              className='w-14 h-12'
                                              src={`${config.mediaBaseUrl}${item.logoImagePath}`}
                                              title=''
                                              alt={item.logoImagePath}
                                            />
                                          )}

                                          {item.logoName ===
                                          'Add Logo Later' ? (
                                            <span className='font-semibold ml-3'>
                                              Logo to be
                                              <br />
                                              submitted
                                            </span>
                                          ) : (
                                            <span className='font-semibold ml-3'>
                                              Logo
                                              <br />
                                              submitted
                                            </span>
                                          )}
                                        </div>
                                        <div>
                                          <span className='font-semibold mr-1'>
                                            Location:
                                          </span>
                                          <span>{item.logoLocation}</span>
                                        </div>
                                      </div>
                                      <div className='text-base text-right'>
                                        <div className='font-semibold'>
                                          Logo Price
                                        </div>
                                        <div>
                                          {index === 0 && item.logoPrice === 0
                                            ? 'First Logo Free'
                                            : `$${item.logoPrice}`}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                },
                              )}
                            </div>
                          </div>
                          <div className='mt-2 lg:w-1/3 w-full'>
                            <div className='bold text-xl text-right'>
                              <span className=''>
                                Item Total:
                                <br />${product.totalPrice}
                              </span>
                            </div>
                            {!isEmployeeLoggedIn && (
                              <div className='mt-6 lg:ml-10'>
                                <button
                                  onClick={() => loadProduct(product)}
                                  data-modal-toggle='startorderModal'
                                  className='btn btn-secondary !w-full !py-1 text-center'
                                >
                                  EDIT ITEM
                                </button>
                              </div>
                            )}
                            <div className='mt-3 lg:ml-10'>
                              <button
                                onClick={() =>
                                  deleteCartItem(product.shoppingCartItemsId)
                                }
                                className='btn btn-primary !w-full !py-1 text-center'
                              >
                                REMOVE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section
                aria-labelledby='summary-heading'
                className='w-full lg:w-3/12 px-3 mt-3'
              >
                <CartSummary title='Cart Summary' />
                <div className='mt-4'>
                  <Link id='checkout' key={'/checkout'} href='/checkout.html'>
                    <a className='btn btn-lg btn-secondary !flex items-center justify-center w-full'>
                      <i
                        className='fa fa-shopping-cart mr-2'
                        aria-hidden='true'
                      ></i>
                      CHECKOUT NOW
                    </a>
                  </Link>
                </div>
                <div className='mt-4 bg-gray-200 px-4 py-4'>
                  <div className='flex items-center justify-center'>
                    <img
                      src='images/order-risk-free-icon.jpg'
                      alt=''
                      className='mr-2'
                    />
                    <span className='text-xl font-semibold'>
                      Order Risk-Free!
                    </span>
                  </div>
                  <div className='flex items-center justify-center text-lg text-center mt-3'>
                    Cancel your order without penalty anytime before your proof
                    is approved.
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      {showEdit && product && (
        <StartOrderModal
          modalHandler={() => setShowEdit(false)}
          product={product}
          editDetails={currentCartProduct}
        />
      )}
      {addOtf && <AddOTFItemNo closeModal={() => setShowAddOtf(false)} />}
    </>
  );
};

export default CartLayout1;
