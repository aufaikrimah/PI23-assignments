import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../redux/slice/bookSlice";
import { Link } from "react-router-dom";

function BookDetail() {
    const dispatch = useDispatch();
    const selectedBook = useSelector((state) => state.books.selectedBook);
    const favorites = useSelector((state) => state.books.favorites);

    if (!selectedBook || !selectedBook.volumeInfo) {
        return <p>No book selected.</p>;
    }

    const isFavorite = favorites.some((fav) => fav.id === selectedBook.id);

    const handleRemoveFromFavorites = () => {
        dispatch(removeFromFavorites(selectedBook));
    };

    return (
        <>
            <Link to="/">x--Back to Book List</Link>
            <div className="flex flex-wrap">
                <div className="w-1/5" >
                    <img src={selectedBook.volumeInfo.imageLinks.thumbnail} className="py-12 px-12" />
                </div>

                <div className="w-4/5 py-6 space-y-2">
                    <h1 className="font-bold text-xl">Book Detail</h1>
                    <p className="font-bold text-lg">Title: {selectedBook.volumeInfo.title}</p>
                    <p>Author: {selectedBook.volumeInfo.authors && selectedBook.volumeInfo.authors.join(', ')}</p>
                    <p>Description: {selectedBook.volumeInfo.description || 'No description available.'}</p>
                    <p>Publisher: {selectedBook.volumeInfo.publisher || 'No publisher available'}</p>
                    <p>Published Date: {selectedBook.volumeInfo.publishedDate || 'No published date available'}</p>

                    <ul>
                        <p>Industry Identifiers:</p>
                        {selectedBook.volumeInfo.industryIdentifiers &&
                            selectedBook.volumeInfo.industryIdentifiers.map((identifier) => (
                                <li key={identifier.identifier}>
                                    Type: {identifier.type}, Identifier: {identifier.identifier}
                                </li>
                            ))}
                    </ul>
                    <button
                        onClick={handleRemoveFromFavorites}
                        style={{ backgroundColor: isFavorite ? 'yellow' : 'white' }}
                    >
                        {isFavorite ? 'Remove from Favorites' : 'Not Favorites'}
                    </button>
                </div>
            </div>

        </>
    );
};

export default BookDetail;