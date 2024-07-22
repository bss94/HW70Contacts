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
    console.log(contacts);
    if (contacts) {
      newContacts = Object.keys(contacts).map((key: string) => {
        const contact: ApiContact = contacts[key];
        return {
          id: key,
          ...contact,
        };
      });
    }
    console.log(newContacts);
    return newContacts;
  }
);

export const deleteContact = createAsyncThunk<void, string>(
  'contacts/deleteContact',
  async (contactId) => {
    await axiosApi.delete(`contacts/${contactId}.json`);
  }
);
