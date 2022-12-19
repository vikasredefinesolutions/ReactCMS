import { _StoreReturnType } from '@type/store.type';
import * as _AppController from 'Controllers/_AppController';
import { domainToShow } from 'helpers/common.helper';
import { highLightError } from 'helpers/global.console';
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { __domain } from 'page.config';

let store: _StoreReturnType | null = null;

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage;

    const domain = domainToShow({
      domain: ctx.req?.rawHeaders[1],
      showProd: __domain.isSiteLive,
    });

    try {
      store = await _AppController.fetchStoreDetails(domain, ''); // Here only store id is required. so, ignore second parameter.
    } catch (error) {
      highLightError({ error, component: '_document' });
    }

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
      });

    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href={`https://redefinecommerce.blob.core.windows.net/rdc/${1}/store/${
              store?.storeId
            }/css/${store?.storeId}.css`}
          />
        </Head>
        <body className="font-Outfit bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
