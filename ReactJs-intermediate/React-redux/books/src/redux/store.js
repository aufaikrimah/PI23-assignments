import { configureStore } from "@reduxjs/toolkit";
import books from "./slice/bookSlice";

const store = configureStore({
    reducer: {
        books,
    },
});

export default store;