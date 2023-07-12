// import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import css from './ContactForm.module.css';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    }

    if (event.target.name === 'number') {
      setNumber(event.target.value);
    }
  };

  const handleFormReset = () => {
    setName('');
    setNumber('');
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    setName(name);
    setNumber(number);
    onSubmit({ name, number });
    console.log(name);
    console.log(number);
    handleFormReset();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label className={css.labelName} htmlFor="">
        Name
        <input
          className={css.input}
          type="text"
          value={name}
          onChange={handleInputChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.labelName} htmlFor="">
        Number
        <input
          className={css.input}
          type="tel"
          value={number}
          name="number"
          onChange={handleInputChange}
        ></input>
      </label>
      <button className={css.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

// class Form extends Component {
// state = {
//   name: '',
//   number: '',
// };

// handleInputChange = event => {
//   this.setState({
//     [event.target.name]: event.target.value,
//   });
// };

// handleFormSubmit = event => {
//   event.preventDefault();

//   this.props.onSubmit({
//     name: this.state.name,
//     number: this.state.number,
//   });
//   console.log(this.state);
//   this.handleFormReset();
// };

// handleFormReset = () => {
//   this.setState({ name: '', number: '' });
// };

//   render() {
//     return (
//       <form onSubmit={this.handleFormSubmit}>
//         <label className={css.labelName} htmlFor="">
//           Name
//           <input
//             className={css.input}
//             type="text"
//             value={this.state.name}
//             onChange={this.handleInputChange}
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//         <label className={css.labelName} htmlFor="">
//           Number
//           <input
//             className={css.input}
//             type="tel"
//             value={this.state.number}
//             name="number"
//             onChange={this.handleInputChange}
//           ></input>
//         </label>
//         <button className={css.addBtn} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

export default Form;
