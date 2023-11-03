// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { registerThunk } from 'redux/operations';

// const RegisterPage = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const dispatch = useDispatch();

//   const onSubmit = data => {
//     dispatch(registerThunk(data));
//     reset();
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>
//         Name
//         <input {...register('name', { required: true })} type="text" />
//         {errors.name && <span>This field is required</span>}
//       </label>
//       <label>
//         Email
//         <input {...register('email', { required: true })} type="email" />
//         {errors.email && <span>This field is required</span>}
//       </label>
//       <label>
//         Password
//         <input
//           {...register('password', { required: true, minLength: 7 })}
//           type="password"
//         />
//         {errors.password && <span>This field is required</span>}
//       </label>

//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default RegisterPage;

import { Formik, Field } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/operations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={values => {
            console.log(values);
            dispatch(registerThunk(values));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isInvalid={!!errors.name && touched.name}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    variant="filled"
                    validate={value => {
                      let error;

                      if (value.length < 6) {
                        error = 'This field must be filled';
                      }

                      return error;
                    }}
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    validate={value => {
                      let error;

                      if (value.length < 0) {
                        error = 'This field must be filled';
                      }

                      return error;
                    }}
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={value => {
                      let error;

                      if (value.length < 6) {
                        error = 'Password must contain at least 6 characters';
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full">
                  Sign In
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
export default RegisterPage;
