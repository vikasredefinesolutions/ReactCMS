export type ShoppingCartItemModel = {
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

export type ShoppingCartItemsDetailModel = {
  attributeOptionName: string;
  attributeOptionValue: string;
  attributeOptionId: number;
};

export type CartLogoPersonDetailModel = {
  location: string;
  logoTotal: number;
  colorImagePath: string;
  logoUniqueId: string;
  price: number;
  logoColors: string;
  logoNotes: string;
  logoDate: Date;
  logoNames: string;
  digitalPrice: number;
  logoPositionImagePath: string;
  oldFilePath: string;
  originalLogoFilePath: string;
};

export type CartLogoPersonModel = {
  attributeOptionId: number;
  attributeOptionValue: string;
  code: string;
  price: number;
  quantity: number;
  logoPrice: number;
  logoQty: number;
  logoFile: string;
  estimateDate: Date;
  isEmployeeLoginPrice: number;
  cartLogoPersonDetailModels: CartLogoPersonDetailModel[];
};

export type AddToCartModel = {
  customerId: number;
  productId: number;
  storeId: number;
  shoppingCartItemModel: ShoppingCartItemModel;
  shoppingCartItemsDetailModels: ShoppingCartItemsDetailModel[];
  cartLogoPersonModel: CartLogoPersonModel[];
  cartLinePersonModels: any[];
};

export type CartReq = {
  addToCartModel: AddToCartModel;
};

export type CouponReq = {
  promotionsModel: {
    customerId: number;
    couponCode: string;
    storeId: number;
    taxCost: 0;
    shippingCost: 0;
  };
};
