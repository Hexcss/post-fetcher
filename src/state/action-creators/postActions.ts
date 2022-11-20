import { IPost } from "./../actions/index";
import axios from "axios";
import { Dispatch } from "redux";

import { ActionType } from "../action-types";
import { Action, PostState } from "../actions";
import { store } from "../store";

export const fetchData = () => {
  return async (dispatch: Dispatch<Action>) => {
    const { data } = await axios.get<PostState>(
      "https://jsonplaceholder.typicode.com/posts?_limit=6"
    );
    dispatch({
      type: ActionType.FETCHDATA,
      payload: data,
    });
  };
};

export const deletePost = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    const { data } = store.getState();
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    const updatedPosts: PostState = data.filter((post) => post.id !== id);
    dispatch({
      type: ActionType.DELETE,
      payload: updatedPosts,
    });
  };
};

export const deleteLastPost = () => {
  return async (dispatch: Dispatch<Action>) => {
    const { data } = store.getState();
    const lastPost = data.at(-1);
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${lastPost?.id}`)
    const updatedPosts: PostState = data.filter((post) => post.id !== lastPost?.id);
    dispatch({
      type: ActionType.DELETE_LAST,
      payload: updatedPosts,
    });
  }
}

export const addPost = (newPost: IPost) => {
  return async (dispatch: Dispatch<Action>) => {
    const { data } = store.getState();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    const updatedPosts: PostState = data.concat(newPost);
    dispatch({
      type: ActionType.POST,
      payload: updatedPosts,
    })
  };
};

export const fetchPostToEdit = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_POST_TO_EDIT,
      payload: id,
    })
  }
}

export const editPost = (id: number, editedPost: IPost) => {
  return async (dispatch: Dispatch<Action>) => {
    const { data } = store.getState();
    axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, { id, ...editedPost });
    const postIndex: number = data.findIndex(post => post.id === id);
    if (postIndex === -1) {
      return;
    }
    const updatedPost: IPost = { ...data[postIndex], ...editedPost };
    const updatedPosts: PostState = [
      ...data.slice(0, postIndex),
      updatedPost,
      ...data.slice(postIndex + 1),
    ]
    dispatch({
      type: ActionType.EDIT_POST,
      payload: updatedPosts,
    })
  }
}
