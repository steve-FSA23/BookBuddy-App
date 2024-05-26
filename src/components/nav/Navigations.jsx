/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import "./Navigations.css";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import bookLogo from "../../assets/books.png";
import { useState, useEffect, useRef } from "react";
const Navigations = ({ token, setToken }) => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
    const navbarRef = useRef(null);

    const handleSignOut = () => {
        setToken(null);
        alert("Signing out...");
    };

    const toggleNavbar = () => {
        setShowNavbar((prevState) => !prevState);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 900);
        if (window.innerWidth > 900) {
            setShowNavbar(false);
        }
    };

    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setShowNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <navbar ref={navbarRef}>
            <div className="container-menu">
                <Link to="/">
                    <h4 className="navbar-logo">
                        <img id="logo-image" src={bookLogo} alt="Book Logo" />
                        Library App
                    </h4>
                </Link>
                {isMobile && (
                    <IoMenu
                        size={32}
                        className="hamburger-menu"
                        onClick={toggleNavbar}
                    />
                )}
            </div>
            {(showNavbar || !isMobile) && (
                <ul>
                    <Link to="/account">
                        <li>Account</li>
                    </Link>
                    <Link to="/">
                        <li>Books</li>
                    </Link>
                    <div className="navbar-btn">
                        {token ? (
                            <button
                                onClick={handleSignOut}
                                className="signout-btn"
                            >
                                Sign Out
                            </button>
                        ) : (
                            <>
                                <Link to="/login" className="navbar-link">
                                    <button>Login</button>
                                </Link>
                                <Link to="/register" className="navbar-link">
                                    <button className="register_btn">
                                        Register
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </ul>
            )}
        </navbar>
    );
};

export default Navigations;
