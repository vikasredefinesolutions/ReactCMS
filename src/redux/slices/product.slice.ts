/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { _ProductInventoryTransfomed } from '@type/APIs/inventory.res';
import config from 'api.config';
import { _ProductColor } from 'definations/APIs/colors.res';
import { _ProductDiscountTable } from 'definations/APIs/discountTable.res';
import { _SizeChartTransformed } from 'definations/APIs/sizeChart.res';

// Define a type for the slice state
interface toCheckout {
  minQtyCheck: boolean;
  minQty: number;
  totalQty: number;
  price: number;
  totalPrice: number;
  currency: string;
  additionalLogoCharge: number;
  availableOptions:
    | { value: string; label: string; logo: { url: string } }[]
    | null;
  allowNextLogo: boolean;
  logo: {
    price: Array<number | 'FREE'> | null;
  };
  sizeQtys:
    | {
        size: string;
        qty: number;
        price: number;
        color?: string | undefined;
      }[]
    | null;
  logos:
    | {
        no: number;
        logo: {
          url: string;
          name: string;
        };
        location: {
          label: string;
          value: string;
          imageUrl: string;
        };
      }[]
    | null;
  lines:
    | {
        line1: string;
        line2: string;
        color: string;
        font: string;
        price: number;
      }[]
    | null;
  chosenLogo: null | any[];
}

interface _ProductStore {
  selected: {
    productId: number;
    image: {
      id: number;
      imageUrl: string;
      altTag: string;
    };
    color: _ProductColor;
    inventory: null | _ProductInventoryTransfomed;
  };
  product: {
    id: number | null;
    sizes: string;
    discounts: _ProductDiscountTable | null;
    sizeChart: _SizeChartTransformed | null;
    inventory: null | _ProductInventoryTransfomed;
    price: {
      msrp: number;
      ourCost: number;
      salePrice: number;
    } | null;
    customization: boolean;
    name: string | null;
    colors: _ProductColor[] | null;
    brand: {
      id: number | null;
      name: string | null;
      url: string | null;
    } | null;
  };
  toCheckout: toCheckout;
}

// Define the initial state using that type
const initialState: _ProductStore = {
  selected: {
    productId: 297,
    inventory: null,
    image: {
      id: 0,
      imageUrl: '',
      altTag: '',
    },
    color: {
      productId: 0,
      attributeOptionId: 0,
      name: '',
      imageUrl: '',
      displayOrder: 0,
      altTag: '',
      moreImages: [
        {
          displayOrder: 0,
          imageUrl: '',
          altTag: '',
          id: 0,
        },
      ],
      minQuantity: 5,
      multipleQuantity: 0,
    },
  },
  product: {
    sizeChart: null,
    inventory: null,
    sizes: '',
    colors: null,
    brand: null,
    id: null,
    price: null,
    discounts: null,
    name: null,
    customization:false
  },
  toCheckout: {
    minQty: 2,
    minQtyCheck: true,
    totalQty: 0,
    price: 0,
    availableOptions: null,
    currency: '$',
    sizeQtys: null,
    totalPrice: 0,
    additionalLogoCharge: 0,
    allowNextLogo: false,
    logo: { price: null },
    logos: null,
    chosenLogo: null,
    lines: null,
  },
};

interface _updateDiscountTablePrices {
  type: 'DISOCUNT_TABLE_PRICES';
  data: _ProductDiscountTable | null;
}

interface _updateInventoryList {
  type: 'INVENTORY_LIST';
  data: null | _ProductInventoryTransfomed;
}

interface _UpdateProperties_Action {
  payload: _updateDiscountTablePrices | _updateInventoryList;
}

interface _SetValue_MinQty {
  type: 'MINIMUM_QTY';
  data: {
    qty: number;
  };
}

interface _Product_SetValues_Action {
  payload: _SetValue_MinQty;
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    product_storeData: (state, { payload }: _UpdateProperties_Action) => {
      if (payload.type === 'DISOCUNT_TABLE_PRICES') {
        state.product.discounts = payload.data;
      }

      if (payload.type === 'INVENTORY_LIST') {
        state.product.inventory = payload.data;
      }
    },

    product_setValues: (state, { payload }: _Product_SetValues_Action) => {
      if (payload.type === 'MINIMUM_QTY') {
        state.toCheckout.minQty = payload.data.qty;
      }
    },

