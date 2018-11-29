import React from "react";
import { connect } from "react-redux";

import { toggleComplete } from "../redux/actions";

const Todo = props => {
  const todo = props.todo;
  return (
    <li
      className="item"
      style={{
        textDecoration: todo.complete ? "line-through" : "none"
      }}
      onClick={() => props.toggleComplete(todo)}
    >
      {props.todo.text}
    </li>
  );
};

// map dispatch to props, fire off an action that toggles the todo object's 'complete' property

const mapDispatchToProps = dispatch => {
  return {
    toggleComplete: todo => dispatch(toggleComplete(todo))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Todo);
