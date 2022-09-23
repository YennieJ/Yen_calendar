import React from "react";
import Button from "./sampletodoForm/button/button";
import SampleTodoForm from "./sampletodoForm/sampletodoForm";

const SampleTodoEditForm = ({
  checkTodo,
  deleteTodo,
  createTodo,
  todos,
  title,
  todoDate,
  checkedList,
}) => {
  // 해당 날짜에 대한 todoList
  const selectedDateData = Object.keys(todos).filter(
    (item) => todos[item].date === todoDate
  );

  return (
    <section>
      <p>{title}</p>
      {/* <Button /> */}
      <ul>
        {selectedDateData.map((todoItem) => {
          // checkedList 가 false면 todoItem 숨기기
          if (checkedList !== todos[todoItem].checked) return null;
          return (
            <SampleTodoForm
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
};
export default SampleTodoEditForm;
