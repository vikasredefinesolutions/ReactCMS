import { CartProducts } from '@type/APIs/cart.res';
import config from 'api.config';
import StartOrderModal from 'appComponents/modals/StartOrderModal';
import ImageComponent from 'appComponents/reUsable/Image';
import CartSummary from 'Components/CartSummary/CartSummary';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const CartLayout2 = ({
  cartProducts,
  loadProduct,
  deleteCartItem,
  showEdit,
  product,
  setShowEdit,
  currentCartProduct,
}: any) => {
  const [products, setProducts] = useState<CartProducts>(cartProducts);
  const [inputIds, setInputId] = useState<string[]>([]);
  useEffect(() => {}, [cartProducts]);

  const cartQtyUpdateHandler = (
    size: string,
    index: number,
    value: string,
    inputId: string,
  ) => {
    const qty = ~~value;
    if (products) {
      let pro = JSON.parse(JSON.stringify(products));
      let product = [...pro[index].shoppingCartItemDetailsViewModels];
      let productAttrIndex = product.findIndex(
        (pro) => pro.attributeOptionValue === size,
      );
      let productAttr = product[productAttrIndex];
      product[~~productAttrIndex] = { ...productAttr, qty };
      pro[index].shoppingCartItemDetailsViewModels = product;
      setProducts(pro);
    }

    const oldQty =
      cartProducts[index].shoppingCartItemDetailsViewModels[inputId].qty;

    const inputIdIndex = inputIds.indexOf(inputId);
    if (oldQty === qty && inputIdIndex > -1) {
      const _inputIds = [...inputIds];
      _inputIds.splice(inputIdIndex, 1);
      setInputId(_inputIds);
    } else {
      if (inputIdIndex < 0) {
        setInputId((prev) => [...prev, inputId]);
      }
    }
  };
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
                  <div className='text-base'>
                    {cartProducts.length} Item(s)
                    <span className='hidden-xs'> in cart</span>
                  </div>
                </div>
                <h2 id='cart-heading' className='sr-only'>
                  Items in your shopping cart
                </h2>

                <ul role='list' className=' overflow-hidden'>
                  {products.map((product: any, index: number) => (
                    <li key={index} className='flex flex-wrap py-5 -mx-3'>
                      <div className='w-full lg:w-1/3 px-3'>
                        <ImageComponent
                          src={product?.colorImage}
                          alt='products'
                          className=''
                        />
                      </div>

                      <div className='w-full lg:w-2/3 px-3 flex flex-wrap lg:justify-between'>
                        <div className='text-lg font-semibold'>
                          <Link
                            key={product?.seName}
                            href={`/${product.seName}`}
                            id={product?.seName}
                            className='text-black hover:text-anchor-hover'
                            title=''
                          >
                            {product?.productName}
                          </Link>
                        </div>
                        <div className='w-full flex flex-wrap'>
                          <div className='w-full mt-4'>
                            <div className='flex justify-between'>
                              <div className='text-base'>
                                <span className='font-semibold'>SKU :</span>
                                {product?.sku}
                              </div>
                              <div className='text-base'>
                                <span className='font-semibold'>Color :</span>{' '}
                                {product?.attributeOptionValue}
                              </div>
                            </div>
                            <div className='mt-4 border-t border-t-gray-500'>
                              {product.shoppingCartItemDetailsViewModels.map(
                                (item: any, indx: number) => (
                                  <div
                                    key={indx}
                                    className='flex justify-between py-3 border-b border-b-gray-300'
                                  >
                                    <div className='w-full md:w-1/3'>
                                      <div className='mb-1'>Size</div>
                                      <div className='font-semibold'>
                                        {' '}
                                        {item.attributeOptionValue}{' '}
                                      </div>
                                    </div>
                                    <div className='w-full md:w-1/3'>
                                      <div className='mb-1'>Price</div>
                                      <div className='font-semibold'>
                                        ${item.price}
                                      </div>
                                    </div>
                                    <div className='w-full md:w-1/3'>
                                      <div className='mb-1'>Qty</div>

                                      <div className='font-semibold'>
                                        <input
                                          type='number'
                                          className='p-2 w-full'
                                          value={item.qty}
                                          min={0}
                                          onChange={(e) =>
                                            cartQtyUpdateHandler(
                                              item.attributeOptionValue,
                                              index,
                                              e.target.value,
                                              `${indx}`,
                                            )
                                          }

                                          // disabled
                                        />
                                      </div>
                                      {/* <div className="font-semibold">
                                        {item.qty}
                                      </div> */}
                                    </div>
                                  </div>
                                ),
                              )}

                              {/* <!-- <div className="flex justify-between py-3 border-t border-b">
                                                    <div className="text-base w-28">Product Total: </div>
                                                    <div className="text-base w-16 text-center">24</div>
                                                    <div className="text-base w-20 text-right">$2,964.00</div>
                                                </div> --> */}
                              {product.shoppingCartLogoPersonViewModels.map(
                                (item: any, index: number) => {
                                  return (
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
                                          {index === 0
                                            ? 'First Logo Free'
                                            : `$${item.logoPrice}`}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                },
                              )}

                              {/* <div className="flex justify-between py-3 border-b border-b-gray-300">
                                                    <div className="w-full md:w-1/3">
                                                        <div className="mb-1">Your Logo</div>
                                                        <div className="font-semibold">(You Will Provide Logo)</div>
                                                    </div>
                                                    <div className="w-full md:w-1/3">
                                                        <div className="mb-1">Price</div>
                                                        <div className="font-semibold">
                                                            <div className="">$55.00</div>
                                                            <div className="">Logo Setup Fee Applied</div>
                                                        </div>
                                                    </div>
                                                    <div className="w-full md:w-1/3">
                                                        <div className="mb-1">Location</div>
                                                        <div className="font-semibold">Right Sleeve</div>
                                                    </div>
                                                </div> */}
                            </div>
                            <div className='flex mt-5'>
                              <button
                                onClick={() => loadProduct(product)}
                                className='btn btn-lg btn-primary !w-full text-center'
                              >
                                UPDATE
                              </button>
                              <button
                                onClick={() =>
                                  deleteCartItem(product.shoppingCartItemsId)
                                }
                                className='btn btn-lg btn-secondary !w-full text-center'
                              >
                                DELETE
                              </button>
                            </div>
                          </div>
                          {/* <!-- <div className="mt-2 lg:w-1/3 w-full">
                                            <div className="bold text-xl text-right">
                                                <span className="">Item Total:<br>$2,964.00</span>
                                            </div>
                                            <div className="mt-6 lg:ml-10"><a href="javascript:void(0);" data-modal-toggle="startorderModal" className="btn btn-secondary !w-full !py-1 text-center">EDIT ITEM</a></div>
                                            <div className="mt-3 lg:ml-10"><a href="javascript:void(0);" className="btn btn-primary !w-full !py-1 text-center">REMOVE</a></div>
                                        </div> --> */}
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
                    <a className='btn btn-lg btn-primary !flex items-center justify-center w-full'>
                      <i
                        className='fa fa-shopping-cart mr-2'
                        aria-hidden='true'
                      ></i>
                      CHECKOUT NOW
                    </a>
                  </Link>
                </div>
                <div className='mt-4'>
                  <Link id='keepshopping' key={'/'} href='/'>
                    <a className='btn btn-lg btn-secondary !flex items-center justify-center w-full'>
                      KEEP SHOPPING
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
    </>
  );
};

export default CartLayout2;
