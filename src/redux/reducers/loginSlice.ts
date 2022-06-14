import { createSlice } from '@reduxjs/toolkit';
import logIn from '../actions/login';

const initialState = {
  isLogginIn: false,
  data: [],
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // google_access_id 만 전역으로 관리할 예정.
  },
  extraReducers: (builder) =>
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.data = action.payload;
    }),
});

export default loginSlice;
