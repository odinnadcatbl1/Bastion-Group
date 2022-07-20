import { combineReducers } from "redux";
import { typeReducer } from "./typeReducer";
import { productReducer } from "./productReducer";
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers({
    type: typeReducer,
    product: productReducer,
    filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
