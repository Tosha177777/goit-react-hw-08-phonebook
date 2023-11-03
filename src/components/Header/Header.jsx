import { Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { NavLink as ReactRouterNavLink, Outlet } from 'react-router-dom';
import { Link as ChakraLink, Container, Stack } from '@chakra-ui/react';
import { selectAuthIsSignedIn } from 'redux/auth.selectors';

const Header = () => {
  const authenticated = useSelector(selectAuthIsSignedIn);
  return (
    <Container maxW={`1440px`} p={`0 10px 0 10px`}>
      <header style={{ padding: `10px 0 10px 0` }}>
        <nav>
          <Stack direction="row" align="center" spacing={`10px`}>
            <ChakraLink
              _active={{ background: '#E6FFFA' }}
              _focus={{ background: '#E6FFFA' }}
              _hover={{
                background: '#E6FFFA',
              }}
              fontWeight={`500`}
              p={`10px 10px`}
              borderRadius={`6px`}
              color={`teal`}
              as={ReactRouterNavLink}
              to="/"
            >
              Home
            </ChakraLink>
            {authenticated ? (
              <>
                <ChakraLink
                  _active={{ background: '#E6FFFA' }}
                  _focus={{ background: '#E6FFFA' }}
                  _hover={{
                    background: '#E6FFFA',
                  }}
                  fontWeight={`500`}
                  p={`10px 10px`}
                  borderRadius={`6px`}
                  color={`teal`}
                  as={ReactRouterNavLink}
                  to="/contacts"
                >
                  Contacts
                </ChakraLink>
                <ChakraLink
                  _active={{ background: '#E6FFFA' }}
                  _focus={{ background: '#E6FFFA' }}
                  fontWeight={`500`}
                  p={`10px 10px`}
                  _hover={{
                    background: '#E6FFFA',
                  }}
                  borderRadius={`6px`}
                  color={`teal`}
                  textDecor={`none`}
                  as={ReactRouterNavLink}
                  to="/user_menu"
                >
                  My Profile
                </ChakraLink>
              </>
            ) : (
              <>
                <ChakraLink
                  _active={{ background: '#E6FFFA' }}
                  _focus={{ background: '#E6FFFA' }}
                  _hover={{
                    background: '#E6FFFA',
                  }}
                  fontWeight={`500`}
                  p={`10px 10px`}
                  borderRadius={`6px`}
                  color={`teal`}
                  as={ReactRouterNavLink}
                  to="/register"
                >
                  Registration
                </ChakraLink>
                <ChakraLink
                  _active={{ background: '#E6FFFA' }}
                  _focus={{ background: '#E6FFFA' }}
                  _hover={{
                    background: '#E6FFFA',
                  }}
                  fontWeight={`500`}
                  p={`10px 10px`}
                  borderRadius={`6px`}
                  color={`teal`}
                  as={ReactRouterNavLink}
                  to="/login"
                >
                  Login
                </ChakraLink>
              </>
            )}
          </Stack>
        </nav>
      </header>
      <Suspense fallback={<ColorRing visible={true} />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Header;
