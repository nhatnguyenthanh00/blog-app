import { combineReducers } from "redux";
import posts from './post.js';
import modal from './modal.js';
export default combineReducers({
    posts,
    modal
})