import { nanoid } from 'nanoid';
import React, { Component } from 'react';
// import ContactForm from './ContactForm';
// import ContactList from './ContactList';

// class App extends Component {
//   state = {
//     contacts: [],
//     name: '',
//   };

//   //  if (name.trim() === '') {
//   //     return;
//   //   }

//   //   const newContact = { id: nanoid(), name };
//   //   this.setState({ contacts: [...contacts, newContact], name: '' });
//   // };

//   render() {
//     const { contacts, name } = this.state;
//     return (
//       <div
//         style={{
//           // height: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           flexDirection: 'column',
//           fontSize: 18,
//           // textTransform: 'uppercase',
//           color: '#010101',
//         }}
//       >
//         <h1>Phonebook</h1>
//       <form>
//           <label htmlFor="">
//             <input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>
//         </form>
//         <button type="submit">
//           Add contact
//         </button>
//         <h2>Contacts</h2>
//         <ul>
//       {contacts.map(({ name, id }) => (
//         <li key={id}>{name}</li>
//       ))}
//     </ul>
//       </div>
//     );
//   }
// }

// export default App;

class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { contacts, name } = this.state;

    if (name.trim() === '') {
      return;
    }

    const newContact = { id: nanoid(), name };
    this.setState({ contacts: [...contacts, newContact], name: '' });
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({id, name}) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;