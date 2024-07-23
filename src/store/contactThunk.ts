import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiContact, ApiContacts, Contact} from '../types';
import {AppDispatch} from '../app/store';
import axiosApi from '../axiosApi';

export const fetchContacts = createAsyncThunk<
  Contact[],
  undefined,
  { dispatch: AppDispatch }
>(
  'contacts/fetchContacts',
  async () => {
    const contactsResponse = await axiosApi.get<ApiContacts | null>('/contacts.json');
    const contacts = contactsResponse.data;
    let newContacts: Contact[] = [];
    if (contacts) {
      newContacts = Object.keys(contacts).map((key: string) => {
        const contact: ApiContact = contacts[key];
        return {
          id: key,
          ...contact,
        };
      });
    }
    return newContacts;
  },
);

export const deleteContact = createAsyncThunk<void, string, { dispatch: AppDispatch }>(
  'contacts/deleteContact',
  async (contactId) => {
    await axiosApi.delete(`contacts/${contactId}.json`);
  },
);

export const createContact = createAsyncThunk<void, ApiContact, { dispatch: AppDispatch }>(
  'contacts/createContact',
  async (apiContact) => {
    await axiosApi.post('/contacts.json', apiContact);
  },
);

export const fetchOneContact = createAsyncThunk<ApiContact, string, { dispatch: AppDispatch }>(
  'contacts/fetchOneContact',
  async (id) => {
    const {data: contact} = await axiosApi.get<ApiContact | null>(
      `/contacts/${id}.json`);
    if (contact === null) {
      throw new Error('Not Found');
    }
    return contact;
  },
);

export interface UpdateContactArg {
  id: string;
  apiContact: ApiContact;
}

export const updateContact = createAsyncThunk<void, UpdateContactArg, { dispatch: AppDispatch }>(
  'contacts/updateContact',
  async ({id, apiContact}) => {
    await axiosApi.put(`contacts/${id}.json`, apiContact);
  },
);