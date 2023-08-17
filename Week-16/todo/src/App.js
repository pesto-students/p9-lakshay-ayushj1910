import "./App.css";
import { useState } from "react";
import Addtodo from "./component/Addtodo";
import TodoList from "./component/TodoList.js";

function App() {
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    const todo = {
      sno: todos.length + 1,
      title: title,
      desc: desc,
    };
    setTodos([...todos, todo]);
  };
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Addtodo addTodo={addTodo} />
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
