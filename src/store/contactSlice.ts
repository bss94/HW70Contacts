import {Contact, ContactMutation} from '../types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createContact, deleteContact, fetchContacts} from './contactThunk';


export interface ContactState {
  contacts: Contact[];
  show: boolean;
  currentContact: Contact | null;
  editContact:ContactMutation|null;
  fetching: boolean;
  creating:boolean;
  deleting: boolean;
}

const initialState: ContactState = {
  contacts: [],
  show: false,
  currentContact: null,
  editContact:null,
  fetching: false,
  creating:false,
  deleting: false,
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    openModal: (state, {payload: contact}: PayloadAction<Contact>) => {
      state.currentContact = contact;
      state.show = true;
    },
    closeModal: (state) => {
      state.show = false;
      state.currentContact = null;
    },
    toEditFromModal:(state,{payload:editContact}:PayloadAction<ContactMutation>)=>{
      state.editContact = {
        name:editContact.name,
        email:editContact.email,
        phone:editContact.phone,
        photo:editContact.photo,
      }
    },
    endEdit:(state)=>{
      state.editContact = null
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
    builder
      .addCase(deleteContact.pending, (state) => {
        state.deleting = true;
      })
      .addCase(deleteContact.fulfilled, (state) => {
        state.deleting = false;
        state.show = false;
        state.currentContact = null;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.deleting = false;
        state.show = false;
        state.currentContact = null;
      });
    builder
      .addCase(createContact.pending, (state) => {
        state.creating = true;
      })
      .addCase(createContact.fulfilled, (state) => {
        state.creating = false;
      })
      .addCase(createContact.rejected, (state) => {
        state.creating = false;
      });
  },
  selectors: {
    selectContacts: (state) => state.contacts,
    selectShow: (state) => state.show,
    selectCurrentContact: (state) => state.currentContact,
    selectFetching: (state) => state.fetching,
    selectCreating: (state) => state.creating,
    selectDeleting: (state) => state.deleting,
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
  selectCreating,
  selectDeleting,
} = contactSlice.selectors;