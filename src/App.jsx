import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navigations from "./components/nav/Navigations";
import Books from "./components/books/Books";
import Footer from "./components/footer/Footer";
import SingleBook from "./components/singleBooks/SingleBook";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Account from "./components/account/Account";

function App() {
    const [token, setToken] = useState(null);

    return (
        <>
            <Navigations />
            <Routes>
                <Route path="/" element={<Books />} />
                <Route
                    path="/books/:id"
                    element={<SingleBook token={token} setToken={setToken} />}
                />
                <Route
                    path="/login"
                    element={<Login token={token} setToken={setToken} />}
                />
                <Route
                    path="/register"
                    element={<Register token={token} setToken={setToken} />}
                />
                <Route
                    path="/account"
                    element={<Account token={token} setToken={setToken} />}
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
