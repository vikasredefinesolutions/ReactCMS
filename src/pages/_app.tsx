import { __Cookie } from '@constants/global.constant';
import { GetStoreCustomer } from '@services/user.service';

import SuccessErrorModal from 'appComponents/modals/successErrorModal';
import Spinner from 'appComponents/ui/spinner';
import Redefine_Screen from 'Templates/Redefine_Screen';

import { Footer } from '@services/footer.service';
import { TrackFile } from '@services/tracking.service';
import { _Footer } from '@type/APIs/footer.res';
import EmployeeController from 'Controllers/EmployeeController';
import * as _AppController from 'Controllers/_AppController.async';
import { _TransformedHeaderConfig } from 'definations/APIs/header.res';
import { _StoreReturnType } from 'definations/store.type';
import AuthGuard from 'Guard/AuthGuard';
import {
  domainToShow,
  extractCookies,
  nextJsSetCookie,
  setCookie,
  _Logout,
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
// import '../../styles/output.css';

import { getWishlist } from '@services/wishlist.service';
import Metatags from 'appComponents/reUsable/MetaTags';
import { _ExpectedSlugProps } from 'Components/Slug/getServerSideProps';
import '../app.css';

type AppOwnProps = {
  store: _StoreReturnType | null;
  menuItems: _MenuItems | null;
  configs: {
    header: _TransformedHeaderConfig | null;
    footer: _Footer | null;
  };
  pageProps: _ExpectedSlugProps | null;
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
  const {
    store_storeDetails,
    updateCustomerV2,
    setShowLoader,
    logInUser,
    updateWishListData,
  } = useActions();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const trackingFile = async () => {
    let data = {
      trackingModel: {
        id: 0,
        storeId: extractCookies(__Cookie.storeInfo, 'browserCookie').storeInfo
          ?.storeId,
        sessionID: 'string',
        visitorId: '',
        gclId: router?.query?.gclid ?? '',
        msclkId: router?.query?.msclkId ?? '',
        initialReferrer: '',
        initialLandingPage: '',
        marketingTimeStamp: '',
        marketingLandingPage: '',
        marketingInitialReferrer: '',
        utmSource: router?.query?.utmSource ?? '',
        utmMedium: router?.query?.utmMedium ?? '',
        utmTerm: router?.query?.utmTerm ?? '',
        utmContent: router?.query?.utmContent ?? '',
        utmCampaign: router?.query?.utm_campaign ?? '',
        utmExpid: router?.query?.utm_expid ?? '',
        utmReferrer: router?.query?.utm_referrer ?? '',
        isNewVisitor: true,
        ipAddress: '192.168.1.1',
      },
    };
    await TrackFile(data);
  };

  useEffect(() => {
    trackingFile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const cookies = extractCookies('', 'browserCookie');
    if (store) {
      store_storeDetails({
        store: store,
      });
    }

    const tempCustomerId = extractCookies(
      __Cookie.tempCustomerId,
      'browserCookie',
    ).tempCustomerId;

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
          getWishlist(res.id || ~~(tempCustomerId || 0)).then((data) => {
            updateWishListData(data);
          });
        })
        .finally(() => {
          setShowLoader(false);
        });
    }
    setShowLoader(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('beforeunload', refreshHandler);
    return () => window.removeEventListener('beforeunload', refreshHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!store || !store.storeTypeId) {
    return <>Store Details not found</>;
  }

  return (
    <Spinner>
      <Metatags
        storeName={store.storeName}
        pageMetaData={pageProps?.pageMetaData}
        routepath={router.asPath}
      />
      <SuccessErrorModal />
      <Redefine_Screen
        logoUrl={store.urls.logo}
        storeCode={store.code}
        storeTypeId={store.storeTypeId}
        configs={configs}
        menuItems={menuItems}
      >
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
      storeName: '',
      storeTypeId: null,
      isAttributeSaparateProduct: false,
      cartCharges: null,
      urls: {
        logo: '',
        favicon: '',
      },
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

  const domain = domainToShow({
    domain: context.ctx.req?.rawHeaders[1],
    showProd: __domain.isSiteLive,
  });

  if (cookies.storeInfo?.storeId && cookies.storeInfo?.domain === domain) {
    APIsCalledOnce = true;
    expectedProps.store.storeId = cookies.storeInfo.storeId;
    expectedProps.store.isAttributeSaparateProduct =
      cookies.storeInfo.isAttributeSaparateProduct;
    expectedProps.store.code = cookies.storeInfo.storeCode;
    expectedProps.store.storeTypeId = cookies.storeInfo.storeTypeId;
    expectedProps.store.urls = {
      logo: cookies.storeInfo.logoUrl,
      favicon: cookies.storeInfo.favicon,
    };
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

        expectedProps.menuItems = await _AppController.fetchMenuItems(
          expectedProps.store.storeId,
        );

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
                favicon: expectedProps.store.urls.favicon,
                logoUrl: expectedProps.store.urls.logo,
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
    _globalStore.set({
      key: 'favicon',
      value: expectedProps.store.urls.favicon,
    });
    _globalStore.set({
      key: 'logoUrl',
      value: expectedProps.store.urls.logo,
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
