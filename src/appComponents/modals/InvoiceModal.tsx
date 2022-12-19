import {
  ShoppingCartItemDetailsViewModel,
  _MyAcc_OrderBillingDetails,
  _MyAcc_OrderProductDetails,
} from '@type/APIs/user.res';
import Price from 'appComponents/reusables/Price';
import React, { useState } from 'react';
interface _props {
  onClose: () => void;
  order: {
    billing: _MyAcc_OrderBillingDetails | null;
    product: _MyAcc_OrderProductDetails[] | null;
  };
}

const InvoiceModal: React.FC<_props> = ({ onClose, order }) => {
  const [showInvoice, setShowInvoice] = useState<boolean>(false);

  const getBillingAddress = (billing: _MyAcc_OrderBillingDetails | null) => {
    let address = '';
    if (billing?.billingAddress1) {
      address += `${billing.billingAddress1}, `;
    }
    if (billing?.billingAddress2) {
      address += `${billing.shippingAddress2}, `;
    }
    if (billing?.billingCity) {
      address += `${billing.billingCity}, `;
    }
    if (billing?.billingCountry) {
      address += `${billing.billingCountry}, `;
    }
    return address;
  };

  const getShippingAddress = (billing: _MyAcc_OrderBillingDetails | null) => {
    let address = '';
    if (billing?.shippingAddress1) {
      address += `${billing.shippingAddress1}, `;
    }
    if (billing?.shippingAddress2) {
      address += `${billing.shippingAddress2}, `;
    }
    if (billing?.shippingCity) {
      address += `${billing.shippingCity}, `;
    }
    if (billing?.shippingCountry) {
      address += `${billing.shippingCountry}, `;
    }
    return address;
  };

  const mergeAllSizes = (items: ShoppingCartItemDetailsViewModel[]) => {
    let allSizes = '';

    items.forEach((product, index) => {
      if (index === items.length - 1) {
        allSizes += `${product.attributeOptionValue} `;
        return;
      }
      allSizes += `${product.attributeOptionValue}, `;
    });

    return allSizes;
  };

  return (
    <div
      id="viewinvoiceModal"
      className="overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal h-full inset-0"
    >
      <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="relative px-4 w-full max-w-2xl h-fullborder border-neutral-200 inline-block h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-screen overflow-y-auto">
            <div className="absolute right-0 top-0">
              <div className="flex items-center gap-x-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="viewinvoiceModal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="border border-gray-300">
              <div className="p-4 border-b border-b-gray-300 last:border-b-0 text-center">
                <div className="h-12">
                  <img
                    src="images/logo.png"
                    alt=""
                    className="max-h-full inline-block"
                  />
                </div>
              </div>
              <div className="p-4 border-b border-b-gray-300 last:border-b-0">
                <div className="">Dear John,</div>
                <div className="">Your order number - WEB-S05654123</div>
              </div>
              <div className="p-4 border-b border-b-gray-300 last:border-b-0">
                {order.product?.map((prod) => (
                  <div
                    key={prod.sku}
                    className="flex flex-wrap justify-between -mx-3 gap-y-4"
                  >
                    <div className="px-3">
                      <div className="lg:flex-shrink-0 sm:w-32 sm:h-32 w-full h-auto overflow-hidden rounded-lg text-center">
                        <img
                          src="images/1040623_25528_STH.jpg"
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
                        <span className="font-semibold">SIZE : </span>{' '}
                        {prod.attributeOptionId}
                      </div>
                      <div className="mt-1">
                        <span className="font-semibold">COLOR : </span>{' '}
                        {prod.attributeOptionValue}
                      </div>
                      <div className="border-t border-b border-gray-200 my-4 py-4">
                        <div className="flex flex-wrap justify-between -mx-3">
                          <div className="w-1/3 px-3">
                            <div className="font-semibold">SIZE</div>
                            <div className="">Misc</div>
                          </div>
                          <div className="w-1/3 px-3">
                            <div className="font-semibold">PRICE</div>
                            <div className="">$87.50</div>
                          </div>
                          <div className="w-1/3 px-3">
                            <div className="font-semibold">QTY</div>
                            <div className="">12</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-between -mx-3">
                        <div className="w-1/2 px-3">
                          <div className="font-semibold">UNIT TOTAL</div>
                          <div className="">$1050.00</div>
                        </div>
                        <div className="w-1/2 px-3">
                          <div className="font-semibold">ESTIMATED PRICE</div>
                          <div className="">$1050.00</div>
                        </div>
                      </div>
                      <div className="mt-4 border-t border-gray-200 pt-4">
                        <div className="font-semibold">LOGO</div>
                        <div className="w-20 h-20 border flex items-center justify-center">
                          <img
                            className="inline-block max-h-full"
                            src="images/cg-logo-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-b border-b-gray-300 last:border-b-0">
                <div className="text-sm">
                  <dl className="space-y-2">
                    <div className="flex items-center justify-between">
                      <dt className="">Subtotal</dt>
                      <dd className="font-medium text-gray-900">
                        {order.billing?.orderSubtotal}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="">
                        <span>Shipping</span>
                      </dt>
                      <dd className="font-medium text-gray-900">
                        <Price value={order.billing?.orderShippingCosts} />
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="">
                        <span>Order Tax</span>
                      </dt>
                      <dd className="font-medium text-gray-900">
                        <Price value={order.billing?.orderTax} />
                      </dd>
                    </div>
                    <div className="flex items-center justify-between font-bold">
                      <dt className="">
                        <span>Total</span>
                      </dt>
                      <dd className="text-gray-900">
                        <Price value={order.billing?.orderTotal} />
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="p-4 border-b border-b-gray-300 last:border-b-0">
                <div className="flex flex-wrap gap-y-3">
                  <div className="w-full lg:w-1/2">
                    <div className="font-semibold">Bill to</div>
                    <div className="">{order.billing?.billingFirstName}</div>
                    <div className="">{getBillingAddress(order.billing)}</div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="font-semibold">Ship to</div>
                    <div className="">{order.billing?.shippingFirstName}</div>
                    <div className="">{getShippingAddress(order.billing)}</div>
                  </div>
                  <div className="w-full"></div>
                </div>
              </div>
              <div className="p-4 border-b border-b-gray-300 last:border-b-0 text-center text-sm">
                &copy; 2022 Corporate Gear by ParsonsKellogg All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
