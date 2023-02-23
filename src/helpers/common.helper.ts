import { __Cookie, __Params } from '@constants/global.constant';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { _RedefineAppServices } from '@services/app.service';
import { _CacheApiServices } from '@services/cache.service';
import { _ShoppingCartService } from '@services/cart.service';
import { _FooterServices } from '@services/footer.service';
import { _GiftCardService } from '@services/gift.service';
import { _HeaderServices } from '@services/header.service';
import { _HomeServices } from '@services/home.service';
import { _LogoApiService } from '@services/logo.service';
import { _ProductDetailService } from '@services/product.service';
import { _RequestConsultationService } from '@services/requestConsultation.service';
import { _SlugServices } from '@services/slug.service';
import { _UserServices } from '@services/user.service';
import {
  CartLogoPersonDetailModel,
  CartLogoPersonModel,
} from '@type/APIs/cart.req';
import { _ProductColor } from '@type/APIs/colors.res';
import { _ProductInventoryTransfomed } from '@type/APIs/inventory.res';
import { SendAsyncV2 } from '@utils/axios.util';
import config from 'api.config';
import { __StaticImg } from 'Assets/images.asset';
import axios from 'axios';
import { IncomingMessage, ServerResponse } from 'http';
import { StaticImageData } from 'next/image';
import router from 'next/router';
import { __domain } from 'page.config';
import { ParsedUrlQuery } from 'querystring';
import getLocation from './getLocation';
import { conditionalLog, conditionalLogV2, __console } from './global.console';

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// TYPEs ---------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

interface _ExtractCookies {
  userId: null | number;
  loggedIN: boolean;
  storeInfo: null | {
    storeId: number;
    isAttributeSaparateProduct: boolean;
    domain: string;
    storeCode: string;
    storeTypeId: number;
    favicon: string;
    logoUrl: string;
  };
  tempCustomerId: string | null;
}

interface _GET {
  url: string;
  method: 'GET';
}

interface _POST {
  url: string;
  method: 'POST';
  data?: any;
}

interface _cAxiosResponse<T> {
  success: boolean;
  data: T;
  errors: any;
}

interface _cStoreInfo {
  name: 'storeInfo';
  value: {
    storeId: number;
    isAttributeSaparateProduct: boolean;
    domain: string;
    storeCode: string;
    storeTypeId: number;
    favicon: string;
    logoUrl: string;
  };
}

