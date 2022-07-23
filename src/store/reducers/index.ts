import { combineReducers } from "redux";
import { typeReducer } from "./typeReducer";
import { productReducer } from "./productReducer";
import { filterReducer } from "./filterReducer";
import { cartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
    type: typeReducer,
    product: productReducer,
    filter: filterReducer,
    cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
