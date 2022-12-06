export interface ShoppingCartItemDetailsViewModel {
  attributeOptionId: number;
  attributeOptionValue: string;
  qty: number;
  price: number;
}

export interface ShoppingCartLogoPersonViewModel {
  logoImagePath: string;
  logoPrice: number;
  location: string;
}

export interface CartResponse {
  colorImage: string;
  productName: string;
  sku: string;
  attributeOptionId: string;
  attributeOptionValue: string;
  shoppingCartItemsId: number;
  shoppingCartItemDetailsViewModels: ShoppingCartItemDetailsViewModel[];
  shoppingCartLogoPersonViewModels: ShoppingCartLogoPersonViewModel[];
  totalQty: number;
  totalPrice: number;
  txtcode?: any;
  seName: string;
  cartLinePersonModels?: any[];
  shoppingcartLinePersonModels: any[];
}

export type CartProducts = CartResponse[];
