import {
  _MyAcc_OrderBillingDetails,
  _MyAcc_OrderProductDetails,
} from '@type/APIs/user.res';
import Image from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import { useTypedSelector } from 'hooks';
import React from 'react';
import InvoiceItem from './InvoiceItem';
interface _props {
  onClose: () => void;
  order: {
    billing: _MyAcc_OrderBillingDetails | null;
    product: _MyAcc_OrderProductDetails[] | null;
  };
}

const InvoiceModal: React.FC<_props> = ({ onClose, order }) => {
  const { logoUrl, logoAlt } = useTypedSelector((state) => state.store);

  const getBillingAddress = (billing: _MyAcc_OrderBillingDetails | null) => {
    let address = '';
    if (billing?.billingAddress1) {
      address += `${billing.billingAddress1}`;
    }
    if (billing?.billingAddress2 && billing.billingAddress2.trim() !== '') {
      address += ', ';
      address += `${billing.shippingAddress2}`;
    }
    if (billing?.billingCity) {
      address += ', ';
      address += `${billing.billingCity}`;
    }
    if (billing?.billingState) {
      address += ', ';
      address += `${billing.billingState}`;
    }
    if (billing?.billingCountry) {
      address += ', ';
      address += `${billing.billingCountry} `;
    }
    if (billing?.billingZip) {
      address += ', ';
      address += `${billing.billingZip} `;
    }

    return address;
  };

  const getShippingAddress = (billing: _MyAcc_OrderBillingDetails | null) => {
    let address = '';
    if (billing?.shippingAddress1) {
      address += `${billing.shippingAddress1}`;
    }
    if (billing?.shippingAddress2 && billing.shippingAddress2.trim() !== '') {
      address += ', ';
      address += `${billing.shippingAddress2}`;
    }
    if (billing?.shippingCity) {
      address += ', ';
      address += `${billing.shippingCity}`;
    }
    if (billing?.shippingState) {
      address += ', ';
      address += `${billing.shippingState}`;
    }
    if (billing?.shippingCountry) {
      address += ', ';
      address += `${billing.shippingCountry}`;
    }
    if (billing?.shippingZip) {
      address += ', ';
      address += `${billing.billingZip}`;
    }
    return address;
  };

  return (
    <div
      id='viewinvoiceModal'
      className='overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal h-full inset-0'
    >
      <div className='w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
        <div className='relative px-4 w-full max-w-2xl h-fullborder border-neutral-200 inline-block h-auto'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-screen overflow-y-auto'>
            <div className='absolute right-0 top-0'>
              <div className='flex items-center gap-x-2'>
                <button
                  type='button'
                  onClick={onClose}
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className='border border-gray-300'>
              <div
                className='p-4 border-b border-b-gray-300 last:border-b-0 text-center w-1/3'
                id={`logo-image-invoiceModal-orderDetailsSection`}
              >
                {logoUrl && (
                  <div className='h-12'>
                    <Image
                      src={logoUrl}
                      alt={`${logoAlt}`}
                      className='max-h-full inline-block'
                    />
                  </div>
                )}
              </div>
              <div className='p-4 border-b border-b-gray-300 last:border-b-0'>
                <div className=''>Dear {order.billing?.firstName},</div>
                <div className=''>
                  Your order number is: {order.billing?.id}
                </div>
              </div>
              <div className='p-4 border-b border-b-gray-300 last:border-b-0'>
                {order.product?.map((prod) => (
                  <InvoiceItem key={prod?.attributeOptionId} {...prod} />
                ))}
              </div>
              <div className='p-4 border-b border-b-gray-300 last:border-b-0'>
                <div className='text-sm'>
                  <dl className='space-y-2'>
                    <div className='flex items-center justify-between'>
                      <dt className=''>Subtotal</dt>
                      <dd className='font-medium text-gray-900'>
                        <Price value={order.billing?.orderSubtotal} />
                      </dd>
                    </div>
                    <div className='flex items-center justify-between'>
                      <dt className=''>
                        <span>Shipping</span>
                      </dt>
                      <dd className='font-medium text-gray-900'>
                        <Price value={order.billing?.orderShippingCosts} />
                      </dd>
                    </div>
                    <div className='flex items-center justify-between'>
                      <dt className=''>
                        <span>Order Tax</span>
                      </dt>
                      <dd className='font-medium text-gray-900'>
                        <Price value={order.billing?.orderTax} />
                      </dd>
                    </div>
                    <div className='flex items-center justify-between font-bold'>
                      <dt className=''>
                        <span>Total</span>
                      </dt>
                      <dd className='text-gray-900'>
                        <Price value={order.billing?.orderTotal} />
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className='p-4 border-b border-b-gray-300 last:border-b-0'>
                <div className='flex flex-wrap gap-y-3'>
                  <div className='w-full lg:w-1/2'>
                    <div className='font-semibold'>Bill to</div>
                    <div className=''>{order.billing?.billingFirstName}</div>
                    <div className=''>{getBillingAddress(order.billing)}</div>
                  </div>
                  <div className='w-full lg:w-1/2'>
                    <div className='font-semibold'>Ship to</div>
                    <div className=''>{order.billing?.shippingFirstName}</div>
                    <div className=''>{getShippingAddress(order.billing)}</div>
                  </div>
                  <div className='w-full'></div>
                </div>
              </div>
              <div className='p-4 border-b border-b-gray-300 last:border-b-0 text-center text-sm'>
                &copy; 2022 Redefine Ecommere - All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
