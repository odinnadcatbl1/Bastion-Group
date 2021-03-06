import PageTitle from "../../PageTitle/PageTitle";
import Sidebar from "../../Sidebar/Sidebar";
import ProductList from "../../ProductList/ProductList";
import Pagination from "../../Pagination/Pagination";
import Article from "../../Article/Article";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IProductItem } from "../../../types/types";
import "./Main.scss";

const MainPage: React.FC = () => {
    const { product, filter } = useTypedSelector((state) => state);

    const filteredProducts: IProductItem[] = product.filter((product) => {
        if (
            product.price >= filter.price[0] &&
            product.price <= filter.price[1]
        ) {
            if (filter.gost.length === 0) {
                if (filter.type.length === 0) {
                    return true;
                } else if (filter.type.includes(product.type)) {
                    return true;
                }
            } else if (filter.gost.includes(product.gost)) {
                if (filter.type.length === 0) {
                    return true;
                } else if (filter.type.includes(product.type)) {
                    return true;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    });

    return (
        <div className="container">
            <PageTitle name={"Опоры трубопроводов"} showFilter={true} />
            <div className="content">
                <Sidebar />
                <ProductList filteredProducts={filteredProducts} />
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
