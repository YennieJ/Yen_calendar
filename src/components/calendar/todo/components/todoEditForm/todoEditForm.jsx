import React from "react";
import TodoForm from "./todoForm/todoForm";

const todoEditForm = ({
  checkTodo,
  deleteTodo,
  createTodo,
  todos,
  checkedList,
  title,
}) => (
  <section>
    <p>{title}</p>
    <ul>
      {todos && // todos가 있을때
        Object.keys(todos).map((todoItem) => {
          // checkedList 가 false면 보여주지 않는다.
          if (checkedList !== todos[todoItem].checked) return null;
          return (
            <TodoForm
              key={todoItem}
              todoItem={todos[todoItem]}
              createTodo={createTodo}
              deleteTodo={deleteTodo}
              checkTodo={checkTodo}
            />
          );
        })}
    </ul>
  </section>
);
export default todoEditForm;
