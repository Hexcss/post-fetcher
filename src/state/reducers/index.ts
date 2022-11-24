import { combineReducers } from "redux";
import DataReducer from "./DataReducer";
import PostDataReducer from "./PostDataReducer";

const reducers = combineReducers({
    data: DataReducer,
    postToEditID: PostDataReducer,
});

export default reducers;
export type State = ReturnType<typeof reducers>;