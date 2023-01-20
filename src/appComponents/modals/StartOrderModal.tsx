import AskToLogin from 'Components/ProductDetails/AskToLogin';
import CalculativeFigure from 'Components/ProductDetails/CalculativeFigure';
import CustomizeLogoOptions from 'Components/ProductDetails/CustomizeLogoOptions';
import DiscountPricing from 'Components/ProductDetails/DiscountPricing';
import ProductSKU from 'Components/ProductDetails/ProductSKU';
import SizePriceQtyTable from 'Components/ProductDetails/SizePriceQtyTable';
import { _ProductDetails } from 'definations/APIs/productDetail.res';
import { _modals } from 'definations/product.type';
import { useActions, useTypedSelector } from 'hooks';
import React, { useEffect, useRef, useState } from 'react';
// import { AddToCart } from 'services/user.service';
import { __Cookie } from '@constants/global.constant';
import { addToCart } from '@services/cart.service';
import { FetchInventoryById } from '@services/product.service';
import Price from 'appComponents/reUsable/Price';
import StartOrderAvailableColors from 'Components/ProductDetails/StartOrderAvailableColors';
import { _CartItem } from 'definations/APIs/cart.res';
import { getAddToCartObject, setCookie } from 'helpers/common.helper';
import { highLightError } from 'helpers/global.console';

interface _props {
  product: _ProductDetails;
  // eslint-disable-next-line no-unused-vars
  modalHandler: (val: null | _modals) => void;
  editDetails?: _CartItem;
}

const StartOrderModal: React.FC<_props> = (props) => {
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const { product, modalHandler } = props;

  // ----------------------------STATES ---------------------------------------
  const [allColors, showAllColors] = useState<boolean>(false);
  const {
    clearToCheckout,
    showModal,
    setShowLoader,
    product_storeData,
    fetchCartDetails,
  } = useActions();
  const { layout: storeLayout } = useTypedSelector((state) => state.store);

  const { name: colorName } = useTypedSelector(
    (state) => state.product.selected.color,
  );
  const toCheckout = useTypedSelector((state) => state.product.toCheckout);
  const { colors, inventory: allColorsInventory } = useTypedSelector(
    (state) => state.product.product,
  );
  const customerId = useTypedSelector((state) => state.user.id);
  const selectedProduct = useTypedSelector((state) => state.product.selected);
  const customizationEnable = useTypedSelector((state) => state.product.product.customization)

  const addToCartHandler = async () => {
    const note = textRef.current?.value;

    const { sizeQtys, totalPrice, totalQty } = toCheckout;
    const cartObject = await getAddToCartObject({
      userId: customerId || 0,
      note: note || '',
      sizeQtys: sizeQtys,
      productDetails: selectedProduct,
      total: {
        totalPrice,
        totalQty,
      },
    });
    if (toCheckout.minQtyCheck ? totalQty < selectedProduct.color.minQuantity : totalQty < 1) {
      modalHandler(null)
      showModal({
        message: `The minimum order for this color is ${toCheckout.minQtyCheck ? selectedProduct.color.minQuantity : 1} pieces. Please increase your quantity and try again.`,
        title: 'Success',
      });
      return;
    }

    if (cartObject) {
      try {
        let c_id = customerId;
        const res = await addToCart(cartObject);

        if (!customerId) {
          c_id = res;
          setCookie(__Cookie.tempCustomerId, res, 7);
        }
        fetchCartDetails(c_id || 0);
        showModal({
          message: 'Added to cart Successfully',
          title: 'Success',
        });
      } catch (error) {
        highLightError({ error, component: 'StartOrderModal' });
      }
    }

    modalHandler(null);
    // router.push('/cart');
  };

  useEffect(() => {
    setShowLoader(false);
    if (!allColorsInventory && colors) {
      const allColorAttributes = colors?.map(
        (color) => color.attributeOptionId,
      );

      FetchInventoryById({
        productId: selectedProduct.productId,
        attributeOptionId: allColorAttributes,
      }).then((res) =>
        product_storeData({
          type: 'INVENTORY_LIST',
          data: res,
        }),
      );
    }

    return () => {
      clearToCheckout();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id='startorderModal'
      className='overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0'
    >
      <div className='w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
        <div className='relative px-4 w-full max-w-3xl h-full md:h-auto'>
          {allColorsInventory && (
            <div className='relative bg-white shadow max-h-screen overflow-y-auto'>
              <div className='flex justify-between items-start p-5 rounded-t border-b sticky top-0 left-0 bg-white'>
                <h3 className='text-xl font-semibold text-gray-900 lg:text-2xl'>
                  {product.name}
                </h3>
                <button
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
                  onClick={() => modalHandler(null)}
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </button>
              </div>
              <div className='p-6'>
                <div className='flex flex-wrap mb-6'>
                  <div className='w-full lg:w-1/2'>
                    <ProductSKU skuID={product.sku} storeCode={storeLayout!} />
                    <div className=''>
                      <span className='font-semibold'>Color : </span>
                      <span>{colorName}</span>
                    </div>
                  </div>
                  <div className='w-full lg:w-1/2 lg:text-right'>
                    <div className='font-semibold'>Item Total :</div>
                    <div className='font-semibold'>
                      <Price value={toCheckout.totalPrice} />
                    </div>
                  </div>
                </div>
                <div className='mb-6'>
                  <div className=''>
                    <button
                      type='button'
                      onClick={() => showAllColors((show) => !show)}
                      className='text-indigo-500 text-sm font-semibold underline'
                    >
                      {allColors
                        ? 'Show less'
                        : `See All ${colors?.length} Colors`}
                    </button>
                  </div>

                  {/* -------------------------------------------AVAILABLE COLORS ------------------------------------------ */}
                  {allColors && <StartOrderAvailableColors />}
                  {/* -------------------------------------------PRODUCT INFORMATION ------------------------------------------ */}
                  <div className='mt-3'>
                    <h2 className='sr-only'>Product information</h2>
                  </div>
                  <div>
                    <DiscountPricing
                      storeCode={storeLayout!}
                      showMsrpLine={false}
                    />
                    <AskToLogin modalHandler={modalHandler} />
                  </div>
                </div>

                {/* -------------------------------------------INVENTORY TABLE ------------------------------------------ */}
                <SizePriceQtyTable />
                {customizationEnable && <CustomizeLogoOptions />}
                <CalculativeFigure />

                <div className=''>
                  <label htmlFor='' className='block mb-2'>
                    Notes :
                  </label>
                  <textarea
                    name=''
                    id=''
                    ref={textRef}
                    className='block w-full border border-gray-600 shadow-sm text-base py-2 px-4'
                    rows={10}
                  ></textarea>
                </div>
              </div>
              <div className='p-6 pt-0'>
                <button
                  onClick={addToCartHandler}
                  type='button'
                  className='btn btn-lg btn-secondary !flex items-center justify-center w-full uppercase mb-2'
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => modalHandler(null)}
                  type='button'
                  className='block w-full text-gray-500 hover:text-gray-700'
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartOrderModal;
