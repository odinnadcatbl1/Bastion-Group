import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { addNewProduct } from "../../../store/action-creators/product";
import { IProductItem } from "../../../types/types";

import PageTitle from "../../PageTitle/PageTitle";
import FormInput from "../../FormInput/FormInput";
import Select from "../../Select/Select";
import FormButton from "../../FormButton/FormButton";

import "./AddProductPage.scss";

const AddProductPage: React.FC = () => {
    const { type } = useTypedSelector((state) => state);
    const dispatch = useDispatch();

    const options = type.map((type) => {
        return { id: type.id, name: type.name };
    });

    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [productType, setProductType] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productGost, setProductGost] = useState("");

    const onProductIdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (+e.target.value) {
            setProductId(e.target.value);
        } else if (e.target.value === "") {
            setProductId("");
        }
    };

    const onProductNameInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setProductName(e.target.value);
    };

    const onProductPriceInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (+e.target.value) {
            setProductPrice(e.target.value);
        } else if (e.target.value === "") {
            setProductPrice("");
        }
    };

    const onProductGostInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setProductGost(e.target.value);
    };

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProductType(e.target.value);
    };

    const onAddTypeSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (
            productId !== "" &&
            productName !== "" &&
            productGost !== "" &&
            productPrice !== "" &&
            productType !== ""
        ) {
            const newProduct: IProductItem = {
                name: productName,
                id: productId,
                type: productType,
                gost: productGost,
                price: +productPrice,
            };

            dispatch(addNewProduct(newProduct));
            setProductId("");
            setProductName("");
            setProductType("");
            setProductGost("");
            setProductPrice("");
        }
    };

    return (
        <div className="container">
            <PageTitle name={"???????????????????? ??????????????????"} showFilter={false} />
            <div className="page__wrapper">
                <form className="form__wrapper" onSubmit={onAddTypeSubmit}>
                    <FormInput
                        placeholder="ID ????????????????"
                        id="form__input-1"
                        onChange={onProductIdInputChange}
                        value={productId}
                        title={"ID ?????????? ???????? ???????????? ????????????"}
                    />
                    <FormInput
                        placeholder="???????????????? ????????????????"
                        id="form__input-2"
                        onChange={onProductNameInputChange}
                        value={productName}
                        title={"?????? ???????? ???? ???????????? ???????? ????????????"}
                    />

                    <Select
                        title={"???????????????? ?????? ????????????????:"}
                        onChange={onSelectChange}
                        options={options}
                        value={productType}
                    />

                    <FormInput
                        placeholder="???????? ????????????????"
                        id="form__input-3"
                        onChange={onProductPriceInputChange}
                        value={productPrice}
                        title={"?????? ???????? ???? ???????????? ???????? ????????????"}
                    />

                    <FormInput
                        placeholder="???????? ????????????????"
                        id="form__input-4"
                        onChange={onProductGostInputChange}
                        value={productGost}
                        title={"?????? ???????? ???? ???????????? ???????? ????????????"}
                    />

                    <FormButton name={"???????????????? ??????????????"} type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProductPage;
