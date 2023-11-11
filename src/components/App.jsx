import React from 'react';
import { useState, useEffect } from 'react';
import Form from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Contact } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import css from '../components/ContactForm/ContactForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = data => {
    if (
      contacts.find(
        contact => contact.name === data.name && contact.number === data.number
      )
    ) {
      toast.error('Such contact exists!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else {
      const newContact = {
        ...data,
        id: nanoid(),
      };
      setContacts(prevState => [...prevState, newContact]);

      toast.success('Contact added!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };
  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDeleteBtn = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const visibleContacts = filterContacts();
  return (
    <>
      <div>
        <h1 className={css.mainTitle}>Phonebook</h1>
        <Form onSubmit={createContact} />

        <h2 className={css.subTitle}>Contacts</h2>
        <Filter onChange={changeFilter} filter={filter} />
        <ul className={css.listCover}>
          {visibleContacts.map(contact => {
            return (
              <Contact
                id={contact.id}
                key={contact.id}
                name={contact.name}
                number={contact.number}
                onChange={() => handleDeleteBtn(contact.id)}
              />
            );
          })}
        </ul>
      </div>
      <ToastContainer />
    </>
  );
};
