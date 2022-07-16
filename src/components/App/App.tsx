import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/Main/Main";

import Header from "../Header/Header";

import "./App.scss";

const App: React.FC = () => {
    const state = useSelector((state) => state);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/s" element={<h1>ПРОДУКТЫ</h1>} />
            </Routes>
        </Router>
    );
};

export default App;
