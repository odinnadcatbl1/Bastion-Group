import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { addNewType } from "../../../store/action-creators/type";
import { TypeState } from "../../../types/types";

import PageTitle from "../../PageTitle/PageTitle";
import FormInput from "../../FormInput/FormInput";
import FormButton from "../../FormButton/FormButton";

import "./AddTypePage.scss";

const AddTypePage: React.FC = () => {
    const type = useTypedSelector((state) => state.type);
    const dispatch = useDispatch();

    const [typeId, setTypeId] = useState("");
    const [typeName, setTypeName] = useState("");

    const onIdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (+e.target.value) {
            setTypeId(e.target.value);
        } else if (e.target.value == "") {
            setTypeId("");
        }
    };

    const onTypeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTypeName(e.target.value);
    };

    const onAddTypeSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (typeId !== "" && typeName !== "") {
            const newType: TypeState = {
                name: typeName,
                id: typeId,
                isChecked: false,
            };

            dispatch(addNewType(newType));
            setTypeId("");
            setTypeName("");
        }
    };

    return (
        <div className="container">
            <PageTitle name={"Типы продуктов"} showFilter={false} />
            <div className="page__wrapper">
                <form className="form__wrapper" onSubmit={onAddTypeSubmit}>
                    <FormInput
                        placeholder="ID типа продукта"
                        id="form__input-1"
                        onChange={onIdInputChange}
                        value={typeId}
                        title={"ID может быть только числом"}
                    />
                    <FormInput
                        placeholder="Название типа продукта"
                        id="form__input-2"
                        onChange={onTypeInputChange}
                        value={typeName}
                        title={"Это поле не должно быть пустым"}
                    />
                    <FormButton name={"Добавить тип продукта"} type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddTypePage;
