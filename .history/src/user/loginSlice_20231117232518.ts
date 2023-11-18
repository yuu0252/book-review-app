import { createSlice } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';

const cookie = new Cookies();

const initialState = {
  isLogin: cookie.get('token') ? true : false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const selectLogin = (state: { isLogin: boolean }) => state.isLogin;

export const { login, logout } = loginSlice.actions;
