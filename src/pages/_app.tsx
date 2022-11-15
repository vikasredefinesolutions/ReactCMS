import Screen from 'appComponents/Screen';
import { _Store } from 'constants/store.constant';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import { __domain } from 'page.config';
import { reduxWrapper } from 'redux/store.redux';
import * as _AppController from 'Controllers/_AppController';
import { _StoreMenu } from 'definations/APIs/header.res';
import { storeReturnType } from 'definations/store.type';
import { useActions } from 'hooks';
import '../../styles/output.css';

type AppOwnProps = {
  store: storeReturnType | null;
  menuItems: _StoreMenu[];
};

export function RedefineCustomApp({
  Component,
  pageProps,
  store,
  menuItems,
}: AppProps & AppOwnProps) {
  const { store_storeDetails } = useActions();

  if (store) {
    store_storeDetails({
      store: store,
      menuItems: menuItems,
    });
  }

  if (store === null) return <>LOADING STORE DETAILS</>;

  return (
    <>
      <Screen>
        <Component {...pageProps} />
      </Screen>
    </>
  );
}

RedefineCustomApp.getInitialProps = async (
  context: AppContext,
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context);
  const domain = __domain.layout || context.ctx.req?.rawHeaders[1]!;
  const pathName = context.ctx.pathname;

  const store = await _AppController.FetchStoreDetails(domain, pathName);
  const menuItems = await _AppController.FetchMenuItems(store.storeId!);

  return { ...ctx, store, menuItems };
};

export default reduxWrapper.withRedux(RedefineCustomApp);
