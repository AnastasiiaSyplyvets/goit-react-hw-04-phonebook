import React, { Component } from 'react';
import css from './ContactForm.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit({
      name: this.state.name,
      number: this.state.number,
    });
    console.log(this.state);
    this.handleFormReset();
  };

  handleFormReset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label className={css.labelName} htmlFor="">
          Name
          <input
            className={css.input}
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
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
            value={this.state.number}
            name="number"
            onChange={this.handleInputChange}
          ></input>
        </label>
        <button className={css.addBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
