import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
    name: 'books',
    initialState: {
        list: [],
        favorites: [],
        selectedBook: null,
    },
    reducers: {
        setBooks: (state, action) => {
            state.list = action.payload;
        },
        addToFavorites: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter((book) => book.id !== action.payload.id);
        },
        setSelectedBook: (state, action) => {
            state.selectedBook = action.payload;
        },
    }
});

export const { setBooks, addToFavorites, removeFromFavorites, setSelectedBook } = bookSlice.actions;
export default bookSlice.reducer;