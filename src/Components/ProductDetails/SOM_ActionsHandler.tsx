import { __Cookie } from '@constants/global.constant';
import { AddItemsToTheCart } from '@services/cart.service';
import { logoCartItems_Generator, singleColor_addToCart_PayloadGenerator } from '@services/product.service.helper';
import MsgContainer from 'appComponents/modals/MsgContainer';
import { setCookie } from 'helpers/common.helper';
import { highLightError } from 'helpers/global.console';
import { useActions, useTypedSelector } from 'hooks';
import React, { useState } from 'react';

interface _props {
    closeStartOrderModal: () => void;
    note: string;

}

const SOM_ActionsHandler: React.FC<_props> = ({ closeStartOrderModal, note }) => {
    const { showModal, fetchCartDetails } = useActions()
    const [showRequiredModal, setShowRequiredModal] = useState<'quantity' | 'logo' | null>(null)
    const { id: storeId } = useTypedSelector(state => state.store)
    const loggedIN_userId = useTypedSelector((state) => state.user.id);
    const { selected, toCheckout, som_logos } = useTypedSelector(state => state.product)

    const requiredMessage = (issue: 'quantity' | 'logo', minQty: null | number = 1, logoIndex: null | string) => {

        let message = 'Something Went Wrong!!!';
        if (issue === 'logo' && logoIndex) {
            message = `Please Upload Logo or Add Logo Later for ${som_logos.choosedLogoCompletionPending} Logo`
        }

        if (issue === 'quantity') {
            message = `The minimum order for this color is ${minQty} pieces. Please increase your quantity and try again.`
        }

        return message;
    }

    const addToCartHandler = async () => {

        if (!toCheckout.allowAddToCart) {
            setShowRequiredModal('quantity')
            return;
        }

        if (som_logos.choosedLogoCompletionPending) {
            setShowRequiredModal('logo')
            return;
        }

        if (!toCheckout.sizeQtys) return;

        let lineCartItems: [] = [];

        const logoCartItems = logoCartItems_Generator(som_logos.details, selected, toCheckout.sizeQtys)

        const cartPayload = await singleColor_addToCart_PayloadGenerator({
            storeId: storeId!,
            userId: loggedIN_userId || 0,
            cartItems: [{
                attributeOptionName: 'Color',
                attributeOptionValue: selected.color.name,
                attributeOptionId: selected.color.attributeOptionId,
            }],
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

        })

        try {
            const guestId = await AddItemsToTheCart(cartPayload);
            let guest_OR_loggedIN_userID = loggedIN_userId;

            if (!loggedIN_userId) {
                guest_OR_loggedIN_userID = guestId;
                setCookie(__Cookie.tempCustomerId, guestId, 7);
            }

            if (!guest_OR_loggedIN_userID) return;

            fetchCartDetails(guest_OR_loggedIN_userID);
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
        closeStartOrderModal();
    };

    return (
        <div className='p-6 pt-0'>
            <button
                onClick={addToCartHandler}
                type='button'
                className='btn btn-lg btn-secondary !flex items-center justify-center w-full uppercase mb-2'
            >
                Add to Cart
            </button>
            <button
                onClick={() => closeStartOrderModal()}
                type='button'
                className='block w-full text-gray-500 hover:text-gray-700'
            >
                Cancel
            </button>

            {showRequiredModal && <MsgContainer modalHandler={() => setShowRequiredModal(null)} message={requiredMessage(showRequiredModal, toCheckout.minQty, som_logos.choosedLogoCompletionPending)} title={'Required'} />}
        </div>
    )
}

export default SOM_ActionsHandler