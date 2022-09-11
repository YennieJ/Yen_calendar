import React, { useState, useRef } from "react";

const Checkbox = () => {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const [edited, setEdited] = useState(false);
  // const [newText, setNewTest] = useState(todoItem.text);

  const onChangeInput = (e) => {
    setText(e.target.value);
  };
  const onPressSubmitButton = (e) => {
    e.preventDefault();

    // todoItemList에 값 추가
    const nextTodoList = todoList.concat({
      id: todoList.length + 2,
      text,
      checked: false,
      deleted: false,
    });
    setTodoList(nextTodoList);

    // input 값 초기화 및 포커싱
    setText("");
    inputRef.current.focus();
  };
  return (
    <>
      <form onSubmit={onPressSubmitButton} className="todoapp__inputbox">
        {/* 아이템 내용 입력 input */}
        <input
          type="text"
          name="todoItem"
          value={text}
          ref={inputRef}
          placeholder="할 일을 입력해주세요"
          className="todoapp__inputbox-inp"
          onChange={onChangeInput}
        />
        {/* 입력 후 아이템 추가 버튼 */}
        <button type="submit" className="todoapp__inputbox-add-btn">
          추가
        </button>
      </form>
    </>
  );
};
export default Checkbox;
