import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './reducers/loginSlice';
import joinSlice from './reducers/joinSlice';

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    join: joinSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
