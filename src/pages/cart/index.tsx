import { _Store } from '@constants/store.constant';
import SeoHead from 'appComponents/Screen/Layout/Head';
import CartLayout1 from 'appComponents/ui/cart/Layouts/Layout1';
import CartLayout3 from 'appComponents/ui/cart/Layouts/Layout3';
import { CartPage as seoDetails } from 'constants/seo.constant';
import CartController from 'Controllers/CartController';
import { useTypedSelector } from '../../hooks';
const CartPage = () => {

  const { cartProducts,
    coupon,
    showEdit,
    product,
    currentCartProduct,
    loadProduct,
    deleteCartItem,
    getTotalPrice,
    setCoupon,
    couponCodeSubmit,
    setShowEdit, } = CartController();
  const storeLayout = useTypedSelector((state) => state.store.layout);
  let layout = <></>;
  if (storeLayout === _Store.type1) {
    layout = <CartLayout1 {
      ...{
        cartProducts,
        loadProduct,
        deleteCartItem,
        getTotalPrice,
        setCoupon,
        coupon,
        couponCodeSubmit,
        showEdit,
        product,
        setShowEdit,
        currentCartProduct,
      }
    } />
  } else if (storeLayout === _Store.type2) {
    layout = <CartLayout1 {
      ...{
        cartProducts,
        loadProduct,
        deleteCartItem,
        getTotalPrice,
        setCoupon,
        coupon,
        couponCodeSubmit,
        showEdit,
        product,
        setShowEdit,
        currentCartProduct,
      }
    } />
  } else if (storeLayout === _Store.type3) {
    layout = <CartLayout3 cartProducts={cartProducts} deleteCartItem={deleteCartItem} getTotalPrice={getTotalPrice} />
  } else if (storeLayout === _Store.type4) {
    console.log(getTotalPrice());
    layout = <CartLayout3 cartProducts={cartProducts} deleteCartItem={deleteCartItem} getTotalPrice={getTotalPrice} />
  }

  return (
    <>
      <SeoHead {...seoDetails} />
      {layout}
    </>
  );
};

export default CartPage;
