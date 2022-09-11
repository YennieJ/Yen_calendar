import React, { useRef } from "react";

const TodoAddForm = ({ onAdd, todos }) => {
  const formRef = useRef();
  const nameRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: Object.keys(todos).length + 1,
      text: nameRef.current.value,
      checked: false,
    };
    formRef.current.reset();
    onAdd(todo);
  };
  return (
    <form ref={formRef}>
      <input ref={nameRef} type="text" />
      <button onClick={onSubmit}>Add</button>
    </form>
  );
};

export default TodoAddForm;
