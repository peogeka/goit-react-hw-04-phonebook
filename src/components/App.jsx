import { useState, useEffect } from 'react';
import { WrapperRoot } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';



export function App() {
  const [contacts, setContacts] = useState(() => {
    let lsContacts = localStorage.getItem('contacts');
    return lsContacts ? JSON.parse(lsContacts) : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = contact => {
    setContacts(contacts => [...contacts, contact]);
  };

  const handleChangeFilter = e => {
    setFilter(e.target.value);
  };

  const handleDeleteContact = id => {
    setContacts(contacts => contacts.filter(item => item.id !== id));
  };

  return (
    <WrapperRoot>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter changeFilter={handleChangeFilter} />
      <ContactList
        contacts={
          filter.length > 0 ? contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())) : contacts
        }
        onDelete={handleDeleteContact}
      />
    </WrapperRoot>
  );
}