    setColor: (
      state,
      action: {
        payload: _ProductColor;
      },
    ) => {
      if (state.product.inventory) {
        const inventoryToShowByColor =
          state.product.inventory?.inventory.filter(
            (int) => int.attributeOptionId === action.payload.attributeOptionId,
          );

        const sizesToShowByColor = state.product.inventory?.sizes.filter(
          (int) =>
            int.colorAttributeOptionId === action.payload.attributeOptionId,
        );

        if (inventoryToShowByColor) {
          state.selected.inventory = {
            inventory: inventoryToShowByColor,
            sizes: sizesToShowByColor,
          };
        }
      }

      state.selected.color = action.payload;
      state.toCheckout.minQty = action.payload.minQuantity;
      state.selected.productId = action.payload.productId;
    },

    setImage: (
      state,
      action: {
        payload: {
          id: number;
          imageUrl: string;
          altTag: string;
        };
      },
    ) => {
      state.selected.image = {
        ...action.payload,
        imageUrl: `${config.mediaBaseUrl}${action.payload.imageUrl}`,
      };
    },

    store_productDetails: (
      state,
      action: {
        payload: {
          brand: {
            id: number | null;
            name: string | null;
            url: string | null;
          };
          product: {
            id: number | null;
            name: string | null;
            price: {
              msrp: number;
              ourCost: number;
              salePrice: number;
            } | null;
            customization: boolean;
            colors: _ProductColor[] | null;
            sizeChart: null | _SizeChartTransformed;
            sizes: string;
          };
        };
      },
    ) => {
      state.product.brand = action.payload.brand;
      state.product.id = action.payload.product.id;
      state.product.name = action.payload.product.name;
      state.product.price = action.payload.product.price;
      state.product.sizes = action.payload.product.sizes;
      state.product.sizeChart = action.payload.product.sizeChart;
      state.product.colors = action.payload.product.colors;
      state.product.customization=action.payload.product.customization
    },

    toggleNextLogoButton: (state, action: { payload: boolean }) => {
      state.toCheckout.allowNextLogo = action.payload;
    },

    updatePrice: (
      state,
      action: {
        payload: {
          price: number;
        };
      },
    ) => {
      state.toCheckout.price = action.payload.price;
    },

    clearToCheckout: (state) => {
      state.toCheckout = {
        logos: null,
        totalQty: 0,
        price: 0,
        minQty: 0,
        minQtyCheck: false,
        availableOptions: null,
        currency: '$',
        sizeQtys: null,
        totalPrice: 0,
        additionalLogoCharge: 0,
        allowNextLogo: false,
        logo: { price: null },
        lines: null,
        chosenLogo: null,
      };
    },

    updateOptions: (
      state,
      action: {
        payload: {
          value: string;
          label: string;
          addOrRemove: 'ADD' | 'REMOVE';
          logo: {
            url: string;
          };
        };
      },
    ) => {
      const addOrRemove = action.payload.addOrRemove;

      if (addOrRemove === 'REMOVE') {
        state.toCheckout.availableOptions =
          state.toCheckout.availableOptions?.filter(
            (opt) => opt.value !== action.payload.value,
          ) || null;
        state.toCheckout.allowNextLogo = true;
      }

      if (addOrRemove === 'ADD') {
        state.toCheckout.availableOptions?.push({
          label: action.payload.label,
          value: action.payload.value,
          logo: { url: action.payload.logo.url },
        });
        state.toCheckout.allowNextLogo = true;
      }
    },

    updatePriceByLogo: (
      state,
      action: {
        payload: {
          type: 'add' | 'subtract';
          price: 'FREE' | number;
          index: number;
        };
      },
    ) => {
      const price = action.payload.price === 'FREE' ? 0 : action.payload.price;
      const addOrSubtract = action.payload.type;

      if (addOrSubtract === 'add') {
        state.toCheckout = {
          ...state.toCheckout,
          additionalLogoCharge:
            state.toCheckout.additionalLogoCharge +
            price * state.toCheckout.totalQty,
          totalPrice:
            state.toCheckout.totalPrice + price * state.toCheckout.totalQty,
          logo: {
            price: state.toCheckout.logo.price
              ? [...state.toCheckout.logo.price, action.payload.price]
              : [action.payload.price],
          },
        };
      }

      if (addOrSubtract === 'subtract') {
        const removedPrice = state.toCheckout.logo.price?.filter(
          (price, index) => {
            if (index === action.payload.index) return false;
            return true;
          },
        );

        state.toCheckout = {
          ...state.toCheckout,
          additionalLogoCharge:
            state.toCheckout.additionalLogoCharge -
            price * state.toCheckout.totalQty,
          totalPrice:
            state.toCheckout.totalPrice - price * state.toCheckout.totalQty,
          logo: {
            price: removedPrice || null,
          },
        };
      }
    },

