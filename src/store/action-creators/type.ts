import { TypeState } from "../../types/types";
import { TypeActionTypes } from "../reducers/typeReducer";

export const addNewType = (type: TypeState) => ({
    type: TypeActionTypes.ADD_NEW_TYPE,
    payload: type,
});

export const changeTypeCheck = (id: string) => ({
    type: TypeActionTypes.CHANGE_TYPE_CHECK,
    payload: id,
});
