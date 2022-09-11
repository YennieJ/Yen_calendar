import React from "react";
import TodAddForm from "./todAddForm";
import TodoEditForm from "./todoEditForm";

const Editors = ({ deleteTodo, createTodo, todos }) => (
  <section>
    {Object.keys(todos).map((key) => (
      <TodoEditForm
        key={key}
        todo={todos[key]}
        createTodo={createTodo}
        deleteTodo={deleteTodo}
      />
    ))}
    <TodAddForm onnAdd={createTodo} />
  </section>
);

export default Editors;
