import { GetStoreID } from '@services/app.service';
import { _StoreMenu } from '@type/APIs/header.res';
import { _StoreReturnType } from 'definations/store.type';
import { __console, conditionalLogV2 } from 'helpers/global.console';
import * as HeaderService from 'services/header.service';
import {
  _CustomContent,
  _DynamicContent,
  _MenuItems,
  _NoneContent,
} from 'show.type';

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// TYPEs ---------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

type _menu_ = {
  items: null | _StoreMenu[];
  items_content:
    | (_CustomContent | _DynamicContent | _NoneContent | null)[]
    | null;
};

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// USUAL FUNCTIONS ---------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const getCustomContent = async (
  item: _StoreMenu,
): Promise<_CustomContent | null> => {
  if (item.category === 'category') {
    return {
      title: item.title || 'Category',
      seName: item.se_Name,
      items: item.menu_Info,
      type: 'CATEGORY',
    };
  }
  if (item.category === 'topic') {
    return {
      title: item.title || 'Topic',
      seName: item.se_Name,
      items: item.menu_Info,
      type: 'TOPIC',
    };
  }

  return null;
};

const getDynamicContent = async (
  item: _StoreMenu,
  storeId: number,
): Promise<_DynamicContent | null> => {
  if (item.category === 'category') {
    const res = await HeaderService.FetchMenuCategories({
      categoryId: item.topic_Id,
      storeId: storeId,
    });

    return {
      title: item.title || 'Category',
      seName: item.se_Name,
      items: res?.dataType === 'CATEGORIES' ? res : null,
      type: 'CATEGORY',
    };
  }

  if (item.category === 'topic') {
    if (item.menu_Type === 'brand') {
      const res = await HeaderService.FetchBrands({ storeId });

      return {
        type: 'BRANDS',
        title: 'Brands',
        seName: item.se_Name,
        items: res,
      };
    }
  }

  return null;
};

const getNoneContent = async (
  item: _StoreMenu,
): Promise<_NoneContent | null> => {
  if (item.category === 'topic') {
    return {
      type: 'TOPIC',
      title: item.title || 'Topic',
      items: null,
      seName: item.se_Name,
    };
  }

  if (item.category === 'category') {
    return {
      type: 'CATEGORY',
      title: item.title || 'Category',
      items: null,
      seName: item.se_Name,
    };
  }

  return null;
};

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// SERVER SIDE FUNCTIONS ---------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const fetchMenuItems = async (
  storeId: number,
): Promise<_MenuItems | null> => {
  const menu: _menu_ = {
    items: null,
    items_content: null,
  };

  try {
    menu.items = await HeaderService.FetchStoreMenu({ storeId });

    if (menu.items && menu.items.length > 0) {
      const itemsToFetch = menu.items.map((item) => {
        if (item.type === 'custom') {
          return getCustomContent(item);
        }
        if (item.type === 'dynamic') {
          return getDynamicContent(item, storeId);
        }
        if (item.type === 'none') {
          return getNoneContent(item);
        }

        return null;
      });

      await Promise.allSettled(itemsToFetch).then((values) => {
        menu.items_content = values.map((value) =>
          value.status === 'fulfilled' ? value.value : null,
        );
      });
    }

    conditionalLogV2({
      data: menu,
      type: 'CONTROLLER',
      name: '_AppController: fetchMenuItems',
      show: __console.app.controller,
    });

    return menu;
  } catch (error) {
    conditionalLogV2({
      data: error,
      type: 'CATCH',
      name: '_AppController: fetchMenuItems - Something went wrong',
      show: __console.allCatch,
    });
    return null;
  }
};

export const fetchStoreDetails = async (
  domain: string,
  pathName: string,
): Promise<_StoreReturnType> => {
  const store: _StoreReturnType = {
    storeId: null,
    layout: null,
    pageType: '',
    pathName: '',
    code: '',
    storeTypeId: null,
    storeName: '',
    isAttributeSaparateProduct: false,
    cartCharges: null,
    urls: {
      logo: '',
      favicon: '',
    },
  };
  try {
    const res = await GetStoreID(domain);
    if (res) {
      store.storeId = res.id;
      store.layout = res.code;
      store.pathName = pathName;
      store.code = res.code;
      store.isAttributeSaparateProduct = res.isAttributeSaparateProduct;
      store.cartCharges = {
        isSmallRun: res.isSmallRun,
        smallRunLimit: res.smallRunLimit,
        smallRunFeesCharges: res.smallRunFeesCharges,
        isLogoSetupCharges: res.isLogoSetupCharges,
        logoSetupCharges: res.logoSetupCharges,
      };
      store.storeTypeId = res.storeTypeId;
      store.storeName = res.name;
      store.urls = {
        logo: res.logoUrl,
        favicon: res.favicon!,
      };

      conditionalLogV2({
        data: store,
        show: __console.app.controller,
        type: 'CONTROLLER',
        name: '_AppController - Store values didnt update',
      });
      return store;
    }

    conditionalLogV2({
      data: store,
      show: __console.app.controller,
      type: 'CONTROLLER',
      name: '_AppController - Store values didnt update',
    });
    return store;
  } catch (error) {
    conditionalLogV2({
      data: error,
      show: __console.allCatch,
      type: 'CATCH',
      name: '_AppController - Something went wrong',
    });
    return store;
  }
};
