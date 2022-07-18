import { TypeState, TypeAction } from "../../types/types";

const ADD_NEW_TYPE = "ADD_NEW_TYPE";
const initialState: TypeState[] = [];

export const typeReducer = (
    state = initialState,
    action: TypeAction
): TypeState[] => {
    switch (action.type) {
        case ADD_NEW_TYPE:
            const types = { ...state };
            types.push(action.payload);
            return types;
        default:
            return state;
    }
};
