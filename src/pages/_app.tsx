import Screen from 'appComponents/Screen';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import { reduxWrapper } from 'redux/store.redux';
import { FetchHeaderInformation } from 'services/header.service';

type AppOwnProps = { example: string };

export function RedefineCustomApp({
  Component,
  pageProps,
  example,
}: AppProps & AppOwnProps) {
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

  return { ...ctx, example: 'foo' };
};

export default reduxWrapper.withRedux(RedefineCustomApp);
