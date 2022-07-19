import { ButtonPropTypes } from "../../types/types";

import "./FormButton.scss";

const FormButton: React.FC<ButtonPropTypes> = ({ onClick, name, type }) => {
    return (
        <div className="button__wrapper">
            <button className="form__button" onClick={onClick} type={type}>
                {name}
            </button>
        </div>
    );
};

export default FormButton;
