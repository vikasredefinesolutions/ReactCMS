import { paths } from '@constants/paths.constant';
import { FetchOrderDetails } from '@services/user.service';
import {
  _MyAcc_OrderBillingDetails,
  _MyAcc_OrderProductDetails,
} from '@type/APIs/user.res';
import Image from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import MyAccountTabs from 'Components/MyAccountTabs';
import moment from 'moment';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import InvoiceModal from 'Templates/Redefine_OrderDetails/Components/InvoiceModal';
import {
  AdditionalCosts,
  BillingAddress,
  CustomizationPrice,
  mergeAllSizes,
  ProductsPrice,
  ShippingAddress,
  ShippingEstimationPrice,
  TotalSavings,
} from './OrderDetails_Functions';

const Redefine_OrderDetails: NextPage = () => {
  const { query } = useRouter();
  const orderId = query.ordernumber;

  const [order, setOrderDetails] = useState<{
    billing: _MyAcc_OrderBillingDetails | null;
    product: _MyAcc_OrderProductDetails[] | null;
  } | null>(null);

  const [showInvoice, setShowInvoice] = useState<boolean>(false);

  useEffect(() => {
    if (orderId && order === null) {
      FetchOrderDetails({ orderId: +orderId }).then((details) =>
        setOrderDetails(details),
      );
    }
  }, [orderId]);

  return (
    <>
      <MyAccountTabs />
      <section className="container mx-auto bg-gray-100 px-6 py-6 mt-5 mb-5">
        <div className="mx-auto space-y-10 sm:px-4 lg:px-0 pb-2">
          <div className="bg-white border-t border-b border-gray-200 sm:border">
            <div className="flex items-center p-4 border-b border-gray-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6 bg-gray-50">
              <div className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-4 sm:grid-cols-4 lg:col-span-2">
                <div>
                  <dt className="text-gray-900 font-semibold uppercase">
                    ORDER NUMBER
                  </dt>
                  <dd className="mt-1 text-gray-900">{order?.billing?.id}</dd>
                </div>
                <div className="hidden sm:block">
                  <dt className="text-gray-900 font-semibold uppercase">
                    DATE OF ORDER
                  </dt>
                  <dd className="mt-1 text-gray-900">
                    <time>
                      {moment(order?.billing?.orderDate).format('DD-MM-YYYY')}
                    </time>
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-900 font-semibold uppercase">
                    TOTAL PRICE
                  </dt>
                  <dd className="mt-1 font-semibold text-gray-900">
                    <Price
                      addColon={false}
                      value={order?.billing?.orderSubtotal}
                    />
                  </dd>
                </div>
              </div>
              <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                <button
                  onClick={() => setShowInvoice(true)}
                  className="btn btn-primary"
                >
                  <span>View Invoice</span>
                </button>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-3/4">
                <div className="bg-gray-50 border-b border-gray-200 p-4 text-sm">
                  <div className="flex flex-wrap justify-between -mx-2 gap-y-4">
                    {BillingAddress(order?.billing)}
                    {ShippingAddress(order?.billing)}
                    <div className="w-full lg:w-1/3 px-2">
                      <div className="border border-gray-200 h-full bg-white">
                        <div className="bg-gray-100 p-2 font-semibold">
                          PAYMENT METHOD
                        </div>
                        <div className="p-2">
                          {order?.billing?.paymentMethod}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul role="list" className="divide-y divide-gray-200">
                  {order?.product?.map((prod) => {
                    return (
                      <li key={prod.productName} className="p-4 sm:p-6">
                        <div className="flex flex-wrap justify-between -mx-3 gap-y-4">
                          <div className="px-3">
                            <div className="lg:flex-shrink-0 sm:w-52 sm:h-52 w-full h-auto overflow-hidden rounded-lg text-center">
                              <Image
                                src={prod.colorImage}
                                alt=""
                                className="max-h-full"
                              />
                            </div>
                          </div>
                          <div className="w-full lg:w-auto lg:flex-1 sm:mt-0 mt-6 text-sm text-center sm:text-left px-3">
                            <div className="font-bold text-xl">
                              {prod.productName}
                            </div>
                            <div className="mt-1">
                              <span className="font-semibold">SIZE : </span>
                              {mergeAllSizes(
                                prod.shoppingCartItemDetailsViewModels,
                              )}
                            </div>
                            <div className="mt-1">
                              <span className="font-semibold">COLOR : </span>
                              {prod.attributeOptionValue}
                            </div>
                            <div className="border-t border-b border-gray-200 my-4 py-4">
                              {prod.shoppingCartItemDetailsViewModels.map(
                                (subProd) => (
                                  <div
                                    key={subProd.attributeOptionId}
                                    className="flex flex-wrap justify-between -mx-3"
                                  >
                                    <div className="w-1/3 px-3">
                                      <div className="font-semibold">SIZE</div>
                                      <div className="">
                                        {subProd.attributeOptionValue}
                                      </div>
                                    </div>
                                    <div className="w-1/3 px-3">
                                      <div className="font-semibold">PRICE</div>
                                      <div className="">
                                        <Price value={subProd.price} />
                                      </div>
                                    </div>
                                    <div className="w-1/3 px-3">
                                      <div className="font-semibold">QTY</div>
                                      <div className="">{subProd.qty}</div>
                                    </div>
                                  </div>
                                ),
                              )}
                            </div>
                            <div className="flex flex-wrap justify-between -mx-3">
                              <div className="w-1/2 px-3">
                                <div className="font-semibold">UNIT TOTAL</div>
                                <div className="">
                                  <Price value={prod.totalPrice} />
                                </div>
                              </div>
                              <div className="w-1/2 px-3">
                                <div className="font-semibold">
                                  ESTIMATED PRICE
                                </div>
                                <div className="">
                                  <Price value={prod.totalPrice} />
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 border-t border-gray-200 pt-4">
                              <div className="font-semibold">LOGO</div>
                              {prod.shoppingCartLogoPersonViewModels.map(
                                (logo, index) => {
                                  return (
                                    <div
                                      key={index}
                                      className="w-20 h-20 border flex items-center justify-center"
                                    >
                                      <Image
                                        className="inline-block max-h-full"
                                        src={logo.logoImagePath}
                                        alt=""
                                      />
                                    </div>
                                  );
                                },
                              )}
                            </div>
                          </div>
                          <div className="px-3">
                            <Link
                              href={`${paths.WRITE_A_REVIEW}?ProductId=${prod.productName}`}
                              className="btn btn-sm btn-primary !w-32 text-center"
                            >
                              Write A Review
                            </Link>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="w-full lg:w-1/4">
                <div className="lg:border-l lg:border-slate-200 bg-white h-full">
                  <div className="w-full text-lg font-bold bg-gray-100 px-4 py-1">
                    Cart Summary
                  </div>
                  <div className="px-4 py-4 text-sm">
                    <dl className="space-y-2">
                      {ProductsPrice(order?.billing)}
                      {CustomizationPrice(order?.billing)}
                      {ShippingEstimationPrice(order?.billing)}
                      {AdditionalCosts(order?.billing)}
                      {TotalSavings(order?.billing)}
                    </dl>
                  </div>
                  <div className="flex justify-between items-center bg-gray-100 w-full text-lg font-bold px-4 py-1">
                    <div>Total:</div>
                    <div>
                      <Price
                        addColon={false}
                        value={order?.billing?.orderTotal || 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showInvoice && order !== null && (
          <InvoiceModal onClose={() => setShowInvoice(false)} order={order} />
        )}
      </section>
    </>
  );
};

export default Redefine_OrderDetails;
