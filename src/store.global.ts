interface _Store {
  storeId: null | number;
  isAttributeSaparateProduct: boolean;
  code: string;
  favicon: string;
  storeTypeId: null | number;
  logoUrl: string;
  set: (
    pair:
      | _StoreId
      | _isAttributeSaparateProduct
      | _StoreCode
      | _StoreType
      | _StoreFavicon
      | _StoreLogoUrl,
  ) => void;
}

export let _globalStore: _Store = {
  storeId: null,
  isAttributeSaparateProduct: false,
  code: '',
  favicon: '',
  storeTypeId: null,
  logoUrl: '',
  set: (pair) => {
    _globalStore = { ..._globalStore, [pair.key]: pair.value };
  },
};

interface _StoreId {
  key: 'storeId';
  value: number;
}

interface _StoreCode {
  key: 'code';
  value: string;
}

interface _StoreType {
  key: 'storeTypeId';
  value: number | null;
}

interface _isAttributeSaparateProduct {
  key: 'isAttributeSaparateProduct';
  value: boolean;
}

interface _StoreFavicon {
  key: 'favicon';
  value: string;
}
interface _StoreLogoUrl {
  key: 'logoUrl';
  value: string;
}
