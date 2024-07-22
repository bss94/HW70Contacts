import {configureStore} from '@reduxjs/toolkit';
import {contactReducer} from '../store/contactSlice';
import {formReducer} from '../store/formSlice';


export const store = configureStore({
    reducer: {
      contacts:contactReducer,
      form: formReducer,
    }
  }
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;