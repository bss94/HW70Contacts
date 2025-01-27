import {configureStore} from '@reduxjs/toolkit';
import {contactReducer} from '../store/contactSlice';


export const store = configureStore({
    reducer: {
      contacts: contactReducer,
    }
  }
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;