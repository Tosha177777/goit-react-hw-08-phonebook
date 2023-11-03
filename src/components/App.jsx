import ContactsPage from 'pages/ContactsPage';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/operations';
import RestrictedRoutes from './RestrictedRoutes/RestrictedRoutes';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/user_menu"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoutes>
              <LoginPage />
            </RestrictedRoutes>
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoutes>
              <RegisterPage />
            </RestrictedRoutes>
          }
        />
      </Route>
    </Routes>
  );
};
export default App;
