// mock data - this will be the 'jumping off point' for the todo app.
// IRL, this data is more likely to come from somewhere else, like a database or an API.
// in that case, things get trickier - see the lesson on `Async Redux and Thunk` for examples
const mockData = {
  todos: [
    { text: "learn redux", complete: false },
    { text: "build a cool project", complete: false },
    { text: "Make more bruno emojis", complete: true }
  ]
};

// Action creator that returns an action object with  type of "LOAD_DATA" and
// the aforementioned 'mockData' object as its payload. Dispatched when 'App.js' mounts
export function loadData() {
  return { type: "LOAD_DATA", data: mockData };
}

// Action creator that returns an action object with type of 'ADD_TODO' and
// the user's input (from AddTodo.js) as its payload.
// Dispatched when the form on 'AddTodo.js' is submitted
export function addTodo(todo) {
  return { type: "ADD_TODO", todo: todo };
}
