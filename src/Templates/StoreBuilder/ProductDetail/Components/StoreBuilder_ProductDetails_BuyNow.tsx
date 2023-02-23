import { __Cookie, __Cookie_Expiry } from '@constants/global.constant';
import { AddItemsToTheCart } from '@services/cart.service';
import {
  logoCartItems_Generator,
  singleColor_addToCart_PayloadGenerator,
} from '@services/product.service.helper';
import MsgContainer from 'appComponents/modals/MsgContainer';
import { setCookie } from 'helpers/common.helper';
import { highLightError } from 'helpers/global.console';
import { useActions, useTypedSelector } from 'hooks';
import React, { useState } from 'react';
const StoreBuilder_ProductDetails_BuyNow: React.FC = () => {
  const { showModal, fetchCartDetails } = useActions();
  const [showRequiredModal, setShowRequiredModal] = useState<'quantity' | null>(
    null,
  );
  const { id: storeId } = useTypedSelector((state) => state.store);
  const { selected, toCheckout, som_logos } = useTypedSelector(
    (state) => state.product,
  );

  const requiredMessage = (issue: 'quantity', minQty: null | number = 1) => {
    let message = 'Something Went Wrong!!!';

    if (issue === 'quantity') {
      message = `The minimum order for this color is ${minQty} pieces. Please increase your quantity and try again.`;
    }

    return message;
  };

  const handleBuyNow = async () => {
    if (!toCheckout.allowAddToCart) {
      setShowRequiredModal('quantity');
      return;
    }

    if (!toCheckout.sizeQtys) return;

    let lineCartItems: [] = [];

    const logoCartItems = logoCartItems_Generator(
      som_logos.details,
      selected,
      toCheckout.sizeQtys,
    );

    const cartPayload = await singleColor_addToCart_PayloadGenerator({
      cartItemId: 0,
      storeId: storeId!,
      userId: 0,
      isEmployeeLoggedIn: false,
      cartItems: [
        {
          attributeOptionName: 'Color',
          attributeOptionValue: selected.color.name,
          attributeOptionId: selected.color.attributeOptionId,
        },
      ],
      personalization: {
        logoCartItems: logoCartItems,
        lineCartItems: lineCartItems,
      },
      product: {
        id: selected.productId,
        price: toCheckout.price,
        total: {
          price: toCheckout.totalPrice,
          qty: toCheckout.totalQty,
          discountPrice: 0,
        },
        color: {
          altTag: selected.color.altTag,
          imageUrl: selected.color.imageUrl,
        },
        status: 2,
        note: '',
      },
    });

    try {
      const guestId = await AddItemsToTheCart(cartPayload);

      setCookie(
        __Cookie.tempCustomerId,
        guestId,
        __Cookie_Expiry.storeBuilder.tempCustomerId,
      );

      if (!guestId) return;

      fetchCartDetails({
        customerId: guestId,
        isEmployeeLoggedIn: false,
      });
      showModal({
        message: 'Added to cart Successfully',
        title: 'Success',
      });
    } catch (error) {
      showModal({
        message: 'Something went wrong. Try Again!!!',
        title: 'Error',
      });
      highLightError({ error, component: 'StartOrderModal' });
    }
  };

  return (
    <div>
      <div className='mt-3 bg-light-gray p-4'>
        <div className='text-sm text-gray-900 flex flex-wrap items-end'>
          <div className='w-28'>
            <span className=''>You Pay</span>
          </div>
          <div className=''>
            <span className='text-2xl tracking-wider'>
              {toCheckout.totalPrice}
            </span>
          </div>
        </div>
        <div className='w-full text-left flex justify-end mt-4'>
          <button
            onClick={handleBuyNow}
            type='button'
            className='btn btn-primary w-full text-center'
          >
            BUY NOW
          </button>
        </div>
      </div>
      {showRequiredModal && (
        <MsgContainer
          modalHandler={() => setShowRequiredModal(null)}
          message={requiredMessage(showRequiredModal, toCheckout.minQty)}
          title={'Required'}
        />
      )}
    </div>
  );
};

export default StoreBuilder_ProductDetails_BuyNow;
