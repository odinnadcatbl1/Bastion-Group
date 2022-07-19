import "./Checkbox.scss";
import { CheckboxPropTypes } from "../../types/types";

const Checkbox: React.FC<CheckboxPropTypes> = ({
    label,
    id,
    isChecked,
    onChange,
}) => {
    return (
        <div className="checkbox">
            <input
                type="checkbox"
                className="checkbox__input"
                id={id}
                checked={isChecked}
                onChange={onChange}
            />
            <label htmlFor={id} className="checkbox__label">
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
