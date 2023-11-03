import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthIsSignedIn } from 'redux/auth.selectors';

const RestrictedRoutes = ({ children, redirectTo = '/contacts' }) => {
  const authenticated = useSelector(selectAuthIsSignedIn);

  return authenticated ? <Navigate to={redirectTo} replace /> : children;
};

export default RestrictedRoutes;
