import { _CI_ShoppingCartItemDetailsViewModel } from '@type/APIs/cart.res';
import { _MyAcc_OrderBillingDetails } from '@type/APIs/user.res';
import Price from 'appComponents/reUsable/Price';

export const CustomizationPrice = (
  billing: _MyAcc_OrderBillingDetails | null | undefined,
) => {
  const logoTotal = billing?.logoFinalTotal || 0;
  const lineTotal = billing?.lineFinalTotal || 0;

  const customizationTotal = logoTotal + lineTotal;

  if (customizationTotal === 0) {
    return <></>;
  }

  return (
    <>
      <div className="text-lg font-medium border-t border-gray-200 pt-2">
        Customizations Price
      </div>
      {logoTotal > 0 && (
        <div className="flex items-center justify-between border-t border-gray-200 pt-2">
          <dt className="">Logo</dt>
          <dd className="font-medium text-gray-900">
            <Price addColon={false} value={logoTotal} />
          </dd>
        </div>
      )}
      {lineTotal > 0 && (
        <div className="flex items-center justify-between border-t border-gray-200 pt-2">
          <dt className="">Line</dt>
          <dd className="font-medium text-gray-900">
            <Price addColon={false} value={lineTotal} />
          </dd>
        </div>
      )}
      <div className="flex items-center justify-between border-t border-gray-200 pt-2">
        <dt className="">Subtotal</dt>
        <dd className="font-medium text-gray-900">
          <Price addColon={false} value={customizationTotal} />
        </dd>
      </div>
    </>
  );
};

export const TotalSavings = (
  billing: _MyAcc_OrderBillingDetails | null | undefined,
) => {
  const shipPromotionDiscount = billing?.shipPromotionDiscount || 0;
  const couponDiscountAmount = billing?.couponDiscountAmount || 0;
  const giftCertificateDiscountAmount =
    billing?.giftCertificateDiscountAmount || 0;
  const quantityDiscountAmount = billing?.quantityDiscountAmount || 0;
  const levelDiscountAmount = billing?.levelDiscountAmount || 0;
  const customDiscount = billing?.customDiscount || 0;

  const totalSavings =
    shipPromotionDiscount +
    couponDiscountAmount +
    giftCertificateDiscountAmount +
    quantityDiscountAmount +
    levelDiscountAmount +
    customDiscount;

  if (totalSavings === 0) {
    return <></>;
  }

  return (
    <>
      <div className="text-lg font-medium border-t border-gray-200 pt-2">
        Total Saving
      </div>
      {shipPromotionDiscount > 0 && (
        <div className="flex items-center justify-between border-t border-gray-200 pt-2">
          <dt className="">Ship Promotion Discount</dt>
          <dd className="font-medium text-gray-900">
            <Price value={shipPromotionDiscount} />
          </dd>
        </div>
      )}
      {couponDiscountAmount > 0 && (
        <div className="flex items-center justify-between border-t border-gray-200 pt-2">
          <dt className="">Coupon Discount</dt>
          <dd className="font-medium text-gray-900">
            <Price value={couponDiscountAmount} />
          </dd>
        </div>
      )}
      {quantityDiscountAmount > 0 && (
        <div className="flex items-center justify-between border-t border-gray-200 pt-2">
          <dt className="">Quantity Discount</dt>
          <dd className="font-medium text-gray-900">
            <Price value={quantityDiscountAmount} />
          </dd>
        </div>
      )}
      {levelDiscountAmount > 0 && (
        <div className="flex items-center justify-between border-t border-gray-200 pt-2">
          <dt className="">Level Discount</dt>
          <dd className="font-medium text-gray-900">
            <Price value={levelDiscountAmount} />
          </dd>
        </div>
      )}
      {customDiscount > 0 && (
        <div className="flex items-center justify-between border-t border-gray-200 pt-2">
          <dt className="">Custom Discount</dt>
          <dd className="font-medium text-gray-900">
            <Price value={customDiscount} />
          </dd>
        </div>
      )}

      <div className="flex items-center justify-between border-t border-gray-200 pt-2">
        <dt className="">Custom Discount</dt>
        <dd className="font-medium text-gray-900">
          <Price value={totalSavings} />
        </dd>
      </div>
    </>
  );
};

