import { Button } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthIsSignedIn, selectAuthUserData } from 'redux/auth.selectors';
import { logoutThunk } from 'redux/operations';

const ProfilePage = () => {
  const userEmail = useSelector(selectAuthUserData);
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthIsSignedIn);

  const onLogOut = () => {
    dispatch(logoutThunk());
  };
  return (
    <div>
      <p>{userEmail.email}</p>
      {authenticated && (
        <Button
          onClick={onLogOut}
          colorScheme="teal"
          fontWeight={`500`}
          borderRadius={`6px`}
          variant={`ghost`}
        >
          Log Out
        </Button>
      )}
    </div>
  );
};

export default ProfilePage;
