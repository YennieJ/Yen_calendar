import React, { useState, useRef } from "react";
import dayjs from "dayjs";
import "@fortawesome/fontawesome-free/js/all.js";
import { useEffect } from "react";
import Checkbox from "../../common/checkbox";
import Todo from "./todo/todo";

const Calendar = () => {
  const weekday = require("dayjs/plugin/weekday");
  const weekOfYear = require("dayjs/plugin/weekOfYear");

  dayjs.extend(weekday);
  dayjs.extend(weekOfYear);

  const [date, setDate] = useState(dayjs());

  // ?true(1):다음 달 :false(0)는 이전 달
  const controlMonth = (e) =>
    e
      ? setDate(date.clone().add(30, "day"))
      : setDate(date.clone().subtract(30, "day"));

  // // 이전 달
  // const prevMonth = () => {
  //   const minus = date.subtract(1, "M");
  //   setDate(minus);
  // };
  // // 다음 달
  // const nextMonth = () => {
  //   const plus = date.add(1, "M");
  //   setDate(plus);
  // };

  //오늘로

  const goToday = () => {
    setDate(dayjs());
    // inputRef.current.focus();
  };

  // 요일
  const week = [];
  for (let i = 0; i < 7; i++) {
    week.push(
      <div className="day" key={i}>
        {dayjs().weekday(i).format("ddd")}
      </div>
    );
  }

  //todo 를 위한
  // const formRef = useRef();
  // const inputRef = useRef();
  // const [todoLists, setTodoLists] = useState(
  //   () => JSON.parse(window.localStorage.getItem("todo")) || []
  // );
  // const [todoDate, setTodoDate] = useState(date.format("YYYYMMDD"));
  ////

  // const handleInputbutton = (event) => {
  //   event.preventDefault();
  //   setTodoLists([...todoLists, inputRef.current.value]);
  //   formRef.current.reset();
  //   inputRef.current.focus();
  // };

  // useEffect(() => {
  //   window.localStorage.setItem("todo", JSON.stringify(todoLists));
  // }, [todoLists]);
  // ///

  // const todoList = todoLists.map((todo, i) => (
  //   <div key={i}>
  //     <input type="checkbox" />
  //     <span>{todo}</span>
  //   </div>
  // ));

  ////////////
  const showDate = () => {
    // 초기값은 오늘
    const today = date;
    // 진짜 오늘을 위해서
    const fixToday = dayjs();

    // startOf: 주어진 시간 단위의 시작으로 설정되도록 변경하는 데 사용.(년, 월, 분기, 주, 일, 시, 분 및 초)
    // week():52주 중에 몇번째 주 인지.
    const startWeek = today.startOf("month").week();
    // 해당 년도 첫번째 줄을 53으로
    const endWeek =
      today.endOf("month").week() === 1
        ? 53
        : today.clone().endOf("month").week();

    // dates 라는 빈배열을 만듬.
    const dates = [];
    // 시작 주부터 끝나는 주까지 1씩 증가
    // 길이가 7개인 배열에 0으로 채우고, map (현재값,인덱스)로 배열 재설정
    for (let week = startWeek; week <= endWeek; week++) {
      dates.push(
        <div className="dates" key={week}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              // n: 이번 달이 5주라면 35개 i: 0123456
              let current = today
                .clone()
                .startOf("week")
                .week(week)
                .add(n + i, "day");
              //오늘 표시하기
              let isToday =
                fixToday.format("YYYYMMDD") === current.format("YYYYMMDD")
                  ? "today"
                  : "";
              //이번 달이 아닌 다른 달의 날짜면 회색으로
              let isGrayed =
                current.format("MM") !== today.format("MM") ? "grayed" : "";

              return (
                <div className={`box ${isToday} ${isGrayed}`} key={i}>
                  <div
                    className="text"
                    // onClick={() => {
                    //   setTodoDate(current.format("YYYYMMDD"));
                    //   inputRef.current.focus();
                    // }}
                    //
                  >
                    {current.format("DD")}
                  </div>
                  {/* <div>{todoLists.length}</div> */}
                </div>
              );
            })}
        </div>
      );
    }

    return dates;
  };

  return (
    <div className="wrapper">
      <div className="calendar">
        <div className="calendarHead">
          <div className="year">{date.format("YYYY")}</div>
          <div className="controlMonth">
            {/* onClick 콜백함수 필요함(Too many lendering) */}
            <div className="month-button" onClick={() => controlMonth(0)}>
              <i className="fa-solid fa-angle-left"></i>
            </div>
            <div className="month">{date.format("MMMM")}</div>

            <div className="month-button" onClick={() => controlMonth(1)}>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div className="today" onClick={goToday}>
            Today
          </div>
        </div>
        <div className="calendarBody">
          <div className="week">{week}</div>
          {showDate()}
        </div>
      </div>
      {/* <div className="todo">
        <div>{todoDate}</div>
        <div>{`오늘의 할일 ${todoLists.length}개`}</div>

        <form ref={formRef} className="write">
          <input ref={inputRef} type="text" />
          <button onClick={handleInputbutton}>추가</button>
        </form>
        {todoList}
      </div> */}
      <Todo></Todo>
    </div>
  );
};

export default Calendar;
