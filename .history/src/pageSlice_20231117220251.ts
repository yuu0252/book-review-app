import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 0,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
    prevPage: (state) => {
      state.page -= 1;
    },
  },
});
