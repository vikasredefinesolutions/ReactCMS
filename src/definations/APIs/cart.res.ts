export interface ShoppingCartItemDetailsViewModel {
  attributeOptionId: number;
  attributeOptionValue: string;
  qty: number;
  price: number;
}

export interface CartResponse {
  colorImage: string;
  productName: string;
  sku: string;
  attributeOptionId: string;
  attributeOptionValue: string;
  shoppingCartItemsId: number;
  shoppingCartItemDetailsViewModels: ShoppingCartItemDetailsViewModel[];
  totalQty: number;
  totalPrice: number;
  txtcode?: any;
  seName: string;
}
