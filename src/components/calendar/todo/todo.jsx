import React, { useState, useEffect } from "react";
import TodoEditForm from "./components/todoEditForm/todoEditForm";
import TodoAddForm from "./components/todoAddForm/todoAddForm";

const Todo = ({ date }) => {
  const [todos, setTodos] = useState({});

  const checkTodo = (todo) =>
    setTodos((todos) => {
      const updated = { ...todos };
      updated[todo.id] = todo;
      return updated;
    });

  const createTodo = (todo) =>
    setTodos((todos) => {
      const updated = { ...todos };
      updated[todo.id] = todo;
      return updated;
    });

  const deleteTodo = (todo) =>
    setTodos((todos) => {
      const updated = { ...todos };
      delete updated[todo.id];
      return updated;
    });
  //todo = todoitem / todos에 저장된 하나의 아이템 ,, checked가 true일 때 삭제 하고싶다

  return (
    <div>
      {/* Todo item input form */}
      <TodoAddForm createTodo={createTodo} todos={todos} date={date} />

      {/* Todo Item show and edit form */}
      {/* checkedList : false N true(uncheck N check)를 통해서 해야 할 일과 완료 된 일 구분하기  */}
      <TodoEditForm
        title={"오늘의 할 일"}
        checkTodo={checkTodo}
        createTodo={createTodo}
        deleteTodo={deleteTodo}
        todos={todos}
        setTodos={setTodos}
        date={date}
        checkedList={false}
      />
      <TodoEditForm
        title={"완료된 항목"}
        checkTodo={checkTodo}
        createTodo={createTodo}
        deleteTodo={deleteTodo}
        todos={todos}
        setTodos={setTodos}
        date={date}
        checkedList={true}
      />
    </div>
  );
};

export default Todo;
// const [todoList, setTodoList] = useState([]);
// () => JSON.parse(window.localStorage.getItem("todo")) || console.log(todoList);
// return (
// <div>
//   {/* ToDo Item을 추가할 수 있는 input 박스 */}
//   <InputBox todoList={todoList} setTodoList={setTodoList} />

//   {/* 할 일 Item 리스트 */}
//   <ToDoItemList
//     title={"할 일"}
//     todoList={todoList}
//     setTodoList={setTodoList}
//     checkedList={false} // (체크되지 않은) 할 일 목록
//   />

//     {/* <ToDoItemList
//         title={"없앨꺼야"}
//         todoList={todoList}
//         setTodoList={setTodoList}
//         checkedList={true} // (체크되어 있는)완료한 목록
//       /> */}
//   </div>
// );
