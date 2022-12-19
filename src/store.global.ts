interface _Store {
  storeId: null | number;
  isAttributeSaparateProduct: boolean;
  set: (pair: _StoreId | _isAttributeSaparateProduct) => void;
}

export let _globalStore: _Store = {
  storeId: null,
  isAttributeSaparateProduct: false,
  set: (pair) => {
    _globalStore = { ..._globalStore, [pair.key]: pair.value };
  },
};

interface _StoreId {
  key: 'storeId';
  value: number;
}

interface _isAttributeSaparateProduct {
  key: 'isAttributeSaparateProduct';
  value: boolean;
}
