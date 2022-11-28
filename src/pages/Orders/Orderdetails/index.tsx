import { FetchOrderDetails } from '@services/user.service';
import { _MyAcc_OrderDetails } from '@type/APIs/user.res';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const OrderDetails: NextPage = () => {
  const { query } = useRouter();
  const orderId = query.ordernumber;

  const [orderDetails, setOrderDetails] = useState<_MyAcc_OrderDetails | null>(
    null,
  );

  useEffect(() => {
    if (orderId) {
      FetchOrderDetails({ orderId: +orderId }).then((details) =>
        setOrderDetails(details),
      );
    }
  }, [orderId]);

  return (
    <section className="container mx-auto  bg-gray-100  px-6 py-6 mt-5 mb-5">
      {/* <!-- <div className="mb-4">
        <div className="mt-4">
            <div className="lg:flex items-center lg:justify-between sm:flex-grow">
                <div className="flex items-center w-full lg:w-full lg:max-w-xl max-w-full">
                    <div className="w-full">
                        <label for="search" className="sr-only">Search</label>
                        <div className="relative flex">
                            <input id="search" name="search" className="form-input" placeholder="Search" type="search">
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative lg:mt-0 mt-4">
                        <select id="past-order" name="past-order" autocomplete="past-order" className="form-input">
                            <option>Past 1 Month</option>
                            <option>Past 6 Month</option>
                            <option>Past a Year</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="text-base font-medium mt-4 mb-4 flex flex-wrap">
                <div className="mt-2 mb-2">Sort By :</div>
                <div className="text-indigo-600 mr-5 ml-5 mt-2 mb-2"><a href="my-orders.html" title="All Order" className="active">All Order(2)</a></div>
                <div className="mr-5 ml-5 mt-2 mb-2"><a href="javascript:void(0);" title="Open Order">Open Order(0)</a></div>
                <div className="mr-5 ml-5 mt-2 mb-2"><a href="my-orders-return.html" title="Return">Return(1)</a></div>
                <div className="ml-5 mt-2 mb-2"><a href="javascript:void(0);" title="Cancel">Cancel(0)</a></div>
            </div>
        </div>
    </div> --> */}
      <div className="mx-auto space-y-10 sm:px-4 lg:px-0 pb-2">
        <div className="bg-white border-t border-b border-gray-200 sm:border">
          <div className="flex items-center p-4 border-b border-gray-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6 bg-gray-50">
            <div className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-4 sm:grid-cols-4 lg:col-span-2">
              <div>
                <dt className="text-gray-900 font-semibold uppercase">
                  ORDER NUMBER
                </dt>
                <dd className="mt-1 text-gray-900">WEB-S05654123</dd>
              </div>
              <div className="hidden sm:block">
                <dt className="text-gray-900 font-semibold uppercase">
                  DATE OF ORDER
                </dt>
                <dd className="mt-1 text-gray-900">
                  <time dateTime="2022-05-19">May 19, 2022</time>
                </dd>
              </div>
              <div>
                <dt className="text-gray-900 font-semibold uppercase">
                  TOTAL PRICE
                </dt>
                <dd className="mt-1 font-semibold text-gray-900">$1290.97</dd>
              </div>
            </div>
            <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
              <a href="my-order-detail.html" className="btn btn-primary">
                <span>View Invoice</span>
              </a>
            </div>
          </div>
          <ul role="list" className="divide-y divide-gray-200 ">
            <li className="p-4 sm:p-6">
              <div className="flex flex-wrap justify-between -mx-3">
                <div className="px-3">
                  <div className="lg:flex-shrink-0 sm:w-52 sm:h-52 w-full h-auto overflow-hidden rounded-lg text-center">
                    <img
                      src="images/1040623_25528_sth.jpg"
                      alt=""
                      className="max-h-full"
                    />
                  </div>
                </div>
                <div className="flex-1 sm:mt-0 mt-6 text-sm text-center sm:text-left px-3">
                  <div className="font-bold text-xl">
                    Patagonia Men's Better Sweater Jacket
                  </div>
                  <div className="mt-1">
                    <span className="font-semibold">SIZE : </span> Misc
                  </div>
                  <div className="mt-1">
                    <span className="font-semibold">COLOR : </span> Stonewash
                  </div>
                  <div className="mt-4 flex flex-wrap justify-between -mx-3">
                    <div className="w-full lg:w-1/3 px-3">
                      <div className="font-semibold">SIZE</div>
                      <div className="">Misc</div>
                    </div>
                    <div className="w-full lg:w-1/3 px-3">
                      <div className="font-semibold">PRICE</div>
                      <div className="">$87.50</div>
                    </div>
                    <div className="w-full lg:w-1/3 px-3">
                      <div className="font-semibold">QTY</div>
                      <div className="">12</div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap justify-between -mx-3">
                    <div className="w-full lg:w-1/2 px-3">
                      <div className="font-semibold">UNIT TOTAL</div>
                      <div className="">$1050.00</div>
                    </div>
                    <div className="w-full lg:w-1/2 px-3">
                      <div className="font-semibold">ESTIMATED PRICE</div>
                      <div className="">$1050.00</div>
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <a
                    href=""
                    title="Buy This Again"
                    className="btn btn-primary !w-48 text-center"
                  >
                    Write A Review
                  </a>
                </div>
              </div>
            </li>
            <li className="p-4 sm:p-6">
              <div className="flex flex-wrap justify-between -mx-3">
                <div className="px-3">
                  <div className="lg:flex-shrink-0 sm:w-52 sm:h-52 w-full h-auto overflow-hidden rounded-lg text-center">
                    <img
                      src="images/1040623_25528_sth.jpg"
                      alt=""
                      className="max-h-full"
                    />
                  </div>
                </div>
                <div className="flex-1 sm:mt-0 mt-6 text-sm text-center sm:text-left px-3">
                  <div className="font-bold text-xl">
                    Patagonia Men's Better Sweater Jacket
                  </div>
                  <div className="mt-1">
                    <span className="font-semibold">SIZE : </span> Misc
                  </div>
                  <div className="mt-1">
                    <span className="font-semibold">COLOR : </span> Stonewash
                  </div>
                  <div className="mt-4 flex flex-wrap justify-between -mx-3">
                    <div className="w-full lg:w-1/3 px-3">
                      <div className="font-semibold">SIZE</div>
                      <div className="">Misc</div>
                    </div>
                    <div className="w-full lg:w-1/3 px-3">
                      <div className="font-semibold">PRICE</div>
                      <div className="">$87.50</div>
                    </div>
                    <div className="w-full lg:w-1/3 px-3">
                      <div className="font-semibold">QTY</div>
                      <div className="">5</div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap justify-between -mx-3">
                    <div className="w-full lg:w-1/2 px-3">
                      <div className="font-semibold">UNIT TOTAL</div>
                      <div className="">$437.50</div>
                    </div>
                    <div className="w-full lg:w-1/2 px-3">
                      <div className="font-semibold">ESTIMATED PRICE</div>
                      <div className="">$437.50</div>
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <a
                    href=""
                    title="Buy This Again"
                    className="btn btn-primary !w-48 text-center"
                  >
                    Write A Review
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* <!-- <div className="bg-white border-t border-b border-gray-200 sm:border">
            <div
                className="flex items-center p-4 border-b border-gray-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6 bg-gray-50">
                <dl className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-4 sm:grid-cols-4 lg:col-span-2">
                    <div className="hidden sm:block">
                        <dt className="text-gray-900 font-semibold uppercase">DATE OF ORDER</dt>
                        <dd className="mt-1 text-gray-900">
                            <time datetime="2022-05-01">May 01, 2022</time>
                        </dd>
                    </div>
                    <div>
                        <dt className="text-gray-900 font-semibold uppercase">TOTAL PRICE</dt>
                        <dd className="mt-1 font-medium text-gray-900">
                            $680.97
                        </dd>
                    </div>
                    <div className="hidden sm:block">
                        <dt className="text-gray-900 font-semibold uppercase">ORDER STATUS</dt>
                        <dd className="mt-1 font-medium text-gray-900">
                            Delivered
                        </dd>
                    </div>
                    <div>
                        <dt className="text-gray-900 font-semibold uppercase">ORDER NUMBER</dt>
                        <dd className="mt-1 text-gray-900">
                            WEB-S05654100
                        </dd>
                    </div>
                </dl>
                <div x-data="Components.menu({ open: false })" x-init="init()"
                    // @keydown.escape.stop="open = false; focusButton()" @click.away="onClickAway($event)"
                    className="relative flex justify-end lg:hidden">
                    <div className="flex items-center">
                        <button type="button"
                            className="-m-2 p-2 flex items-center text-gray-400 hover:text-gray-500"
                            id="menu-0-button"
                            //  x-ref="button"
                            //  @click="onButtonClick()"
                            // @keyup.space.prevent="onButtonEnter()" @keydown.enter.prevent="onButtonEnter()"
                            // aria-expanded="false" aria-haspopup="true" x-bind:aria-expanded="open.toString()"
                            // @keydown.arrow-up.prevent="onArrowUp()" @keydown.arrow-down.prevent="onArrowDown()"
                            >
                            <span className="sr-only">Options for order WEB-S05654100</span>
                            <svg className="w-6 h-6" x-description="Heroicon name: outline/dots-vertical"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="2" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                    <a href="javascript:void(0);" className="btn btn-outline-primary">
                        <span>View Order Details</span>
                    </a>
                    <a href="javascript:void(0);" className="btn btn-outline-primary">
                        <span>Printable Order Summary</span>
                    </a>
                    <a href="javascript:void(0);" title="All Order"
                        className="text-indigo-600 mr-5 ml-5 mt-2 mb-2">Get Help</a>
                </div>
            </div>


            <ul role="list" className="divide-y divide-gray-200">
                <li className="p-4 sm:p-6 lg:grid lg:grid-cols-2">
                    <div className="sm:flex sm:items-center sm:justify-center">
                        <div
                            className="lg:flex-shrink-0 sm:w-40 sm:h-40 w-full h-auto bg-gray-200 overflow-hidden rounded-lg text-center">
                            <img src="images/blue540x540.png"
                                alt="Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps."
                                className="w-full h-full object-center object-cover"/>
                        </div>
                        <div className="flex-1 sm:ml-6 sm:mt-0 mt-6 text-base text-center sm:text-left">
                            <div className="text-gray-900 font-semibold uppercase">
                                SIDE RUNNER - Long sleeved P.E Nation
                            </div>
                            <div className="mt-2 text-base font-semibold">
                                $70.00
                            </div>
                            <div className="mt-5 hidden sm:block">
                                <div className="flex items-center">
                                    <span className="text-base mr-5">Review This Item:</span>
                                    <svg className="h-5 w-5 flex-shrink-0 text-indigo-500" x-state:on="Active"
                                        x-state:off="Inactive"
                                        x-state-description="Active: &quot;text-indigo-500&quot;, Inactive: &quot;text-gray-300&quot;"
                                        x-description="Heroicon name: solid/star"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>

                                    <svg className="h-5 w-5 flex-shrink-0 text-indigo-500"
                                        x-state-description="undefined: &quot;text-indigo-500&quot;, undefined: &quot;text-gray-300&quot;"
                                        x-description="Heroicon name: solid/star"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>

                                    <svg className="h-5 w-5 flex-shrink-0 text-indigo-500"
                                        x-state-description="undefined: &quot;text-indigo-500&quot;, undefined: &quot;text-gray-300&quot;"
                                        x-description="Heroicon name: solid/star"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>

                                    <svg className="h-5 w-5 flex-shrink-0 text-indigo-500"
                                        x-state-description="undefined: &quot;text-indigo-500&quot;, undefined: &quot;text-gray-300&quot;"
                                        x-description="Heroicon name: solid/star"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>

                                    <svg className="h-5 w-5 flex-shrink-0 text-gray-300"
                                        x-state-description="undefined: &quot;text-indigo-500&quot;, undefined: &quot;text-gray-300&quot;"
                                        x-description="Heroicon name: solid/star"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>

                                </div>
                                <p className="sr-only">4 out of 5 stars</p>
                            </div>
                            <div className="w-full block mt-4">
                                <a href="product-page.html" title="Buy This Again" className="btn btn-primary !w-48 text-center">Buy This Again</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap mt-4">
                        <div className="w-full text-center ml-0 sm:ml-6 block mb-4">                                    
                            <a href="track-order.html" title="Track Package" className="btn btn-sm btn-outline-primary !w-40">Track Package</a>
                        </div>
                        <div className="w-full text-center ml-0 sm:ml-6 block mb-4">
                            <a href="my-orders-return.html" title="Return Item" className="btn btn-sm btn-outline-primary !w-40">Return Item</a>
                        </div>
                        <div className="w-full text-center ml-0 sm:ml-6 block mb-4">
                            <a href="view-cancel-order.html" title="Cancel Order" className="btn btn-sm btn-outline-primary !w-40">Cancel Order</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div> --> */}
      </div>
    </section>
  );
};

export default OrderDetails;
