import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Field, Formik } from 'formik';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <Box w={64}>
      <Formik>
        <FormControl>
          <FormLabel htmlFor="filter" marginRight={0}>
            Find contacts by name
            <Field
              as={Input}
              id="filter"
              type="text"
              name="filter"
              variant="filled"
              value={filter}
              onChange={onFilterChange}
            />
          </FormLabel>
        </FormControl>
      </Formik>
    </Box>
  );
};

export default Filter;
