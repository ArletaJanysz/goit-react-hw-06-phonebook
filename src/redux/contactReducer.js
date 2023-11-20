import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, setFilter } from './actions';

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
    })

    .addCase(setFilter, (state, action) => {
      state.filter = action.payload;
    });
});

export default contactReducer;
