import {INIT_STATE} from '../../constant'
import {getPosts,createPost, updatePost, getType} from '../actions'
export default function postReducers(state = INIT_STATE.posts, action){
    switch(action.type){
        case getType(getPosts.getPostRequest):
            return {
                ...state,
                isLoading: true
            }
        case getType(getPosts.getPostSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getPosts.getPostFailure):
            return {
                ...state,
                isLoading: false,
        }
        case getType(createPost.createPostSuccess):
            return {
                ...state,
                data: [...state.data, action.payload],
            }
        case getType(updatePost.updatePostSuccess):
            return {
                ...state,
                data: state.data.map( (post) => post._id === action.payload._id ? action.payload : post),
            }
        default:
            return state;
    }
}