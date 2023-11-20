import React from 'react';

import { connect } from 'react-redux';
import { removeContact } from 'redux/actions';

import PropTypes from 'prop-types';

import '../ContactList/ContactList.css';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <ul className="contacts-list">
        {filteredContacts.map(contact => (
          <li className="contacts-item" key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className="delete-btn"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts,
  filter: state.filter,
});

const mapDispatchToProps = {
  onDeleteContact: removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
