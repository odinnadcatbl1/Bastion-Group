import { TypeState } from "../../types/types";

export enum TypeActionTypes {
    ADD_NEW_TYPE = "ADD_NEW_TYPE",
    CHANGE_TYPE_CHECK = "CHANGE_TYPE_CHECK",
}

interface ChangeTypeCheckAction {
    type: TypeActionTypes.CHANGE_TYPE_CHECK;
    payload: string;
}

interface AddNewTypeAction {
    type: TypeActionTypes.ADD_NEW_TYPE;
    payload: TypeState;
}

export type TypeAction = ChangeTypeCheckAction | AddNewTypeAction;

const initialState: TypeState[] = [];

const checkType = (state: TypeState[], id: string) => {
    const newState = state.map((type) => {
        if (type.id === id) {
            const newType: TypeState = {
                id: type.id,
                name: type.name,
                isChecked: !type.isChecked,
            };
            return newType;
        } else {
            return type;
        }
    });
    return newState;
};

export const typeReducer = (state = initialState, action: TypeAction) => {
    switch (action.type) {
        case TypeActionTypes.ADD_NEW_TYPE:
            const types = [...state];
            types.push(action.payload);
            return types;

        case TypeActionTypes.CHANGE_TYPE_CHECK:
            return checkType(state, action.payload);
        default:
            return state;
    }
};
