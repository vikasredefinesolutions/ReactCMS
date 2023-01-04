import { GetStoreID } from '@services/app.service';
import {
  _StoreMenu,
  _t_Brands,
  _t_MenuCategory,
  _t_MenuTopic,
} from '@type/APIs/header.res';
import { _StoreReturnType } from 'definations/store.type';
import { conditionalLogV2, __console } from 'helpers/global.console';
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

type _CallMenuItemAPI = _t_Brands | _t_MenuTopic | _t_MenuCategory | null;

type _menu_ = {
  items: null | _StoreMenu[];
  items_content:
    | (_CustomContent | _DynamicContent | _NoneContent | null)[]
    | null;
};

type _callMenuItemAPI_ = {
  titleType: 'TOPIC' | 'CATEGORY' | 'BRANDS';
  topicId: number;
  storeId: number;
};

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// USUAL FUNCTIONS ---------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const callMenuItemAPI = async ({
  titleType,
  topicId,
  storeId,
}: _callMenuItemAPI_): Promise<_CallMenuItemAPI | null> => {
  if (titleType === 'TOPIC') {
    return HeaderService.FetchMenuTopics({ topicId: topicId });
  }

  if (titleType === 'CATEGORY') {
    // return HeaderService.FetchMenuCategories({
    //   categoryId: topicId,
    //   storeId: storeId,
    // });
  }

  if (titleType === 'BRANDS') {
    return HeaderService.FetchBrands({ storeId });
  }

  return null;
};

const getCustomContent = async (
  item: _StoreMenu,
): Promise<_CustomContent | null> => {
  if (item.category === 'category') {
    return {
      title: 'Custom-Category title missing',
      seName: item.sename,
      items: item.menuinfo,
      type: 'CATEGORY',
    };
  }
  if (item.category === 'topic') {
    return {
      title: 'Custom-Topic title missing',
      seName: item.sename,
      items: item.menuinfo,
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
    const res = await callMenuItemAPI({
      topicId: item.topicid,
      storeId,
      titleType: 'CATEGORY',
    });

    return {
      title: 'Where to find category name',
      seName: item.sename,
      items: res?.dataType === 'CATEGORIES' ? res : null,
      type: 'CATEGORY',
    };
  }

  if (item.category === 'topic') {
    if (item.menu_type === 'Brands') {
      const res = await callMenuItemAPI({
        topicId: item.topicid,
        storeId,
        titleType: 'BRANDS',
      });
      return {
        type: 'BRANDS',
        title: 'Brands',
        seName: item.sename,
        items: res?.dataType === 'BRANDS' ? res : null,
      };
    }
  }

  return null;
};

const getNoneContent = async (
  item: _StoreMenu,
  storeId: number,
): Promise<_NoneContent | null> => {
  if (item.category === 'topic') {
    return {
      type: 'TOPIC',
      title: 'Title from storeMenu API',
      items: null,
      seName: item.sename,
    };
  }

  if (item.category === 'category') {
    return {
      type: 'CATEGORY',
      title: 'CATEGORY from storeMenu API',
      items: null,
      seName: item.sename,
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
          return getNoneContent(item, storeId);
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
    isAttributeSaparateProduct: false,
    cartCharges: null,
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
