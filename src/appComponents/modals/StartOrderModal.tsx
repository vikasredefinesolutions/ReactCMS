import React, { useEffect, useRef, useState } from 'react';
import { _ProductInventoryTransfomed } from 'definations/APIs/inventory.res';
import { _ProductDetails } from 'definations/APIs/productDetail.res';
import { _modals } from 'definations/product.type';
import { useActions, useTypedSelector } from 'hooks';
import AskToLogin from 'Components/ProductDetails/AskToLogin';
import CalculativeFigure from 'Components/ProductDetails/CalculativeFigure';
import CustomizeLogoOptions from 'Components/ProductDetails/CustomizeLogoOptions';
import DiscountPricing from 'Components/ProductDetails/DiscountPricing';
import ProductSKU from 'Components/ProductDetails/ProductSKU';
import SizePriceQtyTable from 'Components/ProductDetails/SizePriceQtyTable';
import { FetchInventoryById } from 'services/product.service';
// import { AddToCart } from 'services/user.service';
import { CartLogoPersonModel, CartReq } from 'definations/APIs/cart.req';
import { CartResponse } from 'definations/APIs/cart.res';
import getLocation from '../../helpers/getLocation';
import Image from '../reusables/Image';
import Price from '../reusables/Price';
import { addToCart } from '@services/cart.service';
interface _props {
  product: _ProductDetails;
  // eslint-disable-next-line no-unused-vars
  modalHandler: (val: null | _modals) => void;
  editDetails?: CartResponse;
}

const StartOrderModal: React.FC<_props> = ({
  product,
  modalHandler,
  editDetails,
}) => {
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const { clearToCheckout, showModal, setShowLoader } = useActions();

  // ----------------------------STATES ---------------------------------------
  const [allColors, showAllColors] = useState<boolean>(false);
  const [inventory, setInventory] =
    useState<null | _ProductInventoryTransfomed>(null);

  const { name: colorName } = useTypedSelector(
    (state) => state.product.selected.color,
  );
  const toCheckout = useTypedSelector((state) => state.product.toCheckout);
  const colors = useTypedSelector((state) => state.product.product.colors);
  const customerId = useTypedSelector((state) => state.user.customer.id);
  const selectedProduct = useTypedSelector((state) => state.product.selected);

  const showInventoryFor = (payload: {
    productId: number;
    attributeOptionId: number[];
  }) => {
    FetchInventoryById(payload)
      .then((res) => setInventory(res))
      // .catch((err) => console.log('err', err))
      .finally(() => setShowLoader(false));
  };

  const addToCartHandler = async () => {
    const location = await getLocation();
    const tempCustId = localStorage.getItem('tempCustomerId');
    const note = textRef.current?.value;

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
          itemNotes: note || '',
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
        console.log(error);
      }
    }
    // .then((res) => setReviews(res))
    // .catch((err) => console.log('err', err))
    // .finally(() => console.log('close loader'));

    modalHandler(null);
    // router.push('/cart');
  };

  useEffect(() => {
    if (colors === null) return;
    showInventoryFor({
      productId: colors[0].productId,
      attributeOptionId: [colors[0].attributeOptionId],
    });

    return () => {
      clearToCheckout();
    };
  }, []);

  return (
    <div
      id="startorderModal"
      className="overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
    >
      <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="relative px-4 w-full max-w-3xl h-full md:h-auto">
          {inventory && (
            <div className="relative bg-white shadow max-h-screen overflow-y-auto">
              <div className="flex justify-between items-start p-5 rounded-t border-b sticky top-0 left-0 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl">
                  {product.name}
                </h3>
                <button
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                  onClick={() => modalHandler(null)}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap mb-6">
                  <div className="w-full lg:w-1/2">
                    <ProductSKU skuID={product.sku} />
                    <div className="">
                      <span className="font-semibold">Color : </span>
                      <span>{colorName}</span>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 lg:text-right">
                    <div className="font-semibold">Item Total :</div>
                    <div className="font-semibold">
                      <Price value={toCheckout.totalPrice} />
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="">
                    <button
                      type="button"
                      onClick={() => showAllColors((show) => !show)}
                      className="text-indigo-500 text-sm font-semibold underline"
                    >
                      {allColors
                        ? 'Show less'
                        : `See All ${colors?.length} Colors`}
                    </button>
                  </div>

                  {/* -------------------------------------------AVAILABLE COLORS ------------------------------------------ */}
                  {allColors && (
                    <div x-show="open" x-cloak>
                      <div className="text-sm text-gray-600 bg-primary flex flex-wrap justify-between items-center p-2 md:p-0 md:pl-2 my-2">
                        <span className="text-lg font-bold text-white">
                          Available Colors:
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-5 text-sm text-center px-2">
                        {colors?.map((color) => (
                          <div
                            className="w-20"
                            key={color.productId}
                            onClick={() =>
                              showInventoryFor({
                                productId: color.productId,
                                attributeOptionId: [color.attributeOptionId],
                              })
                            }
                          >
                            <div className="border-2 border-slate-200 hover:border-secondary mb-1 last:mb-0">
                              <Image
                                src={color.imageUrl}
                                alt={color.altTag}
                                className="w-full object-center object-cover"
                              />
                            </div>
                            <div className="">{color.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* -------------------------------------------PRODUCT INFORMATION ------------------------------------------ */}
                  <div className="mt-3">
                    <h2 className="sr-only">Product information</h2>
                  </div>
                  <div>
                    <DiscountPricing
                      showPriceTable={false}
                      price={{
                        salePrice: product.salePrice,
                        imap: product.imap,
                        msrp: product.msrp,
                        ourCost: product.ourCost,
                      }}
                    />
                    <AskToLogin modalHandler={modalHandler} />
                  </div>
                </div>

                {/* -------------------------------------------INVENTORY TABLE ------------------------------------------ */}
                <SizePriceQtyTable
                  inventory={inventory}
                  editDetailsQuantity={
                    editDetails?.shoppingCartItemDetailsViewModels
                  }
                />
                <CustomizeLogoOptions />
                <CalculativeFigure />

                <div className="">
                  <label htmlFor="" className="block mb-2">
                    Notes :
                  </label>
                  <textarea
                    name=""
                    id=""
                    ref={textRef}
                    className="block w-full border border-gray-600 shadow-sm text-base py-2 px-4"
                    rows={10}
                  ></textarea>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={addToCartHandler}
                  type="button"
                  className="btn btn-lg btn-secondary !flex items-center justify-center w-full uppercase mb-2"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => modalHandler(null)}
                  type="button"
                  className="block w-full text-gray-500 hover:text-gray-700"
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
