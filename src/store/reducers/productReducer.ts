import { IProductItem } from "../../types/types";

export enum ProductActionTypes {
    ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT",
}

interface AddNewProductAction {
    type: ProductActionTypes.ADD_NEW_PRODUCT;
    payload: IProductItem;
}

export type ProductAction = AddNewProductAction;

const initialState: IProductItem[] = [];

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
