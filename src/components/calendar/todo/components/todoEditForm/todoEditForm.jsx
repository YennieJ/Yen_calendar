import React from "react";
import TodoForm from "./todoForm/todoForm";

const todoEditForm = ({
  checkTodo,
  deleteTodo,
  createTodo,
  todos,
  checkedList,
  title,
  selectedDateData,
}) => (
  <section>
    <p>{title}</p>
    <ul>
      {selectedDateData.map((todoItem) => {
        // checkedList 가 false면 todoItem 숨기기
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
