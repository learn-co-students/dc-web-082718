// reducer receives action objects that have been dispatched in response
// to some event (i.e. componentDidMount, onSubmit, onClick etc)
import { LOAD_DATA, ADD_TODO, TOGGLE_COMPLETE } from "../actions/types";

const todosReducer = (state = [], action) => {
  //switch over the action object's 'type' property to decide HOW
  // the state is updated
  switch (action.type) {
    // when action.type === "LOAD_DATA," we return the data to our store
    // (in this case, an object with an array of 'todos')
    case LOAD_DATA:
      return action.data;
    // when action.type === 'ADD_TODO', we return a copy of our previous state...
    // WITH the new todo appended to the end using es6 spread syntax
    case ADD_TODO:
      // return a copy of current state with new todo added
      let lastTodoId = state.todos[state.todos.length - 1].id;
      return {
        todos: [
          ...state.todos,
          {
            id: parseInt(lastTodoId + 1),
            text: action.todo,
            complete: false
          }
        ]
      };
    case TOGGLE_COMPLETE:
      // console.log("action todo", action.todo);
      // console.log("state todos", state.todos);
      return {
        todos: state.todos.map(todo => {
          if (todo.text === action.todo.text) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        })
      };

    // when action.type does not match any of the cases above, simply return the state as-is
    default:
      return state;
  }
};

export default todosReducer;
