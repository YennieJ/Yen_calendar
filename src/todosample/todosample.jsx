import React, { useState } from "react";
import Editor from "./Editor";

const Todosample = () => {
  const [todos, setTodos] = useState({});

  const createTodo = (todo) =>
    setTodos((todos) => {
      const updated = { ...todos };
      updated[todo.id] = todo;
      return updated;
    });

  const deleteTodo = (todo) =>
    setTodos((todos) => {
      const updated = { ...todos };
      delete updated[todo.id];
      return updated;
    });

  console.log(todos);
  return (
    <div>
      <Editor createTodo={createTodo} deleteTodo={deleteTodo} todos={todos} />
    </div>
  );
};

export default Todosample;
