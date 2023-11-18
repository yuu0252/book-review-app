import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 0,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducer: {
    nextPage: (state) => {
      state.page += 1;
    },
  },
});
