import { ActionType } from "../action-types";
import { Action, PostState } from "../actions/index";

const initialState = [
    {
        userId: 0,
        id: 0,
        title: "",
        body: "",
    }
]

const DataReducer = (state: PostState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.FETCHDATA:
            return [...action.payload];
        case ActionType.DELETE:
            return [...action.payload];
        case ActionType.DELETE_LAST:
            return [...action.payload];
        case ActionType.POST:
            return [...action.payload];
        case ActionType.EDIT_POST:
            return [...action.payload];
        default:
            return state;
    }
}

export default DataReducer;