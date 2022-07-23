import "./CartForm.scss";
import userIcon from "../../assets/svg/user.svg";
import phoneIcon from "../../assets/svg/phone.svg";
import emailIcon from "../../assets/svg/email.svg";
import caseIcon from "../../assets/svg/briefcase.svg";
import cartIcon from "../../assets/svg/cart-white-2.svg";
import docIcon from "../../assets/svg/file-text.svg";
import downloadIcon from "../../assets/svg/download.svg";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useState } from "react";
import { useInput } from "../../hooks/useInput";

const CartForm: React.FC = () => {
    const cart = useTypedSelector((state) => state.cart);
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phone: "",
        organization: "",
    });

    const name = useInput("", { isEmpty: true, minLength: 5, isString: false });
    const phone = useInput("", { isEmpty: true, isPhoneError: false });
    const email = useInput("", { isEmpty: true, isEmailError: false });
    const organization = useInput("", { isEmpty: true, minLength: 5 });

    let cartSum = 0;

    cart.forEach((e) => {
        cartSum = cartSum + e.price * e.count;
    });

    const onCheckout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setUserInfo({
            name: name.value,
            email: email.value,
            phone: phone.value,
            organization: organization.value,
        });
        console.log(cart, userInfo);
    };

    return (
        <div className="cart__form-wrapper">
            <div className="cart__form-title">Контактная информация</div>
            <form className="cart__form">
                <div
                    className={`cart__input-wrapper cart__input-wrapper${
                        name.isDirty && (name.minLengthError || name.isEmpty)
                            ? "--error"
                            : ""
                    }`}
                >
                    <img src={userIcon} alt="" />
                    <input
                        className="cart__form-input"
                        type="text"
                        id="user-input"
                        placeholder=" "
                        value={name.value}
                        onChange={(e) => name.onChange(e)}
                        onBlur={name.onBLur}
                    />
                    <label className="cart__form-label" htmlFor="user-input">
                        ФИО
                    </label>
                </div>

                <div
                    className={`cart__input-wrapper cart__input-wrapper${
                        phone.isDirty && (phone.isEmpty || phone.isPhoneError)
                            ? "--error"
                            : ""
                    }`}
                >
                    <img src={phoneIcon} alt="" />
                    <input
                        className="cart__form-input"
                        type="text"
                        id="phone-input"
                        placeholder=" "
                        value={phone.value}
                        onChange={(e) => phone.onChange(e)}
                        onBlur={phone.onBLur}
                    />
                    <label className="cart__form-label" htmlFor="phone-input">
                        Контактный телефон
                    </label>
                </div>

                <div
                    className={`cart__input-wrapper cart__input-wrapper${
                        email.isDirty && (email.isEmpty || email.isEmailError)
                            ? "--error"
                            : ""
                    }`}
                >
                    <img src={emailIcon} alt="" />
                    <input
                        className="cart__form-input"
                        type="email"
                        id="email-input"
                        placeholder=" "
                        value={email.value}
                        onChange={(e) => email.onChange(e)}
                        onBlur={email.onBLur}
                    />
                    <label className="cart__form-label" htmlFor="email-input">
                        Email
                    </label>
                </div>

                <div
                    className={`cart__input-wrapper cart__input-wrapper${
                        organization.isDirty &&
                        (organization.minLengthError || organization.isEmpty)
                            ? "--error"
                            : ""
                    }`}
                >
                    <img src={caseIcon} alt="" />
                    <input
                        className="cart__form-input"
                        type="text"
                        id="case-input"
                        placeholder=" "
                        value={organization.value}
                        onChange={(e) => organization.onChange(e)}
                        onBlur={organization.onBLur}
                    />
                    <label className="cart__form-label" htmlFor="case-input">
                        Организация / ИНН
                    </label>
                </div>

                <div className="form__sum-wrapper">
                    <div className="form__sum-title">Итого</div>
                    <div className="form__sum">{cartSum} руб.</div>
                </div>
                <div className="cart__form-actions">
                    <button
                        className="cart__btn cart__btn--buy"
                        disabled={
                            !name.inputValid ||
                            !phone.inputValid ||
                            !email.inputValid ||
                            !organization.inputValid
                        }
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
