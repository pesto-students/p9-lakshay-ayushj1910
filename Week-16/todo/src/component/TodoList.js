import React from "react";
import Todo from "./Todo.js";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((item) => {
        return <Todo key={item.sno} item={item} />;
      })}
    </div>
  );
};

export default TodoList;
