// this is where most of the 'plumbing' exists

// function that creates the redux store
import { createStore } from "redux";

// reducer that describes all of the instructions for how state should change
import todosReducer from "./reducers/reducer";

// actual instance of our store
const store = createStore(
  todosReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
