/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import "./Navigations.css";
import { Link } from "react-router-dom";
import bookLogo from "../../assets/books.png";
const Navigations = ({ token, setToken }) => {
    const handleSignOut = () => {
        setToken(null);
        alert("Signing out...");
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <h3>
                    <img id="logo-image" src={bookLogo} alt="Book Logo" />
                    Library App
                </h3>
            </Link>
            <ul className="navbar-links">
                <Link to="/account">
                    <li>Account</li>
                </Link>
                <Link to="/">
                    <li>Books</li>
                </Link>
            </ul>

            <div className="navbar-btn">
                {token ? (
                    <button onClick={handleSignOut}>Sign Out</button>
                ) : (
                    <>
                        <Link to="/login" className="navbar-link">
                            <button>Login</button>
                        </Link>
                        <Link to="/register" className="navbar-link">
                            <button className="register_btn">Register</button>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navigations;
