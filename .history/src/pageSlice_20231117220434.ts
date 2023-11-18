import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.value += 1;
    },
    prevPage: (state) => {
      state.value -= 1;
    },
  },
});

export const selectPage = (state: object) => state.page.value;
