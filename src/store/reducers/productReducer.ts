import { IProductItem } from "../../types/types";

export enum ProductActionTypes {
    ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT",
}

interface AddNewProductAction {
    type: ProductActionTypes.ADD_NEW_PRODUCT;
    payload: IProductItem;
}

export type ProductAction = AddNewProductAction;

const initialState: IProductItem[] = [
    {
        id: "1",
        type: "second",
        name: "Опора тавровая хомутовая ТХ",
        price: 500,
        gost: "ГОСТ 11",
    },
    {
        id: "2",
        type: "two",
        name: "Опора тавровая хомутовая ДВА",
        price: 123,
        gost: "ГОСТ 22",
    },
    {
        id: "3",
        type: "dsa",
        name: "Опора тавровая хомутовая ТРИ",
        price: 17000,
        gost: "ГОСТ 33",
    },
    {
        id: "4",
        type: "dsa",
        name: "Опора тавровая хомутовая ТРИ",
        price: 4323,
        gost: "ГОСТ 33",
    },

    {
        id: "5",
        type: "dsa",
        name: "Опора тавровая хомутовая ТРИ",
        price: 4323,
        gost: "ГОСТ 55",
    },
];

export const productReducer = (state = initialState, action: ProductAction) => {
    switch (action.type) {
        case ProductActionTypes.ADD_NEW_PRODUCT:
            const products = [...state];
            products.push(action.payload);
            return products;

        default:
            return state;
    }
};
