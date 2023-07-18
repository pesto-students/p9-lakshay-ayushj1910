import React, { useState } from "react";

const Addtodo = ({ addTodo }) => {
  const submit = (e) => {
    e.preventDefault();
    if (!desc || !title) {
      alert("desc or title is blank");
    }
    addTodo(title, desc);
    SetTitle("");
    SetDesc("");
  };
  const [title, SetTitle] = useState("");
  const [desc, SetDesc] = useState("");
  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          value={title}
          htmlFor="title"
          type="text"
          onChange={(e) => {
            SetTitle(e.target.value);
          }}
        />
        <br />
        <label htmlFor="desc">Description</label>
        <br />
        <input
          value={desc}
          htmlFor="desc"
          type="text"
          onChange={(e) => {
            SetDesc(e.target.value);
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Addtodo;
