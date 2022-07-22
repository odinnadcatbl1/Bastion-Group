import { ICartProductItem } from "../../types/types";

export enum CartProductActionTypes {
    ADD_TO_CART = "ADD_TO_CART",
    DELETE_FROM_CART = "DELETE_FROM_CART",
    SET_CART_PRODUCT_COUNT = "SET_CART_PRODUCT_COUNT",
    RESET_ALL_CART = "RESET_ALL_CART",
}

interface AddToCartAction {
    type: CartProductActionTypes.ADD_TO_CART;
    payload: ICartProductItem;
}

interface DeleteFromCartAction {
    type: CartProductActionTypes.DELETE_FROM_CART;
    payload: string;
}

interface SetCartProductCountAction {
    type: CartProductActionTypes.SET_CART_PRODUCT_COUNT;
    payload: [string, number];
}

interface ResetAllCartAction {
    type: CartProductActionTypes.RESET_ALL_CART;
}

export type CartAction =
    | AddToCartAction
    | DeleteFromCartAction
    | SetCartProductCountAction
    | ResetAllCartAction;

const initialState: ICartProductItem[] = [
    {
        id: "1",
        type: "second",
        name: "Опора тавровая хомутовая ТХ",
        price: 500,
        gost: "ГОСТ 11",
        count: 5,
    },
    {
        id: "2",
        type: "two",
        name: "Опора тавровая хомутовая ДВА",
        price: 123,
        gost: "ГОСТ 22",
        count: 2,
    },
];

export const cartReducer = (state = initialState, action: CartAction) => {
    switch (action.type) {
        case CartProductActionTypes.ADD_TO_CART:
            const cartProducts = [...state];
            cartProducts.push(action.payload);
            return cartProducts;

        case CartProductActionTypes.DELETE_FROM_CART:
            const newCartProducts = state.filter((cartProduct) => {
                return cartProduct.id !== action.payload;
            });
            return newCartProducts;

        case CartProductActionTypes.SET_CART_PRODUCT_COUNT:
            const newState = state.map((cartProduct) => {
                return cartProduct.id === action.payload[0]
                    ? (cartProduct.count = action.payload[1])
                    : cartProduct;
            });
            return newState;

        case CartProductActionTypes.RESET_ALL_CART:
            return [];
        default:
            return state;
    }
};
