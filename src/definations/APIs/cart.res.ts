export interface _CI_ShoppingCartItemDetailsViewModel {
  id: number;
  attributeOptionId: number;
  attributeOptionValue: string;
  qty: number;
  price: number;
}

export interface _CI_ShoppingCartLogoPersonViewModel {
  logoImagePath: string;
  logoPrice: number;
  logoLocation: null;
  logoName: string;
  logoPositionImage: string;
  sku: string;
  size: string;
  name: string;
}

export interface _CartItem {
  colorImage: string;
  productName: string;
  productId: number;
  sku: string;
  attributeOptionId: string;
  attributeOptionValue: string;
  shoppingCartItemsId: number;
  shoppingCartItemDetailsViewModels: _CI_ShoppingCartItemDetailsViewModel[];
  shoppingCartLogoPersonViewModels: _CI_ShoppingCartLogoPersonViewModel[];
  shoppingCartLinePersonViewModel: any[];
  totalQty: number;
  totalPrice: number;
  txtcode: any;
  seName: string;
  cartLinePersonModels?: any[]; // Not recieved in the response
  shoppingcartLinePersonModels: any[]; // Not recieved in the response
}

export type CartProducts = _CartItem[];
