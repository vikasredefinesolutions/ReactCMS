import { __Cookie } from '@constants/global.constant';
import { paths } from '@constants/paths.constant';
import { AddItemsToTheCart } from '@services/cart.service';
import { fetchCategoryByproductId } from '@services/product.service';
import {
  logoCartItems_Generator,
  singleColor_addToCart_PayloadGenerator,
} from '@services/product.service.helper';
import config from 'api.config';
import MsgContainer from 'appComponents/modals/MsgContainer';
import {
  extractCookies,
  KlaviyoScriptTag,
  setCookie,
} from 'helpers/common.helper';
import { highLightError } from 'helpers/global.console';
import { useActions, useTypedSelector } from 'hooks';
import React, { useState } from 'react';

interface _props {
  closeStartOrderModal: () => void;
  note: string;
  cartItemId: number;
  isUpdate: boolean;
}

const SOM_ActionsHandler: React.FC<_props> = ({
  closeStartOrderModal,
  note,
  cartItemId,
  isUpdate,
}) => {
  const { showModal, fetchCartDetails } = useActions();
  const [showRequiredModal, setShowRequiredModal] = useState<
    'quantity' | 'logo' | null
  >(null);
  const pageType = useTypedSelector((state) => state.store.pageType);
  const { id: storeId } = useTypedSelector((state) => state.store);
  const loggedIN_userId = useTypedSelector((state) => state.user.id);
  const { selected, toCheckout, som_logos, product } = useTypedSelector(
    (state) => state.product,
  );
  console.log('selected', selected, toCheckout, som_logos, product);
  const isEmployeeLoggedIn = useTypedSelector(
    (state) => state.employee.loggedIn,
  );

  const getCategoriesArr = async (): Promise<string[]> => {
    let categoriesArr: string[] = [];
    const categories = await fetchCategoryByproductId(~~pageType.id, storeId!);
    if (categories.length > 0) {
      categoriesArr = categories[0].name.split(' > ');
    }
    return categoriesArr;
  };

  const tempCustId = extractCookies(
    __Cookie.tempCustomerId,
    'browserCookie',
  ).tempCustomerId;
  const requiredMessage = (
    issue: 'quantity' | 'logo',
    minQty: null | number = 1,
    logoIndex: null | string,
  ) => {
    let message = 'Something Went Wrong!!!';
    if (issue === 'logo' && logoIndex) {
      message = `Please Upload Logo or Add Logo Later for ${som_logos.choosedLogoCompletionPending} Logo`;
    }

    if (issue === 'quantity') {
      message = `The minimum order for this color is ${minQty} pieces. Please increase your quantity and try again.`;
    }

    return message;
  };

  const addItemToKlaviyo = async () => {
    const categories = await getCategoriesArr();
    const item = {
      $value: toCheckout.totalPrice,
      AddedItemProductName: product.name,
      AddedItemColorName: selected.color.name,
      AddedItemProductID: product.id,
      AddedItemSKU: product.sku,
      AddedItemCategories: categories,
      AddedItemImageURL: `${config.baseUrl.media}${selected.color.imageUrl}`,
      AddedItemURL: window.location.href,
      AddedItemPrice: toCheckout.price,
      AddedItemQuantity: toCheckout.totalQty,
      ItemNames: [product.name],
      CheckoutURL: paths.CHECKOUT,
      Items: {
        ProductID: product.id,
        SKU: product.sku,
        ProductName: product.name,
        Quantity: toCheckout.totalQty,
        ItemPrice: toCheckout.price,
        RowTotal: toCheckout.totalPrice,
        ProductURL: window.location.href,
        ImageURL: selected.color.imageUrl,
        ProductCategories: categories,
        ColorName: selected.color.name,
        Sizes: toCheckout.sizeQtys,
      },
    };

    KlaviyoScriptTag(['track', 'Added to Cart', item]);
  };

  const addToCartHandler = async () => {
    if (!toCheckout.allowAddToCart && !isEmployeeLoggedIn) {
      setShowRequiredModal('quantity');
      return;
    }

    if (som_logos.choosedLogoCompletionPending) {
      setShowRequiredModal('logo');
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
      cartItemId,
      storeId: storeId!,
      userId:
        loggedIN_userId && loggedIN_userId > 0
          ? loggedIN_userId
          : tempCustId
          ? parseInt(tempCustId)
          : 0,
      isEmployeeLoggedIn,
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
        note: note,
      },
    });

    try {
      const guestId = await AddItemsToTheCart(cartPayload);
      await addItemToKlaviyo();

      let guest_OR_loggedIN_userID = loggedIN_userId;

      if (!loggedIN_userId) {
        guest_OR_loggedIN_userID = guestId;
        setCookie(__Cookie.tempCustomerId, guestId, 'Session');
      }

      if (!guest_OR_loggedIN_userID) return;

      fetchCartDetails({
        customerId: guest_OR_loggedIN_userID,
        isEmployeeLoggedIn,
      });
      showModal({
        message: `${isUpdate ? 'Update' : 'Add to'} cart Successfully`,
        title: 'Success',
      });
    } catch (error) {
      showModal({
        message: 'Something went wrong. Try Again!!!',
        title: 'Error',
      });
      highLightError({ error, component: 'StartOrderModal' });
    }
    closeStartOrderModal();
  };

  return (
    <div className='p-6 pt-0'>
      <button
        onClick={addToCartHandler}
        type='button'
        className='btn btn-lg btn-secondary !flex items-center justify-center w-full uppercase mb-2'
      >
        {isUpdate ? 'Update' : 'Add to'} Cart
      </button>
      <button
        onClick={() => closeStartOrderModal()}
        type='button'
        className='block w-full text-gray-500 hover:text-gray-700'
      >
        Cancel
      </button>

      {showRequiredModal && (
        <MsgContainer
          modalHandler={() => setShowRequiredModal(null)}
          message={requiredMessage(
            showRequiredModal,
            toCheckout.minQty,
            som_logos.choosedLogoCompletionPending,
          )}
          title={'Required'}
        />
      )}
    </div>
  );
};

export default SOM_ActionsHandler;
