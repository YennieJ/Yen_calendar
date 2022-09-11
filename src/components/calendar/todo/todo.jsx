import React, { useState, useEffect } from "react";
import Editor from "./components/editor/editor";
import InputBox from "./components/inputBox/inputBox";
import TodoItem from "./components/todoItemList/todoItem/todoItem";
import ToDoItemList from "./components/todoItemList/todoItemList";

const Todo = () => {
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

  const [todoList, setTodoList] = useState([]);

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
      <Editor
        checkTodo={checkTodo}
        createTodo={createTodo}
        deleteTodo={deleteTodo}
        todos={todos}
        setTodos={setTodos}
        checkList={false}
      />
    </div>
  );
};

export default Todo;
// const [todoList, setTodoList] = useState([]);
// () => JSON.parse(window.localStorage.getItem("todo")) || console.log(todoList);
// return (
//   <div>
//     {/* ToDo Item을 추가할 수 있는 input 박스 */}
//     <InputBox todoList={todoList} setTodoList={setTodoList} />

//     {/* 할 일 Item 리스트 */}
//     <ToDoItemList
//       title={"할 일"}
//       todoList={todoList}
//       setTodoList={setTodoList}
//       checkedList={false} // (체크되지 않은) 할 일 목록
//     />

//     {/* <ToDoItemList
//         title={"없앨꺼야"}
//         todoList={todoList}
//         setTodoList={setTodoList}
//         checkedList={true} // (체크되어 있는)완료한 목록
//       /> */}
//   </div>
// );
