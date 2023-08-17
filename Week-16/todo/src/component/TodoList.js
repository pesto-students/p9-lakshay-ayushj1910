import React from "react";
import Todo from "./Todo.js";

const TodoList = (props) => {
  return (
    <div>
      {props.todos.length === 0
        ? "No Todos"
        : props.todos.map((item) => {
            return (
              <Todo key={item.sno} item={item} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};

export default TodoList;
