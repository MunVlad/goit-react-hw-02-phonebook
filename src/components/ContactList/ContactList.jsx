import React from "react";
// import css from './ContactList.module.css';
const contacts = [
  { name: 'Rosie Simpson', id: 'id-1' },
  { name: 'Hermione Kline', id: 'id-2' },
  { name: 'Eden Clements', id: 'id-3' }
];

function ContactList(props) {
  return (
    <ul>
      {contacts.map(({ name, id }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}


export default ContactList;