import React, { useState, useEffect } from "react";
import InputBox from "./components/inputBox/inputBox";
import ToDoItemList from "./components/todoItemList/todoItemList";

const Todo = () => {
  const [todoList, setTodoList] = useState(
    () => JSON.parse(window.localStorage.getItem("todo")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  console.log(todoList);

  return (
    <div>
      {/* ToDo Item을 추가할 수 있는 input 박스 */}
      <InputBox todoList={todoList} setTodoList={setTodoList} />

      {/* 할 일 Item 리스트 */}
      <ToDoItemList
        title={"할 일"}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={false} // (체크되지 않은) 할 일 목록
      />
    </div>
  );
};

export default Todo;
