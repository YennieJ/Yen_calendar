import React from "react";
import TodoItem from "./todoItem/todoItem";

const TodoItemList = ({ title, todoList, setTodoList, checkedList }) => {
  return (
    <div className="todoapp__list">
      {/* props로 부터 title 값을 전달 받음 */}
      <p className="todoapp__list-tit">{title}</p>

      <ul className="todoapp__list-ul">
        {todoList && // todoList가 있을때만 출력
          todoList.map((todoItem) => (
            // map을 이용하여 ToDoItem을 출력
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoItemList;

// const TodoItemList = ({ title, todoList, setTodoList, checkedList }) => (
//   <div className="todoapp__list">
//     {/* props로 부터 title 값을 전달 받음 */}
//     <p className="todoapp__list-tit">{title}</p>

//     <ul className="todoapp__list-ul">
//       {todoList && // todoList가 있을때만 출력
//         todoList.map((todoItem) => {
//           // 삭제한 항목인 경우, 출력하지 않음 (deleted가 true)
//           if (todoItem.deleted === true) return null;

//           // checkedList 값에 따라 '할 일 목록' 또는 '완료한 목록'을 출력
//           // if (checkedList !== todoItem.checked) return;

//           return (
//             // map을 이용하여 ToDoItem을 출력
//             <TodoItem
//               key={todoItem.id}
//               todoItem={todoItem}
//               todoList={todoList}
//               setTodoList={setTodoList}
//             />
//           );
//         })}
//     </ul>
//   </div>
// );

// const deleteCard = (card) => {
//   setCards((cards) => {
//     const updated = { ...cards };
//     delete updated[card.id];
//     //delete 연산자
//     return updated;
//   });
//   cardRepository.removeCard(userId, card);
// };
