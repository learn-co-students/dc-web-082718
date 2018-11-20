// reducer receives action objects that have been dispatched in response
// to some event (i.e. componentDidMount, onSubmit, onClick etc)

const todosReducer = (state = [], action) => {
  //switch over the action object's 'type' property to decide HOW
  // the state is updated
  switch (action.type) {
    // when action.type === "LOAD_DATA," we return the data to our store
    // (in this case, an object with an array of 'todos')
    case "LOAD_DATA":
      return action.data;
    // when action.type === 'ADD_TODO', we return a copy of our previous state...
    // WITH the new todo appended to the end using es6 spread syntax
    case "ADD_TODO":
      // return a copy of current state with new todo added
      return {
        todos: [...state.todos, { text: action.todo, complete: false }]
      };

    // when action.type does not match any of the cases above, simply return the state as-is
    default:
      return state;
  }
};

export default todosReducer;
