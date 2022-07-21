import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/Main/Main";
import AddTypePage from "../pages/AddTypePage/AddTypePage";
import AddProductPage from "../pages/AddProductPage/AddProductPage";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./App.scss";

const App: React.FC = () => {
    return (
        <div className="app">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/add-type" element={<AddTypePage />} />
                    <Route path="/add-product" element={<AddProductPage />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
};

export default App;
