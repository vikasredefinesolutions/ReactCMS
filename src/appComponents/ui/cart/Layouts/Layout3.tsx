import { font as fonts } from '@constants/fonts.constant';
import {
  CartProducts,
  _CI_ShoppingCartItemDetailsViewModel
} from '@type/APIs/cart.res';
import ImageComponent from 'appComponents/reUsable/Image';
import Price from 'appComponents/reUsable/Price';
import CartSummaryController from 'Controllers/cartSummarryController';
import { useTypedSelector } from 'hooks';
import Link from 'next/link';
import { ChangeEvent, useEffect, useState } from 'react';


const CartLayout3 = ({
  cartProducts,
  deleteCartItem,
}: {
  cartProducts: CartProducts;
  deleteCartItem: (id: number) => void;
}) => {
  const { getTotalPrice } = CartSummaryController();
  const cartProductsInfo = useTypedSelector((state) => state.cart.cart);

  const [currentEditor, setCurrentEditor] = useState<number | null>(null);
  // const [threadColor, setThreadColor] = useState('');
  const [inputIds, setInputId] = useState<string[]>([]);
  const [personliseLineArray, setPersonliseLineArray] = useState<
    | {
      line1: string;
      line2: string;
      size: string;
    }[]
    | null
  >(null);
  // const [font, setFont] = useState<string>(fonts[0].name);
  const [products, setProducts] = useState<CartProducts | null>(null);

  const [personalizeDetails, setPersonalizeDetails] = useState<
    | {
      font: string;
      threadColor: string;
      personlaizeLogo: string;
    }[]
    | null
  >(null);

  const updatePersonlizeData = (name: string, value: string, index: number) => {
    if (personalizeDetails) {
      const pers = [...personalizeDetails];
      const persOject = pers[index];
      pers[index] = { ...persOject, [name]: value };
      setPersonalizeDetails(pers);
    }

  };

  useEffect(() => {
    const personalizeDetails = cartProducts.map((product) => {
      return {
        font:
          product.shoppingcartLinePersonModels?.[0].lineFont || fonts[0].name,
        threadColor:
          product.shoppingcartLinePersonModels?.[0].lineColor || 'white',
        personlaizeLogo:
          product.shoppingcartLinePersonModels?.[0].personalizeLocation ||
          'chest',
      };
    });
    setPersonalizeDetails(personalizeDetails);
    setProducts(cartProducts);
  }, [cartProducts]);
  const createPersonalizeArray = (
    index: number,
    cartModel: _CI_ShoppingCartItemDetailsViewModel[],
  ) => {
    let array: {
      line1: string;
      line2: string;
      size: string;
    }[] = [];
    cartModel.forEach((model) =>
      array.push(
        ...Array(model.qty).fill({
          line1: '',
          line2: '',
          size: model.attributeOptionValue,
        }),
      ),
    );
    setPersonliseLineArray(array);
    setCurrentEditor(index);
  };

  const lineChangeHandler = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { name, value } = e.target;
    if (personalizeDetails !== null) {
      let newArr = [...personalizeDetails];
      const oldObject = { ...newArr[~~index] };
      newArr[~~index] = { ...oldObject, [name]: value };
      setPersonalizeDetails(newArr);
    }
  };

  const cartQtyUpdateHandler = (
    size: string,
    index: number,
    value: string,
    inputId: string,
  ) => {
    const qty = ~~value;
    if (products) {
      let pro = JSON.parse(JSON.stringify(products));
      let product = [...pro[index].shoppingCartItemDetailsViewModels];
      let productAttrIndex = product.findIndex(
        (pro) => pro.attributeOptionValue === size,
      );
      let productAttr = product[productAttrIndex];
      product[~~productAttrIndex] = { ...productAttr, qty };
      pro[index].shoppingCartItemDetailsViewModels = product;
      setProducts(pro);
    }

    const oldQty =
      cartProducts[index].shoppingCartItemDetailsViewModels[
        ~~inputId.split('~')[1]
      ].qty;

    const inputIdIndex = inputIds.indexOf(inputId);
    if (oldQty === qty && inputIdIndex > -1) {
      const _inputIds = [...inputIds];
      _inputIds.splice(inputIdIndex, 1);
      setInputId(_inputIds);
    } else {
      if (inputIdIndex < 0) {
        setInputId((prev) => [...prev, inputId]);
      }
    }
  };

  const savePersonlisation = async (index: number) => {
    const cartLinePersonModels: any[] = [];
    personliseLineArray?.forEach((lineArray) => {
      const cartLinePersonDetailModel = [];
      if (lineArray.line1.length > 0) {
        cartLinePersonDetailModel.push({
          linePrice: 0,
          lineQty: 1,
          lineAboveLogo: 0,
          lineIndividually: 0,
          lineNumber: 1,
          lineText: lineArray.line1,
          lineTotal: 1,
          lineFont: 'Bookman',
          lineColor: 'Red',
          linePriceDouble: 0,
          logoCartId: 0,
          personalizeLocation: 'Chest - Under Logo',
        });
      }

      if (lineArray.line2.length > 0) {
        cartLinePersonDetailModel.push({
          linePrice: 0,
          lineQty: 1,
          lineAboveLogo: 0,
          lineIndividually: 0,
          lineNumber: 2,
          lineText: lineArray.line2,
          lineTotal: 1,
          lineFont: 'Bookman',
          lineColor: 'Red',
          linePriceDouble: 0,
          logoCartId: 0,
          personalizeLocation: 'Chest - Under Logo',
        });
      }

      if (cartLinePersonDetailModel.length > 0) {
        cartLinePersonModels.push({
          attributeOptionId: 0,
          attributeOptionValue: 'string',
          code: 'string',
          cartLinePersonDetailModel: cartLinePersonDetailModel,
        });
      }
    });
    let product = { ...cartProducts[index] };
    product['cartLinePersonModels'] = cartLinePersonModels;
    // await UpdateCart(product);
  };

  const { totalPrice, subTotal, smallRunFee, logoSetupCharges, salesTax } =
    getTotalPrice();

  const updateCart = (index: number, size: string) => {
    let pro = JSON.parse(JSON.stringify(products));
    let productCartItem = [...pro[index].shoppingCartItemDetailsViewModels];
    let productAttrIndex = productCartItem.findIndex(
      (pro) => pro.attributeOptionValue == size,
    );
    let productAttr = productCartItem[productAttrIndex];
    // console.log(cartProductsInfo);
    // console.log('cartproducts ' , {...cartProductsInfo[index], shoppingCartItemDetailsViewModels: {...productAttr}});
  }


  return (
    <section id="" className="mt-5">
      <div className="bg-white">
        <div className="container mx-auto">
          <form className="flex flex-wrap -mx-3 -mt-3 cart-box">
            <section
              aria-labelledby="cart-heading"
              className="w-full lg:w-9/12 px-3 mt-3"
            >
              <div className="flex justify-between items-center bg-gray-200 w-full px-4 py-2">
                <div className="text-2xl mr-3">Shopping Cart</div>
                <div className="text-base">
                  {products && products.length} Item(s)
                  <span className="hidden-xs"> in cart</span>
                </div>
              </div>
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>
              <ul
                role="list"
                className="overflow-hidden border border-gray-300 p-2 md:p-5"
              >
                {products &&
                  personalizeDetails &&
                  products.map((product, index) => {
                    const { font, threadColor, personlaizeLogo } =
                      personalizeDetails[index];

                    return (
                      <li key={index} className="border-b border-b-gray-300">
                        <div
                          className="flex flex-wrap py-5 -mx-3"
                          x-data="{ open : false }"
                        >
                          <div className="w-full lg:w-1/3 px-3">
                            <ImageComponent
                              height={400}
                              width={400}
                              src={product.colorImage}
                              alt={product.productName}
                              className={''}
                            />
                          </div>

                          <div className="w-full lg:w-2/3 px-3 flex flex-wrap lg:justify-between">
                            <div className="text-lg font-semibold">
                              <Link href={`${product.seName}.html`}>
                                <a className="text-black hover:text-anchor-hover">
                                  {product.productName}
                                </a>
                              </Link>
                            </div>
                            <div className="w-full flex flex-wrap">
                              <div className="w-full mt-4">
                                <div className="flex justify-between">
                                  <div className="text-base">
                                    <span className="font-semibold">SKU :</span>{' '}
                                    {product.sku}
                                  </div>
                                  <div className="text-base">
                                    <span className="font-semibold">
                                      Color :
                                    </span>
                                    {product.attributeOptionValue}
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      deleteCartItem(
                                        product.shoppingCartItemsId,
                                      )
                                    }
                                  >
                                    Remove Item
                                  </button>
                                </div>
                                <div className="mt-4 border-t border-t-gray-500">
                                  {product.shoppingCartItemDetailsViewModels.map(
                                    (qty, indx) => {
                                      const inputId = `${index}~${indx}`;
                                      return (
                                        <div
                                          className="flex justify-between items-center py-3"
                                          key={indx}
                                        >
                                          <div className="w-full md:w-1/3 flex flex-wrap items-center gap-2">
                                            <div className="">Size</div>
                                            <div className="font-semibold">
                                              {qty.attributeOptionValue}
                                            </div>
                                          </div>
                                          <div className="w-full md:w-1/3 flex flex-wrap items-center gap-2">
                                            <div className="">Qty</div>
                                            <div className="font-semibold w-20">
                                              <input
                                                type="number"
                                                className="w-20 p-2 "
                                                value={qty.qty}
                                                onChange={(e) =>
                                                  cartQtyUpdateHandler(
                                                    qty.attributeOptionValue,
                                                    index,
                                                    e.target.value,
                                                    inputId,
                                                  )
                                                }
                                              />
                                            </div>
                                            <div>
                                              {inputIds.includes(inputId) && (
                                                <button className="btn btn-primary" onClick={(e) => { e.preventDefault(); updateCart(index, qty.attributeOptionValue) }}>
                                                  Update
                                                </button>
                                              )}
                                            </div>
                                          </div>
                                          <div className="w-full md:w-1/3 flex flex-wrap items-center justify-between gap-2">
                                            <div className="font-semibold">
                                              <Price value={qty.price} />
                                            </div>
                                            <div className="">
                                              <a href="javascript:void(0);">
                                                Remove
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    },
                                  )}
                                  <div className="p-3 border border-gray-300">
                                    <div className="flex flex-wrap items-center gap-2">
                                      <div className="">Location</div>
                                      <div className="font-semibold">
                                        Left Chest
                                      </div>
                                    </div>
                                    <div className="w-24 h-24">
                                      <img
                                        src="images/Right-Chest-70-191.jpg"
                                        alt=""
                                        className="max-h-full"
                                      />
                                    </div>
                                    <div className="flex flex-wrap justify-between gap-y-2 mt-4">
                                      <div className="w-full lg:w-1/2">
                                        <div className="mb-1">
                                          Logo #PGLOGOLATER
                                        </div>
                                        <div className="flex flex-wrap items-center gap-2">
                                          <div className="">LOGO 1 :</div>
                                          <div className="w-20 h-20">
                                            <img
                                              src="images/logolater.png"
                                              alt=""
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="w-full lg:w-1/2">
                                        <div className="mb-1">Price</div>
                                        <div className="font-semibold">
                                          <div className="">$0.00</div>
                                          <div className="">
                                            First Logo Free
                                          </div>
                                        </div>
                                        +
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="my-5 text-center w-full px-3">
                            <button
                              type="button"
                              onClick={() =>
                                createPersonalizeArray(
                                  index,
                                  product.shoppingCartItemDetailsViewModels,
                                )
                              }
                              className="btn btn-outline-secondary hover:bg-secondary-hover hover:text-secondarytext-hover"
                            >
                              Personalize Your Item
                            </button>
                          </div>
                          <div
                            className="w-full px-3"
                            x-show="open"
                            style={{
                              display: currentEditor === index ? '' : 'none',
                            }}
                          >
                            <div
                              className="pt-5"
                              x-data="{ fontname : 'Easy Script' }"
                            >
                              <div className="mb-1 flex items-center gap-2">
                                <div className="">
                                  Name Personalization Font Examples :
                                </div>
                                <div className="" x-text="fontname">
                                  {font || ''}
                                </div>
                                <span
                                  data-modal-toggle="NamePersonalizeModal"
                                  className="material-icons-outlined text-xl leading-none cursor-pointer"
                                >
                                  search
                                </span>
                              </div>
                              <div className="flex flex-wrap -mx-3 gap-y-6 max-w-xl">
                                {fonts.map((fnt, _indx) => (
                                  <div
                                    key={`f-${_indx}`}
                                    className="w-full lg:w-1/3 px-3"
                                  >
                                    <div
                                      className={`border-2${fnt.name === font
                                        ? ' border-primary'
                                        : ''
                                        }`}
                                    >
                                      <img
                                        src={fnt.image}
                                        alt=""
                                        onClick={() =>
                                          updatePersonlizeData(
                                            'font',
                                            fnt.name,
                                            index,
                                          )
                                        }
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="pt-5 flex flex-wrap gap-2 gap-x-8">
                              <div className="w-20 h-20">
                                <img src="images/logolater.png" alt="" />
                              </div>
                              <div className="">
                                <div className="mb-1">PMS thread colors :</div>
                                <div className="flex flex-wrap gap-2">
                                  <div
                                    onClick={() =>
                                      updatePersonlizeData(
                                        'threadColor',
                                        'white',
                                        index,
                                      )
                                    }
                                    className={`w-8 h-8 border-2 p-1${threadColor === 'white'
                                      ? ' border-secondary'
                                      : ''
                                      }`}
                                  >
                                    <div className="bg-white w-full h-full"></div>
                                  </div>
                                  <div
                                    onClick={() =>
                                      updatePersonlizeData(
                                        'threadColor',
                                        'black',
                                        index,
                                      )
                                    }
                                    className={`w-8 h-8 border-2 p-1${threadColor === 'black'
                                      ? ' border-secondary'
                                      : ''
                                      }`}
                                  >
                                    <div className="bg-black w-full h-full"></div>
                                  </div>
                                  <div
                                    onClick={() =>
                                      updatePersonlizeData(
                                        'threadColor',
                                        'custom',
                                        index,
                                      )
                                    }
                                    className={`h-8 border-2 p-1${!'white,black'.includes(threadColor)
                                      ? ' border-secondary'
                                      : ''
                                      }`}
                                  >
                                    Custom
                                  </div>
                                  {!'white,black'.includes(threadColor) && (
                                    <input className="w-20" type="text" />
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="pt-5">
                              <div className="font-semibold mb-1">
                                Personalization Location
                              </div>
                              <div className="flex flex-wrap gap-4">
                                <label>
                                  <input
                                    type="radio"
                                    name="personalize_location"
                                    checked
                                  />
                                  Chest - Under Logo
                                </label>

                                <label>
                                  <input
                                    type="radio"
                                    name="personalize_location"
                                  />
                                  Right Sleeve
                                </label>
                              </div>
                              <div className="">
                                Limit 26 characters (including spaces) for Chest
                                personalization.
                              </div>
                              <div className="">
                                Limit 20 characters (including spaces) for
                                Sleeve personalization.
                              </div>
                            </div>
                            <div className="pt-5">
                              <div className="font-semibold mb-1">
                                Personalization Text
                              </div>
                              <div className="overflow-auto">
                                <table className="w-full border border-gray-300">
                                  <tbody className="divide-x divide-y divide-gray-300">
                                    <tr className="divide-x divide-gray-300">
                                      <th className="p-2">Item #</th>
                                      <th className="p-2">Description</th>
                                      <th className="p-2">Color</th>
                                      <th className="p-2">Size</th>
                                      <th className="p-2">Line 1</th>
                                      <th className="p-2">Line 2</th>
                                    </tr>
                                    {personliseLineArray &&
                                      personliseLineArray.map(
                                        (option, indx) => (
                                          <tr
                                            key={indx}
                                            className="divide-x divide-gray-300"
                                          >
                                            <td className="p-2">
                                              {product.sku}
                                            </td>
                                            <td className="p-2">
                                              {product.seName}
                                            </td>
                                            <td className="p-2">
                                              {product.attributeOptionValue}
                                            </td>
                                            <td className="p-2">
                                              {option.size}
                                            </td>
                                            <td className="p-2">
                                              <input
                                                className="form-input inline-block w-40"
                                                placeholder="Line one text"
                                                type="text"
                                                value={option.line1}
                                                name={'line1'}
                                                key={indx}
                                                onChange={(e) =>
                                                  lineChangeHandler(e, indx)
                                                }
                                              />
                                            </td>
                                            <td className="p-2">
                                              <input
                                                className="form-input inline-block w-40"
                                                placeholder="Line Two text"
                                                type="text"
                                                value={option.line2}
                                                name={'line2'}
                                                key={indx}
                                                onChange={(e) =>
                                                  lineChangeHandler(e, indx)
                                                }
                                              />
                                            </td>
                                          </tr>
                                        ),
                                      )}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div className="mt-4">
                              <button
                                type={'button'}
                                className="btn btn-secondary"
                                onClick={() => { setCurrentEditor(null); savePersonlisation(index) }}
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
              <div className="mt-4 mb-4">
                <Link href="/" className="btn btn-lg btn-secondary">
                  KEEP SHOPPING
                </Link>
              </div>
            </section>

            <section
              aria-labelledby="summary-heading"
              className="w-full lg:w-3/12 px-3 mt-3"
            >
              <div className="bg-gray-100">
                <div className="bg-gray-200 w-full text-2xl px-4 py-2">
                  {' '}
                  Cart Summary
                </div>
                <div className="px-4 py-2">
                  <dl className="space-y-2">
                    <div className="text-lg">Products Price</div>
                    <div className="flex items-center justify-between pt-2">
                      <dt className="text-base">Merchandise</dt>
                      <dd className="text-base font-medium text-gray-900">
                        <Price value={subTotal} />
                      </dd>
                    </div>
                    <div className="border-t border-gray-300 flex items-center relative pt-2">
                      <dt className="text-base z-0 w-full promocode">
                        <input
                          type="text"
                          name="Promo_code"
                          id="Promo_code"
                          placeholder="Promo code"
                          className="peer placeholder:opacity-0 block w-full bg-transparent pt-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 pr-10 relative z-10"
                        />
                        <label
                          htmlFor="Promo_code"
                          className="absolute duration-300 -top-3 -z-1 origin-0 text-base bg-gray-100 peer-focus:-top-3 peer-placeholder-shown:top-3"
                        >
                          Promo code
                        </label>
                        <a className="coupon-code-Apply text-sm absolute right-0 top-2 hidden">
                          Apply
                        </a>
                      </dt>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-300 pt-2">
                      <dt className="text-base">Subtotal</dt>
                      <dd className="text-base font-medium text-gray-900">
                        <Price value={subTotal} />
                      </dd>
                    </div>
                    <div className="border-t border-gray-300 pt-2 flex items-center justify-between">
                      <dt className="flex items-center text-base">
                        <span>First Logo</span>
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        FREE
                      </dd>
                    </div>
                    {/* <div className="flex items-center justify-between">
                                            <dt className="flex items-center text-base">
                                                <span>Second Logo</span>
                                            </dt>
                                            <dd className="text-base font-medium text-gray-900">
                                                $55.00
                                            </dd>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <dt className="flex items-center text-base">
                                                <span>Logo Setup Fee</span>
                                            </dt>
                                            <dd className="text-base font-medium text-gray-900">
                                                $110.00
                                            </dd>
                                        </div> */}
                    <div className="flex items-center justify-between">
                      <dt className="flex items-center text-base">
                        <span>Logo Setup Fee</span>
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        <Price value={logoSetupCharges} />
                      </dd>
                    </div>

                    <div className="flex items-center justify-between">
                      <dt className="flex items-center text-base">
                        <span>Small Run Fee</span>
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        <Price value={smallRunFee} />
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="flex justify-between items-center bg-gray-200 w-full text-lg font-medium px-4 py-2">
                  <div>Cart Total:</div>
                  <div>
                    <Price value={totalPrice} />{' '}
                  </div>
                </div>
              </div>
              <div className="mt-4 ">
                <Link href={'/checkout.html'}>
                  <a className="btn btn-lg btn-primary !flex items-center justify-center w-full">
                    {' '}
                    <i
                      className="fa fa-shopping-cart mr-2"
                      aria-hidden="true"
                    ></i>{' '}
                    CHECKOUT NOW{''}
                  </a>
                </Link>
              </div>
            </section>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CartLayout3;
