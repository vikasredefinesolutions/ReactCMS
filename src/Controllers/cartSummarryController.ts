import { __Cookie } from '@constants/global.constant';
import { checkCoupon } from '@services/cart.service';
import { extractCookies } from 'helpers/common.helper';
import { useActions, useTypedSelector } from 'hooks';
import _ from 'lodash';
import { useEffect, useState } from 'react';

export const CartSummaryController = () => {
  const { applyCoupon, showModal } = useActions();

  const [coupon, setCoupon] = useState('');
  const [hidePromocode, setHidePromocode] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const cartProducts = useTypedSelector((state) => state.cart.cart);
  const [customerId, setCustomerId] = useState(0);
  const storeId = useTypedSelector((state) => state.store.id);
  const store = useTypedSelector((state) => state.store);
  const userId = useTypedSelector((state) => state.user.id);
  const discount = useTypedSelector((state) => state.cart.discount);
  useEffect(() => {
    if (userId) {
      setCustomerId(~~userId);
    } else if (localStorage) {
      const id = extractCookies(
        __Cookie.tempCustomerId,
        'browserCookie',
      ).tempCustomerId;
      if (id) setCustomerId(~~id);
    }
  }, [userId]);

  useEffect(() => {
    if (discount !== null) {
      setCoupon(discount.coupon || '');
      setCouponDiscount(discount.amount || 0);
      setHidePromocode(true);
    }
  }, [discount]);

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
      if (!_.isEmpty(response.errors)) {
        showModal({
          message: response.errors.errorDesc,
          title: 'Error',
        });
        setCoupon('');
      } else {
        applyCoupon({
          coupon: coupon,
          amount: response.data.discountAmount,
          percentage: response.data.percentage,
        });
        setHidePromocode(true);
        setCouponDiscount(response.data.discountAmount);
      }
    }
  };

  const getTotalPrice = () => {
    let priceObject = {
      totalPrice: 0,
      subTotal: 0,
      smallRunFee: 0,
      logoSetupCharges: 0,
      salesTax: 0,
      discount: couponDiscount,
    };

    let totalQty = 0;
    if (cartProducts !== null) {
      cartProducts.forEach((res: any) => {
        priceObject.totalPrice += res.totalPrice;
        priceObject.subTotal += res.totalPrice;
        totalQty += res.totalQty;
      });
    }

    if (store.cartCharges) {
      const {
        isSmallRun,
        smallRunLimit,
        smallRunFeesCharges,
        isLogoSetupCharges,
        logoSetupCharges,
      } = store.cartCharges;
      if (isSmallRun) {
        if (totalQty < smallRunLimit) {
          priceObject.totalPrice += smallRunFeesCharges;
          priceObject.smallRunFee = smallRunFeesCharges;
        }
      }
      if (isLogoSetupCharges) {
        priceObject.totalPrice += logoSetupCharges;
        priceObject.logoSetupCharges = logoSetupCharges;
      }
    }

    priceObject.totalPrice -= couponDiscount;
    return priceObject;
  };

  const getTotalProduct = () => {
    let totalQty = 0;
    if (cartProducts !== null) {
      cartProducts.forEach((res: any) => {
        totalQty += res.totalQty;
      });
    }
    return totalQty;
  };

  return {
    coupon,
    hidePromocode,
    getTotalProduct,
    setCoupon,
    getTotalPrice,
    couponCodeSubmit,
  };
};

export default CartSummaryController;
