import { SET_EVENTS } from '../actions';

export default function catReducer(state = [], action=[]) {
  switch(action.type) {
    case SET_EVENTS:
     return action.items;
    default:
      return state;
  }
}
