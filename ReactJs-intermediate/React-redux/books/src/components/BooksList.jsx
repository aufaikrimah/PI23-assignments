import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
    setBooks,
    addToFavorites,
    removeFromFavorites,
    setSelectedBook,
} from "../redux/slice/bookSlice";
import { Link } from "react-router-dom";

function BooksList() {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.list);
    const favorites = useSelector((state) => state.books.favorites);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(' https://www.googleapis.com/books/v1/volumes?q=language:id');
                const data = await response.json();
                dispatch(setBooks(data.items));
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        };

        fetchData();
    }, [dispatch]);

    const handleAddToFavorite = (book) => {
        dispatch(addToFavorites(book));
    };

    const handleRemoveFromFavorites = (book) => {
        dispatch(removeFromFavorites(book));
    };

    const handleShowDetails = (book) => {
        dispatch(setSelectedBook(book));
    };

    const isFavorite = (book) => favorites.some((fav) => fav.id === book.id);

    return (
        <>
            <h1 className="my-6 text-center font-bold text-2xl">Book List</h1>
            <div className="flex flex-wrap">
                {books.map((book) => (

                    <div key={book.id}

                        className="flex flex-col w-24 h-160 shadow-lg rounded-lg mx-2 my-3 py-6 px-6">

                        <Link to={`/book/${book.id}`}>
                            <div className="" onClick={() => handleShowDetails(book)}>
                                <img src={book.volumeInfo.imageLinks.thumbnail} className="" />
                                <p className="font-bold">{book.volumeInfo.title}</p>
                            </div>
                        </Link>
                        <div className="flex justify-end mb-0 mt-auto ">
                            <button
                                onClick={() => (isFavorite(book) ? handleRemoveFromFavorites(book) : handleAddToFavorite(book))}
                                style={{ backgroundColor: isFavorite(book) ? 'yellow' : 'white' }}
                                className="py-2 px-2 shadow-lg">Fav</button>
                        </div>

                    </div>

                ))}
            </div>
        </>
    )
}

export default BooksList;