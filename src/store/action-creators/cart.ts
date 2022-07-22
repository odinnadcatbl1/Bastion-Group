import { ICartProductItem } from "../../types/types";
import { CartProductActionTypes } from "../reducers/cartReducer";

export const addToCart = (product: ICartProductItem) => ({
    type: CartProductActionTypes.ADD_TO_CART,
    payload: product,
});

export const deleteFromCart = (id: string) => ({
    type: CartProductActionTypes.DELETE_FROM_CART,
    payload: id,
});

export const setCartProductCount = (payload: [string, number]) => ({
    type: CartProductActionTypes.SET_CART_PRODUCT_COUNT,
    payload: payload,
});

export const resetAllCart = () => ({
    type: CartProductActionTypes.RESET_ALL_CART,
});
