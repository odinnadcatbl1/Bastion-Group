import PageTitle from "../../PageTitle/PageTitle";
import Sidebar from "../../Sidebar/Sidebar";
import ProductList from "../../ProductList/ProductList";
import Pagination from "../../Pagination/Pagination";
import Article from "../../Article/Article";

import "./Main.scss";

const MainPage: React.FC = () => {
    return (
        <div className="container">
            <PageTitle />
            <div className="content">
                <Sidebar />
                <ProductList />
            </div>
            <div className="main__footer">
                <div className="main__footer-sort">
                    Выводить по
                    <div className="main__footer-sort-item main__footer-sort-item--active ">
                        9
                    </div>
                    <div className="main__footer-sort-item ">15</div>
                    <div className="main__footer-sort-item ">21</div>
                </div>

                <Pagination />
            </div>

            <Article />
        </div>
    );
};

export default MainPage;
