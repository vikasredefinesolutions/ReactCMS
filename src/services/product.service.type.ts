export interface _AddToCart_Payload {
  addToCartModel: AddToCartModel;
}

export interface AddToCartModel {
  customerId: number;
  productId: number;
  storeId: number;
  isempLogin: boolean;
  shoppingCartItemModel: _ShoppingCartItemModel;
  shoppingCartItemsDetailModels: _ShoppingCartItemsDetailModel[];
  cartLogoPersonDetailModels: _CartLogoPersonDetailModel[];
  cartLogoPersonModel: _CartLogoPersonModel[];
  cartLinePersonModels: _CartLinePersonModel[];
}

export interface _CartLinePersonModel {
  attributeOptionId: number;
  attributeOptionValue: string;
  code: string;
  cartLinePersonDetailModel: _CartLinePersonDetailModel[];
}

export interface _CartLinePersonDetailModel {
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

export interface _CartLogoPersonModel {
  id: number;
  attributeOptionId: number;
  attributeOptionValue: string;
  code: string;
  price: number;
  quantity: number;
  estimateDate: Date;
  isEmployeeLoginPrice: number;
}

export interface _CartLogoPersonDetailModel {
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

export interface _ShoppingCartItemModel {
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

export interface _ShoppingCartItemsDetailModel {
  attributeOptionName: 'Color';
  attributeOptionValue: string;
  attributeOptionId: number;
}

export interface _LogoCartItems_LogoDetails {
  positionImage: {
    path: string;
    name: string;
  };
  filePathUrl: string;
  price: number;
  qty: number;
  total: number;
  date: Date | string;
}

export interface _AddToCart_LogoCartItems {
  product: {
    date: Date;
    color: {
      imagePath: string;
    };
    attributeOptionId: number;
    attributeOptionValue: string;
    price: number;
    qty: number;
  };
  logo: 'Customize Later' | _LogoCartItems_LogoDetails[];
}

export interface _AddToCart_ProductDetails {
  id: number;
  price: number;
  total: {
    price: number;
    qty: number;
    discountPrice: number;
  };
  color: {
    altTag: string;
    imageUrl: string;
  };
  status: 2;
  note: string;
}

export interface _AddToCart_CartItems {
  attributeOptionName: 'Color';
  attributeOptionValue: string;
  attributeOptionId: number;
}

export interface _AddToCart_PayloadGenerator_Attributes {
  cartItemId: number;
  storeId: number;
  userId: number;
  isEmployeeLoggedIn: boolean;
  product: _AddToCart_ProductDetails;
  cartItems: _AddToCart_CartItems[];
  personalization: {
    logoCartItems: _AddToCart_LogoCartItems[];
    lineCartItems: [];
  };
}
