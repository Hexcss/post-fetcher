import { ActionType } from "../action-types/index";

export interface IPost {
    userId?: number;
    id?: number;
    title: string;
    body: string;
}

export type PostState = IPost[]

interface PostAction {
    type: ActionType.FETCHDATA | ActionType.POST | ActionType.EDIT_POST | ActionType.DELETE | ActionType.DELETE_LAST;
    payload: PostState;
}

interface OpenAction {
    type: ActionType.OPEN_FORM | ActionType.OPEN_SIDEBAR | ActionType.OPEN_POPUP | ActionType.OPEN_SNACKBAR | ActionType.OPEN_ALERT | ActionType.OPEN_EDIT_POPUP;
    payload: boolean;
}

interface FetchEditPost {
    type: ActionType.FETCH_POST_TO_EDIT,
    payload: number,
}

export type Action = PostAction | OpenAction | FetchEditPost;