import { ButtonPropTypes } from "../../types/types";

import "./FormButton.scss";

const FormButton: React.FC<ButtonPropTypes> = ({ onClick, name }) => {
    return (
        <div className="button__wrapper">
            <button className="form__button" onClick={onClick}>
                {name}
            </button>
        </div>
    );
};

export default FormButton;
