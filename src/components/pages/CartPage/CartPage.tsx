import PageTitle from "../../PageTitle/PageTitle";
import "./CartPage.scss";

const CartPage: React.FC = () => {
    return (
        <div className="container">
            <PageTitle name={"Корзина"} showFilter={false} />
        </div>
    );
};

export default CartPage;
