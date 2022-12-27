import { addToCart } from '@services/cart.service';
import { CartLogoPersonModel, CartReq } from '@type/APIs/cart.req';
import getLocation from 'helpers/getLocation';
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
    const location = await getLocation();
    const tempCustId = localStorage.getItem('tempCustomerId');

    const cartLogoPersonModel: CartLogoPersonModel[] = [];

    toCheckout.sizeQtys?.map((res) =>
      cartLogoPersonModel.push({
        attributeOptionId: 0,
        attributeOptionValue: res.size,
        code: '',
        price: res.price,
        quantity: res.qty,
        logoPrice: 0,
        logoQty: 0,
        logoFile: 'string',
        estimateDate: new Date('2022-11-03T05:09:52.659Z'),
        isEmployeeLoginPrice: 0,
        cartLogoPersonDetailModels: [
          {
            location: `${location.city}, ${location.state}, ${location.country_name}, ${location.postal}`,
            logoTotal: 0,
            colorImagePath: 'string',
            logoUniqueId: 'string',
            price: 0,
            logoColors: 'string',
            logoNotes: 'string',
            logoDate: new Date('2022-11-03T05:09:52.659Z'),
            logoNames: 'string',
            digitalPrice: 0,
            logoPositionImagePath: 'string',
            oldFilePath: 'string',
            originalLogoFilePath: 'string',
          },
        ],
      }),
    );

    const cartObject: CartReq = {
      addToCartModel: {
        customerId: customerId || (tempCustId ? ~~tempCustId : 0),
        productId: selectedProduct.productId,
        storeId: 4,
        shoppingCartItemModel: {
          id: 0,
          price: toCheckout.totalPrice,
          quantity: toCheckout.totalQty,
          weight: 0,
          productType: 0,
          discountPrice: 0,
          logoTitle: selectedProduct.color.altTag,
          logogImagePath: selectedProduct.color.imageUrl,
          perQuantity: 0,
          appQuantity: 0,
          status: 2,
          discountPercentage: 0,
          productCustomizationId: 0,
          itemNotes: '',
          isEmployeeLoginPrice: 0,
        },
        shoppingCartItemsDetailModels: [
          {
            attributeOptionName: 'Color',
            attributeOptionValue: selectedProduct.color.name,
            attributeOptionId: selectedProduct.color.attributeOptionId,
          },
        ],
        cartLogoPersonModel: cartLogoPersonModel,
        cartLinePersonModels: [],
      },
    };
    if (cartObject) {
      try {
        const res = await addToCart(cartObject);
        if (!customerId) {
          localStorage.setItem('tempCustomerId', res);
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
