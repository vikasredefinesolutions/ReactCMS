import CartLayout1 from 'appComponents/ui/cart/Layouts/Layout1';
import CartLayout2 from 'appComponents/ui/cart/Layouts/Layout2';
import CartLayout3 from 'appComponents/ui/cart/Layouts/Layout3';
import CartLayout4 from 'appComponents/ui/cart/Layouts/Layout4';
import CartController from 'Controllers/CartController';
import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';

const Ecommerce_ShoppingCart = () => {
  const {
    cartProducts,
    showEdit,
    product,
    currentCartProduct,
    loadProduct,
    deleteCartItem,
    setShowEdit,
    getPolicyDetails,
    productPolicy,
    endUserDisplay
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
    );
  }

  if (
    storeLayout === _Store.type1 ||
    storeLayout === _Store.type15 ||
    storeLayout === _Store.type16
  ) {
    layout = (
      <CartLayout1
        {...{
          cartProducts,
          loadProduct,
          deleteCartItem,
          showEdit,
          product,
          setShowEdit,
          currentCartProduct,
        }}
      />
    );
  } else if (storeLayout === _Store.type2) {
    layout = (
      <CartLayout2
        {...{
          cartProducts,
          loadProduct,
          deleteCartItem,
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
      />
    );
  } else if (storeLayout === _Store.type4) {
    layout = (
      <CartLayout4
        {...{
          cartProducts,
          loadProduct,
          deleteCartItem,
          showEdit,
          product,
          setShowEdit,
          currentCartProduct,
          getPolicyDetails,
          productPolicy,
          endUserDisplay
        }}
      />
    );
  }

  return <>{layout}</>;
};

export default Ecommerce_ShoppingCart;
