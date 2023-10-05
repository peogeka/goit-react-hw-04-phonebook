import { Item, Text, List, Button, Wrapper } from './ContactList.styled';

export function ContactList({ contacts, onDelete }) {
  return (
    <>
      <List>
        {contacts.map(item => (
          <Item key={item.id}>
            <Wrapper>
              <Text>
                {item.name}: {item.number}
              </Text>
              <Button onClick={() => onDelete(item.id)}>Delete</Button>
            </Wrapper>
          </Item>
        ))}
      </List>
    </>
  );
}
