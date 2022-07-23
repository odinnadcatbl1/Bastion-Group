import { ICartProductItem } from "../../types/types";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import {
    setCartProductCount,
    deleteFromCart,
} from "../../store/action-creators/cart";

import trashIcon from "../../assets/svg/trash.svg";
import "./CartProductItem.scss";
import React from "react";

const CartProductItem: React.FC<ICartProductItem> = ({
    id,
    name,
    price,
    gost,
    count,
}) => {
    const { cart, product } = useTypedSelector((state) => state);
    const dispatch = useDispatch();

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (+e.target.value !== 0) {
            dispatch(setCartProductCount([id, +e.target.value]));
        }
    };

    return (
        <div className="cart__product">
            <div className="cart__info-wrapper">
                <div className="cart__img-container">
                    <img
                        className="cart__img"
                        src="https://via.placeholder.com/120x120"
                        alt="product"
                    />
                </div>

                <div className="cart__product-info">
                    <div className="cart__product-gost">{gost}</div>
                    <div className="cart__product-name">{name}</div>
                    <div className="cart__product-price">{price}</div>
                </div>
            </div>

            <div className="cart__product-actions">
                <div className="cart__actions-count">
                    <button
                        className="cart__button"
                        id="add-btn"
                        onClick={() => {
                            dispatch(setCartProductCount([id, count + 1]));
                        }}
                    >
                        +
                    </button>
                    <input
                        type="text"
                        className="cart__input"
                        value={count}
                        onChange={onInputChange}
                    />
                    <button
                        className="cart__button"
                        id="del-btn"
                        onClick={() => {
                            dispatch(setCartProductCount([id, count - 1]));
                        }}
                    >
                        -
                    </button>
                </div>

                <div className="cart__price">{(count * price).toFixed(1)}</div>

                <button
                    className="cart__actions-delete"
                    onClick={() => {
                        dispatch(deleteFromCart(id));
                    }}
                >
                    <img src={trashIcon} alt="" />
                </button>
            </div>
        </div>
    );
};

export default CartProductItem;
