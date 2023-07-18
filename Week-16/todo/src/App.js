import "./App.css";
import Addtodo from "./component/Addtodo";
import TodoList from "./component/TodoList.js";

function App() {
  const todos = [
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
  ];
  return (
    <div className="App">
      <Addtodo />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
