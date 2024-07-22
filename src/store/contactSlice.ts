import {Contact} from '../types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchContacts} from './contactThunk';

export interface ContactState {
  contacts: Contact[];
  show: boolean;
  currentContact: Contact | null;
  fetching: boolean;
}

const initialState: ContactState = {
  contacts: [],
  show: false,
  currentContact: null,
  fetching: false,
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    openModal:(state,{payload:contact}:PayloadAction<Contact>)=>{
      state.currentContact=contact;
      state.show = true;
    },
    closeModal:(state)=>{
      state.show = false;
      state.currentContact=null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchContacts.fulfilled, (state, {payload: items}) => {
        state.fetching = false;
        state.contacts = items;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.fetching = false;
      });
  },
  selectors: {
    selectContacts: (state) => state.contacts,
    selectShow: (state) => state.show,
    selectCurrentContact: (state) => state.currentContact,
    selectFetching: (state) => state.fetching,
  }
});

export const contactReducer = contactSlice.reducer;
export const {
  openModal,
  closeModal
} = contactSlice.actions;
export const {
  selectShow,
  selectFetching,
  selectCurrentContact,
  selectContacts,
} = contactSlice.selectors;