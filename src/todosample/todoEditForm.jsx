import React from "react";
import { useRef } from "react";

const TodoEditForms = ({ deleteTodo, createTodo, todo }) => {
  const nameRef = useRef();
  const companyRef = useRef();

  const { name, company } = todo;

  const onChange = (e) => {
    if (e.currentTarget == null) {
      return;
    }
    e.preventDefault();
    createTodo({
      ...todo,
      [e.currentTarget.name]: e.currentTarget.vaule,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    deleteTodo(todo);
  };

  return (
    <form>
      <input type="text" ref={nameRef} value={name} onChange={onChange} />
      <input type="text" ref={companyRef} vaule={company} onChange={onChange} />
      <button onClick={onSubmit}> delete</button>
    </form>
  );
};

export default TodoEditForms;
