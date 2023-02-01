type ShoppingCartItemsDetailModel = {
  attributeOptionName: string;
  attributeOptionValue: string;
  attributeOptionId: number;
};

type ShoppingCartItemModel = {
  id: number;
  price: number;
  quantity: number;
  weight: number;
  productType: number;
  discountPrice: number;
  logoTitle: string;
  logogImagePath: string;
  perQuantity: number;
  appQuantity: number;
  status: number;
  discountPercentage: number;
  productCustomizationId: number;
  itemNotes: string;
  isEmployeeLoginPrice: number;
};

export interface _addToCart_payload {
  addToCartModel: {
    customerId: number;
    productId: number;
    storeId: number;
    isempLogin: boolean;
    shoppingCartItemModel: ShoppingCartItemModel;
    shoppingCartItemsDetailModels: ShoppingCartItemsDetailModel[];
    cartLogoPersonModel: never[];
    cartLinePersonModels: never[];
  };
}

export const addToCart_payload: _addToCart_payload = {
  addToCartModel: {
    customerId: 0,
    productId: 0,
    storeId: 0,
    isempLogin: false,
    shoppingCartItemModel: {
      id: 0,
      price: 0,
      quantity: 0,
      weight: 0,
      productType: 0,
      discountPrice: 0,
      logoTitle: '',
      logogImagePath: '',
      perQuantity: 0,
      appQuantity: 0,
      status: 0,
      discountPercentage: 0,
      productCustomizationId: 0,
      itemNotes: '',
      isEmployeeLoginPrice: 0,
    },
    shoppingCartItemsDetailModels: [
      {
        attributeOptionName: '',
        attributeOptionValue: '',
        attributeOptionId: 0,
      },
    ],
    cartLogoPersonModel: [],
    cartLinePersonModels: [],
  },
};
