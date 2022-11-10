import React from 'react';
import { Navigate } from 'react-router';

interface _Props {
  children: React.ReactNode;
}

const AuthGuard: React.FC<_Props> = ({ children }) => {
  const isLoggedIn = localStorage.getItem('token');
  return isLoggedIn ? <>{children}</> : <Navigate to="/" />;
};

export default AuthGuard;
