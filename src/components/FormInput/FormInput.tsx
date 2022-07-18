import { InputPropTypes } from "../../types/types";

import "./FormInput.scss";

const FormInput: React.FC<InputPropTypes> = ({ onChange, placeholder, id }) => {
    return (
        <div className="input__wrapper">
            <input
                className="form__input"
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                id={id}
            />
        </div>
    );
};

export default FormInput;
