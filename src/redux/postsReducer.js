import { v4 } from "uuid";
import { getCategoryTitle } from "./categoriesReducer";

//selectors
export const getPost = (state, id) => {
  const post = state.posts.find((post) => post.id == id);
  post.categoryName = getCategoryTitle(state, post.category);
  return post;
};

export const getPostsByCategory = (state, id) =>
  state.posts.filter((post) => post.category == id).map((post) => getPost(state, post.id));
export const getAllPosts = (state) => state.posts.map((post) => getPost(state, post.id));

// actions
const createActionName = (actionName) => `app/posts/${actionName}`;
const DELETE_POST = createActionName("DELETE_POST");
const ADD_POST = createActionName("ADD_POST");
const EDIT_POST = createActionName("EDIT_POST");

export const deletePost = (payload) => ({ type: DELETE_POST, payload });
export const addPost = (payload) => ({ type: ADD_POST, payload });
export const editPost = (payload) => ({ type: EDIT_POST, payload });

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      return [...statePart.filter((post) => post.id !== action.payload)];
    case ADD_POST:
      return [...statePart, { ...action.payload, id: v4() }];
    case EDIT_POST:
      return [...[...statePart].filter((post) => post.id !== action.payload.id), action.payload];
    default:
      return statePart;
  }
};

export default postsReducer;
