export type CouponReq = {
  promotionsModel: {
    customerId: number;
    couponCode: string;
    storeId: number;
    taxCost: number;
    shippingCost: number;
  };
};

export interface ShoppingCartItemModel {
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
}

export interface ShoppingCartItemsDetailModel {
  attributeOptionName: string;
  attributeOptionValue: string;
  attributeOptionId: string | number;
}

export interface CartLogoPersonModel {
  id?: number;
  attributeOptionId: number | string;
  attributeOptionValue: string;
  code: string;
  price: number;
  quantity: number;
  estimateDate: Date;
  isEmployeeLoginPrice: number;
}

export interface CartLogoPersonDetailModel {
  logoPrice: number;
  logoQty: number;
  logoFile: string;
  logoLocation: string;
  logoTotal: number;
  colorImagePath: string;
  logoUniqueId: string;
  price: number;
  logoColors: string;
  logoNotes: string;
  logoDate: Date;
  logoNames: string;
  digitalPrice: number;
  logoPositionImage: string;
  oldFilePath: string;
  originalLogoFilePath: string;
}

export interface CartLinePersonDetailModel {
  linePrice: number;
  lineQty: number;
  lineAboveLogo: number;
  lineIndividually: number;
  lineNumber: number;
  lineText: string;
  lineTotal: number;
  lineFont: string;
  lineColor: string;
  linePriceDouble: number;
  logoCartId: number;
  personalizeLocation: string;
}

export interface CartLinePersonModel {
  attributeOptionId: number | string;
  attributeOptionValue: string;
  code: string;
  cartLinePersonDetailModel: CartLinePersonDetailModel[];
}

export interface AddToCartModel {
  customerId: number;
  productId: number;
  storeId: number;
  isempLogin: boolean;
  shoppingCartItemModel: ShoppingCartItemModel;
  shoppingCartItemsDetailModels: ShoppingCartItemsDetailModel[];
  cartLogoPersonModel: CartLogoPersonModel[];
  cartLogoPersonDetailModels: CartLogoPersonDetailModel[];
  cartLinePersonModels: CartLinePersonModel[];
}

export interface CartReq {
  addToCartModel: AddToCartModel;
}

export interface PaymentOption {
  storeId: number;
  paymentOptionId: number;
  paymentOptionName: string;
}

export type PaymentOptions = PaymentOption[];
