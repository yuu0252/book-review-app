import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './pageSlice';
import loginReducer from './user/loginSlice';

export const store = configureStore({
  reducer: {
    page: pageReducer,
    login: loginReducer,
  },
});
