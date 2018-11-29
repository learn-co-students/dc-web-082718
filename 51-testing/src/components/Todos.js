import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

const Todos = ({ todos }) => {
  console.log(todos);
  let style = {
    listStyleType: "none",
    textAlign: "center"
  };

  return (
    <div>
      <ul style={style} className="ui middle aligned list">
        {todos ? todos.map(todo => <Todo todo={todo} key={todo.id} />) : null}
      </ul>
    </div>
  );
};

// this function accepts 'state' as the argument,
// and returns an object of props equal to specific values from the state
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

// connect wraps the <Todos/> component with the additional props taken from state above.
// in this case, it connects the component with the array of todos now in the state
export default connect(mapStateToProps)(Todos);
