import React, { useRef } from "react";

import Button from "components/button";

import * as S from "./todoAddForm.styled";

const TodoAddForm = ({ createTodo, todoDate }) => {
  const formRef = useRef();
  const todoRef = useRef();

  // todos에 저장할 형식
  const addTodoButton = () => {
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

  //Enter로도 같은 값 얻기 위해
  const handleAddTodo = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTodoButton();
    }
  };

  return (
    <>
      {/* 아이템 입력 창 */}
      {/* <div>오늘의 할 일??개</div> */}
      <S.Container ref={formRef}>
        <S.TodoInput ref={todoRef} onKeyPress={handleAddTodo} />
        <Button type="plus" handleClick={addTodoButton} />
      </S.Container>
    </>
  );
};

export default TodoAddForm;
