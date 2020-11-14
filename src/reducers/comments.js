//make default state as empty list of comments
import  { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

//state provided by reducer, and actiontype
export default function(state = [], action) {
    switch(action.type) {
        case SAVE_COMMENT:
            //add on top of exising state
            return [...state, action.payload];
        case FETCH_COMMENTS:
            const comments = action.payload.data.map(comment => comment.name);
            return [...state, ...comments];
        default:
            return state;
    }
} 