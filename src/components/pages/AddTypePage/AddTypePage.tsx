import PageTitle from "../../PageTitle/PageTitle";
import FormInput from "../../FormInput/FormInput";
import FormButton from "../../FormButton/FormButton";

import "./AddTypePage.scss";

const AddTypePage: React.FC = () => {
    return (
        <div className="container">
            <PageTitle name={"Типы продуктов"} showFilter={false} />
            <div className="page__wrapper">
                <form action="/" className="form__wrapper">
                    <FormInput
                        placeholder="ID типа продукта"
                        id="form__input-1"
                        onChange={(e) => {
                            console.log(e);
                        }}
                    />
                    <FormInput
                        placeholder="Название типа продукта"
                        id="form__input-2"
                        onChange={(e) => {
                            console.log(e);
                        }}
                    />
                    <FormButton
                        name={"Добавить тип продукта"}
                        onClick={() => console.log("btn click")}
                    />
                </form>
            </div>
        </div>
    );
};

export default AddTypePage;
