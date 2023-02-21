import { __Cookie } from '@constants/global.constant';
import { addToCart } from '@services/cart.service';
import { getAddToCartObject, setCookie } from 'helpers/common.helper';
import { highLightError } from 'helpers/global.console';
import { useActions, useTypedSelector } from 'hooks';
import { useRouter } from 'next/router';
import React from 'react';
interface _props {
  setShowOrSelect: React.Dispatch<React.SetStateAction<'SHOW' | 'SELECT'>>;
}
const LogosToPrint: React.FC<_props> = ({ setShowOrSelect }) => {
  const router = useRouter();
  const selectedLogos = useTypedSelector(
    (state) => state.product.toCheckout.logos,
  );
  const { toCheckout } = useTypedSelector((state) => state.product);
  const selectedProduct = useTypedSelector((state) => state.product.selected);
  const storeId = useTypedSelector((state) => state.store.id);
  const customerId = useTypedSelector((state) => state.user.id);
  const isEmployeeLoggedIn = useTypedSelector(
    (state) => state.employee.loggedIn,
  );

  const {
    clearToCheckout,
    showModal,
    setShowLoader,
    product_storeData,
    fetchCartDetails,
  } = useActions();

  const addToCartHandler = async () => {
    const { sizeQtys, totalPrice, totalQty } = toCheckout;
    const cartObject = await getAddToCartObject({
      userId: customerId || 0,
      storeId: storeId || 0,
      isEmployeeLoggedIn,
      note: '',
      sizeQtys: sizeQtys,
      productDetails: selectedProduct,
      total: {
        totalPrice,
        totalQty,
      },
    });

    if (totalQty < toCheckout.minQty) {
      showModal({
        message: `The minimum order for this color is ${toCheckout.minQty} pieces. Please increase your quantity and try again.`,
        title: 'Required',
      });
      return;
    }

    if (cartObject) {
      try {
        let c_id = customerId;
        const res = await addToCart(cartObject);

        if (!customerId) {
          c_id = res;
          setCookie(__Cookie.tempCustomerId, res, 'Session');
        }
        if (c_id)
          fetchCartDetails({
            customerId: c_id,
            isEmployeeLoggedIn,
          });
        // showModal({
        //   message: 'Added to cart Successfully',
        //   title: 'Success',
        // });
      } catch (error) {
        highLightError({ error, component: 'StartOrderModal' });
      }
    }

    // modalHandler(null);
    router.push('/cart.html');
  };

  const actionHandler = (action: 'CONTINUE' | 'CANCEL') => {
    if (action === 'CANCEL') {
      router.back();
      return;
    }
  };

  return (
    <div className='step-2'>
      {selectedLogos?.map((logo, index) => {
        return (
          <div key={logo.no} className='border border-gray-200 p-4 mt-4'>
            <div className=''>Location: {logo.location.label}</div>
            <div className='mt-2 w-32'>
              <img
                className='inline-block'
                src={`${logo.location.imageUrl}`}
                alt='No Image'
              />
            </div>
            <div className='mt-2'>Logo {logo.logo.name}</div>
            <div className='mt-2 flex gap-2 items-center'>
              <div className='font-semibold'>Logo {index + 1}:</div>
              <div className='w-20 h-20 p-1 inline-flex items-center justify-center border border-gray-200'>
                <img
                  className='inline-block'
                  src={`${
                    logo?.logo?.url
                      ? logo.logo.url
                      : 'https://betasphg.parsonskellogg.com/Resources/patagonia/ApplicationFormLogo/logolater.png'
                  }`}
                  alt='No Image'
                />
              </div>
            </div>
            <div className='mt-2'>
              *Please Note: The above logo may not reflect the actual selected
              colors.
            </div>
          </div>
        );
      })}

      <div className='mt-4'>
        <button
          onClick={() => setShowOrSelect('SELECT')}
          className='btn btn-primary w-full text-center '
        >
          ADD ANOTHER LOGO
        </button>
      </div>
      <div className='mt-3'>
        <button
          onClick={addToCartHandler}
          className='btn btn-primary mr-2 w-64'
        >
          ADD TO CART
        </button>
        <button
          onClick={() => actionHandler('CANCEL')}
          className='btn btn-primary w-64'
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default LogosToPrint;
