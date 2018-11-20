import React from "react";

const Todo = props => {
  // no redux to see here
  return (
    <li
      style={{
        textDecoration: props.todo.complete ? "line-through" : "none"
      }}
    >
      {props.todo.text}
    </li>
  );
};

export default Todo;
