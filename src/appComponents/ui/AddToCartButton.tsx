import { __Cookie } from '@constants/global.constant';
import { addToCart } from '@services/cart.service';
import { _ProductInventoryTransfomed } from '@type/APIs/inventory.res';
import MsgContainer from 'appComponents/modals/MsgContainer';
import { _ProductColor } from 'definations/APIs/colors.res';
import { _modals } from 'definations/product.type';
import { getAddToCartObject, setCookie } from 'helpers/common.helper';
import { highLightError } from 'helpers/global.console';
import { useActions, useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React, { useState } from 'react';

type Props = {
  title: string;
  className: string;
};
interface _Selectedproduct {
  color: _ProductColor,
  sizeQtys:
  | {
    size: string;
    qty: number;
    price: number;
    color?: string | undefined;
  }[],
  image: {
    id: number;
    imageUrl: string;
    altTag: string;
  };
  productId: number;
  inventory: _ProductInventoryTransfomed | null;
}
export const AddToCart: React.FC<Props> = ({ title, className }) => {
  const { showModal } = useActions();
  const toCheckout = useTypedSelector((state) => state.product.toCheckout);
  const customerId = useTypedSelector((state) => state.user.customer?.id);
  const selectedProduct = useTypedSelector((state) => state.product.selected);
  const storeCode = useTypedSelector((state) => state.store.layout);

  const [openModal, setOpenModal] = useState<null | _modals>(null);
  const { colors } = useTypedSelector(
    (state) => state.product.product,
  );

  const modalHandler = (param: null | _modals) => {
    if (param) {
      setOpenModal(param);
      return;
    }
    setOpenModal(null);
  };

  const addToCartHandler = async () => {
    const { sizeQtys, totalPrice, totalQty } = toCheckout;
    if (sizeQtys === null || sizeQtys[0]?.qty === 0) {
      modalHandler('requiredQty');
      return;
    }
    if (storeCode == _Store.type4) {
      const selectedProducts: _Selectedproduct[] = []
      colors?.forEach(color => {
        if (sizeQtys.map(c => c.color).includes(color.name)) {
          selectedProducts.push({
            color: { ...color },
            sizeQtys: sizeQtys?.filter((size) => size.color == color.name),
            productId: color.productId,
            image: {
              id: 0,
              imageUrl: color.imageUrl,
              altTag: '',
            },
            inventory: null
          })
        }
      })

      for (let Product of selectedProducts) {
        const cartObject = await getAddToCartObject({
          userId: customerId || 0,
          note: '',
          sizeQtys: Product.sizeQtys || [],
          productDetails: Product,
          total: {
            totalPrice,
            totalQty,
          },
        });

        if (cartObject) {
          try {
            const res = await addToCart(cartObject);
            if (!customerId) {
              setCookie(__Cookie.tempCustomerId, res, 7);
            }
            showModal({
              message: 'Added to cart Successfully',
              title: 'Success',
            });
          } catch (error) {
            highLightError({ error, component: 'StartOrderModal' });
          }
        }
      }
    } else {
      {
        const cartObject = await getAddToCartObject({
          userId: customerId || 0,
          note: '',
          sizeQtys: sizeQtys,
          productDetails: selectedProduct,
          total: {
            totalPrice,
            totalQty,
          },
        });
        if (cartObject) {
          try {
            const res = await addToCart(cartObject);
            if (!customerId) {
              setCookie(__Cookie.tempCustomerId, res, 7);
            }
            showModal({
              message: 'Added to cart Successfully',
              title: 'Success',
            });
          } catch (error) {
            highLightError({ error, component: 'StartOrderModal' });
          }
        }
      }
    }
  };

  return (
    <>
      <button
        type='button'
        className={className}
        data-modal-toggle='addToCart'
        onClick={addToCartHandler}
      >
        {title}
      </button>
      {openModal === 'requiredQty' && (
        <MsgContainer
          title="Required Size"
          message="Please select one size"
          modalHandler={modalHandler}
        />
      )}
    </>
  );
};

export default AddToCart;
