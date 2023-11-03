import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthIsSignedIn } from 'redux/auth.selectors';

const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const authenticated = useSelector(selectAuthIsSignedIn);

  return authenticated ? children : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
