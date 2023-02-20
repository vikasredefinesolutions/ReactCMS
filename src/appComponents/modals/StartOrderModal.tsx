import { FetchInventoryById } from '@services/product.service';
import Price from 'appComponents/reUsable/Price';
import AskToLogin from 'Components/ProductDetails/AskToLogin';
import CalculativeFigure from 'Components/ProductDetails/CalculativeFigure';
import DiscountPricing from 'Components/ProductDetails/DiscountPricing';
import ProductSKU from 'Components/ProductDetails/ProductSKU';
import SizePriceQtyTable from 'Components/ProductDetails/SizePriceQtyTable';
import SOM_ActionsHandler from 'Components/ProductDetails/SOM_ActionsHandler';
import SOM_CustomizeLogoOptions from 'Components/ProductDetails/SOM_CustomizeLogoOptions';
import StartOrderAvailableColors from 'Components/ProductDetails/StartOrderAvailableColors';
import { _CartItem } from 'definations/APIs/cart.res';
import { _ProductDetails } from 'definations/APIs/productDetail.res';
import { _modals } from 'definations/product.type';
import { useActions, useTypedSelector } from 'hooks';
import React, { useEffect, useRef, useState } from 'react';

interface _props {
  product: _ProductDetails;
  // eslint-disable-next-line no-unused-vars
  modalHandler: (val: null | _modals) => void;
  editDetails?: _CartItem;
}

const Ecommerce_StartOrderModal: React.FC<_props> = (props) => {
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const { product, modalHandler, editDetails } = props;
  const { clearToCheckout, setShowLoader, product_storeData, setColor } =
    useActions();

  // ----------------------------STATES ---------------------------------------
  const [allColors, showAllColors] = useState<boolean>(false);
  const { layout: storeLayout } = useTypedSelector((state) => state.store);

  const { name: colorName } = useTypedSelector(
    (state) => state.product.selected.color,
  );
  const { toCheckout } = useTypedSelector((state) => state.product);
  const { colors, inventory: allColorsInventory } = useTypedSelector(
    (state) => state.product.product,
  );
  const selectedProduct = useTypedSelector((state) => state.product.selected);
  const customizationEnable = useTypedSelector(
    (state) => state.product.product.customization,
  );
  useEffect(() => {
    setShowLoader(false);
    if (!allColorsInventory && colors) {
      const allColorAttributes = colors?.map(
        (color) => color.attributeOptionId,
      );

      FetchInventoryById({
        productId: selectedProduct.productId,
        attributeOptionId: allColorAttributes,
      }).then((res) => {
        product_storeData({
          type: 'INVENTORY_LIST',
          data: res,
        });
      });
    }

    return () => {
      clearToCheckout();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProduct.productId]);

  useEffect(() => {
    if (editDetails && colors) {
      const selectedColor = editDetails
        ? colors.find(
            (color) => color.name === editDetails?.attributeOptionValue,
          )
        : null;
      if (selectedColor) {
        setColor(selectedColor);
      }
    }
  }, [editDetails]);

  const getEditDetails = () => {
    if (editDetails) {
      return editDetails.shoppingCartItemDetailsViewModels.map((res) => ({
        qty: res.qty,
        price: res.price,
        optionValue: res.attributeOptionValue,
      }));
    }
    return [];
  };

  return (
    <div
      id='startorderModal'
      className='overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0'
    >
      <div className='w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
        <div className='relative px-4 w-full max-w-3xl h-full md:h-auto'>
          {allColorsInventory && (
            <div className='relative bg-white shadow max-h-screen overflow-y-auto'>
              <div className='flex justify-between items-start p-5 rounded-t border-b sticky top-0 left-0 bg-white z-50'>
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
                    <ProductSKU
                      skuID={product?.sku ? product.sku : ''}
                      storeCode={storeLayout!}
                    />
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
                      price={{
                        msrp: product.msrp,
                        salePrice: product.salePrice,
                      }}
                    />
                    <AskToLogin modalHandler={modalHandler} />
                  </div>
                </div>

                {/* -------------------------------------------INVENTORY TABLE ------------------------------------------ */}
                <SizePriceQtyTable editDetails={getEditDetails()} />
                {customizationEnable && <SOM_CustomizeLogoOptions />}
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
              <SOM_ActionsHandler
                closeStartOrderModal={() => modalHandler(null)}
                note={textRef.current?.value || ''}
                cartItemId={editDetails?.shoppingCartItemsId || 0}
                isUpdate={Boolean(editDetails?.shoppingCartItemsId)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ecommerce_StartOrderModal;
