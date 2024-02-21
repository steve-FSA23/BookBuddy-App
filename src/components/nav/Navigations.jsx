/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import "./Navigations.css";
import { Link } from "react-router-dom";
import bookLogo from "../../assets/books.png";
const Navigations = () => {
    return (
        <nav>
            <Link to="/">
                <h3>
                    <img id="logo-image" src={bookLogo} />
                    Library App
                </h3>
            </Link>
            <ul>
                <Link to="/account">
                    <li>Account</li>
                </Link>
                <Link to="/">
                    <li>Books</li>
                </Link>
            </ul>

            <div className="profile_container">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navigations;
