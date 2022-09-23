import React, { useState, useEffect } from "react";
import SampleTodoEditForm from "./components/sampletodoEditForm/sampletodoEditForm";
import SampleTodoAddForm from "./components/sampletodoAddForm/sampletodoAddForm";
import * as S from "./sampletodoList.styled";

const SampleTodoList = ({ todoDate }) => {
  const [todos, setTodos] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("Todo_Data");
      if (saved !== null) {
        return JSON.parse(saved);
      } else {
        return [];
      }
    }
  });

  const checkTodo = (todo) =>
    setTodos((todos) => {
      const updated = { ...todos };
      updated[todo.id] = todo;
      return updated;
    });

  const createTodo = (todo) => {
    setTodos((todos) => {
      const updated = { ...todos };
      updated[todo.id] = todo;
      return updated;
    });
  };

  const deleteTodo = (todo) =>
    setTodos((todos) => {
      const updated = { ...todos };
      delete updated[todo.id];
      return updated;
    });
  //todo = todoitem / todos에 저장된 하나의 아이템 ,, checked가 true일 때 삭제 하고싶다

  // 로컬스토리지 생성
  useEffect(() => {
    window.localStorage.setItem("Todo_Data", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="sampleTodoList">
      <h1>SAMPLE</h1>
      {/* <S.FontTodoList className="폰트사이즈">{todoDate}</S.FontTodoList> */}

      {/* Todo item input form */}
      <SampleTodoAddForm
        createTodo={createTodo}
        todos={todos}
        todoDate={todoDate}
      />

      {/* Todo Item show and edit form */}
      {/* checkedList : false N true(uncheck N check)를 통해서 해야 할 일과 완료 된 일 구분하기  */}
      <S.GridTodoEdit className="그리드만들기">
        <SampleTodoEditForm
          title={"SampleTodoList"}
          checkTodo={checkTodo}
          createTodo={createTodo}
          deleteTodo={deleteTodo}
          todos={todos}
          setTodos={setTodos}
          checkedList={false}
          todoDate={todoDate}
        />
        <SampleTodoEditForm
          title={"Done"}
          checkTodo={checkTodo}
          createTodo={createTodo}
          deleteTodo={deleteTodo}
          todos={todos}
          todoDate={todoDate}
          setTodos={setTodos}
          checkedList={true}
        />
      </S.GridTodoEdit>
    </div>
  );
};

export default SampleTodoList;
