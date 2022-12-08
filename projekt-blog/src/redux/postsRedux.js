//selectors

import shortid from "shortid";

export const getPostById = ({ posts }, postId) => posts.find((post) => post.id === postId);
export const getPostsAllApartFromSelected = ({ posts }, postId) =>posts.filter((post) => post.id !== postId);
export const getSingleCategory = ({posts}, categoryId) => posts.filter((post) => post.category === categoryId);
// actions
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');
const CATEGORY_POST = createActionName('CATEGORY_POST');

export const deletePost = (payload) => ({type: DELETE_POST,payload});
export const addPost = payload => ({ type: ADD_POST, payload });
export const editPost = payload => ({ type: EDIT_POST, payload });
export const categoryPost = payload => ({type: CATEGORY_POST, payload});

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      return statePart.filter(post => post.id !== action.payload);
    case ADD_POST:
      return [...statePart, {id: shortid(), ...action.payload,}];
    case EDIT_POST:
      return statePart.map((post) => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
    default:
      return statePart;
  };
};

export default postsReducer;