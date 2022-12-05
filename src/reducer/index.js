import { combineReducers } from "redux";
import { INCREMENT, DECREMENT, INCREMENT_IF_ODD } from "../actions/actionTypes";

export default combineReducers({
  counter: (state = 0, action) => {
    console.log(state, action);
    console.log("hi");
    switch (action.type) {
      case INCREMENT:
        return state + 1;
      case DECREMENT:
        return state - 1;
      case INCREMENT_IF_ODD:
        return state % 2 ? state + 1 : state;
      default:
        return state;
    }
  }
});
