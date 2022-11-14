import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initialState: boolean = false;

const OpenPopupReducer = (state: boolean = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.OPEN_POPUP:
            return action.payload;
        default:
            return state;
    }
}

export default OpenPopupReducer;