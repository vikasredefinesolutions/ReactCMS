export interface LoginBar {
  text: string;
  color: string;
  font: string;
  background: string;
}

export interface ShippingStatement {
  background: string;
}

export interface ProductBanner {
  html: string;
  loginBar: LoginBar;
  shippingStatement: ShippingStatement;
}

export interface Brand {
  name: string;
  logo: string;
}

export interface Image {
  label: string;
  id: string;
  url: string;
}

export interface Product {
  id: string;
  name: string;
  skuId: string;
  price: string;
  priceUnit: string;
  brand: Brand;
  image: Image;
  description: string;
  createdName: string;
}

export interface ProductListType {
  productBanner: ProductBanner;
  products: Product[];
}

export interface SubRow {
  id: number;
  storeId: number;
  productImage: string;
  ourSKU: string;
  name: string;
  recStatus: string;
  upc: string;
  quantity: number;
  price: number;
  category: string;
  createdDate: Date;
  createdBy: number;
  modifiedDate: Date;
  modifiedBy: number;
  location?: any;
  ipAddress?: any;
  macAddress?: any;
}

export interface Item {
  id: number;
  storeId: number;
  productImage: any[];
  count: number;
  ourSKU: string;
  name: string;
  recStatus: string;
  upc: string;
  quantity: number;
  ourCost: number;
  msrp: number;
  imap: number;
  salePrice: number;
  categoryId: number;
  category: string;
  brandName: string;
  createdDate: Date;
  createdBy: number;
  modifiedDate?: Date;
  modifiedBy?: number;
  location: string;
  ipAddress: string;
  macAddress: string;
  rowVersion: string;
  createdName: string;
  modifiedName: string;
  subRows: SubRow | number[];
  brandImage: string;
}

export interface ProductListObject {
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  items: Item[];
}

export interface StoreBrandProductColorViewModel {
  label: string;
  id: number;
  name: string;
  productCount: number;
  displayOrder: number;
  colorCode: string;
}

export interface StoreBrandProductSizeViewModel {
  label: string;
  id: number;
  name: string;
  productCount: number;
  displayOrder: number;
}

export interface StoreBrandProductGenderViewModel {
  label: string;
  id: number;
  name?: any;
  productCount: number;
  displayOrder: number;
}

export interface StoreBrandProductProductTypeViewModel {
  label: string;
  id: number;
  name: string;
  productCount: number;
  displayOrder: number;
}

export interface StoreBrandProductPriceRangeViewModel {
  label: string;
  id: number;
  name: string;
  productCount: number;
  displayOrder: number;
}

export interface GetProductImageOptionList {
  id: number;
  imageName?: string;
  colorName?: string;
  displayorder?: number;
  alttag?: string;
  attributeOptionID?: number;
  imageUrl?: string;
  attributeOptionName?: string;
  displayOrder?: number;
  altTag?: string;
}

export interface GetlAllProductList {
  getProductImageOptionList?: GetProductImageOptionList[];
  id?: number;
  name?: string;
  productTagViewModel?: Array<{
    productId: number;
    imagename: string;
    productTagName: string;
    tagPosition: string;
  }>;
  sename?: string;
  msrp: number;
  salePrice: number;
  brandlogo?: string;
  iswishlist?: boolean;
  label?: string;
  wishListId?: number;
  sku?: string;
  imageUrl?: string;
  imap?: string;
  moreImages?: GetProductImageOptionList[];
  productId?: number;
  productName?: string;
  productSEName?: string;
  productDisplayOrder?: number;
  attributeOptionName?: string;
  ourCost?: number;
}

export interface BrandFilter {
  storeBrandProductColorViewModels: StoreBrandProductColorViewModel[];
  storeBrandProductSizeViewModels: StoreBrandProductSizeViewModel[];
  storeBrandProductGenderViewModels: StoreBrandProductGenderViewModel[];
  storeBrandProductProductTypeViewModels: StoreBrandProductProductTypeViewModel[];
  storeBrandProductPriceRangeViewModels: StoreBrandProductPriceRangeViewModel[];
  getlAllProductList: GetlAllProductList[];
  [key: string]: Array<
    | StoreBrandProductColorViewModel
    | StoreBrandProductSizeViewModel
    | StoreBrandProductGenderViewModel
    | StoreBrandProductProductTypeViewModel
    | StoreBrandProductPriceRangeViewModel
    | GetlAllProductList
  >;
}

export type FilterType = Array<{
  label: string;
  options: Array<{
    label: string;
    id: number;
    name: string;
    productCount: number;
    displayOrder: number;
    colorCode: string;
    sename?: string;
    subrows?: {
      id: number;
      name: string;
      productCount: number;
      displayOrder: number;
      sename: string;
    }[];
  }>;
}>;

export type FilterApiRequest = {
  storeID: string | number;
  brandId?: string | number;
  categoryId?: string | number;
  customerId: number;
  filterOptionforfaceteds: Array<{
    name: string;
    value: string;
  }>;
};

export type ProductList = Array<GetlAllProductList>;

export type ColorChangeHandler = (
  productId: number | undefined,
  seName: string | undefined,
  color: string | undefined | null,
) => void;

export type FilterChangeHandler = (
  name: string,
  value: string,
  checked: boolean,
) => void;

export interface StoreCategoryProductCategoryListViewModel {
  label?: string;
  subrows: any[];
  id: number;
  name: string;
  productCount: number;
  displayOrder: number;
  sename: string;
}

export interface StoreBrandProductBrandViewModel {
  label: string;
  id: number;
  name: string;
  productCount: number;
  displayOrder: number;
}

export interface CategoryFilter {
  storeBrandProductColorViewModels: StoreBrandProductColorViewModel[];
  storeBrandProductSizeViewModels: StoreBrandProductSizeViewModel[];
  storeBrandProductGenderViewModels: StoreBrandProductGenderViewModel[];
  storeBrandProductProductTypeViewModels: StoreBrandProductProductTypeViewModel[];
  storeBrandProductPriceRangeViewModels: StoreBrandProductPriceRangeViewModel[];
  storeCategoryProductCategoryListViewModel: StoreCategoryProductCategoryListViewModel[];
  storeBrandProductBrandViewModel: StoreBrandProductBrandViewModel[];
  getlAllProductList: GetlAllProductList[];
  [key: string]: Array<
    | StoreBrandProductColorViewModel
    | StoreBrandProductSizeViewModel
    | StoreBrandProductGenderViewModel
    | StoreBrandProductProductTypeViewModel
    | StoreBrandProductPriceRangeViewModel
    | StoreCategoryProductCategoryListViewModel
    | StoreBrandProductBrandViewModel
    | GetlAllProductList
  >;
}
