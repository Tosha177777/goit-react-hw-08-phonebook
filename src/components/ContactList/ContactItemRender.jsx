import { Button } from '@chakra-ui/react';

const ContactItem = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <Button
              variant={`ghost`}
              colorScheme="blue"
              type="button"
              onClick={() => onDelete(contact.id)}
            >
              Delete &times;
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactItem;
