import { combineReducers } from "redux";
import DataReducer from "./DataReducer";
import OpenPopupReducer from "./OpenPopupReducer";
import OpenSnackbarReducer from "./OpenSnackbarReducer";
import OpenEditPopupReducer from "./OpenEditPopupReducer";
import PostDataReducer from "./PostDataReducer";

const reducers = combineReducers({
    data: DataReducer,
    isPopupOpen: OpenPopupReducer,
    isSnackBarOpen: OpenSnackbarReducer,
    isEditOpen: OpenEditPopupReducer,
    postToEditID: PostDataReducer,
});

export default reducers;
export type State = ReturnType<typeof reducers>;