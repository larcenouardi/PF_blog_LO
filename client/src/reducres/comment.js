import { ALL_COMMNET, COMMENT,EDIT_COMMENT,GET_COMMENT,DELETE,COMMENTS} from '../actions/types';

// ------------------- COMMENT REDUCERS --------------------------------
export default (comment = [] , action) =>{
    switch (action.type) {
        case COMMENT:
            return[...comment, action.payload];
        case GET_COMMENT :
        case ALL_COMMNET :
        case COMMENTS:
            return action.payload;
        case EDIT_COMMENT:
            return comment.map((post) => post.id === action.payload.id ? action.payload : post);
        case DELETE:
            return comment.filter((post) => post.id !== action.payload);
        default:
            return comment
    }
}