import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css'


const Filter = ({ filter }) => {
  return (
    <>
      <div className={styles.filter_container}>
        <p className={styles.contact_text}>Find contacts by name</p>
        <input
          className={styles.input}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={filter}
        />
      </div>
    </>
  );
};

Filter.prototype = {
  filter: PropTypes.func.isRequired,
};
export default Filter;
