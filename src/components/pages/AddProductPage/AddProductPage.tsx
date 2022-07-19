import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { addNewType } from "../../../store/action-creators/type";
import { TypeState } from "../../../types/types";

import PageTitle from "../../PageTitle/PageTitle";
import FormInput from "../../FormInput/FormInput";
import Select from "../../Select/Select";
import FormButton from "../../FormButton/FormButton";

import "./AddProductPage.scss";

const AddProductPage: React.FC = () => {
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

            console.log(type);
        }
    };

    return (
        <div className="container">
            <PageTitle name={"Добавление продуктов"} showFilter={false} />
            <div className="page__wrapper">
                <form className="form__wrapper" onSubmit={onAddTypeSubmit}>
                    <FormInput
                        placeholder="ID продукта"
                        id="form__input-1"
                        onChange={onIdInputChange}
                        value={typeId}
                        title={"ID может быть только числом"}
                    />
                    <FormInput
                        placeholder="Название продукта"
                        id="form__input-2"
                        onChange={onTypeInputChange}
                        value={typeName}
                        title={"Это поле не должно быть пустым"}
                    />

                    <Select />

                    <FormInput
                        placeholder="Цена продукта"
                        id="form__input-3"
                        onChange={onTypeInputChange}
                        value={typeName}
                        title={"Это поле не должно быть пустым"}
                    />

                    <FormInput
                        placeholder="ГОСТ продукта"
                        id="form__input-4"
                        onChange={onTypeInputChange}
                        value={typeName}
                        title={"Это поле не должно быть пустым"}
                    />

                    <FormButton name={"Добавить продукт"} type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProductPage;
