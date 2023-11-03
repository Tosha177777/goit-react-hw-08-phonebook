import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUserData } from 'redux/auth.selectors';
import { logoutThunk } from 'redux/operations';

const ProfilePage = () => {
  const userEmail = useSelector(selectAuthUserData);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logoutThunk());
  };
  return (
    <Box>
      <Text>{userEmail.email}</Text>

      <Button
        onClick={onLogOut}
        colorScheme="teal"
        fontWeight={`500`}
        borderRadius={`6px`}
        variant={`ghost`}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default ProfilePage;
