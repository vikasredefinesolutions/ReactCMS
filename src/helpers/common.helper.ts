import { __Cookie } from '@constants/global.constant';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { _RedefineAppServices } from '@services/app.service';
import { _HeaderServices } from '@services/header.service';
import { _HomeServices } from '@services/home.service';
import { _ProductDetailService } from '@services/product.service';
import { _SlugServices } from '@services/slug.service';
import { _UserServices } from '@services/user.service';
import { SendAsyncV2 } from '@utils/axios.util';
import config from 'api.config';
import axios from 'axios';
import { IncomingMessage, ServerResponse } from 'http';
import router from 'next/router';
import { __domain } from 'page.config';
import { ParsedUrlQuery } from 'querystring';
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
    domain: string;
    isAttributeSaparateProduct: boolean;
  };
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

    return {
      userId: userId ? +userId : null,
      loggedIN: Boolean(userId),
      storeInfo: (storeInfo && JSON.parse(storeInfo)) || null,
    };
  }
  return expectedCookies;
};

export function setCookie(
  cName: string,
  cValue: string,
  expDays: number | 'EPOCH',
) {
  let date = new Date();
  if (expDays === 'EPOCH') {
    date.setTime(0);
  }
  if (typeof expDays === 'number') {
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  }
  const expires = 'expires=' + date.toUTCString();
  document.cookie = cName + '=' + cValue + '; ' + expires;
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
    | _UserServices;
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
