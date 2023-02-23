import { paths } from '@constants/paths.constant';
import Price from 'appComponents/reUsable/Price';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export const SC_CartSummary_withLogo: React.FC = () => {
  const cartProducts = useTypedSelector((state) => state.cart.cart);

  return (
    <section
      aria-labelledby="summary-heading"
      className="w-full lg:w-3/12 px-3 mt-3"
    >
      <div className="bg-gray-100">
        <div className="bg-gray-200 w-full text-2xl px-4 py-2">
          Cart Summary
        </div>
        <div className="px-4 py-2">
          <dl className="space-y-2">
            <div className="text-lg">Products Price</div>
            <div className="flex items-center justify-between pt-2">
              <dt className="text-base">Merchandise</dt>
              <dd className="text-base font-medium text-gray-900">$1,523.50</dd>
            </div>
            {/* <!-- <div className="flex items-center justify-between border-t border-gray-200 pt-2">
                              <dt className="text-base">
                                  Estimated Tax
                              </dt>
                              <dd className="text-base font-medium text-gray-900">
                                  $35.60
                              </dd>
                          </div> --> */}
            <div className="border-t border-gray-300 flex items-center relative pt-2">
              {/* <!-- <dt className="text-base z-0 w-full promocode">
                                  <input type="text" name="Promo code" placeholder="" className="block w-full bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 pr-10">
                                  <label for="Promo code" className="absolute duration-300 top-2 -z-1 origin-0 text-base">Promo code</label>
                                  <dd className="text-base font-medium absolute right-0 top-2 ">+</dd>
                              </dt> --> */}
              <dt className="text-base z-0 w-full promocode">
                <input
                  type="text"
                  name="Promo_code"
                  id="Promo_code"
                  placeholder="Promo code"
                  className="peer placeholder:opacity-0 block w-full bg-transparent pt-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 pr-10 relative z-10"
                />
                <label
                  htmlFor="Promo_code"
                  className="absolute duration-300 -top-3 -z-1 origin-0 text-base bg-gray-100 peer-focus:-top-3 peer-placeholder-shown:top-3"
                >
                  Promo code
                </label>
                <a className="coupon-code-Apply text-sm absolute right-0 top-2 hidden">
                  Apply
                </a>
                {/* <!-- <dd className="text-base font-medium absolute right-0 top-2">+</dd> --> */}
              </dt>
            </div>
            <div className="flex items-center justify-between border-t border-gray-300 pt-2">
              <dt className="text-base">Subtotal</dt>
              <dd className="text-base font-medium text-gray-900">$1,523.50</dd>
            </div>
            <div className="border-t border-gray-300 pt-2 flex items-center justify-between">
              <dt className="flex items-center text-base">
                <span>First Logo</span>
              </dt>
              <dd className="text-base font-medium text-gray-900">FREE</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="flex items-center text-base">
                <span>Second Logo</span>
              </dt>
              <dd className="text-base font-medium text-gray-900">$55.00</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="flex items-center text-base">
                <span>Logo Setup Fee</span>
              </dt>
              <dd className="text-base font-medium text-gray-900">$110.00</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="flex items-center text-base">
                <span>Shipping</span>
              </dt>
              <dd className="text-base font-medium text-gray-900">$35.00</dd>
            </div>
          </dl>
        </div>
        <div className="flex justify-between items-center bg-gray-200 w-full text-lg font-medium px-4 py-2">
          <div>Cart Total:</div>
          <div>$1,688.50</div>
        </div>
      </div>
      <div className="mt-4">
        <a
          href="checkout.html"
          className="btn btn-lg btn-primary !flex items-center justify-center w-full"
        >
          <i className="fa fa-shopping-cart mr-2" aria-hidden="true"></i>
          CHECKOUT NOW
        </a>
      </div>
      {/* <!-- <div className="mt-4 ">
                  <a href="product-listing.html"  className="btn btn-lg btn-secondary !flex items-center justify-center w-full"> KEEP SHOPPING </a>
              </div> --> */}
    </section>
  );
};

export const SC_CartSummary_withoutPersonalization: React.FC = () => {
  const router = useRouter();
  const order = useTypedSelector(
    (state) => state.cart.corporateStoreCart.order,
  );

  const checkoutHandler = () => {
    router.push(paths.CHECKOUT);
  };

  return (
    <section
      aria-labelledby="summary-heading"
      className="w-full lg:w-3/12 px-3 mt-3"
    >
      <div className=" border border-slate-400 bg-white">
        <div className="bg-gray-200 w-full text-lg font-medium px-4 py-1">
          Cart Summary
        </div>
        <div className="px-4 py-4">
          <dl className="space-y-2">
            <div className="text-lg">Products Price</div>
            <div className="flex items-center justify-between pt-2">
              <dt className="text-base">Subtotal</dt>
              <dd className="text-base font-medium text-gray-900">
                <Price value={order.subTotal} />
              </dd>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-2">
              <dt className="text-base">Estimated Tax</dt>
              <dd className="text-base font-medium text-gray-900">
                <Price value={order.tax} />
              </dd>
            </div>
            {/* <!-- <div className="border-t border-gray-200 flex items-center relative">
                  <dt className="text-base z-0 w-full promocode">
                      <input type="text" name="Promo code" placeholder=""
                          className="block w-full bg-transparent pt-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 pr-10">
                      <label for="Promo code"
                          className="absolute duration-300 top-2 -z-1 origin-0 text-base bg-white">Promo
                          code</label>
                      <a className="coupon-code-Apply btn btn-default btn-sm hidden">Apply</a>
                      <dd className="text-base font-medium absolute right-0 top-2 ">
                          +
                      </dd>
                  </dt>
              </div> --> */}
            <div className="border-t border-gray-200 pt-2 flex items-center justify-between">
              <dt className="flex items-center text-base">
                <span>Shipping</span>
              </dt>
              <dd className="text-base font-medium text-gray-900">
                <Price value={order.shipping} />
              </dd>
            </div>
          </dl>
        </div>
        <div className="flex justify-between items-center bg-gray-200 w-full text-lg font-medium px-4 py-1">
          <div>Total:</div>
          <div>
            <Price value={order.total} />
          </div>
        </div>
      </div>
      <div className="mt-4 ">
      <Link href={'/checkout.html'}>
                  <a className="btn btn-lg btn-primary !flex items-center justify-center w-full">
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
          <img alt="" src="images/order-risk-free-icon.jpg" className="mr-2" />
          <span className="text-xl font-semibold"> Order Risk-Free!</span>
        </div>
        <div className="flex items-center justify-center text-lg text-center mt-3">
          Cancel your order without penalty anytime before your proof is
          approved.
        </div>
      </div>
    </section>
  );
};
