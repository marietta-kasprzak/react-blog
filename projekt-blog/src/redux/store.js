import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import postsReducer from './postsRedux';

export const getAllPosts = (state) => state.posts;

const subreducers = {
  posts: postsReducer,
  postsCategory: postsReducer

}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;