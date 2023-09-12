import {CREATE,FETCH_POST, ALL_POST,UPDATE, DELETE,GET_POST} from '../actions/types';

// REDUCER FOR POST VIEW AND CREATE

export default(posts=[], action) => {
    switch (action.type) {
        case FETCH_POST:
        case ALL_POST:
            return action.payload;
        case CREATE:
            return[...posts, action.payload];
        case UPDATE:
            return posts.map((post) => post._id === action.payload.id ? action.payload : post);
        case DELETE:
            return posts.filter((post) => post.id !== action.payload);
        case GET_POST:
            return action.payload
        default:
            return posts
    }
}