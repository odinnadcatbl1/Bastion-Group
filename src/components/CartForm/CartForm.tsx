import "./CartForm.scss";
import CartFormInput from "../CartFormInput/CartFormInput";

import userIcon from "../../assets/svg/user.svg";
import phoneIcon from "../../assets/svg/phone.svg";
import emailIcon from "../../assets/svg/email.svg";
import caseIcon from "../../assets/svg/briefcase.svg";
import cartIcon from "../../assets/svg/cart-white-2.svg";
import docIcon from "../../assets/svg/file-text.svg";
import downloadIcon from "../../assets/svg/download.svg";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import React, { useState } from "react";

const CartForm: React.FC = () => {
    const cart = useTypedSelector((state) => state.cart);
    const [userInfo, setUserInfo] = useState({});

    let cartSum = 0;

    cart.forEach((e) => {
        cartSum = cartSum + e.price * e.count;
    });

    const inputs = [
        {
            id: "user-input",
            img: userIcon,
            label: "ФИО",
        },
        {
            id: "phone-input",
            img: phoneIcon,
            label: "Контактный телефон",
        },
        {
            id: "email-input",
            img: emailIcon,
            label: "Email",
        },
        {
            id: "case-input",
            img: caseIcon,
            label: "Организация / ИНН",
        },
    ];

    const onCheckout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(cart, userInfo);
    };

    return (
        <div className="cart__form-wrapper">
            <div className="cart__form-title">Контактная информация</div>
            <form className="cart__form">
                {inputs.map((input) => {
                    return (
                        <CartFormInput
                            key={input.id}
                            id={input.id}
                            img={input.img}
                            label={input.label}
                        />
                    );
                })}

                <div className="form__sum-wrapper">
                    <div className="form__sum-title">Итого</div>
                    <div className="form__sum">{cartSum} руб.</div>
                </div>
                <div className="cart__form-actions">
                    <button
                        className="cart__btn cart__btn--buy"
                        onClick={onCheckout}
                    >
                        <img src={cartIcon} alt="" />
                        Оформить заказ
                    </button>
                    <button className="cart__btn cart__btn--offer">
                        <div className="offer__btn-wrapper">
                            <div className="offer__btn-doc">
                                <img src={docIcon} alt="" />
                            </div>
                            <div className="offer__btn-download">
                                <img src={downloadIcon} alt="" />
                            </div>
                            Коммерческое предложение
                        </div>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CartForm;
