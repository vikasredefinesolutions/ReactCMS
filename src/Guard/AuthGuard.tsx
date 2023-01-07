import { routesToProtect } from './route';

interface _authGuard_ {
  path: string;
  loggedIn: boolean;
}

interface _HaveAccess {
  access: true;
  redirectTo: null;
}

interface _DontHaveAccess {
  access: false;
  redirectTo: string;
}

export const AuthGuard = ({
  path,
  loggedIn,
}: _authGuard_): _DontHaveAccess | _HaveAccess => {
  const info: _HaveAccess | _DontHaveAccess = {
    access: true,
    redirectTo: null,
  };

  if (!loggedIn) {
    const matched = routesToProtect.find((route) => route.private === path);
    if (matched) {
      return {
        access: false,
        redirectTo: matched.redirectTo,
      };
    }
    return info;
  }
  return info;
};

export default AuthGuard;
