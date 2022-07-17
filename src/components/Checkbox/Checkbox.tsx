import "./Checkbox.scss";

type PropTypes = {
    label: string;
    id: string;
};

const Checkbox: React.FC<PropTypes> = ({ label, id }) => {
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
