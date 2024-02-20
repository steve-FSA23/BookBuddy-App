/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import { useEffect, useState } from "react";
import "./Books.css";
import { Link } from "react-router-dom";

// import { bookDummyData } from "../../data";

const Books = () => {
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await fetch(
                    "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books"
                );
                const result = await response.json();
                setBookData(result.books);
            } catch (error) {
                console.error(error);
            }
        }
        fetchBooks();
    }, []);

    return (
        <div className="book_container">
            {bookData.map((book) => (
                <div key={book.id} className="single_book_container">
                    <img
                        src={book.coverimage}
                        alt={book.title}
                        className="book_img"
                    />
                    <h3>{book.title}</h3>
                    <p>By: {book.author}</p>
                    <Link to={`/books/${book.id}`}>
                        <button>View Book</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Books;
