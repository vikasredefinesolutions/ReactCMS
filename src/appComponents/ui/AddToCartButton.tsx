import { __Cookie } from '@constants/global.constant';
import { addToCart } from '@services/cart.service';
import { getAddToCartObject, setCookie } from 'helpers/common.helper';
import { highLightError } from 'helpers/global.console';
import { useActions, useTypedSelector } from 'hooks';
import React from 'react';

type Props = {
  title: string;
  className: string;
};

export const AddToCart: React.FC<Props> = ({ title, className }) => {
  const { showModal } = useActions();
  const toCheckout = useTypedSelector((state) => state.product.toCheckout);
  const customerId = useTypedSelector((state) => state.user.customer?.id);
  const selectedProduct = useTypedSelector((state) => state.product.selected);

  const addToCartHandler = async () => {

    const { sizeQtys, totalPrice,
      totalQty } = toCheckout;
    const cartObject = await getAddToCartObject({
      userId: customerId || 0,
      note: '',
      sizeQtys: sizeQtys,
      productDetails: selectedProduct,
      total: {
        totalPrice,
        totalQty
      }
    })

    if (cartObject) {
      try {
        const res = await addToCart(cartObject);
        if (!customerId) {
          setCookie(__Cookie.tempCustomerId, res, 7);
        }
        showModal({
          message: 'Added to cart Successfully',
          type: 'Success',
        });
      } catch (error) {
        highLightError({ error, component: 'StartOrderModal' });
      }
    }
  };

  return (
    <button
      type="button"
      className={className}
      data-modal-toggle="addToCart"
      onClick={addToCartHandler}
    >
      {title}
    </button>
  );
};

export default AddToCart;
