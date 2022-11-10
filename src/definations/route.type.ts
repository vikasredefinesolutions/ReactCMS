/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { ReactNode } from 'react';

export interface _Routes {
  path: string;
  component: React.FC;
  children: null | _RoutesChildren[];
  guard: null | { (Element: { children: ReactNode }): JSX.Element };
}

export interface _RoutesChildren {
  path: string;
  component: React.FC;
  guard: null | { (Element: { children: ReactNode }): JSX.Element };
}

export interface _AuthGuard {
  children: ReactNode;
}
