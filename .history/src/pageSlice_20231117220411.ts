import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 0,
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

export const selectPage = (state) => state.page.value;
