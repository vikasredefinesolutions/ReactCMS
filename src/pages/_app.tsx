import Screen from 'appComponents/Screen';
import { _Store } from 'constants/store.constant';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import { __domain } from '../page.config';
import { reduxWrapper } from 'redux/store.redux';
import * as _AppController from 'Controllers/_AppController';
import { _StoreMenu, _Brands } from 'definations/APIs/header.res';
import { _StoreReturnType } from 'definations/store.type';
import { useActions } from 'hooks';
import Spinner from 'appComponents/ui/spinner';
import '../../styles/output.css';
import '../app.css';
import SuccessErrorModal from 'appComponents/modals/successErrorModal';
import { highLightError } from 'helpers/common.helper';
import { _Expected_AppProps } from 'show.type';
import { conditionalLog } from 'helpers/global.console';
import { _showConsoles, __fileNames } from 'show.config';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type AppOwnProps = {
  store: _StoreReturnType | null;
  menuItems: _StoreMenu[] | null;
  brands: _Brands[] | null;
};

export function RedefineCustomApp({
  Component,
  pageProps,
  store,
  menuItems,
  brands,
}: AppProps & AppOwnProps) {
  const { store_storeDetails } = useActions();
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  useEffect(() => {
    if (store) {
      setPageLoading(false);
    }
  }, []);

  if (store) {
    store_storeDetails({
      store: store,
      menuItems: menuItems,
      brands: brands,
    });
  }

  return (
    <Spinner>
      <SuccessErrorModal />
      <Screen>
        {pageLoading ? (
          <div id="root">
            <div className="loader-wrapper">
              <div className="loader"></div>
            </div>
          </div>
        ) : (
          <Component {...pageProps} />
        )}
      </Screen>
    </Spinner>
  );
}

RedefineCustomApp.getInitialProps = async (
  context: AppContext,
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context);
  const domain = __domain.layout || context.ctx.req?.rawHeaders[1]!;
  const pathName = context.ctx.pathname;
  const expectedProps: _Expected_AppProps = {
    store: null,
    menuItems: null,
    brands: null,
  };

  try {
    expectedProps.store = await _AppController.FetchStoreDetails(
      domain,
      pathName,
    );

    if (expectedProps.store.storeId) {
      expectedProps.brands = await _AppController.FetchBrands(
        expectedProps.store.storeId,
      );
    }
    // expectedProps.menuItems = await _AppController.FetchMenuItems(2);
  } catch (error) {
    highLightError({ error, component: '_app Page' });
  }

  conditionalLog({
    data: expectedProps,
    type: 'NEXTJS PROPS',
    name: __fileNames._app,
    show: _showConsoles._app,
  });
  return {
    ...ctx,
    store: expectedProps.store,
    menuItems: expectedProps.menuItems,
    brands: expectedProps.brands,
  };
};

export default reduxWrapper.withRedux(RedefineCustomApp);
