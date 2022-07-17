import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/Main/Main";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./App.scss";

const App: React.FC = () => {
    const state = useSelector((state) => state);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/a" element={<h1>Типы продуктов</h1>} />
                <Route path="/s" element={<h1>ПРОДУКТЫ</h1>} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
