import { __Cookie } from '@constants/global.constant';
import { GetStoreCustomer } from '@services/user.service';

import SuccessErrorModal from 'appComponents/modals/successErrorModal';
import Spinner from 'appComponents/ui/spinner';
import Redefine_Screen from 'Templates/Redefine_Screen';

import { FetchThemeConfigs } from '@services/app.service';
import { Footer } from '@services/footer.service';
import { _Footer } from '@type/APIs/footer.res';
import EmployeeController from 'Controllers/EmployeeController';
import * as _AppController from 'Controllers/_AppController.async';
import { _TransformedThemeConfig } from 'definations/APIs/header.res';
import { _StoreReturnType } from 'definations/store.type';
import AuthGuard from 'Guard/AuthGuard';
import {
  domainToShow,
  extractCookies,
  nextJsSetCookie,
  setCookie,
  _Logout
} from 'helpers/common.helper';
import { conditionalLogV2, __console } from 'helpers/global.console';
import { useActions } from 'hooks';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { __domain } from 'page.config';
import { useEffect } from 'react';
import { reduxWrapper } from 'redux/store.redux';
import { _Expected_AppProps, _MenuItems } from 'show.type';
import { _globalStore } from 'store.global';
import '../../styles/output.css';
import '../app.css';

type AppOwnProps = {
  store: _StoreReturnType | null;
  menuItems: _MenuItems | null;
  configs: {
    header: _TransformedThemeConfig | null;
    footer: _Footer | null;
  };
};

const RedefineCustomApp = ({
  Component,
  pageProps,
  store,
  menuItems,
  configs,
}: AppProps & AppOwnProps) => {
  EmployeeController();
  const router = useRouter();
  const { store_storeDetails, updateCustomerV2, setShowLoader, logInUser } =
    useActions();

  const refreshHandler = () => {
    return setCookie(__Cookie.storeInfo, '', 'EPOCH');
  };

  useEffect(() => {
    const handleStart = () => {
      setShowLoader(true);
    };
    const handleComplete = () => {
      setShowLoader(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  useEffect(() => {
    const cookies = extractCookies('', 'browserCookie');
    if (store) {
      store_storeDetails({
        store: store,
        menuItems: menuItems,
        configs: configs,
      });
    }

    if (cookies && cookies.userId) {
      setShowLoader(true);
      GetStoreCustomer(cookies.userId)
        .then((res) => {
          if (res === null) {
            _Logout(logInUser);
            return;
          }
          updateCustomerV2({
            customer: res,
            id: res.id,
          });
        })
        .finally(() => {
          setShowLoader(false);
        });
    }
    setShowLoader(false);
  }, []);

  useEffect(() => {
    window.addEventListener('beforeunload', refreshHandler);
    return () => window.removeEventListener('beforeunload', refreshHandler);
  }, []);

  return (
    <Spinner>
      <SuccessErrorModal />
      <Redefine_Screen>
        <Component {...pageProps} />
      </Redefine_Screen>
    </Spinner>
  );
};

RedefineCustomApp.getInitialProps = async (
  context: AppContext,
): Promise<AppOwnProps & AppInitialProps> => {
  const res = context.ctx.res;
  const pathName = context.ctx.pathname;
  const currentPath = context.ctx.asPath;
  let APIsCalledOnce = false;
  const expectedProps: _Expected_AppProps = {
    store: {
      storeId: null,
      layout: null,
      pageType: '',
      pathName: '',
      code: '',
      storeTypeId: null,
      isAttributeSaparateProduct: false,
      cartCharges: null,
    },
    menuItems: null,
    configs: {
      header: null,
      footer: null,
    },
  };

  //------------------------------------
  const ctx = await App.getInitialProps(context);
  const cookies = extractCookies(context.ctx.req?.headers.cookie);

  if (cookies.storeInfo?.storeId) {
    APIsCalledOnce = true;
    expectedProps.store.storeId = cookies.storeInfo.storeId;
    expectedProps.store.isAttributeSaparateProduct =
      cookies.storeInfo.isAttributeSaparateProduct;
    expectedProps.store.code = cookies.storeInfo.storeCode;
    expectedProps.store.storeTypeId = cookies.storeInfo.storeTypeId;
  }

  if (res && currentPath) {
    const currentPage = AuthGuard({
      path: currentPath,
      loggedIn: cookies.loggedIN,
    });

    if (currentPage.access === false) {
      res.writeHead(302, {
        Location: currentPage.redirectTo,
      });
      res.end();
    }
  }

  const domain = domainToShow({
    domain: context.ctx.req?.rawHeaders[1],
    showProd: __domain.isSiteLive,
  });

  try {
    if (APIsCalledOnce === false) {
      expectedProps.store = await _AppController.fetchStoreDetails(
        domain,
        pathName,
      );

      if (expectedProps.store?.storeId) {
        expectedProps.configs.footer = await Footer({
          storeId: expectedProps.store?.storeId,
          configname: 'footer',
        });

        expectedProps.configs.header = await FetchThemeConfigs({
          storeid: expectedProps.store?.storeId,
          configname: 'header_config',
        });

        // expectedProps.menuItems = await _AppController.fetchMenuItems(
        //   expectedProps.store.storeId,
        // );

        if (res && cookies.storeInfo === null) {
          nextJsSetCookie({
            res,
            cookie: {
              name: __Cookie.storeInfo,
              value: {
                storeId: expectedProps.store.storeId,
                domain: domain,
                storeCode: expectedProps.store.code,
                storeTypeId: expectedProps.store.storeTypeId!,
                isAttributeSaparateProduct:
                  expectedProps.store.isAttributeSaparateProduct,
              },
            },
          });
        }
      }
    }

    conditionalLogV2({
      data: expectedProps,
      type: 'SERVER_METHOD',
      name: ' _app.tsx',
      show: __console.app.serverMethod,
    });
  } catch (error) {
    conditionalLogV2({
      data: error,
      type: 'CATCH',
      name: ' _app.tsx - Something went wrong',
      show: __console.allCatch,
    });
  }

  if (expectedProps.store.storeId) {
    _globalStore.set({ key: 'storeId', value: expectedProps.store.storeId });
    _globalStore.set({
      key: 'isAttributeSaparateProduct',
      value: expectedProps.store.isAttributeSaparateProduct,
    });
    _globalStore.set({
      key: 'code',
      value: expectedProps.store.code,
    });
    _globalStore.set({
      key: 'storeTypeId',
      value: expectedProps.store.storeTypeId,
    });
  }

  return {
    ...ctx,
    store: expectedProps.store,
    menuItems: expectedProps.menuItems,
    configs: expectedProps.configs,
  };
};

export default reduxWrapper.withRedux(RedefineCustomApp);
