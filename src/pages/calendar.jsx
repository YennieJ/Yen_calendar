import React, { useState } from "react";
import dayjs from "dayjs";
import "@fortawesome/fontawesome-free/js/all.js";
import CalendarHead from "../components/calendar/calendarHead/calendarHead";
import CalendarBody from "../components/calendar/calendarBody/calendarBody";
import Sample from "../components/calendar/calendarBody/sample";
import TodoList from "../components/todoList/todoList";
import SampleTodoList from "../sampletodoList/sampletodoList";

const Calendar = () => {
  const today = dayjs();
  const [date, setDate] = useState(today);
  const [todoDate, setTodoDate] = useState(date.format("YYYYMMDD"));

  // ?true(1)는 다음 달 :false(0)는 이전 달
  const controlMonth = (e) =>
    e ? setDate(date.clone().date(32)) : setDate(date.clone().date(0));

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
      <CalendarHead
        date={date}
        setDate={setDate}
        setTodoDate={setTodoDate}
        controlMonth={controlMonth}
        today={today}
      />
      <CalendarBody
        date={date}
        todoDate={todoDate}
        setTodoDate={setTodoDate}
        controlMonth={controlMonth}
      />
      {/* <Sample
        date={date}
        todoDate={todoDate}
        setTodoDate={setTodoDate}
        controlMonth={controlMonth}
      /> */}
      <TodoList todoDate={todoDate} />
      {/* <SampleTodoList todoDate={todoDate} /> */}
    </div>
  );
};

export default Calendar;
