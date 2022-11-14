import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initialState: boolean = false;

const OpenSnackbarReducer = (state: boolean = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.OPEN_SNACKBAR:
            return action.payload;
        default:
            return state;
    }
}

export default OpenSnackbarReducer;