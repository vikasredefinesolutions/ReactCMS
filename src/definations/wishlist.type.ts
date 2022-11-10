export type StoreproductWishListModel = {
  id: number;
  rowVersion: string;
  location: string;
  ipAddress: string;
  macAddress: string;
  customerId: number;
  productId: number;
  quantity: number;
  name: string;
  color: string;
  price: number;
  recStatus: string;
};

export type WishlistRequest = {
  storeproductWishListModel: StoreproductWishListModel;
};

export type WishlistType = {
  id: number;
  customerId: number;
  productId: number;
  quantity: number;
  productName: string;
  color: string;
  price: number;
  colorLogoUrl: string;
  seName: string;
}[];
