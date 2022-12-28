import { checkCoupon, deleteItemCart } from '@services/cart.service';
import { FetchColors, FetchProductById } from '@services/product.service';
import { CartResponse } from '@type/APIs/cart.res';
import { _ProductDetails } from '@type/APIs/productDetail.res';
import { useActions, useTypedSelector } from 'hooks';
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

  useEffect(() => {
    if (customerId) {
      fetchCartDetails(customerId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        productId: 138,
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
    let priceObject = {
      totalPrice: 0,
      subTotal: 0,
      smallRunFee: 0,
      logoSetupCharges: 0,
      salesTax: 0,
    };
    // let smallRunFee = 99;
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

    return priceObject;
  };

  return {
    cartProducts,
    coupon,
    showEdit,
    product,
    currentCartProduct,
    loadProduct,
    deleteCartItem,
    getTotalPrice,
    setCoupon,
    couponCodeSubmit,
    setShowEdit,
  };
};

export default CartController;
