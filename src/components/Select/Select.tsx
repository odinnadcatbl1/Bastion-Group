import { SelectPropTypes } from "../../types/types";
import "./Select.scss";

const Select: React.FC<SelectPropTypes> = ({
    title,
    onChange,
    options,
    value,
}) => {
    return (
        <div className="select__wrapper">
            <div className="select__title">{title}</div>
            <select onChange={onChange} className="select" value={value}>
                <option value="">Выберите тип</option>
                {options.map((option) => {
                    return (
                        <option key={option.id} id={option.id}>
                            {option.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Select;
