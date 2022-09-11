import React from "react";
import TodoEditForm from "./todoEditForm/todoEditForm";
import TodoAddForm from "./todoAddForm/todoAddForm";

const Editor = ({ checkTodo, deleteTodo, createTodo, todos }) => (
  <section>
    <TodoAddForm onAdd={createTodo} todos={todos} />
    <ul>
      {todos &&
        Object.keys(todos).map((todoitem, i) => (
          <TodoEditForm
            key={i}
            todoItem={todos[todoitem]}
            createTodo={createTodo}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
          />
        ))}
    </ul>
  </section>
);
export default Editor;
