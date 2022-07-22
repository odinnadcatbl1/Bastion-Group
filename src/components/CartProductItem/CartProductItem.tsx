import { ICartProductItem } from "../../types/types";
import { useState } from "react";

import trashIcon from "../../assets/svg/trash.svg";
import "./CartProductItem.scss";

const CartProductItem: React.FC<ICartProductItem> = ({
    name,
    price,
    gost,
    count,
}) => {
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
                        onClick={() => {}}
                    >
                        +
                    </button>
                    <input type="text" className="cart__input" value={2} />
                    <button
                        className="cart__button"
                        id="del-btn"
                        onClick={() => {}}
                    >
                        -
                    </button>
                </div>

                <div className="cart__price">{(count * price).toFixed(1)}</div>

                <button className="cart__actions-delete">
                    <img src={trashIcon} alt="" />
                </button>
            </div>
        </div>
    );
};

export default CartProductItem;
