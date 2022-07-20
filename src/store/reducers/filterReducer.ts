import { FilterState } from "../../types/types";
import { IProductItem } from "../../types/types";

export enum FilterActionTypes {
    CHANGE_PRICE_FILTER = "CHANGE_PRICE_FILTER",
    ADD_GOST_FILTER = "ADD_GOST_FILTER",
    DELETE_GOST_FILTER = "DELETE_GOST_FILTER",
    ADD_TYPE_FILTER = "ADD_TYPE_FILTER",
    DELETE_TYPE_FILTER = "DELETE_TYPE_FILTER",
    RESET_ALL_FILTERS = "RESET_ALL_FILTERS",
}

interface ChangePriceFilterAction {
    type: FilterActionTypes.CHANGE_PRICE_FILTER;
    payload: [number, number];
}

interface AddGostFilterAction {
    type: FilterActionTypes.ADD_GOST_FILTER;
    payload: string;
}

interface DeleteGostFilterAction {
    type: FilterActionTypes.DELETE_GOST_FILTER;
    payload: string;
}

interface AddTypeFilterAction {
    type: FilterActionTypes.ADD_TYPE_FILTER;
    payload: string;
}

interface DeleteTypeFilterAction {
    type: FilterActionTypes.DELETE_TYPE_FILTER;
    payload: string;
}

interface DeleteAllFiltersAction {
    type: FilterActionTypes.RESET_ALL_FILTERS;
}

export type FilterAction =
    | DeleteGostFilterAction
    | AddGostFilterAction
    | ChangePriceFilterAction
    | DeleteAllFiltersAction
    | AddTypeFilterAction
    | DeleteTypeFilterAction;

const initialState: FilterState = {
    price: [0, 0],
    gost: [],
    type: [],
};

export const filterReducer = (
    state = initialState,
    action: FilterAction
): FilterState => {
    switch (action.type) {
        case FilterActionTypes.CHANGE_PRICE_FILTER:
            return { ...state, price: action.payload };

        case FilterActionTypes.ADD_GOST_FILTER:
            return { ...state, gost: [...state.gost, action.payload] };

        case FilterActionTypes.DELETE_GOST_FILTER:
            const newGost = state.gost.filter((gost) => {
                return gost !== action.payload;
            });
            return { ...state, gost: [...newGost] };

        case FilterActionTypes.ADD_TYPE_FILTER:
            return { ...state, type: [...state.type, action.payload] };

        case FilterActionTypes.DELETE_TYPE_FILTER:
            const newType = state.type.filter((type) => {
                return type !== action.payload;
            });
            return { ...state, type: [...newType] };

        case FilterActionTypes.RESET_ALL_FILTERS:
            return initialState;

        default:
            return state;
    }
};
