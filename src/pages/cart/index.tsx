import SeoHead from 'appComponents/Screen/Layout/Head';
import CartLayout1 from 'appComponents/ui/cart/Layouts/Layout1';
import CartLayout3 from 'appComponents/ui/cart/Layouts/Layout3';
import { CartPage as seoDetails } from 'constants/seo.constant';
import CartController from 'Controllers/CartController';
import { _Store } from 'page.config';
import { useTypedSelector } from '../../hooks';
const CartPage = () => {
  const {
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
  } = CartController();
  const storeLayout = useTypedSelector((state) => state.store.layout);
  let layout = <></>;

  if (cartProducts === null || cartProducts.length < 1) {
    return (
      <div className='text-center mt-20'>
        <h1>Your Cart is Empty.</h1>
        <h5> There's nothing in your cart.</h5>
        <h5>Not to worry: we have lots of other great finds.</h5>
      </div>
    )
  }

  if (storeLayout === _Store.type1) {
    layout = (
      <CartLayout1
        {...{
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
        }}
      />
    );
  } else if (storeLayout === _Store.type2) {
    layout = (
      <CartLayout1
        {...{
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
        }}
      />
    );
  } else if (storeLayout === _Store.type3) {
    layout = (
      <CartLayout3
        cartProducts={cartProducts}
        deleteCartItem={deleteCartItem}
        getTotalPrice={getTotalPrice}
      />
    );
  } else if (storeLayout === _Store.type4) {
    layout = (
      <CartLayout3
        cartProducts={cartProducts}
        deleteCartItem={deleteCartItem}
        getTotalPrice={getTotalPrice}
      />
    );
  }

  return (
    <>
      <SeoHead {...seoDetails} />
      {layout}
    </>
  );
};

export default CartPage;
