import { CartInputPropTypes } from "../../types/types";

import "./CartFormInput.scss";

const CartFormInput: React.FC<CartInputPropTypes> = ({ img, label, id }) => {
    return (
        <div className="cart__input-wrapper">
            <img src={img} alt={label} />
            <input
                className="cart__form-input"
                type="text"
                id={id}
                placeholder=" "
            />
            <label className="cart__form-label" htmlFor={id}>
                {label}
            </label>
        </div>
    );
};

export default CartFormInput;
