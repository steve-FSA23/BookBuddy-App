import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="footer">
            <p>© Copyright 2024 BookBuddy Inc.</p>
            <div className="footer-links">
                <Link to="/account">Account</Link> |
                <Link to="/books">Books</Link> |<Link>Contact Us</Link>
            </div>
            <div className="footer-links">
                <Link to="https://www.instagram.com/">Instagram</Link> |
                <Link to="https://www.facebook.com/">Facebook</Link> |
                <Link to="https://twitter.com/">Twitter</Link>
            </div>
        </footer>
    );
};

export default Footer;
