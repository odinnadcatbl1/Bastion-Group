import PageTitle from "../../PageTitle/PageTitle";
import CartProductItem from "../../CartProductItem/CartProductItem";
import CartForm from "../../CartForm/CartForm";
import { resetAllCart } from "../../../store/action-creators/cart";

import trashIcon from "../../../assets/svg/trash.svg";
import warningIcon from "../../../assets/svg/warning.svg";
import "./CartPage.scss";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";

const CartPage: React.FC = () => {
    const { cart } = useTypedSelector((state) => state);
    const dispatch = useDispatch();

    if (!cart.length) {
        return (
            <div className="container">
                <PageTitle name={"Корзина"} showFilter={false} />
                <div className="cart__page-wrapper">
                    <div className="sidebar__title sidebar__title--cart">
                        Ваша корзина пуста...
                    </div>
                </div>
            </div>
        );
    }

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
                        {cart.map((cart) => {
                            return (
                                <CartProductItem
                                    key={cart.id}
                                    id={cart.id}
                                    name={cart.name}
                                    price={cart.price}
                                    count={cart.count}
                                    gost={cart.gost}
                                    type={cart.type}
                                />
                            );
                        })}
                    </div>
                    <div className="cart__reset-wrapper">
                        <button
                            className="cart__reset-btn"
                            onClick={() => {
                                dispatch(resetAllCart());
                            }}
                        >
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
