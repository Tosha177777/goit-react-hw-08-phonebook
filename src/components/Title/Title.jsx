import { Heading } from '@chakra-ui/react';

const Title = ({ title, children }) => {
  return (
    <>
      <Heading>{title}</Heading>
      {children}
    </>
  );
};
export default Title;
