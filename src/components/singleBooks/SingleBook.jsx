/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SingleBook.css";

const SingleBook = ({ token }) => {
    const { id } = useParams();
    const [bookData, setBookData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();
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
        // Update isLoggedIn based on token
        setIsLoggedIn(token !== null && token !== undefined);
    }, [id, token]);

    const handleCheckout = async () => {
        if (!isLoggedIn) {
            navigate("/login");
            return;
        }
        try {
            const response = await fetch(
                `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`, // Include token for authentication
                    },
                    body: JSON.stringify({ bookId: id, available: false }),
                }
            );
            if (response.ok) {
                alert("Book checked out successfully!");
            } else {
                alert("Checkout failed");
            }
        } catch (error) {
            console.error("Error during checkout:", error);
        }
    };

    return (
        <div className="single_book_container">
            {bookData ? (
                <div className="single_book">
                    <img src={bookData.coverimage} alt={bookData.title} />
                    <div className="book_info">
                        <h2>{bookData.title}</h2>
                        <p className="book_author">
                            <b>Author: </b> {bookData.author}
                        </p>

                        <p className="book_description">
                            <b>Description: </b> {bookData.description}
                        </p>
                        <p className="book_ratings">
                            <b>Ratings: </b> ⭐️⭐️⭐️⭐️ 4.5 (500)
                        </p>
                        {isLoggedIn && (
                            <button
                                onClick={handleCheckout}
                                className="checkout-btn"
                            >
                                Checkout
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default SingleBook;
