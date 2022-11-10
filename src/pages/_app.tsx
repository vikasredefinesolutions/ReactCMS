import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { reduxWrapper } from 'redux/store.redux';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default reduxWrapper.withRedux(MyApp);
