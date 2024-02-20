/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./SingleBook.css";

const SingleBook = () => {
    const { id } = useParams();
    const [bookData, setBookData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        async function fetchBook() {
            try {
                const response = await fetch(
                    `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`
                );
                const result = await response.json();
                setBookData(result.book);
            } catch (error) {
                console.error("Error fetching book:", error);
            }
        }
        fetchBook();
        setIsLoggedIn(true); // Change to false if user is not logged in
    }, [id]);

    const handleCheckout = () => {
        // Logic for checkout
        console.log("Checkout button clicked");
    };

    return (
        <div className="single_book_container">
            {bookData ? (
                <div>
                    <img src={bookData.coverimage} alt={bookData.title} />
                    <h2>{bookData.title}</h2>
                    <p>Author: {bookData.author}</p>

                    <p>Description: {bookData.description}</p>
                    <p>Ratings: ⭐️⭐️⭐️⭐️ 4.5 (500)</p>
                    {isLoggedIn && (
                        <button onClick={handleCheckout}>Checkout</button>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default SingleBook;
