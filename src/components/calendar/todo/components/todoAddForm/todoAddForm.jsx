import React, { useState, useRef } from "react";

const TodoAddForm = ({ createTodo, date }) => {
  const formRef = useRef();
  const todoRef = useRef();

  // todos에 저장할 형식
  const addTodoButton = (e) => {
    e.preventDefault();
    const todo = {
      id: Date.now(),
      text: todoRef.current.value || "",
      checked: false,
    };
    formRef.current.reset();
    createTodo(todo);
  };

  const [todoDate, setTodoDate] = useState(date.format("YYYYMMDD"));

  return (
    <>
      {/* 아이템 입력 창 */}
      <div>{todoDate}</div>
      <form ref={formRef}>
        <input ref={todoRef} placeholder="할일을 입력하세요" type="text" />
        <button onClick={addTodoButton}>Add</button>
      </form>
    </>
  );
};

export default TodoAddForm;
