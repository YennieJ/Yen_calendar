import React, { useRef, useState, useEffect } from "react";

const TodoForm = ({ deleteTodo, createTodo, todoItem, checkTodo }) => {
  const [editedMode, setEditedMode] = useState(false);
  const [newText, setNewText] = useState(todoItem.text);

  const editInputRef = useRef(null);

  useEffect(() => {
    // edit 모드일때 포커스
    if (editedMode) {
      editInputRef.current.focus();
    }
  }, [editedMode]);

  const handleCheckbox = () => {
    checkTodo({
      ...todoItem,
      checked: todoItem.id ? !todoItem.checked : todoItem.checked,
    });
  };

  //수정 버튼 코드: 수정하기 누르면 수정 완료코드로, 수정 완료 누르면 handleNewText와 같은 효과
  //뭔가 코드가 복잡한 느낌인걸..?
  const toggleEditButton = () => {
    if (editedMode === false) {
      setEditedMode(true);
    } else {
      createTodo({
        ...todoItem,
        text: (todoItem.text = newText),
      });
      setEditedMode(false);
    }
  };

  //show todo를 위한
  const onChangeEditInput = (e) => {
    setNewText(e.currentTarget.value);
  };

  const handleNewText = (e) => {
    if (e.key === "Enter") {
      createTodo({
        ...todoItem,
        text: (todoItem.text = newText),
      });
      setEditedMode(false);
    }
  };

  //delete todo를 위한
  const deletedTodo = (e) => {
    e.preventDefault();
    if (window.confirm("지우시겠습니까?")) deleteTodo(todoItem);
  };
  return (
    <>
      <li>
        {/* 아이템 완료 체크,체크해제를 위한 */}
        <input
          type="checkbox"
          checked={todoItem.checked}
          onChange={handleCheckbox}
        />
        {
          // todoItem 내용: editedMode가 true일땐 input,false일땐 span
          editedMode ? (
            <input
              type="text"
              value={newText}
              ref={editInputRef}
              onChange={onChangeEditInput}
              onKeyPress={handleNewText}
            ></input>
          ) : (
            <span className="newText">{newText}</span>
          )
        }

        {
          // uncheck 상태 (=오늘의할일) 때 수정버튼 토글
          // check 상태 (=완료된 항목) 때 수정버튼 숨기기
          !todoItem.checked ? (
            editedMode ? (
              <button type="button" onClick={toggleEditButton}>
                수정완료
              </button>
            ) : (
              <button type="button" onClick={toggleEditButton}>
                수정하기
              </button>
            )
          ) : null
        }

        <button onClick={deletedTodo}> delete</button>
      </li>
    </>
  );
};

export default TodoForm;
