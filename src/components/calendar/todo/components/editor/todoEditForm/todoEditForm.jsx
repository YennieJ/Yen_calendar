import React, { useRef, useState } from "react";

const TodoEditForm = ({ deleteTodo, createTodo, todoItem, checkTodo }) => {
  // const textRef = useRef();

  // const { text } = todoItem;
  const [newText, setNewTest] = useState(todoItem.text);

  const onChangeCheckbox = () => {
    checkTodo({
      ...todoItem,
      checked: todoItem.id ? !todoItem.checked : todoItem.checked,
    });
  };

  // const onChange = (e) => {
  //   if (e.currentTarget === null) {
  //     return;
  //   }
  //   e.preventDefault();
  //   createTodo({
  //     // ...todoItem,
  //     // [e.currentTarget.todo]: e.currentTarget.vaule,
  //   });
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    deleteTodo(todoItem);
  };

  return (
    <li>
      <input type="checkbox" onChange={onChangeCheckbox} />
      <span type="text" value={newText}>
        {newText}
      </span>
      <button onClick={onSubmit}> delete</button>
    </li>
  );
};

export default TodoEditForm;

// import React, { useRef, useState } from "react";

// const TodoEditForm = ({
//   deleteTodo,
//   createTodo,
//   todoItem,
//   todos,
//   setTodos,
// }) => {
//   const nameRef = useRef();

//   // const { text } = todoItem;
//   const [newText, setNewText] = useState(todoItem.text);

//   const onChangeCheckbox = ()=>{
//     const
//   }

//   const onChange = (e) => {
//     if (e.currentTarget === null) {
//       return;
//     }
//     e.preventDefault();
//     createTodo({
//       ...todoItem,
//       [e.currentTarget.todo]: e.currentTarget.vaule,
//     });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     deleteTodo(todoItem);
//   };

//   return (
//     <li>
//       <input type="checkbox" onChange={onChangeCheckbox} />
//       <span type="text" ref={nameRef} value={newText} onChange={onChange}>
//         {newText}
//       </span>
//       <button onClick={onSubmit}> delete</button>
//     </li>
//   );
// };

// export default TodoEditForm;
