import { IProductItem } from "../../types/types";
import { ProductActionTypes } from "../reducers/productReducer";

export const addNewProduct = (product: IProductItem) => ({
    type: ProductActionTypes.ADD_NEW_PRODUCT,
    payload: product,
});
