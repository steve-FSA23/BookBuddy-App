/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Account = ({ token }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await fetch(
                    "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me",
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const result = await response.json();
                setUserData(result);
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchUserData();
    }, [token]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {userData ? (
                <div>
                    <h2>Account Details</h2>
                    <p>Name: {userData.firstname}</p>
                    <p>Last Name: {userData.lastname}</p>
                    <p>Email: {userData.email}</p>
                    <h3>Books Checked Out:</h3>
                    {userData.books.length > 0 ? (
                        <ul>
                            {userData.books.map((book) => (
                                <li key={book.id}>{book.title}</li>
                            ))}
                            <div className="btn-container">
                                <button onClick={handleEdit}>Edit</button>
                                <button onClick={handleDelete}>Delete</button>
                            </div>
                        </ul>
                    ) : (
                        <p>No books checked out</p>
                    )}
                </div>
            ) : (
                <div>
                    <h4>
                        Please log in or create an account to view account
                        details.
                    </h4>
                    <div>
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                        <Link to="/register">
                            <button>Register</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Account;
