import { combineReducers } from "redux";
import DataReducer from "./DataReducer";
import OpenFormReducer from "./OpenFormReducer";
import OpenPopupReducer from "./OpenPopupReducer";
import OpenSidebarReducer from "./OpenSidebarReducer";
import OpenSnackbarReducer from "./OpenSnackbarReducer";
import OpenAlertReducer from "./OpenAlertReducer";
import OpenEditPopupReducer from "./OpenEditPopupReducer";
import PostDataReducer from "./PostDataReducer";

const reducers = combineReducers({
    data: DataReducer,
    isFormOpen: OpenFormReducer,
    isPopupOpen: OpenPopupReducer,
    isSidebarOpen: OpenSidebarReducer,
    isSnackBarOpen: OpenSnackbarReducer,
    isAlertOpen: OpenAlertReducer,
    isEditOpen: OpenEditPopupReducer,
    postToEditID: PostDataReducer,
});

export default reducers;
export type State = ReturnType<typeof reducers>;