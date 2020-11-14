import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments'

//combine mutiple reducers into one
export default combineReducers({
    comments: commentsReducer
});

