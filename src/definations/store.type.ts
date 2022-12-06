export type CartCharges = {
  isSmallRun: boolean;
  smallRunLimit: number;
  smallRunFeesCharges: number;
  isLogoSetupCharges: boolean;
  logoSetupCharges: number;
};

export interface _StoreReturnType {
  storeId: null | number;
  layout: null | string;
  pageType: string;
  pathName: string;
  code: string;
  isAttributeSaparateProduct: boolean;
  cartCharges: null | CartCharges;
}
