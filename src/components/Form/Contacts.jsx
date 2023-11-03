import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';

const Contacts = ({ handleContact }) => {
  const name = '';
  const number = '';

  const handleSubmit = (values, { resetForm }) => {
    const { name } = values;
    const { number } = values;
    const trimName = name.trim();
    const trimNumber = number.trim();
    const newContact = {
      id: nanoid(),
      name: trimName,
      number: trimNumber,
    };
    handleContact(newContact);
    resetForm();
  };

  return (
    <>
      <Box bg="gray.50" p={6} rounded="md" w={64}>
        <Formik initialValues={{ name, number }} onSubmit={handleSubmit}>
          {(
            { errors, touched } // Destructure errors and touched from Formik
          ) => (
            <Form>
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

                      if (value.length < 1) {
                        error = 'This field must be filled';
                      }

                      return error;
                    }}
                    required
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.name && touched.name}>
                  <FormLabel htmlFor="tel">Number</FormLabel>
                  <Field
                    as={Input}
                    id="tel"
                    name="number"
                    type="tel"
                    variant="filled"
                    validate={value => {
                      let error;

                      if (value.length < 1) {
                        error = 'This field must be filled';
                      }

                      return error;
                    }}
                    required
                  />
                  <FormErrorMessage>{errors.number}</FormErrorMessage>
                </FormControl>
                <Button colorScheme="pink" width="full" type="submit">
                  Add
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};
export default Contacts;
