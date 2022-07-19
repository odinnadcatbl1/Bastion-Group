import { idText } from "typescript";
import "./Select.scss";

const Select: React.FC = ({}) => {
    const title = "Выберите тип продукта:";
    const options = [
        {
            name: "dsadsa",
            id: "2231",
        },

        {
            name: "dsadd",
            id: "21",
        },
    ];

    return (
        <div className="select__wrapper">
            <div className="select__title">{title}</div>
            <select className="select">
                {options.map((option) => {
                    return (
                        <option
                            key={option.id}
                            id={option.id}
                            value={option.name}
                        >
                            {option.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Select;
