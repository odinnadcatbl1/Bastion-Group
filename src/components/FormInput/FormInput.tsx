import { InputPropTypes } from "../../types/types";
import { ValidationTypes } from "../../types/types";

import "./FormInput.scss";

const FormInput: React.FC<InputPropTypes> = ({
    onChange,
    placeholder,
    id,
    value,
    pattern,
    title,
    validation,
}) => {
    let type = "text";

    if (validation == ValidationTypes.email) {
        type = "email";
    } else if (validation == ValidationTypes.phone) {
        pattern = "(7|8|9)d{10|11}";
    }

    return (
        <div className="input__wrapper">
            <input
                className="form__input"
                onChange={onChange}
                placeholder={placeholder}
                id={id}
                value={value}
                title={title}
                type={type}
                pattern={pattern}
            />
        </div>
    );
};

export default FormInput;
