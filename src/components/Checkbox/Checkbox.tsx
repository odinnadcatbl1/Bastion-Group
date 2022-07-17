import "./Checkbox.scss";
import { CheckboxPropTypes } from "../../types/types";

const Checkbox: React.FC<CheckboxPropTypes> = ({ label, id }) => {
    return (
        <div className="checkbox">
            <input type="checkbox" className="checkbox__input" id={id} />
            <label htmlFor={id} className="checkbox__label">
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
