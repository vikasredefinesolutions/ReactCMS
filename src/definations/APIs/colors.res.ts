export interface _FetchColors {
  success: boolean;
  data: _ProductColor[];
  errors: Errors;
  otherData: null;
}

export interface _ProductColor {
  productId: number;
  productName?: string;
  productSEName?: string;
  attributeOptionId: number;
  name: string;
  imageUrl: string;
  displayOrder: number;
  altTag: string;
  moreImages: _OtherImage[];
  minQuantity: number;
  multipleQuantity: number;
}

export interface _ProductImageOption {
  id: number;
  productId: number;
  imageName: string;
  colorName: string;
  displayorder: number;
  alttag: string;
}
export interface _OtherImage {
  imageUrl: string;
  displayOrder: number;
  altTag: string;
  id: number;
}

export interface Errors {}
