import { createSlice } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';

const cookie = new Cookies();

const initialState = {
  isLogin: cookie.get('token') ? true : false;
};
