import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initialState: number = 0;

const PostDataReducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.FETCH_POST_TO_EDIT:
            return action.payload;
        default:
            return state;
    }
}

export default PostDataReducer;