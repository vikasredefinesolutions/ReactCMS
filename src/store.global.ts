interface _Store {
  storeId: null | number;
  isAttributeSaparateProduct: boolean;
  code: string;
  storeTypeId: null | number;
  set: (
    pair: _StoreId | _isAttributeSaparateProduct | _StoreCode | _StoreType,
  ) => void;
}

export let _globalStore: _Store = {
  storeId: null,
  isAttributeSaparateProduct: false,
  code: '',
  storeTypeId: null,
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
