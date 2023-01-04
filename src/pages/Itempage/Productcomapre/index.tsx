import { _ProductColor } from '@type/APIs/colors.res';
import { _ProductInventoryTransfomed } from '@type/APIs/inventory.res';
import { _ProductBySku } from '@type/APIs/productDetail.res';
import * as CompareController from 'Controllers/CompareProductsController.async';
import { conditionalLogV2, __console } from 'helpers/global.console';
import { GetServerSideProps, NextPage } from 'next';
import { _globalStore } from 'store.global';
import Redefine_CompareProducts from 'Templates/Redefine_CompareProducts';
import { _CompareProducts } from '../../../definations/compare';

interface _props {
  products: _CompareProducts | null;
}

const ProductCompare: NextPage<_props> = (props) => {
  return <Redefine_CompareProducts {...props} />;
};

export default ProductCompare;

interface _ExpectedCompareProductsProps {
  products: null | {
    details: _ProductBySku[] | null;
    colors: Array<_ProductColor[] | null> | null;
    inventory: (_ProductInventoryTransfomed | null)[] | null;
  };
}

interface _StoreType {
  storeId: null | number;
  isAttributeSaparateProduct: boolean;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let expectedProps: _ExpectedCompareProductsProps = {
    products: null,
  };
  let store: _StoreType = {
    storeId: null,
    isAttributeSaparateProduct: false,
  };

  const query: {
    SKUs: undefined | string | string[];
  } = {
    SKUs: context.query?.SKU,
  };

  if (typeof query.SKUs === 'string') {
    query.SKUs = query.SKUs;
  } else {
    query.SKUs = undefined;
  }

  try {
    if (_globalStore.storeId) {
      store = {
        storeId: _globalStore.storeId,
        isAttributeSaparateProduct: _globalStore.isAttributeSaparateProduct,
      };
    }

    if (store.storeId && query.SKUs) {
      expectedProps.products = await CompareController.FetchProductsDetail({
        skus: query.SKUs,
        storeId: store.storeId!,
        isAttributeSaparateProduct: store.isAttributeSaparateProduct,
      });
    }

    conditionalLogV2({
      data: {
        products: expectedProps.products,
      },
      show: __console.compare.serverMethod,
      type: 'SERVER_METHOD',
      name: 'Product Compare: getServerSide sending Props',
    });
  } catch (error) {
    conditionalLogV2({
      data: error,
      show: __console.allCatch,
      type: 'CATCH',
      name: 'Product Compare: getServerSideProps - Something went wrong',
    });
  }

  return {
    props: {
      products: expectedProps.products,
    },
  };
};
