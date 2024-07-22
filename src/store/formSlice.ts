import {createSlice} from '@reduxjs/toolkit';


export interface FormState{
  name: string;
  phone: string;
  email: string;
  photo: string;
}
 const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  photo: '',
}
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers:{}
})

export const formReducer = formSlice.reducer;