import React, { useState } from "react";
import dayjs from "dayjs";
import "@fortawesome/fontawesome-free/js/all.js";
import Todo from "./todoList/todoList";
import CalendarBody from "./components/calendarBody/calendarBody";
import CalendarHead from "./components/calendarHead/calendarHead";

const Calendar = () => {
  const today = dayjs();
  const [date, setDate] = useState(today);
  const [todoDate, setTodoDate] = useState(date.format("YYYYMMDD"));

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

  return (
    <div className="wrapper">
      <CalendarHead date={date} setDate={setDate} setTodoDate={setTodoDate} />
      <div className="calendarbottom"></div>
      <CalendarBody date={date} todoDate={todoDate} setTodoDate={setTodoDate} />
      <Todo todoDate={todoDate} />
    </div>
  );
};

export default Calendar;
