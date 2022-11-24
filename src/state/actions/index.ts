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

interface FetchEditPost {
    type: ActionType.FETCH_POST_TO_EDIT,
    payload: number,
}

export type Action = PostAction | FetchEditPost;