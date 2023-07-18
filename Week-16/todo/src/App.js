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
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "some work 1",
      desc: "desc 1",
    },
    {
      sno: 2,
      title: "some work 2",
      desc: "desc 2",
    },
    {
      sno: 3,
      title: "some work 3",
      desc: "desc 3",
    },
  ]);
  return (
    <div className="App">
      <Addtodo />
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
