import { Routes, Route } from "react-router-dom";

import Navigations from "./components/nav/Navigations";
import Books from "./components/books/Books";
import Footer from "./components/footer/Footer";
import SingleBook from "./components/singleBooks/SingleBook";

function App() {
    // const [token, setToken] = useState(null);

    return (
        <>
            <Navigations />
            <Routes>
                <Route path="/" element={<Books />} />
                <Route path="/books/:id" element={<SingleBook />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
