import { Dispatch } from "redux";

import { ActionType } from "../action-types";
import { Action } from "../actions";

export const openForm = (open: boolean) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.OPEN_FORM,
            payload: open,
        });
    };
};

export const openPopup = (open: boolean) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ 
            type: ActionType.OPEN_POPUP,
            payload: open,
        });
    };
};

export const openEditPopup = (open: boolean) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ 
            type: ActionType.OPEN_EDIT_POPUP,
            payload: open,
        });
    };
};

export const openSidebar = (open: boolean) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ 
            type: ActionType.OPEN_SIDEBAR,
            payload: open,
        });
    };
};

export const openSnackbar = (open: boolean) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.OPEN_SNACKBAR,
            payload: open,
        });
    };
};

export const openAlert = (open: boolean) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.OPEN_ALERT,
            payload: open,
        });
    };
};