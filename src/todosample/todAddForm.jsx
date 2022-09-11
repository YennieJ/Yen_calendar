import React, { useRef } from "react";

const TodAddForms = ({ onnAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: Date.now(),
      name: nameRef.current.value,
    };
    formRef.current.reset();
    onnAdd(todo);
  };
  return (
    <form ref={formRef}>
      <input ref={nameRef} type="text" />
      <button onClick={onSubmit}>ADd</button>
    </form>
  );
};

export default TodAddForms;
