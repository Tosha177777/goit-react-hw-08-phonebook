import { PhoneIcon } from '@chakra-ui/icons';
import { Button, List, ListItem, Text } from '@chakra-ui/react';

const ContactItem = ({ contacts, onDelete }) => {
  return (
    <List display={`flex`} flexDirection={`column`} gap={5}>
      {contacts.map(contact => {
        return (
          <ListItem key={contact.id} bg="gray.50" p={3} rounded="md" w={64}>
            <Text fontWeight={`500`}>
              <PhoneIcon boxSize={3} /> {contact.name}: {contact.number}
            </Text>
            <Button
              size={`sm`}
              variant={`ghost`}
              colorScheme="red"
              type="button"
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};
export default ContactItem;
