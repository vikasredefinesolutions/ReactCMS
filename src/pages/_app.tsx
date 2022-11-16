import Screen from 'appComponents/Screen';
import { _Store } from 'constants/store.constant';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import { __domain } from '../page.config';
import { reduxWrapper } from 'redux/store.redux';
import * as _AppController from 'Controllers/_AppController';
import { _StoreMenu } from 'definations/APIs/header.res';
import { _StoreReturnType } from 'definations/store.type';
import { useActions } from 'hooks';
import Spinner from 'appComponents/ui/spinner';
import '../../styles/output.css';
import '../app.css';

type AppOwnProps = {
  store: _StoreReturnType | null;
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
    <Spinner>
      <Screen>
        <Component {...pageProps} />
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

  const store = await _AppController.FetchStoreDetails(domain, pathName);
  const menuItems = await _AppController.FetchMenuItems(2);

  return { ...ctx, store, menuItems };
};

export default reduxWrapper.withRedux(RedefineCustomApp);
