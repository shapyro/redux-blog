import { FETCH_POSTS, FETCH_POST } from '../actions'

export default function(state = {}, action) {
  switch(action.type) {
  case FETCH_POST:
    // const post = action.payload.data;
    // const newState = { ...state };
    // newState[post.id] = post;
    // return newState;
    
    return { ...state, [action.payload.data.id]: action.payload.data }
  case FETCH_POSTS:
    return action.payload.data; // [ post1, post2 ]
  default:
    return state;
  }
}