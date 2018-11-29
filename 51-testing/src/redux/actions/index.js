// mock data - this will be the 'jumping off point' for the todo app.
// IRL, this data is more likely to come from somewhere else, like a database or an API.
// in that case, things get trickier - see the lesson on Async Redux and Thunk for examples
import { TOGGLE_COMPLETE, ADD_TODO, LOAD_DATA } from "./types";

const mockData = {
  todos: [
    { id: 1, text: "learn redux", complete: true },
    { id: 2, text: "build a cool project", complete: false },
    { id: 3, text: "Make more bruno emojis", complete: false },
    { id: 4, text: "Learn Jest and Enzyme", complete: false },
    { id: 5, text: "Add tests to your project", complete: false }
  ]
};
// Action creator that returns an action object with  type of "LOAD_DATA" and
// the aforementioned 'mockData' object as its payload. Dispatched when 'App.js' mounts
export function loadData() {
  return { type: LOAD_DATA, data: mockData };
}

// Action creator that returns an action object with type of 'ADD_TODO' and
// the user's input (from AddTodo.js) as its payload. Dispatched when the form on 'AddTodo.js'
// is submitted
export function addTodo(todo) {
  return { type: ADD_TODO, todo: todo };
}

export function toggleComplete(todo) {
  return { type: TOGGLE_COMPLETE, todo: todo };
}