export const ShippingEstimationPrice = (
  billing: _MyAcc_OrderBillingDetails | null | undefined,
) => {
  const shippingLabelCost = billing?.shippingLabelCost || 0;
  const orderShippingCosts = billing?.orderShippingCosts || 0;
  const shippingPromotionDiscount = billing?.shipPromotionDiscount || 0;
  const shippingEstimationTotal =
    shippingLabelCost + orderShippingCosts - shippingPromotionDiscount;

  if (shippingEstimationTotal === 0) {
    return <></>;
  }

  return (
    <>
      <div className="text-lg font-medium border-t border-gray-200 pt-2">
        Estimated Shipping
      </div>
      {orderShippingCosts > 0 && (
        <div className="flex items-center justify-between">
          <dt className="">
            <span>Shipping</span>
          </dt>
          <dd className="font-medium text-gray-900">
            <Price addColon={false} value={orderShippingCosts} />
          </dd>
        </div>
      )}
      {shippingLabelCost > 0 && (
        <div className="flex items-center justify-between">
          <dt className="">
            <span>Shipping Label</span>
          </dt>
          <dd className="font-medium text-gray-900">
            <Price addColon={false} value={shippingLabelCost} />
          </dd>
        </div>
      )}
      {shippingPromotionDiscount > 0 && (
        <div className="flex items-center justify-between">
          <dt className="">
            <span>Shipping Promotion Discount</span>
          </dt>
          <dd className="font-medium text-gray-900">
            -<Price addColon={false} value={shippingPromotionDiscount} />
          </dd>
        </div>
      )}
      {shippingEstimationTotal > 0 && (
        <div className="flex items-center justify-between border-t border-gray-200 pt-2">
          <dt className="">Subtotal</dt>
          <dd className="font-medium text-gray-900">
            <Price addColon={false} value={shippingEstimationTotal} />
          </dd>
        </div>
      )}
    </>
  );
};

export const AdditionalCosts = (
  billing: _MyAcc_OrderBillingDetails | null | undefined,
) => {
  const sewOutTotal = billing?.sewoutTotal || 0;
  const orderTaxTotal = billing?.orderTax || 0;
  const giftWrapPrice = billing?.giftWrapPrice || 0;
  const giftWrapAmt = billing?.giftWrapAmt || 0;

  const additionalCostsTotal =
    sewOutTotal + orderTaxTotal + giftWrapAmt + giftWrapPrice;

  if (additionalCostsTotal === 0) {
    return <></>;
  }

  return (
    <>
      <div className="text-lg font-medium border-t border-gray-200 pt-2">
        Additional Services
      </div>
      {sewOutTotal > 0 && (
        <div className="flex items-center justify-between">
          <dt className="">
            <span>Sew-Out</span>
          </dt>
          <dd className="font-medium text-gray-900">
            <Price addColon={false} value={sewOutTotal} />
          </dd>
        </div>
      )}

      {orderTaxTotal > 0 && (
        <div className="flex items-center justify-between">
          <dt className="">
            <span>Order Tax</span>
          </dt>
          <dd className="font-medium text-gray-900">
            <Price addColon={false} value={orderTaxTotal} />
          </dd>
        </div>
      )}

      {giftWrapAmt > 0 && (
        <div className="flex items-center justify-between">
          <dt className="">
            <span>Order Tax</span>
          </dt>
          <dd className="font-medium text-gray-900">
            <Price addColon={false} value={giftWrapAmt} />
          </dd>
        </div>
      )}

      {giftWrapPrice > 0 && (
        <div className="flex items-center justify-between">
          <dt className="">
            <span>Order Tax</span>
          </dt>
          <dd className="font-medium text-gray-900">
            <Price addColon={false} value={giftWrapPrice} />
          </dd>
        </div>
      )}

      <div className="flex items-center justify-between">
        <dt className="">
          <span>Subtotal</span>
        </dt>
        <dd className="font-medium text-gray-900">
          <Price addColon={false} value={additionalCostsTotal} />
        </dd>
      </div>
    </>
  );
};

export const ProductsPrice = (
  billing: _MyAcc_OrderBillingDetails | null | undefined,
) => {
  const productsTotal = billing?.orderSubtotal || 0;

  return (
    <>
      <div className="text-lg font-medium">Products Price</div>
      <div className="flex items-center justify-between border-t border-gray-200 pt-2">
        <dt className="">Subtotal</dt>
        <dd className="font-medium text-gray-900">
          <Price addColon={false} value={productsTotal} />
        </dd>
      </div>
    </>
  );
};

export const mergeAllSizes = (
  items: _CI_ShoppingCartItemDetailsViewModel[],
) => {
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

export const BillingAddress = (
  billing: _MyAcc_OrderBillingDetails | null | undefined,
) => {
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
  return (
    <div className="w-full lg:w-1/3 px-2">
      <div className="border border-gray-200 h-full bg-white">
        <div className="bg-gray-100 p-2 font-semibold">BILLING ADDRESS</div>
        <div className="p-2">{address}</div>
      </div>
    </div>
  );
};

export const ShippingAddress = (
  billing: _MyAcc_OrderBillingDetails | null | undefined,
) => {
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

  return (
    <div className="w-full lg:w-1/3 px-2">
      <div className="border border-gray-200 h-full bg-white">
        <div className="bg-gray-100 p-2 font-semibold">SHIPPING ADDRESS</div>
        <div className="p-2">{address}</div>
      </div>
    </div>
  );
};