    clearLogoUploadHistory: (
      state,
      action: {
        payload: {
          label: string;
          value: string;
          logo: {
            url: string;
          };
        }[];
      },
    ) => {
      state.toCheckout.availableOptions = action.payload;
    },

    updateQuantities: (
      state,
      action: {
        payload: {
          size: string;
          qty: number;
          price: number;
        };
      },
    ) => {
      let productName = action.payload.size;
      let productPrice = action.payload.price;
      let productQty = action.payload.qty;
      let totalQty = 0;
      let updatedSizeQtys;

      if (state.toCheckout.sizeQtys === null) {
        // IT CHECKOUT ARRAY DO NOT EXIST
        updatedSizeQtys = [
          {
            size: productName,
            qty: productQty,
            price: productPrice,
          },
        ];
        totalQty = productQty;
      } else {
        // IF PRODUCT ALREDY EXISTS
        updatedSizeQtys = state.toCheckout.sizeQtys?.map((product) => {
          if (product.size === productName) {
            totalQty += productQty;
            return {
              ...product,
              qty: productQty,
            };
          }
          totalQty += product.qty;
          return product;
        });

        // IF PRODUCT DO NOT EXIST IN THE CHECKOUT ARRAY
        const doesItemExist = state.toCheckout.sizeQtys.find(
          (product) => product.size === productName,
        );

        if (!doesItemExist) {
          updatedSizeQtys.push({
            size: productName,
            qty: productQty,
            price: productPrice,
          });
          totalQty += productQty;
        }
      }

      // LOGO CHARGE
      let updateAdditionalLogoCharge = 0;
      state.toCheckout.logo?.price?.forEach((price) => {
        if (price === 'FREE') return (updateAdditionalLogoCharge += 0);
        return (updateAdditionalLogoCharge += price * totalQty);
      });

      if (totalQty >= state.toCheckout.minQty) {
        state.toCheckout.minQtyCheck = true;
      }

      if (totalQty < state.toCheckout.minQty) {
        state.toCheckout.minQtyCheck = false;
      }

      const allDiscounts = state.product.discounts;
      let foundThePrice = false;

      allDiscounts?.subRows.forEach((discount) => {
        if (foundThePrice) return;
        const bulkQtyDiscount = +discount.displayQuantity.split('+')[0];
        if (totalQty >= bulkQtyDiscount) {
          productPrice = +discount.discountPrice;
        } else {
          foundThePrice = true;
        }
      });

      // TOTAL PRICE
      let totalPrice = totalQty * productPrice + updateAdditionalLogoCharge;

      // STATE UPDATES
      state.toCheckout.additionalLogoCharge = updateAdditionalLogoCharge;
      state.toCheckout.sizeQtys = updatedSizeQtys || null;
      state.toCheckout.price = productPrice;
      state.toCheckout.totalQty = totalQty;
      state.toCheckout.totalPrice = totalPrice;
    },

