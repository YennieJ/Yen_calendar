import React, { useState } from "react";
import dayjs from "dayjs";
import "@fortawesome/fontawesome-free/js/all.js";
import CalendarHead from "../components/calendar/calendarHead/calendarHead";
import CalendarBody from "../components/calendar/calendarBody/calendarBody";

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
      <CalendarBody date={date} todoDate={todoDate} setTodoDate={setTodoDate} />
    </div>
  );
};

export default Calendar;

{
  /* <div className="calendarbottom"></div>
      <CalendarBody date={date} todoDate={todoDate} setTodoDate={setTodoDate} />
      <Todo todoDate={todoDate} /> */
}
