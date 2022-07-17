import "./ButtonCheckbox.scss";
import { CheckboxPropTypes } from "../../types/types";

const ButtonCheckbox: React.FC<CheckboxPropTypes> = ({ label, id }) => {
    return (
        <div className="button-checkbox">
            <input type="checkbox" className="button-checkbox__input" id={id} />
            <label htmlFor={id} className="button-checkbox__label">
                {label}
            </label>
        </div>
    );
};

export default ButtonCheckbox;
