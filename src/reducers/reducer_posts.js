import { FETCH_POSTS } from '../actions'

export default function(state = {}, action) {
  switch(action.type) {
  case FETCH_POSTS:
    return action.payload.data; // [ post1, post2 ]
  default:
    return state;
  }
}