import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";

import "./App.scss";

const App: React.FC = () => {
    const state = useSelector((state) => state);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<h1>ТИПЫ ТОВАРОВ</h1>} />
                <Route path="/s" element={<h1>ПРОДУКТЫ</h1>} />
            </Routes>
        </Router>
    );
};

export default App;
