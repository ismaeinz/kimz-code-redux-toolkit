import { createStore } from "redux";

const initialState = { value: 1, showCounter: true };

const counterReducer = (state = initialState, action) => {
  // actions
  console.log(action);
  if (action.type === "increase") {
    return {
      ...state,
      value: state.value + 1,
    };
  }
  if (action.type === "decrease") {
    return {
      ...state,
      value: state.value - 1,
    };
  }
  if (action.type === "payload") {
    return {
      ...state,
      value: state.value + action.payload,
    };
  }

  if (action.type === "toggleCounter") {
    return { ...state, showCounter: (state.showCounter = !state.showCounter) };
  }
  //
  return state;
};

const store = createStore(counterReducer);
export default store;
