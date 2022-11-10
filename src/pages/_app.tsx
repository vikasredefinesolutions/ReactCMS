import '../../styles/globals.css';
import 'Assets/css/output.css';
import type { AppProps } from 'next/app';
import { reduxWrapper } from 'redux/store.redux';
import Screen from 'appComponents/Screen';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Screen>
      <Component {...pageProps} />
    </Screen>
  );
}
export default reduxWrapper.withRedux(MyApp);