    updateQuantities2: (
      state,
      action: {
        payload: {
          size: string;
          qty: number;
          price: number;
          color: string;
        };
      },
    ) => {
      let productName = action.payload.size;
      let productPrice = action.payload.price;
      let productQty = action.payload.qty;
      let color = action.payload.color;
      let totalQty = 0;
      let updatedSizeQtys;
      if (state.toCheckout.sizeQtys === null) {
        // IT CHECKOUT ARRAY DO NOT EXIST
        updatedSizeQtys = [
          {
            size: productName,
            qty: productQty,
            price: productPrice,
            color: color,
          },
        ];
        totalQty = productQty;
      } else {
        updatedSizeQtys = state.toCheckout.sizeQtys?.map((product) => {
          if (product.size === productName && product.color === color) {
            totalQty += productQty;
            return {
              ...product,
              qty: productQty,
            };
          }
          totalQty += product.qty;
          return product;
        });

        const doesItemExist = state.toCheckout.sizeQtys.find(
          (product) => product.size === productName && product.color === color,
        );

        if (!doesItemExist) {
          updatedSizeQtys.push({
            size: productName,
            qty: productQty,
            price: productPrice,
            color: color,
          });
          totalQty += productQty;
        }
      }
      // LOGO CHARGE
      let updateAdditionalLogoCharge = 0;
      // state.toCheckout.logo?.price?.forEach((price) => {
      //   if (price === 'FREE') return (updateAdditionalLogoCharge += 0);
      //   return (updateAdditionalLogoCharge += price * totalQty);
      // });

      // if (totalQty >= state.toCheckout.minQty) {
      //   state.toCheckout.minQtyCheck = true;
      // }

      // if (totalQty < state.toCheckout.minQty) {
      //   state.toCheckout.minQtyCheck = false;
      // }
      // TOTAL PRICE

      const allDiscounts = state.product.discounts;
      let foundThePrice = false;

      allDiscounts?.subRows.forEach((discount) => {
        if (foundThePrice) return;
        const bulkQtyDiscount = +discount.displayQuantity.split('+')[0];
        if (totalQty >= bulkQtyDiscount) {
          productPrice = +discount.discountPrice;
        } else {
          foundThePrice = true;
        }
      });


      let totalPrice =
        totalQty * state.toCheckout.price + updateAdditionalLogoCharge;

      // STATE UPDATES
      state.toCheckout.additionalLogoCharge = updateAdditionalLogoCharge;
      state.toCheckout.sizeQtys = updatedSizeQtys || null;
      state.toCheckout.price = productPrice;
      state.toCheckout.totalQty = totalQty;
      state.toCheckout.totalPrice = totalPrice;
    },
    updateLogoDetails: (
      state,
      action: {
        payload: {
          location: {
            imageUrl : string,
            label: string;
            value: string;
          };
          url?: string;
          name?: string;
        };
      },
    ) => {
      let logos = [];
      const upcomingLogo = action.payload;
      const oldLogos = state.toCheckout.logos;

      if (oldLogos === null) {
        logos.push({
          no: 1,
          logo: {
            url: upcomingLogo?.url || '',
            name: upcomingLogo?.name || '',
          },
          location: upcomingLogo.location || {
            imageUrl : '',
            label: '',
            value: '',
          },
        });
      }

      if (oldLogos !== null) {
        logos = [...oldLogos];

        const logoExist = oldLogos.find(
          (logo) => logo.location.value === upcomingLogo.location?.value,
        );

        if (logoExist) {
          logos = logos.map((logo) => {
            if (logo.location.value === upcomingLogo.location?.value) {
              return {
                ...logo,
                logo: {
                  url: upcomingLogo.url || '',
                  name: upcomingLogo.name || '',
                },
              };
            }
            return logo;
          });
        }
        if (!logoExist) {
          logos.push({
            no: logos.length,
            logo: {
              url: upcomingLogo?.url || '',
              name: upcomingLogo?.name || '',
            },
            location: upcomingLogo.location || {
              imageUrl : '',
              value: '',
              label: '',
            },
          });
        }
      }

      state.toCheckout.logos = logos;
    },
    updateCheckoutObject: (state, action) => {
      state.toCheckout.totalPrice = action.payload.totalPrice;
      state.toCheckout.totalQty = action.payload.totalQty;
      state.toCheckout.sizeQtys = action.payload.sizeQtys;
    },
    storeDetails: (
      state,
      action: {
        payload: {
          brand: {
            id: number | null;
            name: string | null;
            url: string | null;
          };
          product: {
            id: number | null;
            name: string | null;
            price: {
              msrp: number;
              ourCost: number;
              salePrice: number;
            } | null;
          };
        };
      },
    ) => {
      state.product.brand = action.payload.brand;
      state.product.id = action.payload.product.id;
      state.product.name = action.payload.product.name;
      state.product.price = action.payload.product.price;
    },
    storeProductColor: (
      state,
      action: {
        payload: {
          colors: _ProductColor[];
        };
      },
    ) => {
      state.product.colors = action.payload.colors;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
