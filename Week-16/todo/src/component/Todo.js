import React from "react";

const Todo = ({ item }) => {
  const deleteBtn = {
    backgroundColor: "red",
    color: "white",
  };
  return (
    <div style={{ margin: "20px", textAlign: "left" }}>
      <h3 style={{ margin: 0 }}>{item.title}</h3>
      <p style={{ margin: 0 }}>{item.desc}</p>
      <button style={deleteBtn}>Delete</button>
    </div>
  );
};

export default Todo;
