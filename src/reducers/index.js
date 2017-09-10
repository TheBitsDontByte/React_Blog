import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  //DUMMY LINE HERE ^^
  posts: PostsReducer,
  form: formReducer,
  
});

export default rootReducer;
