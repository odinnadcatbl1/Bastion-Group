import { FilterActionTypes } from "../reducers/filterReducer";

export const changePriceFilter = (price: [string, string]) => ({
    type: FilterActionTypes.CHANGE_PRICE_FILTER,
    payload: price,
});

export const addGostFilter = (gost: string) => ({
    type: FilterActionTypes.ADD_GOST_FILTER,
    payload: gost,
});

export const deleteGostFilter = (gost: string) => ({
    type: FilterActionTypes.DELETE_GOST_FILTER,
    payload: gost,
});

export const addTypeFilter = (type: string) => ({
    type: FilterActionTypes.ADD_GOST_FILTER,
    payload: type,
});

export const deleteTypeFilter = (type: string) => ({
    type: FilterActionTypes.DELETE_GOST_FILTER,
    payload: type,
});

export const resetAllFilters = () => ({
    type: FilterActionTypes.RESET_ALL_FILTERS,
});
