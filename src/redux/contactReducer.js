import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact } from './actions';

const initialState = {
  contacts: [],
  filter: '',
};

const contactReducer = createReducer(initialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      state.contacts.push(action.payload);
    })
    .addCase(removeContact, (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    });
});

export default contactReducer;
