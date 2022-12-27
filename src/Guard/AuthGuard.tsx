import { highLightError } from 'helpers/global.console';
import { IncomingMessage, ServerResponse } from 'http';
import { AppInitialProps } from 'next/app';
import { _Expected_AppProps } from 'show.type';
import { routesToProtect } from './route';

interface _authGuard_ {
  path: string;
  res: ServerResponse<IncomingMessage>;
  ctx: AppInitialProps<any>;
  loggedIn: boolean;
}

export const Redirect = ({
  res,
  to,
}: {
  res: ServerResponse<IncomingMessage>;
  to: string | undefined;
}) => {
  highLightError({ error: to, component: 'entered Redirect' });
  if (to) {
    res.writeHead(302, {
      Location: to,
    });
    res.end();
  }

  res.writeHead(302, {
    Location: '/',
  });
  res.end();
};

export const AuthGuard = ({
  path,
  res,
  ctx,
  loggedIn,
}: _authGuard_): _Expected_AppProps | void => {
  const initials: _Expected_AppProps = {
    ...ctx,
    store: {
      storeTypeId: null,
      storeId: null,
      layout: null,
      pageType: '',
      pathName: '',
      code: '',
      isAttributeSaparateProduct: false,
      cartCharges: null,
    },
    menuItems: null,
    configs: { header: null },
  };

  if (!loggedIn) {
    const matched = routesToProtect.find((route) => route.private === path);
    if (matched) {
      Redirect({ to: matched.redirectTo, res });
    }
    return initials;
  }
};

export default AuthGuard;
