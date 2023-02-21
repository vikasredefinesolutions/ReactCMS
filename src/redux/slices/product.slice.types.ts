import { _ProductInventoryTransfomed } from '@type/APIs/inventory.res';
import { _ProductColor } from 'definations/APIs/colors.res';
import { _ProductDiscountTable } from 'definations/APIs/discountTable.res';
import { _SizeChartTransformed } from 'definations/APIs/sizeChart.res';

export interface _LogoDetails_IfSubmitted {
  status: 'LOGO SUBMITTED';
  location: {
    imageUrl: string;
    name: string;
    value: string;
  };
  date: string | Date;
  price: number;
  quantity: 1;
  title: string | null;
  filePath: string | null;
}

export interface _LogoDetails_WillSubmitLater {
  status: 'WILL SUBMIT LATER';
  location: {
    imageUrl: string;
    name: string;
    value: string;
  };
  date: string;
  price: number;
  quantity: 1;
}

export interface _AvailableLocationDetails {
  value: string;
  label: string;
  image: {
    url: string;
    alt: string;
  };
  price: number;
  cost: number;
}

export interface _Product_UpdateLogoDetails_Actions {
  payload:
    | {
        type: 'Upload_Logo';
        logo:
          | 'Customize Later'
          | _LogoDetails_IfSubmitted
          | _LogoDetails_WillSubmitLater;
      }
    | {
        type: 'Allow_Next_Logo';
        allow: boolean;
      }
    | {
        type: 'Update_Logo_Image';
        data: {};
      }
    | {
        type: 'Reset_Locations';
        data: _AvailableLocationDetails[];
      }
    | {
        type: 'Update_Location_Options';
        location: {
          value: string;
          label: string;
          addOrRemove: 'ADD' | 'REMOVE';
          image: {
            url: string;
            alt: string;
          };
          price: number;
          cost: number;
        };
      }
    | {
        type: 'Update_TotalPrice_ByLogo';
        logo: {
          addOrSubtract: 'add' | 'subtract';
          price: 'FREE' | number;
          index: number;
        };
      }
    | {
        type: 'Location_Update_Pending';
        pending: string | null;
      };
}

export type _SOM_LogoDetails =
  | _LogoDetails_IfSubmitted
  | _LogoDetails_WillSubmitLater;

export interface _LogoDetail {
  no: number;
  logo: {
    url: string;
    name: string;
  };
  location: {
    label: string;
    value: string;
    imageUrl: string;
  };
}

export interface _Product_SizeQtys {
  attributeOptionId: number;
  id?: number;
  size: string;
  qty: number;
  price: number;
  color?: string | undefined;
}

export interface _state_productToCheckout {
  allowAddToCart: boolean;
  minQty: number;
  totalQty: number;
  price: number;
  totalPrice: number;
  additionalLogoCharge: number;
  availableOptions:
    | { value: string; label: string; logo: { url: string } }[]
    | null;
  sizeQtys: _Product_SizeQtys[] | null;
  logo: {
    price: Array<number | 'FREE'> | null;
  };
  logos: null | _LogoDetail[];
  allowNextLogo: boolean;
  lines:
    | {
        line1: string;
        line2: string;
        color: string;
        font: string;
        price: number;
      }[]
    | null;
}

export interface _state_SelectedProduct {
  productId: number;
  image: {
    id: number;
    imageUrl: string;
    altTag: string;
  };
  color: _ProductColor;
  inventory: null | _ProductInventoryTransfomed;
}

export interface _state_SOM_Logos_Container {
  prices: null | Array<number | 'FREE'>;
  details: null | _SOM_LogoDetails[];
  allowNextLogo: boolean;
  availableOptions: null | _AvailableLocationDetails[];
  additionalLogoCharge: number;
  choosedLogoCompletionPending: string | null;
}
export interface _ProductStore {
  selected: _state_SelectedProduct;
  product: {
    id: number | null;
    sizes: string;
    discounts: _ProductDiscountTable | null;
    sizeChart: _SizeChartTransformed | null;
    inventory: null | _ProductInventoryTransfomed;
    price: {
      msrp: number;
      ourCost: number;
      salePrice: number;
    } | null;
    customization: boolean;
    name: string | null;
    colors: _ProductColor[] | null;
    brand: {
      id: number | null;
      name: string | null;
      url: string | null;
    } | null;
  };
  toCheckout: _state_productToCheckout;
  som_logos: _state_SOM_Logos_Container;
  offlineProductSelected: string;
}

export interface _updateDiscountTablePrices {
  type: 'DISOCUNT_TABLE_PRICES';
  data: _ProductDiscountTable | null;
}

export interface _updateInventoryList {
  type: 'INVENTORY_LIST';
  data: null | _ProductInventoryTransfomed;
}

export interface _UpdateProperties_Action {
  payload: _updateDiscountTablePrices | _updateInventoryList;
}

export interface _SetValue_MinQty {
  type: 'MINIMUM_QTY';
  data: {
    qty: number;
  };
}

export interface _UpdateSelectedValue_Color {
  type: 'COLOR';
  data: _ProductColor;
}

export interface _UpdateSelectedValue_Reset_All {
  type: 'RESET_ALL';
}

export interface _Product_UpdateSelectedValeus_Action {
  payload: _UpdateSelectedValue_Color | _UpdateSelectedValue_Reset_All;
}

export interface _Product_SetValues_Action {
  payload: _SetValue_MinQty;
}
