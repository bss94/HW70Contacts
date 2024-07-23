import {ApiContact, Contact, ContactMutation} from '../types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createContact, deleteContact, fetchContacts, fetchOneContact, updateContact} from './contactThunk';


export interface ContactState {
  contacts: Contact[];
  show: boolean;
  currentContact: Contact | null;
  editContact: ContactMutation | null;
  fetching: boolean;
  creating: boolean;
  fetchingOneContact: boolean;
  updating: boolean;
  deleting: boolean;
}

const initialState: ContactState = {
  contacts: [],
  show: false,
  currentContact: null,
  editContact: null,
  fetching: false,
  creating: false,
  fetchingOneContact: false,
  updating: false,
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
    resetState: (state) => {
      state.currentContact = null;
      state.editContact = null;
      state.show = false;
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
        state.editContact = null;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.fetching = false;
        state.editContact = null;
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
    builder
      .addCase(fetchOneContact.pending, (state) => {
        state.fetchingOneContact = true;
      })
      .addCase(fetchOneContact.fulfilled, (state, {payload: apiContact}: PayloadAction<ApiContact>) => {
        state.editContact = apiContact;
        state.fetchingOneContact = false;
      })
      .addCase(fetchOneContact.rejected, (state) => {
        state.fetchingOneContact = false;
      });
    builder
      .addCase(updateContact.pending, (state) => {
        state.updating = true;
      })
      .addCase(updateContact.fulfilled, (state) => {
        state.updating = false;
        state.editContact = null;
      })
      .addCase(updateContact.rejected, (state) => {
        state.updating = false;
      });
  },
  selectors: {
    selectContacts: (state) => state.contacts,
    selectShow: (state) => state.show,
    selectCurrentContact: (state) => state.currentContact,
    selectEditContact: (state) => state.editContact,
    selectFetching: (state) => state.fetching,
    selectCreating: (state) => state.creating,
    selectFetchOne: (state) => state.fetchingOneContact,
    selectUpdating: (state) => state.updating,
    selectDeleting: (state) => state.deleting,
  }
});

export const contactReducer = contactSlice.reducer;
export const {
  openModal,
  closeModal,
  resetState,
} = contactSlice.actions;
export const {
  selectShow,
  selectFetching,
  selectCurrentContact,
  selectEditContact,
  selectFetchOne,
  selectUpdating,
  selectContacts,
  selectCreating,
  selectDeleting,
} = contactSlice.selectors;