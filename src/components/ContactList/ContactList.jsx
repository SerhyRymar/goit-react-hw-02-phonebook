import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ filter, onDeleteContact }) => {
  return (
    <ul className={styles.contact_list}>
      {filter.map(({ id, name, number }) => (
        <li key={id} className={styles.contact_item}>
          <p className={styles.contact_text}>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={styles.delButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.prototype = {
  filter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
