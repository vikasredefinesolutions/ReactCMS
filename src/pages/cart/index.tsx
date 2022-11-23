import { useEffect, useState } from 'react';
import Link from 'next/link';
import StartOrderModal from '../../appComponents/modals/StartOrderModal';
import ImageComponent from '../../appComponents/reusables/Image';
import { CartResponse } from '../../definations/APIs/cart.res';
import { _ProductDetails } from '../../definations/APIs/productDetail.res';
import { useActions, useTypedSelector } from '../../hooks';
import { checkCoupon, deleteItemCart } from '../../services/cart.service';
import { FetchColors, FetchProductById } from '../../services/product.service';
import SeoHead from 'appComponents/Screen/Layout/Head';
import { CartPage as seoDetails } from 'constants/seo.constant';
import Price from 'appComponents/reusables/Price';
const CartPage = () => {
  const {
    fetchCartDetails,
    storeDetails,
    updateCheckoutObject,
    storeProductColor,
  } = useActions();
  const cartProducts = useTypedSelector((state) => state.cart.cart);
  const [customerId, setCustomerId] = useState(0);
  const storeId = 4;

  useEffect(() => {
    if (customerId) {
      fetchCartDetails(customerId);
    }
  }, [customerId]);

  useEffect(() => {
    if (localStorage) {
      const id = localStorage.getItem('tempCustomerId');
      if (id) setCustomerId(~~id);
    }
  }, []);

  const [showEdit, setShowEdit] = useState(false);
  const [product, setProduct] = useState<_ProductDetails>();
  const [currentCartProduct, setCurrentCartProduct] = useState<CartResponse>();
  const [coupon, setCoupon] = useState('');

  const loadProduct = (product: CartResponse) => {
    if (storeId) {
      const obj = {
        totalQty: product.totalQty,
        sizeQtys: product.shoppingCartItemDetailsViewModels.map((res) => ({
          size: res.attributeOptionValue,
          qty: res.qty,
          price: res.price,
        })),
        totalPrice: product.totalPrice,
      };
      updateCheckoutObject(obj);
      setCurrentCartProduct(product);
      FetchProductById({
        // seName : seName || 'Nike-Men-s-Club-Fleece-Sleeve-Swoosh-Pullover-Hoodie',
        seName: product.seName,
        storeId,
      }).then((res) => {
        setProduct(res);
        storeDetails({
          brand: {
            id: res.brandID,
            name: res.brandName,
            url: res.brandImage,
          },
          product: {
            id: res.id || null,
            name: res.name || null,
            price:
              {
                msrp: res.msrp,
                ourCost: res.ourCost,
                salePrice: res.salePrice,
              } || null,
          },
        });
        FetchColors({ productId: res.id }).then((res) => {
          if (res) {
            storeProductColor({
              colors: res,
            });
            setProduct((pro) => {
              if (pro?.id) {
                return {
                  ...pro,
                  colors: res,
                };
              }
              return undefined;
            });
            setShowEdit(true);
          }
        });
      });
    }
  };

  const couponCodeSubmit = async () => {
    if (coupon) {
      const response: any = await checkCoupon({
        promotionsModel: {
          customerId: customerId,
          couponCode: coupon,
          storeId: storeId as number,
          taxCost: 0,
          shippingCost: 0,
        },
      });
      if (response.errors) {
        setCoupon(response.errors.errorDesc);
        setTimeout(() => {
          setCoupon('');
        }, 3000);
      }
    }
  };

  const deleteCartItem = async (id: number) => {
    await deleteItemCart(id);
    fetchCartDetails(customerId);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartProducts.forEach((res: any) => {
      totalPrice += res.totalPrice;
    });
    return totalPrice;
  };

  return (
    <>
      <SeoHead {...seoDetails} />
      <section id="" className="mt-5">
        <div className="bg-white">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-3 -mt-3 cart-box">
              <section
                aria-labelledby="cart-heading"
                className="w-full lg:w-9/12 px-3 mt-3"
              >
                <div className="flex justify-between items-center bg-gray-200 w-full px-4 py-2">
                  <div className="text-2xl mr-3">Shopping Cart</div>
                  <div className="text-base">
                    {cartProducts.length} Item(s)
                    <span className="hidden-xs"> in cart</span>
                  </div>
                </div>
                <h2 id="cart-heading" className="sr-only">
                  Items in your shopping cart
                </h2>
                <ul role="list" className="overflow-hidden">
                  {cartProducts.map((product: any) => (
                    <li className="flex flex-wrap py-5 -mx-3">
                      <div className="w-full lg:w-1/4 px-3">
                        {/* <Link href={`/${product.seName}`} title=""> */}
                        <ImageComponent
                          src={product.colorImage}
                          alt="products"
                          className=""
                        />
                        {/* </Link> */}
                      </div>
                      <div className="w-full lg:w-3/4 px-3 flex flex-wrap lg:justify-between">
                        <div className="text-lg font-semibold">
                          <Link
                            key={product.seName}
                            href={`/${product.seName}`}
                            id={product.seName}
                            className="text-black hover:text-anchor-hover"
                            title=""
                          >
                            {product.productName}
                          </Link>
                        </div>
                        <div className="w-full flex flex-wrap">
                          <div className="lg:w-2/3 w-full mt-2">
                            <div className="flex justify-between">
                              <div className="text-base">
                                <span className="font-semibold">SKU :</span>{' '}
                                {product.sku}
                              </div>
                            </div>
                            <div className="mt-1 flex">
                              <div className="text-base">
                                <span className="font-semibold">Color :</span>{' '}
                                {product.attributeOptionValue}
                              </div>
                            </div>
                            <div className="mt-10">
                              <div className="text-base font-semibold border-b pb-2">
                                Item Details
                              </div>
                              <div className="flex justify-between py-2">
                                <div className="text-base font-semibold w-28">
                                  Size
                                </div>
                                <div className="text-base font-semibold w-16 text-center">
                                  Qty
                                </div>
                                <div className="text-base font-semibold w-20 text-right">
                                  Price
                                </div>
                              </div>

                              {product.shoppingCartItemDetailsViewModels.map(
                                (item: any) => (
                                  <div className="flex justify-between py-2">
                                    <div className="text-base w-28">
                                      {item.attributeOptionValue}
                                    </div>
                                    <div className="text-base w-16 text-center">
                                      {item.qty}
                                    </div>
                                    <div className="text-base w-20 text-right">
                                      ${item.price}
                                    </div>
                                  </div>
                                ),
                              )}

                              <div className="flex justify-between py-3 border-t border-b">
                                <div className="text-base w-28">
                                  Product Total:
                                </div>
                                <div className="text-base w-16 text-center">
                                  {product.totalQty}
                                </div>
                                <div className="text-base w-20 text-right">
                                  ${product.totalPrice}
                                </div>
                              </div>

                              <div className="flex justify-between py-3">
                                <div className="text-base">
                                  <div className="mb-3 flex">
                                    <img
                                      src="images/logo-to-be-submitted.webp"
                                      title=""
                                      alt=""
                                    />
                                    <span className="font-semibold ml-3">
                                      Logo to be
                                      <br />
                                      submitted
                                    </span>
                                  </div>
                                  <div>
                                    <span className="font-semibold">
                                      Location:
                                    </span>
                                    <span>Right Sleeve</span>
                                  </div>
                                </div>
                                <div className="text-base text-right">
                                  <div className="font-semibold">
                                    Logo Price
                                  </div>
                                  <div>First Logo Free</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 lg:w-1/3 w-full">
                            <div className="bold text-xl text-right">
                              <span className="">
                                Item Total:
                                <br />${product.totalPrice}
                              </span>
                            </div>
                            <div className="mt-6 lg:ml-10">
                              <button
                                onClick={() => loadProduct(product)}
                                data-modal-toggle="startorderModal"
                                className="btn btn-secondary !w-full !py-1 text-center"
                              >
                                EDIT ITEM
                              </button>
                            </div>
                            <div className="mt-3 lg:ml-10">
                              <button
                                onClick={() =>
                                  deleteCartItem(product.shoppingCartItemsId)
                                }
                                className="btn btn-primary !w-full !py-1 text-center"
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
                {/* <div className="mt-4 bg-gray-200 px-4 py-4">
                  <div className="flex justify-between items-center bg-gray-100 w-full px-4 py-2">
                    <div className="text-2xl">Make it a Bundle</div>
                    <div className="text-base">$ 880</div>
                  </div>
                  <div className="my-8 overflow-hidden">
                    <ul role="list" className="flex flex-wrap -mx-3 gap-y-6">
                      <li className="w-full lg:w-1/3 px-3">
                        <div className="group relative">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1 border border-gray-200">
                            <a href="product-page.html" title="">
                              <img
                                src="images/1040623_25528_STH.jpg"
                                alt=""
                                className=""
                              />
                            </a>
                          </div>
                          <div className="mt-6">
                            <h3 className="mt-2 font-semibold text-gray-900 hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span> Peter
                                Millar Men's Jubilee Polo
                              </a>
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="w-full lg:w-1/3 px-3">
                        <div className="group relative">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1 border border-gray-200">
                            <a href="product-page.html" title="">
                              <img
                                src="images/1040623_25528_STH.jpg"
                                alt=""
                                className=""
                              />
                            </a>
                          </div>
                          <div className="mt-6">
                            <h3 className="mt-2 font-semibold text-gray-900 hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span>Peter
                                Millar Men's Jubilee Polo
                              </a>
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li className="w-full lg:w-1/3 px-3">
                        <div className="group relative">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1 border border-gray-200">
                            <a href="product-page.html" title="">
                              <img
                                src="images/1040623_25528_STH.jpg"
                                alt=""
                                className=""
                              />
                            </a>
                          </div>
                          <div className="mt-6">
                            <h3 className="mt-2 font-semibold text-gray-900 hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span> Peter
                                Millar Men's Jubilee Polo
                              </a>
                            </h3>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full flex justify-end">
                    <div className="">
                      <button type="button" className="btn btn-secondary !py-1">
                        <i
                          className="fa fa-plus-circle mr-2"
                          aria-hidden="true"
                        ></i>{' '}
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-10 bg-gray-200 p-4">
                  <div className="bg-gray-100 w-full px-4 py-2">
                    <div className="text-2xl mr-3">Gift Option</div>
                  </div>
                  <div className="w-full mt-4 px-4">
                    <div className="font-semibold">
                      Hooray - this item is gift eligible
                    </div>
                    <ul className="list-disc pl-5 pt-3 pb-3 text-base w-full">
                      <li>Price will be hidden</li>
                      <li>Item will ship in a walmart box</li>
                      <li>
                        We will notify you and recipient by email when the gift
                        on the way
                      </li>
                      <li>
                        Once the item arrives, we will email the recipient your
                        personalized gift massage
                      </li>
                      <li>
                        The email will include a gift receipt, which will also
                        be available in your account
                      </li>
                    </ul>
                    <div className="w-full mt-4 text-base">To: John Newman</div>
                    <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label htmlFor="To" className="block text-base">
                          To
                        </label>
                        <div className="mt-1">
                          <input
                            name="To"
                            id="To"
                            placeholder="To"
                            className="form-input"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-3">
                        <label htmlFor="From" className="block text-base">
                          From
                        </label>
                        <div className="mt-1">
                          <input
                            name="From"
                            id="From"
                            placeholder="From"
                            className="form-input"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full mt-4">
                      <label htmlFor="Receptionist email" className="text-base">
                        Receptionist`s email address
                        <span className="ml-1 text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          id="Receptionist email"
                          name="Receptionist email"
                          autoComplete="Receptionist email"
                          placeholder="Receptionist`s email address"
                          type="email"
                          className="form-input"
                        />
                      </div>
                    </div>
                    <div className="w-full mt-4">
                      <label htmlFor="Sendor email" className="text-base">
                        Sendor`s email address
                        <span className="ml-1 text-red-600">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          id="Sendor email"
                          name="Sendor email"
                          autoComplete="Sendor email"
                          placeholder="Sendor`s email address"
                          type="email"
                          className="form-input"
                        />
                      </div>
                    </div>
                    <div className="w-full mt-4">
                      <label htmlFor="Full Name" className="text-base">
                        Gift Massage (Optional)
                      </label>
                      <div className="mt-2">
                        <textarea
                          name=""
                          id=""
                          cols={30}
                          rows={5}
                          className="form-input"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-4 px-4">
                    <label>
                      <input type="checkbox" data-modal-toggle="AddGiftNote" />
                      <span className="ml-1 text-base">
                        Add Gift Note - Free
                      </span>
                    </label>
                  </div>
                </div> */}
              </section>

              <section
                aria-labelledby="summary-heading"
                className="w-full lg:w-3/12 px-3 mt-3"
              >
                <div className="border border-slate-400 bg-white">
                  <div className="bg-gray-200 w-full text-lg font-medium px-4 py-1">
                    Cart Summary
                  </div>
                  <div className="px-4 py-4">
                    <dl className="space-y-2">
                      <div className="text-lg">Products Price</div>
                      <div className="flex items-center justify-between pt-2">
                        <dt className="text-base">Subtotal</dt>
                        <dd className="text-base font-medium text-gray-900">
                          <Price value={getTotalPrice()} />
                        </dd>
                      </div>
                      <div className="flex items-center justify-between border-t border-gray-200 pt-2">
                        <dt className="text-base">Estimated Tax</dt>
                        <dd className="text-base font-medium text-gray-900">
                          $00.00
                        </dd>
                      </div>
                      <div className="border-t border-gray-200 flex items-center relative">
                        <dt className="text-base z-0 w-full promocode">
                          <input
                            name="Promo_code"
                            id="Promo_code"
                            placeholder="Promo code"
                            onChange={(e: any) => setCoupon(e.target.value)}
                            value={coupon}
                            className="peer placeholder:opacity-0 block w-full bg-transparent pt-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 pr-10 relative z-10"
                          />
                          <label
                            htmlFor="Promo_code"
                            className="absolute duration-300 -top-3 -z-1 origin-0 text-base bg-white peer-focus:-top-3 peer-placeholder-shown:top-2"
                          >
                            Promo code
                          </label>
                        </dt>
                        {coupon && (
                          <button
                            onClick={() => couponCodeSubmit()}
                            className="coupon-code-Apply text-sm absolute right-0 top-2"
                          >
                            Apply
                          </button>
                        )}
                      </div>
                      <div className="border-t border-gray-200 pt-2 flex items-center justify-between">
                        <dt className="flex items-center text-base">
                          <span>Shipping</span>
                        </dt>
                        <dd className="text-base font-medium text-gray-900">
                          $00.00
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="flex justify-between items-center bg-gray-200 w-full text-lg font-medium px-4 py-1">
                    <div>Total:</div>
                    <div>
                      <Price value={getTotalPrice()} />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link id="checkout" key={'/checkout'} href="/Checkout">
                    <a className="btn btn-lg btn-secondary !flex items-center justify-center w-full">
                      <i
                        className="fa fa-shopping-cart mr-2"
                        aria-hidden="true"
                      ></i>
                      CHECKOUT NOW
                    </a>
                  </Link>
                </div>
                <div className="mt-4 bg-gray-200 px-4 py-4">
                  <div className="flex items-center justify-center">
                    <img
                      src="images/order-risk-free-icon.jpg"
                      alt=""
                      className="mr-2"
                    />
                    <span className="text-xl font-semibold">
                      Order Risk-Free!
                    </span>
                  </div>
                  <div className="flex items-center justify-center text-lg text-center mt-3">
                    Cancel your order without penalty anytime before your proof
                    is approved.
                  </div>
                </div>
                {/* <div className="mt-4 bg-gray-200 px-4 py-4">
                  <div className="flex justify-between items-center bg-gray-100 w-full px-4 py-2 mb-4">
                    <div className="text-2xl">Saved Items in Cart</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <ul role="list" className="mx-4">
                      <li className="w-64 inline-flex flex-col text-center lg:w-auto mb-8">
                        <div className="group relative">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1 border border-gray-200">
                            <a href="product-page.html" title="">
                              <img
                                src="images/1040623_25528_STH.jpg"
                                alt=""
                                className=""
                              />
                            </a>
                          </div>
                          <div className="mt-6">
                            <h3 className="mt-2 font-semibold text-gray-900 hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span> Peter
                                Millar Men's Jubilee Partywear Polo
                              </a>
                            </h3>
                            <p className="mt-2">
                              <span className="font-semibold text-gray-700 text-sm">
                                $454
                              </span>
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center items-center mt-2">
                              <div className="">
                                <button
                                  type="button"
                                  className="btn btn-secondary !py-1 text-center"
                                >
                                  Add To Cart
                                </button>
                              </div>
                              <div className="">
                                <button
                                  type="button"
                                  className="btn btn-primary !py-1 text-center"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-gray-200 px-4 py-4">
                  <div className="bg-gray-100 w-full px-4 py-2 mb-4">
                    <div className="text-2xl">You May Also Like This</div>
                  </div>
                  <div className="">
                    <ul role="list" className="">
                      <li className="mb-8">
                        <div className="group relative">
                          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1 border border-gray-200">
                            <a href="product-page.html" title="">
                              <img
                                src="images/1040623_25528_STH.jpg"
                                alt=""
                                className=""
                              />
                            </a>
                          </div>
                          <div className="mt-6">
                            <h3 className="mt-2 font-semibold text-gray-900 hover:text-anchor-hover">
                              <a href="product-page.html" className="relative">
                                <span className="absolute inset-0"></span> Peter
                                Millar Men's Jubilee Partywear Polo
                              </a>
                            </h3>
                            <p className="mt-2">
                              <span className="font-semibold text-gray-700 text-sm">
                                $454
                              </span>
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center items-center mt-2">
                              <div className="">
                                <button
                                  type="button"
                                  className="btn btn-secondary !py-1 text-center"
                                >
                                  Add To Cart
                                </button>
                              </div>
                              <div className="">
                                <button
                                  type="button"
                                  className="btn btn-primary !py-1 text-center"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </section>
            </div>
          </div>

          {/* <div className="container mx-auto mb-7">
            <div
              id="AddGiftNote"
              aria-hidden="true"
              className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 justify-center items-center h-modal max-h-screen hidden"
            >
              <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="relative w-full max-w-4xl">
                  <div className="relative bg-white rounded-lg shadow max-h-screen overflow-y-auto">
                    <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                      <div className="text-xl font-semibold text-gray-900 dark:text-white">
                        Add Gift Notes
                      </div>
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="AddGiftNote"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="flex flex-wrap py-5">
                        <div className="lg:flex-shrink-0 flex">
                          <img
                            src="./images/110771_2994514_stonewash_4197.jpg"
                            alt="Patagonia Men's Better Sweater Jacket"
                            className="lg:w-24 lg:h-24 w-auto"
                          />
                        </div>
                        <div className="lg:ml-4 sm:ml-0 flex-1 flex flex-wrap lg:justify-between">
                          <div className="text-xl">
                            Patagonia Men's Better Sweater Jacket
                          </div>
                          <div className="w-full flex flex-wrap">
                            <div className="lg:w-2/3 w-full mt-2">
                              <div className="flex justify-between">
                                <div className="text-base">
                                  <span className="font-semibold">SKU :</span>{' '}
                                  25528
                                </div>
                              </div>
                              <div className="mt-1 flex">
                                <div className="text-base">
                                  <span className="font-semibold">Color :</span>{' '}
                                  Stonewash
                                </div>
                              </div>
                              <div className="mt-1">
                                <label>
                                  <input type="checkbox" checked={true} />
                                  <span className="ml-1 text-base">
                                    This item is gift
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <form>
                        <fieldset className="w-full mt-4">
                          <label htmlFor="Full Name" className="text-base">
                            Gift Massage
                          </label>
                          <div className="mt-2">
                            <textarea
                              name=""
                              id=""
                              cols={30}
                              rows={5}
                              className="form-input"
                            ></textarea>
                          </div>
                          <div className="mt-2">
                            <input
                              id="Gift From"
                              name="Full Name"
                              autoComplete="Gift From"
                              placeholder="Gift From"
                              value=""
                              className="form-input"
                            />
                          </div>
                        </fieldset>
                      </form>
                    </div>
                    <div className="flex flex-wrap items-center justify-between p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                      <button
                        data-modal-toggle="AddGiftNote"
                        type="button"
                        className="btn btn-outline-primary"
                      >
                        Cancel
                      </button>
                      <button
                        data-modal-toggle="AddGiftNote"
                        type="button"
                        className="btn btn-primary"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
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

export default CartPage;
