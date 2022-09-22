import React, { useState, useRef } from "react";

const TodoAddForm = ({ createTodo, todoDate, todos }) => {
  const formRef = useRef();
  const todoRef = useRef();

  // todos에 저장할 형식
  const addTodoButton = (e) => {
    e.preventDefault();
    if (todoRef.current.value === "") {
      window.alert("할 일을 입력하세요");
      return;
    }
    const todo = {
      id: Date.now(),
      text: todoRef.current.value,
      checked: false,
      date: todoDate,
    };
    formRef.current.reset();
    createTodo(todo);
  };
  return (
    <>
      {/* 아이템 입력 창 */}
      <div>오늘의 할 일??개</div>
      <form ref={formRef}>
        <input ref={todoRef} placeholder="입력하세요" type="text" />
        <button onClick={addTodoButton}>Add</button>
      </form>
    </>
  );
};

export default TodoAddForm;
