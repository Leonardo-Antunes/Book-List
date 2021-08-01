import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "Books",
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      const book = {
        id: new Date(),
        title: action.payload.title,
      };
      state.push(book);
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload.id);
    },
    updateBook: (state, action) => {
    },
  },
});

export const { addBook, deleteBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;
