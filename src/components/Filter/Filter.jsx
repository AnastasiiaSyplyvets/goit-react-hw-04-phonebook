import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = props => {
  const { filter, onChange } = props;

  return (
    <label className={css.findOption}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={onChange}
      ></input>
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
