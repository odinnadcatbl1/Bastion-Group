import PageTitle from "../../PageTitle/PageTitle";
import Sidebar from "../../Sidebar/Sidebar";
import ProductList from "../../ProductList/ProductList";

import "./Main.scss";

const MainPage: React.FC = () => {
    return (
        <div className="container">
            <PageTitle />
            <div className="content">
                <Sidebar />
                <ProductList />
            </div>
        </div>
    );
};

export default MainPage;
