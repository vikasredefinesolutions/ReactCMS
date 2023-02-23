import { __Cookie } from '@constants/global.constant';
import { checkCoupon, deleteItemCart } from '@services/cart.service';
import { FetchColors, FetchProductById } from '@services/product.service';
import { _CartItem } from '@type/APIs/cart.res';
import { _ProductDetails, _ProductPolicy } from '@type/APIs/productDetail.res';
import { extractCookies } from 'helpers/common.helper';
import { useActions, useTypedSelector } from 'hooks';
import * as _ from 'lodash';
import { useEffect, useState } from 'react';

const CartController = () => {
  const {
    fetchCartDetails,
    storeDetails,
    updateCheckoutObject,
    storeProductColor,
  } = useActions();
  const cartProducts = useTypedSelector((state) => state.cart.cart);
  const [customerId, setCustomerId] = useState(0);
  const storeId = useTypedSelector((state) => state.store.id);
  const store = useTypedSelector((state) => state.store);
  const userId = useTypedSelector((state) => state.user.id);
  const isEmployeeLoggedIn = useTypedSelector(
    (state) => state.employee.loggedIn,
  );

  useEffect(() => {
    if (customerId) {
      fetchCartDetails({
        customerId,
        isEmployeeLoggedIn,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerId]);

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

  const [showEdit, setShowEdit] = useState(false);
  const [product, setProduct] = useState<_ProductDetails>();
  const [currentCartProduct, setCurrentCartProduct] = useState<_CartItem>();
  const [coupon, setCoupon] = useState('');
  const [hidePromocode, setHidePromocode] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [productPolicy, setproductPolicy] = useState<_ProductPolicy[]>();
  const [endUserDisplay, setEndUserDisplay] = useState<boolean>(false);
  const loadProduct = (product: _CartItem) => {
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
        productId: 0,
      }).then((resp) => {
        if (resp) {
          const res = resp as _ProductDetails;
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
          FetchColors({
            productId: res.id,
            storeId: ~~storeId,
            isAttributeSaparateProduct: false,
          }).then((res) => {
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
        }
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
      if (!_.isEmpty(response.errors)) {
        setCoupon(response.errors.errorDesc);
        setTimeout(() => {
          setCoupon('');
        }, 3000);
      } else {
        setHidePromocode(true);
        setCouponDiscount(response.data.discountAmount);
      }
    }
  };

  const deleteCartItem = async (id: number) => {
    await deleteItemCart(id);
    fetchCartDetails({ customerId, isEmployeeLoggedIn });
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

  const getPolicyDetails = (cartProducts: _CartItem[]) => {
    let flag = false
    let policydetailsArray: _ProductPolicy[] = []
    cartProducts?.map((product) => {
      if (storeId) {
        FetchProductById({
          seName: product.seName,
          storeId: storeId,
          productId: 0,
        }).then((resp) => {
          if (resp) {
            const res = resp as _ProductDetails;
            const PolicyDetails: _ProductPolicy = {
              storeId: res.storeId,
              brandID: res.brandID,
              brandName: res.brandName,
              isBrandOnline: res.isBrandOnline,
              isPolicywithcheckbox: res.isPolicywithcheckbox,
              policyMessage: res.policyMessage,
              isEnduserDisplay: res.isEnduserDisplay
            }
            policydetailsArray.push(PolicyDetails)
            const policybrandarray = policydetailsArray.map((item) => JSON.stringify(item))
            const uniquePolicyProduct = new Set(policybrandarray)
            const PolicyProduct = Array.from(uniquePolicyProduct).map((item) => JSON.parse(item))
            if (res.isEnduserDisplay) {
              setEndUserDisplay(true);
            }
            setproductPolicy([...PolicyProduct])
          }
        });
      }
    })

  }

  return {
    cartProducts,
    getPolicyDetails,
    coupon,
    showEdit,
    product,
    currentCartProduct,
    hidePromocode,
    loadProduct,
    deleteCartItem,
    getTotalPrice,
    setCoupon,
    couponCodeSubmit,
    setShowEdit,
    productPolicy,
    endUserDisplay
  };
};

export default CartController;
