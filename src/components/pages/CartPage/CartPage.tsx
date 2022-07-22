import PageTitle from "../../PageTitle/PageTitle";
import CartProductItem from "../../CartProductItem/CartProductItem";
import CartForm from "../../CartForm/CartForm";

import trashIcon from "../../../assets/svg/trash.svg";
import warningIcon from "../../../assets/svg/warning.svg";
import "./CartPage.scss";

const CartPage: React.FC = () => {
    return (
        <div className="container">
            <PageTitle name={"Корзина"} showFilter={false} />
            <div className="cart__page-wrapper">
                <div className="cart__page-left">
                    <div className="cart__warning">
                        <img src={warningIcon} alt="warning" />
                        Извините, но указанное ранее количество товара
                        недоступно. Установлено ближайшее доступное значение.
                    </div>
                    <div className="cart__product-list">
                        <CartProductItem
                            id={"1"}
                            name={"Опора подвижная ОПБ2"}
                            price={849.8}
                            count={3}
                            gost={"ГОСТ 14911-82"}
                            type={"Тип"}
                        />
                    </div>
                    <div className="cart__reset-wrapper">
                        <button className="cart__reset-btn">
                            <img src={trashIcon} alt="trash" />
                            Очистить корзину
                        </button>
                    </div>
                </div>
                <div className="cart__page-right">
                    <div className="sidebar__title sidebar__title--cart">
                        Заказ
                    </div>

                    <CartForm />
                </div>
            </div>
        </div>
    );
};

export default CartPage;
