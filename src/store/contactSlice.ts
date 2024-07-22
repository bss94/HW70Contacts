import {Contact} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {fetchContacts} from './contactThunk';

export interface ContactState {
  contacts: Contact[];
  show: boolean;
  showId: string;
  fetching: boolean;
}

const initialState: ContactState = {
  contacts: [],
  show: false,
  showId: '',
  fetching: false,
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
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
    selectShowId: (state) => state.showId,
    selectFetching: (state) => state.fetching,
  }
});

export const contactReducer = contactSlice.reducer;
export const {
  selectShow,
  selectFetching,
  selectShowId,
  selectContacts,
} = contactSlice.selectors;