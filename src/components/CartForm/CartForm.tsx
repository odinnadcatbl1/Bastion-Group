import "./CartForm.scss";
import CartFormInput from "../CartFormInput/CartFormInput";

import userIcon from "../../assets/svg/user.svg";
import phoneIcon from "../../assets/svg/phone.svg";
import emailIcon from "../../assets/svg/email.svg";
import caseIcon from "../../assets/svg/briefcase.svg";

const CartForm: React.FC = () => {
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

    return (
        <div className="cart__form-wrapper">
            <div className="cart__form-title">Контактная информация</div>
            <form className="cart__form">
                {inputs.map((input) => {
                    return (
                        <CartFormInput
                            id={input.id}
                            img={input.img}
                            label={input.label}
                        />
                    );
                })}
            </form>
        </div>
    );
};

export default CartForm;
