import "./ButtonCheckbox.scss";
import { CheckboxPropTypes } from "../../types/types";

const ButtonCheckbox: React.FC<CheckboxPropTypes> = ({
    label,
    id,
    onChange,
    isChecked,
}) => {
    return (
        <div className="button-checkbox">
            <input
                type="checkbox"
                className="button-checkbox__input"
                id={id}
                onChange={onChange}
                checked={isChecked}
            />
            <label htmlFor={id} className="button-checkbox__label">
                {label}
            </label>
        </div>
    );
};

export default ButtonCheckbox;