interface _NextJsSetCookie {
  res: ServerResponse<IncomingMessage>;
  cookie: _cStoreInfo;
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////// FUNCTIONS ---------------------------------------
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const _Logout = (
  logInUser: ActionCreatorWithPayload<
    {
      id: number | null;
    },
    'userDetails/logInUser'
  >,
) => {
  setCookie(__Cookie.userId, '', 'EPOCH');
  logInUser({ id: null });
  router.push('/');
  return;
};

export const isItServer = (): boolean => {
  return !(typeof window != 'undefined' && window.document);
};

//////////////////////////////////////////////////////////////////////
//////// COOKIES Related  --------------------------------////////////

export const extractCookies = (
  cookies: string | undefined,
  type: 'browserCookie' | 'serverCookie' = 'serverCookie',
): _ExtractCookies => {
  let _cookies = cookies;

  const expectedCookies: _ExtractCookies = {
    userId: null,
    loggedIN: false,
    storeInfo: null,
    tempCustomerId: null,
  };

  const server = isItServer();

  if (type === 'browserCookie' && !server) {
    _cookies = document.cookie;
  }

  if (_cookies) {
    const _cookiesArr = _cookies.split('; ');

    const userId = _cookiesArr
      .find((cookie) => cookie.split('=')[0] === __Cookie.userId)
      ?.split('=')[1];

    const storeInfo = _cookiesArr
      .find((cookie) => cookie.split('=')[0] === __Cookie.storeInfo)
      ?.split('=')[1];

    const tempCustomerId = _cookiesArr
      .find((cookie) => cookie.split('=')[0] === __Cookie.tempCustomerId)
      ?.split('=')[1];

    return {
      userId: userId ? +userId : null,
      loggedIN: Boolean(userId),
      storeInfo: (storeInfo && JSON.parse(storeInfo)) || null,
      tempCustomerId: tempCustomerId || null,
    };
  }
  return expectedCookies;
};

export function setCookie(
  cName: string,
  cValue: string,
  expDays: number | 'EPOCH' | 'Session',
) {
  let date = new Date();
  if (expDays === 'EPOCH') {
    date.setTime(0);
  }
  if (typeof expDays === 'number') {
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  }
  let expires = 'expires=' + date.toUTCString();
  if (expDays === 'Session') {
    expires = expDays;
  }
  document.cookie = cName + '=' + cValue + '; ' + expires;
}

export function deleteCookie(cookieName: string) {
  return (document.cookie =
    cookieName + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;');
}

export function nextJsSetCookie({ res, cookie }: _NextJsSetCookie) {
  let cValue: any = cookie.value;

  if (cookie.name === 'storeInfo') {
    cValue = JSON.stringify(cookie.value);
  }

  res.setHeader('set-cookie', `${cookie.name}=${cValue}; `);
}

//////////////////////////////////////////////////////////////////////
//////// APIs Related  -----------------------------------////////////
export const CallCmsAPI = async <T>({
  name,
  request,
}: {
  name:
    | _HeaderServices
    | _ProductDetailService
    | _RedefineAppServices
    | _SlugServices
    | _HomeServices
    | _UserServices;
  request: _GET | _POST;
}): Promise<T | null> => {
  conditionalLogV2({
    data: request,
    name: name.api,
    type: 'API-PAYLOAD',
    // @ts-ignore: Unreachable code error
    show: __console[name.service].service[name.api],
  });

  const url = `${config.CMS}${request.url}`;

  try {
    if (request.method === 'POST') {
      const res = await axios.post<_cAxiosResponse<T>>(url, request.data);
      conditionalLogV2({
        data: res.data,
        name: `${name.service} - ${name.api}`,
        type: 'API-RESPONSE',
        // @ts-ignore: Unreachable code error
        show: __console[name.service].service[name.api],
      });

      if (res.data.data === false) {
        return null;
      }
      return res.data.data;
    }
    // GET Request will be handled from here on.
    const getResponse = await axios.get<_cAxiosResponse<T>>(url);

    conditionalLogV2({
      data: getResponse.data,
      name: `${name.service} - ${name.api}`,
      type: 'API-RESPONSE',
      // @ts-ignore: Unreachable code error
      show: __console[name.service].service[name.api],
    });
    if (name.api === 'getPageComponents') {
      // @ts-ignore: Unreachable code error
      return getResponse.data;
    }

    return getResponse.data.data;
  } catch (error) {
    conditionalLogV2({
      data: error,
      name: `${name.service} - ${name.api}`,
      type: 'API-ERROR',
      // @ts-ignore: Unreachable code error
      show: __console[name.service].service[name.api],
    });
    return null;
  }
};

export const CallAPI = async <T>({
  name,
  request,
}: {
  name:
    | _HeaderServices
    | _ProductDetailService
    | _RedefineAppServices
    | _SlugServices
    | _HomeServices
    | _GiftCardService
    | _UserServices
    | _ShoppingCartService
    | _CacheApiServices
    | _FooterServices
    | _RequestConsultationService
    | _LogoApiService;
  request: _GET | _POST;
}) => {
  conditionalLogV2({
    data: request,
    name: name.api,
    type: 'API-PAYLOAD',
    // @ts-ignore: Unreachable code error
    show: __console[name.service].service[name.api],
  });

  try {
    const res = await SendAsyncV2<T>(request);
    conditionalLogV2({
      data: res.data,
      name: `${name.service} - ${name.api}`,
      type: 'API-RESPONSE',
      // @ts-ignore: Unreachable code error
      show: __console[name.service].service[name.api],
    });
    return res.data;
  } catch (error) {
    conditionalLogV2({
      data: error,
      name: `${name.service} - ${name.api}`,
      type: 'API-ERROR',
      // @ts-ignore: Unreachable code error
      show: __console[name.service].service[name.api],
    });
    return null;
  }
};

//////////////////////////////////////////////////////////////////////
//////// Functionalities Realted  ------------------------////////////

export function removeDuplicates(arr: any[]) {
  return arr.filter(
    (arr, index, self) =>
      index === self.findIndex((t) => t.seName === arr.seName),
  );
}

export function addCustomEvents(name: 'localStorage') {
  if (name === 'localStorage') {
    const originalSetItem = localStorage.setItem;
    const originalRemoveItem = localStorage.removeItem;
    const addItemEvent = new Event('itemInserted');
    const removeItemEvent = new Event('itemRemoved');

    localStorage.setItem = function (key, value) {
      document.dispatchEvent(addItemEvent);
      originalSetItem.apply(this, [key, value]);
    };
    localStorage.removeItem = function (key) {
      document.dispatchEvent(removeItemEvent);
      originalRemoveItem.apply(this, [key]);
    };
  }
}

//////////////////////////////////////////////////////////////////////
//////// Store Related  ----------------------------------////////////

export const changeDomainForLocalHost = (queries: ParsedUrlQuery) => {
  if (
    __domain.isSiteLive === false &&
    queries?._DOMAIN &&
    typeof queries._DOMAIN === 'string'
  ) {
    __domain.localDomain = queries._DOMAIN;
  }
};

export function layoutToShow(payload: {
  layout: string | undefined;
  showProd: boolean;
}): string {
  let layout = __domain.layoutToDisplay;

  if (payload.showProd && payload.layout) {
    layout = payload.layout;
  }

  conditionalLog({
    show: payload.layout ? false : true,
    type: 'FUNCTION',
    name: 'layoutToShow',
    data: payload.layout,
    error: true,
  });

  return layout;
}

export function domainToShow(payload: {
  domain: string | undefined;
  showProd: boolean;
}): string {
  let domain = __domain.localDomain; // DEFAULT DOMAIN

  if (payload.showProd && payload.domain) {
    domain = payload.domain;
  }

  conditionalLog({
    show: !payload.domain,
    type: 'FUNCTION',
    name: 'domainToShow',
    data: payload.domain,
    error: true,
  });

  return domain;
}

export const c_getSeName = (
  component: 'PRODUCT DETAILS' | 'PRODUCT COMPARE',
) => {
  const pathName = window.location.pathname;
  let slug = '';

  if (component === 'PRODUCT DETAILS') {
    const withoutHTML = pathName.split('.')[0];
    slug = withoutHTML.split('/')[1];
  }

  if (component === 'PRODUCT COMPARE') {
    slug = '';
  }

  return slug;
};

export const extractSlugName = (contextParam?: ParsedUrlQuery) => {
  let slug = '';
  let slugID: string[] = [];
  if (contextParam) {
    slugID = contextParam['slug-id'] as string[];
    if (slugID) {
      slug = slugID.at(-1)?.replace('.html', '') || '';
    } else {
      const paramsSlug = contextParam!;

      slug = paramsSlug
        ? (paramsSlug?.slug as string).replace('.html', '')
        : '';
    }
  }
  return { slug, slugID };
};

interface _ParamsReturn {
  giftId: string | null;
}

export const extractIdFromPathName = (
  contextParam: ParsedUrlQuery | undefined,
): _ParamsReturn => {
  const params: _ParamsReturn = {
    giftId: null,
  };

  if (contextParam) {
    const giftId = contextParam[__Params.giftId];
    if (giftId && typeof giftId === 'string') {
      params.giftId = giftId;
    }
  }

  return {
    giftId: params.giftId,
  };
};

type _Props = {
  userId: number;
  note: string;
  storeId: number;
  isEmployeeLoggedIn: boolean;
  sizeQtys: Array<{
    id?: number;
    attributeOptionId: number;
    price: number;
    qty: number;
    size: string;
    color?: string | undefined;
  }> | null;
  productDetails: {
    productId: number;
    image: {
      id: number;
      imageUrl: string;
      altTag: string;
    };
    color: _ProductColor;
    inventory: null | _ProductInventoryTransfomed;
  };
  total: {
    totalPrice: number;
    totalQty: number;
  };
  shoppingCartItemId?: number;
};

export const getAddToCartObject = async (product: _Props) => {
  const location = await getLocation();
  const tempCustId = extractCookies(
    __Cookie.tempCustomerId,
    'browserCookie',
  ).tempCustomerId;

  const {
    userId,
    note,
    sizeQtys,
    productDetails,
    total,
    shoppingCartItemId,
    storeId,
    isEmployeeLoggedIn,
  } = product;
  const { totalPrice, totalQty } = total;

  const cartLogoPersonModel: CartLogoPersonModel[] = [];
  const cartLogoPersonDetailModels: CartLogoPersonDetailModel[] = [];

  sizeQtys?.map((res) => {
    cartLogoPersonModel.push({
      id: res.id || 0,
      attributeOptionId: res.attributeOptionId,
      attributeOptionValue: res.size,
      code: '',
      price: res.price / res.qty,
      quantity: res.qty,
      estimateDate: new Date(),
      isEmployeeLoginPrice: 0,
    });

    // location: `${location.city}, ${location.state}, ${location.country_name}, ${location.postal}`,
    //       logoTotal: 0,
    //       colorImagePath: 'string',
    //       logoUniqueId: 'string',
    //       price: 0,
    //       logoFile: 'string',
    //       LogoLocation: 'string',
    //       LogoPositionImage: 'string',
    //       logoColors: 'string',
    //       logoNotes: 'string',
    //       logoDate: new Date(),
    //       logoNames: 'string',
    //       digitalPrice: 0,
    //       logoPositionImagePath: 'string',
    //       oldFilePath: 'string',
    //       originalLogoFilePath: 'string',

    cartLogoPersonDetailModels.push({
      logoPrice: 0,
      logoQty: 0,
      logoFile: '',
      logoLocation: '',
      logoTotal: 0,
      colorImagePath: '',
      logoUniqueId: '',
      price: 0,
      logoColors: '',
      logoNotes: '',
      logoDate: new Date(),
      logoNames: '',
      digitalPrice: 0,
      logoPositionImage: '',
      oldFilePath: '',
      originalLogoFilePath: '',
    });
  });

  const cartObject = {
    addToCartModel: {
      customerId:
        userId && userId > 0 ? userId : tempCustId ? parseInt(tempCustId) : 0,
      productId: productDetails.productId,
      storeId: storeId,
      isempLogin: isEmployeeLoggedIn,

      shoppingCartItemModel: {
        id: shoppingCartItemId ? shoppingCartItemId : 0,
        price: totalPrice / totalQty,
        quantity: totalQty,
        weight: 0,
        productType: 0,
        discountPrice: 0,
        logoTitle: productDetails.color.altTag,
        logogImagePath: productDetails.color.imageUrl,
        perQuantity: 0,
        appQuantity: 0,
        status: 2,
        discountPercentage: 0,
        productCustomizationId: 0,
        itemNotes: note || '',
        isEmployeeLoginPrice: 0,
      },
      shoppingCartItemsDetailModels: [
        {
          attributeOptionName: 'Color',
          attributeOptionValue: productDetails.color.name,
          attributeOptionId: productDetails.color.attributeOptionId,
        },
      ],
      cartLogoPersonDetailModel: [],
      cartLogoPersonModel: cartLogoPersonModel,
      cartLogoPersonDetailModels: cartLogoPersonDetailModels, // for corporate it will be []
      cartLinePersonModels: [],
    },
  };

  return cartObject;
};

export const generateImageUrl = (
  src: null | string | StaticImageData,
  isStatic: boolean,
): string | StaticImageData => {
  if (src === null) return __StaticImg.product;

  if (isStatic) {
    return src;
  }

  if (typeof src === 'string') {
    const with_or_without_HTTP = src.includes('http');
    if (with_or_without_HTTP) return src;
    if (with_or_without_HTTP === false) return `${config.mediaBaseUrl}${src}`;
  }

  return __StaticImg.noImageFound;
};

export const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

var special = [
  'zeroth',
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
  'ninth',
  'tenth',
  'eleventh',
  'twelvth',
  'thirteenth',
  'fourteenth',
  'fifteenth',
  'sixteenth',
  'seventeenth',
  'eighteenth',
  'nineteenth',
];
var deca = [
  'twent',
  'thirt',
  'fourt',
  'fift',
  'sixt',
  'sevent',
  'eight',
  'ninet',
];

export const numberToOrdinalString = (n: number) => {
  if (n < 20) return capitalizeFirstLetter(special[n]);
  if (n % 10 === 0)
    return capitalizeFirstLetter(deca[Math.floor(n / 10) - 2] + 'ieth');
  return capitalizeFirstLetter(
    deca[Math.floor(n / 10) - 2] + 'y-' + special[n % 10],
  );
};
