import { _ProductSEO } from '@type/APIs/productDetail.res';
import { GetlAllProductList } from '@type/productList.type';
import { FetchAllCategoiresWithRespectiveProducts } from 'Controllers/SinglePageProductListController.async';
import { conditionalLogV2, __console } from 'helpers/global.console';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import React from 'react';
import { _globalStore } from 'store.global';
import StoreBuilder_ItemsList from 'Templates/StoreBuilder/ItemsList/StoreBuilder_ItemsList_View';

interface _RequestConsultationProps {
  categories:
    | {
        id: number;
        name: string;
        items: GetlAllProductList[] | null;
      }[]
    | null;
  seo: null | _ProductSEO;
}

const SinglePage_Product_List: React.FC<_RequestConsultationProps> = ({
  categories,
}) => {
  return (
    <>
      {/* SEO Tag over here */}
      <StoreBuilder_ItemsList categories={categories} />
    </>
  );
};

export default SinglePage_Product_List;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// SERVER SIDE METHOD ------------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<_RequestConsultationProps>
> => {
  let expectedProps: _RequestConsultationProps = {
    categories: null,
    seo: null,
  };

  try {
    if (_globalStore.storeId) {
      expectedProps.categories = await FetchAllCategoiresWithRespectiveProducts(
        _globalStore.storeId,
      );
    }
  } catch (error) {
    conditionalLogV2({
      data: error,
      show: __console.allCatch,
      type: 'CATCH',
      name: 'Product Items List: getServerSideProps - Something went wrong',
    });
  }

  return {
    props: {
      categories: expectedProps.categories,
      seo: null,
    },
  };
};
